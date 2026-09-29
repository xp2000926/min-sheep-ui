# AHP 矩阵
> AHP（层次分析法）判断矩阵编辑器。**仅上三角单元格可编辑；下三角单元格自动取上三角的倒数，只读展示；对角线固定为1，不可修改**。实时用**方根法（几何平均法）**计算权重与一致性检验，`CR < 0.1` 判定一致性通过。

## 基础用法
传入 `criteria` 和 `modelValue`（n×n 比较矩阵），通过 `v-model`双向绑定。`criteria.length` 决定矩阵阶数，`modelValue` 的尺寸必须和它保持一致。
> ⚠️ 重要：组件**以上三角为真值来源**。如果外部代码直接修改下三角（`i>j`）的值，该值会被组件自动覆盖为 `1/matrix[j][i]`，不要尝试写下三角。

:::demo
```vue
<template>
  <div style="max-width: 720px">
    <s-ahp v-model="matrix" :criteria="criteria" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { ComparisonMatrix, Criterion, createIdentityMatrix } from 'min-sheep-ui';
const criteria = ref<Criterion[]>([
  { id: 'price', name: '价格', desc: '采购成本' },
  { id: 'quality', name: '质量', desc: '产品合格率' },
  { id: 'delivery', name: '交期', desc: '交付准时率' },
  { id: 'service', name: '服务', desc: '售后响应' },
]);
const matrix = ref<ComparisonMatrix>(createIdentityMatrix(criteria.value.length));
</script>
```
:::

## 禁用编辑
设置 `disabled` 后，所有编辑器不可操作，仅展示当前矩阵、权重和一致性结果。适合结果预览、论文截图场景。
:::demo
```vue
<template>
  <div style="max-width: 720px">
    <s-ahp v-model="matrix" :criteria="criteria" disabled />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { ComparisonMatrix, Criterion } from 'min-sheep-ui';
const criteria: Criterion[] = [
  { id: 'price', name: '价格' },
  { id: 'quality', name: '质量' },
  { id: 'delivery', name: '交期' },
];
const matrix = ref<ComparisonMatrix>([
  [1, 3, 5],
  [1 / 3, 1, 2],
  [1 / 5, 1 / 2, 1],
]);
</script>
```
:::

## 隐藏结果区
默认展示权重条形图、λmax、CI、CR一致性指标。如果只需要矩阵表格，设置 `show-result="false"`。
:::demo
<script setup lang="ts">
import { ref } from 'vue';
import type { ComparisonMatrix, Criterion, createIdentityMatrix } from 'min-sheep-ui';
const criteria: Criterion[] = [
  { id: 'price', name: '价格' },
  { id: 'quality', name: '质量' },
  { id: 'delivery', name: '交期' },
];
const matrix = ref<ComparisonMatrix>(createIdentityMatrix(3));
</script>
<template>
  <div style="max-width: 720px">
    <s-ahp v-model="matrix" :criteria="criteria" :show-result="false" />
  </div>
</template>
:::

## 切换编辑器
上三角单元格内置3种编辑器，`editor` 属性控制，默认 `select`：
- `select`：下拉框，仅列出标准 Saaty 标度集合；
- `input`：文本输入框，支持 `3`、`1/3`、`3:1`、`0.33` 等写法；失焦解析，可输入任意正数，**不强制对齐Saaty标度**；
- `stepper`：步进器，按Saaty标度顺序增减。

> 当使用 `#cell` 插槽自定义单元格时，`editor` 属性失效，插槽优先级更高。
:::demo
<template>
  <div style="max-width: 720px">
    <s-ahp v-model="matrix1" :criteria="criteria" editor="select" />
    <s-ahp v-model="matrix2" :criteria="criteria" editor="input" />
    <s-ahp v-model="matrix3" :criteria="criteria" editor="stepper" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { ComparisonMatrix, Criterion, createIdentityMatrix } from 'min-sheep-ui';
const criteria: Criterion[] = [
  { id: 'price', name: '价格' },
  { id: 'quality', name: '质量' },
  { id: 'delivery', name: '交期' },
];
const matrix1 = ref<ComparisonMatrix>(createIdentityMatrix(3));
const matrix2 = ref<ComparisonMatrix>(createIdentityMatrix(3));
const matrix3 = ref<ComparisonMatrix>(createIdentityMatrix(3));
</script>
<style lang="scss" scoped>
.s-ahp {
  margin: 20px 0 0;
}
.s-ahp:first-child {
  margin: 0;
}
</style>
:::

## 自定义单元格
通过 `#cell` 作用域插槽替换上三角单元格编辑器。插槽**只作用于上三角**；对角线永远固定显示1，下三角永远派生为上三角的倒数。

