import { defineComponent } from 'vue'
import { TreeProps, treeProps } from './tree-type'

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    return () => {
      return <div class="s-tree">{props}</div>
    }
  }
})
