(function(f,l){typeof exports=="object"&&typeof module<"u"?l(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],l):(f=typeof globalThis<"u"?globalThis:f||self,l(f.index={},f.Vue))})(this,function(f,l){"use strict";function u(c,e=0,s=[]){return e++,c.reduce((d,a)=>{const r={...a};r.level=e,s.length>0&&s[s.length-1].level>=e&&s.pop(),s.push(r);const t=s[s.length-2];if(t&&(r.parentId=t.id),r.children){const n=u(r.children,e,s);return delete r.children,d.concat(r,n)}else return r.isLeaf=!0,d.concat(r)},[])}function b(c){const e=l.ref(u(l.unref(c))),s=t=>{const n=e.value.find(i=>i.id===t.id);n&&(n.expanded=!n.expanded)},d=l.computed(()=>{let t=[];const n=[];for(const i of e.value)t.includes(i)||(i.expanded!==!0&&(t=a(i)),n.push(i));return n}),a=(t,n=!0)=>{const i=[],k=e.value.findIndex(o=>o.id===t.id);for(let o=k+1;o<e.value.length&&t.level<e.value[o].level;o++)(n||t.level===e.value[o].level-1)&&i.push(e.value[o]);return i};return{innerData:e,toggleNode:s,expandedTree:d,getChildren:a,toggleCheckNode:t=>{t.checked=!t.checked,a(t).forEach(o=>{o.checked=t.checked});const n=e.value.find(o=>o.id===t.parentId);if(!n)return;const i=a(n,!1);i.filter(o=>o.checked).length===i.length?n.checked=!0:n.checked=!1}}}const m={data:{type:Object,required:!0},checkable:{type:Boolean,default:!1}},h=32,g=24,p=l.defineComponent({name:"STree",props:m,setup(c){const{data:e,checkable:s}=l.toRefs(c),{expandedTree:d,toggleNode:a,getChildren:r,toggleCheckNode:t}=b(e);return()=>l.createVNode("div",{class:"s-tree"},[d==null?void 0:d.value.map(n=>l.createVNode("div",{class:"s-tree-node hover:bg-slate-300 relative leading-8",style:{paddingLeft:`${g*(n.level-1)}px`}},[!n.isLeaf&&n.expanded&&l.createVNode("span",{class:"s-tree-node__vline absolute w-px bg-slate-300",style:{height:`${h*r(n).length}px`,left:`${g*(n.level-1)+11}px`,top:`${h}px`}},null),n.isLeaf?l.createVNode("span",{style:{display:"inline-block",width:"18px"}},null):l.createVNode("svg",{onClick:()=>a(n),style:{width:"18px",height:"18px",display:"inline-block",transform:n.expanded?"rotate(90deg)":""},viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[l.createVNode("path",{fill:"currentColor",d:"M384 192v640l384-320.064z"},null)]),s.value&&l.withDirectives(l.createVNode("input",{type:"checkbox","onUpdate:modelValue":i=>n.checked=i,onClick:()=>{t(n)}},null),[[l.vModelCheckbox,n.checked]]),n.label]))])}}),v="s",x="_sheep",C="S",N=(c,e={classPrefix:v})=>{var s;c.config.globalProperties[x]={...(s=c.config.globalProperties[x])!=null?s:{},classPrefix:e.classPrefix}},P=c=>{var e;return(e=c==null?void 0:c.componentPrefix)!=null?e:C};function y(c,e,s){const d=P(s);c.component(d+e.name)||(N(c,s),c.component(d+e.name,e))}const T={install(c,e){y(c,p,e)}};f.Tree=p,f.default=T,Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});