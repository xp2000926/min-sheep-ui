import { defineComponent } from 'vue'
import { TextProps, textProps } from './text-type'
import '../../index.scss'
import '../style/text.scss'

export default defineComponent({
  name: 'SText',
  props: textProps,
  setup(props: TextProps) {
    return () => <div class="s-text">text</div>
  }
})
