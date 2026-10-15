# Matrix 矩阵

> 通用矩阵表格组件。**支持行头、列头、底部汇总行、单元格等级着色与自定义插槽**，适用于「门店 × 指标」这类评分矩阵、热力矩阵、对比矩阵场景。数据为 `number[][]` 或 `any[][]`，组件不干预业务含义，完全由父组件通过 `cellClass` / `levelResolver` / 插槽驱动显示。
>
> **行数、列数由 `data` 自动推导**，无需手动传入 `rows` / `cols`。

组件已全局注册，模板中可直接使用 `<s-matrix>`；如需按需引入，可 `import { Matrix } from 'cn-ui'`。

## 基础用法

通过 `data` 传入二维数组，行数 = `data.length`，列数 = 各行的最大长度。不传任何表头时，单元格默认渲染 data 中的值。

:::demo

```vue
<template>
  <div style="max-width: 720px">
    <s-matrix
      :data="[
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ]"
    />
  </div>
</template>
```

:::

## 数据与表头

`rowHeaders` 为纵向表头，`colHeaders` 为横向表头，`data` 与行列一一对应。当行列头都存在时，左上角自动渲染 `cornerLabel`。行数、列数从 `data` / 表头自动推导。

:::demo

```vue
<template>
  <div style="max-width: 900px">
    <s-matrix
      :row-headers="['门店 A', '门店 B', '门店 C', '门店 D']"
      :col-headers="['销售额', '客流量', '复购率', '满意度', '利润率']"
      :data="matrix"
      corner-label="门店 ⟍ 指标"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const matrix = ref<number[][]>([
  [72, 80, 84, 76, 78],
  [76, 86, 88, 82, 83],
  [80, 88, 91, 85, 86],
  [58, 61, 79, 70, 67],
]);
</script>
```

:::

## 底部汇总行 footerRow

通过 `footerRow` 传入汇总数据，`footerLabel` 指定左侧标题。`null` / `undefined` 会自动显示为 `—`。`footerRow` 的长度会参与列数推导。

:::demo

```vue
<template>
  <div style="max-width: 900px">
    <s-matrix
      :row-headers="rowHeaders"
      :col-headers="colHeaders"
      :data="matrix"
      :footer-row="colAverages"
      footer-label="指标均值"
      corner-label="门店 ⟍ 指标"
    />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
const colHeaders = ["销售额", "客流量", "复购率", "满意度", "利润率"];
const rowHeaders = ["门店 A", "门店 B", "门店 C", "门店 D"];
const matrix = ref<number[][]>([
  [72, 80, 84, 76, 78],
  [76, 86, 88, 82, 83],
  [80, 88, 91, 85, 86],
  [58, 61, 79, 70, 67],
]);
const colAverages = computed(() =>
  colHeaders.map((_, col) => {
    const values = matrix.value.map((r) => r[col]).filter((v) => v != null);
    return values.length
      ? Math.round(values.reduce((a, b) => a + b, 0) / values.length)
      : null;
  }),
);
</script>
```

:::

## 等级着色 cellClass

`cellClass` 支持字符串或函数 `(row, col) => string`，返回值会挂到对应单元格上。配合内置等级样式（`cell-excellent` / `cell-good` / `cell-fair` / `cell-poor`）即可实现分色显示。

:::demo

```vue
<template>
  <div style="max-width: 900px">
    <s-matrix
      :row-headers="rowHeaders"
      :col-headers="colHeaders"
      :data="matrix"
      :cell-class="cellClass"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const colHeaders = ["销售额", "客流量", "复购率", "满意度", "利润率"];
const rowHeaders = ["门店 A", "门店 B", "门店 C", "门店 D"];
const matrix = ref<number[][]>([
  [72, 80, 84, 76, 78],
  [76, 86, 88, 82, 83],
  [80, 88, 91, 85, 86],
  [58, 61, 79, 70, 67],
]);
const cellClass = (row: number, col: number) => {
  const score = matrix.value[row]?.[col];
  if (score == null) return "";
  if (score >= 85) return "cell-excellent";
  if (score >= 70) return "cell-good";
  if (score >= 55) return "cell-fair";
  return "cell-poor";
};
</script>
```

