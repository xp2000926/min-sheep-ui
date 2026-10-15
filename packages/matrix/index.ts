import type { App } from 'vue';
import Matrix from './src/matrix';
import type {
  MatrixProps,
  MatrixCellPayload,
  MatrixLevel,
  MatrixLevelResolver,
  MatrixCellClass,
  MatrixAlign
} from './src/matrix-type';
import '../index.scss';
import './style/matrix.scss';

// 具名导出
export { Matrix };
export type {
  MatrixProps,
  MatrixCellPayload,
  MatrixLevel,
  MatrixLevelResolver,
  MatrixCellClass,
  MatrixAlign
};

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Matrix.name!, Matrix);
  }
};
