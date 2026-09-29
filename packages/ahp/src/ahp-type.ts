import type { ExtractPropTypes } from 'vue';
/** AHP矩阵行，二维数组 */
export type AhpMatrix = number[][];
/** 计算结果类型 */
export interface AhpResult {
  /** 权重向量 */
  weights: number[];
  /** 最大特征根 λmax */
  lambdaMax: number;
  CI: number;
  RI: number;
  CR: number;
  /** 是否通过一致性检验 CR<0.1 */
  pass: boolean;
}
export const ahpProps = {
  /** 矩阵阶数 2~9 */
  order: {
    type: Number,
    default: 3
  },
  /** 初始矩阵，v-model绑定 */
  modelValue: {
    type: Array as () => AhpMatrix,
    default: () => []
  },
  /** 准则标签数组，长度应当等于order */
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

export const ahpEmits = {
  'update:modelValue': (val: AhpMatrix) => Array.isArray(val),
  /** 计算结果变更事件 */
  change: (res: AhpResult) => !!res
};
export type AhpEmits = typeof ahpEmits;
