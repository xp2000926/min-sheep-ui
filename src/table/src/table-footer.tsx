import { defineComponent, ref, toRefs, provide, watch } from 'vue'
export default defineComponent({
  name: 'STableFooter',
  setup() {
    return () => <div class="table-footer">table-footer</div>
  }
})
