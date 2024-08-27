
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,r as s,G as t,x as l,j as n,V as i,o as r,c as o,f as d,b as u,g as c,W as p,X as m,e as f,h as g,w as y,J as b,t as v,Y as x,P as _,y as w,p as h,k,_ as z,q as C}from"../main-7fe883cc.js";import{A as F,M as j}from"../index/index.21f4f4e7.js";import S from"../components/manager.68f1e853.js";const U=e=>(h("data-v-cf85a507"),e=e(),k(),e),V={class:"search_add_card"},P={style:{display:"flex","align-items":"center"}},A=U((()=>u("div",{class:"condition_name"},"管理员账号",-1))),M={style:{"margin-left":"10px"}},B=U((()=>u("div",{class:"condition_name"},"管理员状态",-1))),I={style:{"margin-left":"10px"}},L={style:{"margin-top":"12px"}},O={style:{display:"flex","align-items":"center"}},R=e({__name:"user-access",setup(e){const h=a();s();const k=s(0);s(!1);const z=s(!1);t({status:0,id:0});const C=t({username:"",name:"",status:0,page:1,size:20}),U=s(),R=s([]);async function q(){try{z.value=!0;const e=await x.queryAccessList(C),{rows:a,count:s}=e.data;z.value=!1,k.value=s,R.value=a}catch(e){z.value=!1}}function E(e){Object.assign(C,{username:"",name:"",status:0,page:1,size:20}),q()}function J(){U.value.open()}const $=e=>{if(!e)return"全部";return(e&&JSON.parse(e)||[]).map((e=>j.map().get(e))).join("，")},D=e=>["super","admin"].includes(e);return l((()=>q())),(e,a)=>{const s=n("el-input"),t=n("el-option"),l=n("el-select"),j=n("el-button"),G=n("RefreshRight"),N=n("el-icon"),W=n("el-table-column"),X=n("el-tag"),Y=n("el-popconfirm"),H=w,K=n("el-popover"),Q=n("el-table"),T=n("el-pagination"),Z=n("el-row"),ee=i("loading");return r(),o("div",null,[d(S,{ref_key:"managerRef",ref:U,onFresh:q},null,512),u("div",V,[u("div",P,[u("div",null,[A,d(s,{modelValue:C.username,"onUpdate:modelValue":a[0]||(a[0]=e=>C.username=e),placeholder:"用户账号[模糊搜索]",clearable:""},null,8,["modelValue"])]),u("div",M,[B,d(l,{modelValue:C.status,"onUpdate:modelValue":a[1]||(a[1]=e=>C.status=e),style:{width:"192px"}},{default:c((()=>[(r(!0),o(p,null,m(f(F),(e=>(r(),b(t,{label:e.label,value:e.value},null,8,["label","value"])))),256))])),_:1},8,["modelValue"])]),u("div",I,[d(j,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",height:"32px",background:"#EFF6FF",color:"#60A5FA","border-radius":"8px","margin-top":"25px"},onClick:q},{default:c((()=>[g(" 查询 ")])),_:1})]),u("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:E},[d(N,{color:"#3B82F6",size:"20"},{default:c((()=>[d(G)])),_:1})])]),u("div",null,[d(j,{style:{"border-radius":"8px",border:"1px solid #3B82F6",color:"#3B82F6","font-size":"15px",height:"32px","margin-top":"25px"},onClick:J},{default:c((()=>[g(" 添加管理员 ")])),_:1})])]),u("div",L,[y((r(),b(Q,{border:"",data:R.value,height:"66vh",width:"100%"},{default:c((()=>[d(W,{prop:"id",label:"管理员ID",width:"100"}),d(W,{prop:"username",label:"登录账号",width:"150"}),d(W,{label:"管理员状态",width:"100",align:"center"},{default:c((e=>[1==e.row.managerStatus?(r(),b(X,{key:0,type:"primary"},{default:c((()=>[g("启用")])),_:1})):(r(),b(X,{key:1,type:"danger"},{default:c((()=>[g("停用")])),_:1}))])),_:1}),d(W,{prop:"accessLabel",label:"权限",align:"center"},{default:c((({row:e})=>[u("p",null,v($(e.accessLabel)),1)])),_:1}),d(W,{fixed:"right",label:"操作",width:"150",align:"center"},{default:c((e=>[u("div",O,[d(j,{link:"",type:"primary",size:"small",disabled:D(e.row.role),onClick:a=>async function(e){U.value.open(e.userId)}(e.row)},{default:c((()=>[g(" 编辑 ")])),_:2},1032,["disabled","onClick"]),d(Y,{title:"删除后不可找回，确定删除?","confirm-button-text":"确认",onConfirm:a=>(async e=>{if(0==h.isUserModifyPermissions())return _.error("非超级管理员无权限操作！");await x.deleteAccess({id:e.id}),_.success("删除管理员成功！"),await q()})(e.row)},{reference:c((()=>[d(j,{link:"",type:"danger",disabled:D(e.row.role),size:"small"},{default:c((()=>[g(" 删除 ")])),_:2},1032,["disabled"])])),_:2},1032,["onConfirm"]),d(K,{placement:"bottom",trigger:"click",content:"this is content, this is content, this is content","popper-class":"el-popover-self"},{reference:c((()=>[u("div",null,[d(N,{size:24,style:{"margin-left":"10px"}},{default:c((()=>[d(H,{name:"more"})])),_:1})])])),default:c((()=>[u("div",null,[d(j,{link:"",type:"primary",size:"small",disabled:D(e.row.role),onClick:a=>async function(e){if(0==h.isUserModifyPermissions())return _.error("非超级管理员无权限操作！");const a={id:e.id,status:1===e.managerStatus?2:1};(await x.updateManagerStatus(a)).success&&_({type:"success",message:`管理员${1===e.managerStatus?"停用":"启用"}成功！`}),await q()}(e.row)},{default:c((()=>[g(v(1===e.row.managerStatus?"停用":"启用"),1)])),_:2},1032,["disabled","onClick"]),d(Y,{title:"确认重置此用户密码为【123456】?","confirm-button-text":"确认重置",onConfirm:a=>async function(e){if(0==h.isUserModifyPermissions())return _.error("非超级管理员无权限操作！");const{id:a}=e;(await x.resetUserPassword({id:a})).success&&_({type:"success",message:`重置管理员[ ${e.username} ]密码为初始密码为[123456]完成！`}),await q()}(e.row)},{reference:c((()=>[d(j,{link:"",type:"danger",disabled:D(e.row.role)},{default:c((()=>[g(" 重置密码 ")])),_:2},1032,["disabled"])])),_:2},1032,["onConfirm"])])])),_:2},1024)])])),_:1})])),_:1},8,["data"])),[[ee,z.value]]),d(Z,{class:"flex justify-end mt-5 pb-5"},{default:c((()=>[d(T,{"current-page":C.page,"onUpdate:currentPage":a[2]||(a[2]=e=>C.page=e),"page-size":C.size,"onUpdate:pageSize":a[3]||(a[3]=e=>C.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:k.value,onSizeChange:q,onCurrentChange:q},null,8,["current-page","page-size","total"])])),_:1})])])}}});"function"==typeof C&&C(R);const q=z(R,[["__scopeId","data-v-cf85a507"]]);export{q as default};