
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{ad as e}from"../main-043c96ab.js";const r={queryAllOrder:r=>e.get("order/queryAll",{params:r}),deleteOrder:r=>e.post("order/delete",r),deleteNotPay:()=>e.post("order/deleteNotPay"),deleteIncomeOrder:r=>e.post("balance/deleteAccountLog",r),queryAllAccountDetail:r=>e.get("balance/userPage",{params:r})};export{r as A};
