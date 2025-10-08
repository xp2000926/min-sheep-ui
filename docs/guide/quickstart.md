# 快速上手

本节将介绍如何在项目中使用 min-sheep-ui

## 引入

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
import { createApp } from 'vue'
import MinSheepUI from 'min-sheep-ui'
import 'min-sheep-ui/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(MinSheepUI)
app.mount('#app')
``` 