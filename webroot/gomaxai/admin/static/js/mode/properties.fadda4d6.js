
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
const t={name:"properties",token:function(t,e){var i=t.sol()||e.afterSection,n=t.eol();if(e.afterSection=!1,i&&(e.nextMultiline?(e.inMultiline=!0,e.nextMultiline=!1):e.position="def"),n&&!e.nextMultiline&&(e.inMultiline=!1,e.position="def"),i)for(;t.eatSpace(););var o=t.next();return!i||"#"!==o&&"!"!==o&&";"!==o?i&&"["===o?(e.afterSection=!0,t.skipTo("]"),t.eat("]"),"header"):"="===o||":"===o?(e.position="quote",null):("\\"===o&&"quote"===e.position&&t.eol()&&(e.nextMultiline=!0),e.position):(e.position="comment",t.skipToEnd(),"comment")},startState:function(){return{position:"def",nextMultiline:!1,inMultiline:!1,afterSection:!1}}};export{t as properties};
