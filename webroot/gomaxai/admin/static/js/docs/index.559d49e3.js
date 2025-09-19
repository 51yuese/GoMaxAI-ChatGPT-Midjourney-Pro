
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,r as a,e as l,o as t,j as r,h as s,g as o,i as n,q as d,al as i,P as u,a2 as p}from"../main-98fa617f.js";const c=e({__name:"index",setup(e){const p=a(),c=a(),f=a(),m=a([{name:"查询",color:"primary",icon:"search",action:"Search"}]);return(e,a)=>{const _=l("ElsInput"),b=l("ElsMenuTool"),h=l("ElsFormQuery"),y=l("ElsColumn"),k=l("el-button"),w=l("ElsTable"),D=l("ElsContainer");return t(),r(D,{ref_key:"containerRef",ref:f},{default:s((()=>[o(h,{ref_key:"queryRef",ref:c,defaultQuery:[{prop:"delete_flag",value:"0"}]},{default:s((()=>[o(_,{prop:"user_id",placeholder:"用户ID",clearable:""}),o(b,{data:n(m),text:"",bg:""},null,8,["data"])])),_:1},512),o(w,{url:"/admin/docsTask/list",ref_key:"tableRef",ref:p,"row-key":"assetsId","show-overflow-tooltip":""},{default:s((()=>[o(y,{prop:"id",label:"ID",sortable:"",width:"100"}),o(y,{prop:"user_id",label:"userID",width:"100"}),o(y,{prop:"name",label:"名称",width:"200"}),o(y,{prop:"content",label:"内容"}),o(y,{prop:"createdAt",label:"创建时间",width:"200",dateFormatter:"YYYY-MM-DD HH:mm:ss","sort-express":"desc"}),o(y,{label:"操作",width:"200"},{default:s((({row:e})=>[o(k,{link:"",type:"danger",size:"small",onClick:a=>function(e){i.confirm("确认删除？").then((()=>{`/admin/docsTask/delete?id=${e.id}`.get().then((e=>{p.value.loadData(),u.success("删除成功")}))}))}(e)},{default:s((()=>a[0]||(a[0]=[d("删除")]))),_:2},1032,["onClick"])])),_:1})])),_:1},512)])),_:1},512)}}});"function"==typeof p&&p(c);export{c as default};
