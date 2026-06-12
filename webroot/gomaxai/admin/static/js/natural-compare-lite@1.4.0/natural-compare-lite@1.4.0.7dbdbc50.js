import{g as r}from"../ace-builds@1.44.0/ace-builds@1.44.0.f02fcb5d.js";var t={exports:{}},e=function(r,t){var e,a,i=1,n=0,o=0,c=String.alphabet;function s(r,t,a){if(a){for(e=t;(a=s(r,e))<76&&a>65;)++e;return+r.slice(t-1,e)}return(a=c&&c.indexOf(r.charAt(t)))>-1?a+76:(a=r.charCodeAt(t)||0)<45||a>127?a:a<46?65:a<48?a-1:a<58?a+18:a<65?a-11:a<91?a+11:a<97?a-37:a<123?a+5:a-63}if((r+="")!=(t+=""))for(;i;)if(a=s(r,n++),i=s(t,o++),a<76&&i<76&&a>66&&i>66&&(a=s(r,n,n),i=s(t,o,n=e),o=e),a!=i)return a<i?-1:1;return 0};
/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */try{t.exports=e}catch(i){String.naturalCompare=e}const a=r(t.exports);export{a as Z};
