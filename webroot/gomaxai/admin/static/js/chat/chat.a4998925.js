
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{ad as a}from"../main-043c96ab.js";const r={queryChatAll:r=>a.get("chatLog/chatAll",{params:r}),queryDrawAll:r=>a.get("chatLog/drawAll",{params:r}),recDrawImg:r=>a.post("chatLog/recDrawImg",r),queryMjDrawAll:r=>a.get("midjourney/getList",{params:r}),recMjDrawImg:r=>a.post("midjourney/rec",r),delChatLog:r=>a.post("midjourney/del",r)};export{r as A};
