
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,r as a,a as l,o as s,N as t,l as n,b as o,e as d,h as u,i,j as r,t as c,g as m,J as _,K as b,O as f,_ as g}from"../main-fe71c3b2.js";const p=g(e({__name:"index",setup(e){const g=a(!1),p=l();return s((()=>{t.on("global-hotkeys-intro-toggle",(()=>{g.value=!g.value}))})),(e,a)=>{const l=n("el-descriptions-item"),s=n("el-descriptions"),t=n("el-drawer");return o(),d("div",null,[u(t,{modelValue:m(g),"onUpdate:modelValue":a[0]||(a[0]=e=>f(g)?g.value=e:null),title:"快捷键介绍",direction:"rtl",size:360},{default:i((()=>[u(s,{title:"全局",column:1,border:""},{default:i((()=>[u(l,{label:"查看系统信息"},{default:i((()=>[r(c("mac"===m(p).os?"⌥":"Alt")+" + I ",1)])),_:1}),m(p).settings.navSearch.enable&&m(p).settings.navSearch.enableHotkeys?(o(),_(l,{key:0,label:"唤起导航搜索"},{default:i((()=>[r(c("mac"===m(p).os?"⌥":"Alt")+" + S ",1)])),_:1})):b("",!0)])),_:1}),m(p).settings.menu.enableHotkeys&&["side","head"].includes(m(p).settings.menu.menuMode)?(o(),_(s,{key:0,title:"主导航",column:1,border:""},{default:i((()=>[u(l,{label:"激活下一个主导航"},{default:i((()=>[r(c("mac"===m(p).os?"⌥":"Alt")+" + ` ",1)])),_:1})])),_:1})):b("",!0)])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-59fcc97e"]]);export{p as default};
