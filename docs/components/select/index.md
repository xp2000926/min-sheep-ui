# Select 选择器

> 当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

> 适用广泛的基础单选 `v-model` 的值为当前被选中的 `s-option` 的 value 属性值

:::demo
```vue
<template>
  <s-select v-model="value" placeholder="Select" style="width: 240px">
    <s-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </s-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```
:::

## Options 属性

> `s-option` 基本用法。 您可以通过 `field` 属性自定义 `options` 的别名。

:::demo
```vue
<template>
  <s-select
    v-model="value"
    :options="options"
    :field="field"
    placeholder="Select"
    style="width: 240px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const field = {
  value: 'id',
  label: 'label',
  options: 'options',
  disabled: 'disabled',
}

const options = [
  {
    id: 'Option1',
    label: 'Option1',
  },
  {
    id: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    id: 'Option3',
    label: 'Option3',
  },
  {
    id: 'Option4',
    label: 'Option4',
    disabled: true,
  },
  {
    id: 'Option5',
    label: 'Option5',
  },
]
</script>
```
:::

## 有禁用选项

> 在 `s-option` 中，设定 `disabled` 值为 true，即可禁用该选项

:::demo
```vue
<template>
  <s-select v-model="value" placeholder="Select" style="width: 240px">
    <s-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </s-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```
:::

## 可清空

> 您可以使用清除图标来清除选择。
>
> 为 `s-select` 设置 `clearable` 属性，则可将选择器清空。
:::demo
```vue
<template>
  <s-select
    v-model="value"
    clearable
    placeholder="Select"
    style="width: 240px"
  >
    <s-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </s-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```
:::

## 尺寸

> 使用 `size` 属性改变选择器大小。 除了默认大小外，还有另外两个选项： `large`, `small。`
:::demo
```vue
<template>
  <div class="flex flex-wrap gap-4 items-center">
    <s-select
      v-model="value"
      placeholder="Select"
      size="large"
      style="width: 240px"
    >
      <s-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </s-select>
    <s-select v-model="value" placeholder="Select" style="width: 240px">
      <s-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </s-select>
    <s-select
      v-model="value"
      placeholder="Select"
      size="small"
      style="width: 240px"
    >
      <s-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </s-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```
:::

## 将选项进行分组

> 你可以为选项进行分组来区分不同的选项
>
> 使用 `s-option-group` 对备选项进行分组，它的 label 属性为分组名

:::demo
```vue
<template>
  <s-select v-model="value" placeholder="Select" style="width: 240px">
    <s-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label"
    >
      <s-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </s-option-group>
  </s-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    label: 'Popular cities',
    options: [
      {
        value: 'Shanghai',
        label: 'Shanghai',
      },
      {
        value: 'Beijing',
        label: 'Beijing',
      },
    ],
  },
  {
    label: 'City name',
    options: [
      {
        value: 'Chengdu',
        label: 'Chengdu',
      },
      {
        value: 'Shenzhen',
        label: 'Shenzhen',
      },
      {
        value: 'Guangzhou',
        label: 'Guangzhou',
      },
      {
        value: 'Dalian',
        label: 'Dalian',
      },
    ],
  },
]
</script>
```
:::

## 筛选选项

> 可以利用筛选功能快速查找选项。
>
> 为s-select添加filterable属性即可启用搜索功能。 默认情况下，Select 会找出所有 label 属性包含输入值的选项。 如果希望使用其他的搜索逻辑，可以通过传入一个 filter-method 来实现。 filter-method 为一个 Function，它会在输入值发生变化时调用，参数为当前输入值。

:::demo
```vue
<template>
  <s-select
    v-model="value"
    filterable
    placeholder="Select"
    style="width: 240px"
  >
    <s-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </s-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```
:::

## 远程搜索

> 输入关键字以从远程服务器中查找数据。
>
> 从服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将 `filterable` 和 `remote` 设置为 `true`，同时传入一个 `remote-method`。 `remote-method` 为一个 `Function`，它会在输入值发生变化时调用，参数为当前输入值。 需要注意的是，如果 `s-option` 是通过 `v-for` 指令渲染出来的，此时需要为 `s-option` 添加 `key` 属性， 且其值需具有唯一性，比如这个例子中的 `item.value`。

:::demo
```vue
<template>
  <div class="flex flex-wrap">
    <div class="m-4">
      <p>default</p>
      <s-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="Please enter a keyword"
        :remote-method="remoteMethod"
        :loading="loading"
        style="width: 240px"
      >
        <s-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </s-select>
    </div>
    <div class="m-4">
      <p>use remote-show-suffix</p>
      <s-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="Please enter a keyword"
        remote-show-suffix
        :remote-method="remoteMethod"
        :loading="loading"
        style="width: 240px"
      >
        <s-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </s-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

interface ListItem {
  value: string
  label: string
}

const list = ref<ListItem[]>([])
const options = ref<ListItem[]>([])
const value = ref<string[]>([])
const loading = ref(false)

onMounted(() => {
  list.value = states.map((item) => {
    return { value: `value:${item}`, label: `label:${item}` }
  })
})

const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options.value = []
  }
}

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
</script>
```
::: 

## 创建新的选项

> 创建并选中未包含在初始选项中的条目。
>
> 通过使用 `allow-create` 属性，用户可以通过输入框创建新项目。 为了使 `allow-create` 正常工作， `filterable` 的值必须为 `true。` 本例还使用了 `default-first-option` 属性， 在该属性为 `true` 的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。

:::demo
```vue
<template>
  <s-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    :reserve-keyword="false"
    placeholder="Choose tags for your article"
    style="width: 240px"
  >
    <s-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </s-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string[]>([])
const options = [
  {
    value: 'HTML',
    label: 'HTML',
  },
  {
    value: 'CSS',
    label: 'CSS',
  },
  {
    value: 'JavaScript',
    label: 'JavaScript',
  },
]
</script>
```
::: 

## 空值配置

> 若想配置如空字符串为有效值而不是空值，可以配置 `empty-values` 为 `[null, undefined]`.\
>
> 如果您想要将清空值更改为 `null`, 请设置 `value-on-clear` 为 `null`

:::demo
```vue
<template>
  <s-select
    v-model="value"
    :empty-values="[null, undefined]"
    :value-on-clear="null"
    clearable
    placeholder="Select"
    style="width: 240px"
    @clear="handleClear"
  >
    <s-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </s-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: '',
    label: 'All',
  },
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const handleClear = () => {
 console.log(`The clear value is: ${value.value}`)
}
</script>
```
::: 

<!-- ## 有禁用选项

> 在 s-option 中，设定 disabled 值为 true，即可禁用该选项
:::demo
```vue

```
::: -->