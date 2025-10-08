# Container 布局容器

:::demo

```vue
<template>
 <div class="common-layout">
    <s-container>
      <s-header>Header</s-header>
      <s-main>Main</s-main>
    </s-container>
    </div>
</template>
<style lang="scss" scoped>
.s-header,
.s-footer{
    background-color: rgb(198, 226, 255);
    color: #303133;
    text-align: center;
}
.s-main{
  background-color: rgb(236, 245, 255);
  color: #303133;
    text-align: center;
    height: 150px;
}
.s-aside {
  background-color:  rgb(217, 236, 255);
    color: #303133; text-align: center;
}
.common-layout {
  .s-header, 
  .s-footer, 
  .s-main,
  .s-aside{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  }
</style>
```

:::
:::demo

```vue
<template>
  <div class="common-layout">
  <s-container>
      <s-header>Header</s-header>
      <s-main>Main</s-main>
      <s-footer>Footer</s-footer>
    </s-container>
    </div>
</template>
<style lang="scss" scoped>
.s-header,
.s-footer{
    background-color: rgb(198, 226, 255);
    color: #303133;
    text-align: center;
}
.s-main{
  background-color: rgb(236, 245, 255);
  color: #303133;
    text-align: center;
    height: 150px;
}
.s-aside {
  background-color:  rgb(217, 236, 255);
    color: #303133; text-align: center;
}
.common-layout {
  .s-header, 
  .s-footer, 
  .s-main,
  .s-aside{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  }
</style>
```

:::
:::demo

```vue
<template>
  <div class="common-layout">
  <s-container>
      <s-aside width="200px">Aside</s-aside>
      <s-main>Main</s-main>
      <s-aside width="200px">Aside</s-aside>
    </s-container>
  </div>
</template>
<style lang="scss" scoped>
.s-header,
.s-footer{
    background-color: rgb(198, 226, 255);
    color: #303133;
    text-align: center;
}
.s-main{
  background-color: rgb(236, 245, 255);
  color: #303133;
    text-align: center;
    height: 150px;
}
.s-aside {
  background-color:  rgb(217, 236, 255);
  color: #303133;
    text-align: center;
}
.common-layout {
  .s-header, 
  .s-footer, 
  .s-main,
  .s-aside{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  }
</style>
```

:::
:::demo

```vue
<template>
 <div class="common-layout">
    <s-container>
      <s-header>Header</s-header>
      <s-container>
        <s-aside width="200px">Aside</s-aside>
        <s-main>Main</s-main>
      </s-container>
    </s-container>
  </div>
</template>
<style lang="scss" scoped>
.s-header,
.s-footer{
    background-color: rgb(198, 226, 255);
    color: #303133;
    text-align: center;
}
.s-main{
  background-color: rgb(236, 245, 255);
  color: #303133;
    text-align: center;
    height: 150px;
}
.s-aside {
  background-color:  rgb(217, 236, 255);
    color: #303133; text-align: center;
}
.common-layout {
  .s-header, 
  .s-footer, 
  .s-main,
  .s-aside{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  }
</style>
```

:::
:::demo

```vue
<template>
 <div class="common-layout">
    <s-container>
      <s-header>Header</s-header>
      <s-container>
        <s-aside width="200px">Aside</s-aside>
        <s-container>
          <s-main>Main</s-main>
          <s-footer>Footer</s-footer>
        </s-container>
      </s-container>
    </s-container>
  </div>
</template>
<style lang="scss" scoped>
.s-header,
.s-footer{
    background-color: rgb(198, 226, 255);
    color: #303133;
    text-align: center;
}
.s-main{
  background-color: rgb(236, 245, 255);
  color: #303133;
    text-align: center;
    height: 150px;
}
.s-aside {
  background-color:  rgb(217, 236, 255);
    color: #303133; text-align: center;
}
.common-layout {
  .s-header, 
  .s-footer, 
  .s-main,
  .s-aside{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  }
</style>
```

:::
:::demo

```vue
<template>
  <div class="common-layout">
    <s-container>
      <s-aside width="200px">Aside</s-aside>
      <s-container>
        <s-header>Header</s-header>
        <s-main>Main</s-main>
      </s-container>
    </s-container>
  </div>
</template>
<style lang="scss" scoped>
.s-header,
.s-footer{
    background-color: rgb(198, 226, 255);
    color: #303133;
    text-align: center;
}
.s-main{
  background-color: rgb(236, 245, 255);
  color: #303133;
    text-align: center;
    height: 150px;
}
.s-aside {
  background-color:  rgb(217, 236, 255);
    color: #303133; text-align: center;
}
.common-layout {
  .s-header, 
  .s-footer, 
  .s-main,
  .s-aside{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  }
</style>
```

:::
:::demo

```vue
<template>
  <div class="common-layout">
    <s-container>
      <s-aside width="200px">Aside</s-aside>
      <s-container>
        <s-header>Header</s-header>
        <s-main>Main</s-main>
        <s-footer>Footer</s-footer>
      </s-container>
    </s-container>
  </div>
</template>
<style lang="scss" scoped>
.s-header,
.s-footer{
    background-color: rgb(198, 226, 255);
    color: #303133;
    text-align: center;
}
.s-main{
  background-color: rgb(236, 245, 255);
  color: #303133;
  text-align: center;
  height: 150px;
}
.s-aside {
  background-color: rgb(217, 236, 255);
  color: #303133; 
  text-align: center;
}
.common-layout {
  .s-header, 
  .s-footer, 
  .s-main,
  .s-aside{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
```

:::
