<template>
  <div class="iconpark-example">
    <h2>IconPark 图标组件使用示例</h2>

    <!-- 基础用法 -->
    <section class="example-section">
      <h3>基础用法</h3>
      <div class="icon-grid">
        <div class="icon-item">
          <IconPark name="home" />
          <span>home</span>
        </div>
        <div class="icon-item">
          <IconPark name="user" />
          <span>user</span>
        </div>
        <div class="icon-item">
          <IconPark name="family" />
          <span>family</span>
        </div>
        <div class="icon-item">
          <IconPark name="setting" />
          <span>setting</span>
        </div>
        <div class="icon-item">
          <IconPark name="search" />
          <span>search</span>
        </div>
      </div>
    </section>

    <!-- 不同主题 -->
    <section class="example-section">
      <h3>不同主题</h3>
      <div class="icon-grid">
        <div class="icon-item">
          <IconPark name="bill" theme="outline" />
          <span>outline</span>
        </div>
        <div class="icon-item">
          <IconPark name="bill" theme="filled" />
          <span>filled</span>
        </div>
        <div class="icon-item">
          <IconPark name="bill" theme="two-tone" :fill="['#333' ,'#2F88FF']"/>
          <span>two-tone</span>
        </div>
        <div class="icon-item">
          <IconPark name="bill" theme="multi-color"  :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']"/>
          <span>multi-color</span>
        </div>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section class="example-section">
      <h3>不同尺寸</h3>
      <div class="icon-grid">
        <div class="icon-item">
          <IconPark name="star" :size="16" />
          <span>16px</span>
        </div>
        <div class="icon-item">
          <IconPark name="star" :size="24" />
          <span>24px</span>
        </div>
        <div class="icon-item">
          <IconPark name="star" :size="32" />
          <span>32px</span>
        </div>
        <div class="icon-item">
          <IconPark name="star" :size="48" />
          <span>48px</span>
        </div>
      </div>
    </section>

    <!-- 不同颜色类型 -->
    <section class="example-section">
      <h3>不同颜色类型</h3>
      <div class="icon-grid">
        <div class="icon-item">
          <IconPark name="check" type="primary" />
          <span>primary</span>
        </div>
        <div class="icon-item">
          <IconPark name="check" type="success" />
          <span>success</span>
        </div>
        <div class="icon-item">
          <IconPark name="check" type="warning" />
          <span>warning</span>
        </div>
        <div class="icon-item">
          <IconPark name="check" type="danger" />
          <span>danger</span>
        </div>
        <div class="icon-item">
          <IconPark name="check" type="info" />
          <span>info</span>
        </div>
      </div>
    </section>

    <!-- 自定义颜色 -->
    <section class="example-section">
      <h3>自定义颜色</h3>
      <div class="icon-grid">
        <div class="icon-item">
          <IconPark name="like" color="#ff6b6b" />
          <span>红色</span>
        </div>
        <div class="icon-item">
          <IconPark name="like" color="#4ecdc4" />
          <span>青色</span>
        </div>
        <div class="icon-item">
          <IconPark name="like" color="#45b7d1" />
          <span>蓝色</span>
        </div>
        <div class="icon-item">
          <IconPark name="like" color="#96ceb4" />
          <span>绿色</span>
        </div>
      </div>
    </section>

    <!-- 动画效果 -->
    <section class="example-section">
      <h3>动画效果</h3>
      <div class="icon-grid">
        <div class="icon-item">
          <IconPark name="loading" spin />
          <span>旋转动画</span>
        </div>
        <div class="icon-item">
          <IconPark name="refresh" :rotation="45" />
          <span>旋转45度</span>
        </div>
        <div class="icon-item">
          <IconPark name="arrow-right" flip="horizontal" />
          <span>水平翻转</span>
        </div>
        <div class="icon-item">
          <IconPark name="arrow-up" flip="vertical" />
          <span>垂直翻转</span>
        </div>
      </div>
    </section>

    <!-- 自定义 SVG 图标 -->
    <section class="example-section">
      <h3>自定义 SVG 图标</h3>
      <div class="icon-grid">
        <div class="icon-item">
          <IconPark name="users" size="32" color="#409eff" />
          <span>自定义用户图标</span>
        </div>
        <div class="icon-item">
          <IconPark name="users" size="24" color="#67c23a" />
          <span>绿色用户图标</span>
        </div>
        <div class="icon-item">
          <IconPark name="users" size="48" color="#e6a23c" />
          <span>橙色用户图标</span>
        </div>
      </div>
    </section>

    <!-- 高级用法 -->
    <section class="example-section">
      <h3>高级用法</h3>
      <div class="icon-grid">
        <div class="icon-item">
          <IconPark
            name="heart"
            theme="two-tone"
            :fill="['#ff6b6b', '#ffd93d']"
            size="32"
          />
          <span>双色填充</span>
        </div>
        <div class="icon-item">
          <IconPark
            name="star"
            theme="outline"
            stroke="#ff6b6b"
            :strokeWidth="5"
            size="32"
          />
          <span>自定义描边</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import IconPark from './index';
</script>

<style scoped>
.iconpark-example {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.example-section {
  margin-bottom: 40px;
}

.example-section h3 {
  margin-bottom: 20px;
  color: #333;
  font-size: 18px;
  font-weight: 600;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
  transition: all 0.3s ease;
}

.icon-item:hover {
  border-color: #409eff;
  box-shadow: 0 2px 8px rgba(64, 158, 255, 0.1);
}

.icon-item span {
  margin-top: 10px;
  font-size: 12px;
  color: #666;
  text-align: center;
}
</style>
