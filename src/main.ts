import { createApp } from 'vue'
// import App from './App.vue'
// import App from './views/Table.vue'
import App from './views/Table1.vue'
import './index.scss'
import Button from './button'
//使用全量导出
// import Button from '../build/button'
createApp(App).use(Button).mount('#app')
