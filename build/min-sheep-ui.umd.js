(function(n,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],s):(n=typeof globalThis<"u"?globalThis:n||self,s(n["min-sheep-ui"]={},n.Vue))})(this,function(n,s){"use strict";const a={type:{type:String,default:"secondary"},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1},block:{type:Boolean,default:!1}},i=s.defineComponent({name:"SButton",props:a,setup(e,{slots:t}){const{type:o,size:l,disabled:f,block:g}=s.toRefs(e),y=g.value?"s-btn--block":"";return()=>s.createVNode("button",{disabled:f.value,class:`s-btn s-btn--${o.value} s-btn--${l.value} ${y}`},[t.default?t.default():"\u6309\u94AE"])}}),c="s",u="_sheep",r="S",d=(e,t={classPrefix:c})=>{var o;e.config.globalProperties[u]={...(o=e.config.globalProperties[u])!=null?o:{},classPrefix:t.classPrefix}},b=e=>{var t;return(t=e==null?void 0:e.componentPrefix)!=null?t:r};function P(e,t,o){const l=b(o);e.component(l+t.name)||(d(e,o),e.component(l+t.name,t))}const m=[{install(e,t){P(e,i,t)}}],p={install(e){m.forEach(t=>e.use(t))}};n.Button=i,n.default=p,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
