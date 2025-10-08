<template>
  <div class="custom-svg-example">
    <h2>自定义 SVG 图标使用示例</h2>

    <div class="example-section">
      <h3>你的自定义 users 图标</h3>
      <div class="icon-demo">
        <div class="icon-item">
          <IconPark name="users" size="24" />
          <span>默认大小</span>
        </div>
        <div class="icon-item">
          <IconPark name="users" size="32" color="#409eff" />
          <span>蓝色 32px</span>
        </div>
        <div class="icon-item">
          <IconPark name="users" size="48" color="#67c23a" />
          <span>绿色 48px</span>
        </div>
        <div class="icon-item">
          <IconPark name="users" size="64" color="#e6a23c" />
          <span>橙色 64px</span>
        </div>
      </div>
    </div>

    <div class="example-section">
      <h3>与其他 IconPark 图标对比</h3>
      <div class="icon-demo">
        <div class="icon-item">
          <IconPark name="users" size="32" color="#409eff" />
          <span>自定义 users</span>
        </div>
        <div class="icon-item">
          <IconPark name="user" size="32" color="#409eff" />
          <span>IconPark user</span>
        </div>
        <div class="icon-item">
          <IconPark name="family" size="32" color="#409eff" />
          <span>IconPark family</span>
        </div>
      </div>
    </div>

    <div class="example-section">
      <h3>使用说明</h3>
      <div class="usage-info">
        <p>你的自定义 SVG 图标已经集成到 IconPark 组件中，可以通过以下方式使用：</p>
        <pre><code>&lt;IconPark name="users" size="32" color="#409eff" /&gt;</code></pre>
        <p>要添加更多自定义 SVG 图标，请在 <code>iconpark.tsx</code> 文件中的 <code>customSvgMap</code> 对象中添加新的图标。</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPark from './index';
</script>

<style scoped>
.custom-svg-example {
  padding: 20px;
  max-width: 800px;
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

.icon-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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

.usage-info {
  background: #f5f7fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #409eff;
}

.usage-info p {
  margin: 0 0 15px 0;
  line-height: 1.6;
  color: #333;
}

.usage-info pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 15px 0;
}

.usage-info code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
}
</style>
