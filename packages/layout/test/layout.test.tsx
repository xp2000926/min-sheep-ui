import { mount } from '@vue/test-utils';
import Row from '../src/row';
import Col from '../src/col';

describe('Layout 组件综合测试', () => {
  test('Row 和 Col 组件是否可以正常组合使用', () => {
    const wrapper = mount({
      template: `
        <Row :gutter="20" justify="center" align="middle">
          <Col :span="8">第1列</Col>
          <Col :span="8">第2列</Col>
          <Col :span="8">第3列</Col>
        </Row>
      `,
      components: { Row, Col }
    });

    // 验证 Row 组件
    const rowElement = wrapper.findComponent(Row).element;
    expect(rowElement.classList.contains('s-row')).toBe(true);
    expect(rowElement.classList.contains('is-justify-center')).toBe(true);
    expect(rowElement.classList.contains('is-align-middle')).toBe(true);

    const rowStyle = rowElement.getAttribute('style');
    expect(rowStyle).toContain('margin-left: -10px');
    expect(rowStyle).toContain('margin-right: -10px');

    // 验证 Col 组件
    const colElements = wrapper.findAllComponents(Col);
    expect(colElements).toHaveLength(3);

    colElements.forEach((colWrapper, index) => {
      const colElement = colWrapper.element;
      expect(colElement.classList.contains('s-col')).toBe(true);
      expect(colElement.classList.contains('s-col-8')).toBe(true);
      expect(colElement.classList.contains('is-guttered')).toBe(true);

      const colStyle = colElement.getAttribute('style');
      expect(colStyle).toContain('padding-left: 10px');
      expect(colStyle).toContain('padding-right: 10px');

      expect(colElement.textContent).toBe(`第${index + 1}列`);
    });
  });

  test('响应式布局测试', () => {
    const wrapper = mount({
      template: `
        <Row>
          <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">响应式列</Col>
        </Row>
      `,
      components: { Row, Col }
    });

    const colElement = wrapper.findComponent(Col).element;
    expect(colElement.classList.contains('s-col-xs-24')).toBe(true);
    expect(colElement.classList.contains('s-col-sm-12')).toBe(true);
    expect(colElement.classList.contains('s-col-md-8')).toBe(true);
    expect(colElement.classList.contains('s-col-lg-6')).toBe(true);
    expect(colElement.classList.contains('s-col-xl-4')).toBe(true);
  });

  test('嵌套布局测试', () => {
    const wrapper = mount({
      template: `
        <Row :gutter="16">
          <Col :span="12">
            <Row :gutter="8">
              <Col :span="6">嵌套1</Col>
              <Col :span="6">嵌套2</Col>
            </Row>
          </Col>
          <Col :span="12">右侧列</Col>
        </Row>
      `,
      components: { Row, Col }
    });

    // 验证外层 Row
    const outerRow = wrapper.findComponent(Row);
    expect(outerRow.element.classList.contains('s-row')).toBe(true);

    // 验证所有 Col 组件（包括嵌套的）
    const allCols = wrapper.findAllComponents(Col);
    expect(allCols).toHaveLength(4); // 2个外层 + 2个内层

    // 验证嵌套结构
    const firstCol = allCols[0];
    const nestedRow = firstCol.findComponent(Row);
    expect(nestedRow.element.classList.contains('s-row')).toBe(true);

    const nestedCols = nestedRow.findAllComponents(Col);
    expect(nestedCols).toHaveLength(2);

    nestedCols.forEach((colWrapper, index) => {
      expect(colWrapper.element.classList.contains('s-col-6')).toBe(true);
      expect(colWrapper.text()).toBe(`嵌套${index + 1}`);
    });
  });

  test('自定义标签测试', () => {
    const wrapper = mount({
      template: `
        <Row tag="section" :gutter="12">
          <Col tag="article" :span="12">文章内容</Col>
          <Col tag="aside" :span="12">侧边内容</Col>
        </Row>
      `,
      components: { Row, Col }
    });

    // 验证 Row 的自定义标签
    expect(wrapper.findComponent(Row).element.tagName.toLowerCase()).toBe(
      'section'
    );

    // 验证 Col 的自定义标签
    const cols = wrapper.findAllComponents(Col);
    expect(cols[0].element.tagName.toLowerCase()).toBe('article');
    expect(cols[1].element.tagName.toLowerCase()).toBe('aside');

    expect(cols[0].text()).toBe('文章内容');
    expect(cols[1].text()).toBe('侧边内容');
  });

  test('空内容测试', () => {
    const wrapper = mount({
      template: `
        <Row>
          <Col></Col>
          <Col :span="12"></Col>
        </Row>
      `,
      components: { Row, Col }
    });

    const cols = wrapper.findAllComponents(Col);
    expect(cols[0].text()).toBe('');
    expect(cols[1].text()).toBe('');
    expect(cols[1].element.classList.contains('s-col-12')).toBe(true);
  });
});
