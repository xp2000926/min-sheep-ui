type ExtractProps<S, P extends keyof S> = {
  [K in P]: S[K];
};
interface A {
  a1: string;
  b1: string;
  class: string;
  label: string | ((data, node) => string);
  children: string;
}

interface B extends ExtractProps<A, 'a1' | 'b1' | 'class' | 'children'> {
  b2: number;
  c1: string;
}

interface IBNode extends B, ExtractProps<A, 'label'> {
  parentId?: string | number; // 父节点ID
  level: number; // 节点层级
}

// 使用示例
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const exampleB: B = {
  a1: 'a1值',
  b1: 'b1值',
  class: '样式类',
  children: '子节点',
  b2: 123,
  c1: '测试'
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const exampleIBNode: IBNode = {
  a1: 'a1值',
  b1: 'b1值',
  class: '样式类',
  children: '子节点',
  b2: 456,
  c1: '另一个测试',
  parentId: 'p1',
  level: 1,
  label: '节点标签'
  // 也可以使用函数作为label
  // label: (data, node) => `标签: ${data.id}`
};
