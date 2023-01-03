import { defineComponent, inject } from 'vue'
import { InputProps, inputProps } from './input-type'
import '../../index.scss'
import '../style/input.scss'
import { FormItemContext } from '../../form/src/form-item-type'

export default defineComponent({
  name: 'SInput',
  props: inputProps,
  emits: ['update:modelValue'],
  setup(props: InputProps, { emit }) {
    // 注入校验方法
    const formItem = inject('FORM_ITEM_CTX') as FormItemContext
    const oninput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      emit('update:modelValue', val)
      // 校验
      formItem.validate()
    }
    return () => (
      <div class="s-input">
        <input
          class="s-input__input"
          value={props.modelValue}
          onInput={oninput}
          type={props.type}
        />
      </div>
    )
  }
})
