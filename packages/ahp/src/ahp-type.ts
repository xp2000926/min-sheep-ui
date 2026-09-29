import type { ExtractPropTypes } from 'vue';
/** AHP矩阵行，二维数组 */
export type AhpMatrix = number[][];
/** 计算结果类型 */
export interface AhpResult {
  /** 权重向量，总和为 1（方根法归一化） */
  weights: number[];
  /** 最大特征根 λmax */
  lambdaMax: number;
  /** 一致性指标 CI = (λmax - n) / (n - 1) */
  CI: number;
  /** 随机一致性指标（查表）；n=2 时为 0 */
  RI: number;
  /** 一致性比率 CR = CI / RI；n=2 时为 NaN（无意义） */
  CR: number;
  /** 是否通过一致性检验 CR<0.1；n=2 恒为 true */
  pass: boolean;
}
export const ahpProps = {
  /** 矩阵阶数，传入值会被钳制到 2~9（Math.max(2, Math.min(9, order))） */
  order: {
    type: Number,
    default: 3
  },
  /** n×n 判断矩阵，v-model 绑定；行数与 order 不一致时组件会重置为单位矩阵 */
  modelValue: {
    type: Array as () => AhpMatrix,
    default: () => []
  },
  /** 准则标签：长度不足或存在空白项时自动补 C1、C2… 占位；超过 order 的部分截断不渲染 */
  labels: {
    type: Array as () => string[],
    default: () => []
  },
  /** 是否禁用整个编辑器 */
  disabled: {
    type: Boolean,
    default: false
  },
  /** 是否展示计算结果面板，默认true */
  showResult: {
    type: Boolean,
    default: true
  }
} as const;
export type AhpProps = ExtractPropTypes<typeof ahpProps>;

/** #input 作用域插槽参数：自定义上三角单元格编辑器 */
export interface AhpInputSlotProps {
  /** 当前上三角单元格数值 */
  cellVal: number;
  /** 是否全局禁用 */
  disabled: boolean;
  /** 行索引 */
  row: number;
  /** 列索引 */
  col: number;
  /** 提交新值（字符串或数字均可，空串/非数字/非正数会被忽略）；
   *  组件会自动把对称下三角同步为倒数 */
  onChange: (val: string | number) => void;
}

/** #result 作用域插槽参数：自定义结果面板 */
export interface AhpResultSlotProps {
  /** 实时计算结果（方根法） */
  res: AhpResult;
  /** 当前生效的准则标签（含自动补齐的 Cx 占位） */
  labels: string[];
}

/** 组件插槽签名（仅供类型标注使用） */
export interface AhpSlots {
  input?: (props: AhpInputSlotProps) => unknown;
  result?: (props: AhpResultSlotProps) => unknown;
}

/** emits 调用签名（仅供类型标注使用） */
export interface AhpEmitEvents {
  (e: 'update:modelValue', val: AhpMatrix): void;
  (e: 'change', res: AhpResult): void;
}

export const ahpEmits = {
  'update:modelValue': (val: AhpMatrix) => Array.isArray(val),
  /** 计算结果变更事件 */
  change: (res: AhpResult) => !!res
};
export type AhpEmits = typeof ahpEmits;
