
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as t,U as e,C as a,V as s,e as i,o,f as n,m as r,g as m,h as l,q as c,X as p,ae as d,a1 as u}from"../main-98fa617f.js";const g={style:{"margin-top":"16px"}},y={style:{"margin-top":"50px"}},f=u(t({__name:"commitment",setup(t){const u=e(),f=a({commitment:""});async function x(){const t=await p.queryConfig({keys:["commitment"]});Object.assign(f,{commitment:t.data})}async function h(){if(0==u.isUserModifyPermissions())return d.error("非超级管理员无权限操作！");if(""!=f.commitment){try{await p.setConfig({settings:(t=f,Object.keys(t).map((e=>({configKey:e,configVal:t[e]}))))}),d.success("变更配置信息成功")}catch(e){}var t;x()}else d.error("请填写用使用者承诺须知")}return s((()=>{x()})),(t,e)=>{const a=i("el-alert"),s=i("el-input"),p=i("el-button");return o(),n("div",null,[r("div",g,[m(a,{closable:!1,"show-icon":"",title:"使用者承诺须知设置说明",description:"这里的免责审明设置是对应用户端的免责审明链接、可以使用MD语法或直接使用Html标签进行发布、您也可以直接粘贴上传图片、作为图床使用、其他地方比如上传商品等地方的图片也可以暂时在此作为临时方案。",type:"warning"})]),r("div",null,[e[1]||(e[1]=r("div",{style:{color:"#20295A","font-size":"15px","margin-top":"24px","margin-bottom":"12px"}}," 使用者承诺须知 ",-1)),m(s,{style:{width:"100%",height:"50vh"},type:"textarea",modelValue:f.commitment,"onUpdate:modelValue":e[0]||(e[0]=t=>f.commitment=t),placeholder:"请输入使用者承诺须知",clearable:""},null,8,["modelValue"])]),r("div",y,[m(p,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:h},{default:l((()=>e[2]||(e[2]=[c("保存设置 ")]))),_:1})])])}}}),[["__scopeId","data-v-af729cd1"]]);export{f as default};
