import { defineComponent } from 'vue';
import { NotificationProps, notificationProps } from './notification-type';

export default defineComponent({
  name: 'SNotification',
  props: notificationProps,
  setup(_props: NotificationProps) {
    console.log(_props);
    return () => <div class="s-notification">notification</div>;
  }
});
