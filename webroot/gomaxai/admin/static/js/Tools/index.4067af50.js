
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,l as s,a as o,u as e,C as d,r as t,j as l,o as n,c as r,f as c,g as i,b as u,e as m,h as f,t as p,y as w,p as v,k as _,_ as g}from"../main-4d5ea9bc.js";import{a as y}from"../index/index.5088ceb1.js";const h=a=>(v("data-v-dd8f5cf8"),a=a(),_(),a),x={class:"tools"},b={class:"user-wrapper"},j=h((()=>u("div",{style:{color:"#3B82F6"}}," 修改密码 ",-1))),F=h((()=>u("div",{style:{color:"#FF3B30"}}," 退出登录 ",-1))),P=a({name:"Tools"}),k=g(a({...P,setup(a){const v=s();o();const _=e();y();const g=d((()=>_.userinfo));function h(a){switch(a){case"modifyPwd":_.updateModifyPasswordDialog(!0);break;case"logout":_.logout().then((()=>{v.push({name:"login"})}))}}return t(!1),(a,s)=>{const o=l("el-avatar"),e=w,d=l("el-icon"),t=l("el-dropdown-item"),v=l("el-dropdown-menu"),y=l("el-dropdown");return n(),r("div",x,[c(y,{class:"user-container",size:"default",onCommand:h},{dropdown:i((()=>[c(v,{class:"user-dropdown"},{default:i((()=>[c(t,{command:"modifyPwd"},{default:i((()=>[j])),_:1}),c(t,{divided:"",command:"logout"},{default:i((()=>[F])),_:1})])),_:1})])),default:i((()=>[u("div",b,[c(o,{size:"small",src:m(g).avatar},null,8,["src"]),f(" "+p(`${m(_).username||"GoMaxAi"} `)+" ",1),c(d,null,{default:i((()=>[c(e,{name:"ep:caret-bottom"})])),_:1})])])),_:1})])}}}),[["__scopeId","data-v-dd8f5cf8"]]);export{k as default};
