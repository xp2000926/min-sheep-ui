# Radio 单选框

:::demo

```vue
<template>
  <s-radio v-model="radio" label="1">备选项</s-radio>
  <s-radio v-model="radio" label="2">备选项</s-radio>
</template>
<script setup>
import { ref } from 'vue';
const radio = ref('1');
</script>
```

:::

## 禁用状态

> 单选框不可用的状态。

只要在 `s-radio` 元素中设置 `disabled` 属性即可，它接受一个 `Boolean`，`true` 为禁用。

:::demo

```vue
<template>
  <s-radio disabled v-model="radio" laebl="1">备选项</s-radio>
  <s-radio disabled v-model="radio" label="2">备选项</s-radio>
</template>
<script setup>
import { ref } from 'vue';
const radio = ref('1');
</script>
```

:::

### 单选框组

适用于在多个互斥的选项中选择的场景

结合 `s-radio-group` 元素和子元素 `s-radio` 可以实现单选组， 为 `s-radio-group` 绑定 `v-model`，再为 每一个 `s-radio` 设置好 `label` 属性即可， 另外，还可以通过 `change` 事件来响应变化，它会传入一个参数 `value` 来表示改变之后的值。

:::demo

```vue
<template>
  <s-radio-group v-model="radio">
    <s-radio :value="3">Option A</s-radio>
    <s-radio :value="6">Option B</s-radio>
    <s-radio :value="9">Option C</s-radio>
  </s-radio-group>
  <br />
  <s-radio-group v-model="radio" disabled>
    <s-radio :value="3">Option A</s-radio>
    <s-radio :value="6">Option B</s-radio>
    <s-radio :value="9">Option C</s-radio>
  </s-radio-group>
  <s-radio-group v-model="radio">
    <s-radio :value="3" disabled>Option A</s-radio>
    <s-radio :value="6">Option B</s-radio>
    <s-radio :value="9">Option C</s-radio>
  </s-radio-group>
  <br />
  <s-radio-group :options="['A', 'B', 'C', 'D']" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio = ref(3);
</script>
```

:::

## 按钮样式

按钮样式的单选组合。

只需要把 `s-radio` 元素换成 `s-radio-button` 元素即可

:::demo

```vue
<template>
  <div>
    <s-radio-group v-model="radio">
      <s-radio-button label="上海" />
      <s-radio-button label="北京" />
      <s-radio-button label="广州" />
      <s-radio-button label="深圳" />
    </s-radio-group>
  </div>
  <div style="margin-top: 20px">
    <s-radio-group v-model="radio" disabled>
      <s-radio-button label="上海" />
      <s-radio-button label="北京" />
      <s-radio-button label="广州" />
      <s-radio-button label="深圳" />
    </s-radio-group>
  </div>
  <div style="margin-top: 20px">
    <s-radio-group v-model="radio">
      <s-radio-button label="上海" />
      <s-radio-button label="北京" disabled />
      <s-radio-button label="广州" />
      <s-radio-button label="深圳" />
    </s-radio-group>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const radio = ref('上海');
</script>
```

:::

## 带有边框

设置border属性可以渲染为带有边框的单选框。

:::demo

```vue
<template>
  <div>
    <s-radio v-model="radio1" label="1" border>备选项1</s-radio>
    <s-radio v-model="radio1" label="2" border>备选项2</s-radio>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref(1);
</script>
```

:::