:::

## 分数 + 等级文字 levelResolver

设置 `showLevel` 后，单元格会在分数下方展示等级文字。`levelResolver` 返回 `{ label, className, color }`，由父组件决定分档规则。

:::demo

```vue
<template>
  <div style="max-width: 900px">
    <s-matrix
      :row-headers="rowHeaders"
      :col-headers="colHeaders"
      :data="matrix"
      :show-level="true"
      :level-resolver="levelResolver"
      :cell-class="cellClass"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const colHeaders = ["销售额", "客流量", "复购率", "满意度", "利润率"];
const rowHeaders = ["门店 A", "门店 B", "门店 C", "门店 D"];
const matrix = ref<number[][]>([
  [72, 80, 84, 76, 78],
  [76, 86, 88, 82, 83],
  [80, 88, 91, 85, 86],
  [58, 61, 79, 70, 67],
]);
const levelResolver = (score: number) => {
  if (score >= 85)
    return { label: "优秀", className: "cell-excellent", color: "#cf1322" };
  if (score >= 70)
    return { label: "良好", className: "cell-good", color: "#d46b08" };
  if (score >= 55)
    return { label: "一般", className: "cell-fair", color: "#d48806" };
  return { label: "较差", className: "cell-poor", color: "#096dd9" };
};
const cellClass = (row: number, col: number) => {
  const score = matrix.value[row]?.[col];
  return score == null ? "" : levelResolver(score).className;
};
</script>
```

:::

## 自定义单元格内容 #default 插槽

`#default` 作用域插槽可完全接管单元格内容渲染，插槽参数为 `{ row, col, value }`。适合需要图标、进度条、标签等复杂展示的场景。

:::demo

```vue
<template>
  <div style="max-width: 900px">
    <s-matrix
      :row-headers="rowHeaders"
      :col-headers="colHeaders"
      :data="matrix"
    >
      <template #default="{ value }">
        <div style="display: flex; align-items: center; gap: 6px">
          <span style="font-weight: 700">{{ value }}</span>
          <span
            :style="{
              display: 'inline-block',
              width: '40px',
              height: '6px',
              borderRadius: '3px',
              backgroundColor:
                value >= 85 ? '#cf1322' : value >= 70 ? '#d46b08' : '#096dd9',
            }"
          />
        </div>
      </template>
    </s-matrix>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const colHeaders = ["销售额", "客流量", "复购率", "满意度", "利润率"];
const rowHeaders = ["门店 A", "门店 B", "门店 C", "门店 D"];
const matrix = ref<number[][]>([
  [72, 80, 84, 76, 78],
  [76, 86, 88, 82, 83],
  [80, 88, 91, 85, 86],
  [58, 61, 79, 70, 67],
]);
</script>
```

:::

## 单元格尺寸与对齐

`cellWidth` / `cellHeight` 控制数据单元格尺寸，`rowHeaderWidth` / `colHeaderHeight` / `footerHeight` 控制表头与汇总行尺寸。`align` 支持 `left` / `center` / `right`。

:::demo

```vue
<template>
  <div style="max-width: 900px">
    <s-matrix
      :row-headers="['成本', '周期', '质量']"
      :col-headers="['方案 A', '方案 B', '方案 C']"
      :data="matrix"
      :cell-width="140"
      :cell-height="64"
      :row-header-width="100"
      align="left"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const matrix = ref<number[][]>([
  [85, 90, 78],
  [70, 65, 88],
  [92, 80, 75],
]);
</script>
```

:::

## 点击事件 cell-click / cell-dblclick

单元格点击、双击时触发，返回 `{ row, col, value }`。常配合选中态使用。

