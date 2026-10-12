import { defineComponent, computed, watch, ref } from 'vue';
import {
  ahpProps,
  ahpEmits,
  type AhpMatrix,
  type AhpResult,
  type AhpInputSlotProps,
  type AhpResultSlotProps
} from './ahp-type';

// RI随机一致性指标表
const RI_TABLE: Record<number, number> = {
  1: 0,
  2: 0,
  3: 0.58,
  4: 0.9,
  5: 1.12,
  6: 1.24,
  7: 1.32,
  8: 1.41,
  9: 1.45
};

// 1-9 标度（含倒数），select / stepper 编辑器共用
const SAATY_SCALE: number[] = [
  1 / 9,
  1 / 8,
  1 / 7,
  1 / 6,
  1 / 5,
  1 / 4,
  1 / 3,
  1 / 2,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
];

// 倒数比较的浮点容差
const EPS = 1e-6;

/**
 * 校验外部传入的判断矩阵
 * 规则：n×n 方阵、全为正数、对角线 = 1、下三角与上三角互为倒数
 * @param mat 待校验矩阵
 * @param n 期望阶数
 * @returns 校验通过返回 null；失败返回错误原因（文案）
 */
export function validateMatrix(mat: unknown, n: number): string | null {
  if (!Array.isArray(mat) || mat.length !== n) {
    return `矩阵必须是 ${n}×${n} 方阵`;
  }
  for (let i = 0; i < n; i++) {
    const row = (mat as unknown[])[i];
    if (!Array.isArray(row) || row.length !== n) {
      return `矩阵必须是 ${n}×${n} 方阵`;
    }
    for (let j = 0; j < n; j++) {
      const v = row[j];
      if (typeof v !== 'number' || !(v > 0)) {
        return `第 ${i + 1} 行第 ${j + 1} 列必须为正数`;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (Math.abs((mat as number[][])[i][i] - 1) > EPS) {
      return `对角线元素必须为 1（第 ${i + 1} 行）`;
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const upper = (mat as number[][])[i][j];
      const lower = (mat as number[][])[j][i];
      if (Math.abs(lower - 1 / upper) > EPS) {
        return `下三角须为上三角的倒数（第 ${j + 1} 行第 ${i + 1} 列）`;
      }
    }
  }
  return null;
}

/**
 * AHP 方根法（几何平均法）计算权重 + 一致性检验
 * @param matrix 判断矩阵
 * @returns AhpResult
 */
function calcAhpByRoot(matrix: AhpMatrix): AhpResult {
  const n = matrix.length;
  if (n < 2) {
    return { weights: [1], lambdaMax: 1, CI: 0, RI: 0, CR: 0, pass: true };
  }
  // ========== 2阶特殊处理 ==========
  if (n === 2) {
    const rowGeo: number[] = [];
    for (let i = 0; i < n; i++) {
      let p = 1;
      for (let j = 0; j < n; j++) {
        p *= matrix[i][j];
      }
      rowGeo.push(Math.pow(p, 1 / n));
    }
    const sumGeo = rowGeo.reduce((a, b) => a + b, 0);
    const weights = rowGeo.map(v => v / sumGeo);

    let lambdaSum = 0;
    for (let i = 0; i < n; i++) {
      let awi = 0;
      for (let j = 0; j < n; j++) {
        awi += matrix[i][j] * weights[j];
      }
      lambdaSum += awi / weights[i];
    }
    const lambdaMax = lambdaSum / n;
    const CI = (lambdaMax - n) / (n - 1);
    const RI = RI_TABLE[2];
    const CR = NaN;
    const pass = true;
    return { weights, lambdaMax, CI, RI, CR, pass };
  }
  // =================================
  // n >=3 常规逻辑
  const rowGeo: number[] = [];
  for (let i = 0; i < n; i++) {
    let p = 1;
    for (let j = 0; j < n; j++) {
      p *= matrix[i][j];
    }
    rowGeo.push(Math.pow(p, 1 / n));
  }
  // 归一化得到权重w
  const sumGeo = rowGeo.reduce((a, b) => a + b, 0);
  const weights = rowGeo.map(v => v / sumGeo);
  // λmax = 1/n * Σ ( (A·w)_i / w_i )
  let lambdaSum = 0;
  for (let i = 0; i < n; i++) {
    let awi = 0;
    for (let j = 0; j < n; j++) {
      awi += matrix[i][j] * weights[j];
    }
    lambdaSum += awi / weights[i];
  }
  const lambdaMax = lambdaSum / n;
  const CI = (lambdaMax - n) / (n - 1);
  const RI = RI_TABLE[n] ?? 0;
  const CR = CI / RI;
  const pass = CR < 0.1;
  return {
    weights,
    lambdaMax,
    CI,
    RI,
    CR,
    pass
  };
}

/**
 * 初始化n阶单位矩阵
 */
function createIdentityMatrix(n: number): AhpMatrix {
  const mat: AhpMatrix = [];
  for (let i = 0; i < n; i++) {
    const row: number[] = [];
    for (let j = 0; j < n; j++) {
      // AHP 判断矩阵的“单位矩阵”全部填 1
      row.push(1);
    }
    mat.push(row);
  }
  return mat;
}

function deepCopy<T>(v: T): T {
  return JSON.parse(JSON.stringify(v)) as T;
}

function sameMatrix(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

/** 标度值 → 友好文本：1、3、1/3 … */
function formatScaleVal(v: number): string {
  if (v >= 1) return String(v);
  return `1/${Math.round(1 / v)}`;
}

/** 非标度的普通数值文本 */
function formatCellText(v: number): string {
  return String(Math.round(v * 1000) / 1000);
}

/** 距 v 最近的标度下标 */
function nearestScaleIndex(v: number): number {
  let best = 0;
  for (let k = 1; k < SAATY_SCALE.length; k++) {
    if (Math.abs(v - SAATY_SCALE[k]) < Math.abs(v - SAATY_SCALE[best])) {
      best = k;
    }
  }
  return best;
}

export default defineComponent({
  name: 'SAhp',
  props: ahpProps,
  emits: ahpEmits,
  setup(props, { emit, slots }) {
    // 阶数由 criteria 长度决定：钳制 2~9；未传/为空时默认 3 阶
    const order = computed(() =>
      Math.max(2, Math.min(9, props.criteria.length || 3))
    );
    // 规范化准则标签：空白项补 Cx，超出部分截断
    const normLabels = computed(() => {
      const n = order.value;
      const raw = props.criteria;
      const list: string[] = [];
      for (let i = 0; i < n; i++) {
        if (raw[i] && raw[i].trim()) {
          list.push(raw[i].trim());
        } else {
          list.push(`C${i + 1}`);
        }
      }
      return list;
    });
    // 内部矩阵
    const innerMatrix = ref<AhpMatrix>(createIdentityMatrix(order.value));
    // 外部矩阵校验失败降级时的警告文案
    const warning = ref('');
    // 外部modelValue同步到内部：校验通过采用；失败降级单位矩阵并警告
    watch(
      () => props.modelValue,
      v => {
        // 未传/空数组：静默使用单位矩阵
        if (!Array.isArray(v) || v.length === 0) {
          if (innerMatrix.value.length !== order.value) {
            innerMatrix.value = createIdentityMatrix(order.value);
          }
          return;
        }
        // 回声：自身 emit 后父组件同步回来的同一矩阵，跳过（保留警告）
        if (sameMatrix(v, innerMatrix.value)) return;
        const err = validateMatrix(v, order.value);
        if (err) {
          warning.value = `传入矩阵校验失败：${err}，已降级为 ${order.value} 阶单位矩阵`;
          const identity = createIdentityMatrix(order.value);
          innerMatrix.value = identity;
          // 把降级结果同步回父组件，避免父子状态脱节
          emit('update:modelValue', deepCopy(identity));
        } else {
          warning.value = '';
          innerMatrix.value = deepCopy(v);
        }
      },
      { immediate: true, deep: true }
    );
    // 阶数变化：若父组件矩阵与新阶数匹配则直接采用，否则重建单位矩阵并 emit，避免父子脱节
    watch(
      order,
      n => {
        const v = props.modelValue;
        if (Array.isArray(v) && v.length > 0 && !validateMatrix(v, n)) {
          warning.value = '';
          innerMatrix.value = deepCopy(v);
          return;
        }
        warning.value = '';
        const identity = createIdentityMatrix(n);
        innerMatrix.value = identity;
        emit('update:modelValue', deepCopy(identity));
      },
      { immediate: false }
    );
    // 自动填充下三角：mat[j][i] = 1 / mat[i][j]，i<j（上三角）
    function syncLowerTriangle(mat: AhpMatrix) {
      const m = deepCopy(mat);
      const n = m.length;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          m[j][i] = 1 / m[i][j];
        }
      }
      return m;
    }
    // 修改上三角单元格；插槽/原生输入可能传来字符串或数字
    function handleCellChange(i: number, j: number, rawVal: string | number) {
      if (props.disabled) return;
      if (i >= j) return;

      // 1. 空字符串：什么都不做，让输入框保留空态
      if (rawVal === '' || rawVal === null || rawVal === undefined) return;

      const val = typeof rawVal === 'number' ? rawVal : Number(rawVal);

      // 2. 非数字 / 非正数：丢弃
      if (!Number.isFinite(val) || val <= 0) return;

      const newMat = deepCopy(innerMatrix.value);
      newMat[i][j] = val;
      const syncedMat = syncLowerTriangle(newMat);
      innerMatrix.value = syncedMat;
      // 用户手动编辑后，旧的降级警告不再适用
      warning.value = '';
      emit('update:modelValue', syncedMat);
    }
    // 实时计算结果
    const result = computed(() => {
      return calcAhpByRoot(innerMatrix.value);
    });
    // 结果变更向外抛出
    watch(
      result,
      r => {
        emit('change', r);
      },
      { immediate: true }
    );

    // 编辑器类型：非法值兜底为 input
    const editorType = computed(() =>
      ['select', 'stepper'].includes(props.editor) ? props.editor : 'input'
    );

    // 上三角单元格编辑器（#input 插槽优先）
    function renderCellEditor(cellVal: number, i: number, j: number) {
      const onCellChange = (val: string | number) =>
        handleCellChange(i, j, val);
      if (editorType.value === 'select') {
        const onScale = SAATY_SCALE.some(s => Math.abs(s - cellVal) < 1e-9);
        return (
          <select
            class="ahp-select"
            onChange={(e: Event) =>
              onCellChange((e.target as HTMLSelectElement).value)
            }
          >
            {/* 当前值不在标度上时（如手输 2.5），追加一个选项避免显示错位 */}
            {!onScale ? (
              <option value={String(cellVal)} selected>
                {formatCellText(cellVal)}
              </option>
            ) : null}
            {SAATY_SCALE.map(s => (
              <option
                key={s}
                value={String(s)}
                selected={Math.abs(s - cellVal) < 1e-9}
              >
                {formatScaleVal(s)}
              </option>
            ))}
          </select>
        );
      }
      if (editorType.value === 'stepper') {
        const idx = nearestScaleIndex(cellVal);
        const onScale = Math.abs(SAATY_SCALE[idx] - cellVal) < 1e-9;
        return (
          <div class="ahp-stepper">
            <button
              type="button"
              class="ahp-stepper__btn"
              disabled={idx === 0}
              onClick={() => onCellChange(SAATY_SCALE[idx - 1])}
            >
              -
            </button>
            <span class="ahp-stepper__val">
              {onScale ? formatScaleVal(cellVal) : formatCellText(cellVal)}
            </span>
            <button
              type="button"
              class="ahp-stepper__btn"
              disabled={idx === SAATY_SCALE.length - 1}
              onClick={() => onCellChange(SAATY_SCALE[idx + 1])}
            >
              +
            </button>
          </div>
        );
      }
      return (
        <input
          type="number"
          min="0.001"
          max="9"
          step="0.1"
          value={cellVal}
          onInput={e => {
            handleCellChange(i, j, (e.target as HTMLInputElement).value);
          }}
        />
      );
    }

    return () => {
      const mat = innerMatrix.value;
      const res = result.value;
      const labels = normLabels.value;

      return (
        <div class="s-ahp">
          <div class="ahp-matrix-wrap">
            <table class="ahp-table w-full">
              <thead>
                <tr>
                  <th class="ahp-label-cell"></th>
                  {labels.map((txt, j) => (
                    <th key={j} class="ahp-label-cell">
                      {txt}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mat.map((row, i) => (
                  <tr key={i}>
                    <th class="ahp-label-cell">{labels[i]}</th>
                    {row.map((cellVal, j) => {
                      const isDiagonal = i === j;
                      const isUpper = i < j;
                      const isLower = i > j;
                      return (
                        <td
                          key={j}
                          class={[
                            'ahp-cell',
                            {
                              'ahp-cell__diag': isDiagonal,
                              'ahp-cell__upper': isUpper,
                              'ahp-cell__lower': isLower
                            }
                          ]}
                        >
                          {isUpper && !props.disabled ? (
                            slots.input ? (
                              slots.input({
                                cellVal,
                                disabled: props.disabled,
                                row: i,
                                col: j,
                                onChange: (val: string | number) =>
                                  handleCellChange(i, j, val)
                              } satisfies AhpInputSlotProps)
                            ) : (
                              renderCellEditor(cellVal, i, j)
                            )
                          ) : (
                            <span>{cellVal.toFixed(3)}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {props.showResult ? (
            <div class="ahp-result">
              {slots.result ? (
                slots.result({
                  res,
                  labels,
                  warning: warning.value
                } satisfies AhpResultSlotProps)
              ) : (
                <>
                  {warning.value ? (
                    <div class="ahp-warning">⚠ {warning.value}</div>
                  ) : null}
                  <div>
                    权重向量：
                    {res.weights
                      .map((w, idx) => `${labels[idx]}=${w.toFixed(4)}`)
                      .join('；')}
                  </div>
                  <div>λmax: {res.lambdaMax.toFixed(4)}</div>
                  <div>CI: {res.CI.toFixed(4)}</div>
                  <div>RI: {res.RI.toFixed(4)}</div>
                  {Number.isNaN(res.CR) ? (
                    <div>
                      CR: —— 【2阶矩阵，无随机一致性指标，天然满足一致性 ✅】
                    </div>
                  ) : (
                    <div class={res.pass ? 'text-success' : 'text-error'}>
                      CR: {res.CR.toFixed(4)} 【
                      {res.pass ? '一致性检验通过 ✅' : '一致性检验不通过 ❌'}】
                    </div>
                  )}
                </>
              )}
            </div>
          ) : null}
        </div>
      );
    };
  }
});
