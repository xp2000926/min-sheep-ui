import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button' //按钮
import TreePlugin, { Tree } from '../src/tree'//树形控件
import PaginationPlugin, { Pagination } from '../src/pagination'//分页
import FormPlugin, { Form } from '../src/form'//表单
import InputPlugin, { Input } from '../src/input'//输入框
import ModalPlugin, { Modal } from '../src/modal'//对话框
import IconPlugin, { Icon } from '../src/icon'//图标
import TabsPlugin, { Tabs, Tab } from '../src/tabs'//标签页
import PopoverPlugin, { Popover } from '../src/popover'//气泡卡片
import TablePlugin, { Table, TableColumn } from '../src/table'//表格
import EmptyPlugin, { Empty } from '../src/empty'//空状态
const installs = [
  ButtonPlugin,
  TreePlugin,
  PaginationPlugin,
  FormPlugin,
  InputPlugin,
  ModalPlugin,
  IconPlugin,
  TabsPlugin,
  PopoverPlugin,
  TablePlugin,
  EmptyPlugin
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
  Popover,
  Table,
  TableColumn,
  Empty
}

export default {
  version: '0.0.1',
  install(app: App): void {
    installs.forEach(p => app.use(p))
  }
}
