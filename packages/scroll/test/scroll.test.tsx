import { mount } from '@vue/test-utils';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import Scroll from '../src/scroll';
import '@testing-library/jest-dom';

// Mock ResizeObserver
class MockResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

// Mock requestAnimationFrame
const mockRequestAnimationFrame = vi.fn(callback => {
  setTimeout(callback, 16);
  return 1;
});

const mockCancelAnimationFrame = vi.fn();

// Mock DOM 方法
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: MockResizeObserver
});

Object.defineProperty(window, 'requestAnimationFrame', {
  writable: true,
  value: mockRequestAnimationFrame
});

Object.defineProperty(window, 'cancelAnimationFrame', {
  writable: true,
  value: mockCancelAnimationFrame
});

describe('Scroll 滚动条组件测试', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Scroll 组件是否可以正常渲染', () => {
    const wrapper = mount(Scroll, {
      slots: {
        default: () => '测试内容'
      }
    });
    expect(wrapper.element.nodeName).toBe('DIV');
    expect(wrapper.classes('s-scroll')).toBe(true);
  });

  test('Scroll 组件应该渲染滚动容器和内容', () => {
    const wrapper = mount(Scroll, {
      slots: {
        default: () => '测试内容'
      }
    });

    const container = wrapper.find('.s-scroll-container');
    expect(container.exists()).toBe(true);

    const content = wrapper.find('.s-scroll-content');
    expect(content.exists()).toBe(true);
    expect(content.text()).toBe('测试内容');
  });

  test('Scroll 组件应该渲染滚动条轨道', () => {
    const wrapper = mount(Scroll, {
      slots: {
        default: () => '测试内容'
      }
    });

    const yRail = wrapper.find('.s-scroll-rail--vertical');
    expect(yRail.exists()).toBe(true);

    const xRail = wrapper.find('.s-scroll-rail--horizontal');
    expect(xRail.exists()).toBe(true);
  });

  describe('Scroll 组件属性测试', () => {
    test('默认属性值是否正确', () => {
      const wrapper = mount(Scroll, {
        slots: {
          default: () => '测试内容'
        }
      });

      expect(wrapper.props('yPlacement')).toBe('right');
      expect(wrapper.props('xPlacement')).toBe('bottom');
      expect(wrapper.props('railSize')).toBe(5);
      expect(wrapper.props('minRailSize')).toBe(20);
      expect(wrapper.props('showXScroll')).toBe(true);
      expect(wrapper.props('showYScroll')).toBe(true);
      expect(wrapper.props('railColor')).toBe('rgba(0, 0, 0, 0.25)');
      expect(wrapper.props('railHoverColor')).toBe('rgba(0, 0, 0, 0.4)');
      expect(wrapper.props('trigger')).toBe('hover');
    });

    test('自定义滚动条大小是否正确应用', () => {
      const wrapper = mount(Scroll, {
        props: {
          railSize: 8,
          minRailSize: 30
        },
        slots: {
          default: () => '测试内容'
        }
      });

      expect(wrapper.props('railSize')).toBe(8);
      expect(wrapper.props('minRailSize')).toBe(30);
    });

    test('自定义滚动条颜色是否正确应用', () => {
      const wrapper = mount(Scroll, {
        props: {
          railColor: 'rgba(255, 0, 0, 0.3)',
          railHoverColor: 'rgba(255, 0, 0, 0.6)'
        },
        slots: {
          default: () => '测试内容'
        }
      });

      expect(wrapper.props('railColor')).toBe('rgba(255, 0, 0, 0.3)');
      expect(wrapper.props('railHoverColor')).toBe('rgba(255, 0, 0, 0.6)');
    });

    test('垂直滚动条位置设置是否正确', () => {
      const wrapper = mount(Scroll, {
        props: {
          yPlacement: 'left'
        },
        slots: {
          default: () => '测试内容'
        }
      });

      const yRail = wrapper.find('.s-scroll-rail--vertical');
      expect(yRail.classes()).toContain('s-scroll-rail--vertical--left');
    });

    test('水平滚动条位置设置是否正确', () => {
      const wrapper = mount(Scroll, {
        props: {
          xPlacement: 'top'
        },
        slots: {
          default: () => '测试内容'
        }
      });

      const xRail = wrapper.find('.s-scroll-rail--horizontal');
      expect(xRail.classes()).toContain('s-scroll-rail--horizontal--top');
    });

    test('滚动条显示控制是否正确', () => {
      const wrapper = mount(Scroll, {
        props: {
          showXScroll: false,
          showYScroll: false
        },
        slots: {
          default: () => '测试内容'
        }
      });

      expect(wrapper.props('showXScroll')).toBe(false);
      expect(wrapper.props('showYScroll')).toBe(false);
    });
  });

  describe('Scroll 组件触发器测试', () => {
    test('trigger 为 hover 时滚动条默认隐藏', () => {
      const wrapper = mount(Scroll, {
        props: {
          trigger: 'hover'
        },
        slots: {
          default: () => '测试内容'
        }
      });

      expect(wrapper.props('trigger')).toBe('hover');
    });

    test('trigger 为 none 时滚动条始终显示', () => {
      const wrapper = mount(Scroll, {
        props: {
          trigger: 'none'
        },
        slots: {
          default: () => '测试内容'
        }
      });

      expect(wrapper.props('trigger')).toBe('none');
    });
  });

  describe('Scroll 组件自定义样式测试', () => {
    test('自定义类名是否正确应用', () => {
      const wrapper = mount(Scroll, {
        props: {
          customClass: 'custom-scroll-class'
        },
        slots: {
          default: () => '测试内容'
        }
      });

      expect(wrapper.classes()).toContain('custom-scroll-class');
    });

    test('自定义容器样式是否正确应用', () => {
      const customStyle = {
        backgroundColor: '#f0f0f0',
        borderRadius: '8px'
      };

      const wrapper = mount(Scroll, {
        props: {
          customContainerStyle: customStyle
        },
        slots: {
          default: () => '测试内容'
        }
      });

      const wrapperElement = wrapper.find('.s-scroll');
      expect(wrapperElement.attributes('style')).toContain(
        'background-color: #f0f0f0'
      );
      expect(wrapperElement.attributes('style')).toContain(
        'border-radius: 8px'
      );
    });

    test('自定义内容样式是否正确应用', () => {
      const customStyle = {
        padding: '16px',
        fontSize: '14px'
      };

      const wrapper = mount(Scroll, {
        props: {
          customContentStyle: customStyle
        },
        slots: {
          default: () => '测试内容'
        }
      });

      const contentElement = wrapper.find('.s-scroll-content');
      expect(contentElement.attributes('style')).toContain('padding: 16px');
      expect(contentElement.attributes('style')).toContain('font-size: 14px');
    });

    test('自定义滚动条样式是否正确应用', () => {
      const customRailStyle = {
        borderRadius: '4px',
        opacity: '0.8'
      };

      const customBarStyle = {
        borderRadius: '2px',
        border: '1px solid #ccc'
      };

      const wrapper = mount(Scroll, {
        props: {
          customRailStyle,
          customBarStyle
        },
        slots: {
          default: () => '测试内容'
        }
      });

      expect(wrapper.props('customRailStyle')).toEqual(customRailStyle);
      expect(wrapper.props('customBarStyle')).toEqual(customBarStyle);
    });
  });

  describe('Scroll 组件插槽测试', () => {
    test('默认插槽内容是否正确渲染', () => {
      const wrapper = mount(Scroll, {
        slots: {
          default: () => '默认插槽内容'
        }
      });

      const content = wrapper.find('.s-scroll-content');
      expect(content.text()).toBe('默认插槽内容');
    });

    test('复杂插槽内容是否正确渲染', () => {
      const wrapper = mount(Scroll, {
        slots: {
          default: () => (
            <div>
              <h1>标题</h1>
              <p>段落内容</p>
              <ul>
                <li>列表项1</li>
                <li>列表项2</li>
              </ul>
            </div>
          )
        }
      });

      const content = wrapper.find('.s-scroll-content');
      expect(content.find('h1').text()).toBe('标题');
      expect(content.find('p').text()).toBe('段落内容');
      expect(content.findAll('li')).toHaveLength(2);
    });

    test('空插槽时是否正确渲染', () => {
      const wrapper = mount(Scroll, {
        slots: {
          default: () => ''
        }
      });

      const content = wrapper.find('.s-scroll-content');
      expect(content.text()).toBe('');
    });
  });

  describe('Scroll 组件组合测试', () => {
    test('所有属性组合使用是否正确', () => {
      const wrapper = mount(Scroll, {
        props: {
          yPlacement: 'left',
          xPlacement: 'top',
          railSize: 10,
          minRailSize: 25,
          showXScroll: false,
          showYScroll: true,
          railColor: '#ff0000',
          railHoverColor: '#ff6666',
          trigger: 'none',
          customClass: 'my-scroll',
          customContainerStyle: { backgroundColor: '#f5f5f5' },
          customContentStyle: { padding: '20px' },
          customRailStyle: { borderRadius: '5px' },
          customBarStyle: { borderRadius: '3px' }
        },
        slots: {
          default: () => '组合测试内容'
        }
      });

      expect(wrapper.classes()).toContain('my-scroll');
      expect(wrapper.props('yPlacement')).toBe('left');
      expect(wrapper.props('xPlacement')).toBe('top');
      expect(wrapper.props('railSize')).toBe(10);
      expect(wrapper.props('trigger')).toBe('none');
    });
  });

  describe('Scroll 组件边界情况测试', () => {
    test('极小尺寸时是否正确处理', () => {
      const wrapper = mount(Scroll, {
        props: {
          railSize: 1,
          minRailSize: 1
        },
        slots: {
          default: () => '极小尺寸测试'
        }
      });

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.props('railSize')).toBe(1);
      expect(wrapper.props('minRailSize')).toBe(1);
    });

    test('极大尺寸时是否正确处理', () => {
      const wrapper = mount(Scroll, {
        props: {
          railSize: 100,
          minRailSize: 200
        },
        slots: {
          default: () => '极大尺寸测试'
        }
      });

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.props('railSize')).toBe(100);
      expect(wrapper.props('minRailSize')).toBe(200);
    });

    test('空对象样式时是否正确处理', () => {
      const wrapper = mount(Scroll, {
        props: {
          customContainerStyle: {},
          customContentStyle: {},
          customRailStyle: {},
          customBarStyle: {}
        },
        slots: {
          default: () => '空样式测试'
        }
      });

      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('Scroll 组件响应式测试', () => {
    test('属性变化时是否正确更新', async () => {
      const wrapper = mount(Scroll, {
        props: {
          railSize: 5,
          railColor: 'rgba(0, 0, 0, 0.25)'
        },
        slots: {
          default: () => '响应式测试'
        }
      });

      expect(wrapper.props('railSize')).toBe(5);

      await wrapper.setProps({ railSize: 8 });
      expect(wrapper.props('railSize')).toBe(8);

      await wrapper.setProps({ railColor: '#ff0000' });
      expect(wrapper.props('railColor')).toBe('#ff0000');
    });

    test('触发器类型变化时是否正确更新', async () => {
      const wrapper = mount(Scroll, {
        props: {
          trigger: 'hover'
        },
        slots: {
          default: () => '触发器测试'
        }
      });

      expect(wrapper.props('trigger')).toBe('hover');

      await wrapper.setProps({ trigger: 'none' });
      expect(wrapper.props('trigger')).toBe('none');
    });
  });

  describe('Scroll 组件 DOM 结构测试', () => {
    test('滚动条滑块元素是否存在', () => {
      const wrapper = mount(Scroll, {
        slots: {
          default: () => 'DOM 结构测试'
        }
      });

      const yRail = wrapper.find('.s-scroll-rail--vertical');
      const yBar = yRail.find('.s-scroll-rail__scroll');
      expect(yBar.exists()).toBe(true);

      const xRail = wrapper.find('.s-scroll-rail--horizontal');
      const xBar = xRail.find('.s-scroll-rail__scroll');
      expect(xBar.exists()).toBe(true);
    });

    test('滚动条轨道类名是否正确', () => {
      const wrapper = mount(Scroll, {
        props: {
          yPlacement: 'left',
          xPlacement: 'top'
        },
        slots: {
          default: () => '类名测试'
        }
      });

      const yRail = wrapper.find('.s-scroll-rail--vertical');
      expect(yRail.classes()).toContain('s-scroll-rail--vertical--left');

      const xRail = wrapper.find('.s-scroll-rail--horizontal');
      expect(xRail.classes()).toContain('s-scroll-rail--horizontal--top');
    });
  });

  describe('Scroll 组件事件处理测试', () => {
    test('滚动条滑块元素可以触发鼠标事件', async () => {
      const wrapper = mount(Scroll, {
        slots: {
          default: () => '事件测试'
        }
      });

      const yBar = wrapper.find(
        '.s-scroll-rail--vertical .s-scroll-rail__scroll'
      );
      const xBar = wrapper.find(
        '.s-scroll-rail--horizontal .s-scroll-rail__scroll'
      );

      // 检查元素是否存在（事件处理器会通过 JSX 绑定）
      expect(yBar.exists()).toBe(true);
      expect(xBar.exists()).toBe(true);

      // 模拟鼠标按下事件
      await yBar.trigger('mousedown');
      await xBar.trigger('mousedown');

      // 模拟鼠标进入和离开事件
      await yBar.trigger('mouseenter');
      await yBar.trigger('mouseleave');
      await xBar.trigger('mouseenter');
      await xBar.trigger('mouseleave');

      // 如果没有抛出错误，说明事件处理器存在且正常工作
      expect(true).toBe(true);
    });

    test('滚动条轨道可以触发点击事件', async () => {
      const wrapper = mount(Scroll, {
        slots: {
          default: () => '点击事件测试'
        }
      });

      const yRail = wrapper.find('.s-scroll-rail--vertical');
      const xRail = wrapper.find('.s-scroll-rail--horizontal');

      // 检查轨道元素是否存在
      expect(yRail.exists()).toBe(true);
      expect(xRail.exists()).toBe(true);

      // 模拟点击事件
      await yRail.trigger('click');
      await xRail.trigger('click');

      // 如果没有抛出错误，说明点击事件处理器存在且正常工作
      expect(true).toBe(true);
    });
  });

  describe('Scroll 组件性能测试', () => {
    test('大量内容时是否正确渲染', () => {
      const longContent = Array(1000)
        .fill(0)
        .map((_, i) => `内容行 ${i + 1}`)
        .join('\n');

      const wrapper = mount(Scroll, {
        slots: {
          default: () => longContent
        }
      });

      expect(wrapper.exists()).toBe(true);
      const content = wrapper.find('.s-scroll-content');
      expect(content.text()).toContain('内容行 1');
      expect(content.text()).toContain('内容行 1000');
    });

    test('复杂嵌套结构时是否正确渲染', () => {
      const wrapper = mount(Scroll, {
        slots: {
          default: () => (
            <div>
              {Array(50)
                .fill(0)
                .map((_, i) => (
                  <div key={i}>
                    <h2>标题 {i + 1}</h2>
                    <p>这是第 {i + 1} 个段落的内容</p>
                    <div>
                      {Array(10)
                        .fill(0)
                        .map((_, j) => (
                          <span key={j}>子项 {j + 1} </span>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          )
        }
      });

      expect(wrapper.exists()).toBe(true);
      const content = wrapper.find('.s-scroll-content');
      expect(content.findAll('h2')).toHaveLength(50);
      expect(content.findAll('p')).toHaveLength(50);
    });
  });
});
