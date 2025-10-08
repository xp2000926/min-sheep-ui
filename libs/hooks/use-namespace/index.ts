import { computed, getCurrentInstance, inject, ref, unref } from 'vue';

import type { InjectionKey, Ref } from 'vue';

/**
 * 默认命名空间前缀
 * @default 's'
 */
export const defaultNamespace = 's';

/**
 * 状态类名前缀
 * @default 'is-'
 */
const statePrefix = 'is-';

/**
 * BEM 命名规范的内部实现函数
 * @param namespace 命名空间前缀
 * @param block 块名
 * @param blockSuffix 块后缀
 * @param element 元素名
 * @param modifier 修饰符
 * @returns 生成的类名
 *
 * @example
 * _bem('s', 'button', 'primary', 'icon', 'large')
 * // 返回: 's-button-primary__icon--large'
 */
const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};

/**
 * 命名空间上下文的注入键
 * 用于在组件树中传递命名空间信息
 */
export const namespaceContextKey: InjectionKey<Ref<string | undefined>> =
  Symbol('namespaceContextKey');

/**
 * 获取派生的命名空间
 * 优先级：namespaceOverrides > 注入的上下文 > 默认命名空间
 *
 * @param namespaceOverrides 可选的命名空间覆盖
 * @returns 响应式的命名空间引用
 */
export const useGetDerivedNamespace = (
  namespaceOverrides?: Ref<string | undefined>
) => {
  const derivedNamespace =
    namespaceOverrides ||
    (getCurrentInstance()
      ? inject(namespaceContextKey, ref(defaultNamespace))
      : ref(defaultNamespace));
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};

/**
 * useNamespace Hook - BEM 命名规范工具
 *
 * 基于 BEM (Block Element Modifier) 命名规范，提供统一的 CSS 类名生成工具。
 * 支持命名空间隔离、CSS 变量生成等功能。
 *
 * @param block 组件块名，如 'button'、'input' 等
 * @param namespaceOverrides 可选的命名空间覆盖，用于临时修改命名空间
 * @returns 包含各种类名生成方法和 CSS 变量工具的命名空间对象
 *
 * @example
 * ```typescript
 * // 基础使用
 * const ns = useNamespace('button');
 *
 * // 生成类名
 * ns.b() // 's-button'
 * ns.b('primary') // 's-button-primary'
 * ns.e('icon') // 's-button__icon'
 * ns.m('large') // 's-button--large'
 * ns.be('primary', 'icon') // 's-button-primary__icon'
 * ns.em('icon', 'large') // 's-button__icon--large'
 * ns.bm('primary', 'large') // 's-button-primary--large'
 * ns.bem('primary', 'icon', 'large') // 's-button-primary__icon--large'
 *
 * // 状态类名
 * ns.is('disabled', true) // 'is-disabled'
 * ns.is('active') // 'is-active'
 *
 * // CSS 变量
 * ns.cssVar({ color: '#409eff', size: '14px' })
 * // { '--s-color': '#409eff', '--s-size': '14px' }
 *
 * ns.cssVarBlock({ color: '#409eff' })
 * // { '--s-button-color': '#409eff' }
 * ```
 *
 * @example
 * ```vue
 * <template>
 *   <button
 *     :class="[
 *       ns.b(),
 *       ns.b('primary'),
 *       ns.is('disabled', disabled),
 *       ns.is('loading', loading)
 *     ]"
 *     :style="ns.cssVarBlock({
 *       color: primaryColor,
 *       size: buttonSize
 *     })"
 *   >
 *     <span :class="ns.e('icon')" v-if="icon">
 *       <Icon :name="icon" />
 *     </span>
 *     <span :class="ns.e('text')">{{ text }}</span>
 *   </button>
 * </template>
 *
 * <script setup>
 * import { useNamespace } from '@/hooks/use-namespace';
 *
 * const ns = useNamespace('button');
 * const props = defineProps({
 *   disabled: Boolean,
 *   loading: Boolean,
 *   primary: Boolean,
 *   icon: String,
 *   text: String,
 *   primaryColor: String,
 *   buttonSize: String
 * });
 * </script>
 *
 * <style scoped>
 * 基础样式
 * .s-button {
 *   display: inline-flex;
 *   align-items: center;
 *   padding: 8px 16px;
 *   border-radius: 4px;
 *   border: 1px solid transparent;
 *   cursor: pointer;
 *   font-size: var(--s-button-size, 14px);
 *   color: var(--s-button-color, #606266);
 *   background: #fff;
 *   border-color: #dcdfe6;
 * }
 *
 * 主要按钮样式
 * .s-button-primary {
 *   background: var(--s-button-color, #409eff);
 *   border-color: var(--s-button-color, #409eff);
 *   color: #fff;
 * }
 *
 * 禁用状态
 * .s-button.is-disabled {
 *   opacity: 0.6;
 *   cursor: not-allowed;
 * }
 *
 * 图标样式
 * .s-button__icon {
 *   margin-right: 4px;
 * }
 *
 * 文字样式
 * .s-button__text {
 *   flex: 1;
 * }
 * </style>
 * ```
 *
 * @example
 * ```typescript
 * // 自定义命名空间
 * const customNs = useNamespace('my-button', ref('custom'));
 * customNs.b() // 'custom-my-button'
 *
 * // 使用 CSS 变量
 * const styles = ns.cssVarBlock({
 *   'border-radius': '8px',
 *   'padding': '12px 24px'
 * });
 * // 结果: { '--s-button-border-radius': '8px', '--s-button-padding': '12px 24px' }
 * ```
 */
