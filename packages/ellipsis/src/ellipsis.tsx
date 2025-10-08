import { computed, defineComponent, ref, toRefs, useTemplateRef } from 'vue';
import { EllipsisProps, ellipsisProps } from './ellipsis-type';
import { useNamespace } from '@min-sheep-ui/hooks';
// export function createLineClampClass(clsPrefix: string): string {
//   return `${clsPrefix}-ellipsis--line-clamp`;
// }
export function createCursorClass(clsPrefix: string, cursor: string): string {
  return `${clsPrefix}-ellipsis--cursor-${cursor}`;
}
export default defineComponent({
  name: 'SEllipsis',
  props: ellipsisProps,
  setup(props: EllipsisProps, { slots }) {
    const { lineClamp, expandTrigger } = toRefs(props);
    const ns = useNamespace('ellipsis');

    const expandedRef = ref(false);
    const triggerRef = useTemplateRef<HTMLElement | null>('triggerRef');
    const triggerInnerRef = useTemplateRef<HTMLElement | null>(
      'triggerInnerRef'
    );
    const ellipsisStyleRef = computed(() => {
      const { value: expanded } = expandedRef;
      if (lineClamp?.value !== undefined) {
        return {
          textOverflow: '',
          '-webkit-line-clamp': expanded ? '' : lineClamp.value
        };
      } else {
        return {
          textOverflow: expanded ? '' : 'ellipsis',
          '-webkit-line-clamp': ''
        };
      }
    });
    const handleClickRef = computed(() => {
      return expandTrigger?.value === 'click'
        ? () => {
            const { value: expanded } = expandedRef;
            // if (expanded) {
            //   tooltipRef.value?.setShow(false);
            // }
            expandedRef.value = !expanded;
          }
        : undefined;
    });
    const getTooltipDisabled = (): boolean => {
      let tooltipDisabled = false;
      const { value: expanded } = expandedRef;
      if (expanded) return true;
      const { value: trigger } = triggerRef;
      console.log('getTooltipDisabled', expanded, trigger);
      if (trigger) {
        // we need to apply style here, since the dom may be updated in
        // nextTick, measure dom size will derive wrong result
        syncEllipsisStyle(trigger);
        if (lineClamp?.value !== undefined) {
          tooltipDisabled = trigger.scrollHeight <= trigger.offsetHeight;
        } else {
          const { value: triggerInner } = triggerInnerRef;
          if (triggerInner) {
            tooltipDisabled =
              triggerInner.getBoundingClientRect().width <=
              trigger.getBoundingClientRect().width;
          }
        }
        syncCursorStyle(trigger, tooltipDisabled);
      }
      return tooltipDisabled;
    };
    const syncEllipsisStyle = (trigger: HTMLElement): void => {
      if (!trigger) return;
      const latestStyle = ellipsisStyleRef.value;
      const lineClampClass = ns.bm('line', 'clamp');
      if (props.lineClamp !== undefined) {
        syncTriggerClass(trigger, lineClampClass, 'add');
      } else {
        syncTriggerClass(trigger, lineClampClass, 'remove');
      }
      for (const key in latestStyle) {
        // guard can make it a little faster
        if ((trigger.style as any)[key] !== (latestStyle as any)[key]) {
          (trigger.style as any)[key] = (latestStyle as any)[key];
        }
      }
    };
    const syncCursorStyle = (
      trigger: HTMLElement,
      tooltipDisabled: boolean
    ): void => {
      const cursorClass = createCursorClass('s', 'pointer');

      if (props.expandTrigger === 'click' && !tooltipDisabled) {
        syncTriggerClass(trigger, cursorClass, 'add');
      } else {
        syncTriggerClass(trigger, cursorClass, 'remove');
      }
    };
    const syncTriggerClass = (
      trigger: HTMLElement,
      styleClass: string,
      action: 'add' | 'remove'
    ): void => {
      if (action === 'add') {
        if (!trigger.classList.contains(styleClass)) {
          trigger.classList.add(styleClass);
        }
      } else {
        if (trigger.classList.contains(styleClass)) {
          trigger.classList.remove(styleClass);
        }
      }
    };
    return (): JSX.Element => (
      <span
        ref="triggerRef"
        class={[
          ns.b(),
          lineClamp?.value != undefined ? ns.bm('line', 'clamp') : undefined
        ]}
        style={ellipsisStyleRef.value}
        onClick={handleClickRef.value}
        onMouseenter={
          expandTrigger?.value === 'click' ? getTooltipDisabled() : undefined
        }
      >
        {lineClamp?.value ? (
          slots.default?.()
        ) : (
          <span ref="triggerInnerRef">{slots.default?.()}</span>
        )}
      </span>
    );
  }
});
