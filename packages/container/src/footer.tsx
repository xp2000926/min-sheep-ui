import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SFooter',
  props: {},
  setup(_props, { slots }) {
    return () => <footer class="s-footer">{slots.default?.()}</footer>;
  }
});
