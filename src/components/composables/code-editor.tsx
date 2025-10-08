import {
  defineComponent,
  useTemplateRef,
  ref,
  onMounted,
  onUnmounted,
  watch,
  Ref,
  toRefs,
  nextTick
} from 'vue';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/lib/codemirror.js';
// import 'codemirror/addon/dialog/dialog.js';
// JSON错误提示样式（可选）
import 'codemirror/addon/lint/lint.css';

// 2. 引入 minimap 插件的 JS 和 CSS
import 'codemirror-minimap/src/minimap.js';
import 'codemirror-minimap/src/minimap.css';
// 折叠核心逻辑
import 'codemirror/addon/fold/foldcode.js';
// 折叠图标区域（Gutter）
import 'codemirror/addon/fold/foldgutter.js';
// 语言特定折叠规则
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/fold/xml-fold.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/markdown-fold.js';


// // 引入语言模式
import "jshint/dist/jshint.js"
import 'codemirror/mode/apl/apl.js';
import 'codemirror/mode/asciiarmor/asciiarmor.js';
import 'codemirror/mode/asn.1/asn.1.js';
import 'codemirror/mode/asterisk/asterisk.js';
import 'codemirror/mode/brainfuck/brainfuck.js';
import 'codemirror/mode/clike/clike.js';
import 'codemirror/mode/clojure/clojure.js';
import 'codemirror/mode/cmake/cmake.js';
import 'codemirror/mode/cobol/cobol.js';
import 'codemirror/mode/coffeescript/coffeescript.js';
import 'codemirror/mode/commonlisp/commonlisp.js';
import 'codemirror/mode/crystal/crystal.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/cypher/cypher.js';
import 'codemirror/mode/d/d.js';
import 'codemirror/mode/dart/dart.js';
import 'codemirror/mode/diff/diff.js';
import 'codemirror/mode/django/django.js';
import 'codemirror/mode/dockerfile/dockerfile.js';
import 'codemirror/mode/dtd/dtd.js';
import 'codemirror/mode/dylan/dylan.js';
import 'codemirror/mode/ebnf/ebnf.js';
import 'codemirror/mode/ecl/ecl.js';
import 'codemirror/mode/eiffel/eiffel.js';
import 'codemirror/mode/elm/elm.js';
import 'codemirror/mode/erlang/erlang.js';
import 'codemirror/mode/factor/factor.js';
import 'codemirror/mode/fcl/fcl.js';
import 'codemirror/mode/forth/forth.js';
import 'codemirror/mode/fortran/fortran.js';
import 'codemirror/mode/gas/gas.js';
import 'codemirror/mode/gfm/gfm.js';
import 'codemirror/mode/gherkin/gherkin.js';
import 'codemirror/mode/go/go.js';
import 'codemirror/mode/groovy/groovy.js';
import 'codemirror/mode/haml/haml.js';
import 'codemirror/mode/handlebars/handlebars.js';
import 'codemirror/mode/haskell/haskell.js';
import 'codemirror/mode/haskell-literate/haskell-literate.js';
import 'codemirror/mode/haxe/haxe.js';
import 'codemirror/mode/htmlembedded/htmlembedded.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/http/http.js';
import 'codemirror/mode/idl/idl.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/jinja2/jinja2.js';
import 'codemirror/mode/jsx/jsx.js';
import 'codemirror/mode/julia/julia.js';
import 'codemirror/mode/livescript/livescript.js';
import 'codemirror/mode/lua/lua.js';
import 'codemirror/mode/markdown/markdown.js';
import 'codemirror/mode/mathematica/mathematica.js';
import 'codemirror/mode/mbox/mbox.js';
import 'codemirror/mode/mirc/mirc.js';
import 'codemirror/mode/mllike/mllike.js';
import 'codemirror/mode/modelica/modelica.js';
import 'codemirror/mode/mscgen/mscgen.js';
import 'codemirror/mode/mumps/mumps.js';
import 'codemirror/mode/nginx/nginx.js';
import 'codemirror/mode/nsis/nsis.js';
import 'codemirror/mode/ntriples/ntriples.js';
import 'codemirror/mode/octave/octave.js';
import 'codemirror/mode/oz/oz.js';
import 'codemirror/mode/pascal/pascal.js';
import 'codemirror/mode/pegjs/pegjs.js';
import 'codemirror/mode/perl/perl.js';
import 'codemirror/mode/php/php.js';
import 'codemirror/mode/pig/pig.js';
import 'codemirror/mode/powershell/powershell.js';
import 'codemirror/mode/properties/properties.js';
import 'codemirror/mode/protobuf/protobuf.js';
import 'codemirror/mode/pug/pug.js';
import 'codemirror/mode/puppet/puppet.js';
import 'codemirror/mode/python/python.js';
import 'codemirror/mode/q/q.js';
import 'codemirror/mode/r/r.js';
import 'codemirror/mode/rpm/rpm.js';
import 'codemirror/mode/rst/rst.js';
import 'codemirror/mode/ruby/ruby.js';
import 'codemirror/mode/rust/rust.js';
import 'codemirror/mode/sas/sas.js';
import 'codemirror/mode/sass/sass.js';
import 'codemirror/mode/scheme/scheme.js';
import 'codemirror/mode/shell/shell.js';
import 'codemirror/mode/sieve/sieve.js';
import 'codemirror/mode/slim/slim.js';
import 'codemirror/mode/smalltalk/smalltalk.js';
import 'codemirror/mode/smarty/smarty.js';
import 'codemirror/mode/solr/solr.js';
import 'codemirror/mode/soy/soy.js';
import 'codemirror/mode/sparql/sparql.js';
import 'codemirror/mode/spreadsheet/spreadsheet.js';
import 'codemirror/mode/sql/sql.js';
import 'codemirror/mode/stex/stex.js';
import 'codemirror/mode/stylus/stylus.js';
import 'codemirror/mode/swift/swift.js';
import 'codemirror/mode/tcl/tcl.js';
import 'codemirror/mode/textile/textile.js';
import 'codemirror/mode/tiddlywiki/tiddlywiki.js';
import 'codemirror/mode/tiki/tiki.js';
import 'codemirror/mode/toml/toml.js';
import 'codemirror/mode/tornado/tornado.js';
import 'codemirror/mode/troff/troff.js';
import 'codemirror/mode/ttcn/ttcn.js';
import 'codemirror/mode/ttcn-cfg/ttcn-cfg.js';
import 'codemirror/mode/turtle/turtle.js';
import 'codemirror/mode/twig/twig.js';
import 'codemirror/mode/vb/vb.js';
import 'codemirror/mode/vbscript/vbscript.js';
import 'codemirror/mode/velocity/velocity.js';
import 'codemirror/mode/verilog/verilog.js';
import 'codemirror/mode/vhdl/vhdl.js';
import 'codemirror/mode/vue/vue.js';
import 'codemirror/mode/wast/wast.js';
import 'codemirror/mode/webidl/webidl.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/xquery/xquery.js';
import 'codemirror/mode/yacas/yacas.js';
import 'codemirror/mode/yaml/yaml.js';
import 'codemirror/mode/yaml-frontmatter/yaml-frontmatter.js';
import 'codemirror/mode/z80/z80.js';
// 引入主题
import 'codemirror/theme/3024-day.css';
import 'codemirror/theme/3024-night.css';
import 'codemirror/theme/abbott.css';
import 'codemirror/theme/abcdef.css';
import 'codemirror/theme/ambiance-mobile.css';
import 'codemirror/theme/ambiance.css';
import 'codemirror/theme/ayu-dark.css';
import 'codemirror/theme/ayu-mirage.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/theme/base16-light.css';
import 'codemirror/theme/bespin.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/theme/cobalt.css';
import 'codemirror/theme/colorforth.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/duotone-dark.css';
import 'codemirror/theme/duotone-light.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/elegant.css';
import 'codemirror/theme/erlang-dark.css';
import 'codemirror/theme/gruvbox-dark.css';
import 'codemirror/theme/hopscotch.css';
import 'codemirror/theme/icecoder.css';
import 'codemirror/theme/idea.css';
import 'codemirror/theme/isotope.css';
import 'codemirror/theme/juejin.css';
import 'codemirror/theme/lesser-dark.css';
import 'codemirror/theme/liquibyte.css';
import 'codemirror/theme/lucario.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/theme/material-ocean.css';
import 'codemirror/theme/material-palenight.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/mbo.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/midnight.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/moxer.css';
import 'codemirror/theme/neat.css';
import 'codemirror/theme/neo.css';
import 'codemirror/theme/night.css';
import 'codemirror/theme/nord.css';
import 'codemirror/theme/oceanic-next.css';
import 'codemirror/theme/panda-syntax.css';
import 'codemirror/theme/paraiso-dark.css';
import 'codemirror/theme/paraiso-light.css';
import 'codemirror/theme/pastel-on-dark.css';
import 'codemirror/theme/railscasts.css';
import 'codemirror/theme/rubyblue.css';
import 'codemirror/theme/seti.css';
import 'codemirror/theme/shadowfox.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/ssms.css';
import 'codemirror/theme/the-matrix.css';
import 'codemirror/theme/tomorrow-night-bright.css';
import 'codemirror/theme/tomorrow-night-eighties.css';
import 'codemirror/theme/ttcn.css';
import 'codemirror/theme/twilight.css';
import 'codemirror/theme/vibrant-ink.css';
import 'codemirror/theme/xq-dark.css';
import 'codemirror/theme/xq-light.css';
import 'codemirror/theme/yeti.css';
import 'codemirror/theme/yonce.css';
import 'codemirror/theme/zenburn.css';
//语法错误提示（可选，需配合 lint 插件）
import "codemirror/addon/lint/json-lint.js"
import "codemirror/addon/lint/css-lint.js"
import "codemirror/addon/lint/lint.css"
// import "codemirror/addon/lint/html-lint.js"
import "codemirror/addon/lint/coffeescript-lint.js"
import "codemirror/addon/lint/javascript-lint.js"
import "codemirror/addon/lint/yaml-lint.js"
//代码提示（自动补全）功能
import "codemirror/addon/hint/show-hint.css"
import "codemirror/addon/hint/show-hint.js"
import "codemirror/addon/hint/anyword-hint.js"
import "codemirror/addon/hint/css-hint.js"
import "codemirror/addon/hint/html-hint.js"
import "codemirror/addon/hint/javascript-hint.js"
import "codemirror/addon/hint/sql-hint.js"
import "codemirror/addon/hint/xml-hint.js"
// 引入样式文件
import './code-editor.scss';
import { codeEditorProps, CodeEditorProps } from './code-editor-type';

