# AHP 矩阵

> AHP（层次分析法）判断矩阵编辑器。**仅上三角单元格可编辑；下三角单元格自动取上三角的倒数，只读展示；对角线固定为 1，不可修改**。实时用**方根法（几何平均法）**计算权重与一致性检验，`CR < 0.1` 判定一致性通过；当阶数 `n = 2` 时无随机一致性指标（`CR` 为 `NaN`），一致性天然通过。

组件已全局注册，模板中可直接使用 `<s-ahp>`，无需 `import`；如需按需引入，可 `import { Ahp } from 'cn-ui'`。

## 基础用法

通过 `criteria` 指定准则标签数组，**数组长度即矩阵阶数**；`v-model` 双向绑定一个 `n × n` 的判断矩阵（`number[][]`）。

:::demo
```vue
<template>
  <div style="max-width: 720px">
    <s-ahp v-model="matrix" :criteria="['价格', '质量', '交期']" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const matrix = ref<number[][]>([
  [1, 3, 5],
  [1 / 3, 1, 2],
  [1 / 5, 1 / 2, 1],
]);
</script>
```
:::

## 准则数组 criteria

`criteria` 长度即阶数，会被钳制到 `2 ~ 9`：

- 未传或传空数组时，默认 **3 阶**（标签自动补 `C1`、`C2`、`C3`）；
- 空白项（空串/纯空格）自动补 `C1`、`C2`… 占位；
- 超过 9 项时截断为 9 阶。

:::demo
```vue
<template>
  <div style="max-width: 720px">
    <!-- 第 3 项为空白，自动补 C3 -->
    <s-ahp v-model="matrix" :criteria="['价格', '质量', '  ']" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const matrix = ref<number[][]>([]);
</script>
```
:::

## 单元格编辑器 editor

上三角单元格默认是原生数字输入框（`min=0.001`、`max=9`、`step=0.1`，可输入任意正数）。通过 `editor` 可切换为 1-9 标度专用的编辑器：

| 值 | 说明 |
|---|---|
| `input` | 原生数字输入框（默认） |
| `select` | 1-9 标度下拉框，选项为 `1/9、1/8 … 1/2、1、2 … 9` 共 17 档 |
| `stepper` | 1-9 标度步进器，`-` / `+` 沿标度序列步进，端点自动禁用 |

> `#input` 插槽优先级高于 `editor` 属性。

:::demo
```vue
<template>
  <div style="max-width: 720px">
    <s-ahp v-model="matrix" :criteria="['价格', '质量', '交期']" editor="select" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const matrix = ref<number[][]>([
  [1, 3, 5],
  [1 / 3, 1, 2],
  [1 / 5, 1 / 2, 1],
]);
</script>
```
:::

:::demo
```vue
<template>
  <div style="max-width: 720px">
    <s-ahp v-model="matrix" :criteria="['价格', '质量', '交期']" editor="stepper" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const matrix = ref<number[][]>([
  [1, 3, 5],
  [1 / 3, 1, 2],
  [1 / 5, 1 / 2, 1],
]);
</script>
```
:::

## modelValue 校验与降级

外部传入的 `modelValue` 会经过 `validateMatrix` 校验，规则：

1. 必须是 `n × n` 方阵（行数、列数与阶数一致）；
2. 所有元素必须为正数；
3. 对角线必须为 1；
4. 下三角必须与上三角互为倒数（浮点容差 `1e-6`）。

**校验失败时**：组件降级为 `n` 阶单位矩阵参与计算，在结果区显示警告文案（`#result` 插槽可通过 `warning` 参数自行渲染），同时把降级后的单位矩阵 `emit` 给父组件，保证父子状态一致。传入合法矩阵或用户编辑单元格后警告自动清除。

校验函数也从包里导出，可独立使用：

```ts
import { validateMatrix } from 'cn-ui';

validateMatrix(matrix, 3); // null 表示通过；否则返回错误文案
```

:::demo
```vue
<template>
  <div style="max-width: 720px">
    <!-- 传入 2×2 矩阵但阶数是 3：降级单位矩阵并警告 -->
    <s-ahp v-model="matrix" :criteria="['价格', '质量', '交期']" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const matrix = ref<number[][]>([
  [1, 9],
  [1 / 9, 1],
]);
</script>
```
:::

## 动态阶数

`criteria` 长度变化即阶数变化。组件会重建单位矩阵，**并把新的单位矩阵 `emit` 给父组件**（`v-model` 自动同步），父子状态不会脱节；若父组件随阶数一并传入了尺寸匹配的合法矩阵，则直接采用、不重置。

