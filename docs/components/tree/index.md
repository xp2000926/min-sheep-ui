# 树 Tree 🌲

## 基础功能

Tree 组件基本用法，传入`data`属性即可。
:::demo Tree 组件基本用法，传入 data 属性
```vue
<template>
  <s-tree :data="data" />
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    label: 'docs',
    id: 'docs'
  },
  {
    label: 'packages',
    id: 'packages',
    expanded: true,
    children: [
      {
        label: 'plugin-vue',
        id: 'plugin-vue'
      },
      {
        label: 'vite',
        id: 'vite',
        expanded: true,
        children: [
          {
            label: 'src',
            id: 'src'
          },
          {
            label: 'README.md',
            id: 'README.md'
          }
        ]
      }
    ]
  },
  {
    label: 'scripts',
    id: 'scripts',
    children: [
      {
        label: 'release.ts',
        id: 'release.ts'
      },
      {
        label: 'verifyCommit.ts',
        id: 'verifyCommit.ts'
      }
    ]
  },
  {
    label: 'pnpm-workspace.yaml',
    id: 'pnpm-workspace.yaml'
  }
])
</script>
```

:::

## 连接线

展开节点之后设置连接线便于分辨同级节点。通过`lineable`属性控制特性开关，默认 false。

:::demo 通过`lineable`属性控制特性开关，默认 false
```vue
<template>
  <s-tree :data="data" lineable />
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    label: 'docs',
    id: 'docs'
  },
  {
    label: 'packages',
    id: 'packages',
    expanded: true,
    children: [
      {
        label: 'plugin-vue',
        id: 'plugin-vue'
      },
      {
        label: 'vite',
        id: 'vite',
        expanded: true,
        children: [
          {
            label: 'src',
            id: 'src'
          },
          {
            label: 'README.md',
            id: 'README.md'
          }
        ]
      }
    ]
  },
  {
    label: 'scripts',
    id: 'scripts',
    children: [
      {
        label: 'release.ts',
        id: 'release.ts'
      },
      {
        label: 'verifyCommit.ts',
        id: 'verifyCommit.ts'
      }
    ]
  },
  {
    label: 'pnpm-workspace.yaml',
    id: 'pnpm-workspace.yaml'
  }
])
</script>
```

:::

## 复选框

通过复选框可以多选节点，这样可以批量操作节点。

:::demo 通过`checkable`属性控制特性开关，默认 false

```vue
<template>
  <s-tree :data="data" checkable @check="check" />
</template>
<script setup>
import { ref } from 'vue'
const check = (
  currentNode,
  selectedRowKeys,
  selectedRows,
  halfselectedRowKeys,
  halfselectedRows
) => {
  console.log(
    currentNode,
    selectedRowKeys,
    selectedRows,
    halfselectedRowKeys,
    halfselectedRows
  )
}
const data = ref([
  {
    label: 'docs',
    id: 'docs',
    checked: true
  },
  {
    label: 'packages',
    id: 'packages',
    expanded: true,
    inChecked: true,
    checked: false,
    disabled:true,
    children: [
      {
        label: 'plugin-vue',
        id: 'plugin-vue',
        checked: false
      },
      {
        label: 'vite',
        id: 'vite',
        expanded: true,
        checked: true,
        children: [
          {
            label: 'src',
            id: 'src',
            checked: true,
            disabled:true
          },
          {
            label: 'README.md',
            id: 'README.md',
            checked: true
          }
        ]
      }
    ]
  },
  {
    label: 'scripts',
    id: 'scripts',
    expanded: true,
    inChecked: true,
    checked: false,
    children: [
      {
        label: 'release.ts',
        id: 'release.ts',
        checked: true,
      },
      {
        label: 'verifyCommit.ts',
        id: 'verifyCommit.ts'
      }
    ]
  },
  {
    label: 'pnpm-workspace.yaml',
    id: 'pnpm-workspace.yaml'
  }
])
</script>
```

:::

## 自定义 icon 图标

