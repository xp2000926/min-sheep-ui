// 人口文件
import type { App } from 'vue';
import ButtonPlugin, { Button, ButtonGroup } from '../packages/button'; // 按钮
import TreePlugin, { Tree } from '../packages/tree'; // tree
import EmptyPlugin, { Empty } from '../packages/empty'; // 空状态
import BadgePlugin, { Badge } from '../packages/badge'; // 徽章
import SwitchPlugin, { Switch } from '../packages/switch'; // 开关
import FlexPlugin, { Flex } from '../packages/flex'; // 弹性布局
import RadioPlugin, { Radio, RadioButton, RadioGroup } from '../packages/radio'; // 单选框
import WaterfallPlugin, { Waterfall } from '../packages/waterfall'; // 瀑布流
import ScrollPlugin, { Scroll } from '../packages/scroll'; // 滚动条
import CascaderPlugin, { Cascader, CascaderPanel } from '../packages/cascader'; // 级联选择器
import CalendarPlugin, { Calendar } from '../packages/calendar'; // 日历
import ResultPlugin, { Result } from '../packages/result'; // 结果
import AvatarPlugin, { Avatar, AvatarGroup } from '../packages/avatar'; // 头像
import PaginationPlugin, { Pagination } from '../packages/pagination'; // 分页
import SelectPlugin, { Select, Option, OptionGroup } from '../packages/select'; // 选择器
import TransferPlugin, {
  Transfer,
  TreeTransfer,
  TableTransfer
} from '../packages/transfer'; // 穿梭框
import DatePickerPlugin, {
  DatePicker,
  DatePickerPanel,
  RangePicker,
  RangePickerPanel
} from '../packages/date-picker'; // 穿梭框
import LinkPlugin, { Link } from '../packages/link'; // 链接
import InputPlugin, { Input, InputGroup } from '../packages/input'; // 输入框
// import TablePlugin, { Table, TableColumn } from '../packages/table'; // 表格
import FormPlugin, { Form, FormItem } from '../packages/form'; // 表单
import IconPlugin, { Icon, registerIcon } from '../packages/icon'; // 图标
import EllipsisPlugin, {
  Ellipsis,
  PerformantEllipsis
} from '../packages/ellipsis'; // 文本省略
import BreadcrumbPlugin, {
  Breadcrumb,
  BreadcrumbItem
} from '../packages/breadcrumb'; // 面包屑
import WatermarkPlugin, { Watermark } from '../packages/watermark'; // 水印
import ModalPlugin, { Modal } from '../packages/modal'; // 水印
import QrCodePlugin, { QrCode } from '../packages/qr-code'; // 二维码`
import CodePlugin, { Code } from '../packages/code'; // 代码
// import CodeEditorPlugin, { CodeEditor } from '../packages/code-editor'; // 代码编辑器
import UploadPlugin, { Upload } from '../packages/upload'; // 上传
import LayoutPlugin, { Row, Col } from '../packages/layout'; // 布局
import SplitterPlugin, { Splitter, SplitterPanel } from '../packages/splitter'; // 分隔面板
import AlertPlugin, { Alert } from '../packages/alert'; // 分隔面板
import ContainerPlugin, {
  Container,
  Aside,
  Header,
  Main,
  Footer
} from '../packages/container'; // 布局容器
import PopoverPlugin, { Popover } from '../packages/popover';
import MenuPlugin, {
  Menu,
  MenuItem,
  MenuItemGroup,
  SubMenu
} from '../packages/menu';
import TypewriterPlugin, { Typewriter } from '../packages/typewriter'; // 打字器
import FilesCardPlugin, { FilesCard } from '../packages/files-card'; // 打字器
import TimePickerPanelPlugin, {
  TimePickerPanel
} from '../packages/time-picker-panel'; // 时间选择器面板

export {
  Alert,
  Button,
  ButtonGroup,
  Tree,
  Empty,
  Badge,
  Switch,
  Flex,
  Radio,
  RadioButton,
  RadioGroup,
  Waterfall,
  Scroll,
  Link,
  Cascader,
  CascaderPanel,
  Calendar,
  Result,
  Avatar,
  AvatarGroup,
  Transfer,
  TreeTransfer,
  TableTransfer,
  DatePicker,
  DatePickerPanel,
  RangePicker,
  RangePickerPanel,
  Pagination,
  Input,
  InputGroup,
  // Table,
  // TableColumn,
  Form,
  FormItem,
  Icon,
  registerIcon,
  Breadcrumb,
  BreadcrumbItem,
  Watermark,
  Modal,
  QrCode,
  Code,
  // CodeEditor,
  Upload,
  Splitter,
  SplitterPanel,
  Container,
  Aside,
  Header,
  Main,
  Footer,
  Select,
  Option,
  OptionGroup,
  Row,
  Col,
  Popover,
  Ellipsis,
  PerformantEllipsis,
  Menu,
  MenuItem,
  MenuItemGroup,
  SubMenu,
  Typewriter,
  FilesCard,
  TimePickerPanel
};

const installs = [
  ButtonPlugin,
  TreePlugin,
  EmptyPlugin,
  BadgePlugin,
  SwitchPlugin,
  FlexPlugin,
  RadioPlugin,
  WaterfallPlugin,
  ScrollPlugin,
  CascaderPlugin,
  CalendarPlugin,
  ResultPlugin,
  AvatarPlugin,
  TransferPlugin,
  DatePickerPlugin,
  PaginationPlugin,
  LinkPlugin,
  InputPlugin,
  // TablePlugin,
  FormPlugin,
  IconPlugin,
  BreadcrumbPlugin,
  WatermarkPlugin,
  ModalPlugin,
  QrCodePlugin,
  CodePlugin,
  // CodeEditorPlugin,
  UploadPlugin,
  SplitterPlugin,
  ContainerPlugin,
  SelectPlugin,
  LayoutPlugin,
  AlertPlugin,
  EllipsisPlugin,
  PopoverPlugin,
  MenuPlugin,
  TypewriterPlugin,
  FilesCardPlugin,
  TimePickerPanelPlugin
];

export default {
  install(app: App) {
    installs.forEach(p => app.use(p));
  }
};
