import { computed } from 'vue';

const useWatermarkBg = (props: {
  text: string;
  color: string;
  fontSize: number;
  gap: number;
  rotation: number;
}) => {
  return computed(() => {
    const canvas = document.createElement('canvas');
    const devicePixelRatio = window.devicePixelRatio || 1;
    const fontSize = props.fontSize * devicePixelRatio;
    const font = fontSize + 'px serif';
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    // 获取文字宽度
    ctx.font = font;
    const { width } = ctx.measureText(props.text);
    const canvasSize = Math.max(100, width) + props.gap * devicePixelRatio;
    console.log('canvasSize', canvasSize);
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((Math.PI / 180) * props.rotation);
    ctx.fillStyle = props.color;
    ctx.font = font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(props.text, 0, 0);
    return {
      base64: canvas.toDataURL(),
      size: canvasSize / devicePixelRatio
    };
  });
};
export { useWatermarkBg };
