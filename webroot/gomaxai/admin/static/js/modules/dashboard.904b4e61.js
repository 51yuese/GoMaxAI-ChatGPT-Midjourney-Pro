
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{ay as t}from"../main-9b7515ee.js";const s={getBaseInfo:s=>t.get("/statistic/base",{params:s,fetchOptions:{saas:!0}}),getChatStatistic:s=>t.get("/statistic/chatStatistic",{params:s,fetchOptions:{saas:!0}}),getBaiduVisit:s=>t.get("/statistic/baiduVisit",{params:s}),getModelStatisticsChart:s=>t.get("/statistic/modelUse",{params:s,fetchOptions:{saas:!0}})};export{s as default};
