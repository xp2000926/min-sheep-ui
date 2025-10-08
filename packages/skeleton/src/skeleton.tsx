import { defineComponent } from 'vue';
import { SkeletonProps, skeletonProps } from './skeleton-type';

export default defineComponent({
  name: 'SSkeleton',
  props: skeletonProps,
  setup(_props: SkeletonProps) {
    console.log(_props);
    return () => <div class="s-skeleton">skeleton</div>;
  }
});
