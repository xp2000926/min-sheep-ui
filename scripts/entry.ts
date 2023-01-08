import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'
import TreePlugin, { Tree } from '../src/tree'
import PaginationPlugin, { Pagination } from '../src/pagination'
import FormPlugin, { Form } from '../src/form'
import InputPlugin, { Input } from '../src/input'
import ModalPlugin, { Modal } from '../src/modal'
import IconPlugin, { Icon } from '../src/icon'
import TabsPlugin, { Tabs, Tab } from '../src/tabs'
import PopoverPlugin, { Popover } from '../src/popover'
const installs = [
  ButtonPlugin,
  TreePlugin,
  PaginationPlugin,
  FormPlugin,
  InputPlugin,
  ModalPlugin,
  IconPlugin,
  TabsPlugin,
  PopoverPlugin

]

export { 
  Button,
  Tree,
  Pagination,
  Form,
  Input, 
  Modal,
  Icon,
  Tabs,
  Tab,
  Popover
}

export default {
  version: '0.0.1',
  install(app: App): void {
    installs.forEach(p => app.use(p))
  }
}