:::demo

```vue
<template>
  <div style="max-width: 900px">
    <s-matrix
      :row-headers="['产品 A', '产品 B', '产品 C']"
      :col-headers="['销量', '口碑', '利润']"
      :data="matrix"
      @cell-click="onCellClick"
      @cell-dblclick="onCellDblclick"
    />
    <p style="margin-top: 8px; color: #606266">
      最近点击：{{ selected || "（未点击）" }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const matrix = ref<number[][]>([
  [88, 76, 82],
  [70, 92, 65],
  [60, 78, 85],
]);
const selected = ref("");
const onCellClick = (p: { row: number; col: number; value: number }) => {
  selected.value = `(${p.row}, ${p.col}) = ${p.value}`;
};
const onCellDblclick = (p: { row: number; col: number; value: number }) => {
  console.log("双击", p);
};
</script>
```

:::

## 无边框模式

设置 `:bordered="false"` 隐藏所有分隔线，只保留背景色区分。适合叠加热力图效果。

:::demo

```vue
<template>
  <div style="max-width: 900px">
    <s-matrix
      :row-headers="rowHeaders"
      :col-headers="colHeaders"
      :data="matrix"
      :bordered="false"
      :cell-class="cellClass"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const colHeaders = ["销售额", "客流量", "复购率", "满意度", "利润率"];
const rowHeaders = ["门店 A", "门店 B", "门店 C", "门店 D"];
const matrix = ref<number[][]>([
  [72, 80, 84, 76, 78],
  [76, 86, 88, 82, 83],
  [80, 88, 91, 85, 86],
  [58, 61, 79, 70, 67],
]);
const cellClass = (row: number, col: number) => {
  const score = matrix.value[row]?.[col];
  if (score == null) return "";
  if (score >= 85) return "cell-excellent";
  if (score >= 70) return "cell-good";
  if (score >= 55) return "cell-fair";
  return "cell-poor";
};
</script>
```

:::

## 行数、列数推导规则

组件不再接收 `rows` / `cols`，而是自动推导：

| 属性   | 推导来源                                                 | 说明                                                  |
| ------ | -------------------------------------------------------- | ----------------------------------------------------- |
| `rows` | `data.length` → `rowHeaders.length`                      | 优先用 `data` 行数；`data` 为空时用 `rowHeaders` 长度 |
| `cols` | `max(各行最大长度, colHeaders.length, footerRow.length)` | 三者取最大，保证列头与汇总行完整显示                  |

> 这样在数据不齐或仅传表头时，也能稳定渲染，不会列错位。

## Props

| 属性              | 类型                                             | 默认值     | 说明                                                 |
| ----------------- | ------------------------------------------------ | ---------- | ---------------------------------------------------- |
| `data`            | `any[][]`                                        | `[]`       | 矩阵数据，二维数组；**行数、列数由它推导**           |
| `colHeaders`      | `string[]`                                       | `[]`       | 横向表头；非空时渲染列头行                           |
| `rowHeaders`      | `string[]`                                       | `[]`       | 纵向表头；非空时渲染行头列                           |
| `footerRow`       | `any[]`                                          | `[]`       | 底部汇总行数据；`null` / `undefined` 显示为 `—`      |
| `footerLabel`     | `string`                                         | `'均值'`   | 底部汇总行左侧标题                                   |
| `cornerLabel`     | `string`                                         | `''`       | 左上角文字（行列头都存在时显示），空串时显示默认文案 |
| `showLevel`       | `boolean`                                        | `false`    | 是否在单元格内展示等级文字（需配合 `levelResolver`） |
| `levelResolver`   | `(score: number) => { label, className, color }` | `null`     | 分数 → 等级映射函数                                  |
| `cellWidth`       | `number \| string`                               | `110`      | 数据单元格宽度                                       |
| `cellHeight`      | `number \| string`                               | `56`       | 数据单元格高度                                       |
| `rowHeaderWidth`  | `number \| string`                               | `120`      | 行头列宽度                                           |
| `colHeaderHeight` | `number \| string`                               | `44`       | 列头行高度                                           |
| `footerHeight`    | `number \| string`                               | `48`       | 汇总行高度                                           |
| `bordered`        | `boolean`                                        | `true`     | 是否显示单元格边框                                   |
| `align`           | `'left' \| 'center' \| 'right'`                  | `'center'` | 单元格内容对齐方式                                   |
| `cellClass`       | `string \| ((row, col) => string)`               | `''`       | 自定义单元格类名；函数返回类名字符串                 |

