import { defineComponent } from 'vue';
import { TriggerProps, triggerProps } from './trigger-type';

export default defineComponent({
  name: 'STrigger',
  props: triggerProps,
  setup(_props: TriggerProps) {
    console.log(_props);
    return () => <div class="s-trigger">trigger</div>;
  }
});
