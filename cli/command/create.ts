import * as inquirer from 'inquirer' // 如果你使用的是tsnd方式需要这样导入
import { red } from 'kolorist' //颜色库
import createComponent from '../shared/create-component'

// create type 支持项
const CREATE_TYPES = ['component', 'lib-entry']
// 文档分类
const DOCS_CATEGORIES = ['通用', '导航', '反馈', '数据录入', '数据展示', '布局']
export async function onCreate(args = { type: '' }) {
  // 容错,判断用户是否输入type
  let { type } = args
  //未输入,提示用户重新输入,给用户一个列表去选择
  if (!type) {
    const result = await inquirer.prompt([
      {
        // 获取输入的属性名
        name: 'type',
        // 交互方式为列表单选
        type: 'list',
        // 提示信息
        message: '（必填）请选择创建类型：',
        // 选项列表
        choices: CREATE_TYPES,
        // 默认值，这里是索引下标
        default: 0
      }
    ])
    type = result.type
  }
  // 另一个错误，用户输入了信息，但是输入错误,要求用户重新选择
  if (!CREATE_TYPES.includes(type)) {
    console.log(
      red(
        `当前类型仅支持：${CREATE_TYPES.join(
          ', '
        )}，收到不在支持范围内的 "${type}"，请重新选择！`
      )
    )
    return onCreate()
  }
  //输入则创建对应的内容
  try {
    switch (type) {
      case 'component':
        // 如果是组件，我们还需要收集一些信息
        const info = await inquirer.prompt([
          {
            name: 'name',
            type: 'input',
            message: '（必填）请输入组件 name ，将用作目录及文件名：',
            validate: (value: string) => {
              if (value.trim() === '') {
                return '组件 name 不能为空'
              }
              return true
            }
          },
          {
            name: 'title',
            type: 'input',
            message: '（必填）请输入组件中文名称，将用作文档列表显示：',
            validate: (value: string) => {
              if (value.trim() === '') {
                return '组件名称不能为空'
              }
              return true
            }
          },
          {
            name: 'category',
            type: 'list',
            message: '（必填）请选择组件分类，将用作文档列表分类：',
            choices: DOCS_CATEGORIES,
            default: 0
          }
        ])
        // 创建组件模板文件
        createComponent(info)
        break
      default:
        break
    }
  } catch (error) {}
}
// function createComponent(info) {
//     console.log(info)
// }
