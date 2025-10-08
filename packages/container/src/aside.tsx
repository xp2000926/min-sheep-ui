import { defineComponent, toRefs } from 'vue';
import { asideProps, AsideProps } from './aside-type';

export default defineComponent({
  name: 'SAside',
  props: asideProps,
  setup(props: AsideProps, { slots }) {
    const { width } = toRefs(props);
    return () => (
      <aside class="s-aside" style={{ '--s-aside-width': width.value }}>
        {slots.default?.()}
      </aside>
    );
  }
});
