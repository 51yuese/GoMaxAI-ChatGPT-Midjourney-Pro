import{_ as a,a as e,q as s,b as i,c as t,d as l,s as o,e as n,f as c,g as d,h as r,i as p}from"../aboutUs copy/aboutUs copy.8a09bdfe.js";import{e as u,a8 as g,ax as x,a9 as v,j as y,r as h,N as f,O as m,P as b,aa as k,Z as w,_ as F,$ as D,a6 as I,U as _,W as C,X as L,aq as j,a0 as B,a1 as U,a2 as q,b7 as z,a3 as N}from"../main-cd5b7247.js";const O=a=>(U("data-v-c7f2f13e"),a=a(),q(),a),P={class:"fixedBox",id:"toolbar-box"},S=[O((()=>b("img",{src:r,alt:""},null,-1)))],T=[O((()=>b("img",{src:p,alt:""},null,-1)))],W=["onClick"],X=["src"],Z={style:{"margin-left":"8px","margin-top":"3px"}},$={class:"dark:bg-[#19191B] bg-[#F8F9F9]",style:{width:"466px",height:"394px","border-radius":"24px"}},A={style:{display:"flex","justify-content":"space-between",padding:"16px"}},E=O((()=>b("p",{style:{"font-size":"17px","font-weight":"bold"}},"客服",-1))),G={style:{flex:"1",display:"flex","justify-content":"center",height:"calc(100% - 56px)","align-items":"center","padding-bottom":"24px"}},H={style:{padding:"24px 24px 12px 24px","border-radius":"12px","background-color":"#fff",border:"1px solid #e8e8e8","text-align":"center"}},J=["src"],K=O((()=>b("p",{style:{color:"#8b8c8c","margin-top":"12px"}}," 请使用微信扫描上方二维码 ",-1))),M=N(u({__name:"index",setup(r){g();const p=x(),u=v(),U=y((()=>"dark"===u.theme)),q=h(!1),N=h(""),O=h(!1),M=async()=>{N.value=await(async()=>await z({keys:["wechatImage"]}).then((a=>a.data)))(),q.value=!0},Q=[{title:"帮助与常见问题解答",id:0,iconDark:s,iconLight:i},{title:"条款与政策",id:1,iconDark:t,iconLight:l},{title:"反馈与建议",id:2,iconDark:o,iconLight:n},{title:"关于我们",id:3,iconDark:c,iconLight:d}];function R(){O.value=!O.value}return(s,i)=>(f(),m(w,null,[b("div",P,[b("div",{class:"fixedIcon dark:bg-[#1B1C22] bg-[#FFF]",onClick:M},S),b("div",{class:"fixedIcon dark:bg-[#111113] bg-[#FFF]",onClick:R,style:{"margin-top":"12px"}},T),O.value?(f(),m("div",{key:0,class:k(U.value?"helpBoxD":"helpBoxL")},[(f(),m(w,null,F(Q,(a=>b("div",{class:k(U.value?"hlepItemD":"hlepItemL"),key:a.id,style:{display:"flex","align-items":"center"},onClick:e=>function(a){0==a.id?O.value=!1:1==a.id?(window.open("/policy","_blank"),O.value=!1):2==a.id?(p.updateFeedbackDialog(!0),O.value=!1):3==a.id&&(B.emit("aboutIsShow",!0),O.value=!1)}(a)},[b("img",{src:U.value?a.iconDark:a.iconLight,alt:""},null,8,X),b("div",Z,D(a.title),1)],10,W))),64))],2)):I("",!0)]),_(L(j),{show:q.value,"onUpdate:show":i[2]||(i[2]=a=>q.value=a)},{default:C((()=>[b("div",$,[b("div",A,[E,U.value?(f(),m("img",{key:0,src:a,style:{cursor:"pointer"},alt:"",onClick:i[0]||(i[0]=a=>q.value=!1)})):(f(),m("img",{key:1,src:e,style:{cursor:"pointer"},alt:"",onClick:i[1]||(i[1]=a=>q.value=!1)}))]),b("div",G,[b("div",H,[b("img",{src:N.value,alt:"",style:{width:"200px",height:"200px"}},null,8,J),K])])])])),_:1},8,["show"])],64))}}),[["__scopeId","data-v-c7f2f13e"]]);export{M as T};