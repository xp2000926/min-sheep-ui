import { defineComponent } from 'vue';
import { DescriptionsProps, descriptionsProps } from './descriptions-type';

export default defineComponent({
  name: 'SDescriptions',
  props: descriptionsProps,
  setup(props: DescriptionsProps) {
    console.log('props', props);
    return () => <div class="s-descriptions">descriptions</div>;
  }
});
