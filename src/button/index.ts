import { App } from 'vue'
import Button from './src/button'
import { installComponent } from '../install'
import type { SheepUIOptions } from '../_utils/global-config'
// 具名导出
export { Button }

// 导出插件
export default {
  install(app: App, options?: SheepUIOptions) {
    installComponent(app, Button, options)
  }
}
