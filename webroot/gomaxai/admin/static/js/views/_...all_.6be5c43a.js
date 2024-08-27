
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,r as s,s as n,x as t,o as e,c as o,f as l,b as c,g as u,l as r,y as d,j as i,p as v,k as f,h as p,t as m,e as _,_ as b,q as w}from"../main-7fe883cc.js";const y=a=>(v("data-v-599b59df"),a=a(),f(),a),I={class:"notfound"},h={class:"content"},j=y((()=>c("h1",null,"404",-1))),k=y((()=>c("div",{class:"desc"}," 抱歉，你访问的页面不存在 ",-1))),x=a({__name:"[...all]",setup(a){const v=r(),f=s({inter:NaN,countdown:5});function b(){v.push("/")}return n((()=>{f.value.inter&&clearInterval(f.value.inter)})),t((()=>{f.value.inter=setInterval((()=>{f.value.countdown--,0===f.value.countdown&&(f.value.inter&&clearInterval(f.value.inter),b())}),1e3)})),(a,s)=>{const n=d,t=i("el-button");return e(),o("div",I,[l(n,{name:"404",class:"icon"}),c("div",h,[j,k,l(t,{type:"primary",onClick:b},{default:u((()=>[p(m(_(f).countdown)+" 秒后，返回首页 ",1)])),_:1})])])}}});"function"==typeof w&&w(x);const N=b(x,[["__scopeId","data-v-599b59df"]]);export{N as default};
