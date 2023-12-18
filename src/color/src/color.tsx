import { defineComponent } from 'vue'
import { ColorProps, colorProps } from './color-type'
import '../../index.scss'
import '../style/color.scss'

export default defineComponent({
  name: 'SColor',
  props: colorProps,
  setup(props: ColorProps) {
    console.log('props', props)
    return () => <div class="s-color">color</div>
  }
})
