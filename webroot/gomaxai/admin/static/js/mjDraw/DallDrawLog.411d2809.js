
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,r as o,F as r,o as t,l,V as n,b as s,e as i,f as d,h as p,n as u,p as c,i as m,j as w,w as f,g,J as h,t as y,P as _,_ as b,q as v}from"../main-fe71c3b2.js";import{m as k}from"../marked.esm/marked.esm.3c8fbedb.js";import{A as x}from"../chat/chat.4aa5dfc3.js";import{A as z}from"../aiMusic/aiMusic.6d1ead88.js";import{u as A}from"../utcformatTime/utcformatTime.f6db2c52.js";const T={class:"search_condition"},j={style:{display:"flex","align-items":"center"}},C={style:{"margin-left":"12px"}},F={style:{"margin-top":"22px","margin-left":"12px"}},M={style:{"margin-left":"12px","margin-top":"22px"}},V={style:{"margin-top":"12px"}},U={class:"answer"},D=["innerHTML"],K=e({__name:"DallDrawLog",setup(e){const b=a(),v=new k.Renderer;k.setOptions({renderer:v,gfm:!0,pedantic:!1,sanitize:!1});const K=o(!1);o();const L=o(0),Y=r({keyword:"",prompt:"",modelType:"draw",page:1,size:15}),P=o([]);async function q(){K.value=!0;try{const e=await x.queryChatAll(Y);K.value=!1;const{rows:a,count:o}=e.data;L.value=o,P.value=a}catch(e){K.value=!1}}function H(){Y.keyword="",Y.prompt="",q()}return t((()=>{q()})),(e,a)=>{const o=l("el-input"),r=l("el-button"),t=l("el-table-column"),v=l("el-tag"),x=l("el-popover"),I=l("el-popconfirm"),S=l("el-table"),B=l("el-pagination"),E=l("el-row"),J=n("loading");return s(),i("div",null,[d("div",T,[d("div",j,[d("div",null,[a[4]||(a[4]=d("div",{class:"search_title"},"关键字",-1)),d("div",null,[p(o,{modelValue:Y.keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>Y.keyword=e),placeholder:"用户名/昵称/手机号/邮箱",onKeydown:u(c(q,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])]),d("div",C,[a[5]||(a[5]=d("div",{class:"search_title"},"用户询问的问题",-1)),d("div",null,[p(o,{modelValue:Y.prompt,"onUpdate:modelValue":a[1]||(a[1]=e=>Y.prompt=e),placeholder:"提问问题[模糊搜索]",onKeydown:u(c(q,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])]),d("div",F,[p(r,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:q},{default:m((()=>a[6]||(a[6]=[w("查询 ")]))),_:1})]),d("div",M,[p(r,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","border-radius":"8px",border:"1px solid #3B82F6","background-color":"transparent"},onClick:H},{default:m((()=>a[7]||(a[7]=[w("重置 ")]))),_:1})])])]),d("div",V,[f((s(),h(S,{height:"66vh",border:"",data:g(P),style:{width:"100%"},size:"large","tooltip-options":{}},{default:m((()=>[p(t,{fixed:"",prop:"username",label:"用户名",width:"120"},{default:m((e=>[w(y(null==e.row.username?"--":e.row.username),1)])),_:1}),p(t,{fixed:"",prop:"nickname",label:"用户昵称",width:"120"},{default:m((e=>[w(y(null==e.row.nickname?"--":e.row.nickname),1)])),_:1}),p(t,{fixed:"",prop:"phone",label:"手机号",width:"120"},{default:m((e=>[w(y(null==e.row.phone?"--":e.row.phone),1)])),_:1}),p(t,{prop:"email",label:"用户邮箱",width:"200"},{default:m((e=>[w(y(null==e.row.email||""==e.row.email?"--":e.row.email),1)])),_:1}),p(t,{prop:"createdAt",label:"角色",width:"80"},{default:m((e=>["user"===e.row.role?(s(),h(v,{key:0,type:"primary"},{default:m((()=>a[8]||(a[8]=[w("用户")]))),_:1})):(s(),h(v,{key:1,type:"success"},{default:m((()=>a[9]||(a[9]=[w("电脑")]))),_:1}))])),_:1}),p(t,{prop:"answer",label:"用户询问/AI回复"},{default:m((e=>[p(x,{placement:"top",width:400,trigger:"click"},{reference:m((()=>[d("div",U,y("user"===e.row.role?e.row.prompt:e.row.answer),1)])),default:m((()=>[d("div",{class:"answer_container",innerHTML:g(k)("user"===e.row.role?e.row.prompt:e.row.answer||"")},null,8,D)])),_:2},1024)])),_:1}),p(t,{prop:"completionTokens",label:"提问/回答Token",width:"140",align:"center"},{default:m((e=>[w(y("user"===e.row.role?e.row.promptTokens:e.row.completionTokens),1)])),_:1}),p(t,{prop:"totalTokens",label:"总计Toekn",width:"110",align:"center"}),p(t,{prop:"model",label:"模型",width:"200"},{default:m((e=>[w(y(""==e.row.model?"--":e.row.model),1)])),_:1}),p(t,{prop:"createdAt",label:"提问/回复时间",width:"200"},{default:m((e=>[w(y(g(A)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),p(t,{fixed:"right",label:"操作",width:"80",align:"center"},{default:m((e=>[p(I,{title:"`确认删除此条记录么！",width:"260","icon-color":"red",onConfirm:a=>async function(e){if(0==b.isUserModifyPermissions())return _.error("非超级管理员无权限操作！");await z.deleteLog({ids:[e]}),_.success("删除成功"),q()}(e.row.id)},{reference:m((()=>[p(r,{link:"",type:"danger",size:"small"},{default:m((()=>a[10]||(a[10]=[w(" 删除 ")]))),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[J,g(K)]]),p(E,{class:"flex justify-end mt-5"},{default:m((()=>[p(B,{"current-page":Y.page,"onUpdate:currentPage":a[2]||(a[2]=e=>Y.page=e),"page-size":Y.size,"onUpdate:pageSize":a[3]||(a[3]=e=>Y.size=e),class:"mr-5","page-sizes":[15,30,45,60],layout:"total, sizes, prev, pager, next, jumper",total:g(L),onSizeChange:q,onCurrentChange:q},null,8,["current-page","page-size","total"])])),_:1})])])}}});"function"==typeof v&&v(K);const L=b(K,[["__scopeId","data-v-d62bb14b"]]);export{L as default};