
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as t,af as a,r as e,e as s,o,f as i,Q as l,F as n,q as d,t as p,k as r,i as g,g as c,h as m,n as u,M as f,a4 as y,a1 as h}from"../main-9b7515ee.js";const v={key:0,class:"title-container"},k=t({name:"PageMain"}),b=h(t({...k,props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""},bottomPadding:{type:String,default:"0px"},bottomMargin:{type:String,default:"20px"}},setup(t){const h=t,k=!!a().title,b=e(h.collaspe);function M(){b.value=!1}return(a,e)=>{const h=y,S=s("el-icon");return o(),i("div",{class:u(["page-main",{"is-collaspe":g(b)}]),style:f({height:g(b)?t.height:"",paddingBottom:t.bottomPadding||"",marginBottom:t.bottomMargin||""})},[k||t.title?(o(),i("div",v,[k?l(a.$slots,"title",{key:0},void 0,!0):(o(),i(n,{key:1},[d(p(t.title),1)],64))])):r("",!0),l(a.$slots,"default",{},void 0,!0),g(b)?(o(),i("div",{key:1,class:"collaspe",title:"展开",onClick:M},[c(S,null,{default:m((()=>[c(h,{name:"ep:arrow-down"})])),_:1})])):r("",!0)],6)}}}),[["__scopeId","data-v-52fe3b17"]]);export{b as _};
