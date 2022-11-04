import { render } from '@testing-library/vue' //导入 渲染函数
import Button from '../src/button'

// base按钮
test('base should work', () => {
  const { getByRole } = render(Button)
  getByRole('button')
})
// 插槽
test('default slot should be 按钮', () => {
  const { getByText } = render(Button)
  getByText('按钮')
})
test('default slot should work', () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return 'confirm'
      }
    }
  })
  getByText('confirm')
})
// 按钮类型
test('default type should be secondary', () => {
  // 默认secondary
  const { getByRole } = render(Button)
  const button = getByRole('button')
  // 希望包含 s-btn--secondary 这个class 类名
  expect(button.classList.contains('s-btn--secondary')).toBe(true)
})
test('type should work', () => {
  // 默认secondary
  const { getByRole } = render(Button, {
    props: {
      type: 'primary'
    }
  })
  const button = getByRole('button')
  expect(button.classList.contains('s-btn--primary')).toBe(true)
})
