import{r as s,a9 as De,g as V,d as A,e as F,h as ce,K as We,R as L,a2 as Be,aP as ze,_ as pe,V as _,a3 as W,ap as Ke,i as Le,m as _e,an as me,l as Ye,A as de,aQ as Ue,aR as Xe,aS as Ge,aE as Qe,D as Ve,aT as Je,aU as Ze,aV as qe,aW as ge}from"./index-7f2831f3.js";var et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};const tt=et;var nt=function(e,t){return s.exports.createElement(De,V({},e,{ref:t,icon:tt}))};const ot=s.exports.forwardRef(nt);var ve=s.exports.forwardRef(function(e,t){var r=e.prefixCls,n=e.style,o=e.className,l=e.duration,c=l===void 0?4.5:l,d=e.eventKey,p=e.content,h=e.closable,y=e.closeIcon,v=y===void 0?"x":y,u=e.props,m=e.onClick,$=e.onNoticeClose,O=e.times,g=e.hovering,j=s.exports.useState(!1),b=A(j,2),C=b[0],k=b[1],S=g||C,x=function(){$(d)},E=function(i){(i.key==="Enter"||i.code==="Enter"||i.keyCode===We.ENTER)&&x()};s.exports.useEffect(function(){if(!S&&c>0){var i=setTimeout(function(){x()},c*1e3);return function(){clearTimeout(i)}}},[c,S,O]);var a="".concat(r,"-notice");return s.exports.createElement("div",V({},u,{ref:t,className:F(a,o,ce({},"".concat(a,"-closable"),h)),style:n,onMouseEnter:function(i){var f;k(!0),u==null||(f=u.onMouseEnter)===null||f===void 0||f.call(u,i)},onMouseLeave:function(i){var f;k(!1),u==null||(f=u.onMouseLeave)===null||f===void 0||f.call(u,i)},onClick:m}),s.exports.createElement("div",{className:"".concat(a,"-content")},p),h&&s.exports.createElement("a",{tabIndex:0,className:"".concat(a,"-close"),onKeyDown:E,onClick:function(i){i.preventDefault(),i.stopPropagation(),x()}},v))}),ye=L.createContext({}),rt=function(e){var t=e.children,r=e.classNames;return L.createElement(ye.Provider,{value:{classNames:r}},t)},xe=8,he=3,Ce=16,st=function(e){var t={offset:xe,threshold:he,gap:Ce};if(e&&Be(e)==="object"){var r,n,o;t.offset=(r=e.offset)!==null&&r!==void 0?r:xe,t.threshold=(n=e.threshold)!==null&&n!==void 0?n:he,t.gap=(o=e.gap)!==null&&o!==void 0?o:Ce}return[!!e,t]},at=["className","style","classNames","styles"],ct=function(e){var t,r=e.configList,n=e.placement,o=e.prefixCls,l=e.className,c=e.style,d=e.motion,p=e.onAllNoticeRemoved,h=e.onNoticeClose,y=e.stack,v=s.exports.useContext(ye),u=v.classNames,m=s.exports.useRef({}),$=s.exports.useState(null),O=A($,2),g=O[0],j=O[1],b=s.exports.useState([]),C=A(b,2),k=C[0],S=C[1],x=r.map(function(P){return{config:P,key:String(P.key)}}),E=st(y),a=A(E,2),i=a[0],f=a[1],N=f.offset,M=f.threshold,B=f.gap,D=i&&(k.length>0||x.length<=M),je=typeof d=="function"?d(n):d;return s.exports.useEffect(function(){i&&k.length>1&&S(function(P){return P.filter(function(T){return x.some(function(U){var q=U.key;return T===q})})})},[k,x,i]),s.exports.useEffect(function(){var P;if(i&&m.current[(P=x[x.length-1])===null||P===void 0?void 0:P.key]){var T;j(m.current[(T=x[x.length-1])===null||T===void 0?void 0:T.key])}},[x,i]),L.createElement(ze,V({key:n,className:F(o,"".concat(o,"-").concat(n),u==null?void 0:u.list,l,(t={},ce(t,"".concat(o,"-stack"),!!i),ce(t,"".concat(o,"-stack-expanded"),D),t)),style:c,keys:x,motionAppear:!0},je,{onAllRemoved:function(){p(n)}}),function(P,T){var U=P.config,q=P.className,Pe=P.style,we=P.index,le=U,ee=le.key,Re=le.times,R=String(ee),z=U,Ie=z.className,Me=z.style,X=z.classNames,G=z.styles,Ae=pe(z,at),te=x.findIndex(function(I){return I.key===R}),Q={};if(i){var K=x.length-1-(te>-1?te:we-1),ue=n==="top"||n==="bottom"?"-50%":"0";if(K>0){var ne,oe,re;Q.height=D?(ne=m.current[R])===null||ne===void 0?void 0:ne.offsetHeight:g==null?void 0:g.offsetHeight;for(var fe=0,se=0;se<K;se++){var ae;fe+=((ae=m.current[x[x.length-1-se].key])===null||ae===void 0?void 0:ae.offsetHeight)+B}var Fe=(D?fe:K*N)*(n.startsWith("top")?1:-1),Te=!D&&g!==null&&g!==void 0&&g.offsetWidth&&(oe=m.current[R])!==null&&oe!==void 0&&oe.offsetWidth?((g==null?void 0:g.offsetWidth)-N*2*(K<3?K:3))/((re=m.current[R])===null||re===void 0?void 0:re.offsetWidth):1;Q.transform="translate3d(".concat(ue,", ").concat(Fe,"px, 0) scaleX(").concat(Te,")")}else Q.transform="translate3d(".concat(ue,", 0, 0)")}return L.createElement("div",{ref:T,className:F("".concat(o,"-notice-wrapper"),q,X==null?void 0:X.wrapper),style:_(_(_({},Pe),Q),G==null?void 0:G.wrapper),onMouseEnter:function(){return S(function(I){return I.includes(R)?I:[].concat(W(I),[R])})},onMouseLeave:function(){return S(function(I){return I.filter(function(He){return He!==R})})}},L.createElement(ve,V({},Ae,{ref:function(I){te>-1?m.current[R]=I:delete m.current[R]},prefixCls:o,classNames:X,styles:G,className:F(Ie,u==null?void 0:u.notice),style:Me,times:Re,key:ee,eventKey:ee,onNoticeClose:h,hovering:i&&k.length>0})))})},it=s.exports.forwardRef(function(e,t){var r=e.prefixCls,n=r===void 0?"rc-notification":r,o=e.container,l=e.motion,c=e.maxCount,d=e.className,p=e.style,h=e.onAllRemoved,y=e.stack,v=e.renderNotifications,u=s.exports.useState([]),m=A(u,2),$=m[0],O=m[1],g=function(a){var i,f=$.find(function(N){return N.key===a});f==null||(i=f.onClose)===null||i===void 0||i.call(f),O(function(N){return N.filter(function(M){return M.key!==a})})};s.exports.useImperativeHandle(t,function(){return{open:function(a){O(function(i){var f=W(i),N=f.findIndex(function(D){return D.key===a.key}),M=_({},a);if(N>=0){var B;M.times=(((B=i[N])===null||B===void 0?void 0:B.times)||0)+1,f[N]=M}else M.times=0,f.push(M);return c>0&&f.length>c&&(f=f.slice(-c)),f})},close:function(a){g(a)},destroy:function(){O([])}}});var j=s.exports.useState({}),b=A(j,2),C=b[0],k=b[1];s.exports.useEffect(function(){var a={};$.forEach(function(i){var f=i.placement,N=f===void 0?"topRight":f;N&&(a[N]=a[N]||[],a[N].push(i))}),Object.keys(C).forEach(function(i){a[i]=a[i]||[]}),k(a)},[$]);var S=function(a){k(function(i){var f=_({},i),N=f[a]||[];return N.length||delete f[a],f})},x=s.exports.useRef(!1);if(s.exports.useEffect(function(){Object.keys(C).length>0?x.current=!0:x.current&&(h==null||h(),x.current=!1)},[C]),!o)return null;var E=Object.keys(C);return Ke.exports.createPortal(s.exports.createElement(s.exports.Fragment,null,E.map(function(a){var i=C[a],f=s.exports.createElement(ct,{key:a,configList:i,placement:a,prefixCls:n,className:d==null?void 0:d(a),style:p==null?void 0:p(a),motion:l,onNoticeClose:g,onAllNoticeRemoved:S,stack:y});return v?v(f,{prefixCls:n,key:a}):f})),o)}),lt=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],ut=function(){return document.body},be=0;function ft(){for(var e={},t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return r.forEach(function(o){o&&Object.keys(o).forEach(function(l){var c=o[l];c!==void 0&&(e[l]=c)})}),e}function pt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.getContainer,r=t===void 0?ut:t,n=e.motion,o=e.prefixCls,l=e.maxCount,c=e.className,d=e.style,p=e.onAllRemoved,h=e.stack,y=e.renderNotifications,v=pe(e,lt),u=s.exports.useState(),m=A(u,2),$=m[0],O=m[1],g=s.exports.useRef(),j=s.exports.createElement(it,{container:$,ref:g,prefixCls:o,motion:n,maxCount:l,className:c,style:d,onAllRemoved:p,stack:h,renderNotifications:y}),b=s.exports.useState([]),C=A(b,2),k=C[0],S=C[1],x=s.exports.useMemo(function(){return{open:function(E){var a=ft(v,E);(a.key===null||a.key===void 0)&&(a.key="rc-notification-".concat(be),be+=1),S(function(i){return[].concat(W(i),[{type:"open",config:a}])})},close:function(E){S(function(a){return[].concat(W(a),[{type:"close",key:E}])})},destroy:function(){S(function(E){return[].concat(W(E),[{type:"destroy"}])})}}},[]);return s.exports.useEffect(function(){O(r())}),s.exports.useEffect(function(){g.current&&k.length&&(k.forEach(function(E){switch(E.type){case"open":g.current.open(E.config);break;case"close":g.current.close(E.key);break;case"destroy":g.current.destroy();break}}),S(function(E){return E.filter(function(a){return!k.includes(a)})}))},[k]),[x,j]}const mt=e=>{const{componentCls:t,iconCls:r,boxShadow:n,colorText:o,colorSuccess:l,colorError:c,colorWarning:d,colorInfo:p,fontSizeLG:h,motionEaseInOutCirc:y,motionDurationSlow:v,marginXS:u,paddingXS:m,borderRadiusLG:$,zIndexPopup:O,contentPadding:g,contentBg:j}=e,b=`${t}-notice`,C=new me("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:m,transform:"translateY(0)",opacity:1}}),k=new me("MessageMoveOut",{"0%":{maxHeight:e.height,padding:m,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),S={padding:m,textAlign:"center",[`${t}-custom-content > ${r}`]:{verticalAlign:"text-bottom",marginInlineEnd:u,fontSize:h},[`${b}-content`]:{display:"inline-block",padding:g,background:j,borderRadius:$,boxShadow:n,pointerEvents:"all"},[`${t}-success > ${r}`]:{color:l},[`${t}-error > ${r}`]:{color:c},[`${t}-warning > ${r}`]:{color:d},[`${t}-info > ${r},
      ${t}-loading > ${r}`]:{color:p}};return[{[t]:Object.assign(Object.assign({},Ye(e)),{color:o,position:"fixed",top:u,width:"100%",pointerEvents:"none",zIndex:O,[`${t}-move-up`]:{animationFillMode:"forwards"},[`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]:{animationName:C,animationDuration:v,animationPlayState:"paused",animationTimingFunction:y},[`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${t}-move-up-leave`]:{animationName:k,animationDuration:v,animationPlayState:"paused",animationTimingFunction:y},[`${t}-move-up-leave${t}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[t]:{[`${b}-wrapper`]:Object.assign({},S)}},{[`${t}-notice-pure-panel`]:Object.assign(Object.assign({},S),{padding:0,textAlign:"start"})}]},ke=Le("Message",e=>{const t=_e(e,{height:150});return[mt(t)]},e=>({zIndexPopup:e.zIndexPopupBase+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}));var dt=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const gt={info:s.exports.createElement(ot,null),success:s.exports.createElement(Ue,null),error:s.exports.createElement(Xe,null),warning:s.exports.createElement(Ge,null),loading:s.exports.createElement(Qe,null)},Ee=e=>{let{prefixCls:t,type:r,icon:n,children:o}=e;return s.exports.createElement("div",{className:F(`${t}-custom-content`,`${t}-${r}`)},n||gt[r],s.exports.createElement("span",null,o))},vt=e=>{const{prefixCls:t,className:r,type:n,icon:o,content:l}=e,c=dt(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:d}=s.exports.useContext(de),p=t||d("message"),[,h]=ke(p);return s.exports.createElement(ve,Object.assign({},c,{prefixCls:p,className:F(r,h,`${p}-notice-pure-panel`),eventKey:"pure",duration:null,content:s.exports.createElement(Ee,{prefixCls:p,type:n,icon:o},l)}))},yt=vt;function xt(e,t){return{motionName:t??`${e}-move-up`}}function ie(e){let t;const r=new Promise(o=>{t=e(()=>{o(!0)})}),n=()=>{t==null||t()};return n.then=(o,l)=>r.then(o,l),n.promise=r,n}var ht=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Ct=8,bt=3,kt=e=>{let{children:t,prefixCls:r}=e;const[,n]=ke(r);return s.exports.createElement(rt,{classNames:{list:n,notice:n}},t)},Et=(e,t)=>{let{prefixCls:r,key:n}=t;return s.exports.createElement(kt,{prefixCls:r,key:n},e)},Nt=s.exports.forwardRef((e,t)=>{const{top:r,prefixCls:n,getContainer:o,maxCount:l,duration:c=bt,rtl:d,transitionName:p,onAllRemoved:h}=e,{getPrefixCls:y,getPopupContainer:v,message:u}=s.exports.useContext(de),m=n||y("message"),$=()=>({left:"50%",transform:"translateX(-50%)",top:r??Ct}),O=()=>F({[`${m}-rtl`]:d}),g=()=>xt(m,p),j=s.exports.createElement("span",{className:`${m}-close-x`},s.exports.createElement(Je,{className:`${m}-close-icon`})),[b,C]=pt({prefixCls:m,style:$,className:O,motion:g,closable:!1,closeIcon:j,duration:c,getContainer:()=>(o==null?void 0:o())||(v==null?void 0:v())||document.body,maxCount:l,onAllRemoved:h,renderNotifications:Et});return s.exports.useImperativeHandle(t,()=>Object.assign(Object.assign({},b),{prefixCls:m,message:u})),C});let Ne=0;function Oe(e){const t=s.exports.useRef(null);return Ve(),[s.exports.useMemo(()=>{const r=l=>{var c;(c=t.current)===null||c===void 0||c.close(l)},n=l=>{if(!t.current){const C=()=>{};return C.then=()=>{},C}const{open:c,prefixCls:d,message:p}=t.current,h=`${d}-notice`,{content:y,icon:v,type:u,key:m,className:$,style:O,onClose:g}=l,j=ht(l,["content","icon","type","key","className","style","onClose"]);let b=m;return b==null&&(Ne+=1,b=`antd-message-${Ne}`),ie(C=>(c(Object.assign(Object.assign({},j),{key:b,content:s.exports.createElement(Ee,{prefixCls:d,type:u,icon:v},y),placement:"top",className:F(u&&`${h}-${u}`,$,p==null?void 0:p.className),style:Object.assign(Object.assign({},p==null?void 0:p.style),O),onClose:()=>{g==null||g(),C()}})),()=>{r(b)}))},o={open:n,destroy:l=>{var c;l!==void 0?r(l):(c=t.current)===null||c===void 0||c.destroy()}};return["info","success","warning","error","loading"].forEach(l=>{const c=(d,p,h)=>{let y;d&&typeof d=="object"&&"content"in d?y=d:y={content:d};let v,u;typeof p=="function"?u=p:(v=p,u=h);const m=Object.assign(Object.assign({onClose:u,duration:v},y),{type:l});return n(m)};o[l]=c}),o},[]),s.exports.createElement(Nt,Object.assign({key:"message-holder"},e,{ref:t}))]}function Ot(e){return Oe(e)}let w=null,H=e=>e(),Y=[],J={};function Se(){const{prefixCls:e,getContainer:t,duration:r,rtl:n,maxCount:o,top:l}=J,c=e??ge().getPrefixCls("message"),d=(t==null?void 0:t())||document.body;return{prefixCls:c,getContainer:()=>d,duration:r,rtl:n,maxCount:o,top:l}}const St=s.exports.forwardRef((e,t)=>{const[r,n]=s.exports.useState(Se),[o,l]=Oe(r),c=ge(),d=c.getRootPrefixCls(),p=c.getIconPrefixCls(),h=c.getTheme(),y=()=>{n(Se)};return s.exports.useEffect(y,[]),s.exports.useImperativeHandle(t,()=>{const v=Object.assign({},o);return Object.keys(v).forEach(u=>{v[u]=function(){return y(),o[u].apply(o,arguments)}}),{instance:v,sync:y}}),s.exports.createElement(qe,{prefixCls:d,iconPrefixCls:p,theme:h},l)});function Z(){if(!w){const e=document.createDocumentFragment(),t={fragment:e};w=t,H(()=>{Ze(s.exports.createElement(St,{ref:r=>{const{instance:n,sync:o}=r||{};Promise.resolve().then(()=>{!t.instance&&n&&(t.instance=n,t.sync=o,Z())})}}),e)});return}!w.instance||(Y.forEach(e=>{const{type:t,skipped:r}=e;if(!r)switch(t){case"open":{H(()=>{const n=w.instance.open(Object.assign(Object.assign({},J),e.config));n==null||n.then(e.resolve),e.setCloseFn(n)});break}case"destroy":H(()=>{w==null||w.instance.destroy(e.key)});break;default:H(()=>{var n;const o=(n=w.instance)[t].apply(n,W(e.args));o==null||o.then(e.resolve),e.setCloseFn(o)})}}),Y=[])}function $t(e){J=Object.assign(Object.assign({},J),e),H(()=>{var t;(t=w==null?void 0:w.sync)===null||t===void 0||t.call(w)})}function jt(e){const t=ie(r=>{let n;const o={type:"open",config:e,resolve:r,setCloseFn:l=>{n=l}};return Y.push(o),()=>{n?H(()=>{n()}):o.skipped=!0}});return Z(),t}function Pt(e,t){const r=ie(n=>{let o;const l={type:e,args:t,resolve:n,setCloseFn:c=>{o=c}};return Y.push(l),()=>{o?H(()=>{o()}):l.skipped=!0}});return Z(),r}function wt(e){Y.push({type:"destroy",key:e}),Z()}const Rt=["success","info","warning","error","loading"],It={open:jt,destroy:wt,config:$t,useMessage:Ot,_InternalPanelDoNotUseOrYouWillBeFired:yt},$e=It;Rt.forEach(e=>{$e[e]=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Pt(e,r)}});const Mt=$e;export{Mt as m};