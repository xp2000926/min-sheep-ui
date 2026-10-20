import type { App } from 'vue';
import { zhCN, enUS, useLocale, localeContextKey } from './src';
import type { Locale } from './src/context';

// 1. 具名导出（供按需引入，比如：import { zhCN } from 'min-sheep-ui'）
export { zhCN, enUS, useLocale, localeContextKey };
export type { Locale };

// 2. 导出插件对象
export default {
  // 这里的 install 让使用者可以 app.use(LocalePlugin)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  install(_app: App) {
    // 大部分 UI 库（如 Element Plus）的 locale 包不需要全局注册组件。
    // 但为了符合你项目的统一规范，这里可以提供一个全局的 $t 方法（可选）
    // 这样在 Options API 里可以通过 this.$t('common.confirm') 使用
    // 如果你不想提供全局 $t，这里留空即可。
    // app.config.globalProperties.$t = (key: string) => {
    //   // 这里需要配合一个全局的 reactive 语言状态，实现会稍微复杂一点，
    //   // 建议优先引导用户使用 <ConfigProvider>。
    // };
  }
};
