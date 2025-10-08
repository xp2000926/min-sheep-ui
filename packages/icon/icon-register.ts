import type { App } from 'vue';
import Icon, { setGlobalIconConfig } from './src/icon'; // 替换为实际的Icon组件路径
import type { IconParkProps } from './src/icon-type';

// 定义全局配置类型
interface IconGlobalConfig {
  // 全局样式资源
  css?: string[];
  // 全局脚本资源
  js?: string[];
  // Icon组件的全局默认属性
  defaultProps?: Partial<IconParkProps>;
}

/**
 * 全局注册Icon组件的函数
 * @param app Vue应用实例
 * @param config 全局配置，包含样式、脚本和默认属性
 */
export function registerIcon(app: App, config: IconGlobalConfig = {}) {
  // 设置全局配置
  setGlobalIconConfig(config);

  // 全局注册Icon组件
  app.component(Icon.name!, Icon);

  // 如果有默认属性，全局设置
  if (config.defaultProps) {
    app.config.globalProperties.$iconDefaultProps = config.defaultProps;
  }

  console.log(`${Icon.name!}组件已全局注册`);
}

export default registerIcon;