## Events

| 事件名          | 参数                           | 说明                                                  |
| --------------- | ------------------------------ | ----------------------------------------------------- |
| `cell-click`    | `(payload: MatrixCellPayload)` | 单击数据单元格时触发；`payload = { row, col, value }` |
| `cell-dblclick` | `(payload: MatrixCellPayload)` | 双击数据单元格时触发；`payload = { row, col, value }` |

> 事件参数对象结构：
>
> ```ts
> interface MatrixCellPayload {
>   row: number; // 行索引
>   col: number; // 列索引
>   value: any; // 单元格值
> }
> ```

## Slots

| 名称      | 作用域参数            | 说明                                     |
| --------- | --------------------- | ---------------------------------------- |
| `default` | `{ row, col, value }` | 自定义数据单元格内容；存在时完全接管渲染 |

### #default 插槽参数

| 字段    | 类型     | 说明         |
| ------- | -------- | ------------ |
| `row`   | `number` | 行索引       |
| `col`   | `number` | 列索引       |
| `value` | `any`    | 当前单元格值 |

## 内置样式类

组件内置以下等级色卡类名，可直接作为 `cellClass` 返回值使用：

| 类名             | 色系 | 语义        |
| ---------------- | ---- | ----------- |
| `cell-excellent` | 红   | 优秀 / 高优 |
| `cell-good`      | 橙   | 良好        |
| `cell-fair`      | 黄   | 一般        |
| `cell-poor`      | 蓝   | 较差        |

> 上述色卡仅为默认建议，业务侧完全可自定义样式类覆盖，组件不强制使用。

## 导出

| 名称      | 类型 | 说明                                       |
| --------- | ---- | ------------------------------------------ |
| `Matrix`  | 组件 | 矩阵组件（等价于全局标签 `<s-matrix>`）    |
| `default` | 插件 | `{ install }`，供 `app.use()` 全局注册组件 |

## 类型导出

组件类型文件同时导出以下类型，供业务侧引用：

```ts
import type {
  MatrixProps,
  MatrixCellPayload,
  MatrixLevel,
  MatrixLevelResolver,
  MatrixCellClass,
  MatrixAlign,
} from "cn-ui";
```

| 类型                  | 说明                                              |
| --------------------- | ------------------------------------------------- |
| `MatrixProps`         | 组件的 Props 类型                                 |
| `MatrixCellPayload`   | 单元格事件载荷 `{ row, col, value }`              |
| `MatrixLevel`         | 等级描述 `{ label, className, color }`            |
| `MatrixLevelResolver` | 等级解析函数类型 `(score) => MatrixLevel`         |
| `MatrixCellClass`     | 单元格类名类型 `string \| ((row, col) => string)` |
| `MatrixAlign`         | 对齐方式类型 `'left' \| 'center' \| 'right'`      |

## 常见用法场景

### 场景一：评分矩阵（配合等级）

