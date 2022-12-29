import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'
import TreePlugin, { Tree } from '../src/tree'
import '../src/index.scss'
const installs = [
  ButtonPlugin,
  TreePlugin,
]

export { Button, Tree }

export default {
  version: '0.0.1',
  install(app: App): void {
    installs.forEach(p => app.use(p))
  }
}
