import type { App } from 'vue';
import Button from './src/button';
import ButtonGroup from './src/button-group';
import '../index.scss';
import './style/button.scss';
import './style/button-group.scss';

// 具名导出
export { Button, ButtonGroup };
export type { buttonProps, ButtonProps } from './src/button-type';

export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Button.name!, Button);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(ButtonGroup.name!, ButtonGroup);
  }
};
1;
