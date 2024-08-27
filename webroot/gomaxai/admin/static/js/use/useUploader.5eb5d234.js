
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{A as e}from"../mj/mj.f9be448f.js";import{P as n}from"../main-2d3d97e8.js";function i(){const i=n;return{selectFile:function(){return new Promise(((e,n)=>{const o="image/jpeg,image/jpg,image/gif,image/png",t=[".jpeg",".jpg",".gif",".png"],a=document.createElement("input");a.multiple=!0,a.name="file",a.type="file",a.accept=o,a.click(),a.style.display="none",a.onchange=async()=>{const p=a.files;let r=p&&(null==p?void 0:p.length)>=1?p[0]:void 0;if(r)return o.includes(r.type)?r.size>=536870912?(i.error("上传的文件不能超过512Mb"),void n("上传的文件不能超过512Mb")):void e(r):(i.error("上传文件只支持"+t.join(",")+"格式"),void n("上传文件只支持"+t.join(",")+"格式"));n("未选择文件")},a.remove()}))},upload:async function(n){const{file:i}=n,o=new FormData;return o.append("filename",i.name),o.append("file",i),o.append("dir","mj-upload"),await e.uploadPromptImage(o)}}}export{i as useUploader};
