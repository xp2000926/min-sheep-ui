import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SMain',
  props: {},
  setup(_props, { slots }) {
    return () => <main class="s-main">{slots.default?.()}</main>;
  }
});
