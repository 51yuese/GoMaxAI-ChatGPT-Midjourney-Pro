
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,U as a,C as s,V as i,e as t,o as r,f as l,m as o,g as n,h as c,q as d,X as p,ae as m,a1 as u}from"../main-a14f6586.js";const g={style:{"margin-top":"16px"}},y={style:{"margin-top":"50px"}},f=u(e({__name:"disclaimer",setup(e){const u=a(),f=s({disclaimer:""});async function x(){const e=await p.queryConfig({keys:["disclaimer"]});Object.assign(f,{disclaimer:e.data})}async function h(){if(0==u.isUserModifyPermissions())return m.error("非超级管理员无权限操作！");if(""!=f.disclaimer){try{await p.setConfig({settings:(e=f,Object.keys(e).map((a=>({configKey:a,configVal:e[a]}))))}),m.success("变更配置信息成功")}catch(a){}var e;x()}else m.error("请填写用免责声明内容")}return i((()=>{x()})),(e,a)=>{const s=t("el-alert"),i=t("el-input"),p=t("el-button");return r(),l("div",null,[o("div",g,[n(s,{closable:!1,"show-icon":"",title:"免责审明设置说明",description:"这里的免责审明设置是对应用户端的免责审明链接、可以使用MD语法或直接使用Html标签进行发布、您也可以直接粘贴上传图片、作为图床使用、其他地方比如上传商品等地方的图片也可以暂时在此作为临时方案。",type:"warning"})]),o("div",null,[a[1]||(a[1]=o("div",{style:{color:"#20295A","font-size":"15px","margin-top":"24px","margin-bottom":"12px"}}," 免责声明内容 ",-1)),n(i,{style:{width:"100%",height:"50vh"},type:"textarea",modelValue:f.disclaimer,"onUpdate:modelValue":a[0]||(a[0]=e=>f.disclaimer=e),placeholder:"请输入免责声明内容",clearable:""},null,8,["modelValue"])]),o("div",y,[n(p,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:h},{default:c((()=>a[2]||(a[2]=[d("保存设置 ")]))),_:1})])])}}}),[["__scopeId","data-v-6332ef01"]]);export{f as default};
