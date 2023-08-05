import { defineComponent } from 'vue'
import {
  BaseSelectionBoxProps,
  baseSelectionBoxProps
} from './base-selection-box-type'
import '../../index.scss'
import '../style/base-selection-box.scss' // 选择框
import classNames from 'classnames'
export default defineComponent({
  name: 'SBaseSelectionBox',
  props: baseSelectionBoxProps,
  setup(props: BaseSelectionBoxProps) {
    return () => (
      <label
        class={classNames('s-base-selection-box', {
          'is-disabled': props.disabled
        })}
        style={{ marginRight: props.marginRight + 'px' }}
      >
        <span
          class={classNames('s-base-selection-box__input', {
            'is-disabled': props.disabled
          })}
        >
          <span class="s-base-selection-box__inner" />
          <input
            type="checkbox"
            disabled={props.disabled}
            aria-hidden="false"
            class="s-base-selection-box__original"
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
