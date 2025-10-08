import { defineComponent, toRefs } from 'vue';
import { PaginationProps, paginationProps } from './pagination-type';
import classnames from 'classnames';

export default defineComponent({
  name: 'SPagination',
  props: paginationProps,
  setup(props: PaginationProps) {
    const { simple } = toRefs(props);
    return () => (
      <div
        class={classnames('s-pagination', {
          's-pagination--simple': simple.value
        })}
      >
        pagination
      </div>
    );
  }
});
