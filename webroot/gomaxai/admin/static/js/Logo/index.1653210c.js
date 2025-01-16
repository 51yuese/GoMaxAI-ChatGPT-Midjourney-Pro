
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,C as s,V as t,c as e,U as o,o as n,f as c,m as l,t as i,W as m,a0 as r}from"../main-527fe521.js";const g={class:"title"},u=["src"],p=a({name:"Logo"}),d=r(a({...p,props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(a){const r=s({siteName:"",clientLogoPath:""});const p=t();return e((()=>{const a={};return p.settings.home.enable&&(a.name="home"),a})),o((()=>{!async function(){const a=await m.queryConfig({keys:["siteName","clientLogoPath"]});Object.assign(r,a.data)}()})),(a,s)=>(n(),c("div",g,[l("img",{src:r.clientLogoPath,class:"logo"},null,8,u),l("span",null,i(r.siteName),1)]))}}),[["__scopeId","data-v-2c3b1680"]]);export{d as default};
