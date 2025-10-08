import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import QrCode from '../src/qr-code';
import '@testing-library/jest-dom';

describe('QR Code 二维码组件测试', () => {
  test('QR Code 组件是否可以正常渲染', () => {
    const wrapper = mount(QrCode, {
      props: {
        modelValue: 'Hello World'
      }
    });
    expect(wrapper.element.nodeName).toBe('DIV');
    expect(wrapper.classes('s-qr-code')).toBe(true);
  });

  test('QR Code 组件默认使用 canvas 类型渲染', () => {
    const wrapper = mount(QrCode, {
      props: {
        modelValue: 'Test QR Code'
      }
    });
    const canvas = wrapper.find('canvas');
    expect(canvas.exists()).toBe(true);
  });

  test('QR Code 组件可以切换到 SVG 类型渲染', () => {
    const wrapper = mount(QrCode, {
      props: {
        modelValue: 'Test QR Code',
        type: 'svg'
      }
    });
    const svg = wrapper.find('svg');
    const canvas = wrapper.find('canvas');
    expect(svg.exists()).toBe(true);
    expect(canvas.exists()).toBe(false);
  });

  describe('QR Code 组件属性测试', () => {
    test('默认尺寸是否正确', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test QR Code'
        }
      });
      const canvas = wrapper.find('canvas');
      expect(canvas.attributes('style')).toContain('width: 100px');
      expect(canvas.attributes('style')).toContain('height: 100px');
    });

    test('自定义尺寸是否正确应用', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test QR Code',
          size: 200
        }
      });
      const canvas = wrapper.find('canvas');
      expect(canvas.attributes('style')).toContain('width: 200px');
      expect(canvas.attributes('style')).toContain('height: 200px');
    });

    test('默认颜色设置是否正确', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test QR Code'
        }
      });
      const container = wrapper.find('.s-qr-code');
      expect(container.attributes('style')).toContain('background-color: #FFF');
    });

    test('自定义颜色设置是否正确应用', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test QR Code',
          color: '#FF0000',
          backgroundColor: '#000000'
        }
      });
      const container = wrapper.find('.s-qr-code');
      expect(container.attributes('style')).toContain(
        'background-color: #000000'
      );
    });

    test('默认内边距是否正确', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test QR Code'
        }
      });
      const container = wrapper.find('.s-qr-code');
      expect(container.attributes('style')).toContain('padding: 12px');
    });

    test('自定义内边距是否正确应用', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test QR Code',
          padding: 20
        }
      });
      const container = wrapper.find('.s-qr-code');
      expect(container.attributes('style')).toContain('padding: 20px');
    });

    test('字符串类型内边距是否正确应用', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test QR Code',
          padding: '10px 15px'
        }
      });
      const container = wrapper.find('.s-qr-code');
      expect(container.attributes('style')).toContain('padding: 10px 15px');
    });
  });

  describe('QR Code 错误纠正级别测试', () => {
    test.each(['L', 'M', 'Q', 'H'])(
      '错误纠正级别 %s 是否正确处理',
      async level => {
        const wrapper = mount(QrCode, {
          props: {
            modelValue: 'Test QR Code',
            errorCorrectionLevel: level
          }
        });
        await nextTick();
        expect(wrapper.exists()).toBe(true);
      }
    );
  });

  describe('QR Code 图标配置测试', () => {
    test('默认图标配置是否正确', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test QR Code'
        }
      });
      // 默认情况下不应该有图标
      expect(wrapper.props('iconSrc')).toBe('');
      expect(wrapper.props('iconSize')).toBe(40);
      expect(wrapper.props('iconBackgroundColor')).toBe('#FFF');
      expect(wrapper.props('iconBorderRadius')).toBe(4);
    });

    test('自定义图标配置是否正确应用', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test QR Code',
          iconSrc: 'https://example.com/icon.png',
          iconSize: 60,
          iconBackgroundColor: '#FF0000',
          iconBorderRadius: 8
        }
      });
      expect(wrapper.props('iconSrc')).toBe('https://example.com/icon.png');
      expect(wrapper.props('iconSize')).toBe(60);
      expect(wrapper.props('iconBackgroundColor')).toBe('#FF0000');
      expect(wrapper.props('iconBorderRadius')).toBe(8);
    });
  });

  describe('QR Code 内容变化测试', () => {
    test('modelValue 变化时组件是否正确更新', async () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Initial Content'
        }
      });

      await wrapper.setProps({ modelValue: 'Updated Content' });
      await nextTick();

      expect(wrapper.props('modelValue')).toBe('Updated Content');
    });

    test('空内容是否正确处理', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: ''
        }
      });
      expect(wrapper.exists()).toBe(true);
    });

    test('特殊字符内容是否正确处理', () => {
      const specialContent = "特殊字符：!@#$%^&*()_+{}|:<>?[]\\;',./";
      const wrapper = mount(QrCode, {
        props: {
          modelValue: specialContent
        }
      });
      expect(wrapper.exists()).toBe(true);
    });

    test('长文本内容是否正确处理', () => {
      const longContent = 'A'.repeat(1000);
      const wrapper = mount(QrCode, {
        props: {
          modelValue: longContent
        }
      });
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('QR Code 响应式更新测试', () => {
    test('尺寸变化时是否正确重新渲染', async () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test QR Code',
          size: 100
        }
      });

      let canvas = wrapper.find('canvas');
      expect(canvas.attributes('style')).toContain('width: 100px');

      await wrapper.setProps({ size: 150 });
      await nextTick();

      canvas = wrapper.find('canvas');
      expect(canvas.attributes('style')).toContain('width: 150px');
    });

    test('类型切换时是否正确切换渲染方式', async () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test QR Code',
          type: 'canvas'
        }
      });

      expect(wrapper.find('canvas').exists()).toBe(true);
      expect(wrapper.find('svg').exists()).toBe(false);

      await wrapper.setProps({ type: 'svg' });
      await nextTick();

      expect(wrapper.find('svg').exists()).toBe(true);
      expect(wrapper.find('canvas').exists()).toBe(false);
    });
  });

  describe('QR Code SVG 特定测试', () => {
    test('SVG 模式下 viewBox 是否正确设置', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test QR Code',
          type: 'svg'
        }
      });
      const svg = wrapper.find('svg');
      expect(svg.attributes('viewBox')).toBeDefined();
      expect(svg.attributes('role')).toBe('img');
    });

    test('SVG 模式下尺寸属性是否正确设置', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test QR Code',
          type: 'svg',
          size: 200
        }
      });
      const svg = wrapper.find('svg');
      expect(svg.attributes('height')).toBe('200');
      expect(svg.attributes('width')).toBe('200');
    });
  });

  describe('QR Code 边界情况测试', () => {
    test('极小的尺寸是否正确处理', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test',
          size: 1
        }
      });
      expect(wrapper.exists()).toBe(true);
    });

    test('极大的尺寸是否正确处理', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test',
          size: 10000
        }
      });
      expect(wrapper.exists()).toBe(true);
    });

    test('负数尺寸是否正确处理', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Test',
          size: -100
        }
      });
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('QR Code 组合测试', () => {
    test('所有属性组合使用是否正确', () => {
      const wrapper = mount(QrCode, {
        props: {
          modelValue: 'Complex QR Code',
          type: 'svg',
          size: 300,
          color: '#FF0000',
          backgroundColor: '#000000',
          padding: 20,
          errorCorrectionLevel: 'H',
          iconSrc: 'https://example.com/icon.png',
          iconSize: 80,
          iconBackgroundColor: '#00FF00',
          iconBorderRadius: 10
        }
      });

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('svg').exists()).toBe(true);

      const svg = wrapper.find('svg');
      expect(svg.attributes('height')).toBe('300');
      expect(svg.attributes('width')).toBe('300');

      const container = wrapper.find('.s-qr-code');
      expect(container.attributes('style')).toContain(
        'background-color: #000000'
      );
      expect(container.attributes('style')).toContain('padding: 20px');
    });
  });
});