通过 icon 插槽可以自定义展开/折叠图标。
:::demo 自定义展开图标，设置 icon 插槽
```vue
<template>
  <s-tree :data="data">
    <template #icon="{ nodeData, toggleNode }">
      <span v-if="nodeData.isLeaf" class="devui-tree-node__indent"></span>
      <span
        v-else
        @click="
          event => {
            toggleNode(event, nodeData)
          }
        "
      >
        <svg
          :style="{
            transform: nodeData.expanded ? 'rotate(90deg)' : '',
            display: 'inline-block',
            margin: '0 5px',
            cursor: 'pointer'
          }"
          viewBox="0 0 1024 1024"
          width="12"
          height="12"
        >
          <path
            d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z"
          ></path>
        </svg>
      </span>
    </template>
  </s-tree>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    label: 'docs',
    id: 'docs'
  },
  {
    label: 'packages',
    id: 'packages',
    expanded: true,
    children: [
      {
        label: 'plugin-vue',
        id: 'plugin-vue'
      },
      {
        label: 'vite',
        id: 'vite',
        expanded: true,
        children: [
          {
            label: 'src',
            id: 'src'
          },
          {
            label: 'README.md',
            id: 'README.md'
          }
        ]
      }
    ]
  },
  {
    label: 'scripts',
    id: 'scripts',
    children: [
      {
        label: 'release.ts',
        id: 'release.ts'
      },
      {
        label: 'verifyCommit.ts',
        id: 'verifyCommit.ts'
      }
    ]
  },
  {
    label: 'pnpm-workspace.yaml',
    id: 'pnpm-workspace.yaml'
  }
])
</script>
```
:::

## 自定义节点内容

通过 content 插槽可以自定义节点内容。

:::demo 在 label 左边设置图标，右侧设置一个修改状态图标。
```vue
<template>
  <s-tree :data="data">
    <template #content="treeNode">
      <svg
        v-if="treeNode.isLeaf"
        id="octicon_file_16"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="#57606a"
        style="display:inline-block"
      >
        <path
          fill-rule="evenodd"
          d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"
        ></path>
      </svg>
      <svg
        v-else
        id="octicon_file-directory-fill_16"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="#54aeff"
        style="display:inline-block"
      >
        <path
          d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"
        ></path>
      </svg>
      {{ treeNode.label }}
      <svg
        v-if="treeNode.isLeaf"
        title="modified"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="#9a6700"
        style="position: absolute; right: 0;top: 8px"
      >
        <path
          fill-rule="evenodd"
          d="M2.75 2.5h10.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25H2.75a.25.25 0 01-.25-.25V2.75a.25.25 0 01.25-.25zM13.25 1H2.75A1.75 1.75 0 001 2.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0015 13.25V2.75A1.75 1.75 0 0013.25 1zM8 10a2 2 0 100-4 2 2 0 000 4z"
        ></path>
      </svg>
    </template>
  </s-tree>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    label: 'docs',
    id: 'docs'
  },
  {
    label: 'packages',
    id: 'packages',
    expanded: true,
    children: [
      {
        label: 'plugin-vue',
        id: 'plugin-vue'
      },
      {
        label: 'vite',
        id: 'vite',
        expanded: true,
        children: [
          {
            label: 'src',
            id: 'src'
          },
          {
            label: 'README.md',
            id: 'README.md'
          }
        ]
      }
    ]
  },
  {
    label: 'scripts',
    id: 'scripts',
    children: [
      {
        label: 'release.ts',
        id: 'release.ts'
      },
      {
        label: 'verifyCommit.ts',
        id: 'verifyCommit.ts'
      }
    ]
  },
  {
    label: 'pnpm-workspace.yaml',
    id: 'pnpm-workspace.yaml'
  }
])
</script>
```

:::

## 操作节点

通过设置 operable 打开节点操作按钮。

:::demo
```vue
<template>
  <s-tree :data="data" operable />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'node 1',
        id: 'node-1',
        children: [
          {
            label: 'node 1-1',
            id: 'node-1-1'
          }
        ]
      },
      {
        label: 'node 2',
        id: 'node-2'
      }
    ])

    return {
      data
    }
  }
})
</script>
```
:::

## 节点懒加载

通过设置该节点 isLeaf 参数为 false, 组件回调 lazyLoad 方法实现节点懒加载。

:::demo 通过设置该节点 isLeaf 参数为 false, 组件回调 lazyLoad 方法实现节点懒加载。
```vue
<template>
  <s-tree :data="data" @lazy-load="lazyLoad" />
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const data = ref([
      {
        id: 'node-1',
        label: 'node-1',
        children: [
          {
            id: 'node-1-1',
            label: 'node 1-1 - dynamic loading',
            isLeaf: false
          },
          {
            id: 'node 1-2',
            label: 'node 1-2'
          }
        ]
      },
      {
        id: 'node-2',
        label: 'node 2 - dynamic loading',
        isLeaf: false
      }
    ])

    const lazyLoad = (node, callback) => {
      setTimeout(() => {
        const data = [
          {
            label: 'lazy node 1',
            expanded: true,
            children: [
              {
                id: 'lazy node 1-1',
                label: 'lazy node 1-1'
              },
              {
                id: 'lazy node 1-2',
                label: 'lazy node 1-2'
              }
            ]
          },
          {
            id: 'lazy node 2',
            label: 'lazy node 2'
          }
        ]
        callback({
          treeItems: data,
          node
        })
      }, 1000)
    }
    return {
      data,
      lazyLoad
    }
  }
})
</script>
```
:::