export default defineComponent({
  name: 'CodeEditor',
  props: codeEditorProps,
  setup(props: CodeEditorProps) {
    const { modelValue, theme, language, width, height, minimap } =
      toRefs(props);
    // 编辑器实例
    const editor: Ref<CodeMirror.Editor | null> = ref(null);
    const editorRef = useTemplateRef<HTMLDivElement>('editorRef');
    const contextMenu = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      editor.value = CodeMirror(editorRef.value!, {
        value: modelValue.value, // 初始值
        theme: theme.value, // 主题
        mode: language.value, // 语言模式
        lineWrapping: true,
        indentUnit: 2,
        smartIndent: true,
        autofocus: true,
        lineNumbers: true, // 显示行号
        foldGutter: true, // 启用折叠图标区域
        gutters: [
          'CodeMirror-linenumbers', // 行号区域
          'CodeMirror-foldgutter' // 折叠图标区域（必须添加）
        ],
        minimap: {
          enabled: true, //是否启用小地图
          // width: '100px', // 小地图宽度（px）
          // /** 小地图高度（px） */
          // /** 小地图高度 */
          // height?: string | number;
          // /** 内容缩放比例 */
          scale: 300
          // /** 是否跟随光标 */
          // followCursor?: boolean;
          // /** 是否显示滑块 */
          // showSlider?: boolean;
          // /** 视图区域颜色 */
          // viewportColor?: string;
          // /** 背景颜色 */
          // backgroundColor?: string;
          // /** 与右侧距离（px） */
          // offset?: number;
        }
      });
      // 监听编辑器内容变化
      editor.value.on('change', instance => {
        modelValue.value = instance.getValue();
      });
    });
    watch(theme, () => {
      editor.value!.setOption('theme', theme.value);
    });
    watch(
      modelValue,
      async newValue => {
        // 1. 确保编辑器实例已初始化（直接检查 editor.value）
        if (!editor.value) return;

        // 2. 处理空值：避免传入 null/undefined 导致解析错误
        const safeValue = newValue ?? '';

        // 3. 确保 DOM 稳定（nextTick 等待渲染完成）
        await nextTick();

        // 4. 避免不必要的更新（对比当前值）
        const currentValue = editor.value.getValue();
        if (currentValue === safeValue) return;

        // 5. 临时切换为纯文本模式，避免语法高亮解析冲突
        const originalMode = editor.value.getOption('mode');
        editor.value.setOption('mode', 'text/plain');

        // 6. 更新编辑器内容（直接调用 editor.value.setValue）
        editor.value.setValue(safeValue);

        // 7. 延迟恢复原模式，避免同步执行导致的状态异常
        setTimeout(() => {
          if (editor.value) {
            editor.value.setOption('mode', originalMode);
          }
        }, 0);
      },
      { immediate: false, deep: false }
    );
    watch(
      () => language.value,
      newMode => {
        if (editor.value) {
          // 使用setOption更新模式
          editor.value.setOption('mode', newMode);
        }
      }
    );
    return () => (
      <div
        class="s-code-editor"
        ref="editorRef"
        style={{
          width: width.value,
          height: height.value
        }}
      ></div>
    );
  }
});
