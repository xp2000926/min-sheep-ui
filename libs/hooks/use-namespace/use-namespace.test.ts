import { describe, test, expect, vi, beforeEach } from 'vitest';
import { ref, getCurrentInstance, inject } from 'vue';
import {
  useNamespace,
  useGetDerivedNamespace,
  namespaceContextKey,
  defaultNamespace
} from './index';

// Mock Vue 的 getCurrentInstance 和 inject
vi.mock('vue', async () => {
  const actual = await vi.importActual('vue');
  return {
    ...actual,
    getCurrentInstance: vi.fn(),
    inject: vi.fn()
  };
});

describe('useNamespace Hook 测试', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('基础功能测试', () => {
    test('useNamespace 应该返回正确的对象结构', () => {
      // Mock getCurrentInstance 返回 null（非组件环境）
      vi.mocked(getCurrentInstance).mockReturnValue(null);

      const ns = useNamespace('button');

      expect(ns).toHaveProperty('namespace');
      expect(ns).toHaveProperty('b');
      expect(ns).toHaveProperty('e');
      expect(ns).toHaveProperty('m');
      expect(ns).toHaveProperty('be');
      expect(ns).toHaveProperty('em');
      expect(ns).toHaveProperty('bm');
      expect(ns).toHaveProperty('bem');
      expect(ns).toHaveProperty('is');
      expect(ns).toHaveProperty('cssVar');
      expect(ns).toHaveProperty('cssVarName');
      expect(ns).toHaveProperty('cssVarBlock');
      expect(ns).toHaveProperty('cssVarBlockName');
    });

    test('默认命名空间应该正确设置', () => {
      vi.mocked(getCurrentInstance).mockReturnValue(null);

      const ns = useNamespace('button');

      expect(ns.namespace.value).toBe(defaultNamespace);
    });
  });

  describe('BEM 类名生成测试', () => {
    let ns: ReturnType<typeof useNamespace>;

    beforeEach(() => {
      vi.mocked(getCurrentInstance).mockReturnValue(null);
      ns = useNamespace('button');
    });

    test('b() 应该生成基础块名', () => {
      expect(ns.b()).toBe('s-button');
    });

    test('b(blockSuffix) 应该生成带后缀的块名', () => {
      expect(ns.b('primary')).toBe('s-button-primary');
      expect(ns.b('secondary')).toBe('s-button-secondary');
      expect(ns.b('')).toBe('s-button');
    });

    test('e(element) 应该生成元素名', () => {
      expect(ns.e('icon')).toBe('s-button__icon');
      expect(ns.e('text')).toBe('s-button__text');
      expect(ns.e('')).toBe('');
      expect(ns.e()).toBe('');
    });

    test('m(modifier) 应该生成修饰符名', () => {
      expect(ns.m('large')).toBe('s-button--large');
      expect(ns.m('small')).toBe('s-button--small');
      expect(ns.m('')).toBe('');
      expect(ns.m()).toBe('');
    });

    test('be(blockSuffix, element) 应该生成块+元素名', () => {
      expect(ns.be('primary', 'icon')).toBe('s-button-primary__icon');
      expect(ns.be('secondary', 'text')).toBe('s-button-secondary__text');
      expect(ns.be('', 'icon')).toBe('');
      expect(ns.be('primary', '')).toBe('');
      expect(ns.be('', '')).toBe('');
    });

    test('em(element, modifier) 应该生成元素+修饰符名', () => {
      expect(ns.em('icon', 'large')).toBe('s-button__icon--large');
      expect(ns.em('text', 'small')).toBe('s-button__text--small');
      expect(ns.em('', 'large')).toBe('');
      expect(ns.em('icon', '')).toBe('');
      expect(ns.em('', '')).toBe('');
    });

    test('bm(blockSuffix, modifier) 应该生成块+修饰符名', () => {
      expect(ns.bm('primary', 'large')).toBe('s-button-primary--large');
      expect(ns.bm('secondary', 'small')).toBe('s-button-secondary--small');
      expect(ns.bm('', 'large')).toBe('');
      expect(ns.bm('primary', '')).toBe('');
      expect(ns.bm('', '')).toBe('');
    });

    test('bem(blockSuffix, element, modifier) 应该生成完整的 BEM 类名', () => {
      expect(ns.bem('primary', 'icon', 'large')).toBe('s-button-primary__icon--large');
      expect(ns.bem('secondary', 'text', 'small')).toBe('s-button-secondary__text--small');
      expect(ns.bem('', 'icon', 'large')).toBe('');
      expect(ns.bem('primary', '', 'large')).toBe('');
      expect(ns.bem('primary', 'icon', '')).toBe('');
      expect(ns.bem('', '', '')).toBe('');
    });
  });

  describe('状态类名生成测试', () => {
    let ns: ReturnType<typeof useNamespace>;

    beforeEach(() => {
      vi.mocked(getCurrentInstance).mockReturnValue(null);
      ns = useNamespace('button');
    });

    test('is(name) 应该生成状态类名（默认 true）', () => {
      expect(ns.is('disabled')).toBe('is-disabled');
      expect(ns.is('active')).toBe('is-active');
      expect(ns.is('loading')).toBe('is-loading');
    });

    test('is(name, true) 应该生成状态类名', () => {
      expect(ns.is('disabled', true)).toBe('is-disabled');
      expect(ns.is('active', true)).toBe('is-active');
    });

    test('is(name, false) 应该返回空字符串', () => {
      expect(ns.is('disabled', false)).toBe('');
      expect(ns.is('active', false)).toBe('');
    });

    test('is(name, undefined) 应该返回空字符串', () => {
      expect(ns.is('disabled', undefined)).toBe('');
      expect(ns.is('active', undefined)).toBe('');
    });

    test('is("") 应该返回空字符串', () => {
      expect(ns.is('')).toBe('');
    });
  });

  describe('CSS 变量功能测试', () => {
    let ns: ReturnType<typeof useNamespace>;

    beforeEach(() => {
      vi.mocked(getCurrentInstance).mockReturnValue(null);
      ns = useNamespace('button');
    });

    test('cssVar 应该生成正确的 CSS 变量对象', () => {
      const result = ns.cssVar({
        color: '#409eff',
        size: '14px',
        borderRadius: '4px'
      });

      expect(result).toEqual({
        '--s-color': '#409eff',
        '--s-size': '14px',
        '--s-borderRadius': '4px'
      });
    });

    test('cssVar 应该过滤空值', () => {
      const result = ns.cssVar({
        color: '#409eff',
        size: '',
        borderRadius: '4px',
        margin: null as any
      });

      expect(result).toEqual({
        '--s-color': '#409eff',
        '--s-borderRadius': '4px'
      });
    });

    test('cssVarBlock 应该生成带块名的 CSS 变量对象', () => {
      const result = ns.cssVarBlock({
        color: '#409eff',
        size: '14px'
      });

      expect(result).toEqual({
        '--s-button-color': '#409eff',
        '--s-button-size': '14px'
      });
    });

    test('cssVarName 应该生成正确的 CSS 变量名', () => {
      expect(ns.cssVarName('color')).toBe('--s-color');
      expect(ns.cssVarName('size')).toBe('--s-size');
    });

    test('cssVarBlockName 应该生成带块名的 CSS 变量名', () => {
      expect(ns.cssVarBlockName('color')).toBe('--s-button-color');
      expect(ns.cssVarBlockName('size')).toBe('--s-button-size');
    });
  });

  describe('命名空间覆盖测试', () => {
    test('应该使用自定义命名空间覆盖', () => {
      vi.mocked(getCurrentInstance).mockReturnValue(null);

      const customNamespace = ref('custom');
      const ns = useNamespace('button', customNamespace);

      expect(ns.namespace.value).toBe('custom');
      expect(ns.b()).toBe('custom-button');
      expect(ns.e('icon')).toBe('custom-button__icon');
      expect(ns.m('large')).toBe('custom-button--large');
    });

    test('应该使用注入的命名空间', () => {
      const mockInstance = { uid: 1 } as any;
      const injectedNamespace = ref('injected');

      vi.mocked(getCurrentInstance).mockReturnValue(mockInstance);
      vi.mocked(inject).mockReturnValue(injectedNamespace);

      const ns = useNamespace('button');

      expect(ns.namespace.value).toBe('injected');
      expect(ns.b()).toBe('injected-button');
    });

    test('应该回退到默认命名空间当注入值为空时', () => {
      const mockInstance = { uid: 1 } as any;

      vi.mocked(getCurrentInstance).mockReturnValue(mockInstance);
      vi.mocked(inject).mockReturnValue(ref(''));

      const ns = useNamespace('button');

      expect(ns.namespace.value).toBe(defaultNamespace);
      expect(ns.b()).toBe('s-button');
    });

    test('应该回退到默认命名空间当注入值为 undefined 时', () => {
      const mockInstance = { uid: 1 } as any;

      vi.mocked(getCurrentInstance).mockReturnValue(mockInstance);
      vi.mocked(inject).mockReturnValue(ref(undefined));

      const ns = useNamespace('button');

      expect(ns.namespace.value).toBe(defaultNamespace);
      expect(ns.b()).toBe('s-button');
    });
  });

  describe('响应式命名空间测试', () => {
    test('命名空间变化时应该更新生成的类名', () => {
      vi.mocked(getCurrentInstance).mockReturnValue(null);

      const customNamespace = ref('custom');
      const ns = useNamespace('button', customNamespace);

      expect(ns.b()).toBe('custom-button');
      expect(ns.cssVarName('color')).toBe('--custom-color');

      // 改变命名空间
      customNamespace.value = 'new-namespace';

      expect(ns.b()).toBe('new-namespace-button');
      expect(ns.cssVarName('color')).toBe('--new-namespace-color');
    });
  });

  describe('边界情况测试', () => {
    let ns: ReturnType<typeof useNamespace>;

    beforeEach(() => {
      vi.mocked(getCurrentInstance).mockReturnValue(null);
      ns = useNamespace('button');
    });

    test('应该处理空字符串参数', () => {
      expect(ns.b('')).toBe('s-button');
      expect(ns.e('')).toBe('');
      expect(ns.m('')).toBe('');
      expect(ns.is('')).toBe('');
    });

    test('应该处理 undefined 参数', () => {
      expect(ns.e()).toBe('');
      expect(ns.m()).toBe('');
    });

    test('应该处理特殊字符', () => {
      expect(ns.b('btn-primary')).toBe('s-button-btn-primary');
      expect(ns.e('icon-arrow')).toBe('s-button__icon-arrow');
      expect(ns.m('size-large')).toBe('s-button--size-large');
    });

    test('应该处理数字参数', () => {
      expect(ns.b('1')).toBe('s-button-1');
      expect(ns.e('2')).toBe('s-button__2');
      expect(ns.m('3')).toBe('s-button--3');
    });
  });

  describe('useGetDerivedNamespace 测试', () => {
    test('应该返回默认命名空间（非组件环境）', () => {
      vi.mocked(getCurrentInstance).mockReturnValue(null);

      const namespace = useGetDerivedNamespace();

      expect(namespace.value).toBe(defaultNamespace);
    });

    test('应该返回自定义命名空间覆盖', () => {
      vi.mocked(getCurrentInstance).mockReturnValue(null);

      const customNamespace = ref('custom');
      const namespace = useGetDerivedNamespace(customNamespace);

      expect(namespace.value).toBe('custom');
    });

    test('应该返回注入的命名空间（组件环境）', () => {
      const mockInstance = { uid: 1 } as any;
      const injectedNamespace = ref('injected');

      vi.mocked(getCurrentInstance).mockReturnValue(mockInstance);
      vi.mocked(inject).mockReturnValue(injectedNamespace);

      const namespace = useGetDerivedNamespace();

      expect(namespace.value).toBe('injected');
      expect(inject).toHaveBeenCalledWith(namespaceContextKey, ref(defaultNamespace));
    });
  });

  describe('集成测试', () => {
    test('完整的按钮组件场景', () => {
      vi.mocked(getCurrentInstance).mockReturnValue(null);

      const ns = useNamespace('button');

      // 模拟一个按钮组件的类名组合
      const buttonClasses = [
        ns.b(),
        ns.b('primary'),
        ns.is('disabled', true),
        ns.is('loading', false)
      ].filter(Boolean);

      expect(buttonClasses).toEqual([
        's-button',
        's-button-primary',
        'is-disabled'
      ]);

      // 模拟按钮的 CSS 变量
      const buttonStyles = ns.cssVarBlock({
        color: '#409eff',
        borderRadius: '4px',
        padding: '8px 16px'
      });

      expect(buttonStyles).toEqual({
        '--s-button-color': '#409eff',
        '--s-button-borderRadius': '4px',
        '--s-button-padding': '8px 16px'
      });
    });

    test('复杂的 BEM 组合场景', () => {
      vi.mocked(getCurrentInstance).mockReturnValue(null);

      const ns = useNamespace('card');

      // 模拟一个复杂卡片的类名
      const cardClasses = [
        ns.b(),
        ns.b('featured'),
        ns.e('header'),
        ns.e('content'),
        ns.em('header', 'large'),
        ns.is('interactive', true)
      ].filter(Boolean);

      expect(cardClasses).toEqual([
        's-card',
        's-card-featured',
        's-card__header',
        's-card__content',
        's-card__header--large',
        'is-interactive'
      ]);
    });

    test('多组件命名空间隔离', () => {
      vi.mocked(getCurrentInstance).mockReturnValue(null);

      const buttonNs = useNamespace('button');
      const inputNs = useNamespace('input');

      expect(buttonNs.b()).toBe('s-button');
      expect(inputNs.b()).toBe('s-input');
      expect(buttonNs.e('icon')).toBe('s-button__icon');
      expect(inputNs.e('icon')).toBe('s-input__icon');

      // CSS 变量也应该隔离
      expect(buttonNs.cssVarBlockName('color')).toBe('--s-button-color');
      expect(inputNs.cssVarBlockName('color')).toBe('--s-input-color');
    });
  });

  describe('性能测试', () => {
    test('应该能够快速生成大量类名', () => {
      vi.mocked(getCurrentInstance).mockReturnValue(null);

      const ns = useNamespace('test');
      const startTime = performance.now();

      // 生成 1000 个类名
      for (let i = 0; i < 1000; i++) {
        ns.b(`item-${i}`);
        ns.e(`element-${i}`);
        ns.m(`modifier-${i}`);
      }

      const endTime = performance.now();
      const duration = endTime - startTime;

      // 应该在 100ms 内完成
      expect(duration).toBeLessThan(100);
    });
  });
});
