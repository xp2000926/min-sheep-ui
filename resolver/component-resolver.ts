import type { ComponentResolver } from 'unplugin-vue-components/types';
import { componentMap } from './data';

export interface MinSheepUiResolverOptions {
  importStyle?: 'scss' | 'css' | false;
  /** 组件名前缀，如 'Ms' → 使用 <MsButton /> */
  prefix?: string;
  /** 是否只解析指定包 */
  include?: string[];
}

export function MinSheepUiResolver(
  options: MinSheepUiResolverOptions = {}
): ComponentResolver {
  const { importStyle = 'scss' } = options;

  return {
    type: 'component',
    resolve(name: string) {
      const pkg = componentMap[name];
      if (!pkg) return;

      return {
        name,
        from: `min-sheep-ui/packages/${pkg}`,
        sideEffects:
          importStyle === false
            ? undefined
            : `min-sheep-ui/packages/${pkg}/style/${pkg}.${importStyle}`
      };
    }
  };
}
