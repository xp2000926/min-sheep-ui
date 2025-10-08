/**
 * ensureDir 这个返回 Promise
 * ensureDirSync 这个不返回,是一个同步的
 * writeFileSync 创建文件,此方法需要传入文件路径  writeFileSync(文件名 ，文件的数据)
 */
import { ensureDirSync, writeFileSync } from 'fs-extra';
import { resolve } from 'path';
import { lightBlue, lightGreen } from 'kolorist'; //颜色库
import { WriteFileOptions } from 'fs';
import { genCoreTypesTemplate } from '../template/core';
import { genTypesTemplate } from '../template/types';
import { genStyleTemplate } from '../template/style';
import { genTestTemplate } from '../template/test';
import { genIndexTemplate } from '../template';
import { genJsonTemplate } from '../template/json';
import { genMdTemplate } from '../template/md';

export interface ComponentMeta {
  name: string;
  title: string;
  category: string;
}
const WRITE_FILE_OPTIONS: WriteFileOptions = { encoding: 'utf-8' };
export const createComponent = (meta: ComponentMeta) => {
  const { name } = meta;
  //拼接组件目录
  const componentDir = resolve('../packages', name); // 组件目录

  // TODO name  fromItem from-item
  const compSrcDir = resolve(componentDir, 'src'); //组件源文件
  const styleDir = resolve(componentDir, 'style'); //样式文件
  const testDir = resolve(componentDir, 'test'); //测试文件
  const docsDir = resolve('../docs/components', name); // 文档文件
  ensureDirSync(compSrcDir);
  ensureDirSync(styleDir);
  ensureDirSync(testDir);
  ensureDirSync(docsDir);
  // 文件和内容创建
  // 核心文件:组件文件
  const coreFilePath = resolve(compSrcDir, `${name}.tsx`);
  writeFileSync(coreFilePath, genCoreTypesTemplate(name), WRITE_FILE_OPTIONS);
  //  核心文件:组件属性类型文件
  const typesFilePath = resolve(compSrcDir, name + '-type.ts');
  writeFileSync(typesFilePath, genTypesTemplate(name), WRITE_FILE_OPTIONS);
  //核心文件:样式文件
  const styleFilePath = `${styleDir}/${name}.scss`;
  writeFileSync(styleFilePath, genStyleTemplate(name), WRITE_FILE_OPTIONS);
  // 核心文件:测试文件
  const testFilePath = `${testDir}/${name}.test.tsx`;
  writeFileSync(testFilePath, genTestTemplate(name), WRITE_FILE_OPTIONS);
  // 索引文件
  const indexFilePath = `${componentDir}/index.ts`;
  writeFileSync(indexFilePath, genIndexTemplate(name), WRITE_FILE_OPTIONS);
  // dosc 文档目录
  const jsonFilePath = `${componentDir}/index.json`;
  writeFileSync(jsonFilePath, genJsonTemplate(meta), WRITE_FILE_OPTIONS);
  // dosc 文档
  const mdFilePath = `${docsDir}/index.md`;
  writeFileSync(mdFilePath, genMdTemplate(meta), WRITE_FILE_OPTIONS);

  // 创建成功通知
  console.log(lightGreen(`✔ 组件  ${name}创建完毕，目录创建成功`));
  console.log(lightBlue(`✔ 组件目录： ${componentDir}`));
  console.log(lightGreen(`✔ 文档  ${name}创建完毕，目录创建成功`));
  console.log(lightBlue(`✔ 文档目录： ${docsDir}`));
};
