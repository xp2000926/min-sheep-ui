import { computed, defineComponent, provide } from 'vue'
import { FormProps, formProps } from './form-type'
import '../../index.scss'
import '../style/form.scss'

export default defineComponent({
  name: 'SForm',
  props: formProps,
  setup(props: FormProps, { slots }) {
    // 向下通过 label_data
    const labelData = computed(() => ({
      layout: props.layout
    }))
    provide('LABEL_DATA', labelData)
    return () => <div class="s-form">{slots.default?.()}</div>
  }
})
