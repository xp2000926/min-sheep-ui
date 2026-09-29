import type { App } from 'vue';
import Ahp from './src/ahp';
import '../index.scss';
import './style/ahp.scss';

export { Ahp };

export default {
  install(app: App) {
    app.component(Ahp.name!, Ahp);
  }
};
