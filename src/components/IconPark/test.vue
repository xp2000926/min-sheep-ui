<template>
  <div class="iconpark-test">
    <h1>IconPark 组件测试</h1>

    <div class="test-grid">
      <div class="test-item">
        <h3>基础图标</h3>
        <IconPark name="home" />
        <IconPark name="user" />
        <IconPark name="settings" />
      </div>

      <div class="test-item">
        <h3>不同主题</h3>
        <IconPark name="heart" theme="outline" />
        <IconPark name="heart" theme="filled" />
        <IconPark name="heart" theme="two-tone" />
      </div>

      <div class="test-item">
        <h3>不同尺寸</h3>
        <IconPark name="star" size="16" />
        <IconPark name="star" size="24" />
        <IconPark name="star" size="32" />
      </div>

      <div class="test-item">
        <h3>颜色类型</h3>
        <IconPark name="check" type="primary" />
        <IconPark name="check" type="success" />
        <IconPark name="check" type="warning" />
      </div>

      <div class="test-item">
        <h3>动画效果</h3>
        <IconPark name="loading" spin />
        <IconPark name="refresh" :rotation="45" />
        <IconPark name="arrow-right" flip="horizontal" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPark from './index';
</script>

<style scoped>
.iconpark-test {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.test-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.test-item {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

.test-item h3 {
  margin: 0 0 15px 0;
  color: #333;
  font-size: 16px;
}

.test-item > * {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
