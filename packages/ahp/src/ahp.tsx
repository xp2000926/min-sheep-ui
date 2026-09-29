import { defineComponent, computed, watch, ref, useSlots } from 'vue';
import { ahpProps, ahpEmits, type AhpMatrix, type AhpResult } from './ahp-type';

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
      row.push(i === j ? 1 : 1);
    }
    mat.push(row);
  }
  return mat;
}
export default defineComponent({
  name: 'SAhp',
  props: ahpProps,
  emits: ahpEmits,
  setup(props, { emit, slots }) {
    const order = computed(() => Math.max(2, Math.min(9, props.order)));
    // 规范化label：不足补Cx，超过order截断
    const normLabels = computed(() => {
      const n = order.value;
      const raw = props.labels;
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
    // 内部矩阵，做代理
    const innerMatrix = ref<AhpMatrix>([]);
    // 外部modelValue同步到内部
    watch(
      () => props.modelValue,
      v => {
        if (Array.isArray(v) && v.length === order.value) {
          innerMatrix.value = JSON.parse(JSON.stringify(v));
        } else {
          innerMatrix.value = createIdentityMatrix(order.value);
        }
      },
      { immediate: true, deep: true }
    );
    // 阶数变化重建矩阵
    watch(
      order,
      n => {
        innerMatrix.value = createIdentityMatrix(n);
      },
      { immediate: false }
    );
    // 自动填充下三角：mat[j][i] = 1 / mat[i][j]，i<j（上三角）
    function syncLowerTriangle(mat: AhpMatrix) {
      const m = JSON.parse(JSON.stringify(mat)) as AhpMatrix;
      const n = m.length;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          m[j][i] = 1 / m[i][j];
        }
      }
      return m;
    }
    // 修改上三角单元格
    function handleCellChange(i: number, j: number, rawVal: string) {
      if (props.disabled) return;
      if (i >= j) return;

      // 1. 空字符串：什么都不做，让输入框保留空态
      if (rawVal === '' || rawVal === null || rawVal === undefined) return;

      const val = typeof rawVal === 'number' ? rawVal : Number(rawVal);

      // 2. 非数字 / 非正数：丢弃
      if (!Number.isFinite(val) || val <= 0) return;

      const newMat = JSON.parse(JSON.stringify(innerMatrix.value)) as AhpMatrix;
      newMat[i][j] = val;
      const syncedMat = syncLowerTriangle(newMat);
      innerMatrix.value = syncedMat;
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

    return () => {
      const n = order.value;
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
                              })
                            ) : (
                              <input
                                type="number"
                                min="0.001"
                                max="9"
                                step="0.1"
                                value={cellVal}
                                onInput={e => {
                                  handleCellChange(
                                    i,
                                    j,
                                    (e.target as HTMLInputElement).value
                                  );
                                }}
                              />
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
                slots.result({ res, labels })
              ) : (
                <>
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
