
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{ad as a}from"../main-2d3d97e8.js";const e={queryAllCrami:e=>a.get("crami/queryAllCrami",{params:e}),delCrami:e=>a.post("crami/delCrami",e),createCrami:e=>a.post("crami/createCrami",e),batchDelCrami:e=>a.post("crami/batchDelCrami",e),delPackageType:e=>a.post("crami/deleteType",e),updatePackageType:e=>a.post("crami/updateType",e),createPackageType:e=>a.post("crami/createType",e),queryPackageType:()=>a.get("crami/queryAllType"),queryAllPackage:e=>a.get("crami/packagePageV2",{params:e}),createPackage:e=>a.post("crami/packageCreateV2",e),updatePackage:e=>a.post("crami/packageUpdateV2",e),delPackage:e=>a.post("crami/packageDeleteV2",e)};export{e as A};
