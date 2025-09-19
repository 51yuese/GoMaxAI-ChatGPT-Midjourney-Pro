
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,r as a,W as s,V as l,ad as t,e as n,o,f as d,g as u,h as i,q as r,t as m,i as c,j as _,k as b,s as f,a1 as g}from"../main-98fa617f.js";const p=g(e({__name:"index",setup(e){const g=a(!1),p=s();return l((()=>{t.on("global-hotkeys-intro-toggle",(()=>{g.value=!g.value}))})),(e,a)=>{const s=n("el-descriptions-item"),l=n("el-descriptions"),t=n("el-drawer");return o(),d("div",null,[u(t,{modelValue:c(g),"onUpdate:modelValue":a[0]||(a[0]=e=>f(g)?g.value=e:null),title:"快捷键介绍",direction:"rtl",size:360},{default:i((()=>[u(l,{title:"全局",column:1,border:""},{default:i((()=>[u(s,{label:"查看系统信息"},{default:i((()=>[r(m("mac"===c(p).os?"⌥":"Alt")+" + I ",1)])),_:1}),c(p).settings.navSearch.enable&&c(p).settings.navSearch.enableHotkeys?(o(),_(s,{key:0,label:"唤起导航搜索"},{default:i((()=>[r(m("mac"===c(p).os?"⌥":"Alt")+" + S ",1)])),_:1})):b("",!0)])),_:1}),c(p).settings.menu.enableHotkeys&&["side","head"].includes(c(p).settings.menu.menuMode)?(o(),_(l,{key:0,title:"主导航",column:1,border:""},{default:i((()=>[u(s,{label:"激活下一个主导航"},{default:i((()=>[r(m("mac"===c(p).os?"⌥":"Alt")+" + ` ",1)])),_:1})])),_:1})):b("",!0)])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-69a4a624"]]);export{p as default};
