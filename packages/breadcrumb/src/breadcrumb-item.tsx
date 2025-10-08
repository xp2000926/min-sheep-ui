import { defineComponent, inject } from 'vue';
import {
  breadcrumbItemProps,
  BreadcrumbItemProps
} from './breadcrumb-item-type';
import classnames from 'classnames';
import { Icon } from '../../icon';

export default defineComponent({
  name: 'SBreadcrumbItem',
  props: breadcrumbItemProps,
  setup(_props: BreadcrumbItemProps, { slots }) {
    const breadcrumbInfo = inject<{
      separatorClass: string;
      finally: string;
      isIcon: boolean;
    }>('breadcrumbInfo');
    console.log(breadcrumbInfo, slots.default?.()[0].children);
    return () => (
      <span class="s-breadcrumb-item float-left">
        <span class="s-breadcrumb__inner">{slots.default?.()}</span>
        {breadcrumbInfo.finally != slots.default?.()[0].children && (
          <span
            class={classnames(
              's-breadcrumb__separator',
              breadcrumbInfo.separatorClass
            )}
          >
            {breadcrumbInfo.isIcon ? (
              <Icon name={breadcrumbInfo.separator} />
            ) : (
              breadcrumbInfo.separator
            )}
          </span>
        )}
      </span>
    );
  }
});