见上方 [分数 + 等级文字 levelResolver](#分数--等级文字-levelresolver)。

### 场景二：指标均值汇总

见上方 [底部汇总行 footerRow](#底部汇总行-footerrow)。

### 场景三：热力图

通过 `:bordered="false"` + `cellClass` 返回 HSL 渐变类名，即可实现连续热力效果：

:::demo

```vue
<template>
  <div style="max-width: 900px">
    <s-matrix
      :row-headers="rowHeaders"
      :col-headers="colHeaders"
      :data="matrix"
      :bordered="false"
      :cell-class="heatClass"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const colHeaders = ["销售额", "客流量", "复购率", "满意度", "利润率"];
const rowHeaders = ["门店 A", "门店 B", "门店 C", "门店 D"];
const matrix = ref<number[][]>([
  [72, 80, 84, 76, 78],
  [76, 86, 88, 82, 83],
  [80, 88, 91, 85, 86],
  [58, 61, 79, 70, 67],
]);
const heatClass = (row: number, col: number) => {
  const score = matrix.value[row]?.[col] ?? 0;
  return `heat-${Math.floor(score / 10)}`;
};
</script>
<style>
.heat-0 {
  background-color: #e6f7ff !important;
  color: #002766 !important;
}
.heat-1 {
  background-color: #bae7ff !important;
  color: #002766 !important;
}
.heat-2 {
  background-color: #91d5ff !important;
  color: #002766 !important;
}
.heat-3 {
  background-color: #69c0ff !important;
  color: #003a8c !important;
}
.heat-4 {
  background-color: #40a9ff !important;
  color: #ffffff !important;
}
.heat-5 {
  background-color: #1890ff !important;
  color: #ffffff !important;
}
.heat-6 {
  background-color: #096dd9 !important;
  color: #ffffff !important;
}
.heat-7 {
  background-color: #0050b3 !important;
  color: #ffffff !important;
}
.heat-8 {
  background-color: #003a8c !important;
  color: #ffffff !important;
}
.heat-9 {
  background-color: #002766 !important;
  color: #ffffff !important;
}
</style>
```

:::

> `heat-*` 色卡样式请放到项目全局样式中（VitePress 场景见下方「样式说明」）。

### 场景四：可交互选中

通过 `cell-click` 记录选中坐标，用 `cellClass` 返回 `is-selected` 类名实现高亮：

:::demo

```vue
<template>
  <div style="max-width: 900px">
    <s-matrix
      :row-headers="['山地', '平原', '水域']"
      :col-headers="['侦察', '打击', '保障']"
      :data="matrix"
      :cell-class="cellClass"
      @cell-click="onCellClick"
    />
    <p style="margin-top: 8px; color: #606266">
      当前选中：{{
        sel.row >= 0
          ? `(${sel.row}, ${sel.col}) = ${matrix[sel.row][sel.col]}`
          : "（未点击）"
      }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const matrix = ref<number[][]>([
  [88, 76, 82],
  [70, 92, 65],
  [60, 78, 85],
]);
const sel = ref({ row: -1, col: -1 });
const cellClass = (row: number, col: number) =>
  row === sel.value.row && col === sel.value.col ? "is-selected" : "";
const onCellClick = (p: { row: number; col: number; value: number }) => {
  sel.value = { row: p.row, col: p.col };
};
</script>
<style>
.is-selected {
  outline: 2px solid #1677ff;
  outline-offset: -2px;
  background-color: #e6f4ff !important;
}
</style>
```

:::

> `is-selected` 样式请放到项目全局样式中（VitePress 场景见下方「样式说明」）。

<!-- ## 与 AHP 组件的差异

| 维度 | Matrix | Ahp |
|---|---|---|
| 用途 | 通用二维数据展示 | AHP 判断矩阵编辑与一致性检验 |
| 数据含义 | 无业务约束 | 正互反矩阵，上三角可编辑 |
| 编辑能力 | 只读（点击事件） | 可编辑（input / select / stepper / 插槽） |
| 计算能力 | 无 | 权重 + CR 一致性 |
| 表头 | 双向表头 | 单一准则标签 |
| 汇总 | 支持 `footerRow` | 无 |

> 若需要「可编辑 + 一致性检验」场景，请使用 `Ahp` 组件；若只需展示双向矩阵数据，使用 `Matrix`。 -->
