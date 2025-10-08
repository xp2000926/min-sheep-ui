import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SButtonGroup',
  setup(_, { slots }) {
    return () => <div class="s-button-group">{slots.default?.()}</div>;
  }
});
