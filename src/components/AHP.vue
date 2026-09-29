<template>
  <Ahp v-model="mat.Ahp" :order="mat.labels.length" :labels="mat.labels" @change="onResult">
    <template #result="{ res, labels }">
      <div style="display: flex;margin-top: 8px;gap: 10px;">
        <div>λmax:{{ res.lambdaMax.toFixed(4) }} </div>
        <div>CI:{{ res.CI.toFixed(4) }}</div>
        <div v-if="Number.isNaN(res.CR)">
          CR: —— 【2阶矩阵，无随机一致性指标，天然满足一致性 ✅】
        </div>
        <div v-else>
          CR : {{ res.CR.toFixed(4) }}
          <span style="margin-left:4px;">{{ res.pass ? '✅通过' : '❌不通过' }}</span>
        </div>
      </div>
    </template>
  </Ahp>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Ahp } from "../../packages/ahp"
// const mat = ref<number[][]>([
//   [1, 2, 3],
//   [0.5, 1, 4],
//   [1 / 3, 0.25, 1],
// ]);
const mat = ref(
  {
    labels: ['价格', '性能', '外观'],
    Ahp: [
      [1, 2, 3],
      [0.5, 1, 4],
      [1 / 3, 0.25, 1],
    ]
  });
const mat2 = ref(
  {
    labels: ['价格', '性能'],
    Ahp: [
      [1, 5],
      [0.2, 1],
    ]
  });

function onResult(res) {
  console.log('ahp结果', res);
}
</script>