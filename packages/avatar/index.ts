import type { App } from 'vue';
import Avatar from './src/avatar';
import AvatarGroup from './src/avatar-group';
import '../index.scss';
import './style/avatar.scss';

// 具名导出
export { Avatar, AvatarGroup };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Avatar.name!, Avatar);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(AvatarGroup.name!, AvatarGroup);
  }
};
