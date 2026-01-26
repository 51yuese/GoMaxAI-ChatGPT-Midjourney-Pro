
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,V as s,r as o,X as t,C as e,W as i,e as r,o as n,f as l,g as u,h as p,m,q as c,k as d,Y as f,af as y,a2 as b,a3 as j}from"../main-450992e1.js";/* empty css                     */const g={key:0},T={style:{"margin-top":"50px"}},x=a({__name:"mjCourse",setup(a){const b=s(),j=o(!1);t();const x=e({mjTutorials:"",mjTaobao:""});async function k(){const a=await f.queryConfig({keys:["mjTaobao","mjTutorials"]}),{mjTaobao:s,mjTutorials:o}=a.data;Object.assign(x,{mjTaobao:s,mjTutorials:o}),j.value=!0}async function v(){if(0==b.isUserModifyPermissions())return y.error("非超级管理员无权限操作！");try{await f.setConfig({settings:(a=x,Object.keys(a).map((s=>({configKey:s,configVal:a[s]}))))}),y.success("变更配置信息成功")}catch(s){}var a;k()}return i((()=>{k()})),(a,s)=>{const o=r("ElsInput"),t=r("ElsForm"),e=r("el-button");return j.value?(n(),l("div",g,[u(t,{modelValue:x,"onUpdate:modelValue":s[0]||(s[0]=a=>x=a),"label-position":"top","input-width":"500",size:"large"},{default:p((()=>[u(o,{label:"教程链接",prop:"mjTutorials"}),u(o,{label:"购买链接",prop:"mjTaobao"})])),_:1},8,["modelValue"]),m("div",T,[u(e,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:v},{default:p((()=>s[1]||(s[1]=[c("保存设置")]))),_:1})])])):d("",!0)}}});"function"==typeof j&&j(x);const k=b(x,[["__scopeId","data-v-dcfeb595"]]);export{k as default};
