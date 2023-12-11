import { defineComponent } from 'vue'
import { LinkProps, linkProps } from './link-type'
import '../../index.scss'
import '../style/link.scss'

export default defineComponent({
  name: 'SLink',
  props: linkProps,
  setup(props: LinkProps) {
    return () => <div class="s-link">link</div>
  }
})
