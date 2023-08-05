import { defineComponent } from 'vue'
import {
  BaseSelectionBoxProps,
  baseSelectionBoxProps
} from './base-selection-box-type'
import '../../index.scss'
import '../style/base-select-all.scss' // 全选
import classNames from 'classnames'
export default defineComponent({
  name: 'SBaseSelectAll',
  props: baseSelectionBoxProps,
  setup(props: BaseSelectionBoxProps) {
    return () => (
      <label
        class={classNames('s-base-select-all', 'is-checked', {
          'is-disabled': props.disabled
        })}
        style={{ marginRight: props.marginRight + 'px' }}
      >
        <span
          class={classNames('s-base-select-all__input', 'is-checked', {
            'is-disabled': props.disabled
          })}
        >
          <span class="s-base-select-all__inner" />
          <input
            type="checkbox"
            disabled={props.disabled}
            aria-hidden="false"
            class="s-base-select-all__original"
            value=""
            tabindex="-1"
            onClick={() => {
              props.onClick()
            }}
          />
        </span>
      </label>
    )
  }
})
