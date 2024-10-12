
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{ap as e}from"../main-46c178e9.js";const a={queryAllOrder:a=>e.get("order/queryAll",{params:a,fetchOptions:{saas:!0}}),deleteOrder:a=>e.post("order/delete",a),deleteNotPay:()=>e.post("order/deleteNotPay"),deleteIncomeOrder:a=>e.post("balance/deleteAccountLog",a),queryAllAccountDetail:a=>e.get("balance/userPage",{params:a,fetchOptions:{saas:!0}}),getCommissionPage:a=>e.get("order/commissionPage",{params:a,fetchOptions:{saas:!0}}),withdrawal:a=>e.post("order/withdraw-apply",a),withdrawPage:a=>e.get("order/withdraw-page",{params:a,fetchOptions:{saas:!0}}),withdrawApproval:a=>e.post("order/withdraw-approval",a),withdrawApprovalByTime:a=>e.post("order/withdraw-apply-bytime",a)};export{a as o};
