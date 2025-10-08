import { defineComponent, toRefs } from 'vue';
import { AvatarProps, avatarProps } from './avatar-type';
import classnames from 'classnames';
import { Icon } from '../../icon';

export default defineComponent({
  name: 'SAvatar',
  props: avatarProps,
  emits: ['error'],
  setup(props: AvatarProps, { slots, emit }) {
    const { src, size, shape, alt, icon, fit, fallbackSrc } = toRefs(props);
    // const imgRef = useTemplateRef<HTMLImageElement>('imgRef');
    const onError = e => {
      if (fallbackSrc.value !== '') {
        const target = e.target || e.srcElement;
        target.src = fallbackSrc.value;
      } else {
        emit('error', e);
      }
    };
    return () => (
      <span
        class={classnames('s-avatar', {
          [`s-avatar--${shape.value}`]: true,
          [`s-avatar--${size.value}`]:
            size.value == '' ||
            size.value == 'default' ||
            typeof size.value == 'number'
              ? false
              : true
        })}
        style={
          typeof size.value == 'number'
            ? {
                width: `${size.value}px`,
                height: `${size.value}px`,
                lineHeight: `${size.value}px`
              }
            : {}
        }
      >
        {slots.default ? (
          slots.default()
        ) : icon.value != '' ? (
          <Icon name={icon.value} />
        ) : (
          <img
            src={src.value}
            alt={alt.value}
            style={fit.value != '' ? { objectFit: fit.value } : null}
            onError={onError}
          />
        )}
      </span>
    );
  }
});
