import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import Button from './button'
//使用全量导出
// import Button from '../build/button'
createApp(App).use(Button).mount('#app')
