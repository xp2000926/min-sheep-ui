import{V as v,_ as B,c as C,a as b,w as h,b as n,d as t,e as y,r as D,o as A}from"./app.43c6c830.js";const x={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:c,resolveComponent:l,withCtx:o,createVNode:u,createElementVNode:a,openBlock:f,createElementBlock:d}=v,i=a("span",null,"\u8FD9\u662F\u4E00\u6761\u6D88\u606F\uFF01",-1),r={class:"dialog-footer"};function g(s,e){const k=l("s-button"),F=l("s-modal");return f(),d("div",null,[u(k,{onClick:s.open},{default:o(()=>[c("\u6253\u5F00")]),_:1},8,["onClick"]),u(F,{modelValue:s.visible,"onUpdate:modelValue":e[2]||(e[2]=m=>s.visible=m),title:"\u5C0F\u8D34\u58EB",center:"","align-center":""},{footer:o(()=>[a("div",r,[u(k,{style:{"margin-right":"12px"},onClick:e[0]||(e[0]=m=>s.visible=!1)},{default:o(()=>[c("\u53D6\u6D88")]),_:1}),u(k,{type:"primary",onClick:e[1]||(e[1]=m=>s.visible=!1)},{default:o(()=>[c("\u786E\u5B9A")]),_:1})])]),default:o(()=>[i]),_:1},8,["modelValue"])])}const{defineComponent:E,ref:_}=v,p=E({setup(){const s=_(!1);return{visible:s,open:()=>{s.value=!0}}}});return{render:g,...p}}(),"render-demo-1":function(){const{createTextVNode:c,resolveComponent:l,withCtx:o,createVNode:u,createElementVNode:a,openBlock:f,createElementBlock:d}=v,i=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"Date"),a("th",null,"Name"),a("th",null,"Address")])]),a("tbody",null,[a("tr",null,[a("td",null,"2016-05-02"),a("td",null,"John Smith"),a("td",null,"No.1518, Jinshajiang Road, Putuo District")]),a("tr",null,[a("td",null,"2016-05-04"),a("td",null,"John Smith"),a("td",null,"No.1518, Jinshajiang Road, Putuo District")]),a("tr",null,[a("td",null,"2016-05-01"),a("td",null,"John Smith"),a("td",null,"No.1518, Jinshajiang Road, Putuo District")]),a("tr",null,[a("td",null,"2016-05-03"),a("td",null,"John Smith"),a("td",null,"No.1518, Jinshajiang Road, Putuo District")])])],-1);function r(p,s){const e=l("s-button"),k=l("s-modal");return f(),d("div",null,[u(e,{onClick:p.open},{default:o(()=>[c("\u6253\u5F00")]),_:1},8,["onClick"]),u(k,{modelValue:p.visible,"onUpdate:modelValue":s[0]||(s[0]=F=>p.visible=F),title:"Shipping address",width:"50%"},{default:o(()=>[i]),_:1},8,["modelValue"])])}const{defineComponent:g,ref:E}=v,_=g({setup(){const p=E(!1);return{visible:p,open:()=>{p.value=!0}}}});return{render:r,..._}}(),"render-demo-2":function(){const{createTextVNode:c,resolveComponent:l,withCtx:o,createVNode:u,createElementVNode:a,openBlock:f,createElementBlock:d}=v,i={class:"my-header"},r=a("h4",null,"This is a custom header!",-1);function g(s,e){const k=l("s-button"),F=l("s-modal");return f(),d("div",null,[u(k,{onClick:s.open},{default:o(()=>[c("\u6253\u5F00")]),_:1},8,["onClick"]),u(F,{modelValue:s.visible,"onUpdate:modelValue":e[0]||(e[0]=m=>s.visible=m),"show-close":!1},{header:o(({close:m})=>[a("div",i,[r,u(k,{type:"text",onClick:m},{default:o(()=>[c(" Close ")]),_:2},1032,["onClick"])])]),default:o(()=>[c(" This is dialog content. ")]),_:1},8,["modelValue"])])}const{defineComponent:E,ref:_}=v,p=E({setup(){const s=_(!1);return{visible:s,open:()=>{s.value=!0}}}});return{render:g,...p}}()}},I=JSON.parse('{"title":"Modal \u5BF9\u8BDD\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u529F\u80FD","slug":"\u57FA\u7840\u529F\u80FD"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5185\u5BB9","slug":"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5934\u90E8","slug":"\u81EA\u5B9A\u4E49\u5934\u90E8"},{"level":2,"title":"Modal API","slug":"modal-api"},{"level":3,"title":"Modal \u5C5E\u6027","slug":"modal-\u5C5E\u6027"},{"level":3,"title":"Modal \u63D2\u69FD","slug":"modal-\u63D2\u69FD"},{"level":3,"title":"Modal \u4E8B\u4EF6","slug":"modal-\u4E8B\u4EF6"}],"relativePath":"components/modal/index.md"}');const w=n("h1",{id:"modal-\u5BF9\u8BDD\u6846",tabindex:"-1"},[t("Modal \u5BF9\u8BDD\u6846 "),n("a",{class:"header-anchor",href:"#modal-\u5BF9\u8BDD\u6846","aria-hidden":"true"},"#")],-1),N=n("h2",{id:"\u57FA\u7840\u529F\u80FD",tabindex:"-1"},[t("\u57FA\u7840\u529F\u80FD "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u529F\u80FD","aria-hidden":"true"},"#")],-1),V=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("s-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("s-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("s-modal")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u5C0F\u8D34\u58EB"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"center"),t(),n("span",{class:"token attr-name"},"align-center"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("\u8FD9\u662F\u4E00\u6761\u6D88\u606F\uFF01"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dialog-footer"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("s-button")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 12px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible = false"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u53D6\u6D88"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("s-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("s-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible = false"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u786E\u5B9A"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("s-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("s-modal")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"open"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      open`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".dialog-footer"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=n("h2",{id:"\u81EA\u5B9A\u4E49\u5185\u5BB9",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u5185\u5BB9 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5185\u5BB9","aria-hidden":"true"},"#")],-1),q=n("p",null,"\u901A\u8FC7\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49Modal\u5185\u5BB9\u3002\u6211\u4EEC\u6709title\u3001default\u548Cfooter\u4E09\u4E2A\u63D2\u69FD\u53EF\u4EE5\u4F7F\u7528\u3002",-1),S=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("s-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("s-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("s-modal")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Shipping address"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("50%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("table")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("thead")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("th")]),n("span",{class:"token punctuation"},">")]),t("Date"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("th")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("th")]),n("span",{class:"token punctuation"},">")]),t("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("th")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("th")]),n("span",{class:"token punctuation"},">")]),t("Address"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("th")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("thead")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tbody")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("2016-05-02"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("John Smith"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("No.1518, Jinshajiang Road, Putuo District"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("2016-05-04"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("John Smith"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("No.1518, Jinshajiang Road, Putuo District"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("2016-05-01"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("John Smith"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("No.1518, Jinshajiang Road, Putuo District"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("2016-05-03"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("John Smith"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("No.1518, Jinshajiang Road, Putuo District"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tbody")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("table")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("s-modal")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"open"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      open`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),j=n("h2",{id:"\u81EA\u5B9A\u4E49\u5934\u90E8",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u5934\u90E8 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5934\u90E8","aria-hidden":"true"},"#")],-1),P=n("p",null,"\u53EF\u4EE5\u901A\u8FC7header\u63D2\u69FD\u5B9A\u4E49\u5934\u90E8\u5185\u5BB9\u3002",-1),T=n("div",null,"\u901A\u8FC7header\u63D2\u69FD\u5B9A\u4E49\u5934\u90E8\uFF0C\u4E0A\u4E0B\u6587\u4E2D\u6709close\u65B9\u6CD5\u7528\u4E8E\u5173\u95EDModal",-1),M=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("s-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("s-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("s-modal")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":show-close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ close }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-header"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("This is a custom header!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("s-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("close"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          Close
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("s-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    This is dialog content.
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("s-modal")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"open"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      open`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".my-header"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),t(" row"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),t(" space-between"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"word-break"),n("span",{class:"token punctuation"},":"),t(" break-all"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),R=y('<h2 id="modal-api" tabindex="-1">Modal API <a class="header-anchor" href="#modal-api" aria-hidden="true">#</a></h2><h3 id="modal-\u5C5E\u6027" tabindex="-1">Modal \u5C5E\u6027 <a class="header-anchor" href="#modal-\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>title</td><td>Dialog \u7684\u6807\u9898\uFF0C\u4E5F\u53EF\u901A\u8FC7\u5177\u540D slot \uFF08\u89C1\u4E0B\u8868\uFF09\u4F20\u5165</td><td><code>string</code></td><td>\u2014</td><td>\u2014</td><td></td></tr><tr><td>width</td><td>Dialog \u7684\u5BBD\u5EA6</td><td><code>string</code></td><td>\u2014</td><td>30%</td><td></td></tr><tr><td>center</td><td>\u662F\u5426\u5BF9\u5934\u90E8\u91C7\u7528\u5C45\u4E2D\u5E03\u5C40</td><td><code>boolean</code></td><td>\u2014</td><td>false</td><td></td></tr><tr><td>show-close</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><code>boolean</code></td><td>\u2014</td><td>false</td><td></td></tr><tr><td>alignCenter</td><td>\u5BF9\u8BDD\u6846\u5C45\u4E2D</td><td><code>boolean</code></td><td>\u2014</td><td>false</td><td></td></tr><tr><td>top</td><td>Dialog CSS \u4E2D\u7684 margin-top \u503C</td><td><code>string</code></td><td>\u2014</td><td></td><td>\u672A\u5B9E\u73B0</td></tr></tbody></table><h3 id="modal-\u63D2\u69FD" tabindex="-1">Modal \u63D2\u69FD <a class="header-anchor" href="#modal-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>\u2014</td><td>Dialog \u7684\u5185\u5BB9</td><td></td></tr><tr><td>header</td><td>Dialog \u6807\u9898\u533A\u7684\u5185\u5BB9</td><td></td></tr><tr><td>footer</td><td>Dialog \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9</td><td></td></tr></tbody></table><h3 id="modal-\u4E8B\u4EF6" tabindex="-1">Modal \u4E8B\u4EF6 <a class="header-anchor" href="#modal-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>Dialog \u5173\u95ED\u7684\u56DE\u8C03</td><td>\u2014</td></tr></tbody></table>',7);function $(c,l,o,u,a,f){const d=D("render-demo-0"),i=D("demo"),r=D("render-demo-1"),g=D("render-demo-2");return A(),C("div",null,[w,N,b(i,{sourceCode:`<template>
  <s-button @click="open">\u6253\u5F00</s-button>

  <s-modal v-model="visible" title="\u5C0F\u8D34\u58EB" center align-center>
    <span>\u8FD9\u662F\u4E00\u6761\u6D88\u606F\uFF01</span>
    <template #footer>
      <div class="dialog-footer">
        <s-button style="margin-right: 12px;" @click="visible = false">\u53D6\u6D88</s-button>
        <s-button type="primary" @click="visible = false">\u786E\u5B9A</s-button>
      </div>
    </template>
  </s-modal>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)

    const open = () => {
      visible.value = true;
    }

    return {
      visible,
      open,
    }
  }
})
<\/script>

