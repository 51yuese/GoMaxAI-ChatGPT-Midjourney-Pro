
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,X as e,C as s,c as t,W as o,o as n,f as i,m as l,t as c,Y as m,a2 as r}from"../main-3bd207b4.js";const g={class:"title"},u=["src"],d=a({name:"Logo"}),p=r(a({...d,props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(a){const r=e(),d=s({siteName:"",clientLogoPath:""});return t((()=>{const a={};return r.settings.home.enable&&(a.name="home"),a})),o((()=>{!async function(){const a=await m.queryConfig({keys:["siteName","clientLogoPath"]});Object.assign(d,a.data),r.setSiteName(a.data.siteName)}()})),(a,e)=>(n(),i("div",g,[l("img",{src:d.clientLogoPath,class:"logo"},null,8,u),l("span",null,c(d.siteName),1)]))}}),[["__scopeId","data-v-e9013eb4"]]);export{p as default};
