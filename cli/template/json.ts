import { ComponentMeta } from '../shared/create-component';
import { toPascalCase } from './utils';

export const genJsonTemplate = (meta: ComponentMeta) => {
  return `{
    "title": "${toPascalCase(meta.name)} ${meta.title}",
    "category": "${meta.category}",
    "link": "/components/${meta.name}/"
}`;
};
