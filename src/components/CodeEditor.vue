<template>
  <div class="p-4">
    <el-row gutter="30">
      <el-col :span="5">
        <el-select v-model="options.language">
          <!-- <select v-model="options.language">
            <option   v-for="item in languageList"
              :key="item.value"
              :label="item.label"
              :value="item.value" />
            </select> -->
          <el-option
            v-for="item in languageList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        </el-col
      ><el-col :span="5">
        <!-- <select v-model="options.theme">
          <option   v-for="item in themeList"
            :key="item.value"
            :label="item.label"
            :value="item.value" />
          </select> -->
        <el-select v-model="options.theme">
          <el-option
            v-for="item in themeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
    </el-row>
    <MonacoEditor  :theme="options.theme"
      v-model="codeEditorValue"
    :language="options.language" :style="{ height: '32em' }" />
     <!-- <MonacoEditor :theme="options.theme"
    :value="codeEditorValue"
    :language="options.language"  :style="{ height: '32em' }"
  /> -->
    <!-- <s-code-editor
      class="mt-4"
      :theme="options.theme"
      v-model="codeEditorValue"
    :language="options.language"  :style="{ height: '32em' }"
    /> -->
  </div>
</template>

<script setup lang="ts">
// import MonacoEditor from 'monaco-editor-vue3'
// import MonacoEditorTest from './composables/monaco-editor-test.tsx'
import MonacoEditor from './composables/MonacoEditor.tsx'
import { ref, computed } from 'vue';
const options = ref({
  language: 'json',
  theme: 'vs-dark'
});
/*abap
apex
azcli
bat
bicep
cameligo
clojure
coffee
cpp
csharp
csp
css
cypher
dart
dockerfile
ecl
elixir
flow9
fsharp
freemarker2
go
graphql
handlebars
hcl
html
ini
java
javascript
julia
kotlin
less
lexon
lua
liquid
m3
markdown
mdx
mips
msdax
mysql
objective
pascal
pascaligo
perl
pgsql
php
pla
postiats
powerquery
powershell
protobuf
pug
python
qsharp
r
razor
redis
redshift
restructuredtext
ruby
rust
sb
scala
scheme
scss
shell
solidity
sophia
sparql
sql
st
swift
systemverilog
tcl
twig
typescript
typespec
vb
wgsl
xml
yaml*/
const languageList = ref(
  [
    'json', // 不能高亮
    'xml',
    'yaml',
    'html',
    'css',
    'javascript',
    'typescript',
    'jsx',
    'tsx',
    'python',
    'sql',
    'markdown',
    'java',
    'c',
    'less',
    'scss',
    "stylus", // 不能高亮
    "php",
    "go",
    "shell",'vue','nginx',
  ].map(it => ({
    label: it,
    value: it.toLocaleLowerCase()
  }))
);
const themeList = ref(
  [
     'vs' , 'vs-dark' , 'hc-black' , 'hc-light'


      ,'Active4D', 'AllHallowsEve', 'Amy', 'BirdsOfParadise', 'Blackboard',
  'BrillianceBlack', 'BrillianceDull', 'ChromeDevTools', 'CloudsMidnight',
  'Clouds', 'Cobalt', 'Dawn', 'DominionDay', 'Dracula', 'Dreamweaver',
  'Eiffel', 'EspressoLibre', 'GitHub', 'IDLE', 'Katzenmilch',
  'KuroirTheme', 'LAZY', 'MagicWBAmiga', 'MerbivoreSoft', 'Merbivore',
  'MonokaiBright', 'Monokai', 'NightOwl', 'OceanicNext', 'PastelsOnDark',
  'SlushAndPoppies', 'SolarizedDark', 'SolarizedLight', 'SpaceCadet',
  'Sunburst', 'TextmateMacClassic', 'TomorrowNightBlue', 'TomorrowNightBright',
  'TomorrowNightEighties', 'TomorrowNight', 'Tomorrow', 'Twilight',
  'UpstreamSunburst', 'VibrantInk', 'XcodeDefault', 'Zenburnesque',
  'iplastic', 'idleFingers', 'krTheme', 'monoindustrial'
    // 'Amy',
    // 'Ayu Light',
    // 'Barf',
    // 'Bespin',
    // 'Birds of Paradise',
    // 'Boys and Girls',
    // 'Clouds',
    // 'Cobalt',
    // 'Cool Glow',
    // 'Dracula',
    // 'Espresso',
    // 'Noctis Lilac',
    // 'Rose Pine Dawn',
    // 'Smoothy',
    // 'Solarized Light',
    // 'Tomorrow'
  ].map(it => ({
    label: it,
    value: it
  }))
);
const codeEditorValue = computed(() => {
  switch (options.value.language) {
    case 'json':
      return `{
  "name": "@smartcity/simple-ui",
  "author": "22",
  "version": "0.0.0"
}`;
    case 'xml':
      return `<package>
  <name>@smartcity/simple-ui</name>
  <author>22</author>
  <version>0.0.0</version>
</package>
`;
    case 'yaml':
      return `package:
  name: @smartcity/simple-ui
  author: 22
  version: 0.0.0
`;
    case 'html':
      return `<!DOCTYPE html>
<html>
<head>
  <!-- 这是单行注释：设置页面标题 -->
  <title>简单HTML示例</title>
  <!--
    多行注释开始：
    meta标签用于指定字符编码，
    确保确保页面中文正常显示
    多行注释结束
  -->
  <meta charset="UTF-8">
</head>
<body>
  <!-- 页面主标题 -->
  <h1>欢迎使用HTML</h1>
  <!-- 段落文本 -->
  <p>这是一个简单的HTML示例页面</p>
</body>
</html>`;
    case 'css':
      return `body {
  font-size: 18px;
  color: red;
}
/* 基础样式 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.title {
  color: #333;
  font-size: 24px;
  font-weight: bold;
}`;
    case 'less':
      return `// 变量和嵌套
@primary-color: #4285f4;
@spacing: 16px;

.card {
  padding: @spacing;
  border: 1px solid #eee;

  .card-title {
    color: @primary-color;
    margin-bottom: @spacing / 2;
  }
}`;
    case 'scss':
      return `// 定义主题颜色变量
$theme-color: #2c3e50;
$text-color: #333;

/*
  多行注释：
  导航栏基础样式
  包含容器和链接样式
*/
.navbar {
  width: 100%;
  background: $theme-color;
  padding: 1rem;

  // 嵌套导航链接样式
  .nav-link {
    color: white;
    margin-right: 1.5rem;
    text-decoration: none;

    // 悬停状态
    &:hover {
      color: #f1c40f;
    }
  }
}`;
    case 'javascript':
      return `// 声明一个数组存储水果名称
let fruits = ['苹果', '香蕉', '橙子'];

/*
  多行注释：
  使用for循环遍历数组，
  并在控制台打印每个元素
*/
for (let i = 0; i < fruits.length; i++) {
  console.log('水果：' + fruits[i]);
}

// 定义一个计算两数之和的函数
function add(a, b) {
  return a + b;
}`;
    case 'typescript':
      return `type Status = 'active' | 'inactive';
interface Task {
  title: string;
  status: Status;
}
const toggleTask = (task: Task): Task => ({
  ...task,
  status: task.status === 'active' ? 'inactive' : 'active'
});`;
    case 'jsx':
      return `function Greeting({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Today is {new Date().toLocaleDateString()}</p>
    </div>
  );
}`;
    case 'tsx':
      return `interface User { id: number; name: string }
const UserCard = ({ user }: { user: User }) => (
  <div>
    <p>ID: {user.id}</p>
    <p>Name: {user.name}</p>
  </div>
);`;
    case 'python':
      return `# 打印信息并计算
print("Hello, World!")
def sum(a, b):
    return a + b
print(f"2 + 3 = {sum(2, 3)}")`;
    case 'sql':
      return `-- 创建用户表（主键自增，邮箱唯一）
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT PRIMARY KEY,  -- 自增主键
  username VARCHAR(50) NOT NULL,  -- 用户名（非空）
  age INT CHECK (age > 0),  -- 年龄（必须大于0）
  join_date DATE DEFAULT CURRENT_DATE  -- 加入日期（默认当前日期）
);

-- 插入示例数据
INSERT INTO users (username, age)
VALUES ('张三', 25), ('李四', 30);  -- 插入两条记录

-- 查询25岁以上的用户
SELECT username, age FROM users
WHERE age > 25  -- 筛选条件
ORDER BY age DESC;  -- 按年龄降序排列`;
    case 'markdown':
      return `<!-- 1. 一级标题（# 后加空格，用于文档大标题，共1-6级，#越多级别越低） -->
# 我的Markdown笔记
<!-- 2. 三级标题（比一级标题低两级，适合章节内小标题） -->
### 基础语法介绍
<!-- 3. 无序列表（- 后加空格，用于罗列无顺序的内容，也可用*或+） -->
- 无序列表项1
- 无序列表项2
<!-- 4. 粗体文本（** 包裹内容，用于强调重要信息，前后无空格） -->
**这是需要重点关注的粗体内容**
<!-- 5. 斜体文本（* 包裹内容，用于轻微强调，区别于粗体） -->
*这是斜体样式的文本*
<!-- 6. 引用块（> 后加内容，用于引用他人观点或外部内容） -->
> 引用自某文档：Markdown语法简洁易读，适合快速排版
<!-- 7. 分割线（3个及以上-，单独一行，用于分隔不同内容板块） -->
---
<!-- 8. 有序列表（数字+.+空格，用于有先后顺序的内容） -->
1. 第一步操作
2. 第二步操作`;
    case 'java':
      return `// 打印信息
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        int sum = 2 + 3;
        System.out.println("2 + 3 = " + sum);
    }
}`;
//     case 'C#':
//       return `using System;

// class Program {
//     static void Main() {
//         Console.WriteLine("Hello, World!");
//         int sum = 2 + 3;
//         Console.WriteLine($"2 + 3 = {sum}");
//     }
// }`;
    case 'c':
      return `#include <stdio.h>
int main() {
    int a = 10, b = 20;
    printf("Sum: %d\n", a + b);
    return 0;
}`;
    case 'stylus':
      return `// 定义基础变量
base-color = #42b983
padding-unit = 8px

/*
  多行注释：
  卡片组件样式
  包含内边距和边框设置
*/
.card
  padding: padding-unit * 2
  border: 1px solid #eee
  border-radius: 4px

// 卡片标题样式
.card-title
  color: base-color
  font-size: 18px
  margin-bottom: padding-unit`
    case 'php':
      return `<?php
// 声明并初始化变量
$username = "访客";

/*
  多行注释：
  定义一个函数，
  用于生成欢迎信息
*/
function getGreeting($name) {
    return "欢迎您，" . $name . "！";
}

// 调用函数并输出结果
echo getGreeting($username);
?>`;
    case 'go':
      return `package main

import "fmt"

// 主函数，程序入口
func main() {
    // 定义变量并赋值
    message := "Hello, Go!"
    // 打印输出
    fmt.Println(message)

    // 简单计算
    sum := 5 + 3
    fmt.Printf("5 + 3 = %d\n", sum)
}`;
    case 'shell':
      return `#!/bin/bash
# 输出欢迎信息
echo "Hello, Shell Scripting!"

# 定义变量并使用
name="User"
echo "Welcome, $name"

# 简单条件判断
if [ 5 -gt 3 ]; then
  echo "5 is greater than 3"
fi`;
    case 'nginx':
      return `# 基本配置
worker_processes auto;  # 自动根据CPU核心数设置工作进程
error_log /var/log/nginx/error.log;  # 错误日志路径
pid /run/nginx.pid;  # PID文件路径

# 事件配置
events {
    worker_connections 1024;  # 每个工作进程的最大连接数
}

# HTTP服务器配置
http {
    include /etc/nginx/mime.types;  # 包含MIME类型定义
    default_type application/octet-stream;  # 默认MIME类型

    # 日志格式
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;  # 访问日志

    sendfile on;  # 启用sendfile系统调用
    tcp_nopush on;  # 启用TCP_NOPUSH选项
    tcp_nodelay on;  # 启用TCP_NODELAY选项
    keepalive_timeout 65;  # 长连接超时时间
    types_hash_max_size 2048;  # 类型哈希表的最大大小

    # 服务器配置 - 静态网站
    server {
        listen 80;  # 监听80端口
        server_name example.com www.example.com;  # 域名

        root /var/www/example.com;  # 网站根目录
        index index.html index.htm;  # 默认索引文件

        # 访问日志
        access_log /var/log/nginx/example.com.access.log main;
        error_log /var/log/nginx/example.com.error.log;

        # 静态文件缓存设置
        location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
            expires 30d;  # 缓存30天
            add_header Cache-Control "public, max-age=2592000";
        }
    }

    # 服务器配置 - 反向代理
    server {
        listen 80;
        server_name api.example.com;  # API域名

        # 将请求代理到后端服务
        location / {
            proxy_pass http://localhost:3000;  # 后端服务地址
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}`;
    case 'vue':
      return `<template>
  <div class="counter-app">
    <h1>Vue 计数器</h1>
    <p class="count-display">当前计数: {{ count }}</p>

    <div class="button-group">
      <button @click="decrement" :disabled="count <= 0">
        <i class="fas fa-minus"></i> 减少
      </button>
      <button @click="reset">
        <i class="fas fa-redo"></i> 重置
      </button>
      <button @click="increment">
        增加 <i class="fas fa-plus"></i>
      </button>
    </div>

    <p class="message" v-if="count > 10">
      计数已经超过10了！
    </p>
  </div>
</template>

\<script\>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      if (this.count > 0) {
        this.count -= 1;
      }
    },
    reset() {
      this.count = 0;
    }
  }
}
\<\/script\>

<style>
.counter-app {
  text-align: center;
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.count-display {
  font-size: 1.5rem;
  margin: 2rem 0;
  color: #333;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

button:enabled:hover {
  transform: translateY(-2px);
}

button:nth-child(1) {
  background-color: #ff4444;
  color: white;
}

button:nth-child(2) {
  background-color: #33b5e5;
  color: white;
}

button:nth-child(3) {
  background-color: #00C851;
  color: white;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.message {
  color: #ff9800;
  font-weight: bold;
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>`;
    case '':
      return ``;
    case '':
      return ``;
    default:
      return ``;
  }
});
</script>

<style lang="" scoped></style>
