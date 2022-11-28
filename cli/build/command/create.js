'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this
        }),
      g
    )
    function verb(n) {
      return function (v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
exports.__esModule = true
exports.onCreate = void 0
var inquirer = require('inquirer') // 如果你使用的是tsnd方式需要这样导入
var kolorist_1 = require('kolorist') //颜色库
var create_component_ts_1 = require('../shared/create-component.ts')
// create type 支持项
var CREATE_TYPES = ['component', 'lib-entry']
// 文档分类
var DOCS_CATEGORIES = ['通用', '导航', '反馈', '数据录入', '数据展示', '布局']
function onCreate(args) {
  if (args === void 0) {
    args = { type: '' }
  }
  return __awaiter(this, void 0, void 0, function () {
    var type, result, _a, info, error_1
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          type = args.type
          if (!!type) return [3 /*break*/, 2]
          return [
            4 /*yield*/,
            inquirer.prompt([
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
          ]
        case 1:
          result = _b.sent()
          type = result.type
          _b.label = 2
        case 2:
          // 另一个错误，用户输入了信息，但是输入错误,要求用户重新选择
          if (!CREATE_TYPES.includes(type)) {
            console.log(
              (0, kolorist_1.red)(
                '\u5F53\u524D\u7C7B\u578B\u4EC5\u652F\u6301\uFF1A'
                  .concat(
                    CREATE_TYPES.join(', '),
                    '\uFF0C\u6536\u5230\u4E0D\u5728\u652F\u6301\u8303\u56F4\u5185\u7684 "'
                  )
                  .concat(type, '"\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\uFF01')
              )
            )
            return [2 /*return*/, onCreate()]
          }
          _b.label = 3
        case 3:
          _b.trys.push([3, 8, , 9])
          _a = type
          switch (_a) {
            case 'component':
              return [3 /*break*/, 4]
          }
          return [3 /*break*/, 6]
        case 4:
          return [
            4 /*yield*/,
            inquirer.prompt([
              {
                name: 'name',
                type: 'input',
                message: '（必填）请输入组件 name ，将用作目录及文件名：',
                validate: function (value) {
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
                validate: function (value) {
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
          ]
        case 5:
          info = _b.sent()
          // 创建组件模板文件
          ;(0, create_component_ts_1['default'])(info)
          return [3 /*break*/, 7]
        case 6:
          return [3 /*break*/, 7]
        case 7:
          return [3 /*break*/, 9]
        case 8:
          error_1 = _b.sent()
          return [3 /*break*/, 9]
        case 9:
          return [2 /*return*/]
      }
    })
  })
}
exports.onCreate = onCreate
// function createComponent(info) {
//     console.log(info)
// }
