import { ComponentMeta } from '../shared/create-component';
import { toPascalCase } from './utils';

export const genMdTemplate = (meta: ComponentMeta) => {
  return `# ${toPascalCase(meta.name)} ${meta.title}
`;
};
