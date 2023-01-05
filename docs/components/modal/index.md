# Modal 对话框

## 基础功能
:::demo 
```vue
<template>
  <s-button @click="open">打开</s-button>

  <s-modal v-model="visible" title="小贴士" center align-center>
    <span>这是一条消息！</span>
    <template #footer>
      <div class="dialog-footer">
        <s-button style="margin-right: 12px;" @click="visible = false">取消</s-button>
        <s-button type="primary" @click="visible = false">确定</s-button>
      </div>
    </template>
  </s-modal>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)

    const open = () => {
      visible.value = true;
    }

    return {
      visible,
      open,
    }
  }
})
</script>

<style>
.dialog-footer {
  padding: 20px;
  text-align: right;
}
</style>
```
:::

## 自定义内容
通过插槽可以自定义Modal内容。我们有title、default和footer三个插槽可以使用。
:::demo 
```vue
<template>
  <s-button @click="open">打开</s-button>

  <s-modal v-model="visible" title="Shipping address" width="50%">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2016-05-02</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
        <tr>
          <td>2016-05-04</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
        <tr>
          <td>2016-05-01</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
        <tr>
          <td>2016-05-03</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
      </tbody>
    </table>
  </s-modal>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)

    const open = () => {
      visible.value = true;
    }

    return {
      visible,
      open,
    }
  }
})
</script>
```
:::

## 自定义头部
可以通过header插槽定义头部内容。
:::demo 通过header插槽定义头部，上下文中有close方法用于关闭Modal
```vue
<template>
  <s-button @click="open">打开</s-button>

  <s-modal v-model="visible" :show-close="false">
    <template #header="{ close }">
      <div class="my-header">
        <h4>This is a custom header!</h4>
        <s-button type="text" @click="close">
          Close
        </s-button>
      </div>
    </template>
    This is dialog content.
  </s-modal>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)
    const open = () => {
      visible.value = true;
    }

    return {
      visible,
      open,
    }
  }
})
</script>

<style>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-right: 16px;
  word-break: break-all;
}
</style>
```
:::

## Modal API
### Modal 属性

| 属性名      | 说明                                            | 类型      | 可选值 | 默认值 | 备注   |
| ----------- | ----------------------------------------------- | --------- | ------ | ------ | ------ |
| title       | Dialog 的标题，也可通过具名 slot （见下表）传入 | `string`  | —      | —      |        |
| width       | Dialog 的宽度                                   | `string`  | —      | 30%    |        |
| center      | 是否对头部采用居中布局                          | `boolean` | —      | false  |        |
| show-close  | 是否显示关闭按钮                                | `boolean` | —      | false  |        |
| alignCenter | 对话框居中                                      | `boolean` | —      | false  |        |
| v-model     |                                                 | `boolean` | 1      | false  |        |
| top         | Dialog CSS 中的 margin-top 值                   | `string`  | —      |        | 未实现 |

### Modal 插槽

| 插槽名 | 说明                    |
| ------ | ----------------------- |
| —      | Dialog 的内容           |
| header | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

### Modal 事件

| 事件名称 | 说明              | 回调参数 |
| -------- | ----------------- | -------- |
| close    | Dialog 关闭的回调 | —        |