:::demo
<template>
  <div style="max-width: 720px">
    <s-ahp v-model="matrix" :criteria="criteria">
      <template #cell="{ value, disabled, row, col, update }">
        <div class="custom-cell">
          <input
            type="range"
            min="0"
            max="16"
            step="1"
            :disabled="disabled"
            :value="indexOf(value)"
            @input="
              (e) =>
                update(SAATY_VALUES[Number((e.target as HTMLInputElement).value)])
            "
          />
          <span class="custom-cell__text">
            {{ row.name }} / {{ col.name }}：{{ formatFraction(value) }}
          </span>
        </div>
      </template>
    </s-ahp>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {
  SAATY_VALUES,
  formatFraction,
  nearestSaaty,
  type ComparisonMatrix,
  type Criterion,
  createIdentityMatrix,
} from 'min-sheep-ui';
const criteria: Criterion[] = [
  { id: 'price', name: '价格' },
  { id: 'quality', name: '质量' },
  { id: 'delivery', name: '交期' },
];
const matrix = ref<ComparisonMatrix>(createIdentityMatrix(3));
const indexOf = (v: number) =>
  SAATY_VALUES.findIndex((s) => Math.abs(s - nearestSaaty(v)) < 1e-6);
</script>
<style lang="scss" scoped>
.custom-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.custom-cell__text {
  font-size: 12px;
  color: #606266;
}
</style>
:::

## 动态增删准则
当 `criteria` 数组动态增减时，**业务代码必须同步重建matrix，保证二维数组尺寸一致**。
:::demo
<script setup lang="ts">
import { ref, watch } from 'vue';
import type { ComparisonMatrix, Criterion, createIdentityMatrix } from 'min-sheep-ui';
const pool: Criterion[] = [
  { id: 'price', name: '价格' },
  { id: 'quality', name: '质量' },
  { id: 'delivery', name: '交期' },
  { id: 'service', name: '服务' },
  { id: 'risk', name: '风险' },
];
const count = ref(3);
const criteria = ref<Criterion[]>(pool.slice(0, 3));
const matrix = ref<ComparisonMatrix>(createIdentityMatrix(3));
watch(count, (n) => {
  criteria.value = pool.slice(0, n);
  matrix.value = createIdentityMatrix(n);
});
</script>
<template>
  <div style="max-width: 720px">
    <div style="margin-bottom: 12px">
      <label>准则数量：</label>
      <input v-model.number="count" type="number" min="1" max="5" />
    </div>
    <s-ahp v-model="matrix" :criteria="criteria" />
  </div>
</template>
:::

## 矩阵校验
当外部传入的 `modelValue` 非法时，组件在结果区展示校验警告，同时**降级使用单位矩阵参与计算**，避免计算报错。触发校验警告的条件：
1. 矩阵尺寸和 `criteria.length` 不一致；
2. 对角线元素不等于1；
3. 矩阵内存在非正数；
4. 下三角值和上三角的倒数不匹配（外部脏输入）。

> 编辑模式下，只要在上三角操作，组件自动维护倒数关系，不会触发这个校验。
:::demo
<template>
  <div style="max-width: 720px">
    <s-ahp v-model="matrix" :criteria="criteria" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { ComparisonMatrix, Criterion } from 'min-sheep-ui';
const criteria: Criterion[] = [
  { id: 'price', name: '价格' },
  { id: 'quality', name: '质量' },
  { id: 'delivery', name: '交期' },
];
// 故意构造对角线非 1 的非法矩阵
const matrix = ref<ComparisonMatrix>([
  [1, 3, 5],
  [1 / 3, 1, 2],
  [1 / 5, 1 / 2, 2],
]);
</script>
:::

## TSX 中使用
TSX 调用时，`v-model` 拆成 `modelValue` + `onUpdate:modelValue`。
:::demo
```tsx
import { defineComponent, ref } from 'vue';
import type { ComparisonMatrix, Criterion, createIdentityMatrix } from 'min-sheep-ui';
export default defineComponent({
  name: 'AhpTsxDemo',
  setup() {
    const criteria = ref<Criterion[]>([
      { id: 'price', name: '价格' },
      { id: 'quality', name: '质量' },
      { id: 'delivery', name: '交期' },
    ]);
    const matrix = ref<ComparisonMatrix>(createIdentityMatrix(3));
    return () => (
      <s-ahp
        criteria={criteria.value}
        modelValue={matrix.value}
        editor="input"
        onUpdate:modelValue={(m: ComparisonMatrix) => (matrix.value = m)}
      />
    );
  },
});
```
:::

## 作战评估示例（新增，你的场景：作战目标达成性、代价接受度）
> 准则层，2个指标：作战目标达成性、代价接受度。
> 想定：作战目标达成性 略微重要于代价接受度，赋值=3。
> n=2，RI=0，CR恒等于0，一致性天然通过。
:::demo
```vue
<template>
  <div style="max-width:720px">
    <s-ahp v-model="matrix" :criteria="criteria"/>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { ComparisonMatrix, Criterion } from 'min-sheep-ui';
const criteria = ref<Criterion[]>([
  { id:'goal', name:'作战目标达成性', desc:'预定任务完成程度、毁伤控制效果' },
  { id:'cost', name:'代价接受度', desc:'我方损失、物资消耗、附带损伤、舆论代价' },
]);
const matrix = ref<ComparisonMatrix>([
  [1,3],
  [1/3,1],
]);
</script>
```
:::

