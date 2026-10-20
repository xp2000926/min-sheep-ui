import { inject, computed } from 'vue';
import { localeContextKey, zhCN } from './index';

export const useLocale = () => {
  // 如果没有外层 ConfigProvider，则默认使用中文
  const locale = inject(
    localeContextKey,
    computed(() => zhCN)
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = (key: string, params?: Record<string, any>): string => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any = locale.value;

    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) return key;
    }

    if (typeof result !== 'string') return key;

    if (params) {
      return result.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? `{${k}}`);
    }
    return result;
  };

  return { t, locale };
};
