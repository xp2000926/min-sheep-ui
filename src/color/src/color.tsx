import { defineComponent, toRefs } from 'vue'
import { ColorProps, colorProps } from './color-type'
import '../../index.scss'
import '../style/color.scss'

export default defineComponent({
  name: 'SColor',
  props: colorProps,
  setup(props: ColorProps) {
    const { color, title, theme } = toRefs(props)
    console.log(theme.value)

    const newList = [
      'rgb(83, 168, 255)',
      'rgb(102, 177, 255)',
      'rgb(121, 187, 255)',
      'rgb(140, 197, 255)',
      'rgb(160, 207, 255)',
      'rgb(179, 216, 255)',
      'rgb(198, 226, 255)',
      'rgb(217, 236, 255)',
      'rgb(236, 245, 255)',
      'rgb(245, 255, 255)'
    ]

    return () => (
      <div class="s-color" style={{ backgroundColor: color.value }}>
        <div class="title">{title.value}</div>
        <div class="color">{color.value}</div>
        <div class="bg-color-sub">
          {newList.map((item, index) => (
            <div
              class="bg-blue-sub-item"
              key={index}
              style={{ backgroundColor: item }}
            ></div>
          ))}
        </div>
      </div>
    )
  }
})
