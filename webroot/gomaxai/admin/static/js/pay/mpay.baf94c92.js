
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,u as e,G as l,r as p,x as t,j as r,o as y,c as i,b as d,f as o,g as u,W as n,X as s,h as c,Q as f,P as m,p as g,k as M,t as x,_ as b,q as v}from"../main-2d3d97e8.js";const _=a=>(g("data-v-0180eddf"),a=a(),M(),a),h=_((()=>d("div",{style:{"font-size":"15px",color:"#20295A","font-weight":"500","margin-top":"32px"}}," 支付参数设置 ",-1))),U={style:{display:"flex","align-items":"center","margin-top":"16px","margin-bottom":"24px"}},V=_((()=>d("div",{style:{color:"#9FA3B8","font-size":"15px"}},"启用当前支付",-1))),P={style:{"margin-top":"3px","margin-left":"12px"}},S={style:{"margin-top":"16px"}},A=_((()=>d("div",{style:{color:"#9FA3B8","font-size":"15px","margin-right":"20px"}}," 开启支付渠道 ",-1))),C={style:{"margin-top":"3px"}},z={style:{"margin-top":"16px"}},k=a({__name:"mpay",setup(a){const g=e(),M=l({payMpayStatus:"",payMpayPid:"",payMpaySecret:"",payMpayNotifyUrl:"",payMpayReturnUrl:"",payMpayApiPayUrl:"",payMpayRedirect:"",payMpayChannel:[]}),b=p({payMpayStatus:[{required:!0,trigger:"change",message:"请选择当前支付开启状态"}],payMpaySecret:[{required:!0,trigger:"blur",message:"请填写支付秘钥"}],payMpayPid:[{required:!0,trigger:"blur",message:"请填写商户PID"}],payMpayNotifyUrl:[{required:!0,trigger:"blur",message:"请填写支付通知地址"}],payMpayApiPayUrl:[{required:!0,trigger:"blur",message:"请填写平台支付API请求地址"}]}),v=p(),_=[{label:"微信支付",value:"wxpay"},{label:"支付宝支付",value:"alipay"}];async function k(){const a=await f.queryConfig({keys:["payMpaySecret","payMpayNotifyUrl","payMpayReturnUrl","payMpayPid","payMpayStatus","payMpayApiPayUrl","payMpayRedirect","payMpayChannel"]}),e=a.data.payMpayChannel?JSON.parse(a.data.payMpayChannel):[];Object.assign(M,a.data,{payMpayChannel:e})}function w(){var a;null==(a=v.value)||a.validate((async a=>{if(a){if(0==g.isUserModifyPermissions())return m.error("非超级管理员无权限操作！");try{await f.setConfig({settings:(e=M,Object.keys(e).map((a=>({configKey:a,configVal:q(a,e[a])}))))}),m.success("变更配置信息成功")}catch(l){}k()}else m.error("请填写完整信息");var e}))}function q(a,e){return["payMpayChannel"].includes(a)?e?e?JSON.stringify(e):void 0:[]:e}return t((()=>{k()})),(a,e)=>{const l=r("el-alert"),p=r("el-switch"),t=r("el-input"),f=r("el-form-item"),m=r("el-col"),g=r("el-row"),k=r("el-checkbox"),q=r("el-checkbox-group"),F=r("el-form"),N=r("el-button");return y(),i("div",null,[d("div",null,[o(l,{closable:!1,"show-icon":"",title:"码支付参数说明",description:"码支付只能支持跳转登录、可同时开通多渠道、同时开启多种支付方式的情况优先级参照支付菜单排序、同时只能使用一种平台、所有的支付通知地址统一为 https://域名/api/pay/notify 将域名修改为您的域名即可！",type:"warning"})]),d("div",null,[d("div",null,[h,d("div",U,[V,d("div",P,[o(p,{modelValue:M.payMpayStatus,"onUpdate:modelValue":e[0]||(e[0]=a=>M.payMpayStatus=a),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])])])]),d("div",S,[o(F,{ref_key:"formRef",ref:v,rules:b.value,model:M,"label-width":"120px","label-position":"top"},{default:u((()=>[o(g,null,{default:u((()=>[o(m,{xs:24,md:20,lg:15,xl:8},{default:u((()=>[o(f,{label:"商户PID",prop:"payMpayPid"},{default:u((()=>[o(t,{size:"large",modelValue:M.payMpayPid,"onUpdate:modelValue":e[1]||(e[1]=a=>M.payMpayPid=a),placeholder:"请填写商户PID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(g,null,{default:u((()=>[o(m,{xs:24,md:20,lg:15,xl:8},{default:u((()=>[o(f,{label:"商户秘钥",prop:"payMpaySecret"},{default:u((()=>[o(t,{size:"large",modelValue:M.payMpaySecret,"onUpdate:modelValue":e[2]||(e[2]=a=>M.payMpaySecret=a),placeholder:"请填写商户秘钥",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(g,null,{default:u((()=>[o(m,{xs:24,md:20,lg:15,xl:8},{default:u((()=>[o(f,{label:"支付通知地址",prop:"payMpaySecret"},{default:u((()=>[o(t,{size:"large",modelValue:M.payMpayNotifyUrl,"onUpdate:modelValue":e[3]||(e[3]=a=>M.payMpayNotifyUrl=a),placeholder:"请填写支付通知地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(g,null,{default:u((()=>[o(m,{xs:24,md:20,lg:15,xl:8},{default:u((()=>[o(f,{label:"支付回调地址",prop:"payMpaySecret"},{default:u((()=>[o(t,{size:"large",modelValue:M.payMpayReturnUrl,"onUpdate:modelValue":e[4]||(e[4]=a=>M.payMpayReturnUrl=a),placeholder:"请填写支付成功后的回跳地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(g,null,{default:u((()=>[o(m,{xs:24,md:20,lg:15,xl:8},{default:u((()=>[o(f,{label:"支付请求地址",prop:"payMpayApiPayUrl"},{default:u((()=>[o(t,{size:"large",modelValue:M.payMpayApiPayUrl,"onUpdate:modelValue":e[5]||(e[5]=a=>M.payMpayApiPayUrl=a),placeholder:"请填写平台支付请求地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(g,null,{default:u((()=>[o(m,{xs:24,md:24,lg:24,xl:24},{default:u((()=>[o(f,{prop:"payEpayChannel"},{default:u((()=>[A,d("div",C,[o(q,{modelValue:M.payMpayChannel,"onUpdate:modelValue":e[6]||(e[6]=a=>M.payMpayChannel=a),size:"small"},{default:u((()=>[(y(),i(n,null,s(_,(a=>o(k,{key:a.value,value:a.value},{default:u((()=>[c(x(a.label),1)])),_:2},1032,["value"]))),64))])),_:1},8,["modelValue"])])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])]),d("div",z,[o(N,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:w},{default:u((()=>[c("保存设置")])),_:1})])])}}});"function"==typeof v&&v(k);const w=b(k,[["__scopeId","data-v-0180eddf"]]);export{w as default};