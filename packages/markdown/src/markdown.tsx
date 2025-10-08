import { defineComponent } from 'vue';
import { MarkdownProps, markdownProps } from './markdown-type';

export default defineComponent({
  name: 'SMarkdown',
  props: markdownProps,
  setup(props: MarkdownProps) {
    return () => <div class="s-markdown">markdown</div>;
  }
});
