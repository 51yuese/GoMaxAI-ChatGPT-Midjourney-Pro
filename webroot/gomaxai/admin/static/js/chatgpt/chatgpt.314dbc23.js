
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{ad as t}from"../main-7fe883cc.js";const e={queryKeyList:e=>t.get("chatgpt/keyList",{params:e}),queryKeyModelList:e=>t.get("chatgpt/keyModelList",{params:e}),queryKeyDetail:e=>t.get("chatgpt/keyDetail",{params:e}),addGptKey:e=>t.post("chatgpt/addKey",e),updateGptKey:e=>t.post("chatgpt/updateKey",e),addWhiteUser:e=>t.post("chatgpt/addWhiteUser",e),updateWhiteUser:e=>t.post("chatgpt/updateWhiteUser",e),queryWhiteUserList:e=>t.get("chatgpt/userWhiteList",{params:e}),deleteGptKey:e=>t.post("chatgpt/deleteKey",e)};export{e as A};