export const useNamespace = (
  block: string,
  namespaceOverrides?: Ref<string | undefined>
) => {
  const namespace = useGetDerivedNamespace(namespaceOverrides);

  /**
   * 生成块级类名
   * @param blockSuffix 块后缀，如 'primary'、'secondary' 等
   * @returns 生成的类名
   */
  const b = (blockSuffix = '') =>
    _bem(namespace.value, block, blockSuffix, '', '');

  /**
   * 生成元素类名
   * @param element 元素名，如 'icon'、'text' 等
   * @returns 生成的类名，如果 element 为空则返回空字符串
   */
  const e = (element?: string) =>
    element ? _bem(namespace.value, block, '', element, '') : '';

  /**
   * 生成修饰符类名
   * @param modifier 修饰符，如 'large'、'small' 等
   * @returns 生成的类名，如果 modifier 为空则返回空字符串
   */
  const m = (modifier?: string) =>
    modifier ? _bem(namespace.value, block, '', '', modifier) : '';

  /**
   * 生成块+元素类名
   * @param blockSuffix 块后缀
   * @param element 元素名
   * @returns 生成的类名，如果任一参数为空则返回空字符串
   */
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? _bem(namespace.value, block, blockSuffix, element, '')
      : '';

  /**
   * 生成元素+修饰符类名
   * @param element 元素名
   * @param modifier 修饰符
   * @returns 生成的类名，如果任一参数为空则返回空字符串
   */
  const em = (element?: string, modifier?: string) =>
    element && modifier
      ? _bem(namespace.value, block, '', element, modifier)
      : '';

  /**
   * 生成块+修饰符类名
   * @param blockSuffix 块后缀
   * @param modifier 修饰符
   * @returns 生成的类名，如果任一参数为空则返回空字符串
   */
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier
      ? _bem(namespace.value, block, blockSuffix, '', modifier)
      : '';

  /**
   * 生成块+元素+修饰符类名
   * @param blockSuffix 块后缀
   * @param element 元素名
   * @param modifier 修饰符
   * @returns 生成的类名，如果任一参数为空则返回空字符串
   */
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(namespace.value, block, blockSuffix, element, modifier)
      : '';

  /**
   * 生成状态类名
   * @param name 状态名称，如 'disabled'、'active' 等
   * @param state 状态值，默认为 true
   * @returns 生成的状态类名，格式为 'is-{name}'
   *
   * @example
   * is('disabled', true) // 'is-disabled'
   * is('active') // 'is-active'
   * is('loading', false) // ''
   */
  const is: {
    (name: string, state: boolean | undefined): string;
    (name: string): string;
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true;
    return name && state ? `${statePrefix}${name}` : '';
  };

  /**
   * 生成 CSS 变量对象
   * @param object CSS 变量键值对
   * @returns 包含 CSS 变量的样式对象
   *
   * @example
   * cssVar({ color: '#409eff', size: '14px' })
   * // { '--s-color': '#409eff', '--s-size': '14px' }
   */
  const cssVar = (object: Record<string, string>) => {
    const styles: Record<string, string> = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };

  /**
   * 生成带块名的 CSS 变量对象
   * @param object CSS 变量键值对
   * @returns 包含带块名的 CSS 变量的样式对象
   *
   * @example
   * cssVarBlock({ color: '#409eff', size: '14px' })
   * // { '--s-button-color': '#409eff', '--s-button-size': '14px' }
   */
  const cssVarBlock = (object: Record<string, string>) => {
    const styles: Record<string, string> = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };

  /**
   * 生成 CSS 变量名
   * @param name 变量名
   * @returns CSS 变量名，格式为 '--{namespace}-{name}'
   *
   * @example
   * cssVarName('color') // '--s-color'
   */
  const cssVarName = (name: string) => `--${namespace.value}-${name}`;

  /**
   * 生成带块名的 CSS 变量名
   * @param name 变量名
   * @returns CSS 变量名，格式为 '--{namespace}-{block}-{name}'
   *
   * @example
   * cssVarBlockName('color') // '--s-button-color'
   */
  const cssVarBlockName = (name: string) =>
    `--${namespace.value}-${block}-${name}`;

  return {
    /** 当前命名空间 */
    namespace,
    /** 块级类名生成器 */
    b,
    /** 元素类名生成器 */
    e,
    /** 修饰符类名生成器 */
    m,
    /** 块+元素类名生成器 */
    be,
    /** 元素+修饰符类名生成器 */
    em,
    /** 块+修饰符类名生成器 */
    bm,
    /** 块+元素+修饰符类名生成器 */
    bem,
    /** 状态类名生成器 */
    is,
    // CSS 变量相关
    /** CSS 变量对象生成器 */
    cssVar,
    /** CSS 变量名生成器 */
    cssVarName,
    /** 带块名的 CSS 变量对象生成器 */
    cssVarBlock,
    /** 带块名的 CSS 变量名生成器 */
    cssVarBlockName
  };
};
