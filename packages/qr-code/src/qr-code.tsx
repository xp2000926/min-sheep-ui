import {
  computed,
  defineComponent,
  nextTick,
  toRefs,
  ref,
  useTemplateRef,
  watch,
  watchEffect
} from 'vue';
import { QrCodeProps, qrCodeProps } from './qr-code-type';
import qrcodegen from './utils/qrcodegen';
import { useQRCode } from './composables/use-qr-code';
export default defineComponent({
  name: 'SQrCode',
  props: qrCodeProps,
  setup(props: QrCodeProps) {
    const {
      size,
      type,
      padding,
      color,
      backgroundColor,
      modelValue,
      errorCorrectionLevel,
      iconBorderRadius,
      iconSize,
      iconBackgroundColor,
      iconSrc
    } = toRefs(props);
    const canvasRef = useTemplateRef<HTMLCanvasElement>('canvasRef');
    const ERROR_CORRECTION_LEVEL: Record<string, qrcodegen.QrCode.Ecc> = {
      L: qrcodegen.QrCode.Ecc.LOW,
      M: qrcodegen.QrCode.Ecc.MEDIUM,
      Q: qrcodegen.QrCode.Ecc.QUARTILE,
      H: qrcodegen.QrCode.Ecc.HIGH
    };
    const qr = computed(() => {
      return qrcodegen.QrCode.encodeText(
        modelValue.value,
        ERROR_CORRECTION_LEVEL[errorCorrectionLevel.value]
      );
    });
    const { drawCanvas, createSvg } = useQRCode();

    const loadedIcon = ref<HTMLImageElement | null>();
    watchEffect(() => {
      if (type.value === 'svg') return;
      if (iconSrc.value) {
        let aborted = false;
        const img = new Image();
        img.src = iconSrc.value;
        img.onload = () => {
          if (aborted) {
            return;
          }
          loadedIcon.value = img;
        };
        return () => {
          aborted = true;
        };
      }
    });
    watch(
      () => qr.value,
      () => {
        nextTick(() => {
          if (type.value === 'canvas') {
            drawCanvas(
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              canvasRef.value!,
              qr.value,
              size.value,
              color.value,
              backgroundColor.value,
              loadedIcon.value
                ? {
                    icon: loadedIcon.value,
                    iconBorderRadius: iconBorderRadius.value,
                    iconSize: iconSize.value,
                    iconBackgroundColor: iconBackgroundColor.value
                  }
                : null
            );
          }
        });
      },
      { deep: true }
    );
    watch(
      () => modelValue.value,
      () => {
        nextTick(() => {
          if (type.value === 'canvas') {
            drawCanvas(
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              canvasRef.value!,
              qr.value,
              size.value,
              color.value,
              backgroundColor.value,
              loadedIcon.value
                ? {
                    icon: loadedIcon.value,
                    iconBorderRadius: iconBorderRadius.value,
                    iconSize: iconSize.value,
                    iconBackgroundColor: iconBackgroundColor.value
                  }
                : null
            );
          }
        });
      },
      {
        deep: true,
        immediate: true
      }
    );
    const svgInfo = computed(() => {
      return type.value === 'svg'
        ? createSvg(
            qr.value,
            size.value,
            color.value,
            backgroundColor.value,
            iconSrc.value
              ? {
                  iconSrc: iconSrc.value,
                  iconBorderRadius: iconBorderRadius.value,
                  iconSize: iconSize.value,
                  iconBackgroundColor: iconBackgroundColor.value
                }
              : null
          )
        : {
            numCells: 0,
            innerHtml: ''
          };
    });
    return () => (
      <div
        class="s-qr-code"
        style={{
          padding:
            typeof padding.value == 'number'
              ? `${padding.value}px`
              : padding.value,
          backgroundColor: backgroundColor.value
        }}
      >
        {type.value === 'canvas' ? (
          <canvas
            ref="canvasRef"
            style={{
              width: `${size.value}px`,
              height: `${size.value}px`
            }}
          />
        ) : (
          <svg
            height={size.value}
            width={size.value}
            viewBox={`0 0 ${svgInfo.value.numCells} ${svgInfo.value.numCells}`}
            role="img"
            innerHTML={svgInfo.value.innerHtml}
          />
        )}
      </div>
    );
  }
});
