import{V as E,_ as A,c as D,a as C,w as b,b as n,d as a,e as w,r as B,o as q}from"./app.f1672658.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:t,createVNode:e,withCtx:l,openBlock:k,createElementBlock:f}=E;function d(u,p){const g=t("s-input"),r=t("s-form-item"),v=t("s-form");return k(),f("div",null,[e(v,{model:u.model},{default:l(()=>[e(r,{label:"\u7528\u6237\u540D"},{default:l(()=>[e(g,{modelValue:u.model.user,"onUpdate:modelValue":p[0]||(p[0]=i=>u.model.user=i)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])}const{ref:c}=E;return{render:d,...{setup(u,{expose:p}){p();const r={model:c({user:"tom"}),ref:c};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}}}(),"render-demo-1":function(){const{createElementVNode:t,vModelRadio:e,withDirectives:l,createTextVNode:k,resolveComponent:f,createVNode:d,withCtx:c,openBlock:F,createElementBlock:u}=E,p=t("span",null,"layout:",-1);function g(i,s){const o=f("s-input"),y=f("s-form-item"),_=f("s-form");return F(),u("div",null,[t("p",null,[p,t("label",null,[l(t("input",{type:"radio",value:"vertical","onUpdate:modelValue":s[0]||(s[0]=h=>i.layout=h)},null,512),[[e,i.layout]]),k(" vertical ")]),t("label",null,[l(t("input",{type:"radio",value:"horizontal","onUpdate:modelValue":s[1]||(s[1]=h=>i.layout=h)},null,512),[[e,i.layout]]),k(" horizontal ")])]),d(_,{model:i.model,layout:i.layout},{default:c(()=>[d(y,{label:"\u7528\u6237\u540D\uFF1A"},{default:c(()=>[d(o,{modelValue:i.model.user,"onUpdate:modelValue":s[2]||(s[2]=h=>i.model.user=h)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","layout"])])}const{ref:r}=E;return{render:g,...{setup(i,{expose:s}){s();const o=r("vertical"),y=r({user:"tom"}),_={layout:o,model:y,ref:r};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}}}(),"render-demo-2":function(){const{createElementVNode:t,vModelRadio:e,withDirectives:l,createTextVNode:k,resolveComponent:f,createVNode:d,withCtx:c,openBlock:F,createElementBlock:u}=E,p=t("span",null,"labelSize:",-1),g=t("span",null,"labelAlign:",-1);function r(s,o){const y=f("s-input"),_=f("s-form-item"),h=f("s-form");return F(),u("div",null,[t("p",null,[p,t("label",null,[l(t("input",{type:"radio",value:"sm","onUpdate:modelValue":o[0]||(o[0]=m=>s.labelSize=m)},null,512),[[e,s.labelSize]]),k(" sm ")]),t("label",null,[l(t("input",{type:"radio",value:"md","onUpdate:modelValue":o[1]||(o[1]=m=>s.labelSize=m)},null,512),[[e,s.labelSize]]),k(" md ")]),t("label",null,[l(t("input",{type:"radio",value:"lg","onUpdate:modelValue":o[2]||(o[2]=m=>s.labelSize=m)},null,512),[[e,s.labelSize]]),k(" lg ")])]),t("p",null,[g,t("label",null,[l(t("input",{type:"radio",value:"start","onUpdate:modelValue":o[3]||(o[3]=m=>s.labelAlign=m)},null,512),[[e,s.labelAlign]]),k(" start ")]),t("label",null,[l(t("input",{type:"radio",value:"center","onUpdate:modelValue":o[4]||(o[4]=m=>s.labelAlign=m)},null,512),[[e,s.labelAlign]]),k(" center ")]),t("label",null,[l(t("input",{type:"radio",value:"end","onUpdate:modelValue":o[5]||(o[5]=m=>s.labelAlign=m)},null,512),[[e,s.labelAlign]]),k(" end ")])]),d(h,{model:s.model,layout:"horizontal",labelAlign:s.labelAlign,labelSize:s.labelSize},{default:c(()=>[d(_,{label:"\u7528\u6237\u540D\uFF1A"},{default:c(()=>[d(y)]),_:1}),d(_,{label:"\u5BC6\u7801\uFF1A"},{default:c(()=>[d(y,{type:"password"})]),_:1})]),_:1},8,["model","labelAlign","labelSize"])])}const{ref:v}=E;return{render:r,...{setup(s,{expose:o}){o();const y=v({user:"tom",password:""}),_=v("md"),h=v("start"),m={model:y,labelSize:_,labelAlign:h,ref:v};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}}}(),"render-demo-3":function(){const{resolveComponent:t,createVNode:e,withCtx:l,openBlock:k,createElementBlock:f}=E;function d(u,p){const g=t("s-input"),r=t("s-form-item"),v=t("s-button"),i=t("s-form");return k(),f("div",null,[e(i,{model:u.model,rules:u.rules,layout:"vertical",onSubmit:u.onLogin,ref:"loginForm"},{default:l(()=>[e(r,{label:"\u7528\u6237\u540D\uFF1A",prop:"user"},{default:l(()=>[e(g,{modelValue:u.model.user,"onUpdate:modelValue":p[0]||(p[0]=s=>u.model.user=s)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5BC6\u7801\uFF1A",prop:"pwd"},{default:l(()=>[e(g,{type:"password",modelValue:u.model.pwd,"onUpdate:modelValue":p[1]||(p[1]=s=>u.model.pwd=s)},null,8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(v)]),_:1})]),_:1},8,["model","rules","onSubmit"])])}const{ref:c}=E;return{render:d,...{setup(u,{expose:p}){p();const g=c({user:"",pwd:""}),r=c({user:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}],pwd:[{required:!0,message:"\u5BC6\u7801\u4E3A\u5FC5\u586B\u9879"}]}),v=c(),s={model:g,rules:r,loginForm:v,onLogin:()=>{v.value.validate(o=>{alert(o?"\u767B\u5F55\u6210\u529F":"\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01")})},ref:c};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}}}()}},Q=JSON.parse('{"title":"\u8868\u5355 Form","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u6C34\u5E73/\u5782\u76F4\u6392\u5217","slug":"\u6C34\u5E73-\u5782\u76F4\u6392\u5217"},{"level":2,"title":"\u8868\u5355\u6837\u5F0F","slug":"\u8868\u5355\u6837\u5F0F"},{"level":2,"title":"\u8868\u5355\u6821\u9A8C","slug":"\u8868\u5355\u6821\u9A8C"},{"level":2,"title":"Form API","slug":"form-api"},{"level":3,"title":"Form \u5C5E\u6027","slug":"form-\u5C5E\u6027"},{"level":3,"title":"Form \u63D2\u69FD","slug":"form-\u63D2\u69FD"},{"level":2,"title":"FormItem API","slug":"formitem-api"},{"level":3,"title":"FormItem \u5C5E\u6027","slug":"formitem-\u5C5E\u6027"}],"relativePath":"components/form/index.md"}'),z=n("h1",{id:"\u8868\u5355-form",tabindex:"-1"},[a("\u8868\u5355 Form "),n("a",{class:"header-anchor",href:"#\u8868\u5355-form","aria-hidden":"true"},"#")],-1),S=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[a("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),N=n("p",null,"\u4F20\u5165 model \u5C5E\u6027\u8BBE\u7F6E\u6570\u636E\u6A21\u578B\u3002",-1),x=n("div",null,"\u4F20\u5165 model \u5C5E\u6027\u8BBE\u7F6E\u6570\u636E\u6A21\u578B",-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-form")]),a(),n("span",{class:"token attr-name"},":model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("model"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-form-item")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u7528\u6237\u540D"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("model.user"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("s-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("s-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" model "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"user"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tom'"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),j=n("h2",{id:"\u6C34\u5E73-\u5782\u76F4\u6392\u5217",tabindex:"-1"},[a("\u6C34\u5E73/\u5782\u76F4\u6392\u5217 "),n("a",{class:"header-anchor",href:"#\u6C34\u5E73-\u5782\u76F4\u6392\u5217","aria-hidden":"true"},"#")],-1),I=n("p",null,"\u8BBE\u7F6Elayout\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6807\u7B7E\u548C\u63A7\u4EF6\u7684\u6392\u5217\u65B9\u5F0F\u4E3A\u5782\u76F4\u65B9\u5411\u3002",-1),P=n("div",null,"layout\u9ED8\u8BA4\u4E3Ahorizontal\uFF0C\u5373\u6C34\u5E73\u65B9\u5411\u6392\u5217",-1),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("layout:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("layout"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),a(`
      vertical
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("horizontal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("layout"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),a(`
      horizontal
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-form")]),a(),n("span",{class:"token attr-name"},":model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("model"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("layout"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-form-item")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u7528\u6237\u540D\uFF1A"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("model.user"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("s-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("s-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"const"),a(" layout "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vertical'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token keyword"},"const"),a(" model "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"user"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tom'"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),O=n("h2",{id:"\u8868\u5355\u6837\u5F0F",tabindex:"-1"},[a("\u8868\u5355\u6837\u5F0F "),n("a",{class:"header-anchor",href:"#\u8868\u5355\u6837\u5F0F","aria-hidden":"true"},"#")],-1),T=n("p",null,"\u6C34\u5E73\u6392\u5217\u6A21\u5F0F\u4E0B\uFF0Clabel-size \u53EF\u4EE5\u8BBE\u7F6E label \u7684\u5BBD\u5EA6\uFF1Blabel-align \u53EF\u4EE5\u8BBE\u7F6E label \u7684\u5BF9\u9F50\u65B9\u5F0F\u3002",-1),M=n("div",null,"label-size \u63D0\u4F9B sm\u3001md\u3001lg \u4E09\u79CD\u5927\u5C0F\uFF0C\u5206\u522B\u5BF9\u5E94 80px\u3001100px\u3001150px\uFF0C\u9ED8\u8BA4\u4E3A md\uFF1Blabel-align \u53EF\u9009\u503C\u4E3A start\u3001center\u3001end\uFF0C\u9ED8\u8BA4\u4E3A start\u3002",-1),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("labelSize:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("labelSize"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      sm
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("md"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("labelSize"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      md
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("labelSize"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      lg
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("labelAlign:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("start"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("labelAlign"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      start
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("center"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("labelAlign"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      center
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("end"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("labelAlign"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      end
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-form")]),a(`
    `),n("span",{class:"token attr-name"},":model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("model"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("horizontal"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":labelAlign"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("labelAlign"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("labelSize"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-form-item")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u7528\u6237\u540D\uFF1A"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-input")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("s-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-form-item")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5BC6\u7801\uFF1A"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("password"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("s-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("s-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"const"),a(" model "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"user"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token keyword"},"const"),a(" labelSize "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'md'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token keyword"},"const"),a(" labelAlign "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'start'"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),$=n("h2",{id:"\u8868\u5355\u6821\u9A8C",tabindex:"-1"},[a("\u8868\u5355\u6821\u9A8C "),n("a",{class:"header-anchor",href:"#\u8868\u5355\u6821\u9A8C","aria-hidden":"true"},"#")],-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-form")]),a(` 
    `),n("span",{class:"token attr-name"},":model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("model"),n("span",{class:"token punctuation"},'"')]),a(` 
    `),n("span",{class:"token attr-name"},":rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("rules"),n("span",{class:"token punctuation"},'"')]),a(` 
    `),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onLogin"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loginForm"),n("span",{class:"token punctuation"},'"')]),a(` 
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-form-item")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u7528\u6237\u540D\uFF1A"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("user"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("model.user"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("s-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-form-item")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5BC6\u7801\uFF1A"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("pwd"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("password"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("model.pwd"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("s-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s-button")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("s-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("s-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("s-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" model "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"user"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"pwd"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" rules "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"user"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"pwd"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5BC6\u7801\u4E3A\u5FC5\u586B\u9879'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" loginForm "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onLogin"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),a(`
    loginForm`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"validate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"valid"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("valid"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u767B\u5F55\u6210\u529F'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),G=w('<h2 id="form-api" tabindex="-1">Form API <a class="header-anchor" href="#form-api" aria-hidden="true">#</a></h2><h3 id="form-\u5C5E\u6027" tabindex="-1">Form \u5C5E\u6027 <a class="header-anchor" href="#form-\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>model</td><td>\u8868\u5355\u6570\u636E\u5BF9\u8C61</td><td>Object</td><td>\u2014</td><td>\u2014</td><td></td></tr><tr><td>rules</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td><td></td><td>\u2014</td><td>\u2014</td><td></td></tr><tr><td>label-width</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u5BBD\u5EA6\uFF0C\u4F8B\u5982 &#39;50px&#39;\u3002\u4F5C\u4E3A Form \u76F4\u63A5\u5B50\u5143\u7D20\u7684 form-item \u4F1A\u7EE7\u627F\u8BE5\u503C\u3002\u652F\u6301 auto\u3002</td><td><code>string</code></td><td>\u2014</td><td>\u2014</td><td>\u672A\u5B9E\u73B0</td></tr></tbody></table><h3 id="form-\u63D2\u69FD" tabindex="-1">Form \u63D2\u69FD <a class="header-anchor" href="#form-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u5B50\u6807\u7B7E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td><td>FormItem</td></tr></tbody></table><h2 id="formitem-api" tabindex="-1">FormItem API <a class="header-anchor" href="#formitem-api" aria-hidden="true">#</a></h2><h3 id="formitem-\u5C5E\u6027" tabindex="-1">FormItem \u5C5E\u6027 <a class="header-anchor" href="#formitem-\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>prop</td><td></td><td></td><td></td><td>\u2014</td><td></td></tr><tr><td>label</td><td>\u6807\u7B7E\u6587\u672C</td><td></td><td><code>string</code></td><td>\u2014</td><td></td></tr><tr><td>label-width</td><td></td><td></td><td><code>string</code></td><td>\u2014</td><td>\u672A\u5B9E\u73B0</td></tr></tbody></table>',8);function H(t,e,l,k,f,d){const c=B("render-demo-0"),F=B("demo"),u=B("render-demo-1"),p=B("render-demo-2"),g=B("render-demo-3");return q(),D("div",null,[z,S,N,C(F,{sourceCode:`<template>
  <s-form :model="model">
    <s-form-item label="\u7528\u6237\u540D">
      <s-input v-model="model.user"/>
    </s-form-item>
  </s-form>
</template>
<script setup>
  import {ref} from 'vue'
  const model = ref({
    user: 'tom'
  })
<\/script>
`},{description:b(()=>[x]),highlight:b(()=>[U]),default:b(()=>[C(c)]),_:1}),j,I,C(F,{sourceCode:`<template>
  <p>
    <span>layout:</span>
    <label>
      <input type="radio" value="vertical" v-model="layout"/>
      vertical
    </label>
    <label>
      <input type="radio" value="horizontal" v-model="layout"/>
      horizontal
    </label>
  </p>
  <s-form :model="model" :layout="layout">
    <s-form-item label="\u7528\u6237\u540D\uFF1A">
      <s-input v-model="model.user"/>
    </s-form-item>
  </s-form>
</template>
<script setup>
import {ref} from 'vue'
const layout = ref('vertical')
const model = ref({
    user: 'tom'
  })
<\/script>
`},{description:b(()=>[P]),highlight:b(()=>[L]),default:b(()=>[C(u)]),_:1}),O,T,C(F,{sourceCode:`<template>
  <p>
    <span>labelSize:</span>
    <label>
      <input type="radio" value="sm" v-model="labelSize" />
      sm
    </label>
    <label>
      <input type="radio" value="md" v-model="labelSize" />
      md
    </label>
    <label>
      <input type="radio" value="lg" v-model="labelSize" />
      lg
    </label>
  </p>
  <p>
    <span>labelAlign:</span>
    <label>
      <input type="radio" value="start" v-model="labelAlign" />
      start
    </label>
    <label>
      <input type="radio" value="center" v-model="labelAlign" />
      center
    </label>
    <label>
      <input type="radio" value="end" v-model="labelAlign" />
      end
    </label>
  </p>
  <s-form
    :model="model"
    layout="horizontal"
    :labelAlign="labelAlign"
    :labelSize="labelSize"
  >
    <s-form-item label="\u7528\u6237\u540D\uFF1A">
      <s-input />
    </s-form-item>
    <s-form-item label="\u5BC6\u7801\uFF1A">
      <s-input type="password" />
    </s-form-item>
  </s-form>
</template>
<script setup>
import { ref } from 'vue'
const model = ref({
  user: 'tom',
  password: ''
})
const labelSize = ref('md')
const labelAlign = ref('start')
<\/script>
`},{description:b(()=>[M]),highlight:b(()=>[R]),default:b(()=>[C(p)]),_:1}),$,C(F,{sourceCode:`<template>
  <s-form 
    :model="model" 
    :rules="rules" 
    layout="vertical"
    @submit="onLogin"
    ref="loginForm" 
  >
    <s-form-item label="\u7528\u6237\u540D\uFF1A" prop="user">
      <s-input v-model="model.user" />
    </s-form-item>
    <s-form-item label="\u5BC6\u7801\uFF1A" prop="pwd">
      <s-input type="password" v-model="model.pwd" />
    </s-form-item>
    <s-form-item>
      <s-button></s-button>
    </s-form-item>
  </s-form>
</template>
<script setup>
  import {ref} from 'vue'
  const model = ref({
    user: '',
    pwd: ''
  })
  const rules = ref({
    user: [{required: true, message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879'}],
    pwd: [{required: true, message: '\u5BC6\u7801\u4E3A\u5FC5\u586B\u9879'}],
  })
  const loginForm = ref()
  
  const onLogin=()=>{
    loginForm.value.validate(valid => {
      if (valid) {
        alert('\u767B\u5F55\u6210\u529F')
      } else {
        alert('\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01')
      }
    })
  }
<\/script>
`},{highlight:b(()=>[J]),default:b(()=>[C(g)]),_:1}),G])}const W=A(V,[["render",H]]);export{Q as __pageData,W as default};
