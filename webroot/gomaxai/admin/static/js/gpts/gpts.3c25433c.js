
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{ap as s}from"../main-46c178e9.js";const p={queryModels:p=>s.post("gpts/query",p,{fetchOptions:{saas:!0,back:!0}}),insertModelsBatch:p=>s.post("gpts/batch",p),setModels:p=>s.post("gpts/set",p),delModels:p=>s.post("gpts/delete",p),addGptsGroup:p=>s.post("gpts/group_add",p),removeGptsGroup:p=>s.post("gpts/group_remove",p),modifyGptsGroup:p=>s.post("gpts/group_modify",p),queryGptsGroup:p=>s.post("gpts/group_query",p,{fetchOptions:{saas:!0}})};export{p as A};
