/**
 * IconPark 图标组件
 * 基于 @icon-park/svg 的 Vue 3 图标组件
 *
 * 使用示例：
 * ```vue
 * <template>
 *   <SIconPark name="home" theme="outline" size="24" color="#333" />
 *   <SIconPark name="user" theme="filled" type="primary" />
 *   <SIconPark name="settings" theme="two-tone" spin />
 * </template>
 *
 * <script setup>
 * import { SIconPark } from '@/components/IconPark'
 * </script>
 * ```
 */

import IconPark from './iconpark';
import './style.scss';

// 导出组件
export { IconPark };
export default IconPark;

// 导出类型
export type {
  IconParkProps,
  IconParkPropsType,
  IconParkTheme,
  IconParkSize
} from './iconpark-type';

// 导出属性定义
export { iconParkProps } from './iconpark-type';
