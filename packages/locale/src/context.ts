import type { InjectionKey, Ref } from 'vue';

export interface Locale {
  name: string;
  common: Record<string, string>;
  pagination: Record<string, string>;
  select: Record<string, string>;
  datePicker: Record<string, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // 允许后续扩展
}

// 注入的 Key
// eslint-disable-next-line prettier/prettier
export const localeContextKey: InjectionKey<Ref<Locale>> = Symbol('MinSheepLocaleContext');