import { Command } from 'commander' // 命令行工具（可以创建命令，用他的api可以注册一些命令接口，这些接口可以让用户来更nodejs 进行输入命令的时候传入参数来进行进一步的交互）
import { onCreate } from '../command/create'

// 创建命令对象
const cmd = new Command()

// 注册命令、参数，以及用户传入之后的回调函数
// $ tsnd ./src/index.ts create --type component
cmd // 注册 create 命令
  .command('create')
  // 添加命令描述
  .description('创建一个组件模板或配置文件')
  // 添加命令参数 -t | --type <type> ，<type> 表示该参数必填，[type] 表示选填
  .option('-t --type <type>', `创建类型，可选值：component, lib-entry`)
  // 注册命令回调
  .action(onCreate)
// 执行命令行参数解析
cmd.parse()
