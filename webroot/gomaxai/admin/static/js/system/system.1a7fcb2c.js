
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{ay as e}from"../main-537e5929.js";const a={uploadFile:a=>e.post("file/upload",a),queryFeedback:a=>e.get("feedback/query",{params:a,fetchOptions:{saas:!0}}),removeFeedback:a=>e.post("feedback/delete",a),setFeedbackStatus:a=>e.post("feedback/status",a),indexRecPage:a=>e.get("index-rec/page",{params:a}),indexRecSave:a=>e.post("index-rec/save",a),indexRecDelete:a=>e.post("index-rec/delete",a)};export{a};
