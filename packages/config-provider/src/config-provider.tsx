import { computed, defineComponent, provide, h, toRefs } from 'vue';
import {
  configProviderProps,
  ConfigProviderProps
} from './config-provider-type';
import { localeContextKey, zhCN } from '../../locale';
import { namespaceContextKey } from '@min-sheep-ui/hooks';

export default defineComponent({
  name: 'SConfigProvider',
  props: configProviderProps,
  setup(props: ConfigProviderProps, { slots }) {
    const { locale, namespace, theme } = toRefs(props);
    // 创建响应式的语言对象，如果用户没传，默认使用 zhCN
    const currentLocale = computed(() => {
      return locale.value || zhCN;
    });
    // 将语言对象通过 provide 注入给所有的子组件（如 Pagination、Select 等）
    provide(localeContextKey, currentLocale);

    provide(namespaceContextKey, namespace);
    return () => {
      if (!slots.default) return null;
      const classes = ['s-config-provider'];
      if (theme.value) {
        classes.push(`s-theme-${theme.value}`);
      }
      return h('div', { class: classes }, slots.default());
    };
  }
});
