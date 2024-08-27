
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import e from"../components/mjIncantationClassify.804f58d7.js";import a from"../components/mjDetail.a934f087.js";import{A as l}from"../mj/mj.f9be448f.js";import{u as t}from"../utcformatTime/utcformatTime.f6db2c52.js";import{d as o,u as r,r as s,G as n,x as i,j as d,V as p,o as u,c,f as m,b as f,g as y,h as g,w as v,J as b,t as x,e as _,P as w,p as h,k as j,_ as k,q as z}from"../main-2d3d97e8.js";const C=e=>(h("data-v-be3d66aa"),e=e(),j(),e),F={class:"search_add_card"},V={style:{display:"flex","align-items":"center"}},A=C((()=>f("div",{class:"condition_name"},"关键字",-1))),U={style:{"margin-left":"10px"}},I=C((()=>f("div",{class:"condition_name"},"所属类型",-1))),M={style:{"margin-top":"22px","margin-left":"12px"}},R=o({__name:"incantation-classify",setup(o){const h=r(),j=s(),k=s(),z=s(!1),C=s([]),R=s(0),B=n({level:0,page:1,size:20,type:"",keyword:""});s();const P=async()=>{try{z.value=!0;const e=await l.queryMjIncantClassify(B),{rows:a,count:t}=e.data;z.value=!1,R.value=t,C.value=a}catch(e){z.value=!1}},S=async()=>{k.value.open()},q=e=>{Object.assign(B,{level:2,page:1,size:20,type:"",keyword:""}),P()};return i((()=>{P()})),(o,r)=>{const s=d("el-input"),n=d("el-option"),i=d("el-select"),D=d("el-button"),E=d("RefreshRight"),T=d("el-icon"),G=d("el-table-column"),J=d("el-popconfirm"),N=d("el-table"),O=d("el-pagination"),H=d("el-row"),K=p("loading");return u(),c("div",null,[m(e,{ref_key:"mjManagerRef",ref:k,onFresh:P},null,512),m(a,{ref_key:"mjDetailRef",ref:j},null,512),f("div",F,[f("div",V,[f("div",null,[A,m(s,{modelValue:B.keyword,"onUpdate:modelValue":r[0]||(r[0]=e=>B.keyword=e),style:{width:"192px"},placeholder:"分类关键字[模糊搜索]",clearable:""},null,8,["modelValue"])]),f("div",U,[I,m(i,{modelValue:B.type,"onUpdate:modelValue":r[1]||(r[1]=e=>B.type=e)},{default:y((()=>[m(n,{value:"text",label:"普通"}),m(n,{value:"style",label:"风格"})])),_:1},8,["modelValue"])]),f("div",M,[m(D,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:P},{default:y((()=>[g("查询 ")])),_:1})]),f("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:q},[m(T,{color:"#3B82F6",size:"20"},{default:y((()=>[m(E)])),_:1})])]),f("div",null,[m(D,{style:{"border-radius":"8px",border:"1px solid #3B82F6",color:"#3B82F6","font-size":"15px",height:"32px","margin-top":"25px"},onClick:S},{default:y((()=>[g(" 添加字典分类 ")])),_:1})])]),f("div",null,[v((u(),b(N,{border:"",data:C.value,height:"64vh",width:"100%"},{default:y((()=>[m(G,{prop:"classifyName",label:"分类名称"}),m(G,{prop:"level",label:"级别"},{default:y((e=>[f("p",null,x(1===e.row.level?"一级":2===e.row.level?"二级":"未知"),1)])),_:1}),m(G,{prop:"type",label:"类型"},{default:y((e=>[f("p",null,x("text"===e.row.type?"普通":"style"===e.row.type?"风格":"未知"),1)])),_:1}),m(G,{prop:"createdAt",label:"创建时间"},{default:y((e=>[f("p",null,x(_(t)(e.row.createdAt)),1)])),_:1}),m(G,{prop:"updatedAt",label:"更新时间"},{default:y((e=>[f("p",null,x(_(t)(e.row.updatedAt)),1)])),_:1}),m(G,{fixed:"right",label:"操作",width:"280",align:"center"},{default:y((e=>[m(D,{link:"",type:"primary",size:"small",onClick:a=>(async e=>{k.value.open(e.id)})(e.row)},{default:y((()=>[g(" 编辑 ")])),_:2},1032,["onClick"]),m(J,{width:"300px",title:"删除后不可找回，确定删除?","confirm-button-text":"确认",onConfirm:a=>(async e=>{if(0==h.isUserModifyPermissions())return w.error("非超级管理员无权限操作！");await l.removeMjIncantClassify({id:e.id}),w.success("删除咒语分类成功！"),await P()})(e.row)},{reference:y((()=>[m(D,{link:"",type:"danger",disabled:1===e.row.inner,size:"small"},{default:y((()=>[g(" 删除 ")])),_:2},1032,["disabled"])])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[K,z.value]]),m(H,{class:"flex justify-end mt-5 pb-5"},{default:y((()=>[m(O,{"current-page":B.page,"onUpdate:currentPage":r[2]||(r[2]=e=>B.page=e),"page-size":B.size,"onUpdate:pageSize":r[3]||(r[3]=e=>B.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:R.value,onSizeChange:P,onCurrentChange:P},null,8,["current-page","page-size","total"])])),_:1})])])}}});"function"==typeof z&&z(R);const B=k(R,[["__scopeId","data-v-be3d66aa"]]);export{B as default};