## 可拖拽树

通过`draggable`属性配置节点的拖拽功能。

:::demo
```vue
<template>
  <h6><p>默认行为</p></h6>
  <s-tree :data="data" draggable></s-tree>

  <h6><p>排序</p></h6>
  <s-tree
    :data="data"
    :draggable="{ dropPrev: true, dropNext: true, dropInner: true }"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'node 1',
        id: 'node-1',
        children: [
          {
            label: 'node 1-1',
            id: 'node-1-1'
          }
        ]
      },
      {
        label: 'node 2',
        id: 'node-2'
      }
    ])
    return {
      data
    }
  }
})
</script>
```
:::

## 虚拟滚动

通过`height`开启虚拟滚动，通过`itemHeight`设置项目高度

:::demo
```vue
<template>
  <s-tree :data="data" :height="300" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      ...Array.from({ length: 1000 }).map((_, index) => ({
        id: 'node ' + index,
        label: 'node ' + index
      }))
    ])

    return {
      data
    }
  }
})
</script>
```
:::

## 手风琴模式

`accordion`对于同一级的节点，每次只能展开一

:::demo
```vue
<template>
  <s-tree :data="data" accordion />
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    label: '一级 1',
    id: '一级 1',
    children: [
      {
        label: '二级 1-1',
        id: '二级 1-1',
        children: [
          {
            label: '三级 1-1-1',
            id: '三级 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 2',
    id: '一级 2',
    children: [
      {
        label: '二级 2-1',
        id: '二级 2-1',
        children: [
          {
            label: '三级 2-1-1',
            id: '三级 2-1-1'
          }
        ]
      },
      {
        label: '二级 2-2',
        id: '二级 2-2',
        children: [
          {
            label: '三级 2-2-1',
            id: '三级 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 3',
    id: '一级 3',
    children: [
      {
        label: '二级 3-1',
        id: '二级 3-1',
        children: [
          {
            label: '三级 3-1-1',
            id: '三级 3-1-1'
          }
        ]
      },
      {
        label: '二级 3-2',
        id: '二级 3-2',
        children: [
          {
            label: '三级 3-2-1',
            id: '三级 3-2-1'
          }
        ]
      }
    ]
  }
])
</script>
```
:::

## Tree API

### Tree 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | 展示数据 |  | — | — |  |
| draggable | 是否开启拖拽节点功能 | `boolean` | — | false |  |
| lineable | 连接线 | `boolean` | — | false |  |
| accordion | 是否每次只打开一个同级树节点展开 | `boolean` | — | false |  |
| icon | 图标组件 | `string` | — | — | 未实现 |
| props | 配置选项，具体看下表 | object | — | — | 实现中 |

### props

| 属性名    | 说明                                                    | 类型                           | 可选值 | 默认值 | 备注   |
| --------- | ------------------------------------------------------- | ------------------------------ | ------ | ---    | ------ |
| label     | 指定节点标签为节点对象的某个属性值                       | `string, function(data, node)` | —      | —      |        |
| children  | 指定子树为节点对象的某个属性值                           | `string`                       | —      | —      |        |
| disabled  | 指定节点选择框是否禁用为节点对象的某个属性值             | `boolean, function(data, node)` | —     | —      |        |
| isLeaf    | 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效 | `boolean, function(data, node)` | —      | —      |        |
| expanded  | 控制节点是否为展开                                        | boolean                         | —      | false  |        |
| checked   | 控制节点是否为选中                                        | boolean                         | —      | false  |        |
| inChecked | 控制节点否是为半选                                        | boolean                         | —      | false  |        |
| id        | key值                                                     | string                         | —      | —      |        |


### Tree 事件

| 事件名称 | 说明 | 类型 | 回调参数 | 备注 |
| --- | --- | --- | --- | --- |
| toggleNode | <!--accordion 默认 false --> | (e: Event, node: IInnerTreeNode, accordion?: boolean) => void |  |  |
| lazy-load |  | (node: IInnerTreeNode) => void |  |  |
| check |  |  |  | 实现中 |

### Tree 插槽

| 插槽名 | 说明 |
| --- | --- |
| icon | 自定义图标组件，参数为`{nodeData:IInnerTreeNode, toggleNode:Function}` |
| content | 自定义节点内容 参数为`treeNode:IInnerTreeNode` |  |
| loading |  |
