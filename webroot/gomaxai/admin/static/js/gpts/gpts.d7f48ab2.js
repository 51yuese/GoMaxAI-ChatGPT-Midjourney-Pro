
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{ay as s}from"../main-a14f6586.js";const t={queryModels:t=>s.post("gpts/query",t,{fetchOptions:{saas:!0,back:!0}}),insertModelsBatch:t=>s.post("gpts/batch",t),setModels:t=>s.post("gpts/set",t),delModels:t=>s.post("gpts/delete",t),addGptsGroup:t=>s.post("gpts/group_add",t),removeGptsGroup:t=>s.post("gpts/group_remove",t),modifyGptsGroup:t=>s.post("gpts/group_modify",t),queryGptsGroup:t=>s.post("gpts/group_query",t,{fetchOptions:{saas:!0}})};export{t as A};
