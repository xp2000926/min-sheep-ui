import DefaultTheme  from 'vitepress/theme' //默认样式

import SheepUI from '../../../scripts/entry'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
import './demoblock.scss'

// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

export default {
    ...DefaultTheme,
    //扩展应用程序实例
    enhanceApp({app}){
        // 注册组件
        app.use(SheepUI)
        // 注册DemoBlock所需组件
        app.component('Demo', Demo)
        app.component('DemoBlock', DemoBlock)
    }
}