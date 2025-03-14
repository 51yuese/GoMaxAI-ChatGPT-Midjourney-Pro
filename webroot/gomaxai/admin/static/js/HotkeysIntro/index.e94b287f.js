
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,r as a,W as s,V as l,ad as t,e as n,o,f as d,g as u,h as i,q as r,t as c,i as m,j as f,k as _,s as b,a1 as g}from"../main-9b7515ee.js";const p=g(e({__name:"index",setup(e){const g=a(!1),p=s();return l((()=>{t.on("global-hotkeys-intro-toggle",(()=>{g.value=!g.value}))})),(e,a)=>{const s=n("el-descriptions-item"),l=n("el-descriptions"),t=n("el-drawer");return o(),d("div",null,[u(t,{modelValue:m(g),"onUpdate:modelValue":a[0]||(a[0]=e=>b(g)?g.value=e:null),title:"快捷键介绍",direction:"rtl",size:360},{default:i((()=>[u(l,{title:"全局",column:1,border:""},{default:i((()=>[u(s,{label:"查看系统信息"},{default:i((()=>[r(c("mac"===m(p).os?"⌥":"Alt")+" + I ",1)])),_:1}),m(p).settings.navSearch.enable&&m(p).settings.navSearch.enableHotkeys?(o(),f(s,{key:0,label:"唤起导航搜索"},{default:i((()=>[r(c("mac"===m(p).os?"⌥":"Alt")+" + S ",1)])),_:1})):_("",!0)])),_:1}),m(p).settings.menu.enableHotkeys&&["side","head"].includes(m(p).settings.menu.menuMode)?(o(),f(l,{key:0,title:"主导航",column:1,border:""},{default:i((()=>[u(s,{label:"激活下一个主导航"},{default:i((()=>[r(c("mac"===m(p).os?"⌥":"Alt")+" + ` ",1)])),_:1})])),_:1})):_("",!0)])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-59fcc97e"]]);export{p as default};
