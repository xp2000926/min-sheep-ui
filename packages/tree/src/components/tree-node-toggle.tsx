import { defineComponent } from 'vue';

export default defineComponent({
  name: 'STreeNodeToggle',
  props: {
    expanded: {
      type: Boolean,
      required: true
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    return () => (
      <svg
        style={{
          width: '18px',
          height: '18px',
          display: 'inline-block',
          transform: props.expanded ? 'rotate(90deg)' : ''
        }}
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        onClick={e => emit('click', e)}
      >
        <path fill="currentColor" d="M384 192v640l384-320.064z"></path>
      </svg>
    );
  }
});
