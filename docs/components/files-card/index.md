# FilesCard 文件卡片

> s-files-card 组件是一个灵活的文件展示组件，支持多种文件类型（图片、文档、压缩包等）的可视化呈现，包含文件图标、名称、描述、状态等信息，同时提供丰富的自定义选项和交互功能，适用于文件管理、上传预览等场景。

## 基本使用

> 你可以在 组件实例上拿到 colorMap 内置文件类型 fileType: color 对象。 内置了 16 种文件类型图标。

:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <span>设置 name 属性, 且 name 没有后缀。name="测试文件"</span>
    <s-files-card ref="s-files-cardRef" name="测试文件" />
    <span>设置 name 属性，有文件后缀。name="测试文件.pdf"</span>
    <s-files-card name="测试文件.pdf" />
    <span>支持更据 name 后缀匹配内置图标 </span>
    <div class="files-card-container">
      <s-files-card name="测试doc后缀.doc" />
      <s-files-card name="测试xls后缀.xls" />
      <s-files-card name="测试ppt后缀.ppt" />
      <s-files-card name="测试txt后缀.txt" />
      <s-files-card name="测试pdf后缀.pdf" />
      <s-files-card name="测试png后缀.png" />
      <s-files-card name="测试jpg后缀.jpg" />
      <s-files-card name="测试gif后缀.gif" />
      <s-files-card name="测试mp4后缀.mp4" />
      <s-files-card name="测试mp3后缀.mp3" />
      <s-files-card name="测试zip后缀.zip" />
      <s-files-card name="测试rar后缀.rar" />
      <s-files-card name="测试7z后缀.7z" />
      <s-files-card name="测试lnk后缀.lnk" />
      <s-files-card name="测试obj后缀.obj" />
      <s-files-card name="测试fbx后缀.fbx" />
      <s-files-card name="测试glb后缀.glb" />
      <s-files-card name="测试sql后缀.sql" />
      <s-files-card name="测试db后缀.db" />
      <s-files-card name="测试md后缀.md" />
      <s-files-card name="测试js后缀.js" />
      <s-files-card name="测试py后缀.py" />
      <s-files-card name="测试java后缀.java" />
      <s-files-card name="测试php后缀.php" />
      <s-files-card name="测试json后缀.json" />
    </div>
    <span>如果有后缀，但是匹配不到常用的图标，则默认为 File 文件</span>
    <s-files-card name="https://dd.com多个特殊字符.后缀.self" />
  </div>
</template>
<style scoped lang="scss">
.files-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
```
:::

## 状态设置

> 控制文件加载状态（上传中、完成、失败）及进度显示。

:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <div class="files-card-container-wrapper">
      <span>设置 status 属性，控制文件加载状态 "uploading","done","error"</span>
      <div class="files-card-container">
        <s-files-card name="uploading 测试文件.pdf" status="uploading" />
        <s-files-card name="done 测试文件.pdf" status="done" />
        <s-files-card name="error 测试文件.pdf" status="error" />
      </div>
      <span>"uploading"+"percent"
        控制上传进度，"error"+"errorTip"控制自定义失败提示
      </span>
      <div class="files-card-container">
        <s-files-card
          name="uploading 测试文件.doc"
          status="uploading"
          :percent="50"
        />
        <s-files-card
          name="error 测试文件.doc"
          status="error"
          error-tip="自定义失败提示"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.files-card-container-wrapper {
  display: flex;
  gap: 12px;
  flex-direction: column;

  .files-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>
```
:::

## 展示删除图标

> 可以设置 showDelIcon 属性来显示删除图标，并设置 @delete 方法来设置删除事件。

:::demo
```vue
<script setup lang="ts">
function handleDel() {
  console.log('删除');
  // ElMessage.success('删除成功');
}
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <s-files-card name="删除测试文件.md" show-del-icon @delete="handleDel" />
  </div>
</template>
```
:::

## 图片文件展示

> 支持图片预览、正方形/长方形变体、上传状态覆盖层等功能。同样也可以 通过 status 和 percent 控制。

:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <div class="files-card-container-wrapper">
      <span>图片文件 <span style="color: red">可预览</span> 和
        <span style="color: red">不可预览</span></span>
      <div class="files-card-container">
        <s-files-card
          name="可预览的图片.jpeg"
          show-del-icon
          url="https://avatars.githubusercontent.com/u/76239030?v=4"
        />
        <s-files-card name="无法预览的图片.jpeg" show-del-icon />
      </div>
      <span>图片文件
        <span style="color: red">正方形变体</span>
        其他格式不受变体属性影响</span>
      <div class="files-card-container">
        <s-files-card
          name="可预览的图片.jpeg"
          url="https://avatars.githubusercontent.com/u/76239030?v=4"
          img-variant="square"
          show-del-icon
        />
        <s-files-card
          name="无法预览的图片.jpeg"
          img-variant="square"
          show-del-icon
        />
        <s-files-card
          name="其他文件不受变体影响.txt"
          img-variant="square"
          show-del-icon
          :file-size="30000"
        />
      </div>
      <span>图片文件 默认长方形变体
        <span style="color: red">支持上传状态 、支持预览开启关闭 、支持预览遮罩蒙层开启关闭</span></span>
      <div class="files-card-container">
        <s-files-card
          name="上传进度.jpeg"
          :percent="50"
          status="uploading"
          show-del-icon
          url="https://avatars.githubusercontent.com/u/76239030?v=4"
        />
        <s-files-card
          name="上传失败.jpeg"
          status="error"
          show-del-icon
          url="https://avatars.githubusercontent.com/u/76239030?v=4"
        />
        <s-files-card
          name="关闭预览悬停遮罩.jpeg"
          :img-preview-mask="false"
          show-del-icon
          url="https://avatars.githubusercontent.com/u/76239030?v=4"
        />
        <s-files-card
          name="关闭预览功能.jpeg"
          :img-preview="false"
          show-del-icon
          url="https://avatars.githubusercontent.com/u/76239030?v=4"
        />
      </div>

      <span>图片文件 正方形变体
        <span style="color: red">支持上传状态 、支持预览开启关闭 、支持预览遮罩蒙层开启关闭</span></span>
      <div class="files-card-container">
        <s-files-card
          name="上传进度.jpeg"
          img-variant="square"
          :percent="50"
          status="uploading"
          show-del-icon
          url="https://avatars.githubusercontent.com/u/76239030?v=4"
        />
        <s-files-card
          name="上传失败.jpeg"
          img-variant="square"
          status="error"
          show-del-icon
          url="https://avatars.githubusercontent.com/u/76239030?v=4"
        />
        <s-files-card
          name="上传完成.jpeg"
          img-variant="square"
          show-del-icon
          url="https://avatars.githubusercontent.com/u/76239030?v=4"
        />
        <s-files-card
          name="关闭预览悬停遮罩.jpeg"
          img-variant="square"
          :img-preview-mask="false"
          show-del-icon
          url="https://avatars.githubusercontent.com/u/76239030?v=4"
        />
        <s-files-card
          name="关闭预览功能.jpeg"
          img-variant="square"
          :img-preview="false"
          show-del-icon
          url="https://avatars.githubusercontent.com/u/76239030?v=4"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.files-card-container-wrapper {
  display: flex;
  gap: 12px;
  flex-direction: column;
  .files-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>
```
:::

## 自定义样式与交互

> 通过 style/hoverStyle 自定义卡片样式，支持悬停删除图标和自定义插槽扩展。

:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <s-files-card
      name="自定义style样式.xls"
      style="
        background-color: #f0f9eb;
        border: 2px solid #67c23a;
        border-radius: 20px;
      "
    />
    <s-files-card
      name="自定义hoverStyle样式.xls"
      style="
        background-color: #f0f9eb;
        border: 1px solid #67c23a;
        border-radius: 20px;
      "
      :hover-style="{
        'box-shadow': '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
        'border-color': 'red',
        'background-color': 'rgba(255, 0, 0, 0.1)'
      }"
    />
  </div>
</template>
```
:::

 ## 自定义内置文件颜色

:::demo
```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
// 自己定义文件颜色1
const colorMap1 = {
  word: '#5E74A8',
  excel: '#4A6B4A',
  ppt: '#C27C40',
  pdf: '#5A6976',
  txt: '#D4C58C',
  mark: '#FFA500',
  image: '#8E7CC3',
  audio: '#A67B5B',
  video: '#4A5568',
  three: '#5F9E86',
  code: '#4B636E',
  database: '#4A5A6B',
  link: '#5D7CBA',
  zip: '#8B5E3C',
  file: '#AAB2BF',
  unknown: '#888888'
};

// 自己定义文件颜色2
const colorMap2 = {
  word: '#0078D4',
  excel: '#4CB050',
  ppt: '#FF9933',
  pdf: '#E81123',
  txt: '#666666',
  mark: '#FFA500',
  image: '#B490F3',
  audio: '#00B2EE',
  video: '#2EC4B6',
  three: '#00C8FF',
  code: '#00589F',
  database: '#F5A623',
  link: '#007BFF',
  zip: '#888888',
  file: '#F0D9B5',
  unknown: '#D8D8D8'
};

const colorKeys = computed(() => Object.keys(colorMap1) as any[]);

const sfilescardProps = ref({
  uid: '1',
  name: '测试名称',
  description: '测试description'
});
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <div class="files-card-container-wrapper">
      <p>自定义颜色1</p>
      <div class="files-card-container">
        <s-files-card
          v-for="items in colorKeys"
          :key="items"
          v-bind="{ ...sfilescardProps }"
          :icon-color="colorMap1[items]"
          :file-type="items"
        />
      </div>
      <p>自定义颜色2</p>
      <div class="files-card-container">
        <s-files-card
          v-for="items in colorKeys"
          :key="items"
          v-bind="{ ...sfilescardProps }"
          :icon-color="colorMap2[items]"
          :file-type="items"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.files-card-container-wrapper {
  display: flex;
  gap: 12px;
  flex-direction: column;
  .files-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>
```
:::

## 属性

| 属性名           | 类型                             | 是否必填 | 默认值        | 描述                                                         |
| :--------------- | :------------------------------- | :------- | :------------ | :----------------------------------------------------------- |
| `uid`            | `string | number`                | 是       |               | 文件唯一标识符                                               |
| `name`           | `string`                         | 否       | `undefined`   | 文件名（支持自动解析后缀匹配图标）                           |
| `fileSize`       | `number`                         | 否       | `undefined`   | 文件大小（单位：字节，自动转换为易读格式）                   |
| `fileType`       | `string`                         | 否       | `undefined`   | 文件类型（优先级高于 `name` 后缀解析，如 `'image'`、`'document'`） |
| `description`    | `string`                         | 否       | `undefined`   | 描述文本（支持动态生成文件类型和大小信息）                   |
| `url`            | `string`                         | 否       | `undefined`   | 文件访问地址（图片文件可用于预览）                           |
| `thumbUrl`       | `string`                         | 否       | `undefined`   | 图片缩略图地址                                               |
| `imgFile`        | `File | Blob`                    | 否       | `undefined`   | 图片文件流（自动解析为预览地址，仅用于上传前临时展示）       |
| `iconSize`       | `string`                         | 否       | `'42px'`      | 图标/图片尺寸                                                |
| `iconColor`      | `string`                         | 否       | `undefined`   | 非图片文件的图标颜色（支持自定义色值）                       |
| `showDelIcon`    | `boolean`                        | 否       | `false`       | 是否显示悬停删除图标                                         |
| `maxWidth`       | `string`                         | 否       | `'236px'`     | 卡片最大宽度                                                 |
| `style`          | `CSSProperties`                  | 否       | `undefined`   | 卡片自定义样式                                               |
| `hoverStyle`     | `CSSProperties`                  | 否       | `undefined`   | 卡片悬停时的自定义样式                                       |
| `imgVariant`     | `'rectangle' | 'square'`         | 否       | `'rectangle'` | 图片卡片形态（长方形/正方形）                                |
| `imgPreview`     | `boolean`                        | 否       | `true`        | 是否开启图片预览功能                                         |
| `imgPreviewMask` | `boolean`                        | 否       | `true`        | 是否显示图片预览遮罩蒙层                                     |
| `status`         | `'uploading' | 'done' | 'error'` | 否       | `undefined`   | 文件状态（控制进度条、错误提示等视觉反馈）                   |
| `percent`        | `number`                         | 否       | `0`           | 上传进度百分比（配合 `status="uploading"` 使用）             |
| `errorTip`       | `string`                         | 否       | `'上传失败'`  | 错误状态自定义提示文本                                       |

## 插槽

| 插槽名                   | 插槽参数                                   | 描述                                                         |
| :----------------------- | :----------------------------------------- | :----------------------------------------------------------- |
| `#icon`                  | `{ item: FilesCardProps }`                 | 自定义图标区域（优先级高于自动解析的内置图标）               |
| `#content`               | `{ item: FilesCardProps }`                 | 自定义内容区域（覆盖默认的名称和描述展示）                   |
| `#name-prefix`           | `{ item: FilesCardProps, prefix, suffix }` | 文件名前缀自定义（用于截断显示场景）                         |
| `#name-suffix`           | `{ item: FilesCardProps, prefix, suffix }` | 文件名后缀自定义（用于截断显示场景）                         |
| `#description`           | `{ item: FilesCardProps, prefix, suffix }` | 描述文本自定义（覆盖默认生成的描述）                         |
| `#image-preview-actions` | `{ item: FilesCardProps, prefix, suffix }` | 图片预览遮罩层内容（悬停时显示，需配合 `imgPreviewMask` 使用） |
| `#del-icon`              | `{ item: FilesCardProps }`                 | 自定义删除图标（默认使用 Element Plus 的 `CircleCloseFilled` 图标） |

## 事件

| 事件名          | 回调参数       | 描述                                       |
| :-------------- | :------------- | :----------------------------------------- |
| `delete`        | `{ ...props }` | 删除按钮点击时触发，传递当前卡片的完整属性 |
| `image-preview` | `{ ...props }` | 图片预览功能触发时调用（点击图片或遮罩层） |
