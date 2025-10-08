import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SHeader',
  props: {},
  setup(_props, { slots }) {
    return () => <header class="s-header">{slots.default?.()}</header>;
  }
});
