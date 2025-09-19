
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,W as s,C as e,c as t,V as o,o as n,f as i,m as l,t as c,X as m,a1 as r}from"../main-98fa617f.js";const d={class:"title"},g=["src"],u=a({name:"Logo"}),p=r(a({...u,props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(a){const r=s(),u=e({siteName:"",clientLogoPath:""});return t((()=>{const a={};return r.settings.home.enable&&(a.name="home"),a})),o((()=>{!async function(){const a=await m.queryConfig({keys:["siteName","clientLogoPath"]});Object.assign(u,a.data),r.setSiteName(a.data.siteName)}()})),(a,s)=>(n(),i("div",d,[l("img",{src:u.clientLogoPath,class:"logo"},null,8,g),l("span",null,c(u.siteName),1)]))}}),[["__scopeId","data-v-5b556d58"]]);export{p as default};
