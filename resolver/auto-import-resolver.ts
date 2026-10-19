import type { ImportResolver } from 'unplugin-auto-import/types';
import { apiMap } from './data';

export function MinSheepUiAutoImportResolver(): ImportResolver {
  return {
    resolve(name: string) {
      const pkg = apiMap[name];
      if (!pkg) return;
      return { from: `min-sheep-ui/packages/${pkg}`, name };
    }
  };
}
