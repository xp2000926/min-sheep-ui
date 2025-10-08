import {
  defineComponent,
  toRefs,
  SetupContext,
  computed,
  Transition
} from 'vue';
import { AlertProps, alertProps } from './alert-type';
import { useNamespace } from '@min-sheep-ui/hooks';
// import { isUndefined } from '@min-sheep-ui/utils';

export default defineComponent({
  name: 'SAlert',
  props: alertProps,
  // emits: ['open', 'close'],
  setup(props: AlertProps, { slots }: SetupContext) {
    const { type, effect, title, description, center } = toRefs(props);
    const ns = useNamespace('alert');
    const hasDesc = computed(() => !!(props.description || slots.default));
    // const visible = ref(isUndefined(props.showAfter));

    // const open = () => {
    //   visible.value = true;
    //   emit('open');
    // };
    // const close = (event?: Event) => {
    //   visible.value = false;
    //   emit('close', event);
    // };

    return () => (
      <Transition name={ns.b('fade')}>
        <div
          class={[
            ns.b(),
            ns.m(type.value),
            ns.is('center', center.value),
            ns.is(effect.value)
          ]}
        >
          {/* {showIcon?
        <el-icon
        v-if="showIcon && ($slots.icon || iconComponent)"
        :class="[ns.e('icon'), { [ns.is('big')]: hasDesc }]"
      >
        <slot name="icon">
          <component :is="iconComponent" />
        </slot>
      </el-icon>
        :null} */}
          <div class={ns.e('content')}>
            {title.value || slots.title ? (
              <span
                class={[ns.e('title'), { 'with-description': hasDesc.value }]}
              >
                {slots.title?.() ? slots.title() : title.value}
              </span>
            ) : null}
            {hasDesc.value ? (
              <p class={ns.e('description')}>{description.value}</p>
            ) : null}
          </div>
          {/*
        <template v-if="closable">
          <div
            v-if="closeText"
            :class="[ns.e('close-btn'), ns.is('customed')]"
            @click="close"
          >
            {{ closeText }}
          </div>
          <el-icon v-else :class="ns.e('close-btn')" @click="onClose">
            <Close />
          </el-icon>
        </template>
        */}
        </div>
      </Transition>
    );
  }
});
