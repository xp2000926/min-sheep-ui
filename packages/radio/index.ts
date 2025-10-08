import type { App } from 'vue';
import Radio from './src/radio';
import RadioButton from './src/radio-button';
import RadioGroup from './src/radio-group';
import '../index.scss';
import './style/radio.scss';
import './style/radio-group.scss';
import './style/radio-button.scss';

// 具名导出
export { Radio, RadioButton, RadioGroup };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Radio.name!, Radio);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(RadioButton.name!, RadioButton);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(RadioGroup.name!, RadioGroup);
  }
};
