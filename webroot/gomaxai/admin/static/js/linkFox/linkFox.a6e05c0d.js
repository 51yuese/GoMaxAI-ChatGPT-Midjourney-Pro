
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var a=Object.defineProperty,t=(t,e,s)=>(((t,e,s)=>{e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s})(t,"symbol"!=typeof e?e+"":e,s),s);import{aw as e}from"../main-527fe521.js";const s={queryTaskAll:a=>e.get("linkFox/getAllTask_admin",{params:a,fetchOptions:{saas:!0}}),categoryList:a=>e.get("linkFox/categoryList_admin",{params:a,fetchOptions:{saas:!0}}),getGallery:a=>e.get("linkFox/getGallery_admin",{params:a,fetchOptions:{saas:!0}}),saveCategory:a=>e.post("linkFox/saveCategory_admin",a),deleteCategory:a=>e.get("linkFox/deleteCategory_admin",{params:a,fetchOptions:{saas:!0}}),saveGallery:a=>e.post("linkFox/saveGallery_admin",a)};class i{constructor(){t(this,"id"),t(this,"style"),t(this,"styleEn"),t(this,"imageUrl"),t(this,"status"),t(this,"createdAt"),t(this,"updatedAt")}}export{i as T,s as l};
