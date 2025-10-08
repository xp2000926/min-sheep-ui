import { mount } from '@vue/test-utils';
import { render } from '@testing-library/vue';
import Tree from '../src/tree';
import { generateInnerTree } from '../src/utils';
import { ITreeNode } from '../src/tree-type';

describe('tree 测试', () => {
  test('tree是否可以正常工作', async () => {
    const wrapper = mount(Tree);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
  describe('空状态测试', () => {
    it('默认空状态', () => {
      const { getByText } = render(Tree, {
        props: {
          data: []
        }
      });
      getByText('暂无数据');
    });
    it('emptyText', () => {
      const emptyText = '暂无数据1';
      const { getByText } = render(Tree, {
        props: {
          data: [],
          emptyText
        }
      });
      getByText(emptyText);
    });
    it('empty 槽口', () => {
      const emptyText = '暂无数据2';
      const { getByText } = render(Tree, {
        props: {
          data: []
        },
        slots: {
          empty() {
            return emptyText;
          }
        }
      });
      getByText(emptyText);
    });
  });
  describe('tree utils 测试', () => {
    test('utils是否可以正常工作', async () => {
      const tree = [
        {
          label: 'docs',
          id: 'docs'
        },
        {
          label: 'packages',
          id: 'packages',
          expanded: true,
          children: [
            {
              label: 'plugin-vue',
              id: 'plugin-vue'
            },
            {
              label: 'vite',
              id: 'vite',
              expanded: true,
              children: [
                {
                  label: 'src',
                  id: 'src'
                },
                {
                  label: 'README.md',
                  id: 'README.md'
                }
              ]
            }
          ]
        },
        {
          label: 'scripts',
          id: 'scripts',
          children: [
            {
              label: 'release.ts',
              id: 'release.ts'
            },
            {
              label: 'verifyCommit.ts',
              id: 'verifyCommit.ts'
            }
          ]
        },
        {
          label: 'pnpm-workspace.yaml',
          id: 'pnpm-workspace.yaml'
        }
      ] as ITreeNode[];
      expect(
        generateInnerTree(
          tree,
          {
            label: 'label',
            children: 'children',
            disabled: false,
            isLeaf: false,
            class: ''
          },
          false
        )
      ).toStrictEqual([
        { label: 'docs', id: 'docs', level: 1, isLeaf: true },
        { label: 'packages', id: 'packages', expanded: true, level: 1 },
        {
          label: 'plugin-vue',
          id: 'plugin-vue',
          level: 2,
          parentId: 'packages',
          isLeaf: true
        },
        {
          label: 'vite',
          id: 'vite',
          expanded: true,
          level: 2,
          parentId: 'packages'
        },
        { label: 'src', id: 'src', level: 3, parentId: 'vite', isLeaf: true },
        {
          label: 'README.md',
          id: 'README.md',
          level: 3,
          parentId: 'vite',
          isLeaf: true
        },
        { label: 'scripts', id: 'scripts', level: 1, parentId: 'vite' },
        {
          label: 'release.ts',
          id: 'release.ts',
          level: 2,
          parentId: 'scripts',
          isLeaf: true
        },
        {
          label: 'verifyCommit.ts',
          id: 'verifyCommit.ts',
          level: 2,
          parentId: 'scripts',
          isLeaf: true
        },
        {
          label: 'pnpm-workspace.yaml',
          id: 'pnpm-workspace.yaml',
          level: 1,
          parentId: 'scripts',
          isLeaf: true
        }
      ]);
      expect(
        generateInnerTree(
          tree,
          {
            label: 'label',
            children: 'children',
            disabled: false,
            isLeaf: false,
            class: ''
          },
          true
        )
      ).toStrictEqual([
        { label: 'docs', id: 'docs', level: 1, isLeaf: true },
        { label: 'packages', id: 'packages', expanded: true, level: 1 },
        {
          label: 'plugin-vue',
          id: 'plugin-vue',
          level: 2,
          parentId: 'packages',
          isLeaf: true
        },
        {
          label: 'vite',
          id: 'vite',
          expanded: true,
          level: 2,
          parentId: 'packages'
        },
        { label: 'src', id: 'src', level: 3, parentId: 'vite', isLeaf: true },
        {
          label: 'README.md',
          id: 'README.md',
          level: 3,
          parentId: 'vite',
          isLeaf: true
        },
        {
          label: 'scripts',
          id: 'scripts',
          level: 1,
          parentId: 'vite',
          expanded: true
        },
        {
          label: 'release.ts',
          id: 'release.ts',
          level: 2,
          parentId: 'scripts',
          isLeaf: true
        },
        {
          label: 'verifyCommit.ts',
          id: 'verifyCommit.ts',
          level: 2,
          parentId: 'scripts',
          isLeaf: true
        },
        {
          label: 'pnpm-workspace.yaml',
          id: 'pnpm-workspace.yaml',
          level: 1,
          parentId: 'scripts',
          isLeaf: true
        }
      ]);
    });
  });
});
