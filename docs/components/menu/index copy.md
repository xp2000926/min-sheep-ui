# Menu 菜单

> 用于展示导航菜单，支持横向和纵向两种模式。

## 基础用法

基础的菜单用法，可以通过 `mode` 属性设置菜单的展示模式。

:::demo

```vue
<template>
  <div class="menu-container">
    <div class="menu-item">
      <h3>水平菜单</h3>
      <s-menu mode="horizontal">
        <s-menu-item index="1" title="首页">首页</s-menu-item>
        <s-sub-menu index="2" title="产品中心">
          <s-menu-item index="2-1" title="产品1">产品1</s-menu-item>
          <s-menu-item index="2-2" title="产品2">产品2</s-menu-item>
          <s-sub-menu index="2-3" title="产品3">
            <s-menu-item index="2-3-1" title="子产品1">子产品1</s-menu-item>
            <s-menu-item index="2-3-2" title="子产品2">子产品2</s-menu-item>
          </s-sub-menu>
        </s-sub-menu>
        <s-menu-item index="3" title="关于我们">关于我们</s-menu-item>
        <s-menu-item index="4" disabled title="联系我们">联系我们</s-menu-item>
      </s-menu>
    </div>
    
    <div class="menu-item">
      <h3>垂直菜单</h3>
      <s-menu mode="vertical">
        <s-menu-item index="1" title="首页">首页</s-menu-item>
        <s-sub-menu index="2" title="产品中心">
          <s-menu-item index="2-1" title="产品1">产品1</s-menu-item>
          <s-menu-item index="2-2" title="产品2">产品2</s-menu-item>
        </s-sub-menu>
        <s-menu-item index="3" title="关于我们">关于我们</s-menu-item>
      </s-menu>
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.menu-item {
  flex: 1;
}

.menu-item h3 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
}
</style>
```

:::

## 带图标的菜单

通过 `icon` 属性为菜单添加图标。

:::demo

```vue
<template>
  <s-menu mode="vertical">
    <s-menu-item index="1" icon="home" title="首页">首页</s-menu-item>
    <s-sub-menu index="2" icon="app" title="产品中心">
      <s-menu-item index="2-1" icon="box" title="产品1">产品1</s-menu-item>
      <s-menu-item index="2-2" icon="box" title="产品2">产品2</s-menu-item>
    </s-sub-menu>
    <s-menu-item index="3" icon="user" title="关于我们">关于我们</s-menu-item>
    <s-menu-item index="4" icon="phone" disabled title="联系我们">联系我们</s-menu-item>
  </s-menu>
</template>
```

:::

## 菜单分组

使用 `<s-menu-item-group>` 标签对菜单项进行分组。

:::demo

```vue
<template>
  <s-menu mode="vertical">
    <s-menu-item-group title="主导航">
      <s-menu-item index="1" icon="home" title="首页">首页</s-menu-item>
      <s-sub-menu index="2" icon="app" title="产品中心">
        <s-menu-item index="2-1" icon="box" title="产品1">产品1</s-menu-item>
        <s-menu-item index="2-2" icon="box" title="产品2">产品2</s-menu-item>
      </s-sub-menu>
    </s-menu-item-group>
    
    <s-menu-item-group title="辅助导航">
      <s-menu-item index="3" icon="user" title="关于我们">关于我们</s-menu-item>
      <s-menu-item index="4" icon="phone" title="联系我们">联系我们</s-menu-item>
    </s-menu-item-group>
  </s-menu>
</template>
```

:::

## 通过 option 数组生成菜单

通过 `option` 属性传入菜单配置数组，快速生成菜单。

:::demo

```vue
<template>
  <s-menu :option="menuOption" mode="vertical" />
</template>

<script setup>
import { ref } from 'vue';

const menuOption = ref([
  {
    key: '1',
    label: '首页',
    icon: 'home'
  },
  {
    key: '2',
    label: '产品中心',
    icon: 'app',
    children: [
      {
        key: '2-1',
        label: '产品1',
        icon: 'box'
      },
      {
        key: '2-2',
        label: '产品2',
        icon: 'box'
      },
      {
        key: '2-3',
        label: '产品3',
        icon: 'box',
        children: [
          {
            key: '2-3-1',
            label: '子产品1'
          },
          {
            key: '2-3-2',
            label: '子产品2'
          }
        ]
      }
    ]
  },
  {
    key: '3',
    label: '关于我们',
    icon: 'user'
  },
  {
    key: '4',
    label: '联系我们',
    icon: 'phone',
    disabled: true
  }
]);
</script>
```

