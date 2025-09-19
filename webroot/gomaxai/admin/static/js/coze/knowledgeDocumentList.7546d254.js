
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,r as l,e as a,o as r,j as t,h as o,g as s,i as p,f as i,t as n,k as d,a2 as f}from"../main-98fa617f.js";const u={key:0},c={key:1},m=e({__name:"knowledgeDocumentList",setup(e){const f=l(),m=l();l(),l(),l(),l();const b=l(),w=l([{name:"查询",color:"primary",icon:"search",action:"Search"}]);return(e,l)=>{const h=a("ElsInput"),y=a("ElsMenuTool"),_=a("ElsFormQuery"),k=a("ElsColumn"),E=a("ElsTable"),g=a("ElsContainer");return r(),t(g,{ref_key:"containerRef",ref:b},{default:o((()=>[s(_,{ref_key:"queryRef",ref:m},{default:o((()=>[s(h,{prop:"name",placeholder:"请输入名称"}),s(y,{data:p(w),text:"",bg:""},null,8,["data"])])),_:1},512),s(E,{url:"/admin/coze/knowledgedocument/list",ref_key:"tableRef",ref:f},{default:o((()=>[s(k,{prop:"id",label:"ID",sortable:"",width:"100",sortExpress:"desc"}),s(k,{prop:"name",label:"名称",width:"200"}),s(k,{prop:"fileUrl",label:"文件地址|网页"},{default:o((({row:e})=>[e.fileUrl?(r(),i("div",u,n(e.fileUrl),1)):d("",!0),e.webUrl?(r(),i("div",c,n(e.webUrl),1)):d("",!0)])),_:1}),s(k,{prop:"fileType",label:"文件类型",width:"100"}),s(k,{prop:"size",label:"文件大小",width:"100"}),s(k,{prop:"sliceCount",label:"分段数量",width:"100"}),s(k,{prop:"status",label:"处理状态",width:"100"}),s(k,{prop:"progress",label:"进度",width:"100"}),s(k,{prop:"createdAt",label:"创建时间",width:"200",dateFormatter:"YYYY-MM-DD HH:mm:ss"})])),_:1},512)])),_:1},512)}}});"function"==typeof f&&f(m);export{m as default};
