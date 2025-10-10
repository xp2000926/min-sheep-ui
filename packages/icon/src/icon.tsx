import {
  computed,
  defineComponent,
  onUnmounted,
  ref,
  toRefs,
  unref,
  watch,
  getCurrentInstance
} from 'vue';
import { type IconProps, iconProps } from './icon-type';
import * as IconParkIcons from '@icon-park/svg';
import { IconWrapper, getConfig } from '@icon-park/svg/lib/runtime';

// 全局缓存，跟踪已加载的iconfont资源及其引用计数
const iconfontCache = new Map<
  string,
  {
    element: HTMLLinkElement | HTMLScriptElement;
    refCount: number;
  }
>();
// 全局icon配置
let globalIconConfig: {
  css?: string[];
  js?: string[];
  defaultProps?: Partial<IconProps>;
} = {};

// 提供设置全局配置的方法
export const setGlobalIconConfig = (config: typeof globalIconConfig) => {
  globalIconConfig = { ...globalIconConfig, ...config };
};

export default defineComponent({
  name: 'SIcon',
  props: iconProps,
  setup(props: IconProps) {
    const vm = getCurrentInstance();
    const {
      iconType,
      name,
      theme,
      size,
      color,
      fill,
      type,
      iconfontUrl: propIconfontUrl,
      class: customClass,
      style: customStyle
    } = toRefs(props);
    // 获取全局默认属性
    const globalDefaultProps =
      vm?.appContext.config.globalProperties.$iconDefaultProps || {};
    // 合并属性（组件props优先级高于全局默认值）
    const mergedProps = computed(() => ({
      ...globalDefaultProps,
      iconType: unref(iconType),
      name: unref(name),
      theme: unref(theme),
      size: unref(size),
      color: unref(color),
      fill: unref(fill),
      type: unref(type),
      iconfontUrl: unref(propIconfontUrl)
    }));
    // 确定要使用的iconfontUrl（优先使用组件props，其次使用全局配置）
    const iconfontUrl = computed(() => {
      // 组件显式指定了url，优先使用
      if (mergedProps.value.iconfontUrl) {
        return mergedProps.value.iconfontUrl;
      }

      // 未指定时，从全局配置中获取
      if (mergedProps.value.iconType === 'iconfont') {
        // 优先使用全局JS资源
        if (globalIconConfig.js && globalIconConfig.js.length > 0) {
          return globalIconConfig.js[0];
        }
        // 其次使用全局CSS资源
        if (globalIconConfig.css && globalIconConfig.css.length > 0) {
          return globalIconConfig.css[0];
        }
      }
      return undefined;
    });

    // -------------------------- Iconfont 加载与类型判断 --------------------------
    const iconfontLoaded = ref(false);
    const currentIconfontUrl = ref<string | undefined>(undefined);

    // 区分 iconfont 加载类型（JS/Symbol 或 CSS）
    const iconfontType = computed(() => {
      const url = unref(iconfontUrl);
      if (!url) return null;
      return url.endsWith('.js') ? 'js-symbol' : 'css';
    });

    /** 加载 iconfont 资源 */
    const loadIconfont = () => {
      const currentIconType = unref(iconType);
      const url = unref(iconfontUrl);
      const type = iconfontType.value;

      if (currentIconType !== 'iconfont' || !url) {
        // 如果不是iconfont类型或没有url，重置状态
        iconfontLoaded.value = false;
        currentIconfontUrl.value = undefined;
        return;
      }

      // 如果url没变且已加载，不做处理
      if (url === currentIconfontUrl.value && iconfontLoaded.value) {
        return;
      }

      // 先处理之前的url（如果有）
      if (currentIconfontUrl.value && currentIconfontUrl.value !== url) {
        unloadCurrentIconfont();
      }

      currentIconfontUrl.value = url;

      // 检查缓存
      const cached = iconfontCache.get(url);
      if (cached) {
        // 已缓存，增加引用计数
        cached.refCount++;
        iconfontLoaded.value = true;
        return;
      }

      // 未缓存，创建新元素加载资源
      let element: HTMLLinkElement | HTMLScriptElement;

      // 加载 JS/Symbol 模式
      if (type === 'js-symbol') {
        const script = document.createElement('script');
        script.src = url;
        script.defer = true;
        script.onload = () => {
          iconfontLoaded.value = true;
          console.log('Iconfont JS（Symbol）加载成功:', url);
        };
        script.onerror = () => console.error('Iconfont JS 加载失败:', url);
        element = script;
        document.body.appendChild(script);
      }
      // 加载 CSS 模式
      else if (type === 'css') {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.crossOrigin = 'anonymous';
        link.onload = () => {
          iconfontLoaded.value = true;
          console.log('Iconfont CSS 加载成功:', url);
        };
        link.onerror = () => console.error('Iconfont CSS 加载失败:', url);
        element = link;
        document.head.appendChild(link);
      } else {
        console.error('不支持的iconfont类型');
        return;
      }

      // 添加到缓存
      iconfontCache.set(url, {
        element,
        refCount: 1
      });
    };

    /** 卸载当前使用的iconfont资源 */
    const unloadCurrentIconfont = () => {
      const url = currentIconfontUrl.value;
      if (!url) return;

      const cached = iconfontCache.get(url);
      if (cached) {
        // 减少引用计数
        cached.refCount--;

        // 当引用计数为0时，从DOM中移除并从缓存中删除
        if (cached.refCount <= 0) {
          if (cached.element.parentElement) {
            cached.element.parentElement.removeChild(cached.element);
          }
          iconfontCache.delete(url);
          console.log('Iconfont 资源已卸载:', url);
        }
      }

      iconfontLoaded.value = false;
      currentIconfontUrl.value = undefined;
    };

    watch([iconfontUrl, iconType], loadIconfont, { immediate: true });
    onUnmounted(unloadCurrentIconfont);

    // -------------------------- 样式计算 --------------------------
    const baseStyles = computed(() => {
      const styles: Record<string, string | number> = {
        display: 'inline-block',
        verticalAlign: 'unset' // 垂直居中对齐
      };

      // 处理尺寸
      const currentSize = unref(size);
      if (currentSize) {
        const sizeValue =
          typeof currentSize === 'number' ? `${currentSize}px` : currentSize;

        if (unref(iconType) === 'iconfont') {
          switch (iconfontType.value) {
            case 'js-symbol':
              styles.width = sizeValue;
              styles.height = sizeValue;
              break;
            case 'css':
              styles.height = sizeValue;
              styles.fontSize = sizeValue; // CSS模式用font-size控制
              break;
          }
        } else {
          // Icon 模式
          styles.width = sizeValue;
          styles.height = sizeValue;
        }
      }

      // 处理颜色
      if (unref(color)) {
        styles.color = unref(color);
        // Symbol模式需要额外设置fill
        if (
          unref(iconType) === 'iconfont' &&
          iconfontType.value === 'js-symbol'
        ) {
          styles.fill = unref(color);
        }
      }

      return styles;
    });

    // 合并自定义样式（优先级最高）
    const customStyles = computed(() => {
      // console.log({
      //   ...baseStyles.value,
      //   ...unref(customStyle),
      // });

      return {
        ...baseStyles.value,
        ...unref(customStyle)
      };
    });

    // -------------------------- 类名计算 --------------------------
    const iconClass = computed(() => {
      const baseClass = 's-icon';
      const classes = [baseClass];

      // 类型样式（如 primary/success）
      if (unref(type)) {
        classes.push(`${baseClass}--${unref(type)}`);
      }

      // Iconfont CSS模式必须的基础类
      if (unref(iconType) === 'iconfont' && iconfontType.value === 'css') {
        classes.push('iconfont');
      }

      // 自定义类名
      if (unref(customClass)) {
        classes.push(unref(customClass));
      }

      return classes.join(' ');
    });

    // -------------------------- 渲染逻辑 --------------------------
    /** 渲染 iconfont 图标 */
    const renderIconfont = () => {
      const iconName = unref(name);
      const url = unref(iconfontUrl);
      const type = iconfontType.value;

      if (!iconName) {
        console.warn(
          'Iconfont: 请通过 "name" 传入图标名（如 "icon-a-bianzu2"）'
        );
        return null;
      }
      if (!url) {
        console.warn('Iconfont: 请通过 "iconfontUrl" 传入 JS/CSS 地址');
        return null;
      }

      // 加载中状态
      if (!iconfontLoaded.value) {
        return <div class="s-icon__loading">加载中...</div>;
      }

      // JS/Symbol 模式渲染
      if (type === 'js-symbol') {
        return (
          <svg
            class={`${iconClass.value} s-icon-${iconName.replace('icon-', '')}`}
            style={customStyles.value}
            aria-label={iconName.replace('icon-', '') || 'icon'}
            viewBox="0 0 1024 1024"
          >
            <use xlinkHref={`#${iconName}`} />
          </svg>
        );
      }

      // CSS 模式渲染
      if (type === 'css') {
        return (
          <i
            class={`${
              iconClass.value
            } ${iconName} s-icon-${iconName.replace('icon-', '')}`}
            style={customStyles.value}
            aria-label={iconName.replace('icon-', '') || 'icon'}
          />
        );
      }

      return null;
    };

    /** 渲染 IconPark 图标 */
    const renderIconPark = () => {
      const iconName = unref(name);
      if (!iconName) return null;

      // 转换为 PascalCase 匹配 IconPark 图标命名
      const pascalCaseName = iconName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

      const OfficialIcon = (IconParkIcons as Record<string, any>)[
        pascalCaseName
      ];
      if (!OfficialIcon) {
        console.warn(`Icon: 未找到图标 "${iconName}"`);
        return null;
      }

      // 使用官方 IconWrapper 渲染
      const iconRenderer = IconWrapper(iconName, svgProps =>
        OfficialIcon(svgProps)
      );

      try {
        const svgString = iconRenderer({
          theme: unref(theme) || getConfig().theme,
          size: unref(size) || getConfig().size,
          fill:
            unref(fill) ||
            (unref(color)
              ? [unref(color)]
              : getConfig().colors[getConfig().theme].fill)
        });
        return <i class="s-icon__svg" innerHTML={svgString} />;
      } catch (error) {
        console.error(`Icon: 渲染图标 "${iconName}" 失败`, error);
        return null;
      }
    };

    /** 统一渲染入口 */
    const renderIcon = () => {
      return unref(iconType) === 'iconfont'
        ? renderIconfont()
        : renderIconPark();
    };

    return () => (
      <div class={iconClass.value} style={customStyles.value}>
        {renderIcon()}
      </div>
    );
  }
});

// export default defineComponent({
//   name: 'SIcon',
//   props: iconProps,
//   setup(props: IconProps) {
//     const { name, size } = toRefs(props);
//     const imgIcon = <img src={name.value} width={size.value} />;
//     const fontIcon = <span class=""></span>;
//     const icon = /http|https/.test(name.value) ? imgIcon : fontIcon;
//     return () => <div class="s-icon">{icon}</div>;
//   }
// });
