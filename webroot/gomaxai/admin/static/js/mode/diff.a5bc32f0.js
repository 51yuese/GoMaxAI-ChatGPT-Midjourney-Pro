
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var e={"+":"inserted","-":"deleted","@":"meta"};const r={name:"diff",token:function(r){var n=r.string.search(/[\t ]+?$/);if(!r.sol()||0===n)return r.skipToEnd(),("error "+(e[r.string.charAt(0)]||"")).replace(/ $/,"");var t=e[r.peek()]||r.skipToEnd();return-1===n?r.skipToEnd():r.pos=n,t}};export{r as diff};
