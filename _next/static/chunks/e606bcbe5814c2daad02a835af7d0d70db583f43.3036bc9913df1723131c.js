(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,s=f.length;i<s;i++){var l=f[i];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var u=a.props[l],d=r[l]||new Set;d.has(u)?o=!1:(d.add(u),r[l]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,n){"use strict";n.d(t,"b",(function(){return V})),n.d(t,"a",(function(){return Z}));var r=n("nKUr"),a=n("q1tI"),o=n.n(a),c=n("17x9"),i=n.n(c);const s=o.a.createContext({hoverIndex:-1}),l=o.a.createContext({}),u=o.a.createContext({}),d=o.a.createContext({}),f=Object.freeze({ENTER:"Enter",ESC:"Escape",SPACE:" ",HOME:"Home",END:"End",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",DOWN:"ArrowDown"}),p=Object.freeze({RESET:0,SET:1,UNSET:2,INCREASE:3,DECREASE:4,FIRST:5,LAST:6}),m=Object.freeze({CLICK:"click",CANCEL:"cancel",BLUR:"blur",RESIZE:"resize",SCROLL:"scroll"}),h=e=>({[e?e+"ClassName":"className"]:i.a.oneOfType([i.a.string,i.a.func]),[e?e+"Styles":"styles"]:i.a.oneOfType([i.a.object,i.a.func])}),b={...h(),...h("arrow"),"aria-label":i.a.string,arrow:i.a.bool,offsetX:i.a.number,offsetY:i.a.number,align:i.a.oneOf(["start","center","end"]),direction:i.a.oneOf(["left","right","top","bottom"]),position:i.a.oneOf(["auto","anchor","initial"]),overflow:i.a.oneOf(["auto","visible","hidden"]),children:i.a.node.isRequired},g={...b,id:i.a.oneOfType([i.a.string,i.a.number]),animation:i.a.bool,debugging:i.a.bool,viewScroll:i.a.oneOf(["auto","close","initial"]),onClick:i.a.func},O={offsetX:0,offsetY:0,align:"start",direction:"bottom",position:"auto",overflow:"visible"},y={...O,animation:!0,viewScroll:"initial"},v=(e,t)=>Object.defineProperty(e,"__name__",{value:t,writable:!1}),j=(e,...t)=>"function"===typeof e?e(...t):e,_=(e,t,n={})=>(r,a)=>{let o=t?`${e}__${t}`:e,c=o;for(const e of Object.keys(n)){const t=n[e];t&&(c+=` ${o}--`,c+=!0===t?e:`${e}-${t}`)}return"function"===typeof r&&(r=r(a||n)),"string"===typeof r&&(r=r.trim())&&(c+=" "+r),c},x=e=>e&&"object"===typeof e,w=(e,t)=>{if("function"===typeof e)return e(t);if(!x(e))return;if(!t)return e;const n={};for(const r of Object.keys(e)){const a=e[r];if(x(a)){const e=t[r];if("string"===typeof e)for(const t of Object.keys(a)){const r=a[t];x(r)?t===e&&Object.assign(n,r):n[t]=r}else e&&Object.assign(n,a)}else n[r]=a}return n},E=(e,t,n)=>{const[r,o]=Object(a.useState)(!1),c=Object(a.useMemo)(()=>[f.SPACE,f.ENTER,...n?[n]:[]],[n]),i=Object(a.useCallback)(()=>o(!1),[]);return{isActive:r,onPointerDown:Object(a.useCallback)(()=>{t||o(!0)},[t]),onPointerUp:i,onPointerLeave:i,onKeyDown:Object(a.useCallback)(n=>{e&&!t&&c.includes(n.key)&&o(!0)},[e,t,c]),onKeyUp:Object(a.useCallback)(e=>{c.includes(e.key)&&o(!1)},[c]),onBlur:Object(a.useCallback)(e=>{e.currentTarget.contains(e.relatedTarget)||o(!1)},[])}},C=(e,t)=>{const n=Object(a.useRef)(null),{isParentOpen:r,hoverIndex:o,hoverIndexDispatch:c}=Object(a.useContext)(s),i=o===t,l=!!e||void 0;return Object(a.useEffect)(()=>{i&&r&&n.current&&n.current.focus()},[i,r]),{ref:n,isHovering:i,isDisabled:l,setHover:Object(a.useCallback)(()=>{l||c({type:p.SET,index:t})},[l,c,t]),unsetHover:Object(a.useCallback)(()=>{c({type:p.UNSET,index:t})},[c,t])}},M=(e,t)=>{const n=Object(a.useRef)(t);Object(a.useEffect)(()=>{n.current!==t&&j(e,{open:t}),n.current=t},[e,t])},T=Object.freeze({INITIAL:"initial",FIRST:"first",LAST:"last"}),S=Object.freeze({UNMOUNTED:0,CLOSED:1,OPEN:2}),k=Object.freeze({OPEN:0,CLOSE:1,TOGGLE:2}),R=(e=!0)=>{const[t,n]=Object(a.useState)({position:T.INITIAL}),[r,o]=Object(a.useReducer)((function(t,{type:n}){switch(n){case k.OPEN:return S.OPEN;case k.CLOSE:return t===S.OPEN?e?S.CLOSED:S.UNMOUNTED:t;case k.TOGGLE:return t===S.OPEN?e?S.CLOSED:S.UNMOUNTED:S.OPEN;default:throw new Error("menuStateReducer: unknown action type")}}),S.UNMOUNTED);return{isMounted:r!==S.UNMOUNTED,isOpen:r===S.OPEN,menuItemFocus:t,openMenu:Object(a.useCallback)((e=T.INITIAL)=>{n({position:e}),o({type:k.OPEN})},[]),closeMenu:Object(a.useCallback)(()=>o({type:k.CLOSE}),[]),toggleMenu:Object(a.useCallback)((e=T.INITIAL)=>{n({position:e}),o({type:k.TOGGLE})},[])}},N=v(o.a.memo(o.a.forwardRef((function({id:e,className:t,styles:n,isOpen:r,disabled:a,children:c,onClick:i,onKeyDown:s},l){const u=Object.freeze({open:r});return o.a.createElement("button",{id:e,className:_("rc-menu-button",null,u)(t),style:w(n,u),"aria-haspopup":"true","aria-expanded":r,"aria-disabled":a,ref:l,disabled:a,onClick:i,onKeyDown:s},c)}))),"MenuButton");N.propTypes={...h(),id:i.a.oneOfType([i.a.string,i.a.number]),isOpen:i.a.bool,disabled:i.a.bool,children:i.a.node.isRequired,onClick:i.a.func,onKeyDown:i.a.func};const I=v(o.a.memo((function({ariaLabel:e,className:t,styles:n,arrowClassName:r,arrowStyles:c,anchorPoint:i,anchorRef:l,containerRef:u,arrow:h,align:b,direction:g,position:O,overflow:y,isOpen:v,isMounted:x,isDisabled:E,menuItemFocus:C,offsetX:M,offsetY:S,children:k,onKeyDown:R,onAnimationEnd:N,onClose:I,...L}){const[A,P]=Object(a.useState)({x:0,y:0}),[D,H]=Object(a.useState)({}),[F,U]=Object(a.useState)(-1),[B,K]=Object(a.useState)(!1),[Y,$]=Object(a.useState)(g),{animation:z,viewScroll:X}=Object(a.useContext)(d),q=Object(a.useRef)(null),G=Object(a.useRef)(null),W=Object(a.useRef)(0),J=Object(a.useRef)(v),[Q,V]=Object(a.useReducer)((function(e,{type:t,index:n}){switch(t){case p.RESET:return-1;case p.SET:return n;case p.UNSET:return e===n?-1:e;case p.DECREASE:{let t=e;return t--,t<0&&(t=W.current-1),t}case p.INCREASE:{let t=e;return t++,t>=W.current&&(t=0),t}case p.FIRST:return W.current>0?0:-1;case p.LAST:return W.current>0?W.current-1:-1;default:throw new Error("hoverIndexReducer: unknown action type")}}),-1);const Z=Object(a.useMemo)(()=>{if(!x)return null;let e=0;const t=["MenuDivider","MenuHeader","MenuItem","FocusableItem","MenuRadioGroup","SubMenu"],n=(e,t,n)=>!!n.includes(t.type&&t.type.__name__)||(console.warn((t.type||t)+" is ignored.\n",`The permitted children inside a ${e} are ${n.join(", ")}.`),!1),r=o.a.Children.map(k,r=>{if(!n("Menu or SubMenu",r,t))return null;if("MenuDivider"===r.type.__name__||"MenuHeader"===r.type.__name__)return r;if("MenuRadioGroup"===r.type.__name__){const t=["MenuItem"],a={type:"radio"},c=o.a.Children.map(r.props.children,r=>n("MenuRadioGroup",r,t)?r.props.disabled?o.a.cloneElement(r,a):o.a.cloneElement(r,{...a,index:e++}):null);return o.a.cloneElement(r,{children:c})}return r.props.disabled?r:o.a.cloneElement(r,{index:e++})});return W.current=e,r},[x,k]),ee=Object(a.useCallback)(()=>{const e=q.current.getBoundingClientRect(),t=u.current.getBoundingClientRect(),n=document.documentElement.clientWidth,r=document.documentElement.clientHeight,a=e=>t.left+e,o=r=>t.left+r+e.width-n,c=e=>t.top+e,i=n=>t.top+n+e.height-r;return{menuRect:e,containerRect:t,viewportWidth:n,viewportHeight:r,getLeftOverflow:a,getRightOverflow:o,getTopOverflow:c,getBottomOverflow:i,confineHorizontally:e=>{let t=a(e);if(t<0)e-=t;else{const n=o(e);n>0&&(t=a(e-=n),t<0&&(e-=t))}return e},confineVertically:e=>{let t=c(e);if(t<0)e-=t;else{const n=i(e);n>0&&(t=c(e-=n),t<0&&(e-=t))}return e}}},[u]),te=Object(a.useCallback)((e,t,n,r)=>{if(!h)return;let a=t.left-n.left-e+t.width/2;const o=1.25*G.current.offsetWidth;a=Math.max(o,a),a=Math.min(a,r.width-o),H({x:a})},[h]),ne=Object(a.useCallback)((e,t,n,r)=>{if(!h)return;let a=t.top-n.top-e+t.height/2;const o=1.25*G.current.offsetHeight;a=Math.max(o,a),a=Math.min(a,r.height-o),H({y:a})},[h]),re=Object(a.useCallback)(({anchorRect:e,containerRect:t,menuRect:n},{placeLeftorRightY:r,placeLeftX:a,placeRightX:o},{getLeftOverflow:c,getRightOverflow:i,confineHorizontally:s,confineVertically:l})=>{let u,d,f,p=g,m=r;return"initial"!==O&&(m=l(m),"anchor"===O&&(m=Math.min(m,e.bottom-t.top),m=Math.max(m,e.top-t.top-n.height))),"left"===p?(u=a,"initial"!==O&&(d=c(u),d<0&&(f=i(o),(f<=0||-d>f)&&(u=o,p="right")))):(u=o,"initial"!==O&&(f=i(u),f>0&&(d=c(a),(d>=0||-d<f)&&(u=a,p="left")))),"auto"===O&&(u=s(u)),ne(m,e,t,n),{x:u,y:m,computedDirection:p}},[ne,g,O]),ae=Object(a.useCallback)(({anchorRect:e,containerRect:t,menuRect:n},{placeToporBottomX:r,placeTopY:a,placeBottomY:o},{getTopOverflow:c,getBottomOverflow:i,confineHorizontally:s,confineVertically:l})=>{let u,d,f,p="top"===g?"top":"bottom",m=r;return"initial"!==O&&(m=s(m),"anchor"===O&&(m=Math.min(m,e.right-t.left),m=Math.max(m,e.left-t.left-n.width))),"top"===p?(u=a,"initial"!==O&&(d=c(u),d<0&&(f=i(o),(f<=0||-d>f)&&(u=o,p="bottom")))):(u=o,"initial"!==O&&(f=i(u),f>0&&(d=c(a),(d>=0||-d<f)&&(u=a,p="top")))),"auto"===O&&(u=l(u)),te(m,e,t,n),{x:m,y:u,computedDirection:p}},[te,g,O]),oe=Object(a.useCallback)((e,t)=>{const{menuRect:n,containerRect:r,...a}=e;let o=M,c=S;h&&("left"===g||"right"===g?o+=G.current.offsetWidth:c+=G.current.offsetHeight);const i=t.current.getBoundingClientRect(),s=i.left-r.left-n.width-o,l=i.right-r.left+o,u=i.top-r.top-n.height-c,d=i.bottom-r.top+c;let f,p;"end"===b?(f=i.right-r.left-n.width,p=i.bottom-r.top-n.height):"center"===b?(f=i.left-r.left-(n.width-i.width)/2,p=i.top-r.top-(n.height-i.height)/2):(f=i.left-r.left,p=i.top-r.top),f+=o,p+=c;const m={anchorRect:i,containerRect:r,menuRect:n},O={placeLeftX:s,placeRightX:l,placeLeftorRightY:p,placeTopY:u,placeBottomY:d,placeToporBottomX:f};switch(g){case"left":case"right":return re(m,O,a);case"top":case"bottom":default:return ae(m,O,a)}},[h,b,g,M,S,re,ae]),ce=Object(a.useCallback)((e,t)=>{const{menuRect:n,containerRect:r,getLeftOverflow:a,getRightOverflow:o,getTopOverflow:c,getBottomOverflow:i,confineHorizontally:s,confineVertically:l}=e;let u,d;u=t.x-r.left,d=t.y-r.top;const f=o(u);if(f>0){const e=u-n.width,t=a(e);(t>=0||-t<f)&&(u=e),u=s(u)}let p="bottom";const m=i(d);if(m>0){const e=d-n.height,t=c(e);(t>=0||-t<m)&&(d=e,p="top"),d=l(d)}return{x:u,y:d,computedDirection:p}},[]),ie=Object(a.useCallback)(()=>{const e=ee();let t={computedDirection:"bottom"};i?t=ce(e,i):l&&(t=oe(e,l));let{x:n,y:r,computedDirection:a}=t;if("visible"!==y){const{menuRect:t,getTopOverflow:n,getBottomOverflow:a}=e;U(e=>{let o=-1;const c=a(r);if(c>0||0===c&&e>=0)o=t.height-c;else{const a=n(r);(a<0||0===a&&e>=0)&&(o=t.height+a,o>=0&&(r-=a))}return o})}P({x:n,y:r}),$(a)},[i,l,y,ee,oe,ce]);Object(a.useLayoutEffect)(()=>{v&&ie()},[v,ie]),Object(a.useEffect)(()=>{if(!v||"initial"===X)return;let e=X;"auto"===e&&"visible"!==y&&(e="close");const t=()=>{"auto"===e?ie():j(I,{reason:m.SCROLL})};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[v,y,I,X,ie]),Object(a.useLayoutEffect)(()=>{z&&x&&(v?K(!1):v!==J.current&&K(!0)),J.current=v},[z,x,v]),Object(a.useEffect)(()=>{v||(V({type:p.RESET}),z||U(-1));const e=setTimeout(()=>{v&&!q.current.contains(document.activeElement)&&(q.current.focus(),C.position===T.FIRST?V({type:p.FIRST}):C.position===T.LAST&&V({type:p.LAST}))},100);return()=>clearTimeout(e)},[z,v,C]);const se=Object(a.useMemo)(()=>({isParentOpen:v,hoverIndex:Q,hoverIndexDispatch:V}),[v,Q]),le={open:v,closing:B,animation:z,dir:z&&Y},ue=Object.freeze({...le,dir:Y}),de=Object.freeze({dir:Y});let fe=null;return F>=0&&(fe={maxHeight:F,overflow:y}),o.a.createElement(o.a.Fragment,null,x&&o.a.createElement("ul",Object.assign({},L,{className:_("rc-menu",null,le)(t,ue),role:"menu",tabIndex:"-1","aria-disabled":E,"aria-label":e,ref:q,onKeyDown:e=>{let t=!1;switch(e.key){case f.HOME:V({type:p.FIRST}),t=!0;break;case f.END:V({type:p.LAST}),t=!0;break;case f.UP:V({type:p.DECREASE}),t=!0;break;case f.DOWN:V({type:p.INCREASE}),t=!0;break;case f.SPACE:e.target&&e.target.className.includes("rc-menu")&&e.preventDefault()}t&&(e.preventDefault(),e.stopPropagation()),j(R,e)},onAnimationEnd:e=>{B&&(K(!1),U(-1)),j(N,e)},style:{...w(n,ue),...fe,left:A.x+"px",top:A.y+"px"}}),h&&o.a.createElement("div",{className:_("rc-menu","arrow",de)(r),style:{...w(c,de),left:D.x&&D.x+"px",top:D.y&&D.y+"px"},ref:G,role:"presentation"}),o.a.createElement(s.Provider,{value:se},Z)))})),"MenuList"),L=(e,t,n,r,c,i,s,u,p)=>{const h=Object(a.useRef)(null),b=Object(a.useMemo)(()=>({animation:n,debugging:r,viewScroll:c}),[n,r,c]),g=Object(a.useMemo)(()=>({handleClick(e,t,n){n&&e.key===f.SPACE||j(u,{key:e.key,reason:m.CLICK}),t||j(s,e)},handleClose(e){j(u,{key:e,reason:m.CLICK})}}),[s,u]);return o.a.createElement("div",{id:t,className:_("rc-menu-container")(),role:"presentation",ref:h,onKeyDown:({key:e})=>{switch(e){case f.ESC:j(u,{key:e,reason:m.CANCEL})}},onBlur:t=>{!e.isOpen||t.currentTarget.contains(t.relatedTarget)||r||(j(u,{reason:m.BLUR}),p&&(p.current=!0,setTimeout(()=>p.current=!1,300)))}},o.a.createElement(d.Provider,{value:b},o.a.createElement(l.Provider,{value:g},o.a.createElement(I,Object.assign({},e,{containerRef:h,onClose:u}),i))))},A=o.a.memo((function({"aria-label":e,id:t,className:n,styles:r,arrowClassName:c,arrowStyles:i,animation:s,debugging:l,viewScroll:u,keepMounted:d,arrow:p,align:m,direction:h,position:b,overflow:g,menuButton:O,offsetX:y,offsetY:v,children:_,onClick:x,onChange:w}){const{isMounted:E,isOpen:C,menuItemFocus:S,openMenu:k,closeMenu:N}=R(d);M(w,C);const I=Object(a.useRef)(!1),A=Object(a.useRef)(null),P=j(O,{open:C});if(!P)throw new Error("Menu requires a menuButton prop.");const D=Object(a.useCallback)(e=>{N(),e.key&&A.current.focus()},[N]),H=Object(a.useCallback)(e=>{I.current||k(0===e.detail?T.FIRST:T.INITIAL)},[k]),F=Object(a.useCallback)(e=>{let t=!1;switch(e.key){case f.UP:k(T.LAST),t=!0;break;case f.DOWN:k(T.FIRST),t=!0}t&&e.preventDefault()},[k]),U=Object(a.useMemo)(()=>{if(!P)return null;const e={ref:A,onClick:H,onKeyDown:F};return"MenuButton"===P.type.__name__&&(e.isOpen=C),o.a.cloneElement(P,e)},[P,C,H,F]),B=L({ariaLabel:e||("string"===typeof P.props.children?P.props.children:"Menu"),className:n,styles:r,arrowClassName:c,arrowStyles:i,anchorRef:A,arrow:p,align:m,direction:h,position:b,overflow:g,isOpen:C,isMounted:E,menuItemFocus:S,offsetX:y,offsetY:v},t,s,l,u,_,x,D,I);return o.a.createElement(o.a.Fragment,null,U,B)}));A.propTypes={...g,keepMounted:i.a.bool,menuButton:i.a.oneOfType([i.a.element,i.a.func]).isRequired,onChange:i.a.func},A.defaultProps={...y,keepMounted:!0};const P=o.a.memo((function({"aria-label":e,id:t,className:n,styles:r,arrowClassName:a,arrowStyles:o,animation:c,debugging:i,viewScroll:s,anchorPoint:l,anchorRef:u,arrow:d,align:f,direction:p,position:m,overflow:h,isOpen:b,isMounted:g,menuItemFocus:O,offsetX:y,offsetY:v,children:j,onClick:_,onClose:x,...w}){return L({...w,ariaLabel:e||"Menu",className:n,styles:r,arrowClassName:a,arrowStyles:o,anchorPoint:l,anchorRef:u,arrow:d,align:f,direction:p,position:m,overflow:h,isOpen:b,isMounted:g,menuItemFocus:O,offsetX:y,offsetY:v},t,c,i,s,j,_,x)}));P.propTypes={...g,anchorPoint:i.a.exact({x:i.a.number,y:i.a.number}),anchorRef:i.a.object,isOpen:i.a.bool,isMounted:i.a.bool,menuItemFocus:i.a.exact({position:i.a.string}),onClose:i.a.func},P.defaultProps={...y,isMounted:!0,menuItemFocus:{position:T.INITIAL}};const D=v(o.a.memo((function({"aria-label":e,className:t,styles:n,arrowClassName:r,arrowStyles:c,itemClassName:i,itemStyles:l,arrow:u,align:m,direction:h,position:b,overflow:g,offsetX:O,offsetY:y,disabled:v,keepMounted:x,label:C,index:S,children:k,onChange:N}){const{isMounted:L,isOpen:A,menuItemFocus:P,openMenu:D,closeMenu:H}=R(x),{isParentOpen:F,hoverIndex:U,hoverIndexDispatch:B}=Object(a.useContext)(s),{debugging:K}=Object(a.useContext)(d),Y=U===S,$=!!v||void 0,{isActive:z,onKeyUp:X,...q}=E(Y,$,f.RIGHT),G=Object(a.useRef)(null),W=Object(a.useRef)(null),J=Object(a.useRef)();M(N,A);const Q=Object(a.useCallback)(()=>{W.current.focus()},[]);Object(a.useEffect)(()=>{Y&&F?W.current.focus():H()},[Y,F,H]);const V=Object.freeze({open:A,hover:Y,active:z,disabled:$});return o.a.createElement("li",{className:_("rc-menu","submenu")(),role:"presentation",ref:G,onKeyDown:e=>{let t=!1;switch(e.key){case f.LEFT:A&&(Q(),t=!0);break;case f.RIGHT:A||(t=!0)}t&&(e.preventDefault(),e.stopPropagation())},onBlur:e=>{K||(e.currentTarget.contains(e.relatedTarget)?W.current.contains(e.relatedTarget)&&H():(H(),B({type:p.UNSET,index:S})))}},o.a.createElement("div",Object.assign({className:_("rc-menu","item",V)(i),style:w(l,V),role:"menuitem","aria-haspopup":"true","aria-expanded":A,"aria-disabled":$,tabIndex:Y&&!A?0:-1,ref:W,onMouseEnter:()=>{$||(B({type:p.SET,index:S}),J.current=setTimeout(()=>{J.current=null,F&&D()},300))},onMouseLeave:()=>{clearTimeout(J.current),A||B({type:p.UNSET,index:S})},onClick:()=>!$&&D(),onKeyUp:e=>{if(z)switch(X(e),e.key){case f.SPACE:case f.ENTER:case f.RIGHT:D(T.FIRST)}}},q),j(C,V)),o.a.createElement(I,{ariaLabel:e||("string"===typeof C?C:"Submenu"),className:t,styles:n,arrowClassName:r,arrowStyles:c,anchorRef:W,containerRef:G,arrow:u,align:m,direction:h,position:b,overflow:g,offsetX:O,offsetY:y,isOpen:A,isMounted:L,isDisabled:$,menuItemFocus:P,onClose:Q},k))})),"SubMenu");D.propTypes={...b,...h("item"),disabled:i.a.bool,keepMounted:i.a.bool,label:i.a.oneOfType([i.a.node,i.a.func]).isRequired,onChange:i.a.func},D.defaultProps={...O,direction:"right",keepMounted:!0};const H=v(o.a.memo((function({className:e,styles:t,value:n,href:r,type:c,checked:i,disabled:s,index:d,children:p,onClick:m,...h}){const{ref:b,isHovering:g,isDisabled:O,setHover:y,unsetHover:v}=C(s,d),x=Object(a.useContext)(l),M=Object(a.useContext)(u),{isActive:T,onKeyUp:S,onBlur:k,...R}=E(g,O),N="radio"===c,I="checkbox"===c,L=r&&!O&&!N&&!I,A=e=>{if(O)return;let t=!1;const r={value:n,key:e};I&&(r.checked=!i),N?(r.name=M.name,t=!0,j(M.onChange,r)):t=!1===j(m,r),x.handleClick(r,t,I||N)},P=Object.freeze({type:c,disabled:O,hover:g,active:T,checked:N?M.value===n:I?!!i:void 0,anchor:L}),D={className:_("rc-menu","item",P)(e),style:w(t,P),role:N?"menuitemradio":I?"menuitemcheckbox":"menuitem","aria-checked":P.checked,"aria-disabled":O,tabIndex:g?0:-1,ref:b,onMouseEnter:y,onMouseLeave:v,onKeyUp:e=>{if(T)switch(S(e),e.key){case f.SPACE:case f.ENTER:L?b.current.click():A(e.key)}},onBlur:e=>{k(e),e.currentTarget.contains(e.relatedTarget)||v(e)},onClick:()=>A(),...R},H=j(p,P);return L?o.a.createElement("li",{role:"presentation"},o.a.createElement("a",Object.assign({},h,{href:r},D),H)):o.a.createElement("li",D,H)})),"MenuItem");H.propTypes={...h(),value:i.a.any,href:i.a.string,type:i.a.oneOf(["checkbox","radio"]),checked:i.a.bool,disabled:i.a.bool,children:i.a.oneOfType([i.a.node,i.a.func]).isRequired,onClick:i.a.func};v(o.a.memo((function({className:e,styles:t,disabled:n,index:r,children:c}){const{ref:i,isHovering:s,isDisabled:u,setHover:d,unsetHover:f}=C(n,r),{handleClose:p}=Object(a.useContext)(l),m={disabled:u,hover:s},h=Object.freeze({...m,focusable:!0}),b=j(c,{...m,ref:i,closeMenu:p});return o.a.createElement("li",{className:_("rc-menu","item",h)(e),style:w(t,h),"aria-disabled":u,role:"menuitem",tabIndex:"-1",onMouseEnter:d,onFocus:d,onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||f(e)}},b)})),"FocusableItem").propTypes={...h(),disabled:i.a.bool,children:i.a.func.isRequired};const F=v(o.a.memo((function({className:e,styles:t}){return o.a.createElement("li",{className:_("rc-menu","divider")(e),style:w(t),role:"separator"})})),"MenuDivider");F.propTypes={...h()};const U=v(o.a.memo((function({className:e,styles:t,children:n}){return o.a.createElement("li",{className:_("rc-menu","header")(e),style:w(t),role:"presentation"},n)})),"MenuHeader");U.propTypes={...h()};v(o.a.memo((function({"aria-label":e,className:t,styles:n,name:r,value:c,children:i,onChange:s}){const l=Object(a.useMemo)(()=>({name:r,value:c,onChange:s}),[r,c,s]);return o.a.createElement("li",{role:"presentation"},o.a.createElement("ul",{className:_("rc-menu","radio-group")(t),style:w(n),role:"group","aria-label":e||r||"Radio group"},o.a.createElement(u.Provider,{value:l},i)))})),"MenuRadioGroup").propTypes={...h(),"aria-label":i.a.string,name:i.a.string,value:i.a.any,children:i.a.node.isRequired,onChange:i.a.func};var B=n("8Kt/"),K=n.n(B),Y=n("Ruk8"),$=n.n(Y),z=n("vnQH"),X=n.n(z),q=n("YFqc"),G=n.n(q);n("TSYQ");const W=({color:e="currentColor",direction:t="left",distance:n="md",duration:r=.4,easing:o="cubic-bezier(0, 0, 0, 1)",hideOutline:c=!0,label:i,lines:s=3,onToggle:l,render:u,rounded:d=!1,size:f=32,toggle:p,toggled:m})=>{const[h,b]=Object(a.useState)(!1),g=Math.max(12,Math.min(48,f)),O=Math.round((48-g)/2),y=g/12,v=Math.round(y),j=g/(s*(("lg"===n?.25:"sm"===n?.75:.5)+(3===s?1:1.25))),_=Math.round(j),x=v*s+_*(s-1),w=Math.round((48-x)/2),E=parseFloat((g/(3===s?"lg"===n?4.0425:"sm"===n?5.1625:4.6325:"lg"===n?6.7875:"sm"===n?8.4875:7.6675)-(y-v+(j-_))/(3===s?1:2)/(4/3)).toFixed(2)),C=Math.max(0,r),M={cursor:"pointer",height:"48px",position:"relative",transition:`${C}s ${o}`,userSelect:"none",width:"48px"},T={background:e,height:v+"px",left:O+"px",position:"absolute",width:g+"px"};c&&(M.outline="none"),d&&(T.borderRadius="9em");const S=p||b,k=m||h;return u({barHeight:v,barStyles:T,burgerStyles:M,easing:o,handler:()=>{S(!k),"function"===typeof l&&l(!k)},isLeft:"left"===t,isToggled:k,label:i,margin:_,move:E,time:C,topOffset:w})};function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Q=e=>o.a.createElement(W,J({},e,{render:e=>o.a.createElement("div",{className:"hamburger-react","aria-label":e.label,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:""+(e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none")},tabIndex:0},o.a.createElement("div",{style:{...e.barStyles,top:e.topOffset+"px",transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none")}}),o.a.createElement("div",{style:{...e.barStyles,top:e.topOffset+e.barHeight+e.margin+"px",transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?"scaleX(0)":"none")}}),o.a.createElement("div",{style:{...e.barStyles,top:e.topOffset+2*e.barHeight+2*e.margin+"px",transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none")}}))})),V="Next.js Sample Website demo fun";function Z(e){var t=e.children,n=e.home,o=Object(a.useState)(!1),c=o[0],i=o[1],s=Object(a.useState)("hidden"),l=s[0],u=(s[1],Object(a.useState)("initial")),d=u[0],f=(u[1],Object(a.useState)("auto")),p=f[0];f[1];return Object(r.jsxs)("div",{className:X.a.cc_wrapper,children:[Object(r.jsxs)(K.a,{children:[Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),Object(r.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),Object(r.jsx)("meta",{property:"og:image",content:"https://og-image.now.sh/".concat(encodeURI(V),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),Object(r.jsx)("meta",{name:"og:title",content:V}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),Object(r.jsx)("header",{className:X.a.cc_logo,children:n?Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("img",{src:"/images/confed-logo-2019-xsmall.svg",className:"".concat($.a.headerHomeImage," ").concat(X.a.borderCircle),alt:"creative stuffthings"})}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(G.a,{href:"/",children:Object(r.jsx)("a",{children:Object(r.jsx)("img",{src:"/images/confed-logo-2019-small-v2.1.svg",className:"".concat($.a.headerImage," ").concat(X.a.borderCircle),alt:"creative stuffthings"})})}),Object(r.jsx)("h2",{className:X.a.headingLg,children:Object(r.jsx)(G.a,{href:"/",children:Object(r.jsx)("a",{className:X.a.colorInherit,children:"creative stuffthings"})})})]})}),Object(r.jsxs)("div",{className:X.a.cc_menu,children:[Object(r.jsxs)(A,{menuButton:Object(r.jsx)(N,{children:Object(r.jsx)(Q,{toggled:c,toggle:i})}),overflow:l,viewScroll:d,position:p,children:[Object(r.jsx)(H,{children:Object(r.jsx)(G.a,{href:"/",children:Object(r.jsx)("a",{children:"Home"})})}),Object(r.jsx)(H,{children:Object(r.jsx)(G.a,{href:"/testpage",children:Object(r.jsx)("a",{children:"Testpage"})})}),Object(r.jsx)(H,{children:Object(r.jsx)(G.a,{href:"/badthings",children:Object(r.jsx)("a",{children:"Badthings"})})}),Object(r.jsx)(F,{}),Object(r.jsx)(U,{children:"Additional Stuff"}),Object(r.jsx)(H,{children:"Link thing"})]}),Object(r.jsxs)("ul",{className:X.a.largeNav,children:[Object(r.jsx)("li",{children:Object(r.jsx)(G.a,{href:"/",children:Object(r.jsx)("a",{children:"Home"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(G.a,{href:"/testpage",children:Object(r.jsx)("a",{children:"Testpage"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(G.a,{href:"/badthings",children:Object(r.jsx)("a",{children:"Badthings"})})})]})]}),Object(r.jsxs)("main",{className:X.a.cc_main,children:[t,!n&&Object(r.jsx)("div",{className:$.a.backToHome,children:Object(r.jsx)(G.a,{href:"/",children:Object(r.jsx)("a",{children:"\u2190 Back to home"})})})]}),Object(r.jsxs)("section",{className:X.a.cc_footer,children:[Object(r.jsx)("div",{className:X.a.cc_nested__logo,children:Object(r.jsx)("img",{src:"/images/confed-logo-2019-small-v2.1.svg",alt:"creative Logo",className:"logo"})}),Object(r.jsx)("div",{className:X.a.cc_nested__menu,children:Object(r.jsx)("h3",{children:"Foooter feet"})}),Object(r.jsx)("div",{className:X.a.cc_nested__funk,children:"b"}),Object(r.jsx)("div",{className:X.a.cc_nested__footer,children:"\xa9 2020"})]})]})}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},Ruk8:function(e,t,n){e.exports={container:"layout_container__3sC0E",header:"layout_header__3KufH",headerImage:"layout_headerImage__1Y87s",headerHomeImage:"layout_headerHomeImage__3PnC4",backToHome:"layout_backToHome__3Z5L9"}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){c(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,c=a(n("q1tI")),i=n("elyg"),s=n("nOHt"),l=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),a=n&&n.pathname||"/",o=c.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),l=o.href,m=o.as,h=e.children,b=e.replace,g=e.shallow,O=e.scroll,y=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var v=c.Children.only(h),j=v&&"object"===typeof v&&v.ref,_=c.default.useRef(),x={ref:c.default.useCallback((function(e){(_.current&&(_.current(),_.current=void 0),t&&u&&e&&e.tagName&&(0,i.isLocalURL)(l))&&(d[l+"%"+m]||(_.current=f(e,(function(){p(n,l,m,{locale:"undefined"!==typeof y?y:n&&n.locale})}))));j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[t,j,l,m,n,y]),onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:s}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,l,m,b,g,O,y)}};return t&&(x.onMouseEnter=function(e){(0,i.isLocalURL)(l)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),p(n,l,m,{priority:!0}))}),(e.passHref||"a"===v.type&&!("href"in v.props))&&(x.href=(0,i.addBasePath)((0,i.addLocale)(m,"undefined"!==typeof y?y:n&&n.locale,n&&n.defaultLocale))),c.default.cloneElement(v,x)};t.default=m},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vnQH:function(e,t,n){e.exports={cc_wrapper:"utils_cc_wrapper__2DEUb",cc_logo:"utils_cc_logo__1ufiR",cc_menu:"utils_cc_menu__3GPUw",cc_main:"utils_cc_main__ggfTL",cc_footer:"utils_cc_footer__kPMYB",cc_nested__logo:"utils_cc_nested__logo__3ONyc",cc_nested__menu:"utils_cc_nested__menu__EBESI",cc_nested__funk:"utils_cc_nested__funk__YDAV0",cc_nested__footer:"utils_cc_nested__footer__D9V-r",largeNav:"utils_largeNav__28gS3",success:"utils_success__2TzdN",error:"utils_error__2SPu1",heading2Xl:"utils_heading2Xl__16Gb4",headingXl:"utils_headingXl__3wKvI",headingLg:"utils_headingLg__3uZpz",headingMd:"utils_headingMd___QbOh",footer:"utils_footer__13qTu",borderCircle:"utils_borderCircle__16bu1",colorInherit:"utils_colorInherit__rOQns",padding1px:"utils_padding1px__36ceH",list:"utils_list__2y256",listItem:"utils_listItem__2TaGU",lightText:"utils_lightText__3895Y"}}}]);