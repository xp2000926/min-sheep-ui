import { computed, defineComponent } from 'vue'
import { IconProps, iconProps } from './icon-type'
import '../../index.scss'
import '../style/icon.scss'

// 引入字体图标css
import '../style/iconfont.js'

export default defineComponent({
  name: 'SIcon',
  props: iconProps,
  setup(props: IconProps, { attrs }) {
    // 获取尺寸
    const iconSize = computed(() =>
      typeof props.size === 'number' ? `${props.size}px` : props.size
    )

    //如果是远程资源，使用图片显示
    const imgIcon = (
      <img
        src={props.name}
        style={{ width: iconSize.value, verticalAlign: 'middle' }}
        {...attrs}
      />
    )
    // 否则用span的class显示字体图标
    const fontIcon = (
      <span
        class={[props.prefix, props.prefix + '-' + props.name]}
        style={{ fontSize: iconSize.value, color: props.color }}
      />
    )
    //svg
    const svgIcon = (
      <svg
        style={{
          width: iconSize.value,
          height: iconSize.value
        }}
      >
        <use
          xlinkHref={`#${props.prefix}-${props.component}`}
          fill={props.color}
        ></use>
      </svg>
    )
    const icon = props.component
      ? svgIcon
      : /http|https/.test(props.name)
      ? imgIcon
      : fontIcon
    return () => icon
  }
})
