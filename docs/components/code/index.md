# Code 代码

## 基础用法

:::demo

```vue
<template>
  <s-code :hljs="hljsInstance"
        code="
function sleep (ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
"
        language="javascript"
      />
      <s-code :hljs="hljsInstance"
        code="
def say_hello():
    print('Hello Naive UI')
"
        language="python"
      />
      <s-code :hljs="hljsInstance" :code="cppCode" language="cpp" />
</template>
<script lang="ts" setup>
import hljs from 'highlight.js';
 const hljsInstance = hljs;
const cppCode=`int main () {
  std::cout << "Hello Naive UI";
  return 0;
}`
</script>
```

:::

## 行内显示

:::demo

```vue
<template>
   <div>
    JavaScript
    <s-code :code="code" language="javascript" inline />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const code = ref('console.log("工具人的日子不好过")')
</script>
```

:::
## 显示行号

> 可以在代码块左侧显示行号。

:::demo
```vue
<template>
  <div style="overflow: auto">
    <s-code :code="code" language="cpp" show-line-numbers />
  </div>
</template>

<script setup lang="ts">
const code = `#include <bits/stdc++.h>
using namespace std;

int main() {
  cout <<"你" << endl;
  cout <<"觉" << endl;
  cout <<"得" << endl;
  cout <<"恨" << endl;
  cout <<"却" << endl;
  cout <<"离" << endl;
  cout <<"不" << endl;
  cout <<"开" << endl;
  return 0;
}`
</script>
```
:::


<!-- 参考 Naive UI -->

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| code |传入的 code 字符串 | `string` | `''` |
| inline | 使用行内样式  | `boolean` | `false` |
| hljs | 如果你想局部设定 hljs，可以通过这个属性传给组件 | `Object` | `undefined` |
| language | 代码在 highlightjs 中的语言 | `string` | `undefined` |
| `show-line-numbers` | 是否显示行号，在 `inline` 或 `word-wrap` 的情况下不生效 | `boolean` | `false` |
| trim | 是否显示 trim 后的代码 | `boolean` | `false` |
| `word-wrap` | 代码过长时是否自动换行 | `boolean` | `false` |
