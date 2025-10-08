import { mount } from '@vue/test-utils';
import Container from '../src/container';
import Aside from '../src/aside';
import Footer from '../src/footer';
import Header from '../src/header';
import Main from '../src/main';

describe('container 测试', () => {
  test('container是否可以正常工作', async () => {
    const wrapper = mount(Container);
    expect(wrapper.element.nodeName).toBe('SECTION');
  });
});
describe('Aside 测试', () => {
  test('aside 是否可以正常工作', async () => {
    const wrapper = mount(Aside);
    expect(wrapper.element.nodeName).toBe('ASIDE');
  });
});
describe('Footer 测试', () => {
  test('footer 是否可以正常工作', async () => {
    const wrapper = mount(Footer);
    expect(wrapper.element.nodeName).toBe('FOOTER');
  });
});
describe('Header 测试', () => {
  test('header 是否可以正常工作', async () => {
    const wrapper = mount(Header);
    expect(wrapper.element.nodeName).toBe('HEADER');
  });
});
describe('Main 测试', () => {
  test('main 是否可以正常工作', async () => {
    const wrapper = mount(Main);
    expect(wrapper.element.nodeName).toBe('MAIN');
  });
});
