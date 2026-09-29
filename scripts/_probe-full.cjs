// 临时探针：验证全量构建的 dts 产物，验证后删除
const path = require('path');
const { defineConfig, build } = require('vite');
const vue = require('@vitejs/plugin-vue');
const vueJsx = require('@vitejs/plugin-vue-jsx');
const { default: dts } = require('vite-plugin-dts');

const root = path.resolve(__dirname, '..');
const outDir = path.resolve(root, 'build/_probe/full');

(async () => {
  await build(
    defineConfig({
      configFile: false,
      publicDir: false,
      css: { preprocessorOptions: { scss: { api: 'modern-compiler' } } },
      plugins: [
        vue(),
        vueJsx(),
        dts({
          beforeWriteFile: (filePath, content) => {
            if (filePath.endsWith('min-sheep-ui.d.ts') || filePath.endsWith('entry.d.ts')) {
              console.log('WRITE:', filePath, '| len=', String(content).length);
            }
          },
          entryRoot: root,
          outDir,
          insertTypesEntry: true,
          copyDtsFiles: true,
          skipDiagnostics: true,
          tsconfigPath: path.resolve(root, 'tsconfig.lib.json')
        })
      ],
      build: {
        minify: false,
        sourcemap: false,
        rollupOptions: {
          external: ['vue', 'vue-router', 'monaco-editor', '@icon-park/svg'],
          output: { exports: 'named', globals: { vue: 'Vue' } }
        },
        lib: {
          entry: path.resolve(root, 'scripts/entry.ts'),
          name: 'min-sheep-ui',
          fileName: 'min-sheep-ui',
          formats: ['es']
        },
        outDir,
        emptyOutDir: true
      }
    })
  );
  console.log('PROBE FULL DONE');
})();
