(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,s=f.length;i<s;i++){var l=f[i];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var u=o.props[l],d=r[l]||new Set;d.has(u)?a=!1:(d.add(u),r[l]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,n){"use strict";n.d(t,"b",(function(){return V})),n.d(t,"a",(function(){return Z}));var r=n("nKUr"),o=n("q1tI"),a=n.n(o),c=n("17x9"),i=n.n(c);const s=a.a.createContext({hoverIndex:-1}),l=a.a.createContext({}),u=a.a.createContext({}),d=a.a.createContext({}),f=Object.freeze({ENTER:"Enter",ESC:"Escape",SPACE:" ",HOME:"Home",END:"End",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",DOWN:"ArrowDown"}),p=Object.freeze({RESET:0,SET:1,UNSET:2,INCREASE:3,DECREASE:4,FIRST:5,LAST:6}),m=Object.freeze({CLICK:"click",CANCEL:"cancel",BLUR:"blur",RESIZE:"resize",SCROLL:"scroll"}),h=e=>({[e?e+"ClassName":"className"]:i.a.oneOfType([i.a.string,i.a.func]),[e?e+"Styles":"styles"]:i.a.oneOfType([i.a.object,i.a.func])}),b={...h(),...h("arrow"),"aria-label":i.a.string,arrow:i.a.bool,offsetX:i.a.number,offsetY:i.a.number,align:i.a.oneOf(["start","center","end"]),direction:i.a.oneOf(["left","right","top","bottom"]),position:i.a.oneOf(["auto","anchor","initial"]),overflow:i.a.oneOf(["auto","visible","hidden"]),children:i.a.node.isRequired},g={...b,id:i.a.oneOfType([i.a.string,i.a.number]),animation:i.a.bool,debugging:i.a.bool,viewScroll:i.a.oneOf(["auto","close","initial"]),onClick:i.a.func},y={offsetX:0,offsetY:0,align:"start",direction:"bottom",position:"auto",overflow:"visible"},O={...y,animation:!0,viewScroll:"initial"},v=(e,t)=>Object.defineProperty(e,"__name__",{value:t,writable:!1}),j=(e,...t)=>"function"===typeof e?e(...t):e,_=(e,t,n={})=>(r,o)=>{let a=t?`${e}__${t}`:e,c=a;for(const e of Object.keys(n)){const t=n[e];t&&(c+=` ${a}--`,c+=!0===t?e:`${e}-${t}`)}return"function"===typeof r&&(r=r(o||n)),"string"===typeof r&&(r=r.trim())&&(c+=" "+r),c},x=e=>e&&"object"===typeof e,E=(e,t)=>{if("function"===typeof e)return e(t);if(!x(e))return;if(!t)return e;const n={};for(const r of Object.keys(e)){const o=e[r];if(x(o)){const e=t[r];if("string"===typeof e)for(const t of Object.keys(o)){const r=o[t];x(r)?t===e&&Object.assign(n,r):n[t]=r}else e&&Object.assign(n,o)}else n[r]=o}return n},w=(e,t,n)=>{const[r,a]=Object(o.useState)(!1),c=Object(o.useMemo)(()=>[f.SPACE,f.ENTER,...n?[n]:[]],[n]),i=Object(o.useCallback)(()=>a(!1),[]);return{isActive:r,onPointerDown:Object(o.useCallback)(()=>{t||a(!0)},[t]),onPointerUp:i,onPointerLeave:i,onKeyDown:Object(o.useCallback)(n=>{e&&!t&&c.includes(n.key)&&a(!0)},[e,t,c]),onKeyUp:Object(o.useCallback)(e=>{c.includes(e.key)&&a(!1)},[c]),onBlur:Object(o.useCallback)(e=>{e.currentTarget.contains(e.relatedTarget)||a(!1)},[])}},C=(e,t)=>{const n=Object(o.useRef)(null),{isParentOpen:r,hoverIndex:a,hoverIndexDispatch:c}=Object(o.useContext)(s),i=a===t,l=!!e||void 0;return Object(o.useEffect)(()=>{i&&r&&n.current&&n.current.focus()},[i,r]),{ref:n,isHovering:i,isDisabled:l,setHover:Object(o.useCallback)(()=>{l||c({type:p.SET,index:t})},[l,c,t]),unsetHover:Object(o.useCallback)(()=>{c({type:p.UNSET,index:t})},[c,t])}},M=(e,t)=>{const n=Object(o.useRef)(t);Object(o.useEffect)(()=>{n.current!==t&&j(e,{open:t}),n.current=t},[e,t])},T=Object.freeze({INITIAL:"initial",FIRST:"first",LAST:"last"}),k=Object.freeze({UNMOUNTED:0,CLOSED:1,OPEN:2}),R=Object.freeze({OPEN:0,CLOSE:1,TOGGLE:2}),S=(e=!0)=>{const[t,n]=Object(o.useState)({position:T.INITIAL}),[r,a]=Object(o.useReducer)((function(t,{type:n}){switch(n){case R.OPEN:return k.OPEN;case R.CLOSE:return t===k.OPEN?e?k.CLOSED:k.UNMOUNTED:t;case R.TOGGLE:return t===k.OPEN?e?k.CLOSED:k.UNMOUNTED:k.OPEN;default:throw new Error("menuStateReducer: unknown action type")}}),k.UNMOUNTED);return{isMounted:r!==k.UNMOUNTED,isOpen:r===k.OPEN,menuItemFocus:t,openMenu:Object(o.useCallback)((e=T.INITIAL)=>{n({position:e}),a({type:R.OPEN})},[]),closeMenu:Object(o.useCallback)(()=>a({type:R.CLOSE}),[]),toggleMenu:Object(o.useCallback)((e=T.INITIAL)=>{n({position:e}),a({type:R.TOGGLE})},[])}},N=v(a.a.memo(a.a.forwardRef((function({id:e,className:t,styles:n,isOpen:r,disabled:o,children:c,onClick:i,onKeyDown:s},l){const u=Object.freeze({open:r});return a.a.createElement("button",{id:e,className:_("rc-menu-button",null,u)(t),style:E(n,u),"aria-haspopup":"true","aria-expanded":r,"aria-disabled":o,ref:l,disabled:o,onClick:i,onKeyDown:s},c)}))),"MenuButton");N.propTypes={...h(),id:i.a.oneOfType([i.a.string,i.a.number]),isOpen:i.a.bool,disabled:i.a.bool,children:i.a.node.isRequired,onClick:i.a.func,onKeyDown:i.a.func};const I=v(a.a.memo((function({ariaLabel:e,className:t,styles:n,arrowClassName:r,arrowStyles:c,anchorPoint:i,anchorRef:l,containerRef:u,arrow:h,align:b,direction:g,position:y,overflow:O,isOpen:v,isMounted:x,isDisabled:w,menuItemFocus:C,offsetX:M,offsetY:k,children:R,onKeyDown:S,onAnimationEnd:N,onClose:I,...L}){const[A,D]=Object(o.useState)({x:0,y:0}),[P,H]=Object(o.useState)({}),[F,U]=Object(o.useState)(-1),[B,K]=Object(o.useState)(!1),[Y,$]=Object(o.useState)(g),{animation:z,viewScroll:X}=Object(o.useContext)(d),q=Object(o.useRef)(null),G=Object(o.useRef)(null),W=Object(o.useRef)(0),J=Object(o.useRef)(v),[Q,V]=Object(o.useReducer)((function(e,{type:t,index:n}){switch(t){case p.RESET:return-1;case p.SET:return n;case p.UNSET:return e===n?-1:e;case p.DECREASE:{let t=e;return t--,t<0&&(t=W.current-1),t}case p.INCREASE:{let t=e;return t++,t>=W.current&&(t=0),t}case p.FIRST:return W.current>0?0:-1;case p.LAST:return W.current>0?W.current-1:-1;default:throw new Error("hoverIndexReducer: unknown action type")}}),-1);const Z=Object(o.useMemo)(()=>{if(!x)return null;let e=0;const t=["MenuDivider","MenuHeader","MenuItem","FocusableItem","MenuRadioGroup","SubMenu"],n=(e,t,n)=>!!n.includes(t.type&&t.type.__name__)||(console.warn((t.type||t)+" is ignored.\n",`The permitted children inside a ${e} are ${n.join(", ")}.`),!1),r=a.a.Children.map(R,r=>{if(!n("Menu or SubMenu",r,t))return null;if("MenuDivider"===r.type.__name__||"MenuHeader"===r.type.__name__)return r;if("MenuRadioGroup"===r.type.__name__){const t=["MenuItem"],o={type:"radio"},c=a.a.Children.map(r.props.children,r=>n("MenuRadioGroup",r,t)?r.props.disabled?a.a.cloneElement(r,o):a.a.cloneElement(r,{...o,index:e++}):null);return a.a.cloneElement(r,{children:c})}return r.props.disabled?r:a.a.cloneElement(r,{index:e++})});return W.current=e,r},[x,R]),ee=Object(o.useCallback)(()=>{const e=q.current.getBoundingClientRect(),t=u.current.getBoundingClientRect(),n=document.documentElement.clientWidth,r=document.documentElement.clientHeight,o=e=>t.left+e,a=r=>t.left+r+e.width-n,c=e=>t.top+e,i=n=>t.top+n+e.height-r;return{menuRect:e,containerRect:t,viewportWidth:n,viewportHeight:r,getLeftOverflow:o,getRightOverflow:a,getTopOverflow:c,getBottomOverflow:i,confineHorizontally:e=>{let t=o(e);if(t<0)e-=t;else{const n=a(e);n>0&&(t=o(e-=n),t<0&&(e-=t))}return e},confineVertically:e=>{let t=c(e);if(t<0)e-=t;else{const n=i(e);n>0&&(t=c(e-=n),t<0&&(e-=t))}return e}}},[u]),te=Object(o.useCallback)((e,t,n,r)=>{if(!h)return;let o=t.left-n.left-e+t.width/2;const a=1.25*G.current.offsetWidth;o=Math.max(a,o),o=Math.min(o,r.width-a),H({x:o})},[h]),ne=Object(o.useCallback)((e,t,n,r)=>{if(!h)return;let o=t.top-n.top-e+t.height/2;const a=1.25*G.current.offsetHeight;o=Math.max(a,o),o=Math.min(o,r.height-a),H({y:o})},[h]),re=Object(o.useCallback)(({anchorRect:e,containerRect:t,menuRect:n},{placeLeftorRightY:r,placeLeftX:o,placeRightX:a},{getLeftOverflow:c,getRightOverflow:i,confineHorizontally:s,confineVertically:l})=>{let u,d,f,p=g,m=r;return"initial"!==y&&(m=l(m),"anchor"===y&&(m=Math.min(m,e.bottom-t.top),m=Math.max(m,e.top-t.top-n.height))),"left"===p?(u=o,"initial"!==y&&(d=c(u),d<0&&(f=i(a),(f<=0||-d>f)&&(u=a,p="right")))):(u=a,"initial"!==y&&(f=i(u),f>0&&(d=c(o),(d>=0||-d<f)&&(u=o,p="left")))),"auto"===y&&(u=s(u)),ne(m,e,t,n),{x:u,y:m,computedDirection:p}},[ne,g,y]),oe=Object(o.useCallback)(({anchorRect:e,containerRect:t,menuRect:n},{placeToporBottomX:r,placeTopY:o,placeBottomY:a},{getTopOverflow:c,getBottomOverflow:i,confineHorizontally:s,confineVertically:l})=>{let u,d,f,p="top"===g?"top":"bottom",m=r;return"initial"!==y&&(m=s(m),"anchor"===y&&(m=Math.min(m,e.right-t.left),m=Math.max(m,e.left-t.left-n.width))),"top"===p?(u=o,"initial"!==y&&(d=c(u),d<0&&(f=i(a),(f<=0||-d>f)&&(u=a,p="bottom")))):(u=a,"initial"!==y&&(f=i(u),f>0&&(d=c(o),(d>=0||-d<f)&&(u=o,p="top")))),"auto"===y&&(u=l(u)),te(m,e,t,n),{x:m,y:u,computedDirection:p}},[te,g,y]),ae=Object(o.useCallback)((e,t)=>{const{menuRect:n,containerRect:r,...o}=e;let a=M,c=k;h&&("left"===g||"right"===g?a+=G.current.offsetWidth:c+=G.current.offsetHeight);const i=t.current.getBoundingClientRect(),s=i.left-r.left-n.width-a,l=i.right-r.left+a,u=i.top-r.top-n.height-c,d=i.bottom-r.top+c;let f,p;"end"===b?(f=i.right-r.left-n.width,p=i.bottom-r.top-n.height):"center"===b?(f=i.left-r.left-(n.width-i.width)/2,p=i.top-r.top-(n.height-i.height)/2):(f=i.left-r.left,p=i.top-r.top),f+=a,p+=c;const m={anchorRect:i,containerRect:r,menuRect:n},y={placeLeftX:s,placeRightX:l,placeLeftorRightY:p,placeTopY:u,placeBottomY:d,placeToporBottomX:f};switch(g){case"left":case"right":return re(m,y,o);case"top":case"bottom":default:return oe(m,y,o)}},[h,b,g,M,k,re,oe]),ce=Object(o.useCallback)((e,t)=>{const{menuRect:n,containerRect:r,getLeftOverflow:o,getRightOverflow:a,getTopOverflow:c,getBottomOverflow:i,confineHorizontally:s,confineVertically:l}=e;let u,d;u=t.x-r.left,d=t.y-r.top;const f=a(u);if(f>0){const e=u-n.width,t=o(e);(t>=0||-t<f)&&(u=e),u=s(u)}let p="bottom";const m=i(d);if(m>0){const e=d-n.height,t=c(e);(t>=0||-t<m)&&(d=e,p="top"),d=l(d)}return{x:u,y:d,computedDirection:p}},[]),ie=Object(o.useCallback)(()=>{const e=ee();let t={computedDirection:"bottom"};i?t=ce(e,i):l&&(t=ae(e,l));let{x:n,y:r,computedDirection:o}=t;if("visible"!==O){const{menuRect:t,getTopOverflow:n,getBottomOverflow:o}=e;U(e=>{let a=-1;const c=o(r);if(c>0||0===c&&e>=0)a=t.height-c;else{const o=n(r);(o<0||0===o&&e>=0)&&(a=t.height+o,a>=0&&(r-=o))}return a})}D({x:n,y:r}),$(o)},[i,l,O,ee,ae,ce]);Object(o.useLayoutEffect)(()=>{v&&ie()},[v,ie]),Object(o.useEffect)(()=>{if(!v||"initial"===X)return;let e=X;"auto"===e&&"visible"!==O&&(e="close");const t=()=>{"auto"===e?ie():j(I,{reason:m.SCROLL})};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[v,O,I,X,ie]),Object(o.useLayoutEffect)(()=>{z&&x&&(v?K(!1):v!==J.current&&K(!0)),J.current=v},[z,x,v]),Object(o.useEffect)(()=>{v||(V({type:p.RESET}),z||U(-1));const e=setTimeout(()=>{v&&!q.current.contains(document.activeElement)&&(q.current.focus(),C.position===T.FIRST?V({type:p.FIRST}):C.position===T.LAST&&V({type:p.LAST}))},100);return()=>clearTimeout(e)},[z,v,C]);const se=Object(o.useMemo)(()=>({isParentOpen:v,hoverIndex:Q,hoverIndexDispatch:V}),[v,Q]),le={open:v,closing:B,animation:z,dir:z&&Y},ue=Object.freeze({...le,dir:Y}),de=Object.freeze({dir:Y});let fe=null;return F>=0&&(fe={maxHeight:F,overflow:O}),a.a.createElement(a.a.Fragment,null,x&&a.a.createElement("ul",Object.assign({},L,{className:_("rc-menu",null,le)(t,ue),role:"menu",tabIndex:"-1","aria-disabled":w,"aria-label":e,ref:q,onKeyDown:e=>{let t=!1;switch(e.key){case f.HOME:V({type:p.FIRST}),t=!0;break;case f.END:V({type:p.LAST}),t=!0;break;case f.UP:V({type:p.DECREASE}),t=!0;break;case f.DOWN:V({type:p.INCREASE}),t=!0;break;case f.SPACE:e.target&&e.target.className.includes("rc-menu")&&e.preventDefault()}t&&(e.preventDefault(),e.stopPropagation()),j(S,e)},onAnimationEnd:e=>{B&&(K(!1),U(-1)),j(N,e)},style:{...E(n,ue),...fe,left:A.x+"px",top:A.y+"px"}}),h&&a.a.createElement("div",{className:_("rc-menu","arrow",de)(r),style:{...E(c,de),left:P.x&&P.x+"px",top:P.y&&P.y+"px"},ref:G,role:"presentation"}),a.a.createElement(s.Provider,{value:se},Z)))})),"MenuList"),L=(e,t,n,r,c,i,s,u,p)=>{const h=Object(o.useRef)(null),b=Object(o.useMemo)(()=>({animation:n,debugging:r,viewScroll:c}),[n,r,c]),g=Object(o.useMemo)(()=>({handleClick(e,t,n){n&&e.key===f.SPACE||j(u,{key:e.key,reason:m.CLICK}),t||j(s,e)},handleClose(e){j(u,{key:e,reason:m.CLICK})}}),[s,u]);return a.a.createElement("div",{id:t,className:_("rc-menu-container")(),role:"presentation",ref:h,onKeyDown:({key:e})=>{switch(e){case f.ESC:j(u,{key:e,reason:m.CANCEL})}},onBlur:t=>{!e.isOpen||t.currentTarget.contains(t.relatedTarget)||r||(j(u,{reason:m.BLUR}),p&&(p.current=!0,setTimeout(()=>p.current=!1,300)))}},a.a.createElement(d.Provider,{value:b},a.a.createElement(l.Provider,{value:g},a.a.createElement(I,Object.assign({},e,{containerRef:h,onClose:u}),i))))},A=a.a.memo((function({"aria-label":e,id:t,className:n,styles:r,arrowClassName:c,arrowStyles:i,animation:s,debugging:l,viewScroll:u,keepMounted:d,arrow:p,align:m,direction:h,position:b,overflow:g,menuButton:y,offsetX:O,offsetY:v,children:_,onClick:x,onChange:E}){const{isMounted:w,isOpen:C,menuItemFocus:k,openMenu:R,closeMenu:N}=S(d);M(E,C);const I=Object(o.useRef)(!1),A=Object(o.useRef)(null),D=j(y,{open:C});if(!D)throw new Error("Menu requires a menuButton prop.");const P=Object(o.useCallback)(e=>{N(),e.key&&A.current.focus()},[N]),H=Object(o.useCallback)(e=>{I.current||R(0===e.detail?T.FIRST:T.INITIAL)},[R]),F=Object(o.useCallback)(e=>{let t=!1;switch(e.key){case f.UP:R(T.LAST),t=!0;break;case f.DOWN:R(T.FIRST),t=!0}t&&e.preventDefault()},[R]),U=Object(o.useMemo)(()=>{if(!D)return null;const e={ref:A,onClick:H,onKeyDown:F};return"MenuButton"===D.type.__name__&&(e.isOpen=C),a.a.cloneElement(D,e)},[D,C,H,F]),B=L({ariaLabel:e||("string"===typeof D.props.children?D.props.children:"Menu"),className:n,styles:r,arrowClassName:c,arrowStyles:i,anchorRef:A,arrow:p,align:m,direction:h,position:b,overflow:g,isOpen:C,isMounted:w,menuItemFocus:k,offsetX:O,offsetY:v},t,s,l,u,_,x,P,I);return a.a.createElement(a.a.Fragment,null,U,B)}));A.propTypes={...g,keepMounted:i.a.bool,menuButton:i.a.oneOfType([i.a.element,i.a.func]).isRequired,onChange:i.a.func},A.defaultProps={...O,keepMounted:!0};const D=a.a.memo((function({"aria-label":e,id:t,className:n,styles:r,arrowClassName:o,arrowStyles:a,animation:c,debugging:i,viewScroll:s,anchorPoint:l,anchorRef:u,arrow:d,align:f,direction:p,position:m,overflow:h,isOpen:b,isMounted:g,menuItemFocus:y,offsetX:O,offsetY:v,children:j,onClick:_,onClose:x,...E}){return L({...E,ariaLabel:e||"Menu",className:n,styles:r,arrowClassName:o,arrowStyles:a,anchorPoint:l,anchorRef:u,arrow:d,align:f,direction:p,position:m,overflow:h,isOpen:b,isMounted:g,menuItemFocus:y,offsetX:O,offsetY:v},t,c,i,s,j,_,x)}));D.propTypes={...g,anchorPoint:i.a.exact({x:i.a.number,y:i.a.number}),anchorRef:i.a.object,isOpen:i.a.bool,isMounted:i.a.bool,menuItemFocus:i.a.exact({position:i.a.string}),onClose:i.a.func},D.defaultProps={...O,isMounted:!0,menuItemFocus:{position:T.INITIAL}};const P=v(a.a.memo((function({"aria-label":e,className:t,styles:n,arrowClassName:r,arrowStyles:c,itemClassName:i,itemStyles:l,arrow:u,align:m,direction:h,position:b,overflow:g,offsetX:y,offsetY:O,disabled:v,keepMounted:x,label:C,index:k,children:R,onChange:N}){const{isMounted:L,isOpen:A,menuItemFocus:D,openMenu:P,closeMenu:H}=S(x),{isParentOpen:F,hoverIndex:U,hoverIndexDispatch:B}=Object(o.useContext)(s),{debugging:K}=Object(o.useContext)(d),Y=U===k,$=!!v||void 0,{isActive:z,onKeyUp:X,...q}=w(Y,$,f.RIGHT),G=Object(o.useRef)(null),W=Object(o.useRef)(null),J=Object(o.useRef)();M(N,A);const Q=Object(o.useCallback)(()=>{W.current.focus()},[]);Object(o.useEffect)(()=>{Y&&F?W.current.focus():H()},[Y,F,H]);const V=Object.freeze({open:A,hover:Y,active:z,disabled:$});return a.a.createElement("li",{className:_("rc-menu","submenu")(),role:"presentation",ref:G,onKeyDown:e=>{let t=!1;switch(e.key){case f.LEFT:A&&(Q(),t=!0);break;case f.RIGHT:A||(t=!0)}t&&(e.preventDefault(),e.stopPropagation())},onBlur:e=>{K||(e.currentTarget.contains(e.relatedTarget)?W.current.contains(e.relatedTarget)&&H():(H(),B({type:p.UNSET,index:k})))}},a.a.createElement("div",Object.assign({className:_("rc-menu","item",V)(i),style:E(l,V),role:"menuitem","aria-haspopup":"true","aria-expanded":A,"aria-disabled":$,tabIndex:Y&&!A?0:-1,ref:W,onMouseEnter:()=>{$||(B({type:p.SET,index:k}),J.current=setTimeout(()=>{J.current=null,F&&P()},300))},onMouseLeave:()=>{clearTimeout(J.current),A||B({type:p.UNSET,index:k})},onClick:()=>!$&&P(),onKeyUp:e=>{if(z)switch(X(e),e.key){case f.SPACE:case f.ENTER:case f.RIGHT:P(T.FIRST)}}},q),j(C,V)),a.a.createElement(I,{ariaLabel:e||("string"===typeof C?C:"Submenu"),className:t,styles:n,arrowClassName:r,arrowStyles:c,anchorRef:W,containerRef:G,arrow:u,align:m,direction:h,position:b,overflow:g,offsetX:y,offsetY:O,isOpen:A,isMounted:L,isDisabled:$,menuItemFocus:D,onClose:Q},R))})),"SubMenu");P.propTypes={...b,...h("item"),disabled:i.a.bool,keepMounted:i.a.bool,label:i.a.oneOfType([i.a.node,i.a.func]).isRequired,onChange:i.a.func},P.defaultProps={...y,direction:"right",keepMounted:!0};const H=v(a.a.memo((function({className:e,styles:t,value:n,href:r,type:c,checked:i,disabled:s,index:d,children:p,onClick:m,...h}){const{ref:b,isHovering:g,isDisabled:y,setHover:O,unsetHover:v}=C(s,d),x=Object(o.useContext)(l),M=Object(o.useContext)(u),{isActive:T,onKeyUp:k,onBlur:R,...S}=w(g,y),N="radio"===c,I="checkbox"===c,L=r&&!y&&!N&&!I,A=e=>{if(y)return;let t=!1;const r={value:n,key:e};I&&(r.checked=!i),N?(r.name=M.name,t=!0,j(M.onChange,r)):t=!1===j(m,r),x.handleClick(r,t,I||N)},D=Object.freeze({type:c,disabled:y,hover:g,active:T,checked:N?M.value===n:I?!!i:void 0,anchor:L}),P={className:_("rc-menu","item",D)(e),style:E(t,D),role:N?"menuitemradio":I?"menuitemcheckbox":"menuitem","aria-checked":D.checked,"aria-disabled":y,tabIndex:g?0:-1,ref:b,onMouseEnter:O,onMouseLeave:v,onKeyUp:e=>{if(T)switch(k(e),e.key){case f.SPACE:case f.ENTER:L?b.current.click():A(e.key)}},onBlur:e=>{R(e),e.currentTarget.contains(e.relatedTarget)||v(e)},onClick:()=>A(),...S},H=j(p,D);return L?a.a.createElement("li",{role:"presentation"},a.a.createElement("a",Object.assign({},h,{href:r},P),H)):a.a.createElement("li",P,H)})),"MenuItem");H.propTypes={...h(),value:i.a.any,href:i.a.string,type:i.a.oneOf(["checkbox","radio"]),checked:i.a.bool,disabled:i.a.bool,children:i.a.oneOfType([i.a.node,i.a.func]).isRequired,onClick:i.a.func};v(a.a.memo((function({className:e,styles:t,disabled:n,index:r,children:c}){const{ref:i,isHovering:s,isDisabled:u,setHover:d,unsetHover:f}=C(n,r),{handleClose:p}=Object(o.useContext)(l),m={disabled:u,hover:s},h=Object.freeze({...m,focusable:!0}),b=j(c,{...m,ref:i,closeMenu:p});return a.a.createElement("li",{className:_("rc-menu","item",h)(e),style:E(t,h),"aria-disabled":u,role:"menuitem",tabIndex:"-1",onMouseEnter:d,onFocus:d,onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||f(e)}},b)})),"FocusableItem").propTypes={...h(),disabled:i.a.bool,children:i.a.func.isRequired};const F=v(a.a.memo((function({className:e,styles:t}){return a.a.createElement("li",{className:_("rc-menu","divider")(e),style:E(t),role:"separator"})})),"MenuDivider");F.propTypes={...h()};const U=v(a.a.memo((function({className:e,styles:t,children:n}){return a.a.createElement("li",{className:_("rc-menu","header")(e),style:E(t),role:"presentation"},n)})),"MenuHeader");U.propTypes={...h()};v(a.a.memo((function({"aria-label":e,className:t,styles:n,name:r,value:c,children:i,onChange:s}){const l=Object(o.useMemo)(()=>({name:r,value:c,onChange:s}),[r,c,s]);return a.a.createElement("li",{role:"presentation"},a.a.createElement("ul",{className:_("rc-menu","radio-group")(t),style:E(n),role:"group","aria-label":e||r||"Radio group"},a.a.createElement(u.Provider,{value:l},i)))})),"MenuRadioGroup").propTypes={...h(),"aria-label":i.a.string,name:i.a.string,value:i.a.any,children:i.a.node.isRequired,onChange:i.a.func};var B=n("8Kt/"),K=n.n(B),Y=n("Ruk8"),$=n.n(Y),z=n("vnQH"),X=n.n(z),q=n("YFqc"),G=n.n(q);n("TSYQ");const W=({color:e="currentColor",direction:t="left",distance:n="md",duration:r=.4,easing:a="cubic-bezier(0, 0, 0, 1)",hideOutline:c=!0,label:i,lines:s=3,onToggle:l,render:u,rounded:d=!1,size:f=32,toggle:p,toggled:m})=>{const[h,b]=Object(o.useState)(!1),g=Math.max(12,Math.min(48,f)),y=Math.round((48-g)/2),O=g/12,v=Math.round(O),j=g/(s*(("lg"===n?.25:"sm"===n?.75:.5)+(3===s?1:1.25))),_=Math.round(j),x=v*s+_*(s-1),E=Math.round((48-x)/2),w=parseFloat((g/(3===s?"lg"===n?4.0425:"sm"===n?5.1625:4.6325:"lg"===n?6.7875:"sm"===n?8.4875:7.6675)-(O-v+(j-_))/(3===s?1:2)/(4/3)).toFixed(2)),C=Math.max(0,r),M={cursor:"pointer",height:"48px",position:"relative",transition:`${C}s ${a}`,userSelect:"none",width:"48px"},T={background:e,height:v+"px",left:y+"px",position:"absolute",width:g+"px"};c&&(M.outline="none"),d&&(T.borderRadius="9em");const k=p||b,R=m||h;return u({barHeight:v,barStyles:T,burgerStyles:M,easing:a,handler:()=>{k(!R),"function"===typeof l&&l(!R)},isLeft:"left"===t,isToggled:R,label:i,margin:_,move:w,time:C,topOffset:E})};function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Q=e=>a.a.createElement(W,J({},e,{render:e=>a.a.createElement("div",{className:"hamburger-react","aria-label":e.label,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:""+(e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none")},tabIndex:0},a.a.createElement("div",{style:{...e.barStyles,top:e.topOffset+"px",transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none")}}),a.a.createElement("div",{style:{...e.barStyles,top:e.topOffset+e.barHeight+e.margin+"px",transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?"scaleX(0)":"none")}}),a.a.createElement("div",{style:{...e.barStyles,top:e.topOffset+2*e.barHeight+2*e.margin+"px",transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none")}}))})),V="Next.js Sample Website demo fun";function Z(e){var t=e.children,n=e.home,a=Object(o.useState)(!1);a[0],a[1];return Object(r.jsxs)("div",{className:X.a.cc_wrapper,children:[Object(r.jsxs)(K.a,{children:[Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),Object(r.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),Object(r.jsx)("meta",{property:"og:image",content:"https://og-image.now.sh/".concat(encodeURI(V),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),Object(r.jsx)("meta",{name:"og:title",content:V}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),Object(r.jsxs)("header",{className:X.a.cc_logo,children:[Object(r.jsx)("p",{children:"i am header"}),n?Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("img",{src:"/images/confed-logo-2019-xsmall.svg",className:"".concat($.a.headerHomeImage," ").concat(X.a.borderCircle),alt:"creative stuffthings"})}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(G.a,{href:"/",children:Object(r.jsx)("a",{children:Object(r.jsx)("img",{src:"/images/confed-logo-2019-small-v2.1.svg",className:"".concat($.a.headerImage," ").concat(X.a.borderCircle),alt:"creative stuffthings"})})}),Object(r.jsx)("h2",{className:X.a.headingLg,children:Object(r.jsx)(G.a,{href:"/",children:Object(r.jsx)("a",{className:X.a.colorInherit,children:"creative stuffthings"})})})]})]}),Object(r.jsx)("div",{className:X.a.cc_menu,children:Object(r.jsxs)(A,{menuButton:Object(r.jsx)(N,{children:Object(r.jsx)(Q,{easing:"ease-in"})}),children:[Object(r.jsx)(H,{children:Object(r.jsx)(G.a,{href:"/",children:Object(r.jsx)("a",{children:"Home"})})}),Object(r.jsx)(H,{children:Object(r.jsx)(G.a,{href:"/testpage",children:Object(r.jsx)("a",{children:"Testpage"})})}),Object(r.jsx)(H,{children:Object(r.jsx)(G.a,{href:"/badthings",children:Object(r.jsx)("a",{children:"Badthings"})})}),Object(r.jsx)(F,{}),Object(r.jsx)(U,{children:"Additional Stuff"}),Object(r.jsx)(H,{children:"Link thing"})]})}),Object(r.jsxs)("main",{className:X.a.cc_main,children:[t,!n&&Object(r.jsx)("div",{className:$.a.backToHome,children:Object(r.jsx)(G.a,{href:"/",children:Object(r.jsx)("a",{children:"\u2190 Back to home"})})})]}),Object(r.jsxs)("section",{className:X.a.cc_footer,children:[Object(r.jsx)("div",{className:X.a.cc_nested__logo,children:Object(r.jsx)("img",{src:"/images/confed-logo-2019-small-v2.1.svg",alt:"creative Logo",className:"logo"})}),Object(r.jsx)("div",{className:X.a.cc_nested__menu,children:Object(r.jsx)("h3",{children:"Foooter feet"})}),Object(r.jsx)("div",{className:X.a.cc_nested__funk,children:"b"}),Object(r.jsx)("div",{className:X.a.cc_nested__footer,children:"\xa9 2020"})]})]})}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},Ruk8:function(e,t,n){e.exports={container:"layout_container__3sC0E",header:"layout_header__3KufH",headerImage:"layout_headerImage__1Y87s",headerHomeImage:"layout_headerHomeImage__3PnC4",backToHome:"layout_backToHome__3Z5L9","rc-menu-button":"layout_rc-menu-button__1VUDF"}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){c(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),i=n("elyg"),s=n("nOHt"),l=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var n=a||(u?a=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),o=n&&n.pathname||"/",a=c.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),l=a.href,m=a.as,h=e.children,b=e.replace,g=e.shallow,y=e.scroll,O=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var v=c.Children.only(h),j=v&&"object"===typeof v&&v.ref,_=c.default.useRef(),x={ref:c.default.useCallback((function(e){(_.current&&(_.current(),_.current=void 0),t&&u&&e&&e.tagName&&(0,i.isLocalURL)(l))&&(d[l+"%"+m]||(_.current=f(e,(function(){p(n,l,m,{locale:"undefined"!==typeof O?O:n&&n.locale})}))));j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[t,j,l,m,n,O]),onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:s}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,l,m,b,g,y,O)}};return t&&(x.onMouseEnter=function(e){(0,i.isLocalURL)(l)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),p(n,l,m,{priority:!0}))}),(e.passHref||"a"===v.type&&!("href"in v.props))&&(x.href=(0,i.addBasePath)((0,i.addLocale)(m,"undefined"!==typeof O?O:n&&n.locale,n&&n.defaultLocale))),c.default.cloneElement(v,x)};t.default=m},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},vnQH:function(e,t,n){e.exports={cc_wrapper:"utils_cc_wrapper__2DEUb",cc_logo:"utils_cc_logo__1ufiR",cc_menu:"utils_cc_menu__3GPUw",cc_main:"utils_cc_main__ggfTL",cc_footer:"utils_cc_footer__kPMYB",cc_nested__logo:"utils_cc_nested__logo__3ONyc",cc_nested__menu:"utils_cc_nested__menu__EBESI",cc_nested__funk:"utils_cc_nested__funk__YDAV0",cc_nested__footer:"utils_cc_nested__footer__D9V-r",success:"utils_success__2TzdN",error:"utils_error__2SPu1",heading2Xl:"utils_heading2Xl__16Gb4",headingXl:"utils_headingXl__3wKvI",headingLg:"utils_headingLg__3uZpz",headingMd:"utils_headingMd___QbOh",footer:"utils_footer__13qTu",borderCircle:"utils_borderCircle__16bu1",colorInherit:"utils_colorInherit__rOQns",padding1px:"utils_padding1px__36ceH",list:"utils_list__2y256",listItem:"utils_listItem__2TaGU",lightText:"utils_lightText__3895Y"}}}]);