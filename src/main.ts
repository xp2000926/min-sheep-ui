import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import Button from './button'
//使用全量导出
// import MinSheepUI from '../build'
createApp(App).use(Button).mount('#app')
