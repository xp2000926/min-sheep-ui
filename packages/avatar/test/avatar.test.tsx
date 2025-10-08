import { mount } from '@vue/test-utils';
// import { render } from '@testing-library/vue';
import Avatar from '../src/avatar';
import AvatarGroup from '../src/avatar-group';

describe('avatar 测试', () => {
  test('avatar是否可以正常工作', () => {
    const wrapper = mount(Avatar);
    expect(wrapper.element.nodeName).toBe('SPAN');
    expect(wrapper.classes()).toContain('s-avatar');
  });
  it('默认槽口否可以正常工作', () => {
    const wrapper = mount(Avatar, {
      slots: {
        default: 'default'
      }
    });
    expect(wrapper.text()).toBe('default');
    expect(wrapper.find('img').exists()).toBe(false);
  });
  it('avatar style 测试', () => {
    const wrapper = mount(() => (
      <Avatar style={{ color: 'yellow', backgroundColor: 'red' }}>M</Avatar>
    ));
    expect(wrapper.text()).toBe('M');
    expect(wrapper.attributes('style')).toBe(
      'color: yellow; background-color: red;'
    );
  });
  describe('shape 是否可以正常工作', () => {
    test.each(['circle', 'square'])(
      '验证 Avatar 的s-avatar--%s的class是否正确添加',
      shape => {
        const wrapper = mount(Avatar, {
          props: {
            shape
          }
        });
        expect(wrapper.classes()).toContain(`s-avatar--${shape}`);
      }
    );
  });
  describe('size 是否可以正常工作', () => {
    it('当 size 类型为 number 时是否可以正常工作', () => {
      const size = 50;
      const wrapper = mount(Avatar, {
        props: {
          size
        }
      });
      expect(wrapper.attributes('style')).toContain(
        `width: ${size}px; height: ${size}px; line-height: ${size}px;`
      );
    });
    test.each(['large', 'small'])(
      '验证 Avatar 的 s-avatar--%s 的class是否正确添加',
      size => {
        const wrapper = mount(Avatar, {
          props: {
            size
          }
        });
        expect(wrapper.classes()).toContain(`s-avatar--${size}`);
      }
    );
    it('size default', () => {
      const wrapper = mount(Avatar, {
        props: {
          size: 'default'
        }
      });
      expect(wrapper.classes().includes('s-avatar--default')).toBe(false);
    });
  });
  it('avatar 的 src 槽口否可以正常工作', () => {
    const src =
      'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
    const wrapper = mount(Avatar, {
      props: {
        src
      }
    });
    expect(wrapper.find('img').attributes('src')).toBe(src);
  });
  describe('fit 是否可以正常工作', () => {
    const src =
      'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
    test.each(['fill', 'contain', 'cover', 'none', 'scale-down'])(
      '验证 Avatar 的 %s 是否正确添加',
      fit => {
        const wrapper = mount(Avatar, {
          props: {
            src,
            fit
          }
        });
        expect(wrapper.find('img').attributes('style')).toContain(
          `object-fit: ${fit}`
        );
      }
    );
  });
});
describe('avatar-group 测试', () => {
  test('avatar-group 是否可以正常工作', () => {
    const wrapper = mount(AvatarGroup);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
  it('avatar-group options 的 avatar 槽口否可以正常工作', () => {
    const options = [
      {
        color: '#7BC616',
        text: 'A'
      },
      {
        color: '#14C9C9',
        text: 'B'
      },
      {
        color: '#168CFF',
        text: 'C'
      },
      {
        color: '#FF7D00',
        text: 'D'
      },
      {
        color: '#FFC72E',
        text: 'E'
      }
    ];
    const wrapper = mount(AvatarGroup, {
      props: {
        options
      },
      slots: {
        avatar: ({ options }) => (
          <Avatar style={{ backgroundColor: options.color }}>
            {options.text}
          </Avatar>
        )
      }
    });
    expect(wrapper.element.childElementCount).toBe(options.length);
    // 验证每个子元素的样式和文本内容
    const avatars = wrapper.findAllComponents(Avatar);
    options.forEach((option, index) => {
      const avatar = avatars[index];
      expect(avatar.element.style.backgroundColor).toBe(option.color);
      expect(avatar.text()).toBe(option.text);
    });
  });
  it('avatar-group options 的 rest 槽口否可以正常工作', () => {
    const options = [
      {
        color: '#7BC616',
        text: 'A'
      },
      {
        color: '#14C9C9',
        text: 'B'
      },
      {
        color: '#168CFF',
        text: 'C'
      },
      {
        color: '#FF7D00',
        text: 'D'
      },
      {
        color: '#FFC72E',
        text: 'E'
      }
    ];
    const wrapper = mount(AvatarGroup, {
      props: {
        options,
        max: 3
      },
      slots: {
        avatar: ({ options }) => (
          <Avatar style={{ backgroundColor: options.color }}>
            {options.text}
          </Avatar>
        ),
        rest: ({ rest }) => <Avatar>+{rest}</Avatar>
      }
    });
    // 验证每个子元素的样式和文本内容
    const avatars = wrapper.findAllComponents(Avatar);
    expect(avatars.length).toBe(3);
    expect(avatars[2].text()).toBe('+3');
  });
});
