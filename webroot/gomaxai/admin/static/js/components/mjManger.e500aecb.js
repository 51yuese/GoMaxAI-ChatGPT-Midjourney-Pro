
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,r as a,F as l,l as o,b as t,J as d,i as n,f as r,t as i,g as u,h as s,j as c,O as m,P as p,x as g,_ as h}from"../main-fe71c3b2.js";import{A as f}from"../mj/mj.b05f9cba.js";const I={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},b={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},_={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},V=h(e({__name:"mjManger",emits:["fresh"],setup(e,{expose:h,emit:V}){const x=a(!1),j=a(""),y=a(0),w=a();a(!1);const v=l({account:"",channelId:"",guildId:"",authorization:"",mjBotChannelId:"",nijiBotChannelId:"",concurrency:3,timeout:5,awaitQueue:10,weight:10,proxyUrl:"",remark:""}),z=V,C=l({account:[{required:!0,message:"请输入账户名",trigger:"change"},{max:50,message:"最大长度50"}],channelId:[{required:!0,message:"请输入频道ID",trigger:"change"},{max:50,message:"最大长度50"}],guildId:[{required:!0,message:"请输入服务器ID",trigger:"change"},{max:50,message:"最大长度50"}],authorization:[{required:!0,message:"请输入授权令牌",trigger:"change"},{max:500,message:"最大长度500"}],timeout:[{required:!0,message:"超时时间介于1-20分钟之间",trigger:"change"}],concurrency:[{required:!0,message:"并发数介于1-20之间",trigger:"change"}]});const k=async e=>{await(null==e?void 0:e.validate((async e=>{e&&(y.value?await U({id:y.value,...v}):await B(v),z("fresh",!0),x.value=!1,Object.assign(v,{}))})))},B=async e=>(await f.addMjParam(e),p.success("添加MJ账户信息成功！"),!0),F=async e=>await f.getMjParamById(e).then((e=>e.data)),U=async e=>{await f.modifyMjParam(e),p.success("更新MJ账户信息成功！")};return h({open:function(e){x.value=!0,y.value=e||0,j.value=e?"编辑MJ账户信息":"添加MJ账户信息",e&&e>0?F({id:e}).then((e=>{Object.assign(v,e)})):Object.assign(v,{mjId:"",account:"",channelId:"",guildId:"",authorization:"",mjBotChannelId:"",nijiBotChannelId:"",applicationId:"",version:"",sessionId:"",mode:1,concurrency:3,timeout:5,awaitQueue:10,weight:10,proxyUrl:"",remark:""})}}),(e,a)=>{const l=g,p=o("el-icon"),h=o("el-input"),f=o("el-form-item"),V=o("el-col"),y=o("el-row"),z=o("el-form"),B=o("el-button"),F=o("el-dialog");return t(),d(F,{modelValue:u(x),"onUpdate:modelValue":a[12]||(a[12]=e=>m(x)?x.value=e:null),width:"900","show-close":!1,"destroy-on-close":""},{header:n((({close:e,titleId:o,titleClass:t})=>[r("div",I,[r("div",null,i(u(j)),1),r("div",{onClick:a[0]||(a[0]=e=>x.value=!1),style:{cursor:"pointer"}},[s(p,null,{default:n((()=>[s(l,{name:"close"})])),_:1})])])])),default:n((()=>[r("div",b,[s(z,{model:v,"label-position":"right",ref_key:"formRef",ref:w,rules:C,inline:!1,"label-width":"180px"},{default:n((()=>[s(y,{gutter:16},{default:n((()=>[s(V,{span:12},{default:n((()=>[s(f,{label:"账户",prop:"account"},{default:n((()=>[s(h,{size:"large",modelValue:v.account,"onUpdate:modelValue":a[1]||(a[1]=e=>v.account=e),placeholder:"输入账户",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),s(V,{span:12},{default:n((()=>[s(f,{label:"服务器ID(guildId)",prop:"guildId"},{default:n((()=>[s(h,{size:"large",modelValue:v.guildId,"onUpdate:modelValue":a[2]||(a[2]=e=>v.guildId=e),placeholder:"输入服务器ID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),s(V,{span:12},{default:n((()=>[s(f,{label:"通道ID(channelId)",prop:"channelId"},{default:n((()=>[s(h,{size:"large",modelValue:v.channelId,"onUpdate:modelValue":a[3]||(a[3]=e=>v.channelId=e),placeholder:"输入频道ID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),s(V,{span:12},{default:n((()=>[s(f,{label:"授权令牌(authorization)",prop:"authorization"},{default:n((()=>[s(h,{size:"large",modelValue:v.authorization,"onUpdate:modelValue":a[4]||(a[4]=e=>v.authorization=e),placeholder:"输入授权令牌",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),s(V,{span:12},{default:n((()=>[s(f,{label:"MJ私信ID",prop:"mjBotChannelId"},{default:n((()=>[s(h,{size:"large",modelValue:v.mjBotChannelId,"onUpdate:modelValue":a[5]||(a[5]=e=>v.mjBotChannelId=e),placeholder:"输入MJ私信ID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),s(V,{span:12},{default:n((()=>[s(f,{label:"niji私信ID",prop:"nijiBotChannelId"},{default:n((()=>[s(h,{size:"large",modelValue:v.nijiBotChannelId,"onUpdate:modelValue":a[6]||(a[6]=e=>v.nijiBotChannelId=e),placeholder:"输入niji私信ID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),s(V,{span:12},{default:n((()=>[s(f,{label:"任务超时时间",prop:"timeout"},{default:n((()=>[s(h,{size:"large",modelValue:v.timeout,"onUpdate:modelValue":a[7]||(a[7]=e=>v.timeout=e),placeholder:"任务超时时间"},null,8,["modelValue"])])),_:1})])),_:1}),s(V,{span:12},{default:n((()=>[s(f,{label:"权重",prop:"weight"},{default:n((()=>[s(h,{size:"large",modelValue:v.weight,"onUpdate:modelValue":a[8]||(a[8]=e=>v.weight=e),placeholder:"权重"},null,8,["modelValue"])])),_:1})])),_:1}),s(V,{span:24},{default:n((()=>[s(f,{label:"备注",prop:"remark"},{default:n((()=>[s(h,{size:"large",modelValue:v.remark,"onUpdate:modelValue":a[9]||(a[9]=e=>v.remark=e),placeholder:"输入备注",clearable:"",maxlength:"200"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])]),r("div",_,[s(B,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:a[10]||(a[10]=e=>x.value=!1)},{default:n((()=>a[13]||(a[13]=[c("取消 ")]))),_:1}),s(B,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:a[11]||(a[11]=e=>k(u(w)))},{default:n((()=>a[14]||(a[14]=[c(" 确定 ")]))),_:1})])])),_:1},8,["modelValue"])}}}),[["__scopeId","data-v-7107d51d"]]);export{V as default};