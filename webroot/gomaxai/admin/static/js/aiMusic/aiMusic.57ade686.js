
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var e=Object.defineProperty,t=(t,a,s)=>(((t,a,s)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s})(t,"symbol"!=typeof a?a+"":a,s),s);import{ap as a}from"../main-46c178e9.js";class s{constructor(){t(this,"id"),t(this,"dictType"),t(this,"dictName"),t(this,"dictValue"),t(this,"deleteFlag"),t(this,"createdAt"),t(this,"updatedAt")}}const i={page:e=>a.get("/dict/page",{params:e}),save:e=>a.post("/dict/save",e),delete:e=>a.post("/dict/delete",e),deleteLog:e=>a.post("/chatLog/delChatLog",e)};export{i as A,s as T};
