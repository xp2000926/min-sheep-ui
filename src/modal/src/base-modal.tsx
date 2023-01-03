import { defineComponent, toRefs } from 'vue'
import { BaseModalProps, baseModalProps } from './base-modal-type'
import '../../index.scss'
import '../style/base-modal.scss'

export default defineComponent({
  name: 'SBaseModal',
  props: baseModalProps,
  emits: ['update:modelValue'],
  setup(props: BaseModalProps, { slots, emit }) {
    const { modelValue } = toRefs(props)
    return () => (
      <div>
        {modelValue.value && (
          <div class="s-base-modal">
            {/* 透明遮罩 */}
            <div
              class="s-base-modal__mask"
              onClick={() => {
                emit('update:modelValue', false)
              }}
            />
            {/* 具体内容 */}
            {slots.default?.()}
          </div>
        )}
      </div>
    )
  }
})
