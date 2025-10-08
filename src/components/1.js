// 导入Font Awesome solid图标包
const { fas } = require('@fortawesome/free-solid-svg-icons');

// 提取所有图标名称
function extractIconNames() {
  // fas对象包含了所有solid风格的图标
  const iconNames = Object.keys(fas);

  // 过滤掉可能的非图标属性（如前缀等）
  const filteredNames = iconNames.filter(name => {
    // 图标通常包含一个icon属性
    return fas[name] && fas[name].icon;
  });

  return filteredNames;
}

// 获取并打印所有图标名称
const allIconNames = extractIconNames();
console.log(`共找到 ${allIconNames.length} 个图标：`);
console.log(allIconNames);

// 也可以将结果保存到文件
const fs = require('fs');
fs.writeFileSync('./solid-icon-names.txt', JSON.stringify(allIconNames), 'utf8');
console.log('图标名称已保存到 solid-icon-names.txt 文件');
