import { computed, defineComponent, toRefs, h, ref } from 'vue';
import { FilesCardProps, filesCardProps } from './files-card-type';
import { getFileType, getSize } from '../utils';
import useFileNameParser from '../utils/useFileNameParser';
import { colorMap } from './options';
import svgIconMap from './fileSvg/index.ts';
import { ElImage, ElIcon, ElProgress } from 'element-plus';
// import { View, CircleCloseFilled } from '@element-plus/icons-vue';

export default defineComponent({
  name: 'SFilesCard',
  props: filesCardProps,
  emits: ['imagePreview', 'delete'],
  setup(props: FilesCardProps, { slots, emit }) {
    const { name, fileSize, fileType, imgVariant, description, url, thumbUrl } =
      toRefs(props);
    const { namePrefix, nameSuffix } = useFileNameParser(name);
    const isHovered = ref(false);
    const imageHovered = ref(false);
    const _previewImg = ref<string | undefined>(undefined);
    const imgRef = ref();

    const _fileType = computed(() => {
      if (fileType.value) return fileType.value;
      if (!name.value) return undefined;
      if (!nameSuffix.value) {
        return 'unknown';
      }
      return getFileType(nameSuffix.value).lowerCase;
    });
    const isImageFile = computed(() => _fileType.value === 'image');
    const isSquareVariant = computed(() => imgVariant.value === 'square');
    const _previewImgUrl = computed(() => {
      if (!isImageFile.value) return undefined;
      if (thumbUrl.value) return thumbUrl.value;
      if (url.value) return url.value;
      return _previewImg.value;
    });
    const _iconSize = computed(() => {
      if (
        (isSquareVariant.value && isImageFile.value && !props.iconSize) ||
        (isSquareVariant.value &&
          isImageFile.value &&
          props.iconSize === '42px')
      ) {
        return '64px';
      }
      return props.iconSize;
    });
    const _fileTypeUpperCase = computed(() => {
      if (fileType.value)
        return fileType.value.replace(/^\w/, match => match.toUpperCase());
      if (!name.value) return '';
      if (!nameSuffix.value) {
        return 'Unknown';
      }
      return getFileType(nameSuffix.value).upperCase;
    });
    const _description = computed(() => {
      if (description.value) {
        return description.value;
      }
      const typeStr = _fileTypeUpperCase.value;
      const sizeStr = fileSize.value ? `・${getSize(fileSize.value)}` : '';
      if (props.status === 'uploading') {
        return `上传中...${`・${props.percent || 0}`}%${sizeStr}`;
      }
      if (props.status === 'error') {
        return props.errorTip || '上传失败';
      }
      return `${typeStr}${sizeStr}`;
    });
    function handlePreviewAction(type: 'self' | 'mask') {
      if (
        props.imgPreview &&
        imgRef.value &&
        _previewImgUrl.value &&
        type === 'mask'
      ) {
        imgRef.value.showPreview();
      }
      if (type === 'self') {
        emit('imagePreview', { ...props });
      }
    }
    function handleDelete() {
      emit('delete', { ...props });
    }

    // 渲染上传进度条
    const renderProgressBar = () => {
      if (
        props.status === 'uploading' &&
        !(isSquareVariant.value && isImageFile.value)
      ) {
        return (
          <div
            class="s-files-card-progress"
            style={{ width: `${props.percent || 0}%` }}
          />
        );
      }
      return null;
    };

    // 渲染非图片文件图标
    const renderNonImageIcon = () => {
      if (!isImageFile.value && _fileType.value) {
        return h(svgIconMap[_fileType.value], {
          class: 's-files-card-icon',
          color: props.iconColor || colorMap[_fileType.value]
        });
      }
      return null;
    };

    // 渲染图片预览
    const renderImagePreview = () => {
      if (isImageFile.value && _previewImgUrl.value) {
        return 's-image';
        // return (
        // <ElImage
        //   ref={imgRef}
        //   class="s-files-card-img"
        //   src={_previewImgUrl.value}
        //   previewSrcList={props.imgPreview ? [_previewImgUrl.value] : []}
        //   fit="cover"
        //   showProgress={false}
        //   hideOnClickModal
        //   onShow={() => handlePreviewAction('self')}
        // />
        // );
      } else if (isImageFile.value && _fileType.value) {
        return h(svgIconMap[_fileType.value], {
          class: 's-files-card-icon',
          color: props.iconColor || colorMap[_fileType.value]
        });
      }
      return null;
    };

    // 渲染图片预览遮罩层
    const renderImagePreviewMask = () => {
      if (
        imageHovered.value &&
        _previewImgUrl.value &&
        props.imgPreviewMask &&
        props.imgPreview
      ) {
        if (slots['image-preview-actions']) {
          return slots['image-preview-actions']({
            item: {
              ...props,
              prefix: namePrefix.value,
              suffix: nameSuffix.value
            }
          });
        }
        return (
          <div class="preview-mask" onClick={() => handlePreviewAction('mask')}>
            {/* <ElIcon>
              <View />
            </ElIcon> */}
            <span>预览</span>
          </div>
        );
      }
      return null;
    };

    // 渲染图片状态显示
    const renderImageStatus = () => {
      if (props.status === 'uploading' && isSquareVariant.value) {
        return (
          <div class="preview-mask-loading">
            Progress
            {/* <ElProgress
              color="#fff"
              type="circle"
              percentage={props.percent}
              class="circle-progress"
            /> */}
          </div>
        );
      }

      if (props.status === 'error' && isSquareVariant.value) {
        return (
          <div class="preview-mask-error">
            <span class="error-text">{props.errorTip || '上传失败'}</span>
          </div>
        );
      }

      return null;
    };

    // 渲染图片文件处理区域
    const renderImageContainer = () => {
      if (isImageFile.value) {
        return (
          <div
            class={[
              'image-preview-container',
              {
                'image-preview-container-square':
                  isSquareVariant.value && isImageFile.value
              }
            ]}
            onMouseenter={() => (imageHovered.value = true)}
            onMouseleave={() => (imageHovered.value = false)}
          >
            {renderImagePreview()}
            {renderImagePreviewMask()}
            {renderImageStatus()}
          </div>
        );
      }
      return null;
    };

    // 渲染图标部分
    const renderIcon = () => {
      if (slots.icon) {
        return slots.icon({ item: props });
      }

      if (_fileType.value) {
        return (
          <>
            {renderNonImageIcon()}
            {renderImageContainer()}
          </>
        );
      }

      return null;
    };

    // 渲染文件名
    const renderFileName = () => {
      if (!props.name) return null;

      return (
        <div class="s-files-card-name">
          {slots['name-prefix'] ? (
            slots['name-prefix']({
              item: {
                ...props,
                prefix: namePrefix.value,
                suffix: nameSuffix.value
              }
            })
          ) : (
            <div class="s-files-card-name-prefix">{namePrefix.value}</div>
          )}

          {slots['name-suffix'] ? (
            slots['name-suffix']({
              item: {
                ...props,
                prefix: namePrefix.value,
                suffix: nameSuffix.value
              }
            })
          ) : (
            <div class="s-files-card-name-suffix">{nameSuffix.value}</div>
          )}
        </div>
      );
    };

    // 渲染描述信息
    const renderDescription = () => {
      if (slots.description) {
        return slots.description({
          item: {
            ...props,
            prefix: namePrefix.value,
            suffix: nameSuffix.value
          }
        });
      }

      return (
        <div
          class={[
            's-files-card-description',
            {
              's-files-card-description-error': props.status === 'error',
              's-files-card-description-done': props.status === 'done',
              's-files-card-description-uploading': props.status === 'uploading'
            }
          ]}
        >
          {_description.value}
        </div>
      );
    };

    // 渲染内容部分
    const renderContent = () => {
      if (slots.content) {
        return slots.content({ item: props });
      }

      if (props.name || description.value) {
        return (
          <div class="s-files-card-content">
            {renderFileName()}
            {renderDescription()}
          </div>
        );
      }

      return null;
    };

    // 渲染删除图标
    const renderDeleteIcon = () => {
      if (props.showDelIcon && isHovered.value) {
        return (
          <div class="s-files-card-delete-icon" onClick={handleDelete}>
            {slots['del-icon']
              ? slots['del-icon']({ item: props })
              : {
                  /*
              <ElIcon>
                <CircleCloseFilled />
              </ElIcon>
                */
                }}
          </div>
        );
      }
      return null;
    };

    return () => {
      // 容器样式处理
      const containerStyles = {
        '--s-files-card-icon-size': `${_iconSize.value}`,
        '--s-files-card-max-width': `${props.maxWidth}`,
        ...props.style,
        ...(isHovered.value && props.hoverStyle ? props.hoverStyle : {})
      };

      // 容器类名处理
      const containerClasses = [
        's-files-card',
        {
          's-files-card-square': isSquareVariant.value && isImageFile.value,
          's-files-card-hovered': isHovered.value,
          's-files-card-error': props.status === 'error',
          's-files-card-done': props.status === 'done',
          's-files-card-uploading': props.status === 'uploading'
        }
      ];

      return (
        <div
          style={containerStyles}
          class={containerClasses}
          onMouseenter={() => (isHovered.value = true)}
          onMouseleave={() => (isHovered.value = false)}
        >
          {renderProgressBar()}
          {renderIcon()}
          {!isSquareVariant.value || !isImageFile.value
            ? renderContent()
            : null}
          {renderDeleteIcon()}
        </div>
      );
    };
  }
});
