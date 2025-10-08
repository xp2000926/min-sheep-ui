import { defineComponent } from 'vue';
import { EllipsisProps, ellipsisProps } from './ellipsis-type';
import { useNamespace } from '@min-sheep-ui/hooks';

export default defineComponent({
  name: 'SPerformantEllipsis',
  props: ellipsisProps,
  setup(_props: EllipsisProps) {
    console.log(_props);
    const ns = useNamespace('performant-ellipsis');
    return () => <div class={ns.b()}>performant-ellipsis</div>;
  }
});
