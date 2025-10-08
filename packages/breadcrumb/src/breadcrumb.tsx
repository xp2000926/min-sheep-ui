import { defineComponent, provide, toRefs } from 'vue';
import { BreadcrumbProps, breadcrumbProps } from './breadcrumb-type';

export default defineComponent({
  name: 'SBreadcrumb',
  props: breadcrumbProps,
  setup(props: BreadcrumbProps, { slots }) {
    const { separator, separatorClass, isIcon } = toRefs(props);
    provide('breadcrumbInfo', {
      separator: separator.value,
      separatorClass: separatorClass.value,
      isIcon: isIcon.value,
      finally: slots
        .default?.()
        [slots.default?.().length - 1]?.children?.default?.()[0]?.children
    });
    return () => <div class="s-breadcrumb">{slots.default?.()}</div>;
  }
});
