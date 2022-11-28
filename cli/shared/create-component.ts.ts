/**
 * ensureDir 这个返回 Promise
 * ensureDirSync 这个不返回,是一个同步的
 * writeFileSync 创建文件,此方法需要传入文件路径  writeFileSync(文件名 ，文件的数据)
 */
import { ensureDirSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'
/**
 * lightBlue 用来显示信息
 * lightGreen 用来显示成功信息
 */
import { lightBlue, lightGreen } from 'kolorist' //颜色库
import genCoreTypesTemplate from '../template/core'
import genTypesTemplate from '../template/types'
import { genStyleTemplate } from '../template/style'
import genTestTemplate from '../template/test'
import genIndexTemplate from '../template'
export interface ComponentMeta {
  name: string
  title: string
  category: string
}
import { WriteFileOptions } from 'fs'
const WRITE_FILE_OPTIONS: WriteFileOptions = { encoding: 'utf-8' }
export default function createComponent(meta: ComponentMeta) {
  const { name } = meta
  //拼接组件目录
  const componentDir = resolve('../src', name) // 组件目录
  // 其他核心文件：组件源文件、类型文件、样式文件 ,测试
  const compSrcDir = resolve(componentDir, 'src') //组件源文件
  const styleDir = resolve(componentDir, 'style') //样式文件
  const testDir = resolve(componentDir, 'test') //测试文件
  ensureDirSync(compSrcDir)
  ensureDirSync(styleDir)
  ensureDirSync(testDir)
  // 文件和内容创建
  // 核心文件:组件文件
  const coreFilePath = resolve(compSrcDir, name + '.tsx')
  writeFileSync(coreFilePath, genCoreTypesTemplate(name), WRITE_FILE_OPTIONS)
  //  核心文件:组件属性类型文件
  const typesFilePath = resolve(compSrcDir, name + '-type.ts')
  writeFileSync(typesFilePath, genTypesTemplate(name), WRITE_FILE_OPTIONS)
  //核心文件:样式文件
  const styleFilePath = styleDir + `/${meta.name}.scss`
  writeFileSync(styleFilePath, genStyleTemplate(name), WRITE_FILE_OPTIONS)
  // 核心文件:测试文件
  const testFilePath = testDir + `/${meta.name}.test.ts`
  writeFileSync(testFilePath, genTestTemplate(meta.name), WRITE_FILE_OPTIONS)
  // 索引文件
  const indexFilePath = componentDir + `/index.ts`
  writeFileSync(indexFilePath, genIndexTemplate(meta.name), WRITE_FILE_OPTIONS)

  // 创建成功通知
  console.log(lightGreen(`✔ 组件${name}创建完毕，目录创建成功`))
  console.log(lightBlue(`✔ 组件目录：${componentDir}`))
}
