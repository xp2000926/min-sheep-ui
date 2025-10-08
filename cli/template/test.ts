import { toPascalCase } from './utils';

export const genTestTemplate = name => {
  return `import { mount } from '@vue/test-utils';
import ${toPascalCase(name)} from '../src/${name}';

describe('${name} 测试', () => {
  test('${name}是否可以正常工作', async () => {
    const wrapper = mount(${toPascalCase(name)});
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
`;
};
