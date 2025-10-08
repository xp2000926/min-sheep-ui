import {
  defineComponent,
  onMounted,
  onUnmounted,
  toRefs,
  useTemplateRef
} from 'vue';
import { WatermarkProps, watermarkProps } from './watermark-type';
import { useWatermarkBg } from '../utils/useWatermarkBg';

export default defineComponent({
  name: 'SWatermark',
  props: watermarkProps,
  setup(props: WatermarkProps, { slots }) {
    const { text, fontSize, gap, color, rotation } = toRefs(props);

    const bg = useWatermarkBg({
      text: text.value,
      fontSize: fontSize.value,
      gap: gap.value,
      color: color.value,
      rotation: rotation.value
    });
    const parentRef = useTemplateRef<HTMLDivElement>('parentRef');
    let div: HTMLDivElement;
    const resetWatermark = () => {
      if (!parentRef.value) {
        return;
      }
      if (div) {
        div.remove();
      }
      const { base64, size } = bg.value;
      div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.backgroundImage = `url(${base64})`;
      div.style.backgroundSize = `${size}px ${size}px`;
      div.style.backgroundRepeat = 'repeat';
      div.style.zIndex = 9999;
      div.style.inset = 0;
      parentRef.value.appendChild(div);
    };
    onMounted(resetWatermark);
    const ob = new MutationObserver(entries => {
      for (const entry of entries) {
        // 删除
        for (const dom of entry.removedNodes) {
          if (dom === div) {
            console.log('水印被删除');
            resetWatermark();
            return;
          }
        }
        // 修改
        if (entry.target === div) {
          console.log('水印被修改');
          resetWatermark();
          return;
        }
      }
    });
    onMounted(() => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ob.observe(parentRef.value!, {
        childList: true,
        subtree: true,
        attributes: true
      });
    });

    onUnmounted(() => {
      ob.disconnect();
    });

    return () => (
      <div ref="parentRef" class="s-watermark relative">
        {slots.default?.()}
      </div>
    );
  }
});
