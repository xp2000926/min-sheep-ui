import { defineComponent } from 'vue';
import {
  configProviderProps,
  ConfigProviderProps
} from './config-provider-type';

export default defineComponent({
  name: 'SConfigProvider',
  props: configProviderProps,
  setup(props: ConfigProviderProps) {
    console.log(props);
    return () => <div class="s-config-provider">config-provider</div>;
  }
});
