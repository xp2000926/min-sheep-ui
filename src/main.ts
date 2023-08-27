import { createApp } from 'vue';
import App from './views/Button.vue';
import './index.scss';
import Button from './button';
createApp(App).use(Button).mount('#app');