<style>
.dialog-footer {
  padding: 20px;
  text-align: right;
}
</style>
`},{highlight:h(()=>[V]),default:h(()=>[b(d)]),_:1}),J,q,b(i,{sourceCode:`<template>
  <s-button @click="open">\u6253\u5F00</s-button>

  <s-modal v-model="visible" title="Shipping address" width="50%">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2016-05-02</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
        <tr>
          <td>2016-05-04</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
        <tr>
          <td>2016-05-01</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
        <tr>
          <td>2016-05-03</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
      </tbody>
    </table>
  </s-modal>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)

    const open = () => {
      visible.value = true;
    }

    return {
      visible,
      open,
    }
  }
})
<\/script>
`},{highlight:h(()=>[S]),default:h(()=>[b(r)]),_:1}),j,P,b(i,{sourceCode:`<template>
  <s-button @click="open">\u6253\u5F00</s-button>

  <s-modal v-model="visible" :show-close="false">
    <template #header="{ close }">
      <div class="my-header">
        <h4>This is a custom header!</h4>
        <s-button type="text" @click="close">
          Close
        </s-button>
      </div>
    </template>
    This is dialog content.
  </s-modal>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)
    const open = () => {
      visible.value = true;
    }

    return {
      visible,
      open,
    }
  }
})
<\/script>

<style>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-right: 16px;
  word-break: break-all;
}
</style>
`},{description:h(()=>[T]),highlight:h(()=>[M]),default:h(()=>[b(g)]),_:1}),R])}const O=B(x,[["render",$]]);export{I as __pageData,O as default};
