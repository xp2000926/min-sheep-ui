/* eslint-disable vue/multi-word-component-names */
// eslint-disable-next-line vue/multi-word-component-names
import { describe, it, expect, vi } from 'vitest';
import { defineComponent, h, nextTick, ref, provide } from 'vue';
import { mount } from '@vue/test-utils';
import { zhCN } from '../src/lang/zh-CN';
import { enUS } from '../src/lang/en-US';
import { localeContextKey } from '../src/context';
import { useLocale } from '../src/use-locale';
import LocalePlugin from '../index';

describe('Locale 语言包与 Hooks 测试', () => {
  // ==========================================
  // 1. 语言包结构一致性测试
  // ==========================================
  describe('字典结构', () => {
    it('中英文语言包的顶级 Key 必须完全一致', () => {
      const zhKeys = Object.keys(zhCN)
        .filter(k => k !== 'name')
        .sort();
      const enKeys = Object.keys(enUS)
        .filter(k => k !== 'name')
        .sort();
      expect(zhKeys).toEqual(enKeys);
    });

    it('各个子模块下的 Key 也必须完全一致（防止漏翻）', () => {
      // 遍历所有的顶级 key（排除 name）
      Object.keys(zhCN).forEach(key => {
        if (key === 'name') return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const zhSubKeys = Object.keys((zhCN as any)[key]).sort();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const enSubKeys = Object.keys((enUS as any)[key]).sort();

        expect(enSubKeys, `语言包 [${key}] 的 Key 不一致`).toEqual(zhSubKeys);
      });
    });
  });

  // ==========================================
  // 2. useLocale Hook 与 t 函数逻辑测试
  // ==========================================
  describe('useLocale Hook', () => {
    it('没有外层 provide 时，应默认降级到中文 (zhCN) 且不报错', () => {
      // eslint-disable-next-line vue/one-component-per-file
      const TestComp = defineComponent({
        setup() {
          const { t, locale } = useLocale();
          return () =>
            h('div', [
              h('span', { class: 'lang-name' }, locale.value.name),
              h('span', { class: 'text' }, t('common.confirm'))
            ]);
        }
      });

      const wrapper = mount(TestComp);
      expect(wrapper.find('.lang-name').text()).toBe('zh-CN');
      expect(wrapper.find('.text').text()).toBe('确定');
    });

    it('t 函数应支持占位符替换', () => {
      // eslint-disable-next-line vue/one-component-per-file
      const TestComp = defineComponent({
        setup() {
          const { t } = useLocale();
          // 假设 zh-CN 里有 pagination.total = '共 {total} 条'
          return () => h('div', t('pagination.total', { total: 99 }));
        }
      });

      const wrapper = mount(TestComp);
      expect(wrapper.text()).toBe('共 99 条');
    });

    it('t 函数遇到不存在的 key 时，应原样返回该 key', () => {
      // eslint-disable-next-line vue/one-component-per-file
      const TestComp = defineComponent({
        setup() {
          const { t } = useLocale();
          return () => h('div', t('not.exist.path'));
        }
      });

      const wrapper = mount(TestComp);
      expect(wrapper.text()).toBe('not.exist.path');
    });
  });

  // ==========================================
  // 3. 响应式切换测试（模拟 ConfigProvider）
  // ==========================================
  describe('动态切换语言', () => {
    it('注入的 locale 改变时，组件内的翻译应该响应式更新', async () => {
      // 模拟 ConfigProvider 的响应式语言变量
      const currentLocale = ref(zhCN);
      // eslint-disable-next-line vue/one-component-per-file
      const ChildComp = defineComponent({
        setup() {
          const { t } = useLocale();
          return () => h('div', { class: 'content' }, t('common.confirm'));
        }
      });
      // eslint-disable-next-line vue/one-component-per-file
      const ParentComp = defineComponent({
        setup() {
          provide(localeContextKey, currentLocale);
          return () => h(ChildComp);
        }
      });

      const wrapper = mount(ParentComp);

      // 初始应该是中文
      expect(wrapper.find('.content').text()).toBe('确定');

      // 切换为英文
      currentLocale.value = enUS;
      await nextTick();

      // 断言变成英文
      expect(wrapper.find('.content').text()).toBe('Confirm');
    });
  });

  // ==========================================
  // 4. 插件 install 测试
  // ==========================================
  describe('Locale 插件注册', () => {
    it('app.use(LocalePlugin) 应该能被正常安装', () => {
      const app = {
        config: { globalProperties: {} },
        provide: vi.fn(),
        use: vi.fn()
      };

      // 确保 install 方法存在且不报错
      expect(typeof LocalePlugin.install).toBe('function');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(() => LocalePlugin.install(app as any)).not.toThrow();
    });
  });
});
