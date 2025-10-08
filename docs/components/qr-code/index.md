# Qr Code 二维码

## 基础用法

> 基础用法

:::demo

```vue
<template>
  <s-flex vertical>
    <s-qr-code v-model="text" />
    <s-input v-model="text" :maxlength="10"  />
  </s-flex>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const text = ref('这是一个二维码');
</script>
```

:::

## 尺寸

> 它就像疯狂千层饼，无论大小，都会引领你进入另一个神秘的信息空间。

:::demo

```vue
<template>
  <s-flex class="mb-4">
    <s-button @click="minus">减 10</s-button>
    <s-button @click="add"> 加 10</s-button>
  </s-flex>
  <s-qr-code v-model="text" :size="size"  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const text = ref('这是一个二维码');
const size = ref(110);
const add = () => {
  size.value += 10;
  if (size.value > 200) {
    size.value = 110;
  }
};

const minus = () => {
  size.value -= 10;
  if (size.value < 20) {
    size.value = 110;
  }
};
</script>
```

:::

## 纠错

> 使用 `error-correction-level` 来设定纠错级别。

:::demo

```vue
<template>
  <s-flex>
    <s-qr-code
      v-model="text"
      type="canvas"
      :error-correction-level="errorCorrectionLevel"
    />
    <s-qr-code
      v-model="text"
      type="svg"
      :error-correction-level="errorCorrectionLevel"
    />
    <s-radio-group v-model="errorCorrectionLevel">
      <s-radio-button
        v-for="errorCorrection in errorCorrectionOptions"
        :key="errorCorrection.value"
        :value="errorCorrection.value"
        :label="errorCorrection.label"
      />
    </s-radio-group>
  </s-flex>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const text = ref(
  '犹如一位幽默风趣的魔术师，巧妙地将繁琐的信息变成了一个神秘的二维码'
);
const errorCorrectionOptions = [
  { value: 'L', label: 'L' },
  { value: 'M', label: 'M' },
  { value: 'Q', label: 'Q' },
  { value: 'H', label: 'H' }
];
const errorCorrectionLevel = ref('M');
</script>
```

:::

## 自定义渲染类型

> 通过设置 `type` 自定义渲染结果，提供 `canvas` 和 `svg` 两个选项。

:::demo

```vue
<template>
  <s-flex vertical>
    <s-qr-code v-model="text" type="canvas" />
    <s-qr-code v-model="text" type="svg" />
  </s-flex>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const text = ref('这是一个二维码');
</script>
```

:::

## 图标

> 可以放一些代表性的图标。

:::demo

```vue
<template>
  <s-flex vertical>
    <s-qr-code v-model="qrCodeValue" icon-src="https://vitejs.dev/logo.svg" error-correction-level="H"/>
    <s-qr-code v-model="qrCodeValue" icon-src="https://vitejs.dev/logo.svg" icon-background-color="#333" error-correction-level="H"/>
    <s-qr-code v-model="qrCodeValue" icon-src="https://vitejs.dev/logo.svg" type="svg" :icon-size="32" error-correction-level="H"/>
  </s-flex>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const qrCodeValue = ref('https://www.baidu.com/');
</script>
```

:::

## 颜色

> 让二维码不再单调乏味。

:::demo

```vue
<template>
  <s-flex vertical>
    <s-qr-code v-model="qrCodeValue" color="#18a058"/>
    <s-qr-code v-model="qrCodeValue" color="#409eff" background-color="#F5F5F5"/>
    <!-- <s-color v-model:value="color" /> -->
    <s-qr-code v-model="qrCodeValue" :color="color" background-color="#F5F5F5"/>
  </s-flex>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const qrCodeValue = ref('https://www.baidu.com/');
const color = ref('#225A95FF');
</script>
```

:::

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| code |传入的 code 字符串 | `string` | `''` |
| `background-color` |二维码背景颜色，值需要采用 hex 格式 | string| `#fff` |
| `error-correction-level` |二维码纠错级别 | `'L' \| 'M' \| 'Q' \| 'H'` | `M` |
| `icon-background-color` |图标背景颜色 | string | `#fff` |
| `icon-border-radius` |图标背景圆角大小 | number | 4 |
| `icon-size` |图标大小 | number | 40 |
| `icon-src` |图标地址 | string | undefined |
| padding |二维码填充大小 | `number \| string` | 12 |
| `v-model` |文本信息 | string | 12 |
| size |二维码大小 | number | 100 |
| type |自定义二维码渲染类型 | `'canvas' \| 'svg'` | canvas |


### 关于二维码纠错级别

> 二维码纠错级别是指在生成二维码时所使用的错误纠正能力，它决定了二维码在受到损坏或部分不可见时，仍然可以正确解码的能力。
>
> 二维码标准（如 QR 码）定义了四个纠错级别：L、M、Q 和 H。每个级别提供不同的纠错能力和容错性。
>
> - L（低）：提供约 7% 的恢复能力
> - M（中）：提供约 15% 的恢复能力
> - Q（高）：提供约 25% 的恢复能力
> - H（最高）：提供约 30% 的恢复能力
>
> 选择更高的纠错级别可以提高二维码的容错性，即在一定程度的损坏或变形下仍然能够正确解码，但同时会增加二维码的密度，使得二维码所占空间更大。