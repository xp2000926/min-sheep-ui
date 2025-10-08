# Flex 弹性布局

:::demo

```vue
<template>
  <s-flex>
    <s-button class="flex-item">Oops!</s-button>
    <s-button class="flex-item">Oops!</s-button>
    <s-button class="flex-item">Oops!</s-button>
    <s-button class="flex-item">Long! Long! Cross the line!</s-button>
  </s-flex>
</template>
<style lang="scss">
.flex-item {
  border: 1px solid #ddd;
  padding: 0 12px;
}
</style>
```

:::

## 垂直

:::demo

```vue
<template>
  <s-flex vertical>
    <s-button class="flex-item">Oops!</s-button>
    <s-button class="flex-item">Oops!</s-button>
    <s-button class="flex-item">Oops!</s-button>
    <s-button class="flex-item">Long! Long! Cross the line!</s-button>
  </s-flex>
</template>
```

:::

## 从尾部

:::demo

```vue
<template>
  <s-flex justify="end">
    <s-button>Oops!</s-button>
    <s-button>Oops!</s-button>
    <s-button>Oops!</s-button>
  </s-flex>
</template>
```

:::

## 间隙

:::demo

```vue
<template>
  <s-flex justify="space-between">
    <s-button>Oops!</s-button>
    <s-button>Oops!</s-button>
    <s-button>Oops!</s-button>
  </s-flex>
</template>
```

:::

## 间隙

:::demo

```vue
<template>
  <s-flex justify="space-around">
    <s-button>Oops!</s-button>
    <s-button>Oops!</s-button>
    <s-button>Oops!</s-button>
  </s-flex>
</template>
```

:::

## 从中间

:::demo

```vue
<template>
  <s-flex justify="center">
    <s-button>Oops!</s-button>
    <s-button>Oops!</s-button>
    <s-button>Oops!</s-button>
  </s-flex>
</template>
```

:::