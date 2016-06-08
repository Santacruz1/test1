/**
* @preserve HTML5 Shiv 3.7.3-pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3-pre",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document);
/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(b){"object"==typeof module&&"object"==typeof module.exports?module.exports=b:"function"==typeof define&&define.amd&&define("picturefill",function(){return b}),"object"==typeof a&&(a.picturefill=b)}function e(a){var b,c,d,e,f,i=a||{};b=i.elements||g.getAllElements();for(var j=0,k=b.length;k>j;j++)if(c=b[j],d=c.parentNode,e=void 0,f=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[g.ns]||(c[g.ns]={}),i.reevaluate||!c[g.ns].evaluated)){if(d&&"PICTURE"===d.nodeName.toUpperCase()){if(g.removeVideoShim(d),e=g.getMatch(c,d),e===!1)continue}else e=void 0;(d&&"PICTURE"===d.nodeName.toUpperCase()||!g.sizesSupported&&c.srcset&&h.test(c.srcset))&&g.dodgeSrcset(c),e?(f=g.processSourceSet(e),g.applyBestCandidate(f,c)):(f=g.processSourceSet(c),(void 0===c.srcset||c[g.ns].srcset)&&g.applyBestCandidate(f,c)),c[g.ns].evaluated=!0}}function f(){function c(){clearTimeout(d),d=setTimeout(h,60)}g.initTypeDetects(),e();var d,f=setInterval(function(){return e(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(f):void 0},250),h=function(){e({reevaluate:!0})};a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void d(function(){});b.createElement("picture");var g=a.picturefill||{},h=/\s+\+?\d+(e\d+)?w/;g.ns="picturefill",function(){g.srcsetSupported="srcset"in c,g.sizesSupported="sizes"in c,g.curSrcSupported="currentSrc"in c}(),g.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},g.makeUrl=function(){var a=b.createElement("a");return function(b){return a.href=b,a.href}}(),g.restrictsMixedContent=function(){return"https:"===a.location.protocol},g.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},g.getDpr=function(){return a.devicePixelRatio||1},g.getWidthFromLength=function(a){var c;if(!a||a.indexOf("%")>-1!=!1||!(parseFloat(a)>0||a.indexOf("calc(")>-1))return!1;a=a.replace("vw","%"),g.lengthEl||(g.lengthEl=b.createElement("div"),g.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",g.lengthEl.className="helper-from-picturefill-js"),g.lengthEl.style.width="0px";try{g.lengthEl.style.width=a}catch(d){}return b.body.appendChild(g.lengthEl),c=g.lengthEl.offsetWidth,0>=c&&(c=!1),b.body.removeChild(g.lengthEl),c},g.detectTypeSupport=function(b,c){var d=new a.Image;return d.onerror=function(){g.types[b]=!1,e()},d.onload=function(){g.types[b]=1===d.width,e()},d.src=c,"pending"},g.types=g.types||{},g.initTypeDetects=function(){g.types["image/jpeg"]=!0,g.types["image/gif"]=!0,g.types["image/png"]=!0,g.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.types["image/webp"]=g.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},g.verifyTypeSupport=function(a){var b=a.getAttribute("type");if(null===b||""===b)return!0;var c=g.types[b];return"string"==typeof c&&"pending"!==c?(g.types[b]=g.detectTypeSupport(b,c),"pending"):"function"==typeof c?(c(),"pending"):c},g.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},g.findWidthFromSourceSize=function(c){for(var d,e=g.trim(c).split(/\s*,\s*/),f=0,h=e.length;h>f;f++){var i=e[f],j=g.parseSize(i),k=j.length,l=j.media;if(k&&(!l||g.matchesMedia(l))&&(d=g.getWidthFromLength(k)))break}return d||Math.max(a.innerWidth||0,b.documentElement.clientWidth)},g.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},g.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),f=g.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||g.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/f)}return c||1},g.getCandidatesFromSourceSet=function(a,b){for(var c=g.parseSrcset(a),d=[],e=0,f=c.length;f>e;e++){var h=c[e];d.push({url:h.url,resolution:g.parseDescriptor(h.descriptor,b)})}return d},g.dodgeSrcset=function(a){a.srcset&&(a[g.ns].srcset=a.srcset,a.srcset="",a.setAttribute("data-pfsrcset",a[g.ns].srcset))},g.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[g.ns]&&a[g.ns].srcset&&(b=a[g.ns].srcset),b&&(d=g.getCandidatesFromSourceSet(b,c)),d},g.backfaceVisibilityFix=function(a){var b=a.style||{},c="webkitBackfaceVisibility"in b,d=b.zoom;c&&(b.zoom=".999",c=a.offsetWidth,b.zoom=d)},g.setIntrinsicSize=function(){var c={},d=function(a,b,c){b&&a.setAttribute("width",parseInt(b/c,10))};return function(e,f){var h;e[g.ns]&&!a.pfStopIntrinsicSize&&(void 0===e[g.ns].dims&&(e[g.ns].dims=e.getAttribute("width")||e.getAttribute("height")),e[g.ns].dims||(f.url in c?d(e,c[f.url],f.resolution):(h=b.createElement("img"),h.onload=function(){if(c[f.url]=h.width,!c[f.url])try{b.body.appendChild(h),c[f.url]=h.width||h.offsetWidth,b.body.removeChild(h)}catch(a){}e.src===f.url&&d(e,c[f.url],f.resolution),e=null,h.onload=null,h=null},h.src=f.url)))}}(),g.applyBestCandidate=function(a,b){var c,d,e;a.sort(g.ascendingSort),d=a.length,e=a[d-1];for(var f=0;d>f;f++)if(c=a[f],c.resolution>=g.getDpr()){e=c;break}e&&(e.url=g.makeUrl(e.url),b.src!==e.url&&(g.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+e.url):(b.src=e.url,g.curSrcSupported||(b.currentSrc=b.src),g.backfaceVisibilityFix(b))),g.setIntrinsicSize(b,e))},g.ascendingSort=function(a,b){return a.resolution-b.resolution},g.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},g.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var f=c[d];("PICTURE"===f.parentNode.nodeName.toUpperCase()||null!==f.getAttribute("srcset")||f[g.ns]&&null!==f[g.ns].srcset)&&a.push(f)}return a},g.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,f=d.length;f>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||g.matchesMedia(i))){var j=g.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},f(),e._=g,d(e)}(window,window.document,new window.Image);
/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */

!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){v(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},g=function(a){return a.replace(c.regex.minmaxwh,"").match(c.regex.other)};if(c.ajax=f,c.queue=d,c.unsupportedmq=g,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var h,i,j,k=a.document,l=k.documentElement,m=[],n=[],o=[],p={},q=30,r=k.getElementsByTagName("head")[0]||l,s=k.getElementsByTagName("base")[0],t=r.getElementsByTagName("link"),u=function(){var a,b=k.createElement("div"),c=k.body,d=l.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=k.createElement("body"),c.style.background="none"),l.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&l.insertBefore(c,l.firstChild),a=b.offsetWidth,f?l.removeChild(c):c.removeChild(b),l.style.fontSize=d,e&&(c.style.fontSize=e),a=j=parseFloat(a)},v=function(b){var c="clientWidth",d=l[c],e="CSS1Compat"===k.compatMode&&d||k.body[c]||d,f={},g=t[t.length-1],p=(new Date).getTime();if(b&&h&&q>p-h)return a.clearTimeout(i),i=a.setTimeout(v,q),void 0;h=p;for(var s in m)if(m.hasOwnProperty(s)){var w=m[s],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?j||u():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?j||u():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(n[w.rules]))}for(var C in o)o.hasOwnProperty(C)&&o[C]&&o[C].parentNode===r&&r.removeChild(o[C]);o.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=k.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,r.insertBefore(E,g.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(k.createTextNode(F)),o.push(E)}},w=function(a,b,d){var e=a.replace(c.regex.comments,"").replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},i=!f&&d;b.length&&(b+="/"),i&&(f=1);for(var j=0;f>j;j++){var k,l,o,p;i?(k=d,n.push(h(a))):(k=e[j].match(c.regex.findStyles)&&RegExp.$1,n.push(RegExp.$2&&h(RegExp.$2))),o=k.split(","),p=o.length;for(var q=0;p>q;q++)l=o[q],g(l)||m.push({media:l.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:n.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},x=function(){if(d.length){var b=d.shift();f(b.href,function(c){w(c,b.href,b.media),p[b.href]=!0,a.setTimeout(function(){x()},0)})}},y=function(){for(var b=0;b<t.length;b++){var c=t[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!p[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(w(c.styleSheet.rawCssText,e,f),p[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!s||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}x()};y(),c.update=y,c.getEmValue=u,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(typeof exports==="object"){module.exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s)}function decode(s){return config.raw?s:decodeURIComponent(s)}function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value))}function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{s=decodeURIComponent(s.replace(pluses," "));return config.json?JSON.parse(s):s}catch(e){}}function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value}var config=$.cookie=function(key,value,options){if(arguments.length>1&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date;t.setMilliseconds(t.getMilliseconds()+days*864e5)}return document.cookie=[encode(key),"=",stringifyCookieValue(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join("")}var result=key?undefined:{},cookies=document.cookie?document.cookie.split("; "):[],i=0,l=cookies.length;for(;i<l;i++){var parts=cookies[i].split("="),name=decode(parts.shift()),cookie=parts.join("=");if(key===name){result=read(cookie,value);break}if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie}}return result};config.defaults={};$.removeCookie=function(key,options){$.cookie(key,"",$.extend({},options,{expires:-1}));return!$.cookie(key)}});

/*!
 * Flickity PACKAGED v1.1.0
 * Touch, responsive, flickable galleries
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,i){t.fn[e]=function(o){if("string"==typeof o){for(var s=n.call(arguments,1),a=0,l=this.length;l>a;a++){var c=this[a],h=t.data(c,e);if(h)if(t.isFunction(h[o])&&"_"!==o.charAt(0)){var d=h[o].apply(h,s);if(void 0!==d)return d}else r("no such method '"+o+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; attempted to call '"+o+"'")}return this}return this.each(function(){var n=t.data(this,e);n?(n.option(o),n._init()):(n=new i(this,o),t.data(this,e,n))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),o(t,e)},t.bridget}}var n=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i("object"==typeof exports?require("jquery"):t.jQuery)}(window),function(t){function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function i(t,e){var i=n(t,e)?r:o;i(t,e)}var n,o,r;"classList"in document.documentElement?(n=function(t,e){return t.classList.contains(e)},o=function(t,e){t.classList.add(e)},r=function(t,e){t.classList.remove(e)}):(n=function(t,i){return e(i).test(t.className)},o=function(t,e){n(t,e)||(t.className=t.className+" "+e)},r=function(t,i){t.className=t.className.replace(e(i)," ")});var s={hasClass:n,addClass:o,removeClass:r,toggleClass:i,has:n,add:o,remove:r,toggle:i};"function"==typeof define&&define.amd?define("classie/classie",s):"object"==typeof exports?module.exports=s:t.classie=s}(window),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype,o=this,r=o.EventEmitter;n.getListeners=function(t){var e,i,n=this._getEvents();if(t instanceof RegExp){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;e<t.length;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,o=this.getListenersAsObject(t),r="object"==typeof i;for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(r?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&(n=e(r[o],i),-1!==n&&r[o].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if(t instanceof RegExp)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,o,r,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)i=s[o][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return o.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:o.EventEmitter=t}.call(this),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,n=function(){};i.addEventListener?n=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(n=function(t,i,n){t[i+n]=n.handleEvent?function(){var i=e(t);n.handleEvent.call(n,i)}:function(){var i=e(t);n.call(t,i)},t.attachEvent("on"+i,t[i+n])});var o=function(){};i.removeEventListener?o=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(o=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var r={bind:n,unbind:o};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(window),function(t){function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){}function n(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var n=s[e];t[n]=0}return t}function o(i){function o(){if(!p){p=!0;var n=t.getComputedStyle;if(c=function(){var t=n?function(t){return n(t,null)}:function(t){return t.currentStyle};return function(e){var i=t(e);return i||r("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),i}}(),h=i("boxSizing")){var o=document.createElement("div");o.style.width="200px",o.style.padding="1px 2px 3px 4px",o.style.borderStyle="solid",o.style.borderWidth="1px 2px 3px 4px",o.style[h]="border-box";var s=document.body||document.documentElement;s.appendChild(o);var a=c(o);d=200===e(a.width),s.removeChild(o)}}}function a(t){if(o(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var i=c(t);if("none"===i.display)return n();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var a=r.isBorderBox=!(!h||!i[h]||"border-box"!==i[h]),p=0,u=s.length;u>p;p++){var f=s[p],v=i[f];v=l(t,v);var y=parseFloat(v);r[f]=isNaN(y)?0:y}var g=r.paddingLeft+r.paddingRight,m=r.paddingTop+r.paddingBottom,b=r.marginLeft+r.marginRight,x=r.marginTop+r.marginBottom,C=r.borderLeftWidth+r.borderRightWidth,S=r.borderTopWidth+r.borderBottomWidth,w=a&&d,E=e(i.width);E!==!1&&(r.width=E+(w?0:g+C));var P=e(i.height);return P!==!1&&(r.height=P+(w?0:m+S)),r.innerWidth=r.width-(g+C),r.innerHeight=r.height-(m+S),r.outerWidth=r.width+b,r.outerHeight=r.height+x,r}}function l(e,i){if(t.getComputedStyle||-1===i.indexOf("%"))return i;var n=e.style,o=n.left,r=e.runtimeStyle,s=r&&r.left;return s&&(r.left=e.currentStyle.left),n.left=i,i=n.pixelLeft,n.left=o,s&&(r.left=s),i}var c,h,d,p=!1;return a}var r="undefined"==typeof console?i:function(t){console.error(t)},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("desandro-get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t){function e(t){"function"==typeof t&&(e.isReady?t():s.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==r.readyState;e.isReady||i||n()}function n(){e.isReady=!0;for(var t=0,i=s.length;i>t;t++){var n=s[t];n()}}function o(o){return"complete"===r.readyState?n():(o.bind(r,"DOMContentLoaded",i),o.bind(r,"readystatechange",i),o.bind(t,"load",i)),e}var r=t.document,s=[];e.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],o):"object"==typeof exports?module.exports=o(require("eventie")):t.docReady=o(t.eventie)}(window),function(t){function e(t,e){return t[s](e)}function i(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){i(t);for(var n=t.parentNode.querySelectorAll(e),o=0,r=n.length;r>o;o++)if(n[o]===t)return!0;return!1}function o(t,n){return i(t),e(t,n)}var r,s=function(){if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0,n=e.length;n>i;i++){var o=e[i],r=o+"MatchesSelector";if(t[r])return r}}();if(s){var a=document.createElement("div"),l=e(a,"div");r=l?e:o}else r=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return r}):"object"==typeof exports?module.exports=r:window.matchesSelector=r}(Element.prototype),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("doc-ready"),require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.docReady,t.matchesSelector)}(window,function(t,e,i){var n={};n.extend=function(t,e){for(var i in e)t[i]=e[i];return t},n.modulo=function(t,e){return(t%e+e)%e};var o=Object.prototype.toString;n.isArray=function(t){return"[object Array]"==o.call(t)},n.makeArray=function(t){var e=[];if(n.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0,o=t.length;o>i;i++)e.push(t[i]);else e.push(t);return e},n.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1},n.removeFrom=function(t,e){var i=n.indexOf(t,e);-1!=i&&t.splice(i,1)},n.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1==t.nodeType&&"string"==typeof t.nodeName},n.setText=function(){function t(t,i){e=e||(void 0!==document.documentElement.textContent?"textContent":"innerText"),t[e]=i}var e;return t}(),n.getParent=function(t,e){for(;t!=document.body;)if(t=t.parentNode,i(t,e))return t},n.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},n.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},n.filterFindElements=function(t,e){t=n.makeArray(t);for(var o=[],r=0,s=t.length;s>r;r++){var a=t[r];if(n.isElement(a))if(e){i(a,e)&&o.push(a);for(var l=a.querySelectorAll(e),c=0,h=l.length;h>c;c++)o.push(l[c])}else o.push(a)}return o},n.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},n.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var r=t.console;return n.htmlInit=function(i,o){e(function(){for(var e=n.toDashed(o),s=document.querySelectorAll(".js-"+e),a="data-"+e+"-options",l=0,c=s.length;c>l;l++){var h,d=s[l],p=d.getAttribute(a);try{h=p&&JSON.parse(p)}catch(u){r&&r.error("Error parsing "+a+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+u);continue}var f=new i(d,h),v=t.jQuery;v&&v.data(d,o,f)}})},n}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(i){return e(t,i)}):"object"==typeof exports?module.exports=e(t,require("get-size")):(t.Flickity=t.Flickity||{},t.Flickity.Cell=e(t,t.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n="attachEvent"in t;return i.prototype.create=function(){this.element.style.position="absolute",n&&this.element.setAttribute("unselectable","on"),this.x=0,this.shift=0},i.prototype.destroy=function(){this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},i.prototype.getSize=function(){this.size=e(this.element)},i.prototype.setPosition=function(t){this.x=t,this.setDefaultTarget(),this.renderPosition(t)},i.prototype.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},i.prototype.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},i.prototype.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},i.prototype.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/animate",["get-style-property/get-style-property","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("desandro-get-style-property"),require("fizzy-ui-utils")):(t.Flickity=t.Flickity||{},t.Flickity.animatePrototype=e(t,t.getStyleProperty,t.fizzyUIUtils))}(window,function(t,e,i){for(var n,o=0,r="webkit moz ms o".split(" "),s=t.requestAnimationFrame,a=t.cancelAnimationFrame,l=0;l<r.length&&(!s||!a);l++)n=r[l],s=s||t[n+"RequestAnimationFrame"],a=a||t[n+"CancelAnimationFrame"]||t[n+"CancelRequestAnimationFrame"];s&&a||(s=function(e){var i=(new Date).getTime(),n=Math.max(0,16-(i-o)),r=t.setTimeout(function(){e(i+n)},n);return o=i+n,r},a=function(e){t.clearTimeout(e)});var c={};c.startAnimation=function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},c.animate=function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;s(function(){e.animate()})}};var h=e("transform"),d=!!e("perspective");return c.positionSlider=function(){var t=this.x;this.options.wrapAround&&this.cells.length>1&&(t=i.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),t+=this.cursorPosition,t=this.options.rightToLeft&&h?-t:t;var e=this.getPositionValue(t);h?this.slider.style[h]=d&&this.isAnimating?"translate3d("+e+",0,0)":"translateX("+e+")":this.slider.style[this.originSide]=e},c.positionSliderAtSelected=function(){if(this.cells.length){var t=this.cells[this.selectedIndex];this.x=-t.target,this.positionSlider()}},c.getPositionValue=function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},c.settle=function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,d&&this.positionSlider(),this.dispatchEvent("settle"))},c.shiftWrapCells=function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},c._shiftCells=function(t,e,i){for(var n=0,o=t.length;o>n;n++){var r=t[n],s=e>0?i:0;r.wrapShift(s),e-=r.size.outerWidth}},c._unshiftCells=function(t){if(t&&t.length)for(var e=0,i=t.length;i>e;e++)t[e].wrapShift(0)},c.integratePhysics=function(){this.velocity+=this.accel,this.x+=this.velocity,this.velocity*=this.getFrictionFactor(),this.accel=0},c.applyForce=function(t){this.accel+=t},c.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},c.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())},c.applyDragForce=function(){if(this.isPointerDown){var t=this.dragX-this.x,e=t-this.velocity;this.applyForce(e)}},c.applySelectedAttraction=function(){var t=this.cells.length;if(!this.isPointerDown&&!this.isFreeScrolling&&t){var e=this.cells[this.selectedIndex],i=this.options.wrapAround&&t>1?this.slideableWidth*Math.floor(this.selectedIndex/t):0,n=-1*(e.target+i)-this.x,o=n*this.options.selectedAttraction;this.applyForce(o)}},c}),function(t,e){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["classie/classie","eventEmitter/EventEmitter","eventie/eventie","get-size/get-size","fizzy-ui-utils/utils","./cell","./animate"],function(i,n,o,r,s,a,l){return e(t,i,n,o,r,s,a,l)});else if("object"==typeof exports)module.exports=e(t,require("desandro-classie"),require("wolfy87-eventemitter"),require("eventie"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./animate"));else{var i=t.Flickity;t.Flickity=e(t,t.classie,t.EventEmitter,t.eventie,t.getSize,t.fizzyUIUtils,i.Cell,i.animatePrototype)}}(window,function(t,e,i,n,o,r,s,a){function l(t,e){for(t=r.makeArray(t);t.length;)e.appendChild(t.shift())}function c(t,e){var i=r.getQueryElement(t);return i?(this.element=i,h&&(this.$element=h(this.element)),this.options=r.extend({},this.constructor.defaults),this.option(e),void this._create()):void(p&&p.error("Bad element for Flickity: "+(i||t)))}var h=t.jQuery,d=t.getComputedStyle,p=t.console,u=0,f={};c.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},c.createMethods=[],r.extend(c.prototype,i.prototype),c.prototype._create=function(){var e=this.guid=++u;this.element.flickityGUID=e,f[e]=this,this.selectedIndex=this.options.initialIndex||0,this.restingFrames=0,this.x=0,this.velocity=0,this.accel=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",c.setUnselectable(this.viewport),this._createSlider(),(this.options.resize||this.options.watchCSS)&&(n.bind(t,"resize",this),this.isResizeBound=!0);for(var i=0,o=c.createMethods.length;o>i;i++){var r=c.createMethods[i];this[r]()}this.options.watchCSS?this.watchCSS():this.activate()},c.prototype.option=function(t){r.extend(this.options,t)},c.prototype.activate=function(){if(!this.isActive){this.isActive=!0,e.add(this.element,"flickity-enabled"),this.options.rightToLeft&&e.add(this.element,"flickity-rtl"),this.getSize();var t=this._filterFindCellElements(this.element.children);l(t,this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,n.bind(this.element,"keydown",this)),this.emit("activate"),this.positionSliderAtSelected(),this.select(this.selectedIndex)}},c.prototype._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},c.prototype._filterFindCellElements=function(t){return r.filterFindElements(t,this.options.cellSelector)},c.prototype.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},c.prototype._makeCells=function(t){for(var e=this._filterFindCellElements(t),i=[],n=0,o=e.length;o>n;n++){var r=e[n],a=new s(r,this);i.push(a)}return i},c.prototype.getLastCell=function(){return this.cells[this.cells.length-1]},c.prototype.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},c.prototype._positionCells=function(t){t=t||0,this.maxCellHeight=t?this.maxCellHeight||0:0;var e=0;if(t>0){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n,o=this.cells.length,r=t;o>r;r++)n=this.cells[r],n.setPosition(e),e+=n.size.outerWidth,this.maxCellHeight=Math.max(n.size.outerHeight,this.maxCellHeight);this.slideableWidth=e,this._containCells()},c.prototype._sizeCells=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];n.getSize()}},c.prototype._init=c.prototype.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},c.prototype.getSize=function(){this.size=o(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var v={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};c.prototype.setCellAlign=function(){var t=v[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},c.prototype.setGallerySize=function(){this.options.setGallerySize&&(this.viewport.style.height=this.maxCellHeight+"px")},c.prototype._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},c.prototype._getGapCells=function(t,e,i){for(var n=[];t>0;){var o=this.cells[e];if(!o)break;n.push(o),e+=i,t-=o.size.outerWidth}return n},c.prototype._containCells=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length)for(var t=this.options.rightToLeft?"marginRight":"marginLeft",e=this.options.rightToLeft?"marginLeft":"marginRight",i=this.cells[0].size[t],n=this.getLastCell(),o=this.slideableWidth-n.size[e],r=o-this.size.innerWidth*(1-this.cellAlign),s=o<this.size.innerWidth,a=0,l=this.cells.length;l>a;a++){var c=this.cells[a];c.setDefaultTarget(),s?c.target=o*this.cellAlign:(c.target=Math.max(c.target,this.cursorPosition+i),c.target=Math.min(c.target,r))}},c.prototype.dispatchEvent=function(t,e,i){var n=[e].concat(i);if(this.emitEvent(t,n),h&&this.$element)if(e){var o=h.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},c.prototype.select=function(t,e){if(this.isActive){var i=this.cells.length;this.options.wrapAround&&i>1&&(0>t?this.x-=this.slideableWidth:t>=i&&(this.x+=this.slideableWidth)),(this.options.wrapAround||e)&&(t=r.modulo(t,i)),this.cells[t]&&(this.selectedIndex=t,this.setSelectedCell(),this.startAnimation(),this.dispatchEvent("cellSelect"))}},c.prototype.previous=function(t){this.select(this.selectedIndex-1,t)},c.prototype.next=function(t){this.select(this.selectedIndex+1,t)},c.prototype.setSelectedCell=function(){this._removeSelectedCellClass(),this.selectedCell=this.cells[this.selectedIndex],this.selectedElement=this.selectedCell.element,e.add(this.selectedElement,"is-selected")},c.prototype._removeSelectedCellClass=function(){this.selectedCell&&e.remove(this.selectedCell.element,"is-selected")},c.prototype.getCell=function(t){for(var e=0,i=this.cells.length;i>e;e++){var n=this.cells[e];if(n.element==t)return n}},c.prototype.getCells=function(t){t=r.makeArray(t);for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],s=this.getCell(o);s&&e.push(s)}return e},c.prototype.getCellElements=function(){for(var t=[],e=0,i=this.cells.length;i>e;e++)t.push(this.cells[e].element);return t},c.prototype.getParentCell=function(t){var e=this.getCell(t);return e?e:(t=r.getParent(t,".flickity-slider > *"),this.getCell(t))},c.prototype.getAdjacentCellElements=function(t,e){if(!t)return[this.selectedElement];e=void 0===e?this.selectedIndex:e;var i=this.cells.length;if(1+2*t>=i)return this.getCellElements();for(var n=[],o=e-t;e+t>=o;o++){var s=this.options.wrapAround?r.modulo(o,i):o,a=this.cells[s];a&&n.push(a.element)}return n},c.prototype.uiChange=function(){this.emit("uiChange")},c.prototype.childUIPointerDown=function(t){this.emitEvent("childUIPointerDown",[t])},c.prototype.onresize=function(){this.watchCSS(),this.resize()},r.debounceMethod(c,"onresize",150),c.prototype.resize=function(){this.isActive&&(this.getSize(),this.options.wrapAround&&(this.x=r.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.positionSliderAtSelected())};var y=c.supportsConditionalCSS=function(){var t;return function(){if(void 0!==t)return t;if(!d)return void(t=!1);var e=document.createElement("style"),i=document.createTextNode('body:after { content: "foo"; display: none; }');e.appendChild(i),document.head.appendChild(e);var n=d(document.body,":after").content;return t=-1!=n.indexOf("foo"),document.head.removeChild(e),t}}();c.prototype.watchCSS=function(){var t=this.options.watchCSS;if(t){var e=y();if(!e){var i="fallbackOn"==t?"activate":"deactivate";return void this[i]()}var n=d(this.element,":after").content;-1!=n.indexOf("flickity")?this.activate():this.deactivate()}},c.prototype.onkeydown=function(t){if(this.options.accessibility&&(!document.activeElement||document.activeElement==this.element))if(37==t.keyCode){var e=this.options.rightToLeft?"next":"previous";this.uiChange(),this[e]()}else if(39==t.keyCode){var i=this.options.rightToLeft?"previous":"next";this.uiChange(),this[i]()}},c.prototype.deactivate=function(){if(this.isActive){e.remove(this.element,"flickity-enabled"),e.remove(this.element,"flickity-rtl");for(var t=0,i=this.cells.length;i>t;t++){var o=this.cells[t];o.destroy()}this._removeSelectedCellClass(),this.element.removeChild(this.viewport),l(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),n.unbind(this.element,"keydown",this)),this.isActive=!1,this.emit("deactivate")}},c.prototype.destroy=function(){this.deactivate(),this.isResizeBound&&n.unbind(t,"resize",this),this.emit("destroy"),h&&this.$element&&h.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete f[this.guid]},r.extend(c.prototype,a);var g="attachEvent"in t;return c.setUnselectable=function(t){g&&t.setAttribute("unselectable","on")},c.data=function(t){t=r.getQueryElement(t);var e=t&&t.flickityGUID;return e&&f[e]},r.htmlInit(c,"flickity"),h&&h.bridget&&h.bridget("flickity",c),c.Cell=s,c}),function(t,e){"function"==typeof define&&define.amd?define("unipointer/unipointer",["eventEmitter/EventEmitter","eventie/eventie"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("wolfy87-eventemitter"),require("eventie")):t.Unipointer=e(t,t.EventEmitter,t.eventie)}(window,function(t,e,i){function n(){}function o(){}o.prototype=new e,o.prototype.bindStartEvent=function(t){this._bindStartEvent(t,!0)},o.prototype.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},o.prototype._bindStartEvent=function(e,n){n=void 0===n?!0:!!n;var o=n?"bind":"unbind";t.navigator.pointerEnabled?i[o](e,"pointerdown",this):t.navigator.msPointerEnabled?i[o](e,"MSPointerDown",this):(i[o](e,"mousedown",this),i[o](e,"touchstart",this))},o.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},o.prototype.getTouch=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];if(n.identifier==this.pointerIdentifier)return n}},o.prototype.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},o.prototype.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},o.prototype.onMSPointerDown=o.prototype.onpointerdown=function(t){this._pointerDown(t,t)},o.prototype._pointerDown=function(t,e){this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},o.prototype.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var r={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"],MSPointerDown:["MSPointerMove","MSPointerUp","MSPointerCancel"]};return o.prototype._bindPostStartEvents=function(e){if(e){for(var n=r[e.type],o=e.preventDefault?t:document,s=0,a=n.length;a>s;s++){var l=n[s];i.bind(o,l,this)}this._boundPointerEvents={events:n,node:o}}},o.prototype._unbindPostStartEvents=function(){var t=this._boundPointerEvents;if(t&&t.events){for(var e=0,n=t.events.length;n>e;e++){var o=t.events[e];i.unbind(t.node,o,this)}delete this._boundPointerEvents}},o.prototype.onmousemove=function(t){this._pointerMove(t,t)},o.prototype.onMSPointerMove=o.prototype.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},o.prototype.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},o.prototype._pointerMove=function(t,e){this.pointerMove(t,e)},o.prototype.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},o.prototype.onmouseup=function(t){this._pointerUp(t,t)},o.prototype.onMSPointerUp=o.prototype.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},o.prototype.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},o.prototype._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},o.prototype.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},o.prototype._pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this._unbindPostStartEvents(),this.pointerDone()},o.prototype.pointerDone=n,o.prototype.onMSPointerCancel=o.prototype.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},o.prototype.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},o.prototype._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},o.prototype.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},o.getPointerPoint=function(t){return{x:void 0!==t.pageX?t.pageX:t.clientX,y:void 0!==t.pageY?t.pageY:t.clientY}},o}),function(t,e){"function"==typeof define&&define.amd?define("unidragger/unidragger",["eventie/eventie","unipointer/unipointer"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("eventie"),require("unipointer")):t.Unidragger=e(t,t.eventie,t.Unipointer)}(window,function(t,e,i){function n(){}function o(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function r(){}function s(){return!1}r.prototype=new i,r.prototype.bindHandles=function(){this._bindHandles(!0)},r.prototype.unbindHandles=function(){this._bindHandles(!1)};var a=t.navigator;r.prototype._bindHandles=function(t){t=void 0===t?!0:!!t;var i;i=a.pointerEnabled?function(e){e.style.touchAction=t?"none":""}:a.msPointerEnabled?function(e){e.style.msTouchAction=t?"none":""}:function(){t&&c(s)};for(var n=t?"bind":"unbind",o=0,r=this.handles.length;r>o;o++){var s=this.handles[o];this._bindStartEvent(s,t),i(s),e[n](s,"click",this)}};var l="attachEvent"in document.documentElement,c=l?function(t){"IMG"==t.nodeName&&(t.ondragstart=s);for(var e=t.querySelectorAll("img"),i=0,n=e.length;n>i;i++){var o=e[i];o.ondragstart=s}}:n;return r.prototype.pointerDown=function(t,e){this._dragPointerDown(t,e);var i=document.activeElement;i&&i.blur&&i.blur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])},r.prototype._dragPointerDown=function(t,e){this.pointerDownPoint=i.getPointerPoint(e);var n="touchstart"==t.type,r=t.target.nodeName;n||"SELECT"==r||o(t)},r.prototype.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},r.prototype._dragPointerMove=function(t,e){var n=i.getPointerPoint(e),o={x:n.x-this.pointerDownPoint.x,y:n.y-this.pointerDownPoint.y};return!this.isDragging&&this.hasDragStarted(o)&&this._dragStart(t,e),o},r.prototype.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},r.prototype.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},r.prototype._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},r.prototype._dragStart=function(t,e){this.isDragging=!0,this.dragStartPoint=r.getPointerPoint(e),this.isPreventingClicks=!0,this.dragStart(t,e)},r.prototype.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},r.prototype._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},r.prototype.dragMove=function(t,e,i){o(t),this.emitEvent("dragMove",[t,e,i])},r.prototype._dragEnd=function(t,e){this.isDragging=!1;var i=this;setTimeout(function(){delete i.isPreventingClicks
}),this.dragEnd(t,e)},r.prototype.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},r.prototype.onclick=function(t){this.isPreventingClicks&&o(t)},r.prototype._staticClick=function(t,e){var i=t.target.nodeName;("INPUT"==i||"TEXTAREA"==i)&&t.target.focus(),this.staticClick(t,e)},r.prototype.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},r.getPointerPoint=function(t){return{x:void 0!==t.pageX?t.pageX:t.clientX,y:void 0!==t.pageY?t.pageY:t.clientY}},r.getPointerPoint=i.getPointerPoint,r}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/drag",["classie/classie","eventie/eventie","./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(i,n,o,r,s){return e(t,i,n,o,r,s)}):"object"==typeof exports?module.exports=e(t,require("desandro-classie"),require("eventie"),require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):t.Flickity=e(t,t.classie,t.eventie,t.Flickity,t.Unidragger,t.fizzyUIUtils)}(window,function(t,e,i,n,o,r){function s(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function a(e){var i=o.getPointerPoint(e);return i.y-t.pageYOffset}r.extend(n.defaults,{draggable:!0,touchVerticalScroll:!0}),n.createMethods.push("_createDrag"),r.extend(n.prototype,o.prototype),n.prototype._createDrag=function(){this.on("activate",this.bindDrag),this.on("uiChange",this._uiChangeDrag),this.on("childUIPointerDown",this._childUIPointerDownDrag),this.on("deactivate",this.unbindDrag)},n.prototype.bindDrag=function(){this.options.draggable&&!this.isDragBound&&(e.add(this.element,"is-draggable"),this.handles=[this.viewport],this.bindHandles(),this.isDragBound=!0)},n.prototype.unbindDrag=function(){this.isDragBound&&(e.remove(this.element,"is-draggable"),this.unbindHandles(),delete this.isDragBound)},n.prototype._uiChangeDrag=function(){delete this.isFreeScrolling},n.prototype._childUIPointerDownDrag=function(t){s(t),this.pointerDownFocus(t)},n.prototype.pointerDown=function(t,i){this._dragPointerDown(t,i);var n=document.activeElement;n&&n.blur&&n!=this.element&&n!=document.body&&n.blur(),this.pointerDownFocus(t),this.dragX=this.x,e.add(this.viewport,"is-pointer-down"),this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[i])};var l={touchstart:!0,MSPointerDown:!0},c={INPUT:!0,SELECT:!0};n.prototype.pointerDownFocus=function(t){!this.options.accessibility||l[t.type]||c[t.target.nodeName]||this.element.focus()},n.prototype.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.touchVerticalScrollMove(t,e,i),this._dragMove(t,e,i),this.dispatchEvent("pointerMove",t,[e,i])},n.prototype.hasDragStarted=function(t){return!this.isTouchScrolling&&Math.abs(t.x)>3},n.prototype.pointerUp=function(t,i){delete this.isTouchScrolling,e.remove(this.viewport,"is-pointer-down"),this.dispatchEvent("pointerUp",t,[i]),this._dragPointerUp(t,i)};var h={touchmove:!0,MSPointerMove:!0};return n.prototype.touchVerticalScrollMove=function(e,i,n){var o=this.options.touchVerticalScroll,r="withDrag"==o?!o:this.isDragging||!o;!r&&h[e.type]&&!this.isTouchScrolling&&Math.abs(n.y)>10&&(this.startScrollY=t.pageYOffset,this.pointerWindowStartY=a(i),this.isTouchScrolling=!0)},n.prototype.dragStart=function(t,e){this.dragStartPosition=this.x,this.startAnimation(),this.dispatchEvent("dragStart",t,[e])},n.prototype.dragMove=function(t,e,i){s(t),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1,o=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.cells.length){var r=Math.max(-this.cells[0].target,this.dragStartPosition);o=o>r?.5*(o+r):o;var a=Math.min(-this.getLastCell().target,this.dragStartPosition);o=a>o?.5*(o+a):o}this.dragX=o,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])},n.prototype.dragEnd=function(t,e){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingDragPosition();this.isFreeScrolling=-n>this.cells[0].target&&-n<this.getLastCell().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.select(i),this.dispatchEvent("dragEnd",t,[e])},n.prototype.dragEndRestingSelect=function(){var t=this.getRestingDragPosition(),e=Math.abs(this.getCellDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1),o=i.distance<n.distance?i.index:n.index;return o},n.prototype.getRestingDragPosition=function(){var t=this.dragX-this.x;return this.x+t/(1-this.getFrictionFactor())},n.prototype._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,o=1/0,r=this.options.contain&&!this.options.wrapAround?function(t,e){return e>=t}:function(t,e){return e>t};r(e,o)&&(n+=i,o=e,e=this.getCellDistance(-t,n),null!==e);)e=Math.abs(e);return{distance:o,index:n-i}},n.prototype.getCellDistance=function(t,e){var i=this.cells.length,n=this.options.wrapAround&&i>1,o=n?r.modulo(e,i):e,s=this.cells[o];if(!s)return null;var a=n?this.slideableWidth*Math.floor(e/i):0;return t-(s.target+a)},n.prototype.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;var t=this.getCellDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return t>0&&e>0?1:0>t&&0>e?-1:0},n.prototype.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,o=i&&r.indexOf(this.cells,i);this.dispatchEvent("staticClick",t,[e,n,o])},n}),function(t,e){"function"==typeof define&&define.amd?define("tap-listener/tap-listener",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof exports?module.exports=e(t,require("unipointer")):t.TapListener=e(t,t.Unipointer)}(window,function(t,e){function i(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function n(t){this.bindTap(t)}n.prototype=new e,n.prototype.bindTap=function(t){t&&(this.unbindTap(),this.tapElement=t,this._bindStartEvent(t,!0))},n.prototype.unbindTap=function(){this.tapElement&&(this._bindStartEvent(this.tapElement,!0),delete this.tapElement)};var o=n.prototype.pointerDown;n.prototype.pointerDown=function(t){"touchstart"==t.type&&i(t),o.apply(this,arguments)};var r=void 0!==t.pageYOffset;return n.prototype.pointerUp=function(i,n){var o=e.getPointerPoint(n),s=this.tapElement.getBoundingClientRect(),a=r?t.pageXOffset:document.body.scrollLeft,l=r?t.pageYOffset:document.body.scrollTop,c=o.x>=s.left+a&&o.x<=s.right+a&&o.y>=s.top+l&&o.y<=s.bottom+l;c&&this.emitEvent("tap",[i,n])},n.prototype.destroy=function(){this.pointerDone(),this.unbindTap()},n}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["eventie/eventie","./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof exports?module.exports=e(t,require("eventie"),require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.eventie,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n,o){function r(t,e){this.direction=t,this.parent=e,this._create()}function s(t){return"string"==typeof t?t:"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z"}var a="http://www.w3.org/2000/svg",l=function(){function t(){if(void 0!==e)return e;var t=document.createElement("div");return t.innerHTML="<svg/>",e=(t.firstChild&&t.firstChild.namespaceURI)==a}var e;return t}();return r.prototype=new n,r.prototype._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");if(e.className="flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),i.setUnselectable(e),l()){var n=this.createSVG();e.appendChild(n)}else this.setArrowText(),e.className+=" no-svg";var o=this;this.onCellSelect=function(){o.update()},this.parent.on("cellSelect",this.onCellSelect),this.on("tap",this.onTap),this.on("pointerDown",function(t,e){o.parent.childUIPointerDown(e)})},r.prototype.activate=function(){this.update(),this.bindTap(this.element),e.bind(this.element,"click",this),this.parent.element.appendChild(this.element)},r.prototype.deactivate=function(){this.parent.element.removeChild(this.element),n.prototype.destroy.call(this),e.unbind(this.element,"click",this)},r.prototype.createSVG=function(){var t=document.createElementNS(a,"svg");t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(a,"path"),i=s(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},r.prototype.setArrowText=function(){var t=this.parent.options,e=this.isLeft?t.leftArrowText:t.rightArrowText;o.setText(this.element,e)},r.prototype.onTap=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},r.prototype.handleEvent=o.handleEvent,r.prototype.onclick=function(){var t=document.activeElement;t&&t==this.element&&this.onTap()},r.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},r.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},r.prototype.update=function(){var t=this.parent.cells;if(this.parent.options.wrapAround&&t.length>1)return void this.enable();var e=t.length?t.length-1:0,i=this.isPrevious?0:e,n=this.parent.selectedIndex==i?"disable":"enable";this[n]()},r.prototype.destroy=function(){this.deactivate()},o.extend(i.defaults,{prevNextButtons:!0,leftArrowText:"‹",rightArrowText:"›",arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),i.createMethods.push("_createPrevNextButtons"),i.prototype._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new r(-1,this),this.nextButton=new r(1,this),this.on("activate",this.activatePrevNextButtons))},i.prototype.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},i.prototype.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},i.PrevNextButton=r,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["eventie/eventie","./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof exports?module.exports=e(t,require("eventie"),require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.eventie,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n,o){function r(t){this.parent=t,this._create()}return r.prototype=new n,r.prototype._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",i.setUnselectable(this.holder),this.dots=[];var t=this;this.onCellSelect=function(){t.updateSelected()},this.parent.on("cellSelect",this.onCellSelect),this.on("tap",this.onTap),this.on("pointerDown",function(e,i){t.parent.childUIPointerDown(i)})},r.prototype.activate=function(){this.setDots(),this.updateSelected(),this.bindTap(this.holder),this.parent.element.appendChild(this.holder)},r.prototype.deactivate=function(){this.parent.element.removeChild(this.holder),n.prototype.destroy.call(this)},r.prototype.setDots=function(){var t=this.parent.cells.length-this.dots.length;t>0?this.addDots(t):0>t&&this.removeDots(-t)},r.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[];t;){var n=document.createElement("li");n.className="dot",e.appendChild(n),i.push(n),t--}this.holder.appendChild(e),this.dots=this.dots.concat(i)},r.prototype.removeDots=function(t){for(var e=this.dots.splice(this.dots.length-t,t),i=0,n=e.length;n>i;i++){var o=e[i];this.holder.removeChild(o)}},r.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot"),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected")},r.prototype.onTap=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=o.indexOf(this.dots,e);this.parent.select(i)}},r.prototype.destroy=function(){this.deactivate()},i.PageDots=r,o.extend(i.defaults,{pageDots:!0}),i.createMethods.push("_createPageDots"),i.prototype._createPageDots=function(){this.options.pageDots&&(this.pageDots=new r(this),this.on("activate",this.activatePageDots),this.on("cellAddedRemoved",this.onCellAddedRemovedPageDots),this.on("deactivate",this.deactivatePageDots))},i.prototype.activatePageDots=function(){this.pageDots.activate()},i.prototype.onCellAddedRemovedPageDots=function(){this.pageDots.setDots()},i.prototype.deactivatePageDots=function(){this.pageDots.deactivate()},i.PageDots=r,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/player",["eventEmitter/EventEmitter","eventie/eventie","./flickity"],function(t,i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(require("wolfy87-eventemitter"),require("eventie"),require("./flickity")):e(t.EventEmitter,t.eventie,t.Flickity)}(window,function(t,e,i){function n(t){if(this.isPlaying=!1,this.parent=t,r){var e=this;this.onVisibilityChange=function(){e.visibilityChange()}}}var o,r;return"hidden"in document?(o="hidden",r="visibilitychange"):"webkitHidden"in document&&(o="webkitHidden",r="webkitvisibilitychange"),n.prototype=new t,n.prototype.play=function(){this.isPlaying=!0,delete this.isPaused,r&&document.addEventListener(r,this.onVisibilityChange,!1),this.tick()},n.prototype.tick=function(){if(this.isPlaying&&!this.isPaused){this.tickTime=new Date;var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.isPlaying=!1,delete this.isPaused,this.clear(),r&&document.removeEventListener(r,this.onVisibilityChange,!1)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){this.isPlaying&&(this.isPaused=!0,this.clear())},n.prototype.unpause=function(){this.isPaused&&this.play()},n.prototype.visibilityChange=function(){var t=document[o];this[t?"pause":"unpause"]()},i.createMethods.push("_createPlayer"),i.prototype._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},i.prototype.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),e.bind(this.element,"mouseenter",this),this.isMouseenterBound=!0)},i.prototype.stopPlayer=function(){this.player.stop()},i.prototype.deactivatePlayer=function(){this.player.stop(),this.isMouseenterBound&&(e.unbind(this.element,"mouseenter",this),delete this.isMouseenterBound)},i.prototype.onmouseenter=function(){this.player.pause(),e.bind(this.element,"mouseleave",this)},i.prototype.onmouseleave=function(){this.player.unpause(),e.unbind(this.element,"mouseleave",this)},i.Player=n,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("./flickity"),require("fizzy-ui-utils")):e(t,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i){function n(t){for(var e=document.createDocumentFragment(),i=0,n=t.length;n>i;i++){var o=t[i];e.appendChild(o.element)}return e}return e.prototype.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var o=this.cells.length;e=void 0===e?o:e;var r=n(i),s=e==o;if(s)this.slider.appendChild(r);else{var a=this.cells[e].element;this.slider.insertBefore(r,a)}if(0===e)this.cells=i.concat(this.cells);else if(s)this.cells=this.cells.concat(i);else{var l=this.cells.splice(e,o-e);this.cells=this.cells.concat(i).concat(l)}this._sizeCells(i);var c=e>this.selectedIndex?0:i.length;this._cellAddedRemoved(e,c)}},e.prototype.append=function(t){this.insert(t,this.cells.length)},e.prototype.prepend=function(t){this.insert(t,0)},e.prototype.remove=function(t){var e,n,o,r=this.getCells(t),s=0;for(e=0,n=r.length;n>e;e++){o=r[e];var a=i.indexOf(this.cells,o)<this.selectedIndex;s-=a?1:0}for(e=0,n=r.length;n>e;e++)o=r[e],o.remove(),i.removeFrom(this.cells,o);r.length&&this._cellAddedRemoved(0,s)},e.prototype._cellAddedRemoved=function(t,e){e=e||0,this.selectedIndex+=e,this.selectedIndex=Math.max(0,Math.min(this.cells.length-1,this.selectedIndex)),this.emitEvent("cellAddedRemoved",[t,e]),this.cellChange(t)},e.prototype.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var n=i.indexOf(this.cells,e);this.cellChange(n)}},e.prototype.cellChange=function(t){this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize(),this.options.freeScroll?this.positionSlider():this.select(this.selectedIndex)},e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["classie/classie","eventie/eventie","./flickity","fizzy-ui-utils/utils"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof exports?module.exports=e(t,require("desandro-classie"),require("eventie"),require("./flickity"),require("fizzy-ui-utils")):e(t,t.classie,t.eventie,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i,n,o){function r(t){if("IMG"==t.nodeName&&t.getAttribute("data-flickity-lazyload"))return[t];var e=t.querySelectorAll("img[data-flickity-lazyload]");return o.makeArray(e)}function s(t,e){this.img=t,this.flickity=e,this.load()}return n.createMethods.push("_createLazyload"),n.prototype._createLazyload=function(){this.on("cellSelect",this.lazyLoad)},n.prototype.lazyLoad=function(){var t=this.options.lazyLoad;if(t){for(var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),n=[],o=0,a=i.length;a>o;o++){var l=i[o],c=r(l);n=n.concat(c)}for(o=0,a=n.length;a>o;o++){var h=n[o];new s(h,this)}}},s.prototype.handleEvent=o.handleEvent,s.prototype.load=function(){i.bind(this.img,"load",this),i.bind(this.img,"error",this),this.img.src=this.img.getAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(){this.complete(event,"flickity-lazyerror")},s.prototype.complete=function(t,n){i.unbind(this.img,"load",this),i.unbind(this.img,"error",this);var o=this.flickity.getParentCell(this.img),r=o&&o.element;this.flickity.cellSizeChange(r),e.add(this.img,n),this.flickity.dispatchEvent("lazyLoad",t,r)},n.LazyLoader=s,n}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["classie/classie","flickity/js/index","fizzy-ui-utils/utils"],function(i,n,o){return e(t,i,n,o)}):"object"==typeof exports?module.exports=e(t,require("desandro-classie"),require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t,t.classie,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i,n){return i.createMethods.push("_createAsNavFor"),i.prototype._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},i.prototype.setNavCompanion=function(t){t=n.getQueryElement(t);var e=i.data(t);if(e&&e!=this){this.navCompanion=e;var o=this;this.onNavCompanionSelect=function(){o.navCompanionSelect()},e.on("cellSelect",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect()}},i.prototype.navCompanionSelect=function(){if(this.navCompanion){var t=this.navCompanion.selectedIndex;this.select(t),this.removeNavSelectedElement(),this.selectedIndex==t&&(this.navSelectedElement=this.cells[t].element,e.add(this.navSelectedElement,"is-nav-selected"))}},i.prototype.activateAsNavFor=function(){this.navCompanionSelect()},i.prototype.removeNavSelectedElement=function(){this.navSelectedElement&&(e.remove(this.navSelectedElement,"is-nav-selected"),delete this.navSelectedElement)},i.prototype.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.select(n)},i.prototype.deactivateAsNavFor=function(){this.removeNavSelectedElement()},i.prototype.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("cellSelect",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},i}),function(t,e){"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["eventEmitter/EventEmitter","eventie/eventie"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("wolfy87-eventemitter"),require("eventie")):t.imagesLoaded=e(t,t.EventEmitter,t.eventie)}(window,function(t,e,i){function n(t,e){for(var i in e)t[i]=e[i];return t}function o(t){return"[object Array]"===p.call(t)}function r(t){var e=[];if(o(t))e=t;else if("number"==typeof t.length)for(var i=0,n=t.length;n>i;i++)e.push(t[i]);else e.push(t);return e}function s(t,e,i){if(!(this instanceof s))return new s(t,e);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=r(t),this.options=n({},this.options),"function"==typeof e?i=e:n(this.options,e),i&&this.on("always",i),this.getImages(),c&&(this.jqDeferred=new c.Deferred);var o=this;setTimeout(function(){o.check()})}function a(t){this.img=t}function l(t){this.src=t,u[t]=this}var c=t.jQuery,h=t.console,d="undefined"!=typeof h,p=Object.prototype.toString;s.prototype=new e,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var t=0,e=this.elements.length;e>t;t++){var i=this.elements[t];"IMG"===i.nodeName&&this.addImage(i);var n=i.nodeType;if(n&&(1===n||9===n||11===n))for(var o=i.querySelectorAll("img"),r=0,s=o.length;s>r;r++){var a=o[r];this.addImage(a)}}},s.prototype.addImage=function(t){var e=new a(t);this.images.push(e)},s.prototype.check=function(){function t(t,o){return e.options.debug&&d&&h.log("confirm",t,o),e.progress(t),i++,i===n&&e.complete(),!0}var e=this,i=0,n=this.images.length;if(this.hasAnyBroken=!1,!n)return void this.complete();for(var o=0;n>o;o++){var r=this.images[o];r.on("confirm",t),r.check()}},s.prototype.progress=function(t){this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded;var e=this;setTimeout(function(){e.emit("progress",e,t),e.jqDeferred&&e.jqDeferred.notify&&e.jqDeferred.notify(e,t)})},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var e=this;setTimeout(function(){if(e.emit(t,e),e.emit("always",e),e.jqDeferred){var i=e.hasAnyBroken?"reject":"resolve";e.jqDeferred[i](e)}})},c&&(c.fn.imagesLoaded=function(t,e){var i=new s(this,t,e);return i.jqDeferred.promise(c(this))}),a.prototype=new e,a.prototype.check=function(){var t=u[this.img.src]||new l(this.img.src);if(t.isConfirmed)return void this.confirm(t.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var e=this;t.on("confirm",function(t,i){return e.confirm(t.isLoaded,i),!0}),t.check()},a.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("confirm",this,e)};var u={};return l.prototype=new e,l.prototype.check=function(){if(!this.isChecked){var t=new Image;i.bind(t,"load",this),i.bind(t,"error",this),t.src=this.src,this.isChecked=!0}},l.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},l.prototype.onload=function(t){this.confirm(!0,"onload"),this.unbindProxyEvents(t)},l.prototype.onerror=function(t){this.confirm(!1,"onerror"),this.unbindProxyEvents(t)},l.prototype.confirm=function(t,e){this.isConfirmed=!0,this.isLoaded=t,this.emit("confirm",this,e)},l.prototype.unbindProxyEvents=function(t){i.unbind(t.target,"load",this),i.unbind(t.target,"error",this)},s}),function(t,e){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("flickity"),require("imagesloaded")):t.Flickity=e(t,t.Flickity,t.imagesLoaded)}(window,function(t,e,i){return e.createMethods.push("_createImagesLoaded"),e.prototype._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},e.prototype.imagesLoaded=function(){function t(t,i){var n=e.getParentCell(i.img);e.cellSizeChange(n&&n.element)}if(this.options.imagesLoaded){var e=this;i(this.slider).on("progress",t)}},e});
/* jQuery-FontSpy.js v3.0.0
 * https://github.com/patrickmarabeas/jQuery-FontSpy.js
 *
 * Copyright 2013, Patrick Marabeas http://pulse-dev.com
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 02/11/2015
 */
