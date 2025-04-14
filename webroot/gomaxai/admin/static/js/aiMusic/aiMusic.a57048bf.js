
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var t=Object.defineProperty,e=(e,a,s)=>(((e,a,s)=>{a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s})(e,"symbol"!=typeof a?a+"":a,s),s);import{ay as a}from"../main-537e5929.js";class s{constructor(){e(this,"id"),e(this,"dictType"),e(this,"dictName"),e(this,"dictValue"),e(this,"deleteFlag"),e(this,"publishFlag"),e(this,"createdAt"),e(this,"updatedAt")}}const i={page:t=>a.get("/dict/page",{params:t}),save:t=>a.post("/dict/save",t),delete:t=>a.post("/dict/delete",t),deleteLog:t=>a.post("/chatLog/delChatLog",t)};export{i as A,s as T};
