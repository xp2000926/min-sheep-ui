// 更据文件后缀名获取文件类型
/* FileCard 组件相关 开始 */

import { FilesType } from '../src/files-card-type';

// 更据文件后缀名获取文件类型
// 更据文件后缀名获取文件类型（低复杂度版本）
export const getFileType = (
  fileExtension: string
): {
  lowerCase: FilesType;
  upperCase: string;
} => {
  // 预处理：去除前缀点并转小写
  const cleanExtension = fileExtension.replace('.', '').toLowerCase();

  // 空后缀直接返回unknown
  if (!cleanExtension) {
    return { lowerCase: 'unknown', upperCase: 'Unknown' };
  }

  // 类型映射配置：将所有判断规则集中管理
  const typeConfig: Array<{
    suffixes: string[];
    lowerCase: FilesType;
    upperCase: string;
  }> = [
    {
      suffixes: ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'svg', 'webp'],
      lowerCase: 'image',
      upperCase: 'Image'
    },
    { suffixes: ['doc', 'docx'], lowerCase: 'word', upperCase: 'Word' },
    { suffixes: ['xls', 'xlsx'], lowerCase: 'excel', upperCase: 'Excel' },
    { suffixes: ['ppt', 'pptx'], lowerCase: 'ppt', upperCase: 'Ppt' },
    { suffixes: ['pdf'], lowerCase: 'pdf', upperCase: 'Pdf' },
    { suffixes: ['txt'], lowerCase: 'txt', upperCase: 'Txt' },
    { suffixes: ['md', 'mdx'], lowerCase: 'mark', upperCase: 'Markdown' },
    {
      suffixes: ['mp3', 'wav', 'ogg', 'flac'],
      lowerCase: 'audio',
      upperCase: 'Audio'
    },
    {
      suffixes: ['mp4', 'avi', 'mov', 'mkv'],
      lowerCase: 'video',
      upperCase: 'Video'
    },
    {
      suffixes: [
        'js',
        'ts',
        'html',
        'css',
        'py',
        'java',
        'c',
        'cpp',
        'json',
        'php'
      ],
      lowerCase: 'code',
      upperCase: 'Code'
    },
    {
      suffixes: ['sql', 'db', 'sqlite'],
      lowerCase: 'database',
      upperCase: 'Database'
    },
    { suffixes: ['lnk'], lowerCase: 'link', upperCase: 'Link' },
    { suffixes: ['zip', 'rar', '7z'], lowerCase: 'zip', upperCase: 'Zip' },
    { suffixes: ['obj', 'fbx', 'glb'], lowerCase: 'three', upperCase: '3D' }
  ];

  // 循环匹配后缀（仅1个分支点）
  for (const config of typeConfig) {
    if (config.suffixes.includes(cleanExtension)) {
      return config;
    }
  }

  // 默认返回file类型（无分支）
  return { lowerCase: 'file', upperCase: 'File' };
};
// 获取文件大小
export function getSize(size: number) {
  let retSize = size;
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
  let unitIndex = 0;

  while (retSize >= 1024 && unitIndex < units.length - 1) {
    retSize /= 1024;
    unitIndex++;
  }

  return `${retSize.toFixed(0)} ${units[unitIndex]}`;
}
// 通过文件流，生成图片预览
// Follow code is copy from `antd/components/upload/utils.ts`:
export function isImageFileType(type: string): boolean {
  return type.indexOf('image/') === 0;
}