:::demo
```vue
<template>
  <div style="max-width: 720px">
    <div style="margin-bottom: 12px">
      <button @click="add">＋ 添加准则</button>
      <button @click="remove" :disabled="criteria.length <= 2">－ 移除准则</button>
    </div>
    <s-ahp v-model="matrix" :criteria="criteria" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const pool = ['价格', '质量', '交期', '服务', '风险'];
const criteria = ref<string[]>(pool.slice(0, 3));
const matrix = ref<number[][]>([]);
const add = () => {
  criteria.value.push(pool[criteria.value.length]);
};
const remove = () => {
  criteria.value.pop();
};
</script>
```
:::

## 禁用编辑

设置 `disabled` 后，所有单元格不可操作，仅展示当前矩阵与计算结果。适合结果预览、截图场景。

:::demo
```vue
<template>
  <div style="max-width: 720px">
    <s-ahp v-model="matrix" :criteria="['价格', '质量', '交期']" disabled />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const matrix = ref<number[][]>([
  [1, 3, 5],
  [1 / 3, 1, 2],
  [1 / 5, 1 / 2, 1],
]);
</script>
```
:::

## 隐藏结果区

默认展示权重向量、λmax、CI、RI、CR 一致性指标。如果只需要矩阵表格，设置 `:show-result="false"`。

:::demo
```vue
<template>
  <div style="max-width: 720px">
    <s-ahp
      v-model="matrix"
      :criteria="['价格', '质量', '交期']"
      :show-result="false"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const matrix = ref<number[][]>([
  [1, 3, 5],
  [1 / 3, 1, 2],
  [1 / 5, 1 / 2, 1],
]);
</script>
```
:::

## 自定义单元格编辑器（#input 插槽）

`#input` 作用域插槽可替换任意上三角单元格编辑器（优先级高于 `editor` 属性）。插槽参数：

- `cellVal`：当前单元格数值；
- `disabled`：是否禁用；
- `row` / `col`：行、列索引（`number`）；
- `onChange(value)`：提交新值，组件会自动生成下三角倒数。

> 下例用文本框支持 `3`、`1/3`、`3:1` 等写法，失焦时解析。

:::demo
```vue
<template>
  <div style="max-width: 720px">
    <s-ahp v-model="matrix" :criteria="criteria">
      <template #input="{ cellVal, disabled, onChange }">
        <input
          class="saaty-input"
          type="text"
          :disabled="disabled"
          :value="toText(cellVal)"
          @change="(e: Event) => onChange(parse((e.target as HTMLInputElement).value))"
        />
      </template>
    </s-ahp>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const criteria = ['价格', '质量', '交期'];
const matrix = ref<number[][]>([
  [1, 3, 5],
  [1 / 3, 1, 2],
  [1 / 5, 1 / 2, 1],
]);
// 数值 → 友好分数文本
function toText(v: number) {
  for (let k = 1; k <= 9; k++) {
    if (Math.abs(v - 1 / k) < 1e-6) return k === 1 ? '1' : `1/${k}`;
    if (Math.abs(v - k) < 1e-6) return `${k}`;
  }
  return String(Math.round(v * 1000) / 1000);
}
// 文本 → 数值，支持 3、1/3、3:1；非法值返回 NaN，组件会自动忽略
function parse(s: string) {
  const t = String(s).trim();
  const m = t.match(/^(\d+(?:\.\d+)?)\s*[\/:]\s*(\d+(?:\.\d+)?)$/);
  if (m) return parseFloat(m[1]) / parseFloat(m[2]);
  return Number(t);
}
</script>
<style scoped>
.saaty-input {
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #94bfff;
  padding: 3px;
}
</style>
```
:::

## 自定义结果面板（#result 插槽）

通过 `#result` 作用域插槽替换默认结果区。插槽参数：

