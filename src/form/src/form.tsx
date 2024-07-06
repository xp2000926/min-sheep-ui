import { defineComponent, toRefs, provide, computed } from 'vue';
import { FormProps, formProps } from './form-type';
import '../../index.scss';
import '../style/form.scss';

export default defineComponent({
  name: 'SForm',
  props: formProps,

  setup(props: FormProps, { slots }) {
    const { inline, size, labelPosition } = toRefs(props);
    // 向下通过 label_data
    const labelData = computed(() => ({
      inline: inline.value,
      size: size.value,
      labelPosition: labelPosition.value
    }));
    provide('LABEL_DATA', labelData);
    return () => {
      return <div class="s-form">{slots.default?.()}</div>;
    };
  }
});
