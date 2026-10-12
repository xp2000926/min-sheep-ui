import type { App } from 'vue';
import Ahp, { validateMatrix } from './src/ahp';
import '../index.scss';
import './style/ahp.scss';

export { Ahp, validateMatrix };

export default {
  install(app: App) {
    app.component(Ahp.name!, Ahp);
  }
};
