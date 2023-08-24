// 1.函数式组件
// export default () => <div>Test</div>;

// 2.defineComponent
// import { defineComponent } from 'vue';
// export default defineComponent({
//   render() {
//     return <div>Test</div>;
//   }
// });

// 3.defineComponent(setup(){})
// 摒弃this 对于ts 支持最好
// 借助 babel-plugin-jsx
// vue独特概念：修饰符 slot directive  emit
import { defineComponent, ref, withModifiers } from 'vue';
export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { slots, emit }) {
    // 响应式数据 count
    const count = ref(0);
    const inc = () => {
      count.value++;
      emit('click');
    };
    const list = ref<string[]>(['a', 'b', 'c', 'd']);
    return () => {
      // eslint-disable-next-line no-constant-condition
      const span = true ? <span>A</span> : <span>B</span>;
      return (
        <div
          onClick={
            withModifiers(inc, ['self']) /* 在vue 相当于 @click.self="inc"  */
          }
        >
          Test：{count.value}
          <input
            //          值
            // v-focus={[val, 'abc', ['modififer']]}
            v-focus
            type="text"
            v-model={count.value}
          />
          <div>{span}</div>
          <ul>
            {list.value.map(str => (
              <li key={str}>{str}</li>
            ))}
          </ul>
          {/* 默认插槽内容 */}
          <div>{slots.default ? slots.default() : 'default content'}</div>
          <div>{slots.title ? slots.title() : 'title slots content'}</div>
          {/* <Test v-slot={{
            title: () => <h3>title</h3>
          }}>abc</Test> */}
        </div>
      );
    };
  }
});
