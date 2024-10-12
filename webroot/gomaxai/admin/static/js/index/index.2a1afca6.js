
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as t,S as a,r as e,l as s,b as o,e as i,R as l,Y as n,j as d,t as p,K as r,g,h as c,i as m,H as u,I as f,x as y,_ as h}from"../main-46c178e9.js";const v={key:0,class:"title-container"},b=t({name:"PageMain"}),k=h(t({...b,props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""},bottomPadding:{type:String,default:"0px"},bottomMargin:{type:String,default:"20px"}},setup(t){const h=t,b=!!a().title,k=e(h.collaspe);function S(){k.value=!1}return(a,e)=>{const h=y,_=s("el-icon");return o(),i("div",{class:u(["page-main",{"is-collaspe":g(k)}]),style:f({height:g(k)?t.height:"",paddingBottom:t.bottomPadding||"",marginBottom:t.bottomMargin||""})},[b||t.title?(o(),i("div",v,[b?l(a.$slots,"title",{key:0},void 0,!0):(o(),i(n,{key:1},[d(p(t.title),1)],64))])):r("",!0),l(a.$slots,"default",{},void 0,!0),g(k)?(o(),i("div",{key:1,class:"collaspe",title:"展开",onClick:S},[c(_,null,{default:m((()=>[c(h,{name:"ep:arrow-down"})])),_:1})])):r("",!0)],6)}}}),[["__scopeId","data-v-52fe3b17"]]);export{k as _};
