
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.2a1afca6.js";import{d as l,F as a,r as t,o,l as n,b as i,e as s,h as c,i as u,f as r,j as d,Y as m,X as f,c as g,P as h,t as p,q as b}from"../main-46c178e9.js";const P={class:"flex justify-between"},_=l({__name:"logo",setup(l){const b=[{label:"ChatGpt聊天",path:"/chat"},{label:"Dall-E2绘画",path:"/draw"},{label:"Midjourney绘画",path:"/midjourney"},{label:"mj公共预览页",path:"/market"},{label:"mind思维导图",path:"/mind"},{label:"应用中心",path:"/gpts"},{label:"不指定首页",path:""}],_=a({clientMenuList:[],clientHomePath:"",clientLogoPath:"",clientFavoIconPath:""}),v=t({clientHomePath:[{required:!1,trigger:"change",message:"请选择项目默认主页地址"}],clientMenuList:[{required:!1,trigger:"change",message:"请选择客户端开放的菜单"}],clientLogoPath:[{required:!1,trigger:"blur",message:"请填写您的网站LOGO图片链接"}],clientFavoIconPath:[{required:!1,trigger:"blur",message:"请填写您的网站favorit.ico网站logo地址"}]}),y=t();async function L(){const e=await g.queryConfig({keys:["clientHomePath","clientMenuList","clientLogoPath","clientFavoIconPath"]}),l=e.data;l.clientMenuList=l.clientMenuList?JSON.parse(l.clientMenuList):[],Object.assign(_,e.data)}function x(){var e;null==(e=y.value)||e.validate((async e=>{if(e){try{await g.setConfig({settings:(l=_,Object.keys(l).map((e=>({configKey:e,configVal:O(e,l[e])}))))}),h.success("变更配置信息成功")}catch(a){}L()}else h.error("请填写完整信息");var l}))}function O(e,l){return["clientMenuList"].includes(e)?l?l?JSON.stringify(l):void 0:[]:l}return o((()=>{L()})),(l,a)=>{const t=n("el-alert"),o=e,g=n("el-button"),h=n("el-radio"),L=n("el-radio-group"),O=n("el-form-item"),V=n("el-col"),j=n("el-row"),M=n("el-input"),w=n("el-form"),F=n("el-card");return i(),s("div",null,[c(o,{bottomPadding:"20px"},{default:u((()=>[c(t,{closable:!1,"show-icon":"",title:"动态菜单配置说明",description:"动态菜单继承到下方、用户端logo配置在客户端左上角、ico为网站图标请使用svg格式、可以在线转格式！",type:"success"})])),_:1}),c(F,{style:{margin:"20px 20px 0 20px"}},{header:u((()=>[r("div",P,[a[4]||(a[4]=r("b",null,"客户端动态菜单设置参数设置",-1)),c(g,{class:"button",onClick:x},{default:u((()=>a[3]||(a[3]=[d(" 保存设置 ")]))),_:1})])])),default:u((()=>[c(w,{ref_key:"formRef",ref:y,rules:v.value,model:_,"label-width":"130px"},{default:u((()=>[c(j,null,{default:u((()=>[c(V,{xs:24,md:24,lg:24,xl:24},{default:u((()=>[c(O,{label:"设置指定首页",prop:"clientHomePath"},{default:u((()=>[c(L,{modelValue:_.clientHomePath,"onUpdate:modelValue":a[0]||(a[0]=e=>_.clientHomePath=e)},{default:u((()=>[(i(),s(m,null,f(b,(e=>c(h,{key:e.path,size:"small",border:"",label:e.path},{default:u((()=>[d(p(e.label),1)])),_:2},1032,["label"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(j,null,{default:u((()=>[c(V,{xs:24,md:24,lg:24,xl:24},{default:u((()=>[c(O,{label:"用户端LOGO",prop:"clientLogoPath"},{default:u((()=>[c(M,{modelValue:_.clientLogoPath,"onUpdate:modelValue":a[1]||(a[1]=e=>_.clientLogoPath=e),placeholder:"请填写您要设置的网站LOGO图片链接",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(j,null,{default:u((()=>[c(V,{xs:24,md:24,lg:24,xl:24},{default:u((()=>[c(O,{label:"用户端ico",prop:"clientFavoIconPath"},{default:u((()=>[c(M,{modelValue:_.clientFavoIconPath,"onUpdate:modelValue":a[2]||(a[2]=e=>_.clientFavoIconPath=e),placeholder:"请填写您要设置的网站ico地址、格式为svg",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof b&&b(_);export{_ as default};