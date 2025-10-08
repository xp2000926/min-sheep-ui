import type { App } from 'vue';
import Container from './src/container';
import Header from './src/header';
import Aside from './src/aside';
import Main from './src/main';
import Footer from './src/footer';
import '../index.scss';
import './style/container.scss';

// 具名导出
export { Container, Aside, Header, Main, Footer };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Container.name!, Container);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Aside.name!, Aside);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Header.name!, Header);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Main.name!, Main);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Footer.name!, Footer);
  }
};
