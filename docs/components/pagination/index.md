# 分页 Pagination

## 基础

通过设置`total`属性设置分页总条目数即可

:::demo

```vue
<template>
  <s-pagination :total="50" />

  <h6>total=1时应该只显示首页</h6>
  <s-pagination :total="1" />
  <h6>total=11时应该显示首页和尾页</h6>
  <s-pagination :total="11" />
  <h6>total=80 && pageIndex=4，应该显示右更多按钮</h6>
  <h6>total=80 && pageIndex=5，应该显示左更多按钮</h6>
  <s-pagination :total="80" />
  <h6>total=90 && pageIndex=5，应该显示左、右更多按钮</h6>
  <h6>total=90 && pageIndex=4，应该只显示右更多按钮</h6>
  <s-pagination :total="90" />
</template>
```

:::

## 分页器 pager

通过`s-pager`直接使用分页器组件

:::demo

```vue
<template>
  When you have few pages
  <s-pager :total="50" />

  When you have more than 7 pages
  <s-pager :total="1000" />
</template>
```

:::

## 使用案例

:::demo

```vue
<template>
  <div class="essays-container">
    <a
      v-for="article of articles"
      :href="`http://juejin.cn/post/${article.article_id}`"
      target="_blank"
    >
      <div class="essay-list">
        <div class="first-line">
          <span class="title">{{ article.title }}</span>
        </div>
        <div class="infos">
          <span> {{ article.ctime }} </span>
          <span class="split-line"></span>
          <span>{{ article.view_count }}阅读</span>
          <span class="dot">·</span>
          <span>{{ article.digg_count }}点赞</span>
          <span class="dot">·</span>
          <span>{{ article.comment_count }}评论</span>
          <span class="dot">·</span>
          <span>{{ article.collect_count }}收藏</span>
        </div>
      </div>
    </a>
  </div>
  <!-- 使用我们的 Pagination 对文章进行分页-->
  <s-pagination
    :total="sourceArticles.length"
    :pageSize="pageSize"
    v-model="pageIndex"
  />
</template>
<script setup>
import { ref, computed } from 'vue'
// 文章数据来自掘金后台接口
const sourceArticles = ref([
  {
    article_id: '7037336504418435103',
    title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
    collect_count: 151, // 收藏
    comment_count: 46, // 评论数
    ctime: '1638507790', // 创建时间
    digg_count: 161, // 点赞数
    view_count: 8561 // 阅读数
  },
  {
    article_id: '7037336504418435103',
    title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
    collect_count: 151, // 收藏
    comment_count: 46, // 评论数
    ctime: '1638507790', // 创建时间
    digg_count: 161, // 点赞数
    view_count: 8561 // 阅读数
  },
  {
    article_id: '7037336504418435103',
    title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
    collect_count: 151, // 收藏
    comment_count: 46, // 评论数
    ctime: '1638507790', // 创建时间
    digg_count: 161, // 点赞数
    view_count: 8561 // 阅读数
  },
  {
    article_id: '7037336504418435103',
    title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
    collect_count: 151, // 收藏
    comment_count: 46, // 评论数
    ctime: '1638507790', // 创建时间
    digg_count: 161, // 点赞数
    view_count: 8561 // 阅读数
  },
  {
    article_id: '7037336504418435103',
    title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
    collect_count: 151, // 收藏
    comment_count: 46, // 评论数
    ctime: '1638507790', // 创建时间
    digg_count: 161, // 点赞数
    view_count: 8561 // 阅读数
  }
])

const pageIndex = ref(1)
const pageSize = ref(2)

const articles = computed(() =>
  sourceArticles.value.slice(
    (pageIndex.value - 1) * pageSize.value,
    pageIndex.value * pageSize.value
  )
)
</script>
```

:::

## Pagination/Pager API

### Pagination / Pager 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- | --- |
| total | 总数据条数 | number | — | 0 |  |
| pageSize | 每页数据条数 | number | — | 10 |  |
| pagerCount | 最大页码按钮数 | number | — | 7 |  |
| v-model | 双向绑定当前页码 | number | — | 1 |  |
| hide-on-single-page | 只有一页时是否隐藏 | boolean | — | — | 实现Pager,Pagination 未实现 |

## usePage 返回值

| 名称         | 类型             | 描述           |
| ------------ | ---------------- | -------------- |
| pageIndex    | number           | 总数据条数     |
| setPageIndex | (number) => void | 跳转到指定页码 |
| jumpPage     | (number) => void | 往后跳转 N 页  |
| prevPage     | () => void       | 跳转上一页     |
| nextPage     | () => void       | 跳转下一页     |
