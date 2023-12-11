# Empty 空状态

:::demo

```vue
<s-empty></s-empty>
```
:::

## 自定义图片

:::demo 通过设置 image 属性传入图片 URL。

```vue
<s-empty
  image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
></s-empty>
```
:::

## 图片尺寸

:::demo 通过使用 `image-size` 属性来控制图片大小。

```vue
<s-empty :image-size="200"></s-empty>
```
:::

## 底部内容

:::demo 使用默认插槽可在底部插入内容。
```vue
<s-empty><s-button type="primary">Button</s-button></s-empty>
```
:::

## Empty API

### 插槽

| 插槽名      | 描述说明           |
| ----------- | ------------------ |
| default     | 作为底部内容的内容 |
| image       | 作为图像的内容     |
| description | 作为描述的内容     |

### 属性

| 属性名      | 说明                         | 类型   | 默认值 |
| ----------- | ---------------------------- | ------ | ------ |
| image       | empty 组件的图像地址         | string | ''     |
| image-size  | empty 组件的图像尺寸（宽度） | number | —      |
| description | empty 组件的描述信息         | string | ''     |
