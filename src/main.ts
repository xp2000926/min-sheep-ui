import { createApp } from 'vue';
import App from './App.vue';
import Button from './button';
//使用全量导出
// import MinSheepUI from '../build/min-sheep-ui.mjs';
// import '../build/style.css';
createApp(App)
  .use(Button)
  // .use(MinSheepUI)
  .mount('#app');
