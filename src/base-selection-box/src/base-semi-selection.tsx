import { defineComponent } from 'vue'
import {
  BaseSelectionBoxProps,
  baseSelectionBoxProps
} from './base-selection-box-type'
import '../../index.scss'
import '../style/base-semi-selection.scss' // 半选
import classNames from 'classnames'
export default defineComponent({
  name: 'SBaseSemiSelection',
  props: baseSelectionBoxProps,
  setup(props: BaseSelectionBoxProps) {
    return () => (
      <label
        class={classNames('s-base-semi-selection', {
          'is-disabled': props.disabled
        })}
        style={{ marginRight: props.marginRight + 'px' }}
      >
        <span
          class={classNames(
            's-base-semi-selection__input',
            'is-indeterminate',
            { 'is-disabled': props.disabled }
          )}
          tabindex="0"
          role="checkbox"
          aria-checked="mixed"
        >
          <span class="s-base-semi-selection__inner" />
          <input
            type="checkbox"
            aria-hidden="true"
            disabled={props.disabled}
            class="s-base-semi-selection__original"
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
