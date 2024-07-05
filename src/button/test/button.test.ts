import { render } from '@testing-library/vue'; //导入 渲染函数
import Button from '../src/button';

//  base按钮（基础按钮）
test('button是否可以正常工作', () => {
  // 渲染组件
  const { getByRole } = render(Button);
  getByRole('button');
});
// 插槽
test('默认插槽是不是""', () => {
  const { getByRole } = render(Button);
  const button = getByRole('button');
  expect(button.innerText == '').toBe(true);
});

test('默认插槽是否可以正常工作', () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return 'confirm';
      }
    }
  });
  getByText('confirm');
});
// 按钮类型
// test('默认类型是不是', () => {
//   const { getByRole } = render(Button);
//   const button = getByRole('button');
//   console.log(button);
//   // expect(button.classList.contains('')).toBe(true);
// });
test('type是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'primary'
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('s-button--primary')).toBe(true);
});
// test('默认size 是否为', () => {
//   const { getByRole } = render(Button);
//   const button = getByRole('button');
//   expect(button.classList.contains('')).toBe(true);
// });
test('size 是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      size: 'small'
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('s-button--small')).toBe(true);
});
test('button的block默认值是否为false', () => {
  const { getByRole } = render(Button);
  const button = getByRole('button');
  expect(button.classList.contains('s-button--block')).toBe(false);
});
test('button的block是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      block: true
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('is-block')).toBe(true);
});
