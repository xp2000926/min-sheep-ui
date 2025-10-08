import { defineComponent, toRefs } from 'vue';
import { ResultProps, resultProps } from './result-type';
import { InfoIcon, ErrorIcon, SuccessIcon, WarningIcon } from './svg';

export default defineComponent({
  name: 'SResult',
  props: resultProps,
  setup(props: ResultProps, { slots }) {
    const { icon, title, subTitle } = toRefs(props);
    return () => (
      <div class="s-result">
        <div className="el-result__icon">
          {slots.icon ? (
            slots.icon()
          ) : icon.value == 'primary' ? (
            <InfoIcon className={`icon-${icon.value}`} />
          ) : icon.value == 'success' ? (
            <SuccessIcon className={`icon-${icon.value}`} />
          ) : icon.value == 'error' ? (
            <ErrorIcon className={`icon-${icon.value}`} />
          ) : icon.value == 'warning' ? (
            <WarningIcon className={`icon-${icon.value}`} />
          ) : (
            <InfoIcon className={`icon-${icon.value}`} />
          )}
        </div>
        <div className="el-result__title">{title.value}</div>
        <div className="el-result__subtitle">{subTitle.value}</div>
        <div className="el-result__extra">
          {slots.extra ? slots.extra() : ''}
        </div>
      </div>
    );
  }
});
