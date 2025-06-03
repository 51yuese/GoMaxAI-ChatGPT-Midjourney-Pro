
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,W as e,C as s,c as t,V as o,o as n,f as i,m as l,t as c,X as m,a1 as r}from"../main-9d6c7d62.js";const g={class:"title"},u=["src"],d=a({name:"Logo"}),p=r(a({...d,props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(a){const r=e(),d=s({siteName:"",clientLogoPath:""});return t((()=>{const a={};return r.settings.home.enable&&(a.name="home"),a})),o((()=>{!async function(){const a=await m.queryConfig({keys:["siteName","clientLogoPath"]});Object.assign(d,a.data),r.setSiteName(a.data.siteName)}()})),(a,e)=>(n(),i("div",g,[l("img",{src:d.clientLogoPath,class:"logo"},null,8,u),l("span",null,c(d.siteName),1)]))}}),[["__scopeId","data-v-e9013eb4"]]);export{p as default};