- `res`：计算结果对象（结构见下方 [AhpResult](#ahpresult-结构)）；
- `labels`：当前生效的准则标签数组；
- `warning`：外部矩阵校验失败降级时的警告文案，空串表示无警告。

:::demo
```vue
<template>
  <div style="max-width: 720px">
    <s-ahp v-model="matrix" :criteria="criteria">
      <template #result="{ res, labels: lbs, warning }">
        <div class="my-result">
          <p v-if="warning" style="color: #fa8c16">⚠ {{ warning }}</p>
          <p>
            权重：
            <span v-for="(l, i) in lbs" :key="i" style="margin-right: 10px">
              {{ l }}={{ (res.weights[i] * 100).toFixed(1) }}%
            </span>
          </p>
          <p>
            λmax={{ res.lambdaMax.toFixed(4) }}，CI={{ res.CI.toFixed(4) }}，
            CR={{ Number.isNaN(res.CR) ? '——' : res.CR.toFixed(4) }}
          </p>
          <p :style="{ color: res.pass ? '#00b42a' : '#f53f3f' }">
            {{ res.pass ? '一致性通过 ✅' : '一致性不通过 ❌' }}
          </p>
        </div>
      </template>
    </s-ahp>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const criteria = ['价格', '质量', '交期'];
const matrix = ref<number[][]>([
  [1, 3, 5],
  [1 / 3, 1, 2],
  [1 / 5, 1 / 2, 1],
]);
</script>
<style scoped>
.my-result {
  line-height: 1.8;
  font-size: 14px;
}
</style>
```
:::

## change 事件

每次计算完成后触发 `change`，返回最新的 `AhpResult`（挂载时会立即触发一次）。

:::demo
```vue
<template>
  <div style="max-width: 720px">
    <s-ahp v-model="matrix" :criteria="criteria" @change="onChange" />
    <p v-if="latest" style="margin-top: 8px; color: #606266">
      最近一次计算：λmax={{ latest.lambdaMax.toFixed(4) }}，
      CR={{ Number.isNaN(latest.CR) ? '——' : latest.CR.toFixed(4) }}，
      {{ latest.pass ? '一致性通过' : '一致性不通过' }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const criteria = ['价格', '质量', '交期'];
const matrix = ref<number[][]>([
  [1, 3, 5],
  [1 / 3, 1, 2],
  [1 / 5, 1 / 2, 1],
]);
const latest = ref<any>(null);
function onChange(res: any) {
  latest.value = res;
}
</script>
```
:::

## 二阶矩阵（n=2）

二阶矩阵没有随机一致性指标（`RI = 0`），组件返回 `CR = NaN` 且 `pass = true`，一致性天然通过。默认结果区会给出相应提示。

:::demo
```vue
<template>
  <div style="max-width: 720px">
    <s-ahp
      v-model="matrix"
      :criteria="['目标达成性', '代价接受度']"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
// 目标达成性 略微重要于代价接受度，赋值 = 3
const matrix = ref<number[][]>([
  [1, 3],
  [1 / 3, 1],
]);
</script>
```
:::

## Props

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `criteria` | `string[]` | `[]` | 准则标签数组，**长度即阶数**（钳制 `2 ~ 9`，空/未传默认 3 阶）；空白项自动补 `C1`、`C2`… |
| `modelValue` | `number[][]` | `[]` | 判断矩阵，`v-model` 绑定；校验规则见 [modelValue 校验与降级](#modelvalue-校验与降级)，失败降级为单位矩阵并 emit |
| `editor` | `'input' \| 'select' \| 'stepper'` | `'input'` | 上三角单元格编辑器类型；非法值兜底为 `input` |
| `disabled` | `boolean` | `false` | 是否禁用编辑（仅展示） |
| `showResult` | `boolean` | `true` | 是否显示权重与一致性结果面板 |

## Events

| 事件名 | 参数 | 说明 |
|---|---|---|
| `update:modelValue` | `(matrix: number[][])` | 上三角修改 / 阶数变化重建 / 校验失败降级时触发；下三角已自动生成倒数，对角线固定为 1 |
| `change` | `(res: AhpResult)` | 每次计算完成后触发（挂载时立即触发一次），返回权重与一致性指标 |

## Slots

| 名称 | 作用域参数 | 说明 |
|---|---|---|
| `input` | `{ cellVal, disabled, row, col, onChange }` | 自定义上三角单元格编辑器（优先级高于 `editor` 属性）；`onChange(value)` 提交新值，组件自动维护下三角倒数 |
| `result` | `{ res, labels, warning }` | 自定义结果面板；`res` 为 `AhpResult`，`labels` 为当前生效标签数组，`warning` 为校验降级警告文案 |

### #input 插槽参数

| 字段 | 类型 | 说明 |
|---|---|---|
| `cellVal` | `number` | 当前上三角单元格值 |
| `disabled` | `boolean` | 是否全局禁用 |
| `row` | `number` | 行索引 |
| `col` | `number` | 列索引 |
| `onChange` | `(value: string \| number) => void` | 提交新值；非正数/非法值会被忽略 |

## AhpResult 结构

`change` 事件与 `#result` 插槽中的 `res` 对象结构如下：

```ts
interface AhpResult {
  weights: number[]; // 权重向量，总和 = 1
  lambdaMax: number; // 最大特征根 λmax
  CI: number;        // 一致性指标
  RI: number;        // 随机一致性指标（查表）
  CR: number;        // 一致性比率 CI/RI；n = 2 时为 NaN
  pass: boolean;     // CR < 0.1 为 true；n = 2 恒为 true
}
```

## 导出

| 名称 | 类型 | 说明 |
|---|---|---|
| `Ahp` | 组件 | AHP 矩阵组件（等价于全局标签 `<s-ahp>`） |
| `validateMatrix` | 函数 | `(mat: unknown, n: number) => string \| null`，判断矩阵校验；通过返回 `null`，失败返回错误文案 |
| `default` | 插件 | `{ install }`，供 `app.use()` 全局注册组件 |

## RI 随机一致性指标表

| n | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| RI | 0 | 0 | 0.58 | 0.90 | 1.12 | 1.24 | 1.32 | 1.41 | 1.45 |
