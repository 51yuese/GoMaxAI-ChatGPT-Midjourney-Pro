
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,T as n,r as s,a3 as t,V as e,o,f as l,g as u,m as c,h as r,a4 as i,e as d,q as v,t as f,i as p,a1 as m,a2 as _}from"../main-a14f6586.js";const w={class:"notfound"},I={class:"content"},h=a({__name:"[...all]",setup(a){const m=n(),_=s({inter:NaN,countdown:5});function h(){m.push("/")}return t((()=>{_.value.inter&&clearInterval(_.value.inter)})),e((()=>{_.value.inter=setInterval((()=>{_.value.countdown--,0===_.value.countdown&&(_.value.inter&&clearInterval(_.value.inter),h())}),1e3)})),(a,n)=>{const s=i,t=d("el-button");return o(),l("div",w,[u(s,{name:"404",class:"icon"}),c("div",I,[n[0]||(n[0]=c("h1",null,"404",-1)),n[1]||(n[1]=c("div",{class:"desc"}," 抱歉，你访问的页面不存在 ",-1)),u(t,{type:"primary",onClick:h},{default:r((()=>[v(f(p(_).countdown)+" 秒后，返回首页 ",1)])),_:1})])])}}});"function"==typeof _&&_(h);const y=m(h,[["__scopeId","data-v-599b59df"]]);export{y as default};
