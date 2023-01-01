import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { PaginationProps, paginationProps } from './pagination-type'
import '../style/pagination.scss'
import SPager from './components/pager'
export default defineComponent({
  name: 'SPagination',
  props: paginationProps,
  emits: ['update:modelValue'],
  setup(props: PaginationProps, { emit }) {
    // 1. 首页和尾页是常驻的，如果只有1页，则不显示
    // 2. 页码按钮有一个最大数量pagerCount，上图是7，也就是说最多显示7个页码按钮
    // 3. 如果总页数totalPage大于pagerCount，则会出现显示不下的情况，这时显示不下的部分用...表示，并且这个...是可以快速往前、往后跳转N页的
    // 4. 中间页码应该显示的页码按钮数量在0到pagerCount-2之间
    // 5. 只有2页的情况下，中间页码按钮数量为0
    // 6. 大于等于pagerCount的情况下，中间按钮数量等于pagerCount-2
    // 7. 当中间页码左边的页数大于2时，应该出现左边的...
    // 8. 当中间页码右边的页数小于totalPage-3时，应该出现右边的...
    const pager = ref()
    const disabledPrev = computed(() =>
      pager.value ? pager.value.pageIndex < 2 : true
    )
    const disabledNext = computed(() =>
      pager.value ? pager.value.pageIndex > pager.value.totalPage - 1 : true
    )
    // 每当内部的 pageIndex 发生变化，都将最新的 pageIndex 值暴露给外部
    onMounted(() => {
      watch(
        () => pager.value.pageIndex,
        (newVal: number) => {
          emit('update:modelValue', newVal)
        }
      )
      // modelValue 代表外部数据，当 modelValue 发生变化时，应该同步改变内部的 pageIndex
      watch(
        () => props.modelValue,
        (newVal: number) => {
          pager.value.pageIndex = newVal
        }
      )
    })
    return () => {
      return (
        <div class="s-pagination">
          <button
            disabled={disabledPrev.value}
            onClick={() => pager.value.prevPage()}
          >
            上一页
          </button>
          {/* pagrr 部分 */}
          <SPager {...props} ref={pager}></SPager>
          {/* 尾页显示的条件是：总页码大于1  */}
          <button
            disabled={disabledNext.value}
            onClick={() => pager.value.nextPage()}
          >
            下一页
          </button>
        </div>
      )
    }
  }
})
