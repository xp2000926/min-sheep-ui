import Test from './Test' // 导入组件
import { render } from '@testing-library/vue' //导入 渲染函数
test('Test.tsx should work', () => {
  // 渲染组件
  const { getByText } = render(Test)
  // assert output
  // 断言输出结集
  getByText('Test：0')
})