## 读取权重结果
组件内部实时调用 `computeWeights` 计算。业务可自行导入纯函数，传入矩阵拿到结果。
```ts
import { computeWeights } from 'min-sheep-ui';
const result = computeWeights(matrix.value);
// result.weights    权重数组，总和=1
// result.lambdaMax  最大特征值
// result.CI         一致性指标
// result.CR         一致性比率
// result.consistent CR < 0.1 为 true
```
> 备注：当矩阵阶数 n=2，RI=0，CR=0，`consistent` 永远为 true（二阶矩阵天然满足一致性）。

## Props
| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `criteria` | `Criterion[]` | — | 准则列表，长度决定矩阵阶数，必填 |
| `modelValue` | `ComparisonMatrix` | — | n×n 比较矩阵，`v-model` 绑定，必填 |
| `disabled` | `boolean` | `false` | 是否禁用编辑 |
| `showResult` | `boolean` | `true` | 是否显示权重与一致性结果区 |
| `editor` | `'select' \| 'input' \| 'stepper'` | `'select'` | 上三角单元格内置编辑器类型；`#cell`插槽存在时该属性失效 |

### Criterion
| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `id` | `string` | 是 | 唯一标识 |
| `name` | `string` | 是 | 显示名称 |
| `desc` | `string` | 否 | hover悬停提示文本 |

## Events
| 事件名 | 参数 | 说明 |
|---|---|---|
| `update:modelValue` | `(matrix: ComparisonMatrix)` | 矩阵上三角修改后触发；下三角已自动生成倒数 |
| `change` | `(res: WeightResult)` | 【可选新增】每次计算完成后抛出，返回权重与一致性指标 |

> 如果你不想新增事件，就删掉 `change` 这一行，保持现有API不变。

## Slots
| 名称 | 作用域 | 说明 |
|---|---|---|
| `cell` | `{ rowIndex, colIndex, value, disabled, row, col, update }` | 自定义上三角单元格编辑器；`update(v)`写入上三角并自动生成下三角倒数 |

### AhpCellSlotProps
| 字段 | 类型 | 说明 |
|---|---|---|
| `rowIndex` | `number` | 行索引 |
| `colIndex` | `number` | 列索引 |
| `value` | `number` | 当前上三角单元格值 |
| `disabled` | `boolean` | 是否全局禁用 |
| `row` | `Criterion` | 当前行准则 |
| `col` | `Criterion` | 当前列准则 |
| `update` | `(value: number) => void` | 提交新值；组件自动维护对称下三角为倒数 |

## 导出工具 & 类型
| 名称 | 类型 | 说明 |
|---|---|---|
| `SAATY_VALUES` | `readonly number[]` | 标准Saaty标度集合 `1/9~9`，共17个，升序排列 |
| `RI_TABLE` | `Record<number, number>` | 随机一致性指标RI查表 |
| `computeWeights` | `(m: ComparisonMatrix) => WeightResult` | **方根法（几何平均法）**，计算权重、λmax、CI、CR和一致性判定 |
| `createIdentityMatrix` | `(n: number) => ComparisonMatrix` | 生成n阶单位判断矩阵（全部填1） |
| `formatFraction` | `(v: number) => string` | 将数值转为友好分数字符串，如 `0.3333 → "1/3"` |
| `nearestSaaty` | `(v: number) => number` | 取距离输入值最近的Saaty标度值 |
| `parseSaaty` | `(s: string) => number` | 解析文本：支持`3`、`1/3`、`3:1`；解析失败返回 `NaN` |
| `isSaatyValue` | `(v: number) => boolean` | 判断数值是否为标准Saaty标度（浮点容差） |
| `AhpSelectEditor` | 组件 | 内置下拉选择编辑器 |
| `AhpInputEditor` | 组件 | 内置文本输入编辑器 |
| `AhpStepperEditor` | 组件 | 内置步进器编辑器 |
| `Criterion` | type | 准则项类型 |
| `ComparisonMatrix` | type | 判断矩阵二维数组 `number[][]` |
| `WeightResult` | type | 权重计算结果类型 |
| `AhpProps` | type | 组件Props类型 |
| `AhpEditor` | type | 编辑器类型联合 |
| `AhpCellSlotProps` | type | #cell插槽参数类型 |

### WeightResult
```ts
export interface WeightResult {
  weights: number[];
  lambdaMax: number;
  CI: number;
  CR: number;
  consistent: boolean;
}
```
