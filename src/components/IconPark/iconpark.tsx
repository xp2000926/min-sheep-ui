import { defineComponent, computed, toRefs, unref } from 'vue';
import { iconParkProps } from './iconpark-type';
import * as IconParkIcons from '@icon-park/svg';

/**
 * IconPark 图标组件
 * 基于 @icon-park/svg 的 Vue 3 图标组件
 */
export default defineComponent({
  props: iconParkProps,
  setup(props: any) {
    const {
      name,
      theme,
      size,
      fill,
      stroke,
      strokeWidth,
      strokeLinejoin,
      strokeLinecap,
      type,
      color,
      spin,
      rotation,
      flip,
      class: customClass,
      style: customStyle
    } = toRefs(props);

    /**
     * 获取图标组件
     */
    const getIconComponent = () => {
      const iconName = unref(name);
      if (!iconName) return null;

      // 将图标名称转换为 PascalCase
      const pascalCaseName = iconName
        .split('-')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      console.log('pascalCaseName', pascalCaseName);

      return (IconParkIcons as any)[pascalCaseName];
    };

    /**
     * 渲染自定义 SVG 图标
     */
    const renderCustomSvg = () => {
      const iconName = unref(name);
      if (!iconName) return null;

      // 检查是否是自定义 SVG 图标
      const customSvgMap: Record<string, string> = {
        users: `<svg data-icon="users" role="img" viewBox="0 0 640 512" aria-hidden="true"><path class="" fill="currentColor" d="M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"></path></svg>`
      };

      const customSvg = customSvgMap[iconName];
      if (customSvg) {
        return <div innerHTML={customSvg}></div>;
      }

      return null;
    };

    /**
     * 计算图标属性
     */
    const iconProps = computed(() => {
      const props: Record<string, any> = {};

      if (unref(theme)) props.theme = unref(theme);
      if (unref(size)) props.size = unref(size);
      if (unref(fill)) props.fill = unref(fill);
      if (unref(stroke)) props.stroke = unref(stroke);
      if (unref(strokeWidth)) props.strokeWidth = unref(strokeWidth);
      if (unref(strokeLinejoin)) props.strokeLinejoin = unref(strokeLinejoin);
      if (unref(strokeLinecap)) props.strokeLinecap = unref(strokeLinecap);

      return props;
    });

    /**
     * 计算自定义样式
     */
    const customStyles = computed(() => {
      const styles: Record<string, any> = {};

      // 自定义颜色
      if (unref(color)) {
        styles.color = unref(color);
      }

      // 旋转角度
      if (unref(rotation)) {
        styles.transform = `rotate(${unref(rotation)}deg)`;
      }

      // 翻转
      if (unref(flip)) {
        const flipValue = unref(flip);
        if (flipValue === 'horizontal') {
          styles.transform = `${styles.transform || ''} scaleX(-1)`;
        } else if (flipValue === 'vertical') {
          styles.transform = `${styles.transform || ''} scaleY(-1)`;
        } else if (flipValue === 'both') {
          styles.transform = `${styles.transform || ''} scale(-1, -1)`;
        }
      }

      // 合并自定义样式
      if (unref(customStyle)) {
        Object.assign(styles, unref(customStyle));
      }

      return styles;
    });

    /**
     * 计算组件类名
     */
    const iconClass = computed(() => {
      const baseClass = 's-iconpark';
      const classes = [baseClass];

      // 类型样式
      if (unref(type)) {
        classes.push(`${baseClass}--${unref(type)}`);
      }

      // 旋转动画
      if (unref(spin)) {
        classes.push(`${baseClass}--spin`);
      }

      // 自定义类名
      if (unref(customClass)) {
        classes.push(unref(customClass));
      }

      return classes.join(' ');
    });

    /**
     * 渲染图标 SVG
     */
    const renderIcon = () => {
      const iconName = unref(name);

      // 首先尝试渲染自定义 SVG
      const customSvg = renderCustomSvg();
      if (customSvg) {
        return customSvg;
      }

      // 然后尝试渲染 IconPark 图标
      const IconComponent = getIconComponent();
      if (!IconComponent) {
        console.warn(`IconPark: 未找到图标 "${iconName || 'unknown'}"`);
        return null;
      }

      try {
        const svgString = IconComponent(iconProps.value);
        return <div innerHTML={svgString || ''}></div>;
      } catch (error) {
        console.error(
          `IconPark: 渲染图标 "${iconName || 'unknown'}" 时出错:`,
          error
        );
        return null;
      }
    };

    return () => (
      <i class={iconClass.value} style={customStyles.value}>
        {renderIcon()}
      </i>
    );
  }
});