!function(t){"use strict";t.fontSpy=function(s,e){var o,n,i,c,a,u,l,f;o={font:s,fontClass:s.toLowerCase().replace(/\s/g,""),success:t.noop,failure:t.noop,testFont:"Courier New",testString:"QW@HhsXJ",glyphs:"",delay:50,timeOut:500,callback:t.noop},n=t.extend(o,e),i=t("<span>"+n.testString+n.glyphs+"</span>").css("position","absolute").css("top","-9999px").css("left","-9999px").css("visibility","hidden").css("fontFamily",n.testFont).css("fontSize","250px"),t("body").append(i),c=i.outerWidth(),i.css("fontFamily",n.font+","+n.testFont),a=function(){n&&n.failure&&n.failure(),n.callback(),i.remove()},u=function(){n.callback(),n&&n.success&&n.success(),i.remove()},l=function(){setTimeout(f,n.delay),n.timeOut-=n.delay},(f=function(){var t=i.outerWidth();c!==t?u():n.timeOut<0?a():l()})()}}(jQuery);
/*! selectize.js - v0.12.1 | https://github.com/brianreavis/selectize.js | Apache License (v2) */
!function(a,b){"function"==typeof define&&define.amd?define("sifter",b):"object"==typeof exports?module.exports=b():a.Sifter=b()}(this,function(){var a=function(a,b){this.items=a,this.settings=b||{diacritics:!0}};a.prototype.tokenize=function(a){if(a=d(String(a||"").toLowerCase()),!a||!a.length)return[];var b,c,f,h,i=[],j=a.split(/ +/);for(b=0,c=j.length;c>b;b++){if(f=e(j[b]),this.settings.diacritics)for(h in g)g.hasOwnProperty(h)&&(f=f.replace(new RegExp(h,"g"),g[h]));i.push({string:j[b],regex:new RegExp(f,"i")})}return i},a.prototype.iterator=function(a,b){var c;c=f(a)?Array.prototype.forEach||function(a){for(var b=0,c=this.length;c>b;b++)a(this[b],b,this)}:function(a){for(var b in this)this.hasOwnProperty(b)&&a(this[b],b,this)},c.apply(a,[b])},a.prototype.getScoreFunction=function(a,b){var c,d,e,f;c=this,a=c.prepareSearch(a,b),e=a.tokens,d=a.options.fields,f=e.length;var g=function(a,b){var c,d;return a?(a=String(a||""),d=a.search(b.regex),-1===d?0:(c=b.string.length/a.length,0===d&&(c+=.5),c)):0},h=function(){var a=d.length;return a?1===a?function(a,b){return g(b[d[0]],a)}:function(b,c){for(var e=0,f=0;a>e;e++)f+=g(c[d[e]],b);return f/a}:function(){return 0}}();return f?1===f?function(a){return h(e[0],a)}:"and"===a.options.conjunction?function(a){for(var b,c=0,d=0;f>c;c++){if(b=h(e[c],a),0>=b)return 0;d+=b}return d/f}:function(a){for(var b=0,c=0;f>b;b++)c+=h(e[b],a);return c/f}:function(){return 0}},a.prototype.getSortFunction=function(a,c){var d,e,f,g,h,i,j,k,l,m,n;if(f=this,a=f.prepareSearch(a,c),n=!a.query&&c.sort_empty||c.sort,l=function(a,b){return"$score"===a?b.score:f.items[b.id][a]},h=[],n)for(d=0,e=n.length;e>d;d++)(a.query||"$score"!==n[d].field)&&h.push(n[d]);if(a.query){for(m=!0,d=0,e=h.length;e>d;d++)if("$score"===h[d].field){m=!1;break}m&&h.unshift({field:"$score",direction:"desc"})}else for(d=0,e=h.length;e>d;d++)if("$score"===h[d].field){h.splice(d,1);break}for(k=[],d=0,e=h.length;e>d;d++)k.push("desc"===h[d].direction?-1:1);return i=h.length,i?1===i?(g=h[0].field,j=k[0],function(a,c){return j*b(l(g,a),l(g,c))}):function(a,c){var d,e,f;for(d=0;i>d;d++)if(f=h[d].field,e=k[d]*b(l(f,a),l(f,c)))return e;return 0}:null},a.prototype.prepareSearch=function(a,b){if("object"==typeof a)return a;b=c({},b);var d=b.fields,e=b.sort,g=b.sort_empty;return d&&!f(d)&&(b.fields=[d]),e&&!f(e)&&(b.sort=[e]),g&&!f(g)&&(b.sort_empty=[g]),{options:b,query:String(a||"").toLowerCase(),tokens:this.tokenize(a),total:0,items:[]}},a.prototype.search=function(a,b){var c,d,e,f,g=this;return d=this.prepareSearch(a,b),b=d.options,a=d.query,f=b.score||g.getScoreFunction(d),a.length?g.iterator(g.items,function(a,e){c=f(a),(b.filter===!1||c>0)&&d.items.push({score:c,id:e})}):g.iterator(g.items,function(a,b){d.items.push({score:1,id:b})}),e=g.getSortFunction(d,b),e&&d.items.sort(e),d.total=d.items.length,"number"==typeof b.limit&&(d.items=d.items.slice(0,b.limit)),d};var b=function(a,b){return"number"==typeof a&&"number"==typeof b?a>b?1:b>a?-1:0:(a=h(String(a||"")),b=h(String(b||"")),a>b?1:b>a?-1:0)},c=function(a){var b,c,d,e;for(b=1,c=arguments.length;c>b;b++)if(e=arguments[b])for(d in e)e.hasOwnProperty(d)&&(a[d]=e[d]);return a},d=function(a){return(a+"").replace(/^\s+|\s+$|/g,"")},e=function(a){return(a+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},f=Array.isArray||$&&$.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},g={a:"[aÀÁÂÃÄÅàáâãäåĀāąĄ]",c:"[cÇçćĆčČ]",d:"[dđĐďĎ]",e:"[eÈÉÊËèéêëěĚĒēęĘ]",i:"[iÌÍÎÏìíîïĪī]",l:"[lłŁ]",n:"[nÑñňŇńŃ]",o:"[oÒÓÔÕÕÖØòóôõöøŌō]",r:"[rřŘ]",s:"[sŠšśŚ]",t:"[tťŤ]",u:"[uÙÚÛÜùúûüůŮŪū]",y:"[yŸÿýÝ]",z:"[zŽžżŻźŹ]"},h=function(){var a,b,c,d,e="",f={};for(c in g)if(g.hasOwnProperty(c))for(d=g[c].substring(2,g[c].length-1),e+=d,a=0,b=d.length;b>a;a++)f[d.charAt(a)]=c;var h=new RegExp("["+e+"]","g");return function(a){return a.replace(h,function(a){return f[a]}).toLowerCase()}}();return a}),function(a,b){"function"==typeof define&&define.amd?define("microplugin",b):"object"==typeof exports?module.exports=b():a.MicroPlugin=b()}(this,function(){var a={};a.mixin=function(a){a.plugins={},a.prototype.initializePlugins=function(a){var c,d,e,f=this,g=[];if(f.plugins={names:[],settings:{},requested:{},loaded:{}},b.isArray(a))for(c=0,d=a.length;d>c;c++)"string"==typeof a[c]?g.push(a[c]):(f.plugins.settings[a[c].name]=a[c].options,g.push(a[c].name));else if(a)for(e in a)a.hasOwnProperty(e)&&(f.plugins.settings[e]=a[e],g.push(e));for(;g.length;)f.require(g.shift())},a.prototype.loadPlugin=function(b){var c=this,d=c.plugins,e=a.plugins[b];if(!a.plugins.hasOwnProperty(b))throw new Error('Unable to find "'+b+'" plugin');d.requested[b]=!0,d.loaded[b]=e.fn.apply(c,[c.plugins.settings[b]||{}]),d.names.push(b)},a.prototype.require=function(a){var b=this,c=b.plugins;if(!b.plugins.loaded.hasOwnProperty(a)){if(c.requested[a])throw new Error('Plugin has circular dependency ("'+a+'")');b.loadPlugin(a)}return c.loaded[a]},a.define=function(b,c){a.plugins[b]={name:b,fn:c}}};var b={isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)}};return a}),function(a,b){"function"==typeof define&&define.amd?define("selectize",["jquery","sifter","microplugin"],b):"object"==typeof exports?module.exports=b(require("jquery"),require("sifter"),require("microplugin")):a.Selectize=b(a.jQuery,a.Sifter,a.MicroPlugin)}(this,function(a,b,c){"use strict";var d=function(a,b){if("string"!=typeof b||b.length){var c="string"==typeof b?new RegExp(b,"i"):b,d=function(a){var b=0;if(3===a.nodeType){var e=a.data.search(c);if(e>=0&&a.data.length>0){var f=a.data.match(c),g=document.createElement("span");g.className="highlight";var h=a.splitText(e),i=(h.splitText(f[0].length),h.cloneNode(!0));g.appendChild(i),h.parentNode.replaceChild(g,h),b=1}}else if(1===a.nodeType&&a.childNodes&&!/(script|style)/i.test(a.tagName))for(var j=0;j<a.childNodes.length;++j)j+=d(a.childNodes[j]);return b};return a.each(function(){d(this)})}},e=function(){};e.prototype={on:function(a,b){this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(b)},off:function(a,b){var c=arguments.length;return 0===c?delete this._events:1===c?delete this._events[a]:(this._events=this._events||{},void(a in this._events!=!1&&this._events[a].splice(this._events[a].indexOf(b),1)))},trigger:function(a){if(this._events=this._events||{},a in this._events!=!1)for(var b=0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments,1))}},e.mixin=function(a){for(var b=["on","off","trigger"],c=0;c<b.length;c++)a.prototype[b[c]]=e.prototype[b[c]]};var f=/Mac/.test(navigator.userAgent),g=65,h=13,i=27,j=37,k=38,l=80,m=39,n=40,o=78,p=8,q=46,r=16,s=f?91:17,t=f?18:17,u=9,v=1,w=2,x=!/android/i.test(window.navigator.userAgent)&&!!document.createElement("form").validity,y=function(a){return"undefined"!=typeof a},z=function(a){return"undefined"==typeof a||null===a?null:"boolean"==typeof a?a?"1":"0":a+""},A=function(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},B=function(a){return(a+"").replace(/\$/g,"$$$$")},C={};C.before=function(a,b,c){var d=a[b];a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)}},C.after=function(a,b,c){var d=a[b];a[b]=function(){var b=d.apply(a,arguments);return c.apply(a,arguments),b}};var D=function(a){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}},E=function(a,b){var c;return function(){var d=this,e=arguments;window.clearTimeout(c),c=window.setTimeout(function(){a.apply(d,e)},b)}},F=function(a,b,c){var d,e=a.trigger,f={};a.trigger=function(){var c=arguments[0];return-1===b.indexOf(c)?e.apply(a,arguments):void(f[c]=arguments)},c.apply(a,[]),a.trigger=e;for(d in f)f.hasOwnProperty(d)&&e.apply(a,f[d])},G=function(a,b,c,d){a.on(b,c,function(b){for(var c=b.target;c&&c.parentNode!==a[0];)c=c.parentNode;return b.currentTarget=c,d.apply(this,[b])})},H=function(a){var b={};if("selectionStart"in a)b.start=a.selectionStart,b.length=a.selectionEnd-b.start;else if(document.selection){a.focus();var c=document.selection.createRange(),d=document.selection.createRange().text.length;c.moveStart("character",-a.value.length),b.start=c.text.length-d,b.length=d}return b},I=function(a,b,c){var d,e,f={};if(c)for(d=0,e=c.length;e>d;d++)f[c[d]]=a.css(c[d]);else f=a.css();b.css(f)},J=function(b,c){if(!b)return 0;var d=a("<test>").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).text(b).appendTo("body");I(c,d,["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"]);var e=d.width();return d.remove(),e},K=function(a){var b=null,c=function(c,d){var e,f,g,h,i,j,k,l;c=c||window.event||{},d=d||{},c.metaKey||c.altKey||(d.force||a.data("grow")!==!1)&&(e=a.val(),c.type&&"keydown"===c.type.toLowerCase()&&(f=c.keyCode,g=f>=97&&122>=f||f>=65&&90>=f||f>=48&&57>=f||32===f,f===q||f===p?(l=H(a[0]),l.length?e=e.substring(0,l.start)+e.substring(l.start+l.length):f===p&&l.start?e=e.substring(0,l.start-1)+e.substring(l.start+1):f===q&&"undefined"!=typeof l.start&&(e=e.substring(0,l.start)+e.substring(l.start+1))):g&&(j=c.shiftKey,k=String.fromCharCode(c.keyCode),k=j?k.toUpperCase():k.toLowerCase(),e+=k)),h=a.attr("placeholder"),!e&&h&&(e=h),i=J(e,a)+4,i!==b&&(b=i,a.width(i),a.triggerHandler("resize")))};a.on("keydown keyup update blur",c),c()},L=function(c,d){var e,f,g,h,i=this;h=c[0],h.selectize=i;var j=window.getComputedStyle&&window.getComputedStyle(h,null);if(g=j?j.getPropertyValue("direction"):h.currentStyle&&h.currentStyle.direction,g=g||c.parents("[dir]:first").attr("dir")||"",a.extend(i,{order:0,settings:d,$input:c,tabIndex:c.attr("tabindex")||"",tagType:"select"===h.tagName.toLowerCase()?v:w,rtl:/rtl/i.test(g),eventNS:".selectize"+ ++L.count,highlightedValue:null,isOpen:!1,isDisabled:!1,isRequired:c.is("[required]"),isInvalid:!1,isLocked:!1,isFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreBlur:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:null===d.loadThrottle?i.onSearchChange:E(i.onSearchChange,d.loadThrottle)}),i.sifter=new b(this.options,{diacritics:d.diacritics}),i.settings.options){for(e=0,f=i.settings.options.length;f>e;e++)i.registerOption(i.settings.options[e]);delete i.settings.options}if(i.settings.optgroups){for(e=0,f=i.settings.optgroups.length;f>e;e++)i.registerOptionGroup(i.settings.optgroups[e]);delete i.settings.optgroups}i.settings.mode=i.settings.mode||(1===i.settings.maxItems?"single":"multi"),"boolean"!=typeof i.settings.hideSelected&&(i.settings.hideSelected="multi"===i.settings.mode),i.initializePlugins(i.settings.plugins),i.setupCallbacks(),i.setupTemplates(),i.setup()};return e.mixin(L),c.mixin(L),a.extend(L.prototype,{setup:function(){var b,c,d,e,g,h,i,j,k,l=this,m=l.settings,n=l.eventNS,o=a(window),p=a(document),q=l.$input;if(i=l.settings.mode,j=q.attr("class")||"",b=a("<div>").addClass(m.wrapperClass).addClass(j).addClass(i),c=a("<div>").addClass(m.inputClass).addClass("items").appendTo(b),d=a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex",q.is(":disabled")?"-1":l.tabIndex),h=a(m.dropdownParent||b),e=a("<div>").addClass(m.dropdownClass).addClass(i).hide().appendTo(h),g=a("<div>").addClass(m.dropdownContentClass).appendTo(e),l.settings.copyClassesToDropdown&&e.addClass(j),b.css({width:q[0].style.width}),l.plugins.names.length&&(k="plugin-"+l.plugins.names.join(" plugin-"),b.addClass(k),e.addClass(k)),(null===m.maxItems||m.maxItems>1)&&l.tagType===v&&q.attr("multiple","multiple"),l.settings.placeholder&&d.attr("placeholder",m.placeholder),!l.settings.splitOn&&l.settings.delimiter){var u=l.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");l.settings.splitOn=new RegExp("\\s*"+u+"+\\s*")}q.attr("autocorrect")&&d.attr("autocorrect",q.attr("autocorrect")),q.attr("autocapitalize")&&d.attr("autocapitalize",q.attr("autocapitalize")),l.$wrapper=b,l.$control=c,l.$control_input=d,l.$dropdown=e,l.$dropdown_content=g,e.on("mouseenter","[data-selectable]",function(){return l.onOptionHover.apply(l,arguments)}),e.on("mousedown click","[data-selectable]",function(){return l.onOptionSelect.apply(l,arguments)}),G(c,"mousedown","*:not(input)",function(){return l.onItemSelect.apply(l,arguments)}),K(d),c.on({mousedown:function(){return l.onMouseDown.apply(l,arguments)},click:function(){return l.onClick.apply(l,arguments)}}),d.on({mousedown:function(a){a.stopPropagation()},keydown:function(){return l.onKeyDown.apply(l,arguments)},keyup:function(){return l.onKeyUp.apply(l,arguments)},keypress:function(){return l.onKeyPress.apply(l,arguments)},resize:function(){l.positionDropdown.apply(l,[])},blur:function(){return l.onBlur.apply(l,arguments)},focus:function(){return l.ignoreBlur=!1,l.onFocus.apply(l,arguments)},paste:function(){return l.onPaste.apply(l,arguments)}}),p.on("keydown"+n,function(a){l.isCmdDown=a[f?"metaKey":"ctrlKey"],l.isCtrlDown=a[f?"altKey":"ctrlKey"],l.isShiftDown=a.shiftKey}),p.on("keyup"+n,function(a){a.keyCode===t&&(l.isCtrlDown=!1),a.keyCode===r&&(l.isShiftDown=!1),a.keyCode===s&&(l.isCmdDown=!1)}),p.on("mousedown"+n,function(a){if(l.isFocused){if(a.target===l.$dropdown[0]||a.target.parentNode===l.$dropdown[0])return!1;l.$control.has(a.target).length||a.target===l.$control[0]||l.blur(a.target)}}),o.on(["scroll"+n,"resize"+n].join(" "),function(){l.isOpen&&l.positionDropdown.apply(l,arguments)}),o.on("mousemove"+n,function(){l.ignoreHover=!1}),this.revertSettings={$children:q.children().detach(),tabindex:q.attr("tabindex")},q.attr("tabindex",-1).hide().after(l.$wrapper),a.isArray(m.items)&&(l.setValue(m.items),delete m.items),x&&q.on("invalid"+n,function(a){a.preventDefault(),l.isInvalid=!0,l.refreshState()}),l.updateOriginalInput(),l.refreshItems(),l.refreshState(),l.updatePlaceholder(),l.isSetup=!0,q.is(":disabled")&&l.disable(),l.on("change",this.onChange),q.data("selectize",l),q.addClass("selectized"),l.trigger("initialize"),m.preload===!0&&l.onSearchChange("")},setupTemplates:function(){var b=this,c=b.settings.labelField,d=b.settings.optgroupLabelField,e={optgroup:function(a){return'<div class="optgroup">'+a.html+"</div>"},optgroup_header:function(a,b){return'<div class="optgroup-header">'+b(a[d])+"</div>"},option:function(a,b){return'<div class="option">'+b(a[c])+"</div>"},item:function(a,b){return'<div class="item">'+b(a[c])+"</div>"},option_create:function(a,b){return'<div class="create">Add <strong>'+b(a.input)+"</strong>&hellip;</div>"}};b.settings.render=a.extend({},e,b.settings.render)},setupCallbacks:function(){var a,b,c={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(a in c)c.hasOwnProperty(a)&&(b=this.settings[c[a]],b&&this.on(a,b))},onClick:function(a){var b=this;b.isFocused||(b.focus(),a.preventDefault())},onMouseDown:function(b){{var c=this,d=b.isDefaultPrevented();a(b.target)}if(c.isFocused){if(b.target!==c.$control_input[0])return"single"===c.settings.mode?c.isOpen?c.close():c.open():d||c.setActiveItem(null),!1}else d||window.setTimeout(function(){c.focus()},0)},onChange:function(){this.$input.trigger("change")},onPaste:function(b){var c=this;c.isFull()||c.isInputHidden||c.isLocked?b.preventDefault():c.settings.splitOn&&setTimeout(function(){for(var b=a.trim(c.$control_input.val()||"").split(c.settings.splitOn),d=0,e=b.length;e>d;d++)c.createItem(b[d])},0)},onKeyPress:function(a){if(this.isLocked)return a&&a.preventDefault();var b=String.fromCharCode(a.keyCode||a.which);return this.settings.create&&"multi"===this.settings.mode&&b===this.settings.delimiter?(this.createItem(),a.preventDefault(),!1):void 0},onKeyDown:function(a){var b=(a.target===this.$control_input[0],this);if(b.isLocked)return void(a.keyCode!==u&&a.preventDefault());switch(a.keyCode){case g:if(b.isCmdDown)return void b.selectAll();break;case i:return void(b.isOpen&&(a.preventDefault(),a.stopPropagation(),b.close()));case o:if(!a.ctrlKey||a.altKey)break;case n:if(!b.isOpen&&b.hasOptions)b.open();else if(b.$activeOption){b.ignoreHover=!0;var c=b.getAdjacentOption(b.$activeOption,1);c.length&&b.setActiveOption(c,!0,!0)}return void a.preventDefault();case l:if(!a.ctrlKey||a.altKey)break;case k:if(b.$activeOption){b.ignoreHover=!0;var d=b.getAdjacentOption(b.$activeOption,-1);d.length&&b.setActiveOption(d,!0,!0)}return void a.preventDefault();case h:return void(b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),a.preventDefault()));case j:return void b.advanceSelection(-1,a);case m:return void b.advanceSelection(1,a);case u:return b.settings.selectOnTab&&b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),b.isFull()||a.preventDefault()),void(b.settings.create&&b.createItem()&&a.preventDefault());case p:case q:return void b.deleteSelection(a)}return!b.isFull()&&!b.isInputHidden||(f?a.metaKey:a.ctrlKey)?void 0:void a.preventDefault()},onKeyUp:function(a){var b=this;if(b.isLocked)return a&&a.preventDefault();var c=b.$control_input.val()||"";b.lastValue!==c&&(b.lastValue=c,b.onSearchChange(c),b.refreshOptions(),b.trigger("type",c))},onSearchChange:function(a){var b=this,c=b.settings.load;c&&(b.loadedSearches.hasOwnProperty(a)||(b.loadedSearches[a]=!0,b.load(function(d){c.apply(b,[a,d])})))},onFocus:function(a){var b=this,c=b.isFocused;return b.isDisabled?(b.blur(),a&&a.preventDefault(),!1):void(b.ignoreFocus||(b.isFocused=!0,"focus"===b.settings.preload&&b.onSearchChange(""),c||b.trigger("focus"),b.$activeItems.length||(b.showInput(),b.setActiveItem(null),b.refreshOptions(!!b.settings.openOnFocus)),b.refreshState()))},onBlur:function(a,b){var c=this;if(c.isFocused&&(c.isFocused=!1,!c.ignoreFocus)){if(!c.ignoreBlur&&document.activeElement===c.$dropdown_content[0])return c.ignoreBlur=!0,void c.onFocus(a);var d=function(){c.close(),c.setTextboxValue(""),c.setActiveItem(null),c.setActiveOption(null),c.setCaret(c.items.length),c.refreshState(),(b||document.body).focus(),c.ignoreFocus=!1,c.trigger("blur")};c.ignoreFocus=!0,c.settings.create&&c.settings.createOnBlur?c.createItem(null,!1,d):d()}},onOptionHover:function(a){this.ignoreHover||this.setActiveOption(a.currentTarget,!1)},onOptionSelect:function(b){var c,d,e=this;b.preventDefault&&(b.preventDefault(),b.stopPropagation()),d=a(b.currentTarget),d.hasClass("create")?e.createItem(null,function(){e.settings.closeAfterSelect&&e.close()}):(c=d.attr("data-value"),"undefined"!=typeof c&&(e.lastQuery=null,e.setTextboxValue(""),e.addItem(c),e.settings.closeAfterSelect?e.close():!e.settings.hideSelected&&b.type&&/mouse/.test(b.type)&&e.setActiveOption(e.getOption(c))))},onItemSelect:function(a){var b=this;b.isLocked||"multi"===b.settings.mode&&(a.preventDefault(),b.setActiveItem(a.currentTarget,a))},load:function(a){var b=this,c=b.$wrapper.addClass(b.settings.loadingClass);b.loading++,a.apply(b,[function(a){b.loading=Math.max(b.loading-1,0),a&&a.length&&(b.addOption(a),b.refreshOptions(b.isFocused&&!b.isInputHidden)),b.loading||c.removeClass(b.settings.loadingClass),b.trigger("load",a)}])},setTextboxValue:function(a){var b=this.$control_input,c=b.val()!==a;c&&(b.val(a).triggerHandler("update"),this.lastValue=a)},getValue:function(){return this.tagType===v&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)},setValue:function(a,b){var c=b?[]:["change"];F(this,c,function(){this.clear(b),this.addItems(a,b)})},setActiveItem:function(b,c){var d,e,f,g,h,i,j,k,l=this;if("single"!==l.settings.mode){if(b=a(b),!b.length)return a(l.$activeItems).removeClass("active"),l.$activeItems=[],void(l.isFocused&&l.showInput());if(d=c&&c.type.toLowerCase(),"mousedown"===d&&l.isShiftDown&&l.$activeItems.length){for(k=l.$control.children(".active:last"),g=Array.prototype.indexOf.apply(l.$control[0].childNodes,[k[0]]),h=Array.prototype.indexOf.apply(l.$control[0].childNodes,[b[0]]),g>h&&(j=g,g=h,h=j),e=g;h>=e;e++)i=l.$control[0].childNodes[e],-1===l.$activeItems.indexOf(i)&&(a(i).addClass("active"),l.$activeItems.push(i));c.preventDefault()}else"mousedown"===d&&l.isCtrlDown||"keydown"===d&&this.isShiftDown?b.hasClass("active")?(f=l.$activeItems.indexOf(b[0]),l.$activeItems.splice(f,1),b.removeClass("active")):l.$activeItems.push(b.addClass("active")[0]):(a(l.$activeItems).removeClass("active"),l.$activeItems=[b.addClass("active")[0]]);l.hideInput(),this.isFocused||l.focus()}},setActiveOption:function(b,c,d){var e,f,g,h,i,j=this;j.$activeOption&&j.$activeOption.removeClass("active"),j.$activeOption=null,b=a(b),b.length&&(j.$activeOption=b.addClass("active"),(c||!y(c))&&(e=j.$dropdown_content.height(),f=j.$activeOption.outerHeight(!0),c=j.$dropdown_content.scrollTop()||0,g=j.$activeOption.offset().top-j.$dropdown_content.offset().top+c,h=g,i=g-e+f,g+f>e+c?j.$dropdown_content.stop().animate({scrollTop:i},d?j.settings.scrollDuration:0):c>g&&j.$dropdown_content.stop().animate({scrollTop:h},d?j.settings.scrollDuration:0)))},selectAll:function(){var a=this;"single"!==a.settings.mode&&(a.$activeItems=Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")),a.$activeItems.length&&(a.hideInput(),a.close()),a.focus())},hideInput:function(){var a=this;a.setTextboxValue(""),a.$control_input.css({opacity:0,position:"absolute",left:a.rtl?1e4:-1e4}),a.isInputHidden=!0},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0}),this.isInputHidden=!1},focus:function(){var a=this;a.isDisabled||(a.ignoreFocus=!0,a.$control_input[0].focus(),window.setTimeout(function(){a.ignoreFocus=!1,a.onFocus()},0))},blur:function(a){this.$control_input[0].blur(),this.onBlur(null,a)},getScoreFunction:function(a){return this.sifter.getScoreFunction(a,this.getSearchOptions())},getSearchOptions:function(){var a=this.settings,b=a.sortField;return"string"==typeof b&&(b=[{field:b}]),{fields:a.searchField,conjunction:a.searchConjunction,sort:b}},search:function(b){var c,d,e,f=this,g=f.settings,h=this.getSearchOptions();if(g.score&&(e=f.settings.score.apply(this,[b]),"function"!=typeof e))throw new Error('Selectize "score" setting must be a function that returns a function');if(b!==f.lastQuery?(f.lastQuery=b,d=f.sifter.search(b,a.extend(h,{score:e})),f.currentResults=d):d=a.extend(!0,{},f.currentResults),g.hideSelected)for(c=d.items.length-1;c>=0;c--)-1!==f.items.indexOf(z(d.items[c].id))&&d.items.splice(c,1);return d},refreshOptions:function(b){var c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;"undefined"==typeof b&&(b=!0);var t=this,u=a.trim(t.$control_input.val()),v=t.search(u),w=t.$dropdown_content,x=t.$activeOption&&z(t.$activeOption.attr("data-value"));for(g=v.items.length,"number"==typeof t.settings.maxOptions&&(g=Math.min(g,t.settings.maxOptions)),h={},i=[],c=0;g>c;c++)for(j=t.options[v.items[c].id],k=t.render("option",j),l=j[t.settings.optgroupField]||"",m=a.isArray(l)?l:[l],e=0,f=m&&m.length;f>e;e++)l=m[e],t.optgroups.hasOwnProperty(l)||(l=""),h.hasOwnProperty(l)||(h[l]=[],i.push(l)),h[l].push(k);for(this.settings.lockOptgroupOrder&&i.sort(function(a,b){var c=t.optgroups[a].$order||0,d=t.optgroups[b].$order||0;return c-d}),n=[],c=0,g=i.length;g>c;c++)l=i[c],t.optgroups.hasOwnProperty(l)&&h[l].length?(o=t.render("optgroup_header",t.optgroups[l])||"",o+=h[l].join(""),n.push(t.render("optgroup",a.extend({},t.optgroups[l],{html:o})))):n.push(h[l].join(""));if(w.html(n.join("")),t.settings.highlight&&v.query.length&&v.tokens.length)for(c=0,g=v.tokens.length;g>c;c++)d(w,v.tokens[c].regex);if(!t.settings.hideSelected)for(c=0,g=t.items.length;g>c;c++)t.getOption(t.items[c]).addClass("selected");p=t.canCreate(u),p&&(w.prepend(t.render("option_create",{input:u})),s=a(w[0].childNodes[0])),t.hasOptions=v.items.length>0||p,t.hasOptions?(v.items.length>0?(r=x&&t.getOption(x),r&&r.length?q=r:"single"===t.settings.mode&&t.items.length&&(q=t.getOption(t.items[0])),q&&q.length||(q=s&&!t.settings.addPrecedence?t.getAdjacentOption(s,1):w.find("[data-selectable]:first"))):q=s,t.setActiveOption(q),b&&!t.isOpen&&t.open()):(t.setActiveOption(null),b&&t.isOpen&&t.close())},addOption:function(b){var c,d,e,f=this;if(a.isArray(b))for(c=0,d=b.length;d>c;c++)f.addOption(b[c]);else(e=f.registerOption(b))&&(f.userOptions[e]=!0,f.lastQuery=null,f.trigger("option_add",e,b))},registerOption:function(a){var b=z(a[this.settings.valueField]);return!b||this.options.hasOwnProperty(b)?!1:(a.$order=a.$order||++this.order,this.options[b]=a,b)},registerOptionGroup:function(a){var b=z(a[this.settings.optgroupValueField]);return b?(a.$order=a.$order||++this.order,this.optgroups[b]=a,b):!1},addOptionGroup:function(a,b){b[this.settings.optgroupValueField]=a,(a=this.registerOptionGroup(b))&&this.trigger("optgroup_add",a,b)},removeOptionGroup:function(a){this.optgroups.hasOwnProperty(a)&&(delete this.optgroups[a],this.renderCache={},this.trigger("optgroup_remove",a))},clearOptionGroups:function(){this.optgroups={},this.renderCache={},this.trigger("optgroup_clear")},updateOption:function(b,c){var d,e,f,g,h,i,j,k=this;if(b=z(b),f=z(c[k.settings.valueField]),null!==b&&k.options.hasOwnProperty(b)){if("string"!=typeof f)throw new Error("Value must be set in option data");j=k.options[b].$order,f!==b&&(delete k.options[b],g=k.items.indexOf(b),-1!==g&&k.items.splice(g,1,f)),c.$order=c.$order||j,k.options[f]=c,h=k.renderCache.item,i=k.renderCache.option,h&&(delete h[b],delete h[f]),i&&(delete i[b],delete i[f]),-1!==k.items.indexOf(f)&&(d=k.getItem(b),e=a(k.render("item",c)),d.hasClass("active")&&e.addClass("active"),d.replaceWith(e)),k.lastQuery=null,k.isOpen&&k.refreshOptions(!1)}},removeOption:function(a,b){var c=this;a=z(a);var d=c.renderCache.item,e=c.renderCache.option;d&&delete d[a],e&&delete e[a],delete c.userOptions[a],delete c.options[a],c.lastQuery=null,c.trigger("option_remove",a),c.removeItem(a,b)},clearOptions:function(){var a=this;a.loadedSearches={},a.userOptions={},a.renderCache={},a.options=a.sifter.items={},a.lastQuery=null,a.trigger("option_clear"),a.clear()},getOption:function(a){return this.getElementWithValue(a,this.$dropdown_content.find("[data-selectable]"))},getAdjacentOption:function(b,c){var d=this.$dropdown.find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},getElementWithValue:function(b,c){if(b=z(b),"undefined"!=typeof b&&null!==b)for(var d=0,e=c.length;e>d;d++)if(c[d].getAttribute("data-value")===b)return a(c[d]);return a()},getItem:function(a){return this.getElementWithValue(a,this.$control.children())},addItems:function(b,c){for(var d=a.isArray(b)?b:[b],e=0,f=d.length;f>e;e++)this.isPending=f-1>e,this.addItem(d[e],c)},addItem:function(b,c){var d=c?[]:["change"];F(this,d,function(){var d,e,f,g,h,i=this,j=i.settings.mode;return b=z(b),-1!==i.items.indexOf(b)?void("single"===j&&i.close()):void(i.options.hasOwnProperty(b)&&("single"===j&&i.clear(c),"multi"===j&&i.isFull()||(d=a(i.render("item",i.options[b])),h=i.isFull(),i.items.splice(i.caretPos,0,b),i.insertAtCaret(d),(!i.isPending||!h&&i.isFull())&&i.refreshState(),i.isSetup&&(f=i.$dropdown_content.find("[data-selectable]"),i.isPending||(e=i.getOption(b),g=i.getAdjacentOption(e,1).attr("data-value"),i.refreshOptions(i.isFocused&&"single"!==j),g&&i.setActiveOption(i.getOption(g))),!f.length||i.isFull()?i.close():i.positionDropdown(),i.updatePlaceholder(),i.trigger("item_add",b,d),i.updateOriginalInput({silent:c})))))})},removeItem:function(a,b){var c,d,e,f=this;c="object"==typeof a?a:f.getItem(a),a=z(c.attr("data-value")),d=f.items.indexOf(a),-1!==d&&(c.remove(),c.hasClass("active")&&(e=f.$activeItems.indexOf(c[0]),f.$activeItems.splice(e,1)),f.items.splice(d,1),f.lastQuery=null,!f.settings.persist&&f.userOptions.hasOwnProperty(a)&&f.removeOption(a,b),d<f.caretPos&&f.setCaret(f.caretPos-1),f.refreshState(),f.updatePlaceholder(),f.updateOriginalInput({silent:b}),f.positionDropdown(),f.trigger("item_remove",a,c))},createItem:function(b,c){var d=this,e=d.caretPos;b=b||a.trim(d.$control_input.val()||"");var f=arguments[arguments.length-1];if("function"!=typeof f&&(f=function(){}),"boolean"!=typeof c&&(c=!0),!d.canCreate(b))return f(),!1;d.lock();var g="function"==typeof d.settings.create?this.settings.create:function(a){var b={};return b[d.settings.labelField]=a,b[d.settings.valueField]=a,b},h=D(function(a){if(d.unlock(),!a||"object"!=typeof a)return f();var b=z(a[d.settings.valueField]);return"string"!=typeof b?f():(d.setTextboxValue(""),d.addOption(a),d.setCaret(e),d.addItem(b),d.refreshOptions(c&&"single"!==d.settings.mode),void f(a))}),i=g.apply(this,[b,h]);return"undefined"!=typeof i&&h(i),!0},refreshItems:function(){this.lastQuery=null,this.isSetup&&this.addItem(this.items),this.refreshState(),this.updateOriginalInput()},refreshState:function(){var a,b=this;b.isRequired&&(b.items.length&&(b.isInvalid=!1),b.$control_input.prop("required",a)),b.refreshClasses()},refreshClasses:function(){var b=this,c=b.isFull(),d=b.isLocked;b.$wrapper.toggleClass("rtl",b.rtl),b.$control.toggleClass("focus",b.isFocused).toggleClass("disabled",b.isDisabled).toggleClass("required",b.isRequired).toggleClass("invalid",b.isInvalid).toggleClass("locked",d).toggleClass("full",c).toggleClass("not-full",!c).toggleClass("input-active",b.isFocused&&!b.isInputHidden).toggleClass("dropdown-active",b.isOpen).toggleClass("has-options",!a.isEmptyObject(b.options)).toggleClass("has-items",b.items.length>0),b.$control_input.data("grow",!c&&!d)},isFull:function(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems},updateOriginalInput:function(a){var b,c,d,e,f=this;if(a=a||{},f.tagType===v){for(d=[],b=0,c=f.items.length;c>b;b++)e=f.options[f.items[b]][f.settings.labelField]||"",d.push('<option value="'+A(f.items[b])+'" selected="selected">'+A(e)+"</option>");d.length||this.$input.attr("multiple")||d.push('<option value="" selected="selected"></option>'),f.$input.html(d.join(""))}else f.$input.val(f.getValue()),f.$input.attr("value",f.$input.val());f.isSetup&&(a.silent||f.trigger("change",f.$input.val()))},updatePlaceholder:function(){if(this.settings.placeholder){var a=this.$control_input;this.items.length?a.removeAttr("placeholder"):a.attr("placeholder",this.settings.placeholder),a.triggerHandler("update",{force:!0})}},open:function(){var a=this;a.isLocked||a.isOpen||"multi"===a.settings.mode&&a.isFull()||(a.focus(),a.isOpen=!0,a.refreshState(),a.$dropdown.css({visibility:"hidden",display:"block"}),a.positionDropdown(),a.$dropdown.css({visibility:"visible"}),a.trigger("dropdown_open",a.$dropdown))},close:function(){var a=this,b=a.isOpen;"single"===a.settings.mode&&a.items.length&&a.hideInput(),a.isOpen=!1,a.$dropdown.hide(),a.setActiveOption(null),a.refreshState(),b&&a.trigger("dropdown_close",a.$dropdown)},positionDropdown:function(){var a=this.$control,b="body"===this.settings.dropdownParent?a.offset():a.position();b.top+=a.outerHeight(!0),this.$dropdown.css({width:a.outerWidth(),top:b.top,left:b.left})},clear:function(a){var b=this;b.items.length&&(b.$control.children(":not(input)").remove(),b.items=[],b.lastQuery=null,b.setCaret(0),b.setActiveItem(null),b.updatePlaceholder(),b.updateOriginalInput({silent:a}),b.refreshState(),b.showInput(),b.trigger("clear"))},insertAtCaret:function(b){var c=Math.min(this.caretPos,this.items.length);0===c?this.$control.prepend(b):a(this.$control[0].childNodes[c]).before(b),this.setCaret(c+1)},deleteSelection:function(b){var c,d,e,f,g,h,i,j,k,l=this;if(e=b&&b.keyCode===p?-1:1,f=H(l.$control_input[0]),l.$activeOption&&!l.settings.hideSelected&&(i=l.getAdjacentOption(l.$activeOption,-1).attr("data-value")),g=[],l.$activeItems.length){for(k=l.$control.children(".active:"+(e>0?"last":"first")),h=l.$control.children(":not(input)").index(k),e>0&&h++,c=0,d=l.$activeItems.length;d>c;c++)g.push(a(l.$activeItems[c]).attr("data-value"));
b&&(b.preventDefault(),b.stopPropagation())}else(l.isFocused||"single"===l.settings.mode)&&l.items.length&&(0>e&&0===f.start&&0===f.length?g.push(l.items[l.caretPos-1]):e>0&&f.start===l.$control_input.val().length&&g.push(l.items[l.caretPos]));if(!g.length||"function"==typeof l.settings.onDelete&&l.settings.onDelete.apply(l,[g])===!1)return!1;for("undefined"!=typeof h&&l.setCaret(h);g.length;)l.removeItem(g.pop());return l.showInput(),l.positionDropdown(),l.refreshOptions(!0),i&&(j=l.getOption(i),j.length&&l.setActiveOption(j)),!0},advanceSelection:function(a,b){var c,d,e,f,g,h,i=this;0!==a&&(i.rtl&&(a*=-1),c=a>0?"last":"first",d=H(i.$control_input[0]),i.isFocused&&!i.isInputHidden?(f=i.$control_input.val().length,g=0>a?0===d.start&&0===d.length:d.start===f,g&&!f&&i.advanceCaret(a,b)):(h=i.$control.children(".active:"+c),h.length&&(e=i.$control.children(":not(input)").index(h),i.setActiveItem(null),i.setCaret(a>0?e+1:e))))},advanceCaret:function(a,b){var c,d,e=this;0!==a&&(c=a>0?"next":"prev",e.isShiftDown?(d=e.$control_input[c](),d.length&&(e.hideInput(),e.setActiveItem(d),b&&b.preventDefault())):e.setCaret(e.caretPos+a))},setCaret:function(b){var c=this;if(b="single"===c.settings.mode?c.items.length:Math.max(0,Math.min(c.items.length,b)),!c.isPending){var d,e,f,g;for(f=c.$control.children(":not(input)"),d=0,e=f.length;e>d;d++)g=a(f[d]).detach(),b>d?c.$control_input.before(g):c.$control.append(g)}c.caretPos=b},lock:function(){this.close(),this.isLocked=!0,this.refreshState()},unlock:function(){this.isLocked=!1,this.refreshState()},disable:function(){var a=this;a.$input.prop("disabled",!0),a.$control_input.prop("disabled",!0).prop("tabindex",-1),a.isDisabled=!0,a.lock()},enable:function(){var a=this;a.$input.prop("disabled",!1),a.$control_input.prop("disabled",!1).prop("tabindex",a.tabIndex),a.isDisabled=!1,a.unlock()},destroy:function(){var b=this,c=b.eventNS,d=b.revertSettings;b.trigger("destroy"),b.off(),b.$wrapper.remove(),b.$dropdown.remove(),b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:d.tabindex}).show(),b.$control_input.removeData("grow"),b.$input.removeData("selectize"),a(window).off(c),a(document).off(c),a(document.body).off(c),delete b.$input[0].selectize},render:function(a,b){var c,d,e="",f=!1,g=this,h=/^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;return("option"===a||"item"===a)&&(c=z(b[g.settings.valueField]),f=!!c),f&&(y(g.renderCache[a])||(g.renderCache[a]={}),g.renderCache[a].hasOwnProperty(c))?g.renderCache[a][c]:(e=g.settings.render[a].apply(this,[b,A]),("option"===a||"option_create"===a)&&(e=e.replace(h,"<$1 data-selectable")),"optgroup"===a&&(d=b[g.settings.optgroupValueField]||"",e=e.replace(h,'<$1 data-group="'+B(A(d))+'"')),("option"===a||"item"===a)&&(e=e.replace(h,'<$1 data-value="'+B(A(c||""))+'"')),f&&(g.renderCache[a][c]=e),e)},clearCache:function(a){var b=this;"undefined"==typeof a?b.renderCache={}:delete b.renderCache[a]},canCreate:function(a){var b=this;if(!b.settings.create)return!1;var c=b.settings.createFilter;return!(!a.length||"function"==typeof c&&!c.apply(b,[a])||"string"==typeof c&&!new RegExp(c).test(a)||c instanceof RegExp&&!c.test(a))}}),L.count=0,L.defaults={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1e3,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,allowEmptyOption:!1,closeAfterSelect:!1,scrollDuration:60,loadThrottle:300,loadingClass:"loading",dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:!0,render:{}},a.fn.selectize=function(b){var c=a.fn.selectize.defaults,d=a.extend({},c,b),e=d.dataAttr,f=d.labelField,g=d.valueField,h=d.optgroupField,i=d.optgroupLabelField,j=d.optgroupValueField,k=function(b,c){var h,i,j,k,l=b.attr(e);if(l)for(c.options=JSON.parse(l),h=0,i=c.options.length;i>h;h++)c.items.push(c.options[h][g]);else{var m=a.trim(b.val()||"");if(!d.allowEmptyOption&&!m.length)return;for(j=m.split(d.delimiter),h=0,i=j.length;i>h;h++)k={},k[f]=j[h],k[g]=j[h],c.options.push(k);c.items=j}},l=function(b,c){var k,l,m,n,o=c.options,p={},q=function(a){var b=e&&a.attr(e);return"string"==typeof b&&b.length?JSON.parse(b):null},r=function(b,e){b=a(b);var i=z(b.attr("value"));if(i||d.allowEmptyOption)if(p.hasOwnProperty(i)){if(e){var j=p[i][h];j?a.isArray(j)?j.push(e):p[i][h]=[j,e]:p[i][h]=e}}else{var k=q(b)||{};k[f]=k[f]||b.text(),k[g]=k[g]||i,k[h]=k[h]||e,p[i]=k,o.push(k),b.is(":selected")&&c.items.push(i)}},s=function(b){var d,e,f,g,h;for(b=a(b),f=b.attr("label"),f&&(g=q(b)||{},g[i]=f,g[j]=f,c.optgroups.push(g)),h=a("option",b),d=0,e=h.length;e>d;d++)r(h[d],f)};for(c.maxItems=b.attr("multiple")?null:1,n=b.children(),k=0,l=n.length;l>k;k++)m=n[k].tagName.toLowerCase(),"optgroup"===m?s(n[k]):"option"===m&&r(n[k])};return this.each(function(){if(!this.selectize){var e,f=a(this),g=this.tagName.toLowerCase(),h=f.attr("placeholder")||f.attr("data-placeholder");h||d.allowEmptyOption||(h=f.children('option[value=""]').text());var i={placeholder:h,options:[],optgroups:[],items:[]};"select"===g?l(f,i):k(f,i),e=new L(f,a.extend(!0,{},c,i,b))}})},a.fn.selectize.defaults=L.defaults,a.fn.selectize.support={validity:x},L.define("drag_drop",function(){if(!a.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===this.settings.mode){var b=this;b.lock=function(){var a=b.lock;return function(){var c=b.$control.data("sortable");return c&&c.disable(),a.apply(b,arguments)}}(),b.unlock=function(){var a=b.unlock;return function(){var c=b.$control.data("sortable");return c&&c.enable(),a.apply(b,arguments)}}(),b.setup=function(){var c=b.setup;return function(){c.apply(this,arguments);var d=b.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:b.isLocked,start:function(a,b){b.placeholder.css("width",b.helper.css("width")),d.css({overflow:"visible"})},stop:function(){d.css({overflow:"hidden"});var c=b.$activeItems?b.$activeItems.slice():null,e=[];d.children("[data-value]").each(function(){e.push(a(this).attr("data-value"))}),b.setValue(e),b.setActiveItem(c)}})}}()}}),L.define("dropdown_header",function(b){var c=this;b=a.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(a){return'<div class="'+a.headerClass+'"><div class="'+a.titleRowClass+'"><span class="'+a.labelClass+'">'+a.title+'</span><a href="javascript:void(0)" class="'+a.closeClass+'">&times;</a></div></div>'}},b),c.setup=function(){var d=c.setup;return function(){d.apply(c,arguments),c.$dropdown_header=a(b.html(b)),c.$dropdown.prepend(c.$dropdown_header)}}()}),L.define("optgroup_columns",function(b){var c=this;b=a.extend({equalizeWidth:!0,equalizeHeight:!0},b),this.getAdjacentOption=function(b,c){var d=b.closest("[data-group]").find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},this.onKeyDown=function(){var a=c.onKeyDown;return function(b){var d,e,f,g;return!this.isOpen||b.keyCode!==j&&b.keyCode!==m?a.apply(this,arguments):(c.ignoreHover=!0,g=this.$activeOption.closest("[data-group]"),d=g.find("[data-selectable]").index(this.$activeOption),g=b.keyCode===j?g.prev("[data-group]"):g.next("[data-group]"),f=g.find("[data-selectable]"),e=f.eq(Math.min(f.length-1,d)),void(e.length&&this.setActiveOption(e)))}}();var d=function(){var a,b=d.width,c=document;return"undefined"==typeof b&&(a=c.createElement("div"),a.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',a=a.firstChild,c.body.appendChild(a),b=d.width=a.offsetWidth-a.clientWidth,c.body.removeChild(a)),b},e=function(){var e,f,g,h,i,j,k;if(k=a("[data-group]",c.$dropdown_content),f=k.length,f&&c.$dropdown_content.width()){if(b.equalizeHeight){for(g=0,e=0;f>e;e++)g=Math.max(g,k.eq(e).height());k.css({height:g})}b.equalizeWidth&&(j=c.$dropdown_content.innerWidth()-d(),h=Math.round(j/f),k.css({width:h}),f>1&&(i=j-h*(f-1),k.eq(f-1).css({width:i})))}};(b.equalizeHeight||b.equalizeWidth)&&(C.after(this,"positionDropdown",e),C.after(this,"refreshOptions",e))}),L.define("remove_button",function(b){if("single"!==this.settings.mode){b=a.extend({label:"&times;",title:"Remove",className:"remove",append:!0},b);var c=this,d='<a href="javascript:void(0)" class="'+b.className+'" tabindex="-1" title="'+A(b.title)+'">'+b.label+"</a>",e=function(a,b){var c=a.search(/(<\/[^>]+>\s*)$/);return a.substring(0,c)+b+a.substring(c)};this.setup=function(){var f=c.setup;return function(){if(b.append){var g=c.settings.render.item;c.settings.render.item=function(){return e(g.apply(this,arguments),d)}}f.apply(this,arguments),this.$control.on("click","."+b.className,function(b){if(b.preventDefault(),!c.isLocked){var d=a(b.currentTarget).parent();c.setActiveItem(d),c.deleteSelection()&&c.setCaret(c.items.length)}})}}()}}),L.define("restore_on_backspace",function(a){var b=this;a.text=a.text||function(a){return a[this.settings.labelField]},this.onKeyDown=function(){var c=b.onKeyDown;return function(b){var d,e;return b.keyCode===p&&""===this.$control_input.val()&&!this.$activeItems.length&&(d=this.caretPos-1,d>=0&&d<this.items.length)?(e=this.options[this.items[d]],this.deleteSelection(b)&&(this.setTextboxValue(a.text.apply(this,[e])),this.refreshOptions(!0)),void b.preventDefault()):c.apply(this,arguments)}}()}),L});
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Handlebars=e():t.Handlebars=e()}(this,function(){return function(t){function e(s){if(r[s])return r[s].exports;var i=r[s]={exports:{},id:s,loaded:!1};return t[s].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function s(){var t=v();return t.compile=function(e,r){return l.compile(e,r,t)},t.precompile=function(e,r){return l.precompile(e,r,t)},t.AST=c["default"],t.Compiler=l.Compiler,t.JavaScriptCompiler=u["default"],t.Parser=h.parser,t.parse=h.parse,t}var i=r(1)["default"];e.__esModule=!0;var a=r(2),n=i(a),o=r(21),c=i(o),h=r(22),l=r(27),p=r(28),u=i(p),f=r(25),d=i(f),m=r(20),g=i(m),v=n["default"].create,y=s();y.create=s,g["default"](y),y.Visitor=d["default"],y["default"]=y,e["default"]=y,t.exports=e["default"]},function(t,e){"use strict";e["default"]=function(t){return t&&t.__esModule?t:{"default":t}},e.__esModule=!0},function(t,e,r){"use strict";function s(){var t=new o.HandlebarsEnvironment;return f.extend(t,o),t.SafeString=h["default"],t.Exception=p["default"],t.Utils=f,t.escapeExpression=f.escapeExpression,t.VM=m,t.template=function(e){return m.template(e,t)},t}var i=r(3)["default"],a=r(1)["default"];e.__esModule=!0;var n=r(4),o=i(n),c=r(18),h=a(c),l=r(6),p=a(l),u=r(5),f=i(u),d=r(19),m=i(d),g=r(20),v=a(g),y=s();y.create=s,v["default"](y),y["default"]=y,e["default"]=y,t.exports=e["default"]},function(t,e){"use strict";e["default"]=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e},e.__esModule=!0},function(t,e,r){"use strict";function s(t,e,r){this.helpers=t||{},this.partials=e||{},this.decorators=r||{},c.registerDefaultHelpers(this),h.registerDefaultDecorators(this)}var i=r(1)["default"];e.__esModule=!0,e.HandlebarsEnvironment=s;var a=r(5),n=r(6),o=i(n),c=r(7),h=r(15),l=r(17),p=i(l),u="4.0.5";e.VERSION=u;var f=7;e.COMPILER_REVISION=f;var d={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};e.REVISION_CHANGES=d;var m="[object Object]";s.prototype={constructor:s,logger:p["default"],log:p["default"].log,registerHelper:function(t,e){if(a.toString.call(t)===m){if(e)throw new o["default"]("Arg not supported with multiple helpers");a.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if(a.toString.call(t)===m)a.extend(this.partials,t);else{if("undefined"==typeof e)throw new o["default"]('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if(a.toString.call(t)===m){if(e)throw new o["default"]("Arg not supported with multiple decorators");a.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]}};var g=p["default"].log;e.log=g,e.createFrame=a.createFrame,e.logger=p["default"]},function(t,e){"use strict";function r(t){return l[t]}function s(t){for(var e=1;e<arguments.length;e++)for(var r in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],r)&&(t[r]=arguments[e][r]);return t}function i(t,e){for(var r=0,s=t.length;s>r;r++)if(t[r]===e)return r;return-1}function a(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}return u.test(t)?t.replace(p,r):t}function n(t){return t||0===t?m(t)&&0===t.length?!0:!1:!0}function o(t){var e=s({},t);return e._parent=t,e}function c(t,e){return t.path=e,t}function h(t,e){return(t?t+".":"")+e}e.__esModule=!0,e.extend=s,e.indexOf=i,e.escapeExpression=a,e.isEmpty=n,e.createFrame=o,e.blockParams=c,e.appendContextPath=h;var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},p=/[&<>"'`=]/g,u=/[&<>"'`=]/,f=Object.prototype.toString;e.toString=f;var d=function(t){return"function"==typeof t};d(/x/)&&(e.isFunction=d=function(t){return"function"==typeof t&&"[object Function]"===f.call(t)}),e.isFunction=d;var m=Array.isArray||function(t){return t&&"object"==typeof t?"[object Array]"===f.call(t):!1};e.isArray=m},function(t,e){"use strict";function r(t,e){var i=e&&e.loc,a=void 0,n=void 0;i&&(a=i.start.line,n=i.start.column,t+=" - "+a+":"+n);for(var o=Error.prototype.constructor.call(this,t),c=0;c<s.length;c++)this[s[c]]=o[s[c]];Error.captureStackTrace&&Error.captureStackTrace(this,r),i&&(this.lineNumber=a,this.column=n)}e.__esModule=!0;var s=["description","fileName","lineNumber","message","name","number","stack"];r.prototype=new Error,e["default"]=r,t.exports=e["default"]},function(t,e,r){"use strict";function s(t){n["default"](t),c["default"](t),l["default"](t),u["default"](t),d["default"](t),g["default"](t),y["default"](t)}var i=r(1)["default"];e.__esModule=!0,e.registerDefaultHelpers=s;var a=r(8),n=i(a),o=r(9),c=i(o),h=r(10),l=i(h),p=r(11),u=i(p),f=r(12),d=i(f),m=r(13),g=i(m),v=r(14),y=i(v)},function(t,e,r){"use strict";e.__esModule=!0;var s=r(5);e["default"]=function(t){t.registerHelper("blockHelperMissing",function(e,r){var i=r.inverse,a=r.fn;if(e===!0)return a(this);if(e===!1||null==e)return i(this);if(s.isArray(e))return e.length>0?(r.ids&&(r.ids=[r.name]),t.helpers.each(e,r)):i(this);if(r.data&&r.ids){var n=s.createFrame(r.data);n.contextPath=s.appendContextPath(r.data.contextPath,r.name),r={data:n}}return a(e,r)})},t.exports=e["default"]},function(t,e,r){"use strict";var s=r(1)["default"];e.__esModule=!0;var i=r(5),a=r(6),n=s(a);e["default"]=function(t){t.registerHelper("each",function(t,e){function r(e,r,a){h&&(h.key=e,h.index=r,h.first=0===r,h.last=!!a,l&&(h.contextPath=l+e)),c+=s(t[e],{data:h,blockParams:i.blockParams([t[e],e],[l+e,null])})}if(!e)throw new n["default"]("Must pass iterator to #each");var s=e.fn,a=e.inverse,o=0,c="",h=void 0,l=void 0;if(e.data&&e.ids&&(l=i.appendContextPath(e.data.contextPath,e.ids[0])+"."),i.isFunction(t)&&(t=t.call(this)),e.data&&(h=i.createFrame(e.data)),t&&"object"==typeof t)if(i.isArray(t))for(var p=t.length;p>o;o++)o in t&&r(o,o,o===t.length-1);else{var u=void 0;for(var f in t)t.hasOwnProperty(f)&&(void 0!==u&&r(u,o-1),u=f,o++);void 0!==u&&r(u,o-1,!0)}return 0===o&&(c=a(this)),c})},t.exports=e["default"]},function(t,e,r){"use strict";var s=r(1)["default"];e.__esModule=!0;var i=r(6),a=s(i);e["default"]=function(t){t.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new a["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=e["default"]},function(t,e,r){"use strict";e.__esModule=!0;var s=r(5);e["default"]=function(t){t.registerHelper("if",function(t,e){return s.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||s.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,r){return t.helpers["if"].call(this,e,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},t.exports=e["default"]},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t){t.registerHelper("log",function(){for(var e=[void 0],r=arguments[arguments.length-1],s=0;s<arguments.length-1;s++)e.push(arguments[s]);var i=1;null!=r.hash.level?i=r.hash.level:r.data&&null!=r.data.level&&(i=r.data.level),e[0]=i,t.log.apply(t,e)})},t.exports=e["default"]},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t){t.registerHelper("lookup",function(t,e){return t&&t[e]})},t.exports=e["default"]},function(t,e,r){"use strict";e.__esModule=!0;var s=r(5);e["default"]=function(t){t.registerHelper("with",function(t,e){s.isFunction(t)&&(t=t.call(this));var r=e.fn;if(s.isEmpty(t))return e.inverse(this);var i=e.data;return e.data&&e.ids&&(i=s.createFrame(e.data),i.contextPath=s.appendContextPath(e.data.contextPath,e.ids[0])),r(t,{data:i,blockParams:s.blockParams([t],[i&&i.contextPath])})})},t.exports=e["default"]},function(t,e,r){"use strict";function s(t){n["default"](t)}var i=r(1)["default"];e.__esModule=!0,e.registerDefaultDecorators=s;var a=r(16),n=i(a)},function(t,e,r){"use strict";e.__esModule=!0;var s=r(5);e["default"]=function(t){t.registerDecorator("inline",function(t,e,r,i){var a=t;return e.partials||(e.partials={},a=function(i,a){var n=r.partials;r.partials=s.extend({},n,e.partials);var o=t(i,a);return r.partials=n,o}),e.partials[i.args[0]]=i.fn,a})},t.exports=e["default"]},function(t,e,r){"use strict";e.__esModule=!0;var s=r(5),i={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=s.indexOf(i.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=i.lookupLevel(t),"undefined"!=typeof console&&i.lookupLevel(i.level)<=t){var e=i.methodMap[t];console[e]||(e="log");for(var r=arguments.length,s=Array(r>1?r-1:0),a=1;r>a;a++)s[a-1]=arguments[a];console[e].apply(console,s)}}};e["default"]=i,t.exports=e["default"]},function(t,e){"use strict";function r(t){this.string=t}e.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},e["default"]=r,t.exports=e["default"]},function(t,e,r){"use strict";function s(t){var e=t&&t[0]||1,r=v.COMPILER_REVISION;if(e!==r){if(r>e){var s=v.REVISION_CHANGES[r],i=v.REVISION_CHANGES[e];throw new g["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+s+") or downgrade your runtime to an older version ("+i+").")}throw new g["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}}function i(t,e){function r(r,s,i){i.hash&&(s=d.extend({},s,i.hash),i.ids&&(i.ids[0]=!0)),r=e.VM.resolvePartial.call(this,r,s,i);var a=e.VM.invokePartial.call(this,r,s,i);if(null==a&&e.compile&&(i.partials[i.name]=e.compile(r,t.compilerOptions,e),a=i.partials[i.name](s,i)),null!=a){if(i.indent){for(var n=a.split("\n"),o=0,c=n.length;c>o&&(n[o]||o+1!==c);o++)n[o]=i.indent+n[o];a=n.join("\n")}return a}throw new g["default"]("The partial "+i.name+" could not be compiled when running in runtime-only mode")}function s(e){function r(e){return""+t.main(i,e,i.helpers,i.partials,n,c,o)}var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=a.data;s._setup(a),!a.partial&&t.useData&&(n=h(e,n));var o=void 0,c=t.useBlockParams?[]:void 0;return t.useDepths&&(o=a.depths?e!==a.depths[0]?[e].concat(a.depths):a.depths:[e]),(r=l(t.main,r,i,a.depths||[],n,c))(e,a)}if(!e)throw new g["default"]("No environment passed to template");if(!t||!t.main)throw new g["default"]("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var i={strict:function(t,e){if(!(e in t))throw new g["default"]('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var r=t.length,s=0;r>s;s++)if(t[s]&&null!=t[s][e])return t[s][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:d.escapeExpression,invokePartial:r,fn:function(e){var r=t[e];return r.decorator=t[e+"_d"],r},programs:[],program:function(t,e,r,s,i){var n=this.programs[t],o=this.fn(t);return e||i||s||r?n=a(this,t,o,e,r,s,i):n||(n=this.programs[t]=a(this,t,o)),n},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var r=t||e;return t&&e&&t!==e&&(r=d.extend({},e,t)),r},noop:e.VM.noop,compilerInfo:t.compiler};return s.isTop=!0,s._setup=function(r){r.partial?(i.helpers=r.helpers,i.partials=r.partials,i.decorators=r.decorators):(i.helpers=i.merge(r.helpers,e.helpers),t.usePartial&&(i.partials=i.merge(r.partials,e.partials)),(t.usePartial||t.useDecorators)&&(i.decorators=i.merge(r.decorators,e.decorators)))},s._child=function(e,r,s,n){if(t.useBlockParams&&!s)throw new g["default"]("must pass block params");if(t.useDepths&&!n)throw new g["default"]("must pass parent depths");return a(i,e,t[e],r,0,s,n)},s}function a(t,e,r,s,i,a,n){function o(e){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=n;return n&&e!==n[0]&&(o=[e].concat(n)),r(t,e,t.helpers,t.partials,i.data||s,a&&[i.blockParams].concat(a),o)}return o=l(r,o,t,n,s,a),o.program=e,o.depth=n?n.length:0,o.blockParams=i||0,o}function n(t,e,r){return t?t.call||r.name||(r.name=t,t=r.partials[t]):t="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name],t}function o(t,e,r){r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var s=void 0;if(r.fn&&r.fn!==c&&(r.data=v.createFrame(r.data),s=r.data["partial-block"]=r.fn,s.partials&&(r.partials=d.extend({},r.partials,s.partials))),void 0===t&&s&&(t=s),void 0===t)throw new g["default"]("The partial "+r.name+" could not be found");return t instanceof Function?t(e,r):void 0}function c(){return""}function h(t,e){return e&&"root"in e||(e=e?v.createFrame(e):{},e.root=t),e}function l(t,e,r,s,i,a){if(t.decorator){var n={};e=t.decorator(e,n,r,s&&s[0],i,a,s),d.extend(e,n)}return e}var p=r(3)["default"],u=r(1)["default"];e.__esModule=!0,e.checkRevision=s,e.template=i,e.wrapProgram=a,e.resolvePartial=n,e.invokePartial=o,e.noop=c;var f=r(5),d=p(f),m=r(6),g=u(m),v=r(4)},function(t,e){(function(r){"use strict";e.__esModule=!0,e["default"]=function(t){var e="undefined"!=typeof r?r:window,s=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=s),t}},t.exports=e["default"]}).call(e,function(){return this}())},function(t,e){"use strict";e.__esModule=!0;var r={helpers:{helperExpression:function(t){return"SubExpression"===t.type||("MustacheStatement"===t.type||"BlockStatement"===t.type)&&!!(t.params&&t.params.length||t.hash)},scopedId:function(t){return/^\.|this\b/.test(t.original)},simpleId:function(t){return 1===t.parts.length&&!r.helpers.scopedId(t)&&!t.depth}}};e["default"]=r,t.exports=e["default"]},function(t,e,r){"use strict";function s(t,e){if("Program"===t.type)return t;o["default"].yy=f,f.locInfo=function(t){return new f.SourceLocation(e&&e.srcName,t)};var r=new h["default"](e);return r.accept(o["default"].parse(t))}var i=r(1)["default"],a=r(3)["default"];e.__esModule=!0,e.parse=s;var n=r(23),o=i(n),c=r(24),h=i(c),l=r(26),p=a(l),u=r(5);e.parser=o["default"];var f={};u.extend(f,p)},function(t,e){"use strict";var r=function(){function t(){this.yy={}}var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition_plus0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,1],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(t,e,r,s,i,a,n){var o=a.length-1;switch(i){case 1:return a[o-1];case 2:this.$=s.prepareProgram(a[o]);break;case 3:this.$=a[o];break;case 4:this.$=a[o];break;case 5:this.$=a[o];break;case 6:this.$=a[o];break;case 7:this.$=a[o];break;case 8:this.$=a[o];break;case 9:this.$={type:"CommentStatement",value:s.stripComment(a[o]),strip:s.stripFlags(a[o],a[o]),loc:s.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:a[o],value:a[o],loc:s.locInfo(this._$)};break;case 11:this.$=s.prepareRawBlock(a[o-2],a[o-1],a[o],this._$);break;case 12:this.$={path:a[o-3],params:a[o-2],hash:a[o-1]};break;case 13:this.$=s.prepareBlock(a[o-3],a[o-2],a[o-1],a[o],!1,this._$);break;case 14:this.$=s.prepareBlock(a[o-3],a[o-2],a[o-1],a[o],!0,this._$);break;case 15:this.$={open:a[o-5],path:a[o-4],params:a[o-3],hash:a[o-2],blockParams:a[o-1],strip:s.stripFlags(a[o-5],a[o])};break;case 16:this.$={path:a[o-4],params:a[o-3],hash:a[o-2],blockParams:a[o-1],strip:s.stripFlags(a[o-5],a[o])};break;case 17:this.$={path:a[o-4],params:a[o-3],hash:a[o-2],blockParams:a[o-1],strip:s.stripFlags(a[o-5],a[o])};break;case 18:this.$={strip:s.stripFlags(a[o-1],a[o-1]),program:a[o]};break;case 19:var c=s.prepareBlock(a[o-2],a[o-1],a[o],a[o],!1,this._$),h=s.prepareProgram([c],a[o-1].loc);h.chained=!0,this.$={strip:a[o-2].strip,program:h,chain:!0};break;case 20:this.$=a[o];break;case 21:this.$={path:a[o-1],strip:s.stripFlags(a[o-2],a[o])};break;case 22:this.$=s.prepareMustache(a[o-3],a[o-2],a[o-1],a[o-4],s.stripFlags(a[o-4],a[o]),this._$);break;case 23:this.$=s.prepareMustache(a[o-3],a[o-2],a[o-1],a[o-4],s.stripFlags(a[o-4],a[o]),this._$);break;case 24:this.$={type:"PartialStatement",name:a[o-3],params:a[o-2],hash:a[o-1],indent:"",strip:s.stripFlags(a[o-4],a[o]),loc:s.locInfo(this._$)};break;case 25:this.$=s.preparePartialBlock(a[o-2],a[o-1],a[o],this._$);break;case 26:this.$={path:a[o-3],params:a[o-2],hash:a[o-1],strip:s.stripFlags(a[o-4],a[o])};break;case 27:this.$=a[o];break;case 28:this.$=a[o];break;case 29:this.$={type:"SubExpression",path:a[o-3],params:a[o-2],hash:a[o-1],loc:s.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:a[o],loc:s.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:s.id(a[o-2]),value:a[o],loc:s.locInfo(this._$)};break;case 32:this.$=s.id(a[o-1]);break;case 33:this.$=a[o];break;case 34:this.$=a[o];break;case 35:this.$={type:"StringLiteral",value:a[o],original:a[o],loc:s.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(a[o]),original:Number(a[o]),loc:s.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===a[o],original:"true"===a[o],loc:s.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:s.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:s.locInfo(this._$)};break;case 40:this.$=a[o];break;case 41:this.$=a[o];break;case 42:this.$=s.preparePath(!0,a[o],this._$);break;case 43:this.$=s.preparePath(!1,a[o],this._$);break;case 44:a[o-2].push({part:s.id(a[o]),original:a[o],separator:a[o-1]}),this.$=a[o-2];break;case 45:this.$=[{part:s.id(a[o]),original:a[o]}];break;case 46:this.$=[];break;case 47:a[o-1].push(a[o]);break;case 48:this.$=[a[o]];break;case 49:a[o-1].push(a[o]);break;case 50:this.$=[];break;case 51:a[o-1].push(a[o]);break;case 58:this.$=[];break;case 59:a[o-1].push(a[o]);break;case 64:this.$=[];break;case 65:a[o-1].push(a[o]);break;case 70:this.$=[];break;case 71:a[o-1].push(a[o]);break;case 78:this.$=[];break;case 79:a[o-1].push(a[o]);break;case 82:this.$=[];break;case 83:a[o-1].push(a[o]);break;case 86:this.$=[];break;case 87:a[o-1].push(a[o]);break;case 90:this.$=[];break;case 91:a[o-1].push(a[o]);break;case 94:this.$=[];break;case 95:a[o-1].push(a[o]);break;case 98:this.$=[a[o]];break;case 99:a[o-1].push(a[o]);break;case 100:this.$=[a[o]];break;case 101:a[o-1].push(a[o])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{13:40,15:[1,20],17:39},{20:42,56:41,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:45,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:48,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:42,56:49,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:50,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,51]},{72:[1,35],86:52},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:53,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:54,38:56,39:[1,58],43:57,44:[1,59],45:55,47:[2,54]},{28:60,43:61,44:[1,59],47:[2,56]},{13:63,15:[1,20],18:[1,62]},{15:[2,48],18:[2,48]},{33:[2,86],57:64,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:65,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:66,47:[1,67]},{30:68,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:69,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:70,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:71,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:75,33:[2,80],50:72,63:73,64:76,65:[1,44],69:74,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,80]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,51]},{20:75,53:81,54:[2,84],63:82,64:76,65:[1,44],69:83,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:84,47:[1,67]},{47:[2,55]},{4:85,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:86,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:87,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:88,47:[1,67]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:75,33:[2,88],58:89,63:90,64:76,65:[1,44],69:91,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:92,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:93,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,31:94,33:[2,60],63:95,64:76,65:[1,44],69:96,70:77,71:78,72:[1,79],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,66],36:97,63:98,64:76,65:[1,44],69:99,70:77,71:78,72:[1,79],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,22:100,23:[2,52],63:101,64:76,65:[1,44],69:102,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,92],62:103,63:104,64:76,65:[1,44],69:105,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,106]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:107,72:[1,108],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,109],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,110]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:56,39:[1,58],43:57,44:[1,59],45:112,46:111,47:[2,76]},{33:[2,70],40:113,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,114]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:75,63:116,64:76,65:[1,44],67:115,68:[2,96],69:117,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,118]},{32:119,33:[2,62],74:120,75:[1,121]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:122,74:123,75:[1,121]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,124]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,125]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,109]},{20:75,63:126,64:76,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:75,33:[2,72],41:127,63:128,64:76,65:[1,44],69:129,70:77,71:78,72:[1,79],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,130]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,131]},{33:[2,63]},{72:[1,133],76:132},{33:[1,134]},{33:[2,69]},{15:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:135,74:136,75:[1,121]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,138],77:[1,137]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],
48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,139]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],55:[2,55],57:[2,20],61:[2,57],74:[2,81],83:[2,85],87:[2,18],91:[2,89],102:[2,53],105:[2,93],111:[2,19],112:[2,77],117:[2,97],120:[2,63],123:[2,69],124:[2,12],136:[2,75],137:[2,32]},parseError:function(t,e){throw new Error(t)},parse:function(t){function e(){var t;return t=r.lexer.lex()||1,"number"!=typeof t&&(t=r.symbols_[t]||t),t}var r=this,s=[0],i=[null],a=[],n=this.table,o="",c=0,h=0,l=0;this.lexer.setInput(t),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var p=this.lexer.yylloc;a.push(p);var u=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var f,d,m,g,v,y,k,S,b,_={};;){if(m=s[s.length-1],this.defaultActions[m]?g=this.defaultActions[m]:((null===f||"undefined"==typeof f)&&(f=e()),g=n[m]&&n[m][f]),"undefined"==typeof g||!g.length||!g[0]){var P="";if(!l){b=[];for(y in n[m])this.terminals_[y]&&y>2&&b.push("'"+this.terminals_[y]+"'");P=this.lexer.showPosition?"Parse error on line "+(c+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+b.join(", ")+", got '"+(this.terminals_[f]||f)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(P,{text:this.lexer.match,token:this.terminals_[f]||f,line:this.lexer.yylineno,loc:p,expected:b})}}if(g[0]instanceof Array&&g.length>1)throw new Error("Parse Error: multiple actions possible at state: "+m+", token: "+f);switch(g[0]){case 1:s.push(f),i.push(this.lexer.yytext),a.push(this.lexer.yylloc),s.push(g[1]),f=null,d?(f=d,d=null):(h=this.lexer.yyleng,o=this.lexer.yytext,c=this.lexer.yylineno,p=this.lexer.yylloc,l>0&&l--);break;case 2:if(k=this.productions_[g[1]][1],_.$=i[i.length-k],_._$={first_line:a[a.length-(k||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(k||1)].first_column,last_column:a[a.length-1].last_column},u&&(_._$.range=[a[a.length-(k||1)].range[0],a[a.length-1].range[1]]),v=this.performAction.call(_,o,h,c,this.yy,g[1],i,a),"undefined"!=typeof v)return v;k&&(s=s.slice(0,-1*k*2),i=i.slice(0,-1*k),a=a.slice(0,-1*k)),s.push(this.productions_[g[1]][0]),i.push(_.$),a.push(_._$),S=n[s[s.length-2]][s[s.length-1]],s.push(S);break;case 3:return!0}}return!0}},r=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t){return this._input=t,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var e=t.match(/(?:\r\n?|\n).*/g);return e?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,r=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e-1),this.offset-=e;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===s.length?this.yylloc.first_column:0)+s[s.length-r.length].length-r[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-e]),this},more:function(){return this._more=!0,this},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,e,r,s,i;this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),n=0;n<a.length&&(r=this._input.match(this.rules[a[n]]),!r||e&&!(r[0].length>e[0].length)||(e=r,s=n,this.options.flex));n++);return e?(i=e[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],t=this.performAction.call(this,this.yy,this,a[s],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),t?t:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return"undefined"!=typeof t?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)}};return t.options={},t.performAction=function(t,e,r,s){function i(t,r){return e.yytext=e.yytext.substr(t,e.yyleng-r)}switch(r){case 0:if("\\\\"===e.yytext.slice(-2)?(i(0,1),this.begin("mu")):"\\"===e.yytext.slice(-1)?(i(0,1),this.begin("emu")):this.begin("mu"),e.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(e.yytext=e.yytext.substr(5,e.yyleng-9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(e.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return e.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return e.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return e.yytext=e.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},t.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],t.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},t}();return e.lexer=r,t.prototype=e,e.Parser=t,new t}();e.__esModule=!0,e["default"]=r},function(t,e,r){"use strict";function s(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=t}function i(t,e,r){void 0===e&&(e=t.length);var s=t[e-1],i=t[e-2];return s?"ContentStatement"===s.type?(i||!r?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(s.original):void 0:r}function a(t,e,r){void 0===e&&(e=-1);var s=t[e+1],i=t[e+2];return s?"ContentStatement"===s.type?(i||!r?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(s.original):void 0:r}function n(t,e,r){var s=t[null==e?0:e+1];if(s&&"ContentStatement"===s.type&&(r||!s.rightStripped)){var i=s.value;s.value=s.value.replace(r?/^\s+/:/^[ \t]*\r?\n?/,""),s.rightStripped=s.value!==i}}function o(t,e,r){var s=t[null==e?t.length-1:e-1];if(s&&"ContentStatement"===s.type&&(r||!s.leftStripped)){var i=s.value;return s.value=s.value.replace(r?/\s+$/:/[ \t]+$/,""),s.leftStripped=s.value!==i,s.leftStripped}}var c=r(1)["default"];e.__esModule=!0;var h=r(25),l=c(h);s.prototype=new l["default"],s.prototype.Program=function(t){var e=!this.options.ignoreStandalone,r=!this.isRootSeen;this.isRootSeen=!0;for(var s=t.body,c=0,h=s.length;h>c;c++){var l=s[c],p=this.accept(l);if(p){var u=i(s,c,r),f=a(s,c,r),d=p.openStandalone&&u,m=p.closeStandalone&&f,g=p.inlineStandalone&&u&&f;p.close&&n(s,c,!0),p.open&&o(s,c,!0),e&&g&&(n(s,c),o(s,c)&&"PartialStatement"===l.type&&(l.indent=/([ \t]+$)/.exec(s[c-1].original)[1])),e&&d&&(n((l.program||l.inverse).body),o(s,c)),e&&m&&(n(s,c),o((l.inverse||l.program).body))}}return t},s.prototype.BlockStatement=s.prototype.DecoratorBlock=s.prototype.PartialBlockStatement=function(t){this.accept(t.program),this.accept(t.inverse);var e=t.program||t.inverse,r=t.program&&t.inverse,s=r,c=r;if(r&&r.chained)for(s=r.body[0].program;c.chained;)c=c.body[c.body.length-1].program;var h={open:t.openStrip.open,close:t.closeStrip.close,openStandalone:a(e.body),closeStandalone:i((s||e).body)};if(t.openStrip.close&&n(e.body,null,!0),r){var l=t.inverseStrip;l.open&&o(e.body,null,!0),l.close&&n(s.body,null,!0),t.closeStrip.open&&o(c.body,null,!0),!this.options.ignoreStandalone&&i(e.body)&&a(s.body)&&(o(e.body),n(s.body))}else t.closeStrip.open&&o(e.body,null,!0);return h},s.prototype.Decorator=s.prototype.MustacheStatement=function(t){return t.strip},s.prototype.PartialStatement=s.prototype.CommentStatement=function(t){var e=t.strip||{};return{inlineStandalone:!0,open:e.open,close:e.close}},e["default"]=s,t.exports=e["default"]},function(t,e,r){"use strict";function s(){this.parents=[]}function i(t){this.acceptRequired(t,"path"),this.acceptArray(t.params),this.acceptKey(t,"hash")}function a(t){i.call(this,t),this.acceptKey(t,"program"),this.acceptKey(t,"inverse")}function n(t){this.acceptRequired(t,"name"),this.acceptArray(t.params),this.acceptKey(t,"hash")}var o=r(1)["default"];e.__esModule=!0;var c=r(6),h=o(c);s.prototype={constructor:s,mutating:!1,acceptKey:function(t,e){var r=this.accept(t[e]);if(this.mutating){if(r&&!s.prototype[r.type])throw new h["default"]('Unexpected node type "'+r.type+'" found when accepting '+e+" on "+t.type);t[e]=r}},acceptRequired:function(t,e){if(this.acceptKey(t,e),!t[e])throw new h["default"](t.type+" requires "+e)},acceptArray:function(t){for(var e=0,r=t.length;r>e;e++)this.acceptKey(t,e),t[e]||(t.splice(e,1),e--,r--)},accept:function(t){if(t){if(!this[t.type])throw new h["default"]("Unknown type: "+t.type,t);this.current&&this.parents.unshift(this.current),this.current=t;var e=this[t.type](t);return this.current=this.parents.shift(),!this.mutating||e?e:e!==!1?t:void 0}},Program:function(t){this.acceptArray(t.body)},MustacheStatement:i,Decorator:i,BlockStatement:a,DecoratorBlock:a,PartialStatement:n,PartialBlockStatement:function(t){n.call(this,t),this.acceptKey(t,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:i,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(t){this.acceptArray(t.pairs)},HashPair:function(t){this.acceptRequired(t,"value")}},e["default"]=s,t.exports=e["default"]},function(t,e,r){"use strict";function s(t,e){if(e=e.path?e.path.original:e,t.path.original!==e){var r={loc:t.path.loc};throw new g["default"](t.path.original+" doesn't match "+e,r)}}function i(t,e){this.source=t,this.start={line:e.first_line,column:e.first_column},this.end={line:e.last_line,column:e.last_column}}function a(t){return/^\[.*\]$/.test(t)?t.substr(1,t.length-2):t}function n(t,e){return{open:"~"===t.charAt(2),close:"~"===e.charAt(e.length-3)}}function o(t){return t.replace(/^\{\{~?\!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function c(t,e,r){r=this.locInfo(r);for(var s=t?"@":"",i=[],a=0,n="",o=0,c=e.length;c>o;o++){var h=e[o].part,l=e[o].original!==h;if(s+=(e[o].separator||"")+h,l||".."!==h&&"."!==h&&"this"!==h)i.push(h);else{if(i.length>0)throw new g["default"]("Invalid path: "+s,{loc:r});".."===h&&(a++,n+="../")}}return{type:"PathExpression",data:t,depth:a,parts:i,original:s,loc:r}}function h(t,e,r,s,i,a){var n=s.charAt(3)||s.charAt(2),o="{"!==n&&"&"!==n,c=/\*/.test(s);return{type:c?"Decorator":"MustacheStatement",path:t,params:e,hash:r,escaped:o,strip:i,loc:this.locInfo(a)}}function l(t,e,r,i){s(t,r),i=this.locInfo(i);var a={type:"Program",body:e,strip:{},loc:i};return{type:"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:a,openStrip:{},inverseStrip:{},closeStrip:{},loc:i}}function p(t,e,r,i,a,n){i&&i.path&&s(t,i);var o=/\*/.test(t.open);e.blockParams=t.blockParams;var c=void 0,h=void 0;if(r){if(o)throw new g["default"]("Unexpected inverse block on decorator",r);r.chain&&(r.program.body[0].closeStrip=i.strip),h=r.strip,c=r.program}return a&&(a=c,c=e,e=a),{type:o?"DecoratorBlock":"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:e,inverse:c,openStrip:t.strip,inverseStrip:h,closeStrip:i&&i.strip,loc:this.locInfo(n)}}function u(t,e){if(!e&&t.length){var r=t[0].loc,s=t[t.length-1].loc;r&&s&&(e={source:r.source,start:{line:r.start.line,column:r.start.column},end:{line:s.end.line,column:s.end.column}})}return{type:"Program",body:t,strip:{},loc:e}}function f(t,e,r,i){return s(t,r),{type:"PartialBlockStatement",name:t.path,params:t.params,hash:t.hash,program:e,openStrip:t.strip,closeStrip:r&&r.strip,loc:this.locInfo(i)}}var d=r(1)["default"];e.__esModule=!0,e.SourceLocation=i,e.id=a,e.stripFlags=n,e.stripComment=o,e.preparePath=c,e.prepareMustache=h,e.prepareRawBlock=l,e.prepareBlock=p,e.prepareProgram=u,e.preparePartialBlock=f;var m=r(6),g=d(m)},function(t,e,r){"use strict";function s(){}function i(t,e,r){if(null==t||"string"!=typeof t&&"Program"!==t.type)throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var s=r.parse(t,e),i=(new r.Compiler).compile(s,e);return(new r.JavaScriptCompiler).compile(i,e)}function a(t,e,r){function s(){var s=r.parse(t,e),i=(new r.Compiler).compile(s,e),a=(new r.JavaScriptCompiler).compile(i,e,void 0,!0);return r.template(a)}function i(t,e){return a||(a=s()),a.call(this,t,e)}if(void 0===e&&(e={}),null==t||"string"!=typeof t&&"Program"!==t.type)throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var a=void 0;return i._setup=function(t){return a||(a=s()),a._setup(t)},i._child=function(t,e,r,i){return a||(a=s()),a._child(t,e,r,i)},i}function n(t,e){if(t===e)return!0;if(p.isArray(t)&&p.isArray(e)&&t.length===e.length){for(var r=0;r<t.length;r++)if(!n(t[r],e[r]))return!1;return!0}}function o(t){if(!t.path.parts){var e=t.path;t.path={type:"PathExpression",data:!1,depth:0,parts:[e.original+""],original:e.original+"",loc:e.loc}}}var c=r(1)["default"];e.__esModule=!0,e.Compiler=s,e.precompile=i,e.compile=a;var h=r(6),l=c(h),p=r(5),u=r(21),f=c(u),d=[].slice;s.prototype={compiler:s,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var r=0;e>r;r++){var s=this.opcodes[r],i=t.opcodes[r];if(s.opcode!==i.opcode||!n(s.args,i.args))return!1}e=this.children.length;for(var r=0;e>r;r++)if(!this.children[r].equals(t.children[r]))return!1;return!0},guid:0,compile:function(t,e){this.sourceNode=[],this.opcodes=[],this.children=[],this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds,e.blockParams=e.blockParams||[];var r=e.knownHelpers;if(e.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0,lookup:!0},r)for(var s in r)s in r&&(e.knownHelpers[s]=r[s]);return this.accept(t)},compileProgram:function(t){var e=new this.compiler,r=e.compile(t,this.options),s=this.guid++;return this.usePartial=this.usePartial||r.usePartial,this.children[s]=r,this.useDepths=this.useDepths||r.useDepths,s},accept:function(t){if(!this[t.type])throw new l["default"]("Unknown type: "+t.type,t);this.sourceNode.unshift(t);var e=this[t.type](t);return this.sourceNode.shift(),e},Program:function(t){this.options.blockParams.unshift(t.blockParams);for(var e=t.body,r=e.length,s=0;r>s;s++)this.accept(e[s]);return this.options.blockParams.shift(),this.isSimple=1===r,this.blockParams=t.blockParams?t.blockParams.length:0,this},BlockStatement:function(t){o(t);var e=t.program,r=t.inverse;e=e&&this.compileProgram(e),r=r&&this.compileProgram(r);var s=this.classifySexpr(t);"helper"===s?this.helperSexpr(t,e,r):"simple"===s?(this.simpleSexpr(t),this.opcode("pushProgram",e),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("blockValue",t.path.original)):(this.ambiguousSexpr(t,e,r),this.opcode("pushProgram",e),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(t){var e=t.program&&this.compileProgram(t.program),r=this.setupFullMustacheParams(t,e,void 0),s=t.path;this.useDecorators=!0,this.opcode("registerDecorator",r.length,s.original)},PartialStatement:function(t){this.usePartial=!0;var e=t.program;e&&(e=this.compileProgram(t.program));var r=t.params;if(r.length>1)throw new l["default"]("Unsupported number of partial arguments: "+r.length,t);r.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):r.push({type:"PathExpression",parts:[],depth:0}));var s=t.name.original,i="SubExpression"===t.name.type;i&&this.accept(t.name),this.setupFullMustacheParams(t,e,void 0,!0);var a=t.indent||"";this.options.preventIndent&&a&&(this.opcode("appendContent",a),a=""),this.opcode("invokePartial",i,s,a),this.opcode("append")},PartialBlockStatement:function(t){this.PartialStatement(t)},MustacheStatement:function(t){this.SubExpression(t),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(t){this.DecoratorBlock(t)},ContentStatement:function(t){t.value&&this.opcode("appendContent",t.value)},CommentStatement:function(){},SubExpression:function(t){o(t);var e=this.classifySexpr(t);"simple"===e?this.simpleSexpr(t):"helper"===e?this.helperSexpr(t):this.ambiguousSexpr(t)},ambiguousSexpr:function(t,e,r){var s=t.path,i=s.parts[0],a=null!=e||null!=r;this.opcode("getContext",s.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",r),s.strict=!0,this.accept(s),this.opcode("invokeAmbiguous",i,a)},simpleSexpr:function(t){var e=t.path;e.strict=!0,this.accept(e),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,r){var s=this.setupFullMustacheParams(t,e,r),i=t.path,a=i.parts[0];if(this.options.knownHelpers[a])this.opcode("invokeKnownHelper",s.length,a);else{if(this.options.knownHelpersOnly)throw new l["default"]("You specified knownHelpersOnly, but used the unknown helper "+a,t);i.strict=!0,i.falsy=!0,this.accept(i),this.opcode("invokeHelper",s.length,i.original,f["default"].helpers.simpleId(i))}},PathExpression:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0],r=f["default"].helpers.scopedId(t),s=!t.depth&&!r&&this.blockParamIndex(e);s?this.opcode("lookupBlockParam",s,t.parts):e?t.data?(this.options.data=!0,this.opcode("lookupData",t.depth,t.parts,t.strict)):this.opcode("lookupOnContext",t.parts,t.falsy,t.strict,r):this.opcode("pushContext")},StringLiteral:function(t){this.opcode("pushString",t.value)},NumberLiteral:function(t){this.opcode("pushLiteral",t.value)},BooleanLiteral:function(t){this.opcode("pushLiteral",t.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(t){var e=t.pairs,r=0,s=e.length;for(this.opcode("pushHash");s>r;r++)this.pushParam(e[r].value);for(;r--;)this.opcode("assignToHash",e[r].key);this.opcode("popHash")},opcode:function(t){this.opcodes.push({opcode:t,args:d.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(t){t&&(this.useDepths=!0)},classifySexpr:function(t){var e=f["default"].helpers.simpleId(t.path),r=e&&!!this.blockParamIndex(t.path.parts[0]),s=!r&&f["default"].helpers.helperExpression(t),i=!r&&(s||e);if(i&&!s){var a=t.path.parts[0],n=this.options;n.knownHelpers[a]?s=!0:n.knownHelpersOnly&&(i=!1)}return s?"helper":i?"ambiguous":"simple"},pushParams:function(t){for(var e=0,r=t.length;r>e;e++)this.pushParam(t[e])},pushParam:function(t){var e=null!=t.value?t.value:t.original||"";if(this.stringParams)e.replace&&(e=e.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",e,t.type),"SubExpression"===t.type&&this.accept(t);else{if(this.trackIds){var r=void 0;if(!t.parts||f["default"].helpers.scopedId(t)||t.depth||(r=this.blockParamIndex(t.parts[0])),r){var s=t.parts.slice(1).join(".");this.opcode("pushId","BlockParam",r,s)}else e=t.original||e,e.replace&&(e=e.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",t.type,e)}this.accept(t)}},setupFullMustacheParams:function(t,e,r,s){var i=t.params;return this.pushParams(i),this.opcode("pushProgram",e),this.opcode("pushProgram",r),t.hash?this.accept(t.hash):this.opcode("emptyHash",s),i},blockParamIndex:function(t){for(var e=0,r=this.options.blockParams.length;r>e;e++){var s=this.options.blockParams[e],i=s&&p.indexOf(s,t);if(s&&i>=0)return[e,i]}}}},function(t,e,r){"use strict";function s(t){this.value=t}function i(){}function a(t,e,r,s){var i=e.popStack(),a=0,n=r.length;for(t&&n--;n>a;a++)i=e.nameLookup(i,r[a],s);return t?[e.aliasable("container.strict"),"(",i,", ",e.quotedString(r[a]),")"]:i}var n=r(1)["default"];e.__esModule=!0;var o=r(4),c=r(6),h=n(c),l=r(5),p=r(29),u=n(p);i.prototype={nameLookup:function(t,e){return i.isValidJavaScriptVariableName(e)?[t,".",e]:[t,"[",JSON.stringify(e),"]"]},depthedLookup:function(t){return[this.aliasable("container.lookup"),'(depths, "',t,'")']},compilerInfo:function(){var t=o.COMPILER_REVISION,e=o.REVISION_CHANGES[t];return[t,e]},appendToBuffer:function(t,e,r){return l.isArray(t)||(t=[t]),t=this.source.wrap(t,e),this.environment.isSimple?["return ",t,";"]:r?["buffer += ",t,";"]:(t.appendToBuffer=!0,t)},initializeBuffer:function(){return this.quotedString("")},compile:function(t,e,r,s){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!s,this.name=this.environment.name,this.isChild=!!r,this.context=r||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.useDepths||t.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||t.useBlockParams;var i=t.opcodes,a=void 0,n=void 0,o=void 0,c=void 0;for(o=0,c=i.length;c>o;o++)a=i[o],this.source.currentLocation=a.loc,n=n||a.loc,this[a.opcode].apply(this,a.args);if(this.source.currentLocation=n,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new h["default"]("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend("var decorators = container.decorators;\n"),this.decorators.push("return fn;"),s?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var l=this.createFunctionContext(s);if(this.isChild)return l;var p={compiler:this.compilerInfo(),main:l};this.decorators&&(p.main_d=this.decorators,p.useDecorators=!0);var u=this.context,f=u.programs,d=u.decorators;for(o=0,c=f.length;c>o;o++)f[o]&&(p[o]=f[o],d[o]&&(p[o+"_d"]=d[o],p.useDecorators=!0));return this.environment.usePartial&&(p.usePartial=!0),this.options.data&&(p.useData=!0),this.useDepths&&(p.useDepths=!0),this.useBlockParams&&(p.useBlockParams=!0),this.options.compat&&(p.compat=!0),s?p.compilerOptions=this.options:(p.compiler=JSON.stringify(p.compiler),this.source.currentLocation={start:{line:1,column:0}},p=this.objectLiteral(p),e.srcName?(p=p.toStringWithSourceMap({file:e.destName}),p.map=p.map&&p.map.toString()):p=p.toString()),p},preamble:function(){this.lastContext=0,this.source=new u["default"](this.options.srcName),this.decorators=new u["default"](this.options.srcName)},createFunctionContext:function(t){var e="",r=this.stackVars.concat(this.registers.list);r.length>0&&(e+=", "+r.join(", "));var s=0;for(var i in this.aliases){var a=this.aliases[i];this.aliases.hasOwnProperty(i)&&a.children&&a.referenceCount>1&&(e+=", alias"+ ++s+"="+i,a.children[0]="alias"+s)}var n=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&n.push("blockParams"),this.useDepths&&n.push("depths");var o=this.mergeSource(e);return t?(n.push(o),Function.apply(this,n)):this.source.wrap(["function(",n.join(","),") {\n  ",o,"}"])},mergeSource:function(t){var e=this.environment.isSimple,r=!this.forceBuffer,s=void 0,i=void 0,a=void 0,n=void 0;return this.source.each(function(t){t.appendToBuffer?(a?t.prepend("  + "):a=t,n=t):(a&&(i?a.prepend("buffer += "):s=!0,n.add(";"),a=n=void 0),i=!0,e||(r=!1))}),r?a?(a.prepend("return "),n.add(";")):i||this.source.push('return "";'):(t+=", buffer = "+(s?"":this.initializeBuffer()),a?(a.prepend("return buffer + "),n.add(";")):this.source.push("return buffer;")),t&&this.source.prepend("var "+t.substring(2)+(s?"":";\n")),this.source.merge()},blockValue:function(t){var e=this.aliasable("helpers.blockHelperMissing"),r=[this.contextName(0)];this.setupHelperArgs(t,0,r);var s=this.popStack();r.splice(1,0,s),this.push(this.source.functionCall(e,"call",r))},ambiguousBlockValue:function(){var t=this.aliasable("helpers.blockHelperMissing"),e=[this.contextName(0)];this.setupHelperArgs("",0,e,!0),this.flushInline();var r=this.topStack();e.splice(1,0,r),this.pushSource(["if (!",this.lastHelper,") { ",r," = ",this.source.functionCall(t,"call",e),"}"])},appendContent:function(t){this.pendingContent?t=this.pendingContent+t:this.pendingLocation=this.source.currentLocation,this.pendingContent=t},append:function(){if(this.isInline())this.replaceStack(function(t){return[" != null ? ",t,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var t=this.popStack();this.pushSource(["if (",t," != null) { ",this.appendToBuffer(t,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,r,s){var i=0;s||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(t[i++])),this.resolvePath("context",t,i,e,r)},lookupBlockParam:function(t,e){this.useBlockParams=!0,this.push(["blockParams[",t[0],"][",t[1],"]"]),this.resolvePath("context",e,1)},lookupData:function(t,e,r){t?this.pushStackLiteral("container.data(data, "+t+")"):this.pushStackLiteral("data"),this.resolvePath("data",e,0,!0,r)},resolvePath:function(t,e,r,s,i){var n=this;if(this.options.strict||this.options.assumeObjects)return void this.push(a(this.options.strict&&i,this,e,t));for(var o=e.length;o>r;r++)this.replaceStack(function(i){var a=n.nameLookup(i,e[r],t);return s?[" && ",a]:[" != null ? ",a," : ",i]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),"SubExpression"!==e&&("string"==typeof t?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(t){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(t?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(t.ids)),this.stringParams&&(this.push(this.objectLiteral(t.contexts)),this.push(this.objectLiteral(t.types))),this.push(this.objectLiteral(t.values))},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){null!=t?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},registerDecorator:function(t,e){var r=this.nameLookup("decorators",e,"decorator"),s=this.setupHelperArgs(e,t);this.decorators.push(["fn = ",this.decorators.functionCall(r,"",["fn","props","container",s])," || fn;"])},invokeHelper:function(t,e,r){var s=this.popStack(),i=this.setupHelper(t,e),a=r?[i.name," || "]:"",n=["("].concat(a,s);this.options.strict||n.push(" || ",this.aliasable("helpers.helperMissing")),n.push(")"),this.push(this.source.functionCall(n,"call",i.callParams))},invokeKnownHelper:function(t,e){var r=this.setupHelper(t,e);this.push(this.source.functionCall(r.name,"call",r.callParams))},invokeAmbiguous:function(t,e){this.useRegister("helper");var r=this.popStack();this.emptyHash();var s=this.setupHelper(0,t,e),i=this.lastHelper=this.nameLookup("helpers",t,"helper"),a=["(","(helper = ",i," || ",r,")"];this.options.strict||(a[0]="(helper = ",a.push(" != null ? helper : ",this.aliasable("helpers.helperMissing"))),this.push(["(",a,s.paramsInit?["),(",s.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",s.callParams)," : helper))"])},invokePartial:function(t,e,r){var s=[],i=this.setupParams(e,1,s);t&&(e=this.popStack(),delete i.name),r&&(i.indent=JSON.stringify(r)),i.helpers="helpers",i.partials="partials",i.decorators="container.decorators",t?s.unshift(e):s.unshift(this.nameLookup("partials",e,"partial")),this.options.compat&&(i.depths="depths"),i=this.objectLiteral(i),
s.push(i),this.push(this.source.functionCall("container.invokePartial","",s))},assignToHash:function(t){var e=this.popStack(),r=void 0,s=void 0,i=void 0;this.trackIds&&(i=this.popStack()),this.stringParams&&(s=this.popStack(),r=this.popStack());var a=this.hash;r&&(a.contexts[t]=r),s&&(a.types[t]=s),i&&(a.ids[t]=i),a.values[t]=e},pushId:function(t,e,r){"BlockParam"===t?this.pushStackLiteral("blockParams["+e[0]+"].path["+e[1]+"]"+(r?" + "+JSON.stringify("."+r):"")):"PathExpression"===t?this.pushString(e):"SubExpression"===t?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:i,compileChildren:function(t,e){for(var r=t.children,s=void 0,i=void 0,a=0,n=r.length;n>a;a++){s=r[a],i=new this.compiler;var o=this.matchExistingProgram(s);null==o?(this.context.programs.push(""),o=this.context.programs.length,s.index=o,s.name="program"+o,this.context.programs[o]=i.compile(s,e,this.context,!this.precompile),this.context.decorators[o]=i.decorators,this.context.environments[o]=s,this.useDepths=this.useDepths||i.useDepths,this.useBlockParams=this.useBlockParams||i.useBlockParams):(s.index=o,s.name="program"+o,this.useDepths=this.useDepths||s.useDepths,this.useBlockParams=this.useBlockParams||s.useBlockParams)}},matchExistingProgram:function(t){for(var e=0,r=this.context.environments.length;r>e;e++){var s=this.context.environments[e];if(s&&s.equals(t))return e}},programExpression:function(t){var e=this.environment.children[t],r=[e.index,"data",e.blockParams];return(this.useBlockParams||this.useDepths)&&r.push("blockParams"),this.useDepths&&r.push("depths"),"container.program("+r.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},push:function(t){return t instanceof s||(t=this.source.wrap(t)),this.inlineStack.push(t),t},pushStackLiteral:function(t){this.push(new s(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),t&&this.source.push(t)},replaceStack:function(t){var e=["("],r=void 0,i=void 0,a=void 0;if(!this.isInline())throw new h["default"]("replaceStack on non-inline");var n=this.popStack(!0);if(n instanceof s)r=[n.value],e=["(",r],a=!0;else{i=!0;var o=this.incrStack();e=["((",this.push(o)," = ",n,")"],r=this.topStack()}var c=t.call(this,r);a||this.popStack(),i&&this.stackSlot--,this.push(e.concat(c,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;this.inlineStack=[];for(var e=0,r=t.length;r>e;e++){var i=t[e];if(i instanceof s)this.compileStack.push(i);else{var a=this.incrStack();this.pushSource([a," = ",i,";"]),this.compileStack.push(a)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),r=(e?this.inlineStack:this.compileStack).pop();if(!t&&r instanceof s)return r.value;if(!e){if(!this.stackSlot)throw new h["default"]("Invalid stack pop");this.stackSlot--}return r},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof s?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return this.source.quotedString(t)},objectLiteral:function(t){return this.source.objectLiteral(t)},aliasable:function(t){var e=this.aliases[t];return e?(e.referenceCount++,e):(e=this.aliases[t]=this.source.wrap(t),e.aliasable=!0,e.referenceCount=1,e)},setupHelper:function(t,e,r){var s=[],i=this.setupHelperArgs(e,t,s,r),a=this.nameLookup("helpers",e,"helper"),n=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : {}");return{params:s,paramsInit:i,name:a,callParams:[n].concat(s)}},setupParams:function(t,e,r){var s={},i=[],a=[],n=[],o=!r,c=void 0;o&&(r=[]),s.name=this.quotedString(t),s.hash=this.popStack(),this.trackIds&&(s.hashIds=this.popStack()),this.stringParams&&(s.hashTypes=this.popStack(),s.hashContexts=this.popStack());var h=this.popStack(),l=this.popStack();(l||h)&&(s.fn=l||"container.noop",s.inverse=h||"container.noop");for(var p=e;p--;)c=this.popStack(),r[p]=c,this.trackIds&&(n[p]=this.popStack()),this.stringParams&&(a[p]=this.popStack(),i[p]=this.popStack());return o&&(s.args=this.source.generateArray(r)),this.trackIds&&(s.ids=this.source.generateArray(n)),this.stringParams&&(s.types=this.source.generateArray(a),s.contexts=this.source.generateArray(i)),this.options.data&&(s.data="data"),this.useBlockParams&&(s.blockParams="blockParams"),s},setupHelperArgs:function(t,e,r,s){var i=this.setupParams(t,e,r);return i=this.objectLiteral(i),s?(this.useRegister("options"),r.push("options"),["options=",i]):r?(r.push(i),""):i}},function(){for(var t="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),e=i.RESERVED_WORDS={},r=0,s=t.length;s>r;r++)e[t[r]]=!0}(),i.isValidJavaScriptVariableName=function(t){return!i.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)},e["default"]=i,t.exports=e["default"]},function(t,e,r){"use strict";function s(t,e,r){if(a.isArray(t)){for(var s=[],i=0,n=t.length;n>i;i++)s.push(e.wrap(t[i],r));return s}return"boolean"==typeof t||"number"==typeof t?t+"":t}function i(t){this.srcFile=t,this.source=[]}e.__esModule=!0;var a=r(5),n=void 0;try{}catch(o){}n||(n=function(t,e,r,s){this.src="",s&&this.add(s)},n.prototype={add:function(t){a.isArray(t)&&(t=t.join("")),this.src+=t},prepend:function(t){a.isArray(t)&&(t=t.join("")),this.src=t+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),i.prototype={isEmpty:function(){return!this.source.length},prepend:function(t,e){this.source.unshift(this.wrap(t,e))},push:function(t,e){this.source.push(this.wrap(t,e))},merge:function(){var t=this.empty();return this.each(function(e){t.add(["  ",e,"\n"])}),t},each:function(t){for(var e=0,r=this.source.length;r>e;e++)t(this.source[e])},empty:function(){var t=this.currentLocation||{start:{}};return new n(t.start.line,t.start.column,this.srcFile)},wrap:function(t){var e=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return t instanceof n?t:(t=s(t,this,e),new n(e.start.line,e.start.column,this.srcFile,t))},functionCall:function(t,e,r){return r=this.generateList(r),this.wrap([t,e?"."+e+"(":"(",r,")"])},quotedString:function(t){return'"'+(t+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=[];for(var r in t)if(t.hasOwnProperty(r)){var i=s(t[r],this);"undefined"!==i&&e.push([this.quotedString(r),":",i])}var a=this.generateList(e);return a.prepend("{"),a.add("}"),a},generateList:function(t){for(var e=this.empty(),r=0,i=t.length;i>r;r++)r&&e.add(","),e.add(s(t[r],this));return e},generateArray:function(t){var e=this.generateList(t);return e.prepend("["),e.add("]"),e}},e["default"]=i,t.exports=e["default"]}])});
(function() {
    'use strict';

    window.Express = window.Express || {};
})();

/* global jQuery */

(function($) {
    'use strict';

    var MOBILE_BREAKPOINT = 768,
        TABLET_PORTRAIT_BREAKPOINT = 1000,
        DESKTOP_STANDARD_BREAKPOINT = 1280,
        hasMatchMediaSupport = window.matchMedia ? true : false;

    window.Express = window.Express || {};

    window.Express.isMobile = function() {
        if (hasMatchMediaSupport) {
            return window.matchMedia('screen and (max-width:' + (MOBILE_BREAKPOINT - 1) + 'px)').matches;
        } else {
            return $(window).width() <= MOBILE_BREAKPOINT - 1;
        }
    };

    window.Express.isTablet = function() {
        if (hasMatchMediaSupport) {
            return window.matchMedia('screen and (min-width:' + MOBILE_BREAKPOINT + 'px) and (max-width:' + (TABLET_PORTRAIT_BREAKPOINT - 1) + 'px)').matches;
        } else {
            return $(window).width() >= MOBILE_BREAKPOINT && $(window).width() <= TABLET_PORTRAIT_BREAKPOINT - 1;
        }
    };

    window.Express.isStandardDesktop = function() {
        if (hasMatchMediaSupport) {
            return window.matchMedia('screen and (min-width:' + TABLET_PORTRAIT_BREAKPOINT + 'px) and (max-width:' + (DESKTOP_STANDARD_BREAKPOINT - 1) + 'px)').matches;
        } else {
            return $(window).width() >= TABLET_PORTRAIT_BREAKPOINT && $(window).width() <= DESKTOP_STANDARD_BREAKPOINT - 1;
        }
    };

    window.Express.isExpandedDesktop = function() {
        if (hasMatchMediaSupport) {
            return window.matchMedia('screen and (min-width:' + DESKTOP_STANDARD_BREAKPOINT + 'px)').matches;
        } else {
            return $(window).width() >= DESKTOP_STANDARD_BREAKPOINT;
        }
    };
})(jQuery);

/* global jQuery */

(function($) {
    'use strict';

    var DEFAULT_ACCEPTABLE_CLICK_DELTA = 20,
        mousedownX, mousedownY,
        getEventData = function(event) {
            var eventData;

            if (/^touch\w+/.test(event.type)) {
                eventData = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
            } else {
                eventData = event;
            }

            return eventData;
        };

    window.Express = window.Express || {};

    window.Express.recordMousedownPosition = function(event) {
        var eventData = getEventData(event);

        mousedownX = eventData.pageX;
        mousedownY = eventData.pageY;
    };

    window.Express.isAcceptableClickDelta = function(event, acceptableDelta) {
        var eventData = getEventData(event),
            clickDelta = Math.abs(mousedownX - eventData.pageX)
                + Math.abs(mousedownY - eventData.pageY),
            maxDelta = acceptableDelta || DEFAULT_ACCEPTABLE_CLICK_DELTA;

        return clickDelta <= maxDelta;
    };

    $('body').on('mousedown touchstart', window.Express.recordMousedownPosition);
})(jQuery);

/* Global */
(function() {
    'use strict';

    window.Express = window.Express || {};

    // Fixes issue in iOS Chrome browser where css changes are sometimes not redrawn
    window.Express.forceRedraw = function($this, waitTime) {
        (function redraw(wait) {
            if (wait && !isNaN(wait)) {
                setTimeout(redraw, wait);
            } else {
                $this[0].style.display = 'none';
                $this[0].offsetHeight; // eslint-disable-line
                $this[0].style.display = '';
            }
        })(waitTime);
    };
})();

/* global jQuery, Express */
(function($, Express) {
    'use strict';

    Express.setImageSourceAtBreakpoints = function(el, classToFindArg) {
        var classToFind = classToFindArg || '.image-container';

        $(el).find(classToFind).each(function(i, imageContainer) {
            var stylesToApply = {},
                mobileImage = $(imageContainer).data('mobileImage'),
                mobileBgColor = $(imageContainer).data('mobileBgColor'),
                desktopImage = $(imageContainer).data('desktopImage'),
                desktopBgColor = $(imageContainer).data('desktopBgColor'),
                applyStyles = function() {
                    if (window.Express.isMobile()) {
                        if (!mobileImage && !mobileBgColor) {
                            // if no mobile image or color is defined, fall back to desktop image and remove background color
                            // Note: this doesn't necessarily make sense to apply desktop image on mobile when no mobile settings are defined,
                            // but this is how the background picturefill utility originally behaved, so this behavior has been
                            // maintained to prevent breaking previously authored content.
                            stylesToApply['background-color'] = 'transparent';
                            stylesToApply['background-image'] = desktopImage ? 'url(' + desktopImage + ')' : '';
                        } else {
                            stylesToApply['background-color'] = mobileBgColor ? mobileBgColor : 'transparent';
                            stylesToApply['background-image'] = mobileImage ? 'url(' + mobileImage + ')' : '';
                        }
                    } else {
                        if (!desktopImage && !desktopBgColor) {
                            // if no desktop image or color is defined, remove all styles
                            stylesToApply['background-color'] = 'transparent';
                            stylesToApply['background-image'] = '';
                        } else {
                            stylesToApply['background-color'] = desktopBgColor ? desktopBgColor : 'transparent';
                            stylesToApply['background-image'] = desktopImage ? 'url(' + desktopImage + ')' : '';
                        }
                    }
                    // apply styles to element
                    $(imageContainer).css(stylesToApply);
                };

            $(window).resize(function() {
                applyStyles();
            });
            applyStyles();
        });
    };
})(jQuery, Express);

/* global jQuery */
(function($) {
    'use strict';

    window.Express = window.Express || {};

    window.Express.Debug = {
        enterDebugMode: function() {
            this.isDebugMode = true;
        },
        exitDebugMode: function() {
            this.isDebugMode = false;
        },
        Nav: {
            Mobile: {
                $nav: $('.container-nav-mobile'),
                $navTrigger: $('.nav-mobile-trigger'),

                expandAll: function() {
                    this.$nav.find('.category-title').addClass('expanded');
                },
                retractAll: function() {
                    this.$nav.find('.category-title').removeClass('expanded');
                },
                openNav: function() {
                    this.$navTrigger.addClass('open');
                },
                closeNav: function() {
                    this.$navTrigger.removeClass('open');
                }
            }
        }
    };
})(jQuery);

/* global jQuery, _ */
(function($, _, Express) {
    'use strict';

    var defaultFlickityOptions = {
            cellAlign: 'left',
            wrapAround: true,
            pageDots: false,
            // Please note: In this case we are disabling Flickity's native accessibility settings
            // because the slides are anchor tags themselves and Flickity's accessibility options
            // were creating extra hidden divs that gained focus unnecessarily.
            accessibility: false
        },
        defaultSlideshowOptions = {
            slideTime: 3000,
            transitionTime: 1000,
            stopOnHover: true
        },
        fixNonWrapAround = function(carousel) {
            var flkty = $(carousel).data('flickity'),
                $viewport = $(carousel).find('.flickity-viewport'),
                $leftButton = $(carousel).find('.previous'),
                $rightButton = $(carousel).find('.next');

            // Show / Hide arrows if the remaining tiles in that direction are already in the viewport
            $(carousel).on('cellSelect', function() {
                var viewportWidth = $viewport.width(),
                    tileWidth = $(carousel).find('.product-card').outerWidth(),
                    numberOfExtraTiles = Math.floor(((viewportWidth / 2) - (tileWidth / 2)) / tileWidth),
                    leftMostTileIndex = numberOfExtraTiles,
                    rightMostTileIndex = flkty.cells.length - numberOfExtraTiles - 1,
                    selectedIndex = flkty.selectedIndex;

                $leftButton.css('display', selectedIndex === leftMostTileIndex ? 'none' : 'block');
                $rightButton.css('display', selectedIndex === rightMostTileIndex ? 'none' : 'block');

                if (selectedIndex < leftMostTileIndex) {
                    $(carousel).flickity('select', leftMostTileIndex, false, true);
                }

                if (selectedIndex > rightMostTileIndex) {
                    $(carousel).flickity('select', rightMostTileIndex, false, true);
                }
            });
        };

    /* Returns a promise that is resolved when all or only the first image inside the element have loaded. */
    Express.imageLoaded = function(el, onlyCheckFirstImage) {
        var imageList = onlyCheckFirstImage ? $(el).find('img').first() : $(el).find('img'),
            finishedPromise = $.Deferred(), // eslint-disable-line
            promises = [];

        if (imageList.length) {
            imageList.each(function(i, image) {
                var newPromise = $.Deferred(); // eslint-disable-line

                promises.push(newPromise);

                $(image).one('load', function() {
                    newPromise.resolve();
                });
                if (image.complete) {
                    $(image).load();
                }
            });

            $.when.apply($, promises).then(function() {
                finishedPromise.resolve();
            }, function() {
                finishedPromise.reject();
            });
        } else {
            finishedPromise.resolve();
        }

        return finishedPromise;
    };

    Express.buildCarousel = function(el, slideItemSelector, flickityOptions) {
        var fullOptions = _.defaults(flickityOptions || {}, defaultFlickityOptions), carousel, revealCarousel, $slides,
            promise = $.Deferred(); // eslint-disable-line

        if (!fullOptions.wrapAround) {
            fullOptions.contain = true;
            fullOptions.cellAlign = 'center';
        }

        $slides = $(el).find(slideItemSelector);
        if ($slides.length) {
            carousel = $(el).flickity(fullOptions);
            revealCarousel = setInterval(function() {
                if (carousel) {
                    $slides.css('opacity', '1');
                    if (!fullOptions.wrapAround) {
                        fixNonWrapAround(carousel);
                    }
                    promise.resolve(carousel);
                    clearInterval(revealCarousel);
                }
            }, 100);
        }
        return promise;
    };

    Express.buildSlideshow = function(el, itemSelector, options) {
        var fullOptions = _.defaults(options || {}, defaultSlideshowOptions),
            slideChange, slideshowInterval;

        slideChange = function() {
            $(el).children(itemSelector + ':first')
                .fadeOut(fullOptions.transitionTime)
                .next(itemSelector)
                .fadeIn(fullOptions.transitionTime)
                .end()
                .appendTo(el);
        };

        slideshowInterval = setInterval(slideChange, fullOptions.slideTime);
        if (fullOptions.stopOnHover) {
            $(el).on('mouseover', function() {
                clearInterval(slideshowInterval);
            });
            $(el).on('mouseleave', function() {
                slideshowInterval = setInterval(slideChange, fullOptions.slideTime);
            });
        }
    };

    // Fixes issue in Chrome where links that open in the current window are opened erroneously
    // as you try to drag and scroll the Flickity carousel
    $(document).on('click', '.flickity-enabled.is-draggable .flickity-slider a', function(e) {
        if (!Express.isAcceptableClickDelta(e)) {
            e.preventDefault();
        }
    });
})(jQuery, _, window.Express);

/* global Modernizr */

(function() {
    'use strict';

    Modernizr.load({
        test: Modernizr.input.placeholder,
        nope: [
                '/etc/designs/express/clientlibs/vendor-footer-js/js/placeholders.jquery.min.js'
              ]
    });

})();

/* global jQuery */
(function($, Express) {
    Express.getApiKey = function() {
        return $('.headercomponent .wrapper-header').data('express-api-key');
    };
})(jQuery, window.Express);

/* global jQuery */

(function($) {
    'use strict';

    window.Express = window.Express || {};

    window.Express.isAuthormode = $('.is-authorMode').length > 0;

})(jQuery);

/* global jQuery */
(function($, Express) {
    'use strict';

    // Removes anchors, queryStrings, http:// or https:// and trailing slashes.
    var scrubHref = function(href) {
            return href.split('#')[0].split('?')[0].replace(/^https?:\/\//i, '').replace(/\/+$/, '');
        };

    Express.currentLocation = function() {
        return window.location.href;
    };

    Express.isLinkActive = function(el) {
        var scrubbedCurrentHref, scrubbedLinkHref, linkPathIndex, currentPathIndex, linkDomain, currentDomain,
            linkPath, currentPath, bothHavePaths, linkIsPathOnly, pathsMatch, domainsMatch, completelyMatch;

        if ($(el).is('a')) {
            scrubbedCurrentHref = scrubHref(Express.currentLocation());
            scrubbedLinkHref = scrubHref($(el).attr('href'));
            linkPathIndex = scrubbedLinkHref.indexOf('/');
            currentPathIndex = scrubbedCurrentHref.indexOf('/');

            bothHavePaths = currentPathIndex > -1 && linkPathIndex > -1;
            linkIsPathOnly = linkPathIndex === 0;

            if (bothHavePaths) {
                linkPath = scrubbedLinkHref.substring(linkPathIndex);
                currentPath = scrubbedCurrentHref.substring(currentPathIndex);
                pathsMatch = linkPath === currentPath;

                if (linkIsPathOnly) {
                    return pathsMatch;
                } else {
                    linkDomain = scrubbedLinkHref.substring(0, linkPathIndex);
                    currentDomain = scrubbedCurrentHref.substring(0, currentPathIndex);
                    domainsMatch = linkDomain.toLowerCase() === currentDomain.toLowerCase();

                    return domainsMatch && pathsMatch;
                }
            } else {
                completelyMatch = scrubbedLinkHref.toLowerCase() === scrubbedCurrentHref.toLowerCase();

                return completelyMatch || scrubbedLinkHref === '';
            }
        }
        return false;
    };
})(jQuery, window.Express);

/* global jQuery */
(function($) {
    'use strict';

    var timeoutValue = $('.headercomponent .wrapper-header').data('dynamic-data-request-timeout') || 2000;

    // Retrieve visitor info and jsessionID
    window.Express.headerDynamicDataPromise = $.ajax({
        url: $('.brighttag-apis').data('visitor-api-url'),
        dataType: 'json',
        type: 'GET',
        timeout: timeoutValue,
        success: function(data) {
            window.btPageData = window.btPageData || {};
            window.btPageData.visitor = data.visitor;
        }
    });
})(jQuery);

/* This function is commented out to prevent inclusion within future releases */

/* (function($) {
    'use strict';

    $(function() {
        $('body').on('keyup', function(e) {
           // trigger click when a user presses enter on an element
            if (e.which === 13) {
                $(e.target).trigger('click', 'overrideClickDelta');
            }
        });
    });
})(jQuery); */

/* global jQuery */

(function($, window, sessionStorage) {
    'use strict';

    var localStoreId;

    window.Express = window.Express || {};

    window.Express.retrieveLocalStoreId = function(closestStoreApiUrl) {
        var localStoreIdStoredValue;

        if (!localStoreId) {
            localStoreId = $.Deferred(); // eslint-disable-line
            localStoreIdStoredValue = sessionStorage.getItem('localStoreId');
            if (!localStoreIdStoredValue) {
                window.Express.headerDynamicDataPromise.always(function() {
                    // TODO change this to a more correct localStoreId api location
                    $.ajax({
                        url: closestStoreApiUrl,
                        cache: false,
                        timeout: 5000,
                        dataType: 'html',
                        type: 'GET',
                        success: function(ajaxLocalStoreHtml) {
                            var ajaxLocalStoreId = $(ajaxLocalStoreHtml).find('#localStoreId').val();

                            if (ajaxLocalStoreId) {
                                sessionStorage.setItem('localStoreId', ajaxLocalStoreId);
                                localStoreId.resolve(ajaxLocalStoreId);
                            } else {
                                localStoreId.reject();
                            }
                        },
                        error: function() {
                            localStoreId.reject();
                        }
                    });
                });
            } else {
                localStoreId.resolve(localStoreIdStoredValue);
            }
        }

        return localStoreId;
    };
})(jQuery, window, sessionStorage);

/* global jQuery, Modernizr */

/* Cookie mockup helpers for testing. */
/* eslint-disable */
var testFlag = true,
    loginTest = function() {
        'use strict';
        if (testFlag) {
            jQuery.cookie('UsrLoginStats', 'true', {path: '/'});
            jQuery.cookie('bagCount', '12', {path: '/'});
        } else {
            jQuery.cookie('UsrLoginStats', 'false', {path: '/'});
            jQuery.cookie('bagCount', '0', {path: '/'});
        }
        testFlag = testFlag ? false : true;
        jQuery(document).trigger('readCookies');
    },
    cookieTransfer = function(cookies) {
        'use strict';
        var cookie;

        jQuery.cookie.raw = true;

        for (cookie in cookies) {
            if (cookies.hasOwnProperty(cookie)) {
                jQuery.cookie(cookies[cookie].name, cookies[cookie].value, {path: '/', domain: '.' + window.location.hostname});
            }
        }
    };
/* eslint-enable */

(function($, document) {
    'use strict';

    var headerDom = $('.headercomponent header'),
        headerBagComponent = headerDom.find('.headerbagcomponent'),
        bagPeekWrapper = headerDom.find('.wrapper-bag-peek'),
        bagPeekContainer = headerDom.find('.container-bag-peek'),
        bagPeekHref = bagPeekContainer.data('bagPeek'),
        bagPeekDuration = 3000,
        // in milliseconds- needs to match value in header-bag.scss
        bagPeekCssTransitionDuration = 400,
        bagPeekInterval,
        ajaxTimeout = 5000,
        loggedIn,
        bagCount,
        isBagpeekAlertHidden,
        closeBagPeek = function() {
            headerBagComponent.removeClass('open');
            // run setTimeout to allow outro transition to run, then remove affixed class
            bagPeekWrapper.addClass('affixed-outro');
            setTimeout(function() {
                bagPeekWrapper.removeClass('affixed affixed-outro');
                $(window).off('scroll');
            }, bagPeekCssTransitionDuration);
        },
        resetBagPeekTimer = function() {
            // 1. check to see if the user is hovered over the bag peek
            // 2. if not, add class to animate out and then remove affixed class
            if (headerBagComponent.is(':hover') === false) {
                closeBagPeek();
                clearInterval(bagPeekInterval);
            }
        },
        startBagPeekTimer = function() {
            // Create timer to hide bag peek after a few seconds
            headerBagComponent.addClass('open');
            bagPeekInterval = setInterval(resetBagPeekTimer, bagPeekDuration);
        },
        updateHeaderBagContents = function(callback) {
            window.Express.headerDynamicDataPromise.always(function() {
                $.ajax({
                    url: bagPeekHref,
                    cache: false,
                    timeout: ajaxTimeout,
                    dataType: 'html',
                    contentType: 'application/json',
                    success: function(data) {
                        bagPeekContainer.html(data);
                        $(document).trigger('readCookies');
                        bagPeekWrapper.removeClass('unloaded');
                        if (callback && typeof callback === 'function') {
                            callback();
                        }
                    }
                });
            });
        },
        openBagPeek = function() {
            var shouldBagPeekWrapperBeAffixed = function() {
                return $(window).scrollTop() > headerDom.height();
            };

            // add affixed class if header is scrolled out of view so bag peek will be visible
            if (shouldBagPeekWrapperBeAffixed()) {
                bagPeekWrapper.addClass('affixed');
                // listen to see if user has scrolled to top of page while bagpeek is visible
                $(window).on('scroll', function() {
                    if (!shouldBagPeekWrapperBeAffixed()) {
                        bagPeekWrapper.removeClass('affixed');
                        $(window).off('scroll');
                    }
                });
            } else {
                bagPeekWrapper.removeClass('affixed');
            }
            startBagPeekTimer();
            updateHeaderBagContents();
        },
        hideBagPeekMessage = function(e) {
            // this assumes bagpeek messages are consolidated into a single general bagpeek message container
            var elementToHide = $('#shopping-bag-top-alerts');

            if (e.target) {
                // 1. apply hidden class to animate out
                elementToHide.addClass('alert-hidden');
                // 2. set variable in cookie
                $.cookie('isBagpeekAlertHidden', 'true', {expires: 1, path: '/'});
                $(document).trigger('readCookies');
            } else if (isBagpeekAlertHidden) {
                // 2. apply hidden class if so
                elementToHide.addClass('alert-hidden');
            }
        };

    $(function() {
        var hasPointerSupport = 'PointerEvent' in window,
            $bagPeekTrigger = $('.headerbagcomponent .my-bag-link'),

            open = function() {
                window.Express.forceRedraw(headerBagComponent);
                headerBagComponent.addClass('open');
            },
            close = function() {
                window.Express.forceRedraw(headerBagComponent, 450);
                headerBagComponent.removeClass('open');
            },
            isOpen = function() {
                return headerBagComponent.hasClass('open');
            },
            toggle = function() {
                if (isOpen()) {
                    headerBagComponent.trigger('mouseleave');
                    close();
                } else {
                    open();
                }
            },
            isBagPeekPreloaded = function() {
                return !$.trim(bagPeekContainer.html()) ? true : false;
            },
            isTargetOutsideBagPeek = function(target) {
                return !$(target).closest('.headerbagcomponent').length;
            };

        headerBagComponent.on({
            mouseenter: function() {
                if (!hasPointerSupport) {
                    if (isBagPeekPreloaded()) {
                        updateHeaderBagContents(open);
                    } else {
                        open();
                    }
                }
            },
            mouseleave: function() {
                if (!hasPointerSupport) {
                    close();
                }
            },
            pointerenter: function(e) {
                if (e.originalEvent.pointerType === 'mouse') {
                    if (isBagPeekPreloaded()) {
                        updateHeaderBagContents(open);
                    } else {
                        open();
                    }
                }
            },
            pointerleave: function(e) {
                if (e.originalEvent.pointerType === 'mouse') {
                    close();
                }
            }
        });

        $bagPeekTrigger.on({
            touchstart: function(e) {
                if (!hasPointerSupport) {
                    if (!window.Express.isMobile()) {
                        e.preventDefault();
                        if (isBagPeekPreloaded()) {
                            updateHeaderBagContents(toggle);
                        } else {
                            toggle();
                        }
                    } else {
                        // need to prevent mouseenter
                        e.preventDefault();
                        $(this)[0].click();
                    }
                }
            },
            pointerdown: function(e) {
                if (e.originalEvent.pointerType === 'touch') {
                    if (!window.Express.isMobile()) {
                        // e.preventDefault doesn't prevent the subsequent click event like it does in touchstart
                        $(this).one('click', function() {
                            return false;
                        });
                        // Don't handle the erroneous Firefox pointerenter-mouse event that is thrown here
                        $(this).one('pointerenter', function(ev) {
                            if (ev.originalEvent.pointerType === 'mouse') {
                                ev.stopPropagation();
                            }
                        });
                        setTimeout(function() {
                            $(this).off('pointerevent');
                        }, 200);
                        if (isBagPeekPreloaded()) {
                            updateHeaderBagContents(toggle);
                        } else {
                            toggle();
                        }
                    }
                }
            }
        });

        $('html').on({
            touchstart: function(e) {
                var isOpenCheck,
                    removeClickPrevention,
                    clickPrevention = function(ev) {
                        ev.preventDefault();
                        if (isOpenCheck) {
                            close();
                        } else {
                            open();
                        }
                        clearTimeout(removeClickPrevention);
                    };

                if (isTargetOutsideBagPeek(e.target)) {
                    isOpenCheck = isOpen();
                    close();
                    // Sometimes a touchstart event that is outside the touch target is still throwing a click
                    // event on the touch target. This logic prevents that click from being handled.
                    $bagPeekTrigger.one('click', clickPrevention);
                    removeClickPrevention = setTimeout(function() {
                        $bagPeekTrigger.off('click', clickPrevention);
                    }, 400);
                }
            },
            pointerdown: function(e) {
                if (e.originalEvent.pointerType === 'touch' && isTargetOutsideBagPeek(e.target)) {
                    close();
                }
            }
        });
    });

    $(document).on('readCookies', function() {
        loggedIn = $.cookie('UsrLoginStats', String) === 'true';
        bagCount = $.cookie('bagCount', Number) || 0;
        isBagpeekAlertHidden = $.cookie('isBagpeekAlertHidden', String) === 'true';

        headerDom.find('.headerlogincomponent, .container-mobileSignIn')
                .children('.signed-in').toggleClass('hidden-all', !loggedIn);
        headerDom.find('.headerlogincomponent, .container-mobileSignIn')
                .children('.signed-out').toggleClass('hidden-all', loggedIn);
        headerDom.find('.headerbagcomponent').find('.bag-icon').html(bagCount)
                .toggleClass('bag-empty', bagCount === 0);
        if (!headerDom.find('.container-promo').length && loggedIn) {
            headerDom.find('.headerlogincomponent')
                    .children('.signed-in:first-child').addClass('no-border');
        }
        headerDom.find('.container-toolbar').removeClass('not-loaded');
    });

    $(document).on('ready', function() {
        $(this).trigger('readCookies')
            .find('#shopping-bag-top-alerts .close-alert').each(function(element) {
                hideBagPeekMessage(element);
                $(this).on('click', function(e) {
                    hideBagPeekMessage(e);
                });
            });
    });

    // Clicking remove
    $(document).on('click', '.shopping-bag-product-description [data-remove-product]', function(event) {
        var removeItemHref = $(this).attr('href'),
            commerceItem = $(this).data('commerce-item'),
            initialBagCount = $.cookie('bagCount', Number) || null,
            finalBagCount;

        event.preventDefault();
        window.Express.brightTagEvent({eventName: 'storyCartItemRemove', id: commerceItem}, function() {
            window.Express.headerDynamicDataPromise.always(function() {
                $.ajax({
                    url: removeItemHref,
                    type: 'POST',
                    cache: false,
                    timeout: ajaxTimeout,
                    success: function() {
                        updateHeaderBagContents();

                        // fixes an issue where if logged in and removing last
                        // item in bag, bagCount cookie isn't being set to 0
                        finalBagCount = $.cookie('bagCount', Number) || -1;
                        if (finalBagCount === initialBagCount && finalBagCount === 1) {
                            $.cookie('bagCount', '0', {path: '/', domain: '.' + window.location.hostname});
                            $(document).trigger('readCookies');
                        }
                    }
                });
            });
        });
    });

    // Listen for products added via product modal
    $(document).on('bagPeek', openBagPeek);
})(jQuery, document);

/* global jQuery */

(function($, document) {
    'use strict';
    $(document).on('ready', function() {
        // check to see if promo has been closed already
        if (!$.cookie('closedPromo', Boolean)) {
            $('.close-promo').click(function() {
                $('.container-promo-mobile').hide();
                $.cookie('closedPromo', true);
            });
        } else {
            $('.container-promo-mobile').hide();
        }
    });
})(jQuery, document);


/* global jQuery, messages */
(function($) {
    'use strict';

    var searchSuggest = {
        searchSuggestions: [],
        searchSuggestionsHref: $('.headersearchcomponent .search-form').data('searchSuggestHref'),
        getSearchSuggestions: function() {
            var self = this;

            window.Express.headerDynamicDataPromise.always(function() {
                $.getScript(self.searchSuggestionsHref, function() {
                    self.searchSuggestions = messages.autoData.split('|');
                });
            });
        },
        filterSuggestions: function(el) {
            var $searchResults = $('.search-results ul'),
                results = '',
                searchString = $(el).val().toLowerCase(),
                searchStringLength = searchString.length,
                indexOfSearchString;

            if (searchStringLength >= 3) {
                $.each(this.searchSuggestions, function(index, value) {
                    indexOfSearchString = value.indexOf(searchString);
                    if (indexOfSearchString !== -1) {
                        results += '<li class="autocomplete-suggestion tab-focus" tabindex="0">'
                                    + value.substring(0, indexOfSearchString)
                                        + '<strong>' + searchString + '</strong>'
                                    + value.substring(indexOfSearchString + searchStringLength)
                                + '</li>\n';
                    }
                });
                $searchResults.html(results);
            } else {
                $searchResults.empty();
            }
        },
        openSearchSuggestionLink: function(el) {
            window.location.href = $('.headersearchcomponent .search-form').attr('action') + '?q=' + $(el).text();
        },
        initSearchSuggest: function() {
            var self = this;

            self.getSearchSuggestions();
            $(document).on('keyup', '.headersearchcomponent .search-form input[type="text"]', function() {
                self.filterSuggestions(this);
            });
            $(document).on('click', '.search-results ul li', function() {
                self.openSearchSuggestionLink(this);
            });
        }
    };

    $(document).on('ready', function() {
        searchSuggest.initSearchSuggest();
    });

    $(function() {
        var $search = $('.headersearchcomponent'),
            $searchTrigger = $('.headersearchcomponent .toolbar-button'),
            $searchField = $('#header-search-field'),
            hasPointerSupport = 'PointerEvent' in window,

            open = function() {
                window.Express.forceRedraw($search);
                $searchTrigger.addClass('open');
                setTimeout(function() {
                    $searchField.focus();
                }, 700);
            },
            close = function() {
                window.Express.forceRedraw($search, 450);
                $searchTrigger.removeClass('open');
                $searchField.blur();
            },
            toggle = function() {
                if (isOpen()) {
                    close();
                } else {
                    open();
                }
            },
            isOpen = function() {
                return $searchTrigger.hasClass('open');
            },
            isTargetOutside = function(target) {
                return !$(target).closest('.headersearchcomponent').length ? true : false;
            };

        $search.on({
            mouseenter: function() {
                if (!hasPointerSupport) {
                    open();
                }
            },
            mouseleave: function() {
                if (!hasPointerSupport) {
                    close();
                }
            },
            pointerenter: function(e) {
                if (e.originalEvent.pointerType === 'mouse') {
                    open();
                }
            },
            pointerleave: function(e) {
                if (e.originalEvent.pointerType === 'mouse') {
                    close();
                }
            },
            // User Accessibility
            keyup: function(e) {
                var $target = $(e.target),
                    $headerSearch = $target.parents('.headersearchcomponent');

                // open search when tabbed into
                if (e.which === 9 && $target.hasClass('toolbar-button')) {
                    $searchTrigger.addClass('open');

                    // close search when tabbed out of
                    $headerSearch.focusout(function() {
                        setTimeout(function() {
                            // timeout needed because no element has focus during focusout event
                            if ($headerSearch.find(':focus').length === 0) {
                                $searchTrigger.removeClass('open');
                            }
                        }, 0);
                    });
                }

                // close search when user presses esc
                if (e.which === 27 && $headerSearch.find('.container-search').is(':visible')) {
                    $searchTrigger.removeClass('open');
                    $headerSearch.find('.toolbar-button').addClass('tabbed-into').focus();
                }
            }
        });

        $searchTrigger.on({
            touchstart: function(e) {
                if (!hasPointerSupport) {
                    e.preventDefault();
                    toggle();
                }
            },
            pointerdown: function(e) {
                if (e.originalEvent.pointerType === 'touch') {
                    // Don't handle the erroneous Firefox pointerenter-mouse event that is thrown here
                    $(this).one('pointerenter', function(ev) {
                        if (ev.originalEvent.pointerType === 'mouse') {
                            ev.stopPropagation();
                        }
                    });
                    setTimeout(function() {
                        $(this).off('pointerevent');
                    }, 200);
                    toggle();
                }
            }
        });

        $('html').on({
            touchstart: function(e) {
                if (isTargetOutside(e.target)) {
                    close();
                }
            },
            pointerdown: function(e) {
                if (e.originalEvent.pointerType === 'touch' && isTargetOutside(e.target)) {
                    close();
                }
            }
        });
    });
})(jQuery);

/* global jQuery, Express */
(function($, Express) {
    'use strict';

    $(function() {
        $('.heroCarouselComponent').each(function(i, el) {
            Express.setImageSourceAtBreakpoints(el);
            if ($(el).hasClass('has-multi')) {
                Express.buildCarousel(el, '.hero-slide', {
                    cellAlign: 'center',
                    imagesLoaded: true,
                    autoPlay: $(el).hasClass('auto-scroll') ? true : false
                });
            }
        });
    });
})(jQuery, Express);

    /* global jQuery, Express */
(function($, Express) {
    'use strict';

    var isAuthorMode = Express.isAuthormode;

    $(function() {
        var emptySubNavContainers = $('.container-subnav[data-is-publish]').filter(function() {
            return $(this).has('.headersectioncomponent, .tilecomponent, .flyoutcomponent').length < 1;
        });
        // get rid of empty subnav containers in publish or preview mode
        emptySubNavContainers.remove();

        // Add active link class
        $('.container-nav .headercategorycomponent a').each(function(i, el) {
            var parentCategoryTitle;

            if (window.Express.isLinkActive(el)) {
                parentCategoryTitle = $(el).closest('.headercategorycomponent')
                    .find('.category-title:not(.mobile-only) .nav-item, .category-title .no-href');
                if ($(parentCategoryTitle).length) {
                    $(parentCategoryTitle).addClass('active');
                    return false;
                }
            }
        });
    });

    // Desktop and Tablet Nav (do NOT apply in author mode)
    if (!isAuthorMode) {
        $(function() {
            var $nav = $('.container-nav'),
                hasPointerSupport = 'PointerEvent' in window,
                delayedCloseGraduallyDuration = 500,
                delayedCloseGraduallyCountdown,
                delayedCloseGraduallyTimeout = function() {
                    delayedCloseGraduallyCountdown = setTimeout(function() {
                        closeGradually();
                    }, delayedCloseGraduallyDuration);
                },

                isOpen = function($this) {
                    return $this.closest('.headercategorycomponent').hasClass('hoverEffect');
                },
                closeGradually = function() {
                    $nav.find('.hoverEffect').removeClass('hoverEffect');
                },
                closeImmediately = function() {
                    $nav.find('.hoverEffect').removeClass('hoverEffect')
                        .addClass('hideImmediately');
                },
                delayedCloseGradually = function() {
                    delayedCloseGraduallyTimeout();
                },
                open = function($this) {
                    clearTimeout(delayedCloseGraduallyCountdown);
                    $this.closest('.hideImmediately').removeClass('hideImmediately');
                    window.Express.forceRedraw($this.closest('.headercategorycomponent'));
                    closeImmediately();
                    $this.closest('.headercategorycomponent').addClass('hoverEffect');
                },
                openWithoutRedraw = function($this) {
                    clearTimeout(delayedCloseGraduallyCountdown);
                    $this.closest('.hideImmediately').removeClass('hideImmediately');
                    closeImmediately();
                    $this.closest('.headercategorycomponent').addClass('hoverEffect');
                },
                toggle = function($this) {
                    if (!isOpen($this)) {
                        open($this);
                    } else {
                        closeGradually();
                    }
                },
                isTargetOutsideSubnav = function(target) {
                    return !$(target).closest('.container-nav .headercategorycomponent').length ? true : false;
                },
                hasSubnavContent = function($this) {
                    return $this.closest('.headercategorycomponent').find('.container-subnav').length ? true : false;
                },
                showTouchLinks = function() {
                    $nav.find('.touch-link').css('display', 'block');
                };

            $nav.on({
                mouseenter: function() {
                    if (!hasPointerSupport) {
                        open($(this));
                    }
                },
                pointerenter: function(e) {
                    if (e.originalEvent.pointerType === 'mouse') {
                        open($(this));
                    }
                },
                mouseleave: function() {
                    if (!hasPointerSupport) {
                        delayedCloseGradually();
                    }
                },
                pointerleave: function(e) {
                    if (e.originalEvent.pointerType === 'mouse') {
                        delayedCloseGradually();
                    }
                }
            }, '.headercategorycomponent')

            .on({
                touchstart: function(e) {
                    if (!hasPointerSupport) {
                        if (hasSubnavContent($(this))) {
                            showTouchLinks();
                            e.preventDefault();
                            toggle($(this));
                        } else {
                            // Follow link
                            $(this).find('a')[0].click();
                            delayedCloseGradually();
                        }
                    }
                },
                pointerdown: function(e) {
                    if (e.originalEvent.pointerType === 'touch') {
                        if (hasSubnavContent($(this))) {
                            showTouchLinks();
                            // e.preventDefault doesn't prevent the subsequent click event like it does in touchstart
                            $(this).one('click', function() {
                                return false;
                            });
                            // Don't handle the erroneous Firefox pointerenter-mouse event that is thrown here
                            $(this).one('pointerenter', function(ev) {
                                if (ev.originalEvent.pointerType === 'mouse') {
                                    ev.stopPropagation();
                                }
                            });
                            setTimeout(function() {
                                $(this).off('pointerevent');
                            }, 200);
                            toggle($(this));
                        } else {
                            // Follow link
                            delayedCloseGradually();
                        }
                    }
                }
            }, '.category-title')
            // User Accessibility
            .on('keyup', function(e) {
                var $target = $(e.target),
                    $headerCategory = $target.parents('.headercategorycomponent'),
                    $categoryTitle = $headerCategory.children('.category-title'),
                    $subnav = $target.parents('.container-subnav');

                // tab through navigation
                if (e.which === 9 && $categoryTitle.length) {
                    $('.hoverEffect').removeClass('hoverEffect');
                    openWithoutRedraw($target);

                    // close subnav when the user tabs out of it
                    $headerCategory.focusout(function() {
                        // timeout needed because no element has focus during focusout event
                        setTimeout(function() {
                            if ($headerCategory.find(':focus').length === 0) {
                                closeImmediately();
                            }
                        }, 0);
                    });
                }

                // close subnav when user presses escape
                if (e.which === 27 && ($subnav.length || $categoryTitle.length)) {
                    // only close subnav if a modal isn't being closed
                    if (Express.ModalHandler.getVisibleModal().length === 0) {
                        closeImmediately();
                        // switch focus to category title
                        $categoryTitle.find('span.no-href, a').addClass('tabbed-into').focus();
                    }
                }
            });

            $('html').on({
                touchstart: function(e) {
                    if (isTargetOutsideSubnav(e.target)) {
                        closeGradually();
                    }
                },
                pointerdown: function(e) {
                    if (e.originalEvent.pointerType === 'touch' && isTargetOutsideSubnav(e.target)) {
                        closeGradually();
                    }
                }
            });
        });
    }

    // Mobile Nav
    $(function() {
        var $nav = $('.container-nav-mobile'),
            $navTrigger = $('.nav-mobile-trigger'),
            $navMobile = $('.container-nav-mobile .nav-mobile'),
            $groupTitleLink = $navMobile.find('.group-title a'),
            $groupTitleNoLink = $navMobile.find('.group-title span'),
            hasPointerSupport = 'PointerEvent' in window,

            toggleExpandable = function($this) {
                var categoryAccordionMenu = $this.next('.site-accordion').children('.accordion-menu');

                window.Express.forceRedraw($nav);
                categoryAccordionMenu.slideToggle(100, 'swing');
                $this.toggleClass('expanded');
            },
            openDropdown = function() {
                window.Express.forceRedraw($nav);
                $navTrigger.addClass('open');
            },
            closeDropdown = function() {
                window.Express.forceRedraw($nav, 450);
                $navTrigger.removeClass('open');
            },
            isDropdownOpen = function() {
                return $navTrigger.hasClass('open');
            },
            toggleDropdown = function() {
                if (isDropdownOpen()) {
                    closeDropdown();
                } else {
                    openDropdown();
                }
            },
            isTargetOutsideDropdown = function(target) {
                return !$(target).closest('.container-nav-mobile').length ? true : false;
            },
            mobileNavScrollOnClick = function(accordionGroup) {
                $('html, body').animate({
                  scrollTop: $(accordionGroup).offset().top
                }, 200);
            };

        $nav.on({
            mouseleave: function() {
                if (!hasPointerSupport && !window.Express.Debug.isDebugMode) {
                    closeDropdown();
                }
            },
            pointerleave: function(e) {
                if (e.originalEvent.pointerType === 'mouse'
                    && !window.Express.Debug.isDebugMode) {
                    closeDropdown();
                }
            }
        })
        .on({
            touchstart: function(e) {
                if (!hasPointerSupport && !window.Express.Debug.isDebugMode) {
                    e.preventDefault();
                    toggleDropdown();
                }
            },
            mouseenter: function() {
                if (!hasPointerSupport && !window.Express.Debug.isDebugMode) {
                    openDropdown();
                }
            },
            pointerenter: function(e) {
                if (e.originalEvent.pointerType === 'mouse'
                    && !window.Express.Debug.isDebugMode) {
                    openDropdown();
                }
            },
            pointerdown: function(e) {
                if (!window.Express.Debug.isDebugMode) {
                    e.stopPropagation();
                    toggleDropdown();
                }
            }
        }, '.nav-mobile-trigger')
        .on({
            click: function(e) {
                e.preventDefault();
                toggleExpandable($(this));
            }
        }, '.category-title.expandable');

        $groupTitleLink.on({
            click: function(e) {
                var imgToggleNavItem = $(this),
                    accordion = $(this).parent().siblings('.accordion');

                e.preventDefault();
                accordion.slideToggle(100, 'swing');

                if (!imgToggleNavItem.hasClass('nav-item-expanded')) {
                    mobileNavScrollOnClick(this);
                }

                imgToggleNavItem.toggleClass('nav-item-expanded');
            }
        });

        $groupTitleNoLink.on({
            click: function(e) {
                var imgToggleNoHref = $(this),
                    accordion = $(this).parent().siblings('.accordion');

                e.preventDefault();
                accordion.slideToggle(100, 'swing');

                if (!imgToggleNoHref.hasClass('no-href-expanded')) {
                    mobileNavScrollOnClick(this);
                }

                imgToggleNoHref.toggleClass('no-href-expanded');
            }
        });

        $('html').on({
            touchstart: function(e) {
                if (isTargetOutsideDropdown(e.target)) {
                    closeDropdown();
                }
            },
            pointerdown: function(e) {
                if (e.originalEvent.pointerType === 'touch' && isTargetOutsideDropdown(e.target)) {
                    closeDropdown();
                }
            }
        });
    });
})(jQuery, Express);

/* global jQuery, Modernizr */

(function($) {
    'use strict';

    window.Express = window.Express || {};

    window.Express.ModalHandler = {
        ATTR_DATA_MODAL: 'data-modal',
        ATTR_DATA_MODAL_HREF: 'data-modal-href',
        CLASS_MODAL_OVERLAY: 'modal-overlay',
        CLASS_MODAL_CONTENT: 'modal-content',
        CLASS_MODAL_CONTENT_WRAPPER: 'modal-content-wrapper',
        CLASS_CLOSE_MODAL: 'close-modal',
        CLASS_MAIN_CONTENT: 'exp-main-content',
        CLASS_MODAL_TEMPLATE: 'modal-overlay-template',
        CLASS_PRELOADED_MODALS: 'preloaded-modals',

        preloadedModals: [],

        $prevFocus: null,

        init: function() {
            this.attachOpenModalOnClick($('body')).always(function() {
                $('body').trigger('allModalsLoaded');
                $('body').addClass('allModalsLoaded');
            });
            this.attachCloseModalOnClickAndEscape();

            // hide all modals can be triggered from outside of this context.
            $('body').on('hide-all-modals', this.hideAllModals);

            this.attachResizeHandler();
        },

        attachOpenModalOnClick: function($baseElement) {
            var self = this,
                finalPreloadedPromise = $.Deferred(), // eslint-disable-line
                preloadPromises = [];

            $baseElement.find('a[' + this.ATTR_DATA_MODAL + '=true]').each(function() {
                var href = $(this).attr('href');

                preloadPromises.push(self.preloadModal(href));

                $(this).unbind('click').bind('click touchend', function(event, override) {
                    event.preventDefault();

                    if (window.Express.isAcceptableClickDelta(event) || override === 'overrideClickDelta') {
                        self.getPreloadedModal(href, function($modal) {
                            self.attachOpenModalOnClick($modal);
                            self.hideAllModals();
                            self.showModal($modal);

                            if (!window.Express.isMobile()) {
                                self.centerModalContent($modal);
                            }

                            if (Modernizr.touch) {
                                $modal.find('video').each(function() {
                                    this.load();
                                    this.play();
                                });
                            }
                        });
                    }
                });
            });

            $.when.apply($, preloadPromises).then(function() {
                finalPreloadedPromise.resolve();
            }, function() {
                finalPreloadedPromise.reject();
            });
            // This might be unnecessary, but ensures resolution if there are no modals.
            if (preloadPromises.length === 0) {
                finalPreloadedPromise.resolve();
            }

            return finalPreloadedPromise;
        },

        preloadModal: function(href) {
            var self = this,
                preloadPromise = $.Deferred(); // eslint-disable-line
            if ($.inArray(href, this.preloadedModals) < 0) {
                $.get(href, function(html) {
                    var $newModal = $('.' + self.CLASS_MODAL_TEMPLATE).clone().removeClass(self.CLASS_MODAL_TEMPLATE)
                        .addClass(self.CLASS_MODAL_OVERLAY).attr(self.ATTR_DATA_MODAL_HREF, href).hide();

                    $newModal.find('.' + self.CLASS_MODAL_CONTENT).append($($.parseHTML(html))
                        .filter('.' + self.CLASS_MAIN_CONTENT));

                    window.Express.initVideos($newModal);
                    window.Express.initYouTube($newModal);

                    $('.' + self.CLASS_PRELOADED_MODALS).append($newModal);
                }).complete(function() {
                    preloadPromise.resolve();
                });

                this.preloadedModals.push(href);
            } else {
                preloadPromise.resolve();
            }
            return preloadPromise;
        },

        attachCloseModalOnClickAndEscape: function() {
            var self = this,
                closeModal = function($modal) {
                    self.hideModal($modal);
                    self.getModalContentWrapper($modal).removeAttr('style');
                };

            $('body').click(function(event) {
                var $target = $(event.target),
                    $modal = $('.' + self.CLASS_MODAL_OVERLAY);

                if ($target.hasClass(self.CLASS_MODAL_OVERLAY) || $target.hasClass(self.CLASS_CLOSE_MODAL)) {
                    closeModal($modal);
                }
            }).on('keyup', function(event) {
                var $modal = $('.' + self.CLASS_MODAL_OVERLAY);

                if (event.which === 27) {
                    closeModal($modal);
                }
            });
        },

        attachResizeHandler: function() {
            var self = this;

            $(window).resize(function() {
                var $modal = self.getVisibleModal();

                if ($modal && $modal.length) {
                    self.centerModalContent($modal);
                }
            });
        },

        getPreloadedModal: function(href, callback) {
            var self = this,
                $modal;

            (function waitForModal() {
                $modal = $('[' + self.ATTR_DATA_MODAL_HREF + '="' + href + '"]');

                if ($modal.length) {
                    if (typeof callback === 'function') {
                        callback($modal);
                    }
                } else {
                    setTimeout(waitForModal, 100);
                }
            })();
        },

        centerModalContent: function($modal) {
            var $modalContent = this.getModalContentWrapper($modal),
                contentWidth = $modalContent.outerWidth(),
                contentHeight = $modalContent.outerHeight(),
                windowWidth = $(window.parent).width() || $(window).width(),
                windowHeight = $(window.parent).height() || $(window).height(),
                left = Math.floor((windowWidth - contentWidth) / 2),
                top = Math.floor((windowHeight - contentHeight) / 3
                    + ($(window.parent.document).find('#ContentScrollView').scrollTop() || 0));

            $modalContent.css({'left': left, 'top': top});
        },

        getModalContent: function($modal) {
            return $modal.find('.' + this.CLASS_MODAL_CONTENT);
        },

        showModalContent: function($modal) {
            this.getModalContent($modal).fadeIn(400, function() {
                $(this).trigger('modalVisible');
            });
        },

        hideModalContent: function($modal) {
            this.getModalContent($modal).hide();
            this.getModalContent($modal).trigger('modalHidden');
        },

        getModalContentWrapper: function($modal) {
            return $modal.find('.' + this.CLASS_MODAL_CONTENT_WRAPPER);
        },

        showModalContentWrapper: function($modal) {
            this.getModalContentWrapper($modal).fadeIn('slow');
        },

        hideModalContentWrapper: function($modal) {
            this.getModalContentWrapper($modal).fadeOut('slow');
        },

        showModal: function($modal) {
            $modal.show();
            this.showModalContentWrapper($modal);
            this.showModalContent($modal);

            this.$prevFocus = $(':focus');
            this.getModalContent($modal).find('.exp-main-content').focus();
        },

        hideModal: function($modal) {
            $modal.hide();
            this.hideModalContentWrapper($modal);
            this.hideModalContent($modal);

            if (this.$prevFocus && this.$prevFocus.length) {
                this.$prevFocus.focus();
            }

            this.$prevFocus = null;
        },

        hideAllModals: function() {
            this.hideModal($('.' + this.CLASS_MODAL_OVERLAY));
        },

        getVisibleModal: function() {
            return $('.' + this.CLASS_MODAL_OVERLAY + ':visible');
        }
    };

    window.Express.ModalHandler.init();
})(jQuery);

/* global jQuery, Express */
(function($, Express) {
    'use strict';

    var initEditBanner = function(el) {
        var isAuthorMode = Express.isAuthormode,
            hasItem = $(el).find('.editbanneritemcomponent').length > 0;

        if (!isAuthorMode && hasItem) {
            Express.buildCarousel($(el).find('.theEdit'), '.editbanneritemcomponent', {
                // Please note: In this case we are disabling Flickity's native accessibility settings
                // because the slides are anchor tags themselves and Flickity's accessibility options
                // were creating extra hidden divs that gained focus unnecessarily.
                accessibility: false
            }).always(function(carousel) {
                carousel.flickity('resize');
            });
        }
    },

    promotePrioritySelector = function(el) {
        if ($(el).find('.priority-true').length) {
            $(el).addClass('priority');
        }
    };

    $(function() {
        $('.editbannercomponent').each(function(i, el) {
            initEditBanner(el);
        });
        $('.editbanneritemcomponent').each(function(i, el) {
            promotePrioritySelector(el);
        });
        $('.editbanneritemcomponent.priority').each(function(i, el) {
            Express.setImageSourceAtBreakpoints(el);
        });
    });
})(jQuery, Express);

/* global jQuery, Express */
(function($, Express) {
    'use strict';

    var trendingItemTemplate = function(data, domain, modal, target, queryParams) {
        var generatedHtml,
            href = domain + data.productURL;

        if (queryParams) {
            queryParams = '?' + queryParams;
        }

        generatedHtml
            = '<a href="' + href + queryParams + '" target="' + target
            + '" data-modal="' + modal + '" class="cur-item">'
                + '<img src="' + data.productImage + '"/>'
                + '<p class="cur-desc">' + data.name.toLowerCase() + '</p>'
            + '</a>';
        return generatedHtml;
    },

    initCurrentlyTrending = function(el) {
        if ($(el).children().length === 0) {
            Express.headerDynamicDataPromise.always(function() {
                Express.retrieveLocalStoreId($(el).data('closest-store-api')).done(function(storeId) {
                    $.ajax({
                        dataType: 'json',
                        url: $(el).data('trending-api') + '/' + storeId,
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader('user_key', Express.getApiKey());
                        },
                        success: function(data) {
                            var gender = $(el).data('exp-gender'),
                                modal = $(el).data('exp-modal') || false,
                                target = $(el).data('exp-target') || '',
                                params = $(el).data('exp-params') || '',
                                productDomain = $(el).data('product-domain') || '',
                                items = gender === 'men' ? data.trendingMen : data.trendingWomen;

                            $.each(items, function(i, item) {
                                $(el).append(trendingItemTemplate(item, productDomain, modal, target, params));
                            });

                            Express.imageLoaded(el, true).done(function() {
                                Express.buildCarousel(el, '.cur-item', {
                                    cellAlign: !Express.isMobile() ? 'left' : 'center'
                                }).done(function() {
                                    $(el).css({'height': 'auto', 'overflow': 'visible'});
                                });
                            });
                        }
                    });
                });
            });
        }
    };
    Express.initAllCurrentlyTrending = function() {
        $('.currently-trending-items').each(function(i, el) {
            initCurrentlyTrending(el);
        });
    };

    $(function() {
        Express.initAllCurrentlyTrending();
    });
})(jQuery, Express);

/*global jQuery*/
(function($) {
    'use strict';

    $(document).ready(function() {
        $('.footersectioncomponent > .section-sublinks, .footergeocomponent > .footer-findlink').each(function() {
            var thisHeadline = $(this).parent().children('.headline'), $self = $(this);

            $(thisHeadline).on('click', function() {
                if (window.Express.isMobile()) {
                    $self.slideToggle('slow');
                }
            });
        });
    });
})(jQuery);

/* global jQuery */
(function($, document, sessionStorage) {
    'use strict';

    var retrieveLocalStoreInfo,
        populateFooterGeo;

    window.Express = window.Express || {};

    retrieveLocalStoreInfo = function(storeInfoApiUrl, closestsStoreApiUrl) {
        // Retrieve sessionStorage version of localStoreInfo
        var localStoreInfo = $.Deferred(), // eslint-disable-line
            localStoreInfoJson = JSON.parse(sessionStorage.getItem('localStoreInfo'));

        // If localStoreInfo does not exist retrieve the localStoreId.
        if (!localStoreInfoJson) {
            window.Express.headerDynamicDataPromise.always(function() {
                window.Express.retrieveLocalStoreId(closestsStoreApiUrl).then(function(localStoreId) {
                    // retrieve the localStoreInfo from the API
                    $.ajax({
                        url: storeInfoApiUrl + localStoreId,
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader('user_key', window.Express.getApiKey());
                        },
                        cache: false,
                        timeout: 5000,
                        dataType: 'json',
                        type: 'GET',
                        success: function(ajaxLocalStoreInfo) {
                            sessionStorage.setItem('localStoreInfo', JSON.stringify(ajaxLocalStoreInfo));
                            localStoreInfo.resolve(ajaxLocalStoreInfo);
                        },
                        error: function() {
                            localStoreInfo.reject();
                        }
                    });
                });
            });
        } else {
            localStoreInfo.resolve(localStoreInfoJson);
        }
        return localStoreInfo;
    };

    populateFooterGeo = function(localStoreInfo) {
        // Then populate the footer geo in the dom
        var googleMapsAddress = 'https://maps.google.com/maps?&daddr=' + localStoreInfo.addressLine1 + ',,'
                + localStoreInfo.city + ',' + localStoreInfo.state + ',' + localStoreInfo.postalCode + ','
                + localStoreInfo.country;

        $('.footergeocomponent .local-store-info').html(
            '<strong>' + localStoreInfo.name + '</strong><br />'
            + localStoreInfo.addressLine1 + '<br />'
            + localStoreInfo.city + ',' + localStoreInfo.state + ',' + localStoreInfo.postalCode + '<br />'
            + localStoreInfo.phoneNumber
        );
        $('.footergeocomponent a.local-store-locator').attr('href', googleMapsAddress).removeClass('hidden-all');
    };

    window.Express.loadFooterGeo = function() {
        var storeInfoApiUrl = $('.footergeocomponent .local-store-info').data('store-info-api'),
        closestStoreApiUrl = $('.footergeocomponent .local-store-info').data('closest-store-api');

        if (storeInfoApiUrl && closestStoreApiUrl) {
            retrieveLocalStoreInfo(storeInfoApiUrl, closestStoreApiUrl).done(populateFooterGeo);
        }
    };

    $(document).ready(window.Express.loadFooterGeo);
})(jQuery, document, sessionStorage);

/* global jQuery */
(function($) {
    'use strict';

    $(document).ready(function() {
        var hashtagText = $('#curalate_init').data('hashtagtext'),
            desktopGalleryLinkUrl = $('#curalate-header-view').attr('href');

        if (hashtagText) {
            $('#curalate-header .span-small').html(hashtagText);
        }
        // NOTE: the markup is returned from Curalate and is subject to change.
        // Curalate's markup does not currently return a URL or JS action for the Gallery link on mobile devices.
        // Return the href for the desktop Gallery link.
        if (desktopGalleryLinkUrl) {
            $('body').on('click', '#curalate-footer-view', function() {
                window.location = desktopGalleryLinkUrl;
            });
        }
    });
})(jQuery);

/* global jQuery, Express */
(function($, Express) {
    'use strict';

    $(window).resize(function() {
        $('.tile-slideshow').each(function() {
            var slideshowHeight;

            $(this).children('.tile-slide').each(function() {
                if ($(this).height() < slideshowHeight || !slideshowHeight) {
                    slideshowHeight = $(this).height();
                }
            });

            $(this).css('height', slideshowHeight + 'px');
        });
    });

    Express.initTileSlide = function(container) {
        $(container).find('.tile-slideshow').each(function(i, el) {
            Express.imageLoaded(el).always(function() {
                var slideshowHeight;

                $(el).children('.tile-slide').each(function() {
                    if ($(this).height() < slideshowHeight || !slideshowHeight) {
                        slideshowHeight = $(this).height();
                    }
                });

                $(el).css('height', slideshowHeight + 'px');

                $(el).children('.tile-slide:gt(0)').hide();

                Express.buildSlideshow(el, '.tile-slide', {stopOnHover: false});
            });
        });
    };
    $('.abandonShip').each(function() {
        $(this).closest('.row').addClass('abandonShip-parent');
    });
    $('.abandonShipMobile').each(function() {
        $(this).closest('.row').addClass('abandonShipMobile-parent');
    });
    $(function() {
        Express.initTileSlide('body');
    });
})(jQuery, Express);

/* global jQuery */
(function($) {
    'use strict';

    var autoplayVideo = function(video) {
        var $video = $(video),
        isAutoplay = $video.attr('data-autoplay') === 'true';

        if (isAutoplay) {
            if (video.readyState === 0) {
                video.load();
            }

            if (video.readyState > 3) {
                video.play();
            } else {
                $video.on('canplaythrough', function() {
                    this.play();
                });
            }
        }
    };

    window.Express = window.Express || {};

    window.Express.initVideo = function() {
        var video = this,
            $this = $(this),
            inModal = window.Express.inModalDialog(this),
            isTabletOrMobile = /ipad|iphone|android|windows phone/i.test(navigator.userAgent),
            $pictureOrSlideShow = $this.parents('.tilecomponent')
                .find('.tile-with-video picture, .tile-with-video .tile-slide-show'),
            $pauseButton = $this.closest('.tilecomponent').find('.pauseButton');

        // setup video

        if (!window.Express.isMobile()) {
            // preload all videos on desktop
            $this.attr('preload', 'auto');
        }

        if (isTabletOrMobile) {
            if (inModal) {
                // force controls on in mobile and tablet modals
                $this.prop('controls', 'controls');
                $this.siblings('.wrapper-text').addClass('nuclearOptionMobile');
            } else {
                // hide inline videos on tablet and mobile
                $pictureOrSlideShow.css('display', 'block');
                $this.css('display', 'none');
            }
        } else if (!inModal) {
            // show inline videos on desktop
            $pictureOrSlideShow.css('display', 'none');
            $this.css('display', 'block');
        }

        // play video

        if (inModal) {
            $this.parents('.modal-content').on('modalVisible', function() {
                autoplayVideo(video);
            });
            $this.parents('.modal-content').on('modalHidden', function() {
                video.pause();
            });
        } else if ($(video).is(':visible')) {
            autoplayVideo(video);
        }

        // listeners for play/pause button
        if ($pauseButton.length) {
            video.addEventListener('play', function(e) {
                if (e.type === 'play') {
                    $pauseButton.addClass('playing');
                }
            }, false);
            video.addEventListener('pause', function(e) {
                if (e.type === 'pause') {
                    $pauseButton.removeClass('playing');
                }
            }, false);
            video.addEventListener('ended pause', function() {
                $pauseButton.removeClass('playing');
            }, false);

            $pauseButton.on('click', function() {
                if (video.ended || video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }
    };

    window.Express.inModalDialog = function(node) {
        return $(node).parents('.modal-content').length > 0;
    };

    window.Express.initVideos = function(parent) {
        $(parent).find('video').each(window.Express.initVideo);
    };

    $(document).on('ready', function() {
        $('video').each(window.Express.initVideo);
    });
})(jQuery);

/* global jQuery */
(function($, document, window, btPageData) {
    'use strict';

    var setBrightTagPageBreakpoint = function() {

        btPageData.page = btPageData.page || {};

        if (window.Express.isMobile()) {
            btPageData.page.breakpoint = 'Mobile';
        } else if (window.Express.isTablet()) {
            btPageData.page.breakpoint = 'Tablet (Portrait)';
        } else if (window.Express.isStandardDesktop()) {
            btPageData.page.breakpoint = 'Desktop (Standard) and Tablet (Landscape)';
        } else {
            btPageData.page.breakpoint = 'Desktop (Expanded)';
        }
    },

    loadBrightTagScript = function() {
        // For whatever reason $.getScript and $.ajax strip hash info from the url value.
        // Therefore we have to add the script to the page by hand.
        window.Express.headerDynamicDataPromise.always(function() {
            var script = document.createElement('script');

            script.type = 'text/javascript';
            script.src = $('.brighttag-apis').data('brighttag-script-url');

            $('head').append(script);
        });
    },

    sendDataToBrightTag = function() {
        setBrightTagPageBreakpoint();
        loadBrightTagScript();
    };

    window.Express = window.Express || {};

    window.Express.brightTagEvent = function(data, callback, url) {
        var btURL = url ? url : $('.brighttag-apis').data('brighttag-basket-event');

        window.Express.headerDynamicDataPromise.always(function() {
            $.ajax({
                type: 'POST',
                cache: false,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: data,
                url: btURL,
                dataType: 'html'
            }).done(function(responseData) {
                $('head').append($.parseHTML(responseData, document, true));
            }).always(function() {
                if (callback && typeof callback === 'function') {
                    callback();
                }
            });
        });
    };

    window.Express.registerVideosToBrightTag = function() {
        var reattemptCount = 0, MAX_REATTEMPTS = 5, reattemptRegistration;

        if ($('video').length) {
            reattemptRegistration = setInterval(function() {
                if (reattemptCount <= MAX_REATTEMPTS && typeof window.trackedVideos === 'undefined') {
                    $('video').each(function(i, el) {
                        $(window).trigger('videoLoaded', {
                            video: $(el)
                        });
                    });
                    reattemptCount++;
                } else {
                    clearInterval(reattemptRegistration);
                }
            }, 1000);
        }
    };

    $(document).ready(function() {
        sendDataToBrightTag();
        if ($('body').hasClass('allModalsLoaded')) {
            window.Express.registerVideosToBrightTag();
        } else {
            $('body').on('allModalsLoaded', window.Express.registerVideosToBrightTag);
        }
    });
})(jQuery, document, window, window.btPageData || {});

/* global jQuery, Express, _ */

(function($, Express, _) {
    'use strict';

    var isAuthorMode = Express.isAuthormode,
        tallestHeightFix = function(el) {
        var tallestHeight = 0,
            containerElements = $(el).find('.container-tile');

        containerElements.css('height', 'auto');

        containerElements.each(function(i, tile) {
            var tileHeight = $(tile).height();

            if (tileHeight > tallestHeight) {
                tallestHeight = tileHeight;
            }
        });

        containerElements.css('height', tallestHeight);
    },

    normalizeTileImageHeights = function(el) {
        var shortestHeight = 0,
            containerElements = $(el).find('.container-tile'),
            pictureElements = $(el).find('.background-element'),
            tilePromises = [],
            setHeightPromise = $.Deferred(); // eslint-disable-line

        pictureElements.removeClass('overflow-y-hidden').css('height', 'auto');

        containerElements.each(function(i, tile) {
            var pictureHeight = $(tile).find('picture').height(),
                $video = $(tile).find('video'),
                tilePromise = $.Deferred(); // eslint-disable-line

            if (!pictureHeight && $video.length) {
                // wait for video to load before getting its height
                if ($video[0].readyState === 4) {
                    pictureHeight = $video.height();
                    tilePromise.resolve();
                } else {
                    $video.on('loadeddata', function() {
                        pictureHeight = $video.height();
                        tilePromise.resolve();
                    });
                }
            } else {
                tilePromise.resolve();
            }

            tilePromise.always(function() {
                if (pictureHeight < shortestHeight || shortestHeight === 0 && pictureHeight > 0) {
                    shortestHeight = pictureHeight;
                }
            });

            tilePromises.push(tilePromise);
        });

        $.when.apply($, tilePromises).then(function() {
            setHeightPromise.resolve();
        }, function() {
            setHeightPromise.reject();
        });

        setHeightPromise.always(function() {
            $(el).css('opacity', 1);
            pictureElements.css('height', shortestHeight).addClass('overflow-y-hidden');
        });
    },

    resetTileImageHeights = function(el) {
        var pictureElements = $(el).find('picture');
        pictureElements.removeClass('overflow-y-hidden').css('height', 'auto');
    },

    debouncedResizeEvent = _.debounce(function() {
        $(document).trigger('normalizeTileImageHeights');
    }, 50),

    initFourFourFourFlickity = function(el) {
        Express.imageLoaded(el, true).always(function() {
            tallestHeightFix(el);

            $(window).on('resize', function() {
                tallestHeightFix(el);
            });

            Express.buildCarousel(el, '.container-tile', {
                cellAlign: 'center',
                // Please note: In this case we are disabling Flickity's native accessibility settings
                // because the slides are anchor tags themselves and Flickity's accessibility options
                // were creating extra hidden divs that gained focus unnecessarily.
                accessibility: false
            });
        });
    };

    if (!isAuthorMode) {
        window.addEventListener('orientationchange', debouncedResizeEvent, false);
        window.addEventListener('resize', debouncedResizeEvent, false);
    }

    $(document).on('normalizeTileImageHeights', function() {
        $('.eight-four-component-layout, .seven-five-component-layout, .five-seven-component-layout, .six-six-component-layout, .four-four-four-component-layout, .stacked-four-four-four-component-layout, .three-six-three-component-layout, .three-three-three-three-component-layout').each(function(i, el) {
            // only wait for background images to load, not overlay or shop this look images
            var backgroundImagesToLoad = $(this).find('.background-element');

            if (Express.isMobile()) {
                // remove cropping settings
                resetTileImageHeights(el);
            } else {
                // update heights to crop images
                Express.imageLoaded(backgroundImagesToLoad).always(function() {
                    normalizeTileImageHeights(el);
                });
            }
        });
    });

    Express.initRowLayouts = function(el) {
        if (Express.isMobile()) {
            $(el).find('.four-four-four-component-layout > .row').each(function(i, row) {
                initFourFourFourFlickity(row);
            });
        }
        $(el).find('.eight-four-component-layout, .seven-five-component-layout, .five-seven-component-layout, .six-six-component-layout, .stacked-four-four-four-component-layout, .three-six-three-component-layout, .twelve-component-layout, .three-three-three-three-component-layout').each(function(i, row) {
            Express.setImageSourceAtBreakpoints(row, '.row');
        });
        if (!isAuthorMode) {
            // only normalize image heights in publish
            $(document).trigger('normalizeTileImageHeights');
        }
    };

    $(function() {
        Express.initRowLayouts($('body'));
    });
})(jQuery, Express, _);

/* global jQuery, JSON, Express */

(function($, JSON, Express) {
    'use strict';

    var carouselItemTemplate = function(data) {
        var generatedHtml
        = '<a class="product-carousel-item" href="' + data.productURL + '"'
            + ' unbxdattr="product"'
            + ' unbxdparam_sku="' + data.productId + '"'
            + ' data-product-modal="true"'
            + ' data-product-id="' + data.productId + '">'
            + '<img src="' + data.productImage + '"/>'
            + '<p class="item-name">' + data.name + '</p>'
            + '<p class="item-price">' + data.listPrice + '</p>'
        + '</a>';

        return generatedHtml;
    },

    productItemTemplate = function(data) {
        var generatedHtml
        = '<a class="product-photo-item" href="' + data.productURL + '"'
            + ' unbxdattr="product"'
            + ' unbxdparam_sku="' + data.productId + '"'
            + ' data-product-modal="true"'
            + ' data-product-id="' + data.productId + '">'
            + '<img src="' + data.productImage + '"/>'
        + '</a>';

        return generatedHtml;
    },

    initProductList = function(el) {
        var productApi = $(el).data('productapi'),
            categoryApi = $(el).data('categoryapi'),
            productIds = $(el).data('productlist'),
            categoryIds = $(el).data('ensemblelist'),
            promises = [],
            promiseForProductList = $.Deferred(), // eslint-disable-line
            finishedPromise = $.Deferred(), // eslint-disable-line
            MAX_NON_CAROUSEL_ITEM_COUNT = 3,
            isCarousel = $(el).hasClass('product-carousel'),
            nonCarouselItemCount = 0,

        processProductResponse = function(responseItem) {
            if (isCarousel) {
                $(el).append(carouselItemTemplate(responseItem));
            } else if (nonCarouselItemCount < MAX_NON_CAROUSEL_ITEM_COUNT) {
                $(el).append(productItemTemplate(responseItem));
                nonCarouselItemCount++;
            }
        };

        if (categoryIds) {
            String(categoryIds).split(/,/).forEach(function(category) {
                var promiseForCategory = $.Deferred(); // eslint-disable-line

                promises.push(promiseForCategory);

                window.Express.headerDynamicDataPromise.always(function() {
                    $.ajax({
                        dataType: 'JSON',
                        url: categoryApi + category,
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader('user_key', Express.getApiKey());
                        },
                        success: function(response) {
                            var i, products;

                            if (response && response.products && response.products.products) {
                                products = response.products.products;
                                for (i = 0; i < products.length; i++) {
                                    processProductResponse(products[i]);
                                }
                            }
                        },
                        complete: function() {
                            promiseForCategory.resolve();
                        }
                    });
                });
            });
        }

        if (productIds) {
            promises.push(promiseForProductList);

            window.Express.headerDynamicDataPromise.always(function() {
                $.ajax({
                    url: productApi,
                    beforeSend: function(xhr, settings) {
                        if ($.ajaxSettings && $.ajaxSettings.beforeSend) {
                            $.ajaxSettings.beforeSend(xhr, settings);
                        }
                        xhr.setRequestHeader('user_key', Express.getApiKey());
                    },
                    type: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    data: JSON.stringify({
                        'type': 'product',
                        'ids': String(productIds).split(/,/)
                    }),
                    success: function(response) {
                        if (response && response.length) {
                            response.forEach(function(product) {
                                if (product.valid) {
                                    processProductResponse(product);
                                }
                            });
                        }
                    },
                    complete: function() {
                        promiseForProductList.resolve();
                    }
                });
            });
        }

        $.when.apply($, promises).then(function() {
            finishedPromise.resolve();
        }, function() {
            finishedPromise.reject();
        });

        finishedPromise.always(function() {
            Express.imageLoaded(el, true).done(function() {
                if (isCarousel) {
                    Express.buildCarousel(el, '.product-carousel-item', {
                        cellAlign: !Express.isMobile() ? 'left' : 'center',
                        // Please note: In this case we are disabling Flickity's native accessibility settings
                        // because the slides are anchor tags themselves and Flickity's accessibility options
                        // were creating extra hidden divs that gained focus unnecessarily.
                        accessibility: false
                    })
                    .done(function() {
                        $(el).css({'height': 'auto', 'overflow': 'visible'});
                    });
                } else {
                    $(el).css({'opacity': '1'});
                }
            });
        });
    };

    $(function() {
        $('.product-carousel, .product-carousel-product-photos').each(function(i, el) {
            initProductList(el);
        });
    });
})(jQuery, JSON, Express);

/* global jQuery, JSON, Express */
(function($, JSON, Express) {
    'use strict';

    var registerDrawerEvents = function(el) {
        var $component = $(el).closest('.shopthislookcomponent'),
            hasSibling = $component.closest('.row').find('.shopthislookcomponent').length > 1,
            $trigger = $component.addClass(hasSibling ? 'has-stl-sibling' : '')
                .find('.shopThisLook-trigger, .shopThisLookImage-trigger').addClass('available');

        $trigger.on('click', function(e) {
            e.preventDefault();
            $component.toggleClass('open');
        }).end().find('.drawer-close')
        .on('click', function(e) {
            e.preventDefault();
            $component.removeClass('open');
        });

        // User Accessibility
        $component.on('keyup', '.product-card', function(e) {
            if (e.which === 9) { // detect TAB press
                $('.shopthislookcomponent.open').removeClass('open');
                $component.addClass('open');
            }
        }).on('keyup', function(e) {
            if (e.which === 27) {
                // 1. detect ESC press,
                // 2. shift focus to close button to ensure next tab is focused on the next tabbable item,
                // 3. trigger click on close button to close drawer
                $('.shopthislookcomponent.open').find('.drawer-close').focus().click();
            }
        });
    },

    shopThisLookCarouselItemTemplate = function(data) {
        var generatedHtml
        = '<a href="' + data.productURL + '" '
                + 'class="product-card" '
                + 'unbxdattr="product" '
                + 'unbxdparam_sku="' + data.productId + '" '
                + 'data-description="' + data.productDescription + '" '
                + 'data-promo="' + data.promoMessage + '" '
                + 'data-list-price="' + data.listPrice + '" '
                + 'data-sale-price="' + data.salePrice + '"'
                + 'data-product-id="' + data.productId + '"'
                + 'data-product-modal="true" >'
            + '<img src="' + data.productImage + '" '
            + 'class="product-card-image">'
            + '<p class="product-card-name">' + data.name + '</p>'
            + '<p class="product-card-price">'
                + data.listPrice
            + '</p>'
        + '</a>';

        return generatedHtml;
    },

    createDirectLinkForLoneProduct = function(el) {
        var $component = $(el).closest('.shopthislookcomponent'),
            $productCard = $(el).find('.product-card'),
            $hoverButtonContainer = $component.find('.shopThisLook-hoverLight, .shopThisLook-hoverDark'),
            shopThisHoverButtonTrigger, productHoverButtonTrigger,
            shopThisCTATrigger, productCTATrigger,
            shopThisImageTrigger, productImageTrigger;

        // Update Hover Button Trigger if present
        if ($hoverButtonContainer.length > 0) {
            shopThisHoverButtonTrigger = $hoverButtonContainer
                .find('.shopThisLook-trigger');
            productHoverButtonTrigger = $productCard.clone()
                .html($(shopThisHoverButtonTrigger).html())
                .attr('class', $(shopThisHoverButtonTrigger).attr('class'));
            shopThisHoverButtonTrigger.replaceWith(productHoverButtonTrigger);
        } else {
            // Otherwise Update CTA Trigger if present
            shopThisCTATrigger = $component.find('.shopThisLook-trigger .calltoaction .btn');
            productCTATrigger = $productCard.clone()
                .html($(shopThisCTATrigger).html())
                .attr('class', $(shopThisCTATrigger).attr('class'));
            shopThisCTATrigger.replaceWith(productCTATrigger);
        }

        setTimeout(function() {
            $component.find('.shopThisLook-trigger').addClass('available');
        }, 100);

        // Update Image Trigger
        shopThisImageTrigger = $component.find('.shopThisLookImage-trigger');
        productImageTrigger = $productCard.clone()
            .html($(shopThisImageTrigger).html())
            .attr('class', $(shopThisImageTrigger).attr('class'));
        shopThisImageTrigger.replaceWith(productImageTrigger);
    },

    removeAllDrawerTriggers = function(el) {
        var $component = $(el).closest('.shopthislookcomponent');

        // remove image trigger if inside tile
        $(el).closest('.tilecomponent').find('.shopThisLookImage-trigger').remove();
        $component.find('.shopThisLook-trigger').remove();
        $component.find('.cta-visible').removeClass('cta-visible');
    },

    initShopThisLook = function(el) {
        var productApi = $(el).data('productApi'),
            categoryApi = $(el).data('categoryApi'),
            productIds = $(el).data('products'),
            categoryIds = $(el).data('categories'),
            promises = [],
            promiseForProductList = $.Deferred(), // eslint-disable-line
            finishedPromise = $.Deferred(); // eslint-disable-line

        if (categoryIds) {
            String(categoryIds).split(/,/).forEach(function(category) {
                var promiseForCategory = $.Deferred(); // eslint-disable-line

                promises.push(promiseForCategory);

                window.Express.headerDynamicDataPromise.always(function() {
                    $.ajax({
                        dataType: 'JSON',
                        url: categoryApi + category,
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader('user_key', Express.getApiKey());
                        },
                        success: function(response) {
                            var i, products;

                            if (response && response.products && response.products.products) {
                                products = response.products.products;
                                for (i = 0; i < products.length; i++) {
                                    $(el).append(shopThisLookCarouselItemTemplate(products[i]));
                                }
                            }
                        },
                        complete: function() {
                            promiseForCategory.resolve();
                        }
                    });
                });
            });
        }

        if (productIds) {
            promises.push(promiseForProductList);

            window.Express.headerDynamicDataPromise.always(function() {
                $.ajax({
                    url: productApi,
                    beforeSend: function(xhr, settings) {
                        if ($.ajaxSettings && $.ajaxSettings.beforeSend) {
                            $.ajaxSettings.beforeSend(xhr, settings);
                        }
                        xhr.setRequestHeader('user_key', Express.getApiKey());
                    },
                    type: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    data: JSON.stringify({
                        'type': 'product',
                        'ids': String(productIds).split(/,/)
                    }),
                    success: function(response) {
                        if (response && response.length) {
                            response.forEach(function(product) {
                                if (product.valid) {
                                    $(el).append(shopThisLookCarouselItemTemplate(product));
                                }
                            });
                        }
                    },
                    complete: function() {
                        promiseForProductList.resolve();
                    }
                });
            });
        }

        $.when.apply($, promises).then(function() {
            finishedPromise.resolve();
        }, function() {
            finishedPromise.reject();
        });

        finishedPromise.always(function() {
            var cardCount = $(el).find('.product-card').length;

            if (cardCount === 1) {
                createDirectLinkForLoneProduct(el);
            } else if (cardCount === 0) {
                removeAllDrawerTriggers(el);
            } else {
                Express.buildCarousel(el, '.product-card', {
                    imagesLoaded: true,
                    wrapAround: false
                });
                registerDrawerEvents(el);
            }
        });
    };

    Express.initShopThisLook = function(container) {
        $(container).find('.shopthislookcomponent .container-product-cards').each(function(i, el) {
            var isInside444RowLayout = $(el).closest('.four-four-four-component-layout').length > 0,
                isInsideNuclearDesktopTile = $(el).closest('.tilecomponent').find('.nuclearOption').length > 0,
                isInsideNuclearMobileTile = $(el).closest('.tilecomponent').find('.nuclearOptionMobile').length > 0;

            // Dont init and remove both triggers for tile's nuclear option
            if ((isInsideNuclearDesktopTile && !Express.isMobile())
                || (isInsideNuclearMobileTile && Express.isMobile())) {
                removeAllDrawerTriggers(el);
            // Dont init if inside a 444 row layout at mobile breakpoint (nested carousels)
            } else if (!(isInside444RowLayout && Express.isMobile())) {
                initShopThisLook(el);
            }
        });
    };

    $(function() {
        Express.initShopThisLook('body');
    });
})(jQuery, JSON, Express);

/* global jQuery, _, Express */
(function(document, $, _, Express) {
    'use strict';

    // This file instantiates the product modal from /etc/designs/express/clientlibs/product-modal
    // We need to split this off so that other users of the product modal can instantiate on events
    // other than document ready.
    $(document).ready(function() {
        Express.productModalInit($, _);
    });
})(document, jQuery, _, Express);

/* global jQuery, Express */
(function($, Express) {
    'use strict';

    var isAuthorMode = Express.isAuthormode,
        adjustChildrenTileToShortestHeight = function(el) {
            var slideshowHeight;

            $(el).children().css('height', 'auto');
            $(el).children('.tilecomponent').each(function() {
                if ($(this).height() < slideshowHeight || !slideshowHeight) {
                    slideshowHeight = $(this).height();
                }
            });
            $(el).css('height', slideshowHeight + 'px');
            $(el).children('.tilecomponent').css('height', slideshowHeight + 'px');
        },

        addSlideshowAnimation = function(el) {
            if (!isAuthorMode) {
                Express.buildSlideshow(el, '.tilecomponent');

                $(window).resize(function() {
                    $('.carouselcomponentlayout .tile-container').each(function() {
                        adjustChildrenTileToShortestHeight(this);
                    });
                });
            }
        };

    Express.initCarouselComponentLayoutSlide = function(container) {
        $(container).find('.carouselcomponentlayout .tile-container').each(function(i, el) {
            if ($(el).children('.tilecomponent').size() > 1) {
                $(el).addClass('has-multi');
                Express.imageLoaded($(el).find('div.tilecomponent > div > picture')).always(function() {
                    adjustChildrenTileToShortestHeight(el);
                    $(el).children('.tilecomponent:gt(0)').hide();
                    addSlideshowAnimation(el);
                });
            }
        });
    };

    $(document).on('ready', function() {
        if (!isAuthorMode) {
            Express.initCarouselComponentLayoutSlide('body');
        }
    });
})(jQuery, Express);

/* global window, jQuery */
(function($, Granite) {
    'use strict';

    var signup = {
        init: function() {
            signup.section = $('.email-promotion').first();
            if (signup.formDisabled) {
                signup.disableSignupForm();
            } else if (signup.isAuthorMode()) {
                signup.showSignupForm();
            } else {
                $(signup.section).find('.drawer-close').click(signup.hideSignupForm);
                $(signup.section).find('form').submit(signup.onSubmit);
                $(signup.section).find('.newsletter-trigger-mobile').click(signup.toggleSignupFormMobile);
                $(signup.section).removeClass('hidden-on-load');
                $('.show-email-promotion').click(signup.showSignupForm);
                if (signup.hasClosedPromotion() || signup.hasSignedUp()) {
                    signup.hideSignupForm();
                }
            }
        },
        isAuthorMode: function() {
            var parentWindow,
                currentLayer;

            if (!Granite || !Granite.Util || !Granite.Util.getTopWindow) {
                return false;
            }
            parentWindow = Granite.Util.getTopWindow();
            if (!parentWindow.Granite.author.layerManager) {
                return false;
            }
            currentLayer = parentWindow.Granite.author.layerManager.getCurrentLayer();
            return currentLayer === 'Edit';
        },
        onSubmit: function(event) {
            event.preventDefault();
            if (signup.hasSubmitted) {
                return;
            }
            signup.hideValidationError();
            if (signup.isValidEmail($(signup.section).find('.subscribe-email-address-inline').val())) {
                signup.hasSubmitted = true;
                $.ajax({
                    url: this.action,
                    method: this.method,
                    data: $(this).serialize(),
                    success: [signup.setSignedUp, signup.showSuccessMessage]
                });
            } else {
                signup.showValidationError();
            }
        },
        isValidEmail: function(email) {
            var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

            return regex.test(email);
        },
        disableSignupForm: function() {
            signup.formDisabled = true;
            $(signup.section).remove();
        },
        hideSignupForm: function(event) {
            if (event) {
                // Event is not provided if the method was called directly
                // If event was previded, it was because a user clicked a close button
                event.preventDefault();
                signup.setClosedPromotion();
            }
            $(signup.section).addClass('transition-to-hidden');
        },
        showSignupForm: function(event) {
            if (event) {
                event.preventDefault();
            }
            signup.showForm();
            signup.hideSuccessMessage();
            signup.hideValidationError();
            $(signup.section).removeClass('hidden transition-to-hidden');
        },
        toggleSignupFormMobile: function(event) {
            event.preventDefault();
            signup.showForm();
            signup.hideSuccessMessage();
            signup.hideValidationError();
            $(signup.section).toggleClass('maximized-for-mobile');
        },
        hasSignedUp: function() {
            return $.cookie('signedUp', String) === 'true';
        },
        setSignedUp: function() {
            jQuery.cookie('signedUp', 'true', {path: '/'});
        },
        setClosedPromotion: function() {
            $.cookie('closedEmailPromo', true, {path: '/'});
        },
        hasClosedPromotion: function() {
            return $.cookie('closedEmailPromo', String) === 'true';
        },
        showValidationError: function() {
            $(signup.section).find('.error-msg').removeClass('hidden');
            $(signup.section).find('.email-input').addClass('error');
        },
        hideValidationError: function() {
            $(signup.section).find('.error-msg').addClass('hidden');
            $(signup.section).find('.email-input').removeClass('error');
        },
        showForm: function() {
            $(signup.section).find('.newsletter-offer-text').removeClass('hidden');
            $(signup.section).find('.newsletter-form').removeClass('hidden');
        },
        hideForm: function() {
            $(signup.section).find('.newsletter-offer-text').addClass('hidden');
            $(signup.section).find('.newsletter-form').addClass('hidden');
        },
        showSuccessMessage: function() {
            signup.hideForm();
            $(signup.section).find('.email-promotion-success').removeClass('hidden');
            $(signup.section).delay(5000).fadeOut(1000);
        },
        hideSuccessMessage: function() {
            $(signup.section).find('.email-promotion-success').addClass('hidden');
        }
    };

    window.Express = window.Express || {};

    $(signup.init);
    window.Express.hideNewsletter = signup.disableSignupForm;
})(jQuery, window.Granite || {});

/* global jQuery, Express */

(function($, Express) {
    'use strict';

    var adjustFeaturedStoryTitle = function(el) {
        var $featuredStoryTitleContainer = $(el).find('.title-container'),
            $featuredStoryTitle = $featuredStoryTitleContainer.children(),
            overlap = $featuredStoryTitleContainer.data('overlap');

        if (overlap) {
            $.fontSpy('express-condensed', {
                callback: function() {
                    $featuredStoryTitleContainer
                            .css('margin-top', '-' + $featuredStoryTitleContainer.height() * 0.5 + 'px');
                    $featuredStoryTitle.css('opacity', '1');
                }
            });
        } else {
            $featuredStoryTitle.css('opacity', '1');
        }
    };

    $(function() {
        $('.storiesoverviewcomponent').each(function(i, overview) {
            adjustFeaturedStoryTitle(overview);
            Express.setImageSourceAtBreakpoints(overview);
        });
    });
})(jQuery, Express);

/* global jQuery */

(function($) {
    'use strict';

    window.Express = window.Express || {};

    $(function() {
        $('.container-thirdParty .storyNavigation').each(function(i, overview) {
            window.Express.setImageSourceAtBreakpoints(overview);
        });
    });
})(jQuery);

/* global jQuery */
(function($) {
    'use strict';

    $(function() {

        var $social = $('.social'),
            $socialLinks = $('.social a.social-link'),
            hasPointerSupport = 'PointerEvent' in window,

            isOpen = function($this) {
                return $this.hasClass('hoverEffect');
            },
            open = function($this) {
                window.Express.forceRedraw($this.parent());
                closeAll();
                $this.addClass('hoverEffect');
            },
            closeAll = function() {
                window.Express.forceRedraw($social, 450);
                $('a.social-link.hoverEffect').removeClass('hoverEffect');
            },
            close = function($this) {
                $this.removeClass('hoverEffect');
            },
            isTargetOutside = function(target) {
                return !$(target).closest('.sociallinkscomponent ul.social li').length ? true : false;
            };

        if (!window.Express.isMobile()) {
            $socialLinks.on({
                mouseenter: function() {
                    if (!hasPointerSupport) {
                        open($(this));
                    }
                },
                mouseleave: function() {
                    if (!hasPointerSupport) {
                        close($(this));
                    }
                },
                pointerenter: function(e) {
                    if (e.originalEvent.pointerType === 'mouse') {
                        open($(this));
                    }
                },
                pointerleave: function(e) {
                    if (e.originalEvent.pointerType === 'mouse') {
                        close($(this));
                    }
                },
                touchstart: function(e) {
                    if (!hasPointerSupport) {
                        if (!isOpen($(this))) {
                            e.preventDefault();
                            open($(this));
                        } else {
                            // follow link
                            $(this)[0].click();
                            closeAll();
                        }
                    }
                },
                pointerdown: function(e) {
                    if (e.originalEvent.pointerType === 'touch') {
                        if (!isOpen($(this))) {
                            // e.preventDefault doesn't prevent the subsequent click event like it does in touchstart
                            $(this).one('click', function() {
                                return false;
                            });
                            open($(this));
                        } else {
                            // follow link
                            closeAll();
                        }
                    }
                }
            });

            $('html').on({
                touchstart: function(e) {
                    if (isTargetOutside(e.target)) {
                        closeAll();
                    }
                },
                pointerdown: function(e) {
                    if (e.originalEvent.pointerType === 'touch' && isTargetOutside(e.target)) {
                        closeAll();
                    }
                }
            });
        }
    });
})(jQuery);

/* global jQuery, Express */
(function($, Express) {
    'use strict';

    var MAX_ACCEPTABLE_HEIGHT = 50,
        isAuthorMode = Express.isAuthormode,
        forceMobileViewIfContentIsTooWide = function() {
            $('.linklistcomponent').each(function(i, el) {
                if (!isAuthorMode && !Express.isMobile()) {
                    if ($(el).height() > MAX_ACCEPTABLE_HEIGHT) {
                        $(el).addClass('force-mobile-view');
                    }
                }
                $(el).find('.linklist-wrapper').css('opacity', '1');
            });
        };

    $(function() {
        $.fontSpy('express-condensed', {callback: forceMobileViewIfContentIsTooWide});

        $('.linklistcomponent .active').on('click', function(e) {
            if (Express.isMobile() || $(this).closest('.linklistcomponent').hasClass('force-mobile-view')) {
                e.preventDefault();
                $(this).parent().toggleClass('closed');
            }
        });
    });
})(jQuery, Express);

/* global jQuery, YT */
(function($) {
    'use strict';

    var loadYouTubeScript = function() {
        var tag = document.createElement('script'),
                firstScriptTag = document.getElementsByTagName('script')[0],
                promise = $.Deferred(); // eslint-disable-line

        window.onYouTubeIframeAPIReady = function() {
            promise.resolve();
        };
        tag.src = 'https://www.youtube.com/iframe_api';
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        return promise;
    },
    youtubeScriptLoaded = loadYouTubeScript(),
    initInlineYouTube = function(el) {
        /* eslint-disable no-new */
        new YT.Player(el, {
            videoId: $(el).data('video-id'),
            playerVars: {
                'autoplay': $(el).data('auto-play') ? '1' : '0',
                'controls': $(el).data('controls') ? '1' : '0',
                'iv_load_policy': $(el).data('iv_load_policy') ? '1' : '3',
                'rel': $(el).data('rel') ? '1' : '0',
                'showinfo': $(el).data('show-info') ? '1' : '0',
                'loop': $(el).data('loop') ? '1' : '0',
                'playlist': $(el).data('playlist') ? $(el).data('video-id') : '0'
            },
            events: {
                onStateChange: function(e) {
                    $(window).trigger('ytVideoEvent', {
                        id: $(el).data('video-id'),
                        state: e
                    });
                }
            }
        });
    },
    initModalYouTube = function(el) {
        var modalParent = $(el).closest('.modal-content'),
        youtubeVideoIsReady = $.Deferred(), // eslint-disable-line
        youtubeVideo = new YT.Player(el, {
            videoId: $(el).data('video-id'),
            playerVars: {
                'controls': $(el).data('controls') ? '1' : '0',
                'iv_load_policy': $(el).data('iv_load_policy') ? '1' : '3',
                'rel': $(el).data('rel') ? '1' : '0',
                'showinfo': $(el).data('show-info') ? '1' : '0',
                'loop': $(el).data('loop') ? '1' : '0',
                'playlist': $(el).data('playlist') ? $(el).data('video-id') : '0'
            },
            events: {
                onReady: function() {
                    youtubeVideoIsReady.resolve();
                },
                onStateChange: function(e) {
                    $(window).trigger('ytVideoEvent', {
                        id: $(el).data('video-id'),
                        state: e
                    });
                }
            }
        });

        /* eslint-enable no-new */
        $(modalParent).on('modalVisible', function() {
            var modalContent = this;

            $.when(youtubeVideoIsReady).done(function() {
                if ($(modalContent).is(':visible')) {
                    youtubeVideo.playVideo();
                }
            });
        });
        $.when(youtubeVideoIsReady).done(function() {
            $(modalParent).on('modalHidden', function() {
                youtubeVideo.pauseVideo();
            });
        });
    };

    window.Express.initYouTube = function(container) {
        $.when(youtubeScriptLoaded).done(function() {
            $(container).find('.ytplayer').each(function(i, el) {
                if (window.Express.inModalDialog(el)) {
                    initModalYouTube(el);
                } else {
                    initInlineYouTube(el);
                }
            });
        });
    };
    window.Express.initYouTube('body');
})(jQuery);

/* global jQuery, document, window */
(function($, document, window) {
    'use strict';

    var isValidEmail = function(email) {
            var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

            return regex.test(email);
        },
        validateForm = function(collegeForm) {
            var isValid = true;

            if ($('[name=first-name]', collegeForm).val()) {
                $('[name=first-name]', collegeForm).closest('.container-form-field').removeClass('error');
            } else {
                $('[name=first-name]', collegeForm).closest('.container-form-field').addClass('error');
                isValid = false;
            }
            if ($('[name=last-name]', collegeForm).val()) {
                $('[name=last-name]', collegeForm).closest('.container-form-field').removeClass('error');
            } else {
                $('[name=last-name]', collegeForm).closest('.container-form-field').addClass('error');
                isValid = false;
            }
            if ($('[name=email]', collegeForm).val() && isValidEmail($('[name=email]').val())) {
                $('[name=email]', collegeForm).closest('.container-form-field').removeClass('error');
            } else {
                $('[name=email]', collegeForm).closest('.container-form-field').addClass('error');
                isValid = false;
            }
            if ($('[name=gender]:checked', collegeForm).val()) {
                $('[name=gender]', collegeForm).closest('.container-form-field').removeClass('error');
            } else {
                $('[name=gender]', collegeForm).closest('.container-form-field').addClass('error');
                isValid = false;
            }
            if ($('[name=university]', collegeForm).val()) {
                $('[name=university]', collegeForm).closest('.container-form-field').removeClass('error');
            } else {
                $('[name=university]', collegeForm).closest('.container-form-field').addClass('error');
                isValid = false;
            }
            if ($('[name=graduation-month]', collegeForm).val()) {
                $('[name=graduation-month]', collegeForm).closest('.container-form-field').removeClass('error');
            } else {
                $('[name=graduation-month]', collegeForm).closest('.container-form-field').addClass('error');
                isValid = false;
            }
            if ($('[name=graduation-year]', collegeForm).val()) {
                $('[name=graduation-year]', collegeForm).closest('.container-form-field').removeClass('error');
            } else {
                $('[name=graduation-year]', collegeForm).closest('.container-form-field').addClass('error');
                isValid = false;
            }
            return isValid;
        },
        clearError = function() {
            $('[name=' + $(this).attr('name') + ']',
                $(this).closest('form')
            ).closest('.container-form-field').removeClass('error');
        },
        onFormDisabledSubmitClick = function(event) {
            event.preventDefault();
        },
        onFormSubmitClick,
        markFormSubmitted = function(collegeForm) {
            $(document).off('submit', '.collegeambassadorformcomponent form', onFormSubmitClick);
            $(document).on('submit', '.collegeambassadorformcomponent form', onFormDisabledSubmitClick);
            collegeForm.find('.college-form-submit').html('Submitting...')
                    .addClass('submitting')
                    .removeClass('try-again');
        },
        failForm = function(collegeForm) {
            collegeForm.find('.college-form-submit').html('Try Again')
                    .addClass('try-again')
                    .removeClass('submitting');
            $(document).off('submit', '.collegeambassadorformcomponent form', onFormDisabledSubmitClick);
            $(document).on('submit', '.collegeambassadorformcomponent form', onFormSubmitClick);
        },
        succeedForm = function(collegeForm) {
            var successPage = collegeForm.data('success-page');

            collegeForm.find('.college-form-submit').html('Submitted')
                    .addClass('submitted')
                    .removeClass('submitting')
                    .removeClass('try-again');
            if (successPage) {
                window.location.href = successPage;
            }
        },
        submitForm = function(collegeForm) {
            var destination = collegeForm.attr('action');

            $.ajax({
                url: destination,
                type: 'POST',
                data: {
                    'first-name': collegeForm.find('[name=first-name]').val(),
                    'last-name': collegeForm.find('[name=last-name]').val(),
                    'email': collegeForm.find('[name=email]').val(),
                    'gender': collegeForm.find('[name=gender]').val(),
                    'university': collegeForm.find('[name=university]').val(),
                    'graduation-month': collegeForm.find('[name=graduation-month]').val(),
                    'graduation-year': collegeForm.find('[name=graduation-year]').val(),
                    'ajax': true
                }
            }).done(function() {
                succeedForm(collegeForm);
            }).fail(function() {
                failForm(collegeForm);
            });
        };

    onFormSubmitClick = function(event) {
        var collegeForm, isFormValid;

        event.preventDefault();

        collegeForm = $(this).closest('form');

        markFormSubmitted(collegeForm);

        isFormValid = validateForm(collegeForm);
        if (isFormValid) {
            submitForm(collegeForm);
        } else {
            failForm(collegeForm);
        }
    };

    $(document).ready(function() {
        $(document).on('submit', '.collegeambassadorformcomponent form', onFormSubmitClick);
        $(document).on(
            'change',
            '.collegeambassadorformcomponent input, .collegeambassadorformcomponent select',
            clearError
        );
        $('.collegeambassadorformcomponent form').find('select').selectize();
    });
})(jQuery, document, window);

/* global jQuery, Express */

(function($, Express) {
    'use strict';

    var isAuthorMode = Express.isAuthormode,
        checkDates = function(scheduledContent, testTime) {
        var now = testTime ? new Date(testTime) : new Date($.now()),
            result = false;

        $.each(scheduledContent, function(index, item) {
            var onDate = new Date(item.onTime),
                offDate = new Date(item.offTime);

            if (onDate.toString() !== 'Invalid Date' && offDate.toString() !== 'Invalid Date') {
                if (now >= onDate && now < offDate) {
                    result = item;
                    return false;
                }
            } else if (offDate.toString() !== 'Invalid Date') { // First content
                if (now < offDate) {
                    result = item;
                    return false;
                }
            } else if (onDate.toString() !== 'Invalid Date') { // Last content
                if (now >= onDate) {
                    result = item;
                    return false;
                }
            } else if (onDate.toString() === 'Invalid Date' && offDate.toString() === 'Invalid Date') {
                result = item;
                return false;
            }
        });

        return result;
    },

    insertTimedContent = function(el, testTime) {
        var scheduledContent = $(el).data('timedContent'),
            currentContent = checkDates(scheduledContent, testTime);

        if (currentContent) {
            $.ajax(currentContent.contentPath + '.html', {
                data: {
                    forceComponentHtmlWrapper: 'true',
                    wcmmode: 'disabled'
                },
                dataType: 'html',
                success: function(html) {
                    $(el).html(html);
                    if (Express.initVideos && typeof Express.initVideos === 'function') {
                        Express.initVideos(el);
                    }
                    if (Express.initTileSlide && typeof Express.initTileSlide === 'function') {
                        Express.initTileSlide(el);
                    }
                    if (Express.initCarouselComponentLayoutSlide
                            && typeof Express.initCarouselComponentLayoutSlide === 'function') {
                        Express.initCarouselComponentLayoutSlide(el);
                    }
                    if (Express.initShopThisLook && typeof Express.initShopThisLook === 'function') {
                        Express.initShopThisLook(el);
                    }
                    if (Express.initYouTube && typeof Express.initYouTube === 'function') {
                        Express.initYouTube(el);
                    }
                    if (Express.initRowLayouts && typeof Express.initRowLayouts === 'function') {
                        Express.initRowLayouts(el);
                    }
                    if (Express.ModalHandler.attachOpenModalOnClick
                            && typeof Express.ModalHandler.attachOpenModalOnClick === 'function') {
                        Express.ModalHandler.attachOpenModalOnClick($(el));
                    }
                }
            });
        }
    };
    if (!isAuthorMode) {
        $('.timedsalecomponentlayout .timed-content-container:not([data-test-time])')
                .each(function(index, el) {
            insertTimedContent(el);
        });
    }

    $('.timedsalecomponentlayout .timed-content-container[data-test-time]').each(function(index, el) {
        insertTimedContent(el, $(el).data('test-time'));
    });
})(jQuery, Express);

/* global jQuery */
(function($) {
    'use strict';

    var productPerRow = 2,
        productCategory = $('.product-category-mobile'),
        sort = productCategory.data('sort'),
        facets = productCategory.data('filters') || '',
        pageNumber = 1,
        itemsPerPage = 24,
        filtering = false,
        scrollingAllowed = true,
        totalProducts = 0,
        ensemblePage = false,
        populateCategory = function(category) {
            var categoryApi = $(category).data('categoryapi'),
                products = $(category).find('.products'),
                loading = $(category).find('.loading');

            $.ajax({
                url: categoryApi + $(category).closest('.product-category-wrapper').data('category-id'),
                data: {
                    filter: encodeURI(facets),
                    sort: sort,
                    page: pageNumber,
                    per_page: itemsPerPage // eslint-disable-line camelcase,no-inline-comments
                },
                beforeSend: function(xhr) {
                    if (filtering) {
                        products.html('');
                    }
                    loading.show();
                    xhr.setRequestHeader('user_key', window.Express.getApiKey());
                },
                success: function(data) {
                    var itemText;

                    scrollingAllowed = true;
                    totalProducts = data.products.totalProductCount || 0;
                    itemText = totalProducts === 1 ? 'item' : 'items';
                    if (data.products && data.products.products && data.products.products.length > 0) {
                        $.each(data.products.products, function(index, product) {
                            products.append(productHtmlTemplate(product));
                        });
                    } else if (data.children && data.children.length > 0
                        && data.children[0].children && data.children[0].children.length > 0
                        && data.children[0].children[0].ensemble) {
                        //A complicated check to see if this is an ensemble page
                        //ensemblePage prevents infinite scrolling, as all ensembles come back with the API request
                        ensemblePage = true;
                        $.each(data.children, function(index, firstTierChild) {
                            $.each(firstTierChild.children, function(secondTierIndex, secondTierChild) {
                                products.append(ensembleHtmlTemplate(secondTierChild));
                                totalProducts += 1;
                            });
                        });
                    }
                    $(category).find('.product-count').html(totalProducts + ' ' + itemText);
                    $(category).find('.product').outerWidth(1 / productPerRow * 100 + '%');
                    $('.product-category-control-mobile').trigger('alter-padding');


                    //If this is the first call to the API for this category, populate the sort and filter modals
                    if (pageNumber === 1 && !filtering) {
                        $('#product-category-sort').trigger('populate-dropdown', [data.sortOrderProperties, data.selectedSort]);
                        if (data.facets && data.facets.facets) {
                            $('#filter-modal').trigger('populate-modal', [data.facets.facets, facets.split(';')]);
                        }
                        $('.product-category-control-mobile .name').trigger('populate-name', [data.categoryName]);
                        $(window).scroll(function() {
                            if ($(window).scrollTop() + $(window).height() > products.offset().top + products.outerHeight()
                                && scrollingAllowed
                                && pageNumber * itemsPerPage < totalProducts
                                && !ensemblePage) {
                                scrollingAllowed = false;
                                pageNumber += 1;
                                filtering = false;
                                populateCategory(category);
                            }
                        });
                    }
                },
                complete: function() {
                    loading.hide();
                }
            });
        },
        productHtmlTemplate = function(product) {
            var onSale = product.salePrice !== '$0.00',
                modifiedPrice = onSale ? product.salePrice : '',
                listPriceClass = onSale ? 'strike-through' : '',
                promoMessage = product.promoMessage || '',
                returnString = '<div class="product" id="' + product.productId + '">'
                    + '<img src="' + product.productImage + '" alt="' + product.name + '"/>'
                    + '<div class="details">'
                    + '<div class="price"><span class="' + listPriceClass + '">' + product.listPrice
                    + '</span> <div class="modified-price"> ' + modifiedPrice + '</div></div>'
                    + '<div class="name">' + product.name + '</div>'
                    + '<div class="promo-message">' + promoMessage + '</div></div>';

            return returnString;
        },
        ensembleHtmlTemplate = function(ensemble) {
            var returnString = '<div class="product" id="' + ensemble.categoryId + '">'
                + '<img src="' + ensemble.ensembleImageURL + '" alt="' + ensemble.categoryName + '"/>'
                + '<div class="details"><div class="name ensemble">' + ensemble.categoryName + '</div></div>';

            return returnString;
        };

    if (productCategory.length > 0) {
        populateCategory(productCategory.first());
    }

    productCategory.on('alter-product-width', function(event, dataProducts) {
        productPerRow = dataProducts;
        $(this).find('.product').outerWidth(1 / productPerRow * 100 + '%');
    });

    productCategory.on('filter-category', function(event, controls) {
        sort = controls.sort;
        facets = controls.filter.join(';');
        pageNumber = 1;
        filtering = true;
        populateCategory(this);
    });
})(jQuery);



/* global jQuery */
(function($) {
    'use strict';

    var applyFilters = function() {
        var controls = {filter: []},
        activeFilters = $('#filter-modal').find('button.active-filter');

        controls.sort = $('#product-category-sort').siblings('.dropdown-items').find('.option.active').first().data('value');

        if (activeFilters.length > 0) {
            $('#product-category-filter').addClass('selected');
        } else {
            $('#product-category-filter').removeClass('selected');
        }

        $.each(activeFilters, function(index, button) {
            controls.filter.push($(button).data('filter-string'));
        });
        $('.product-category-mobile').trigger('filter-category', [controls]);
    };

    $('#product-category-width').click(function() {
        if ($(this).data('product-count') === 1) {
            $(this).data({'product-count': 2});
            $(this).removeClass('one-grid');
            $(this).addClass('two-grid');
            $('.product').removeClass('one-grid-padding');
        } else {
            $(this).data({'product-count': 1});
            $(this).removeClass('two-grid');
            $(this).addClass('one-grid');
            $('.product').addClass('one-grid-padding');
        }
        $('.product-category-mobile').trigger('alter-product-width', [$(this).data('product-count')]);
    });

    $('.product-category-control-mobile').on('alter-padding', function() {
        var productCategoryWidth = $('#product-category-width');
        if (productCategoryWidth.hasClass('one-grid')) {
            $('.product').addClass('one-grid-padding');
        } else if (productCategoryWidth.hasClass('two-grid')) {
            $('.product').removeClass('one-grid-padding');
        }
    });

    $('.modal-control').click(function() {
        var selector = $('#' + $(this).data('modal'));
        selector.show();
        selector.offset({
            top: $(window).height()
        });
        selector.animate({
            top: 0
        }, 500);
    });

    $('#product-category-sort').on('populate-dropdown', function(event, sorts, selectedSort) {
        if (selectedSort !== 'relevance') {
            $('#product-category-sort').addClass('selected');
        }
        $.each(sorts, function(index, sort) {
            var active = sort.sortValue === selectedSort ? 'active' : '';
            $('#product-category-sort').siblings('.dropdown-items').append(
                '<div class="option ' + active + '" data-value="' + sort.sortValue + '">'
                + sort.sortDisplayName + '</div>');
        });
        $('.option').unbind('click');
        $('.option').click(function() {
            var dropDownItems = $(this).closest('.dropdown-items');

            $(this).siblings('.option').removeClass('active');
            $(this).addClass('active');
            dropDownItems.slideUp(500);
            dropDownItems.siblings('.dropdown-control').removeClass('active').addClass('selected');
            applyFilters();
        });
    });

    $('#product-category-sort').click(function() {
        var items = $(this).siblings('.dropdown-items');

        if (!$(this).hasClass('active')) {
            items.slideDown(500);
            items.offset({
                top: $(this).closest('.control-actions').offset().top + $(this).closest('.control-actions').outerHeight(),
                left: 0
            });
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
            $(this).siblings('.dropdown-items').slideUp(500);
        }
    });

    $('#filter-modal').on('populate-modal', function(event, facets, selectedFacets) {
        $.each(facets, function(index, facet) {
            $('#filter-modal').find('.content').append('<div class="section" id="' + facet.facetId + '">'
                + '<h3 class="facet-name">' + facet.name + '</h3>'
                + '<div class="facets"></div>');
            $.each(facet.values, function(valueIndex, value) {
                $('#' + facet.facetId).find('.facets').append('<button data-filter-string="'
                    + facet.facetId + ':' + value + '">' + value + '</button>');
            });

        });

        if (selectedFacets && selectedFacets.length > 0 && selectedFacets[0] !== '') {
            $('#product-category-filter').addClass('selected');
            $.each(selectedFacets, function(index, facet) {
                $('[data-filter-string="' + facet + '"').addClass('active-filter');
            });
        }

        $('.facets button').click(function() {
            if ($(this).hasClass('active-filter')) {
                $(this).removeClass('active-filter');
            } else {
                $(this).addClass('active-filter');
            }
        });
    });

    $('.product-category-control-mobile .name').on('populate-name', function(event, name) {
        $(this).text(name);
    });


    $('button.modal-action').click(function() {
        var modal = $(this).closest('.modal');
        modal.animate({
            top: $(window).height()
        }, 500, function() {
            modal.hide();
        });
    });

    $('button.apply').click(function() {
        applyFilters();
    });

    $('button.reset').click(function() {
        $('#product-category-filter').removeClass('selected');
        $('#product-category-sort').removeClass('selected');
        $('#product-category-sort').siblings('.dropdown-items').find('.active').removeClass('active');
        $('#filter-modal').find('button.active-filter').removeClass('active-filter');
        $('.product-category-mobile').trigger('filter-category', [{sort: 'relevance', filter: []}]);
    });

    if ($('.control-actions').length > 0) {
        $(window).scroll(function() {
            var controlActionsLocation = $('.control-actions').first().offset().top,
            fixed = false;

            if ($(window).scrollTop() > controlActionsLocation && !fixed) {
                fixed = true;
                $('.control-actions').css({
                    position: 'fixed',
                    top: 0,
                    left: 0
                });
            } else if ($(window).scrollTop() < controlActionsLocation && fixed) {
                fixed = false;
                $('.control-actions').css({
                    position: 'relative'
                });
            }
            $('.control-actions').find('.dropdown-items').offset({
                top: $('.control-actions').first().offset().top + $('.control-actions').first().outerHeight()
            });
        });
    }
})(jQuery);

/* global jQuery */
(function($) {
    'use strict';

    var productCategory = $('.product-category-desktop').first(),
        productPerRow = productCategory.data('items-per-row'),
        sort = productCategory.data('sort'),
        facets = productCategory.data('filters') || '',
        pageNumber = productCategory.data('page-number') || 1,
        itemsPerPage = productCategory.data('items-per-page') || 70,
        totalProducts = 0,
        productNumberFirstPage = itemsPerPage,
        inlinePositions = [],
        sortDefault = 'relevance',
        populateCategory = function(category, opening) {
            var categoryApi = $(category).data('categoryapi'),
                products = $(category).find('.products'),
                loading = $(category).find('.loading'),
                outerIndex,
                classString,
                historyString = window.location.href.substr(0, window.location.href.indexOf('?'));

            //update the URL to match the page, filter, and sort
            if (!opening) {
                if (sort !== sortDefault) {
                    historyString = addQueryParameter('sort', sort, historyString);
                }

                if (facets) {
                    historyString = addQueryParameter('filters', facets, historyString);
                }

                if (pageNumber !== 1) {
                    historyString = addQueryParameter('page', pageNumber, historyString);
                }

                if (historyString !== window.location.href) {
                    history.pushState({
                        facets: facets,
                        sort: sort,
                        pageNumber: pageNumber
                    },
                        'Category page with filters, pagination, or sorting',
                        historyString);
                }
            }
            //if you're on the first page, inline content comes in
            if (pageNumber === 1 && !$.trim(facets) && $.trim(sort) === sortDefault) {
                if (!opening) {
                    //if the product grid already exists, add the inline-filler classes back in
                    $.each(inlinePositions, function(unusedIndex, inlineIndex) {
                        $($('.product')[inlineIndex]).addClass('inline-filler');
                    });
                } else {
                    //if not, create the grid
                    for (outerIndex = 0; outerIndex < itemsPerPage; outerIndex++) {
                        classString = inlinePositions.indexOf(outerIndex) !== -1 ? 'inline-filler' : '';
                        products.append('<div class="product ' + classString + '"></div>');
                    }
                }
            } else if (opening) {
                //create the grid, but don't add inline content because of filters or sorting or pagination
                for (outerIndex = 0; outerIndex < itemsPerPage; outerIndex++) {
                    products.append('<div class="product"></div>');
                }
            } else {
                //product grid exists, and remove the inline content
                $('.inline-filler').removeClass('inline-filler');
            }

            $.ajax({
                url: categoryApi + $(category).closest('.product-category-wrapper').data('category-id'),
                data: {
                    filter: encodeURI(facets),
                    sort: sort,
                    page: pageNumber,
                    per_page: pageNumber === 1 ? productNumberFirstPage : itemsPerPage // eslint-disable-line camelcase,no-inline-comments
                },
                beforeSend: function(xhr) {
                    $(products).css({
                        'visibility': 'hidden'
                    });
                    $('.inline-content').hide();
                    loading.show();
                    xhr.setRequestHeader('user_key', window.Express.getApiKey());
                },
                success: function(data) {
                    var itemsOnPage,
                        itemNumberRange,
                        numberOfPages,
                        active,
                        i,
                        parameterString;

                    totalProducts = data.products.totalProductCount || 0;
                    if (data.products && data.products.products && data.products.products.length > 0) {
                        $('.product').html('');
                        $.each(data.products.products, function(index, product) {
                            var productSpot = $('.product').not('.inline-filler')[index];
                            $(productSpot).html(productHtmlTemplate(product));
                            $(productSpot).addClass(product.productId);
                            checkImageLoad(productSpot, products);
                        });
                    } else if (data.children && data.children.length > 0
                        && data.children[0].children && data.children[0].children.length > 0
                        && data.children[0].children[0].ensemble) {
                        //A complicated check to see if this is an ensemble page
                        $.each(data.children, function(index, firstTierChild) {
                            $.each(firstTierChild.children, function(secondTierIndex, secondTierChild) {
                                var productSpot = $('.product').not('.inline-filler')[index];
                                $(productSpot).html(ensembleHtmlTemplate(secondTierChild));
                                $(productSpot).addClass(secondTierChild.categoryId);
                                checkImageLoad(productSpot, products);
                            });
                        });
                    }

                    itemsOnPage = data.products && data.products.products ? data.products.products.length : 0;
                    itemNumberRange = (itemsOnPage > 0) ? (itemsPerPage * (pageNumber - 1) + 1)
                    + '-' + (itemsPerPage * (pageNumber - 1) + itemsOnPage) : '0';
                    $(category).find('.product-count').text(itemNumberRange + ' of ' + totalProducts);
                    $(category).find('.product').outerWidth(1 / productPerRow * 100 + '%');
                    if (opening) {
                        if (data.facets && data.facets.facets) {
                            $(document).trigger('populate-filters', [data.facets.facets, facets.split(';')]);
                        }
                        $(document).trigger('populate-sort', [data.sortOrderProperties, data.selectedSort]);
                    }

                    $('.pagination').html('');
                    if (itemsPerPage < totalProducts) {
                        numberOfPages = Math.floor((totalProducts - 1) / itemsPerPage + 1);
                        for (i = 1; i <= numberOfPages; i++) {
                            active = i === pageNumber ? 'active' : ''; // eslint-disable-line
                            parameterString = window.location.href.indexOf('?') !== -1 ? '&page=' + i : '?page=' + i;
                            $(category).find('.pagination').append(
                                '<a  class="' + active + '" '
                                + 'href="' + window.location.href + parameterString + '" data-value="' + i + '">' + i + '</a>'
                            );
                        }
                        $(category).find('.pagination a').click(function(event) {
                            event.preventDefault();
                            if (!$(this).hasClass('active')) {
                                pageNumber = $(this).data('value');
                                $(category).find('.pagination .active').removeClass('active');
                                $(this).addClass('active');
                                populateCategory(category, false);
                            }
                        });
                    }

                },
                complete: function() {
                    loading.hide();
                }
            });
        },
        productHtmlTemplate = function(product) {
            var onSale = product.salePrice !== '$0.00',
                modifiedPrice = onSale ? product.salePrice : '',
                listPriceClass = onSale ? 'strike-through' : '',
                promoMessage = product.promoMessage || '',
                returnString = '<img src="' + product.productImage + '" alt="' + product.name + '"/>'
                    + '<div class="details">'
                    + '<div class="price"><span class="' + listPriceClass + '">' + product.listPrice
                    + '</span> <div class="modified-price">' + modifiedPrice + '</div></div>'
                    + '<div class="name">' + product.name + '</div>'
                    + '<div class="promo-message">' + promoMessage + '</div>';

            return returnString;
        },
        ensembleHtmlTemplate = function(ensemble) {
            var returnString = '<div class="product ' + ensemble.categoryId + '">'
                + '<img src="' + ensemble.ensembleImageURL + '" alt="' + ensemble.categoryName + '"/>'
                + '<div class="details"><div class="name ensemble">' + ensemble.categoryName + '</div></div>';

            return returnString;
        },
        checkImageLoad = function(productSpot, products) {
            if (pageNumber === 1 && !$.trim(facets) && $.trim(sort) === sortDefault) {
                $(productSpot).find('img').on('load', function() {
                    $(productSpot).addClass('.loaded');
                    if ($('.product.loaded').not('inline-filler').length === 0) {
                        placeInlineContent(products);
                        $(products).css({
                            'visibility': 'visible'
                        });
                    }
                });
            } else {
                $(products).css({
                    'visibility': 'visible'
                });
            }
        },
        placeInlineContent = function(products) {
            $('.inline-content').each(function(index, content) {
                var width = parseInt($(content).data('width'), 10),
                    row = parseInt($(content).data('row'), 10),
                    column = parseInt($(content).data('column'), 10),
                    startingIndex = (row - 1) * productPerRow + column - 1,
                    startingFiller = $('.product')[startingIndex],
                    i,
                    maxHeight = 0,
                    beginningOfRow = (row - 1) * productPerRow;

                for (i = 0; i < productPerRow; i++) {
                    if ($($('.product')[beginningOfRow + i]).height() > maxHeight) {
                        maxHeight = $($('.product')[beginningOfRow + i]).height();
                    }
                }
                $(content).show();
                $(content).css({'position': 'absolute'});
                $(content).offset({
                    top: ($(startingFiller).offset().top
                    + parseInt($(startingFiller).css('padding-top'), 10)),
                    left: $(startingFiller).offset().left
                });
                $(content).outerWidth(width / (productPerRow * 1.0) * $(products).width() + 'px');
                $(content).height(maxHeight);

            });
        },
        addQueryParameter = function(key, value, href) {
            var parameterRegex = new RegExp(key + '=[^&]*');
            if (href.match(parameterRegex)) {
                return href.replace(parameterRegex, key + '=' + value);
            } else {
                return href.indexOf('?') === -1 ? href + '?' + key + '=' + value : href + '&' + key + '=' + value;
            }
        };

    if (pageNumber === 1) {
        $('.inline-content').each(function(index, content) {
            var row = parseInt($(content).data('row'), 10),
                column = parseInt($(content).data('column'), 10),
                width = parseInt($(content).data('width'), 10),
                i = 0;
            productNumberFirstPage -= width;
            for (i; i < width; i++) {
                inlinePositions.push((row - 1) * productPerRow + column - 1 + i);
            }
        });
    }

    if ($('.inline-content.hide').length > 0) {
        $(window).resize(function() {
            placeInlineContent($('.products'));
        });
    }

    if (productCategory.length > 0) {
        populateCategory(productCategory, true);

        window.onpopstate = function(event) {
            facets = event.state && event.state.facets ? event.state.facets : '';
            sort = event.state && event.state.sort ? event.state.sort : sortDefault;
            pageNumber = event.state && event.state.pageNumber ? event.state.pageNumber : 1;
            populateCategory(productCategory, false);
            $('.filter-option').removeClass('active');
            $.each(facets.split(';'), function(index, facet) {
                $('[data-filter-string="' + facet + '"').addClass('active');
            });
        };
    }

    $(document).on('filter-category', function(event, controls) {
        sort = controls.sort;
        facets = controls.filter.join(';');
        pageNumber = 1;
        populateCategory(productCategory, false);
    });


})(jQuery);

/* global jQuery */
(function($) {
    'use strict';
    var productSubNav = $('.product-subnav'),
    productEventTitle = productSubNav.find('.subnav-title'),
    specialCategoryTitle = productSubNav.find('.special-category-type-title'),
    productSubnavUl = productSubNav.find('> ul'),

    filtersHtmlTemplate = function(facet) {
        return '<li class="filter">'
                + '<div class="filter-title">' + facet.name + '</div>'
                + '<ul class="filter-options ' + facet.facetId + '"></ul>'
                + '</li>';
    },

    filterCategory = function() {
        var controls = {filter: []},
        activeFilters = $('.filter-list .filter-option.active');

        controls.sort = $('.sort-list .sort-option.active').first().data('value');

        $.each(activeFilters, function(index, button) {
            controls.filter.push($(button).data('filter-string'));
        });
        $(document).trigger('filter-category', [controls]);
    };

    productEventTitle.on('click', function() {
        productSubnavUl.slideToggle();
        $(this).toggleClass('subnav-closed');
    });

    specialCategoryTitle.on('click', function() {
        $(this).siblings('ul').slideToggle();
        $(this).toggleClass('occasion-expanded');
    });

    $(document).on('populate-sort', function(event, sorts, selectedSort) {
        $('.sort-list').html('');
        $.each(sorts, function(index, sort) {
            var active = sort.sortValue === selectedSort ? 'active' : '';
            $('.sort-list').append(
                '<li class="sort-option ' + active + '" data-value="' + sort.sortValue + '">'
                + sort.sortDisplayName + '</li>');
        });

        $('.sort-option').click(function() {
            if (!$(this).hasClass('active')) {
                $('.sort-option.active').removeClass('active');
            }

            $(this).addClass('active');
            filterCategory();
        });
    });

    $(document).on('populate-filters', function(event, facets, selectedFacets) {
        $('.filter-list').html('');
        $.each(facets, function(index, facet) {
            $('.filter-list').append(filtersHtmlTemplate(facet));

            $.each(facet.values, function(valueIndex, value) {
                $('.' + facet.facetId).append('<li data-filter-string="'
                    + facet.facetId + ':' + value + '" '
                    + 'class="filter-option ' + value.split(' ')[0] + '">' + value + '</li>');
            });
        });

        $('.filter-title').click(function() {
            $(this).siblings('.filter-options').slideToggle();

            if ($(this).hasClass('expanded')) {
                $(this).removeClass('expanded');
            } else {
                $(this).addClass('expanded');
            }
        });

        $('.filter-option').click(function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
            filterCategory();
        });

        if (selectedFacets && selectedFacets.length > 0 && selectedFacets[0] !== '') {
            $.each(selectedFacets, function(index, facet) {
                $('[data-filter-string="' + facet + '"').addClass('active');
            });
        }
    });

    $('.category-sort .header').click(function() {
        $(this).siblings('.sort-list').slideToggle();

        if ($(this).hasClass('expanded')) {
            $(this).removeClass('expanded');
        } else {
            $(this).addClass('expanded');
        }
    });
})(jQuery);

/* global jQuery */
(function($) {
    'use strict';

    var hideBannerSectionPipesAtBeginningOfLines = function(bannerContainer) {
            var $bannerSections = $(bannerContainer).find('.richtext, .calltoactioncomponent'),
                bannerContainerWidth = $(bannerContainer).width(),
                currentLineWidth = 0;

            $bannerSections.each(function(i, bannerSection) {
                // Get the exact width, not the rounded value provided by jQuery
                var bannerSectionWidth = $(bannerSection)[0].getBoundingClientRect().width;

                currentLineWidth += bannerSectionWidth;

                if (currentLineWidth > bannerContainerWidth) {
                    currentLineWidth = bannerSectionWidth;
                    $(bannerSection).addClass('hidePipe');
                } else {
                    $(bannerSection).removeClass('hidePipe');
                }
            });
        },
        adjustBannerPipes = function() {
            $('.bannercomponent .banner-container').each(function(i, bannerContainer) {
                hideBannerSectionPipesAtBeginningOfLines(bannerContainer);
            });
        },
        repositionCaret = function($banner) {
            var bannerCaret = $banner.find('.banner-caret');

            if (bannerCaret) {
                bannerCaret = bannerCaret.detach();
                $banner.find('.new').before(bannerCaret);
            }
        };

    if (window.Express.isAuthormode) {
        // authormode requires moving .banner-caret before the parsys placeholder in the DOM
        $('.bannercomponent .banner-container').each(function() {
            repositionCaret($(this));
        });

        $('.bannercomponent').on('DOMNodeInserted', function() {
            repositionCaret($(this));
        });
    }

    $(document).ready(adjustBannerPipes);
    $(window).resize(adjustBannerPipes);
})(jQuery);

