import qrcodegen from '../utils/qrcodegen.ts';
type Modules = ReturnType<qrcodegen.QrCode['getModules']>;
const UPSCALE_RATIO = 2;

export const useQRCode = () => {
  const drawCanvas = (
    canvas: HTMLCanvasElement,
    qr: qrcodegen.QrCode,
    size: number,
    foregroundColor: string,
    backgroundColor: string,
    iconConfig: {
      icon: HTMLImageElement;
      iconBorderRadius: number;
      iconSize: number;
      iconBackgroundColor: string;
    } | null
  ): void => {
    if (!canvas) return;
    const canvasWidth = size * UPSCALE_RATIO;
    const width = qr.size;
    const scale = canvasWidth / width;
    canvas.width = canvasWidth;
    canvas.height = canvasWidth;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < qr.size; y++) {
      for (let x = 0; x < qr.size; x++) {
        ctx.fillStyle = qr.getModule(x, y) ? foregroundColor : backgroundColor;
        const startX = Math.floor(x * scale);
        const endX = Math.ceil((x + 1) * scale);
        const startY = Math.floor(y * scale);
        const endY = Math.ceil((y + 1) * scale);
        ctx.fillRect(startX, startY, endX - startX, endY - startY);
      }
    }
    if (iconConfig) {
      const { icon, iconBackgroundColor, iconBorderRadius, iconSize } =
        iconConfig;
      const finalIconSize = iconSize * UPSCALE_RATIO;
      const centerX = (canvas.width - finalIconSize) / 2;
      const centerY = (canvas.height - finalIconSize) / 2;
      ctx.fillStyle = iconBackgroundColor;
      ctx.beginPath();
      ctx.roundRect(
        centerX,
        centerY,
        finalIconSize,
        finalIconSize,
        iconBorderRadius * UPSCALE_RATIO
      );
      ctx.fill();
      const aspectRatio = icon.width / icon.height;
      const scaledWidth =
        aspectRatio >= 1 ? finalIconSize : finalIconSize * aspectRatio;
      const scaledHeight =
        aspectRatio <= 1 ? finalIconSize : finalIconSize / aspectRatio;
      const left = centerX + (finalIconSize - scaledWidth) / 2;
      const top = centerY + (finalIconSize - scaledHeight) / 2;
      ctx.drawImage(icon, left, top, scaledWidth, scaledHeight);
    }
  };

  const generatePath = (modules: Modules, margin = 0): string => {
    const ops: string[] = [];
    modules.forEach((row, y) => {
      let start: number | null = null;
      row.forEach((cell, x) => {
        if (!cell && start !== null) {
          // M0 0h7v1H0z injects the space with the move and drops the comma,
          // saving a char per operation
          ops.push(
            `M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`
          );
          start = null;
          return;
        }

        // end of row, clean up or skip
        if (x === row.length - 1) {
          if (!cell) {
            // We would have closed the op above already so this can only mean
            // 2+ light modules in a row.
            return;
          }
          if (start === null) {
            // Just a single dark module.
            ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`);
          } else {
            // Otherwise finish the current line.
            ops.push(
              `M${start + margin},${y + margin} h${x + 1 - start}v1H${
                start + margin
              }z`
            );
          }
          return;
        }

        if (cell && start === null) {
          start = x;
        }
      });
    });
    return ops.join('');
  };
  const createSvg = (
    qr: qrcodegen.QrCode,
    size: number,
    foregroundColor: string,
    backgroundColor: string,

    iconConfig: {
      iconSrc: string;
      iconBorderRadius: number;
      iconSize: number;
      iconBackgroundColor: string;
    } | null
  ): {
    innerHtml: string;
    numCells: number;
  } => {
    const cells = qr.getModules();
    const numCells = cells.length;
    const cellsToDraw = cells;
    let svgInnerHtml = '';

    const path1Html = `<path fill="${backgroundColor}" d="M0,0 h${numCells}v${numCells}H0z" shape-rendering="crispEdges"></path>`;
    const path2Html = `<path fill="${foregroundColor}" d="${generatePath(cellsToDraw, 0)}" shape-rendering="crispEdges"></path>`;
    let iconHtml = '';
    if (iconConfig) {
      const { iconSrc, iconSize, iconBackgroundColor, iconBorderRadius } =
        iconConfig;
      const imageBackground = `  <!-- 定义滤镜 -->
  <filter id="imageBackground" x="0" y="0" width="100%" height="100%">
    <!-- 首先绘制背景色 -->
    <feFlood flood-color="${iconBackgroundColor}" result="bg" />
    <!-- 然后在背景上绘制图片 -->
    <feComposite in="SourceGraphic" in2="bg" operator="over" />
  </filter>`;

      iconHtml += imageBackground;

      const DEFAULT_IMG_SCALE = 0.1;
      const defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
      const scale = numCells / size;
      const h = (iconSize || defaultSize) * scale;
      const w = (iconSize || defaultSize) * scale;
      const x = cells.length / 2 - w / 2;
      const y = cells.length / 2 - h / 2;

      const imageroundedCorners = `<!-- 定义圆角剪切路径 -->
  <clipPath id="roundedCorners">
    <!-- 圆角大小为10px，与图片尺寸一致 -->
    <rect  x="${x}" y="${y}" width="${w}" height="${h}" rx="${iconBorderRadius * scale}" ry="${iconBorderRadius * scale}" data-scale="${scale}" />
  </clipPath>`;
      iconHtml += imageroundedCorners;
      iconHtml += `<image fill="${iconBackgroundColor}" href="${iconSrc}" width="${w}" height="${h}" x="${x}" y="${y}" preserveAspectRatio="none" filter="url(#imageBackground)" clip-path="url(#roundedCorners)"></image>`;
    }
    svgInnerHtml += path1Html;
    svgInnerHtml += path2Html;
    svgInnerHtml += iconHtml;
    return {
      innerHtml: svgInnerHtml,
      numCells
    };
  };
  return {
    drawCanvas,
    createSvg
  };
};