:::

## 自定义菜单内容

使用插槽自定义菜单内容。

:::demo

```vue
<template>
  <s-menu mode="vertical">
    <s-menu-item index="1">
      <s-icon name="home" size="16" />
      <span>首页</span>
    </s-menu-item>
    <s-sub-menu index="2">
      <template #title>
        <s-icon name="app" size="16" />
        <span>产品中心</span>
      </template>
      <s-menu-item index="2-1">产品1</s-menu-item>
      <s-menu-item index="2-2">产品2</s-menu-item>
    </s-sub-menu>
    <s-menu-item index="3">
      <s-icon name="user" size="16" />
      <span>关于我们</span>
    </s-menu-item>
  </s-menu>
</template>
```

:::

## 事件处理

菜单支持多种事件，如选中菜单项、打开/关闭子菜单等。

:::

```vue
<template>
  <div class="menu-container">
    <s-menu 
      mode="vertical" 
      @select="handleSelect" 
      @open="handleOpen" 
      @close="handleClose"
    >
      <s-menu-item index="1" title="首页">首页</s-menu-item>
      <s-sub-menu index="2" title="产品中心">
        <s-menu-item index="2-1" title="产品1">产品1</s-menu-item>
        <s-menu-item index="2-2" title="产品2">产品2</s-menu-item>
      </s-sub-menu>
    </s-menu>
    <div class="log">
      <h3>事件日志</h3>
      <div v-for="(item, index) in logs" :key="index" class="log-item">{{ item }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const logs = ref<string[]>([]);

const handleSelect = (index: string) => {
  logs.value.push(`选中菜单项: ${index}`);
};

const handleOpen = (index: string) => {
  logs.value.push(`打开子菜单: ${index}`);
};

const handleClose = (index: string) => {
  logs.value.push(`关闭子菜单: ${index}`);
};
</script>

<style scoped>
.menu-container {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.log {
  flex: 1;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
}

.log h3 {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
}

.log-item {
  padding: 5px 0;
  font-size: 12px;
  color: #606266;
}
</style>
```

:::

## API

### Menu 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 菜单模式 | `'horizontal' \| 'vertical' \| 'pop'` | `'vertical'` |
| option | 菜单配置数组 | `MenuOption[]` | `[]` |
| router | 是否开启路由模式 | `boolean` | `false` |

### Menu 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 选中菜单项时触发 | `index: string` |
| open | 打开子菜单时触发 | `index: string` |
| close | 关闭子菜单时触发 | `index: string` |

### MenuItem 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| path | 唯一标志 | `string` | `''` |
| icon | 菜单图标 | `string` | `''` |
| title | 菜单标题 | `string` | `''` |
| popperClass | 为 popper 添加类名 | `string` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| route | Vue Route 路由位置参数 | `object \| string` | `{}` |

### MenuItem 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击菜单项时触发 | `path: string` |

### SubMenu 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| index | 唯一标志 | `string` | 必填 |
| title | 子菜单标题 | `string` | `''` |
| icon | 子菜单图标 | `string` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| popperClass | 弹出菜单的自定义类名 | `string` | `''` |

### SubMenu 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| open | 打开子菜单时触发 | `index: string` |
| close | 关闭子菜单时触发 | `index: string` |

### MenuItemGroup 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 菜单分组标题 | `string` | `''` |
| disabled | 是否禁用该组内所有菜单项 | `boolean` | `false` |

### MenuOption 接口

| 属性名 | 说明 | 类型 |
| --- | --- | --- |
| key | 唯一标志 | `string` |
| label | 菜单文本 | `string \| (() => HTMLElement)` |
| icon | 菜单图标 | `string` |
| disabled | 是否禁用 | `boolean` |
| show | 是否显示 | `boolean` |
| children | 子菜单选项 | `MenuOption[]` |
| [key: string] | 其他自定义属性 | `any` |