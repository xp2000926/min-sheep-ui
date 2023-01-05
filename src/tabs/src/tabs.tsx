import { defineComponent, provide, ref } from 'vue'
import { TabsProps, tabsProps } from './tabs-type'
import '../../index.scss'
import '../style/tabs.scss'

export default defineComponent({
  name: 'STabs',
  props: tabsProps,
  emits: ['update:modelValue'],
  setup(props: TabsProps, { slots }) {
    // 模拟
    const tabsData = ref([])
    provide('active-data', tabsData)
    // 激活id
    const activeTab = ref(props.modelValue)
    provide('active-tab', activeTab)
    // 变激活状态
    const changeTab = (TabId: string) => {
      activeTab.value = TabId
    }
    return () => (
      <div class="s-tabs">
        {/* 导航页签 */}
        <ul className="s-tabs__nav">
          {tabsData.value.map(tab => (
            <li
              onClick={() => changeTab(tab.id)}
              class={tab.id === activeTab.value ? 'active' : ''}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        {/*  内容区*/}
        {slots.default?.()}
      </div>
    )
  }
})
