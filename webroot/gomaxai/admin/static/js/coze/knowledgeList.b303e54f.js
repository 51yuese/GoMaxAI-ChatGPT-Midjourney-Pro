
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,r as a,e as l,o as r,j as o,h as t,g as s,i as n,a2 as p}from"../main-537e5929.js";const i=e({__name:"knowledgeList",setup(e){const p=a(),i=a();a(),a(),a(),a();const d=a(),f=a([{name:"查询",color:"primary",icon:"search",action:"Search"}]);return(e,a)=>{const u=l("ElsInput"),c=l("ElsMenuTool"),m=l("ElsFormQuery"),b=l("ElsColumn"),h=l("ElsColumnBool"),_=l("ElsTable"),y=l("ElsContainer");return r(),o(y,{ref_key:"containerRef",ref:d},{default:t((()=>[s(m,{ref_key:"queryRef",ref:i},{default:t((()=>[s(u,{prop:"name",placeholder:"请输入名称"}),s(c,{data:n(f),text:"",bg:""},null,8,["data"])])),_:1},512),s(_,{url:"/admin/coze/knowledge/list",ref_key:"tableRef",ref:p},{default:t((()=>[s(b,{prop:"id",label:"ID",sortable:"",width:"100"}),s(b,{prop:"name",label:"名称",width:"200"}),s(b,{prop:"fileUrl",label:"文件地址"}),s(b,{prop:"description",label:"说明"}),s(h,{prop:"isRelease",label:"是否发布",width:"100"}),s(b,{prop:"createdAt",label:"创建时间",width:"200",dateFormatter:"YYYY-MM-DD HH:mm:ss"})])),_:1},512)])),_:1},512)}}});"function"==typeof p&&p(i);export{i as default};
