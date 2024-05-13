import{r as d,j as i,T as p,a as e,S as u,I as h,B as s}from"./index-f72dbdd0.js";import{T as f}from"./Table-bcd70392.js";import{C as m}from"./index-949a80e4.js";import"./useForceUpdate-ee2e3dfd.js";function y(t,n){if(typeof t!="function")throw new TypeError("Expected a function");let a=0;return function(...c){const o=new Date().getTime();o-a-n>=0&&(t.apply(this,c),a=o)}}function x(t,n=1e3){if(typeof t!="function")throw new TypeError("Expected a function");return d.exports.useMemo(()=>y(t,n),[n])}const{Title:r}=p,T=()=>{const t=[{key:"1",params:"fn",explain:"\u5FC5\u586B\uFF0C\u9700\u8981\u89E6\u53D1\u7684\u65B9\u6CD5",type:"Function",default:"-"},{key:"2",params:"delay",explain:"\u53EF\u9009\u9879, \u95F4\u9694\u65F6\u957F",type:"number",default:"1000"}],n=[{title:"\u53C2\u6570",dataIndex:"params",key:"params"},{title:"\u8BF4\u660E",dataIndex:"explain",key:"explain"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",dataIndex:"default",key:"default"}];return i(p,{children:[e(r,{children:"Throttle"}),e(r,{level:5,children:"Throttle\u8282\u6D41\u51FD\u6570\uFF0C\u5BF9\u65B9\u6CD5\u8FDB\u884C\u52A0\u5DE5\uFF0C\u4F7F\u5176\u62E5\u6709\u8282\u6D41\u529F\u80FD\u3002"}),e(r,{level:3,children:"\u4EE3\u7801\u6F14\u793A"}),e(r,{level:4,children:"\u8BBE\u7F6E\u7B49\u5F85\u65F6\u957F"}),e(v,{}),e(r,{level:3,children:"API"}),e("pre",{children:e(p.Text,{code:!0,children:"function throttle<T>(fn: T & Function, delay?: number): T"})}),e(r,{level:3,children:"Params"}),e(f,{dataSource:t,columns:n,pagination:!1})]})},v=()=>{const[t,n]=d.exports.useState(0),[a,c]=d.exports.useState(1e3),o=x(()=>n(l=>l+1),a);return e(m,{children:i(u,{direction:"vertical",children:[e(h,{value:a,onChange:l=>c(+l.target.value)}),i(u,{children:[i("div",{children:["count: ",t]}),i(u,{children:[e(s,{onClick:()=>{n(l=>l+1)},children:"\u6B63\u5E38 + 1"}),e(s,{onClick:o,children:"\u8282\u6D41 + 1"})]})]})]})})};export{T as default};
