import { defineComponent } from 'vue';
import { FormProps, formProps } from './form-type';

export default defineComponent({
  name: 'SForm',
  props: formProps,
  setup(_props: FormProps, { slots }) {
    console.log(_props);
    return () => <form class="s-form">{slots.default?.()}</form>;
  }
});
