import { defineComponent, toRefs } from 'vue';
import { FormItemProps, formItemProps } from './form-item-type';

export default defineComponent({
  name: 'SFormItem',
  props: formItemProps,
  setup(props: FormItemProps, { slots }) {
    const { label } = toRefs(props);
    return () => (
      <div class="s-form-item mb-5">
        <label class="s-form-item--label">{label.value}</label>
        <div class="s-form-item--content relative">{slots.default?.()}</div>
      </div>
    );
  }
});
