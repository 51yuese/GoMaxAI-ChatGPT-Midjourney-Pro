
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,S as a,r as t,e as l,o as n,j as o,h as s,g as i,q as r,i as u,s as d,k as f,a2 as m}from"../main-a14f6586.js";const c=e({__name:"value",setup(e){var m;const c=null==(m=a().path.split("/").at(-1))?void 0:m.toString(),v=t(),g=t(),p=t();function y(){return new Promise(((e,a)=>{p.value.validate().then((a=>{a?v.value.save().then((a=>{e(a)})):e(!1)}))}))}return"/admin/cm/config/getConfig".get({code:c}).then((e=>{g.value=e.data})),(e,a)=>{const t=l("ElButton"),m=l("ElsDynamicRender"),c=l("ElsForm"),h=l("ElsContainer");return n(),o(h,{ref_key:"containerRef",ref:p,style:{width:"50%",position:"relative"}},{default:s((()=>[i(t,{type:"primary",bg:"",text:"",style:{cursor:"pointer",position:"absolute",right:"0","z-index":"10000"},onClick:y},{default:s((()=>a[2]||(a[2]=[r("保存 ")]))),_:1}),u(g)?(n(),o(c,{key:0,modelValue:u(g),"onUpdate:modelValue":a[1]||(a[1]=e=>d(g)?g.value=e:null),ref_key:"formRef",ref:v,saveUrl:"/admin/cm/config/save",size:"large"},{default:s((()=>[i(m,{config:u(g).config,modelValue:u(g).value,"onUpdate:modelValue":a[0]||(a[0]=e=>u(g).value=e)},null,8,["config","modelValue"])])),_:1},8,["modelValue"])):f("",!0)])),_:1},512)}}});"function"==typeof m&&m(c);export{c as default};
