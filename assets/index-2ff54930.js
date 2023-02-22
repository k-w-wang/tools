import{r as a,A as ve,_ as D,aM as de,J as ee,b as $,k as I,e as L,f as O,aa as z,aN as pe,aO as me,c as ge,h as xe,m as Ce,Y as Q,q as ye,y as te,aP as _e,aQ as Se,aR as he,ax as Re,aS as Ee,aT as be,aU as ne}from"./index-3f2c8c8e.js";var Ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};const Pe=Ne;var oe=function(t,r){return a.exports.createElement(ve,D(D({},t),{},{ref:r,icon:Pe}))};oe.displayName="InfoCircleFilled";const Ie=a.exports.forwardRef(oe);var j=D({},de),Oe=j.version,$e=j.render;j.unmountComponentAtNode;var Y;try{var Me=Number((Oe||"").split(".")[0]);Me>=18&&(Y=j.createRoot)}catch{}function q(e){var t=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&ee(t)==="object"&&(t.usingClientEntryPoint=e)}var J="__rc_react_root__";function Fe(e,t){q(!0);var r=t[J]||Y(t);q(!1),r.render(e),t[J]=r}function Ae(e,t){$e(e,t)}function we(e,t){if(Y){Fe(e,t);return}Ae(e,t)}var Te=a.exports.forwardRef(function(e,t){var r=e.prefixCls,n=e.style,o=e.className,i=e.duration,l=i===void 0?4.5:i,C=e.eventKey,y=e.content,c=e.closable,d=e.closeIcon,f=d===void 0?"x":d,v=e.props,h=e.onClick,x=e.onNoticeClose,R=a.exports.useState(!1),_=$(R,2),S=_[0],E=_[1],N=function(){x(C)};a.exports.useEffect(function(){if(!S&&l>0){var m=setTimeout(function(){N()},l*1e3);return function(){clearTimeout(m)}}},[l,S]);var P="".concat(r,"-notice");return a.exports.createElement("div",I({},v,{ref:t,className:L(P,o,O({},"".concat(P,"-closable"),c)),style:n,onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)},onClick:h}),a.exports.createElement("div",{className:"".concat(P,"-content")},y),c&&a.exports.createElement("a",{tabIndex:0,className:"".concat(P,"-close"),onClick:function(u){u.preventDefault(),u.stopPropagation(),N()}},f))});const re=Te;var Le=a.exports.forwardRef(function(e,t){var r=e.prefixCls,n=r===void 0?"rc-notification":r,o=e.container,i=e.motion,l=e.maxCount,C=e.className,y=e.style,c=e.onAllRemoved,d=a.exports.useState([]),f=$(d,2),v=f[0],h=f[1],x=function(s){var g,p=v.find(function(b){return b.key===s});p==null||(g=p.onClose)===null||g===void 0||g.call(p),h(function(b){return b.filter(function(A){return A.key!==s})})};a.exports.useImperativeHandle(t,function(){return{open:function(s){h(function(g){var p=z(g),b=p.findIndex(function(A){return A.key===s.key});return b>=0?p[b]=s:p.push(s),l>0&&p.length>l&&(p=p.slice(-l)),p})},close:function(s){x(s)},destroy:function(){h([])}}});var R=a.exports.useState({}),_=$(R,2),S=_[0],E=_[1];a.exports.useEffect(function(){var u={};v.forEach(function(s){var g=s.placement,p=g===void 0?"topRight":g;p&&(u[p]=u[p]||[],u[p].push(s))}),Object.keys(S).forEach(function(s){u[s]=u[s]||[]}),E(u)},[v]);var N=function(s){E(function(g){var p=D({},g),b=p[s]||[];return b.length||delete p[s],p})},P=a.exports.useRef(!1);if(a.exports.useEffect(function(){Object.keys(S).length>0?P.current=!0:P.current&&(c==null||c(),P.current=!1)},[S]),!o)return null;var m=Object.keys(S);return pe.exports.createPortal(a.exports.createElement(a.exports.Fragment,null,m.map(function(u){var s=S[u],g=s.map(function(b){return{config:b,key:b.key}}),p=typeof i=="function"?i(u):i;return a.exports.createElement(me,I({key:u,className:L(n,"".concat(n,"-").concat(u),C==null?void 0:C(u)),style:y==null?void 0:y(u),keys:g,motionAppear:!0},p,{onAllRemoved:function(){N(u)}}),function(b,A){var G=b.config,k=b.className,w=b.style,F=G.key,B=G.className,W=G.style;return a.exports.createElement(re,I({},G,{ref:A,prefixCls:n,className:L(k,B),style:D(D({},w),W),key:F,eventKey:F,onNoticeClose:x}))})})),o)}),Ge=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],De=function(){return document.body},V=0;function ke(){for(var e={},t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return r.forEach(function(o){o&&Object.keys(o).forEach(function(i){var l=o[i];l!==void 0&&(e[i]=l)})}),e}function ze(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.getContainer,r=t===void 0?De:t,n=e.motion,o=e.prefixCls,i=e.maxCount,l=e.className,C=e.style,y=e.onAllRemoved,c=ge(e,Ge),d=a.exports.useState(),f=$(d,2),v=f[0],h=f[1],x=a.exports.useRef(),R=a.exports.createElement(Le,{container:v,ref:x,prefixCls:o,motion:n,maxCount:i,className:l,style:C,onAllRemoved:y}),_=a.exports.useState([]),S=$(_,2),E=S[0],N=S[1],P=a.exports.useMemo(function(){return{open:function(u){var s=ke(c,u);(s.key===null||s.key===void 0)&&(s.key="rc-notification-".concat(V),V+=1),N(function(g){return[].concat(z(g),[{type:"open",config:s}])})},close:function(u){N(function(s){return[].concat(z(s),[{type:"close",key:u}])})},destroy:function(){N(function(u){return[].concat(z(u),[{type:"destroy"}])})}}},[]);return a.exports.useEffect(function(){h(r())}),a.exports.useEffect(function(){x.current&&E.length&&(E.forEach(function(m){switch(m.type){case"open":x.current.open(m.config);break;case"close":x.current.close(m.key);break;case"destroy":x.current.destroy();break}}),N([]))},[E]),[P,R]}var He=function(t){var r,n,o=t.componentCls,i=t.iconCls,l=t.boxShadowSecondary,C=t.colorBgElevated,y=t.colorSuccess,c=t.colorError,d=t.colorWarning,f=t.colorInfo,v=t.fontSizeLG,h=t.motionEaseInOutCirc,x=t.motionDurationSlow,R=t.marginXS,_=t.paddingXS,S=t.borderRadiusLG,E=t.zIndexPopup,N=t.messageNoticeContentPadding,P=new Q("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:_,transform:"translateY(0)",opacity:1}}),m=new Q("MessageMoveOut",{"0%":{maxHeight:t.height,padding:_,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}});return[O({},o,I(I({},ye(t)),(r={position:"fixed",top:R,width:"100%",pointerEvents:"none",zIndex:E},O(r,o+"-move-up",{animationFillMode:"forwards"}),O(r,`
        `+o+`-move-up-appear,
        `+o+`-move-up-enter
      `,{animationName:P,animationDuration:x,animationPlayState:"paused",animationTimingFunction:h}),O(r,`
        `+o+"-move-up-appear"+o+`-move-up-appear-active,
        `+o+"-move-up-enter"+o+`-move-up-enter-active
      `,{animationPlayState:"running"}),O(r,o+"-move-up-leave",{animationName:m,animationDuration:x,animationPlayState:"paused",animationTimingFunction:h}),O(r,o+"-move-up-leave"+o+"-move-up-leave-active",{animationPlayState:"running"}),O(r,"&-rtl",{direction:"rtl",span:{direction:"rtl"}}),r))),O({},o+"-notice",(n={padding:_,textAlign:"center"},O(n,i,{verticalAlign:"text-bottom",marginInlineEnd:R,fontSize:v}),O(n,o+"-notice-content",{display:"inline-block",padding:N,background:C,borderRadius:S,boxShadow:l,pointerEvents:"all"}),O(n,o+"-success "+i,{color:y}),O(n,o+"-error "+i,{color:c}),O(n,o+"-warning "+i,{color:d}),O(n,`
        `+o+"-info "+i+`,
        `+o+"-loading "+i,{color:f}),n)),O({},o+"-notice-pure-panel",{padding:0,textAlign:"start"})]};const ae=xe("Message",function(e){var t=Ce(e,{messageNoticeContentPadding:(e.controlHeightLG-e.fontSize*e.lineHeight)/2+"px "+e.paddingSM+"px"});return[He(t)]},function(e){return{height:150,zIndexPopup:e.zIndexPopupBase+10}});var je=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},Ue={info:a.exports.createElement(Ie,null),success:a.exports.createElement(_e,null),error:a.exports.createElement(Se,null),warning:a.exports.createElement(he,null),loading:a.exports.createElement(Re,null)};function ie(e){var t=e.prefixCls,r=e.type,n=e.icon,o=e.children;return a.exports.createElement("div",{className:L(t+"-custom-content",t+"-"+r)},n||Ue[r],a.exports.createElement("span",null,o))}function Ke(e){var t=e.prefixCls,r=e.className,n=e.type,o=e.icon,i=e.content,l=je(e,["prefixCls","className","type","icon","content"]),C=a.exports.useContext(te),y=C.getPrefixCls,c=t||y("message"),d=ae(c),f=$(d,2),v=f[1];return a.exports.createElement(re,I({},l,{prefixCls:c,className:L(r,v,c+"-notice-pure-panel"),eventKey:"pure",duration:null,content:a.exports.createElement(ie,{prefixCls:c,type:n,icon:o},i)}))}function Be(e,t){return{motionName:t??e+"-move-up"}}function X(e){var t,r=new Promise(function(o){t=e(function(){o(!0)})}),n=function(){t==null||t()};return n.then=function(o,i){return r.then(o,i)},n.promise=r,n}var We=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},Ye=8,Xe=3,Qe=a.exports.forwardRef(function(e,t){var r=e.top,n=e.prefixCls,o=e.getContainer,i=e.maxCount,l=e.rtl,C=e.transitionName,y=e.onAllRemoved,c=a.exports.useContext(te),d=c.getPrefixCls,f=c.getPopupContainer,v=n||d("message"),h=ae(v),x=$(h,2),R=x[1],_=function(){return{left:"50%",transform:"translateX(-50%)",top:r??Ye}},S=function(){return L(R,l?v+"-rtl":"")},E=function(){return Be(v,C)},N=a.exports.createElement("span",{className:v+"-close-x"},a.exports.createElement(Ee,{className:v+"-close-icon"})),P=ze({prefixCls:v,style:_,className:S,motion:E,closable:!1,closeIcon:N,duration:Xe,getContainer:function(){return(o==null?void 0:o())||(f==null?void 0:f())||document.body},maxCount:i,onAllRemoved:y}),m=$(P,2),u=m[0],s=m[1];return a.exports.useImperativeHandle(t,function(){return I(I({},u),{prefixCls:v,hashId:R})}),s}),Z=0;function se(e){var t=a.exports.useRef(null),r=a.exports.useMemo(function(){var n=function(c){var d;(d=t.current)===null||d===void 0||d.close(c)},o=function(c){if(!t.current){var d=function(){};return d.then=function(){},d}var f=t.current,v=f.open,h=f.prefixCls,x=f.hashId,R=h+"-notice",_=c.content,S=c.icon,E=c.type,N=c.key,P=c.className,m=c.onClose,u=We(c,["content","icon","type","key","className","onClose"]),s=N;return s==null&&(Z+=1,s="antd-message-"+Z),X(function(g){return v(I(I({},u),{key:s,content:a.exports.createElement(ie,{prefixCls:h,type:E,icon:S},_),placement:"top",className:L(E&&R+"-"+E,x,P),onClose:function(){m==null||m(),g()}})),function(){n(s)}})},i=function(c){var d;c!==void 0?n(c):(d=t.current)===null||d===void 0||d.destroy()},l={open:o,destroy:i},C=["info","success","warning","error","loading"];return C.forEach(function(y){var c=function(f,v,h){var x;f&&ee(f)==="object"&&"content"in f?x=f:x={content:f};var R,_;typeof v=="function"?_=v:(R=v,_=h);var S=I(I({onClose:_,duration:R},x),{type:y});return o(S)};l[y]=c}),l},[]);return[r,a.exports.createElement(Qe,I({key:"holder"},e,{ref:t}))]}function qe(e){return se(e)}var Je=["success","info","warning","error","loading"],M=null,T=function(t){return t()},H=[],U={};function Ve(){var e=U,t=e.prefixCls,r=e.getContainer,n=e.rtl,o=e.maxCount,i=e.top,l=t??ne().getPrefixCls("message"),C=(r==null?void 0:r())||document.body;return{prefixCls:l,container:C,rtl:n,maxCount:o,top:i}}var Ze=a.exports.forwardRef(function(e,t){var r=a.exports.useState(),n=$(r,2),o=n[0],i=n[1],l=a.exports.useState(),C=$(l,2),y=C[0],c=C[1],d=a.exports.useState(),f=$(d,2),v=f[0],h=f[1],x=a.exports.useState(),R=$(x,2),_=R[0],S=R[1],E=a.exports.useState(),N=$(E,2),P=N[0],m=N[1],u=se({prefixCls:o,getContainer:function(){return y},maxCount:v,rtl:_,top:P}),s=$(u,2),g=s[0],p=s[1],b=ne(),A=b.getRootPrefixCls(),G=b.getIconPrefixCls(),k=function(){var F=Ve(),B=F.prefixCls,W=F.container,ce=F.maxCount,ue=F.rtl,fe=F.top;i(B),c(W),h(ce),S(ue),m(fe)};return a.exports.useEffect(k,[]),a.exports.useImperativeHandle(t,function(){var w=I({},g);return Object.keys(w).forEach(function(F){w[F]=function(){return k(),g[F].apply(g,arguments)}}),{instance:w,sync:k}}),a.exports.createElement(be,{prefixCls:A,iconPrefixCls:G},p)});function K(){if(!M){var e=document.createDocumentFragment(),t={fragment:e};M=t,T(function(){we(a.exports.createElement(Ze,{ref:function(n){var o=n||{},i=o.instance,l=o.sync;Promise.resolve().then(function(){!t.instance&&i&&(t.instance=i,t.sync=l,K())})}}),e)});return}!M.instance||(H.forEach(function(r){var n=r.type,o=r.skipped;if(!o)switch(n){case"open":{T(function(){var i=M.instance.open(I(I({},U),r.config));i==null||i.then(r.resolve),r.setCloseFn(i)});break}case"destroy":T(function(){M==null||M.instance.destroy(r.key)});break;default:T(function(){var i,l=(i=M.instance)[n].apply(i,z(r.args));l==null||l.then(r.resolve),r.setCloseFn(l)})}}),H=[])}function et(e){U=I(I({},U),e),T(function(){var t;(t=M==null?void 0:M.sync)===null||t===void 0||t.call(M)})}function tt(e){var t=X(function(r){var n,o={type:"open",config:e,resolve:r,setCloseFn:function(l){n=l}};return H.push(o),function(){n?T(function(){n()}):o.skipped=!0}});return K(),t}function nt(e,t){var r=X(function(n){var o,i={type:e,args:t,resolve:n,setCloseFn:function(C){o=C}};return H.push(i),function(){o?T(function(){o()}):i.skipped=!0}});return K(),r}function ot(e){H.push({type:"destroy",key:e}),K()}var rt={open:tt,destroy:ot,config:et,useMessage:qe,_InternalPanelDoNotUseOrYouWillBeFired:Ke},le=rt;Je.forEach(function(e){le[e]=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return nt(e,r)}});const it=le;export{it as m};
