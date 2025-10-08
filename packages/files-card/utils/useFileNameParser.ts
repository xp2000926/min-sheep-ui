import type { Ref } from 'vue';
import { computed } from 'vue';

export default function useFileNameParser(name: Ref<string | undefined>) {
  const namePrefix = computed(() => {
    const nameStr = name.value || '';
    const lastDotIndex = nameStr.lastIndexOf('.');
    return lastDotIndex === -1 ? nameStr : nameStr.slice(0, lastDotIndex);
  });

  const nameSuffix = computed(() => {
    const nameStr = name.value || '';
    const lastDotIndex = nameStr.lastIndexOf('.');
    if (lastDotIndex === -1 && nameStr.length - lastDotIndex > 10) {
      // 文件名长度超过10个字符 显示.file
      return '.file';
    }
    return lastDotIndex === -1 ? '' : nameStr.slice(lastDotIndex);
  });

  return {
    namePrefix,
    nameSuffix
  };
}
