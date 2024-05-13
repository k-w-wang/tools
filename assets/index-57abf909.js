import{j as n,T as h,a as e,r as s,S as t,B as c,I as m}from"./index-f72dbdd0.js";import{d as u}from"./debounce-4e606a1d.js";import{T as x}from"./Table-bcd70392.js";import{C as p}from"./index-949a80e4.js";import"./useForceUpdate-ee2e3dfd.js";const{Title:r}=h,y=()=>{const a=[{key:"1",params:"fn",explain:"\u5FC5\u586B\uFF0C\u9700\u8981\u89E6\u53D1\u7684\u65B9\u6CD5",type:"Function",default:"-"},{key:"2",params:"delay",explain:"\u53EF\u9009\u9879, \u7B49\u5F85\u65F6\u957F",type:"number",default:"1000"},{key:"3",params:"immediately",explain:"\u7B2C\u4E00\u6B21\u70B9\u51FB\u662F\u5426\u7ACB\u5373\u89E6\u53D1\uFF0C\u4E0D\u7B49\u5F85",type:"boolean",default:"false"}],l=[{title:"\u53C2\u6570",dataIndex:"params",key:"params"},{title:"\u8BF4\u660E",dataIndex:"explain",key:"explain"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",dataIndex:"default",key:"default"}];return n(h,{children:[e(r,{children:"Debounce"}),e(r,{level:5,children:"Debounce\u9632\u6296\u51FD\u6570\uFF0C\u5BF9\u65B9\u6CD5\u8FDB\u884C\u52A0\u5DE5\uFF0C\u4F7F\u5176\u62E5\u6709\u9632\u6296\u529F\u80FD\u3002"}),e(r,{level:3,children:"\u4EE3\u7801\u6F14\u793A"}),e(r,{level:4,children:"\u57FA\u7840\u7528\u6CD5"}),e(f,{}),e(r,{level:4,children:"\u8BBE\u7F6E\u7B49\u5F85\u65F6\u957F"}),e(k,{}),e(r,{level:4,children:"\u7B2C\u4E00\u6B21\u70B9\u51FB\u7ACB\u5373\u89E6\u53D1"}),e(v,{}),e(r,{level:3,children:"API"}),e("pre",{children:e(h.Text,{code:!0,children:"function debounce<T>(fn: T & Function, delay?: number, immediately?: boolean): T"})}),e(r,{level:3,children:"Params"}),e(x,{dataSource:a,columns:l,pagination:!1})]})},f=()=>{const[a,l]=s.exports.useState(0);return e(t,{children:e(p,{children:n(t,{children:[n("div",{children:["count: ",a]}),n(t,{children:[e(c,{onClick:()=>{l(i=>i+1)},children:"\u6B63\u5E38 + 1"}),e(c,{onClick:u(()=>l(i=>i+1)),children:"\u9632\u6296 + 1"})]})]})})})},k=()=>{const[a,l]=s.exports.useState(0),[i,d]=s.exports.useState(1e3);return e(p,{children:n(t,{direction:"vertical",children:[e(m,{value:i,onChange:o=>d(+o.target.value)}),n(t,{children:[n("div",{children:["count: ",a]}),n(t,{children:[e(c,{onClick:()=>{l(o=>o+1)},children:"\u6B63\u5E38 + 1"}),e(c,{onClick:u(()=>l(o=>o+1),i),children:"\u9632\u6296 + 1"})]})]})]})})},v=()=>{const[a,l]=s.exports.useState(0),i=s.exports.useMemo(()=>u(()=>l(d=>d+1),1e3,!0),[]);return e(p,{children:e(t,{direction:"vertical",children:n(t,{children:[n("div",{children:["count: ",a]}),n(t,{children:[e(c,{onClick:()=>{l(d=>d+1)},children:"\u6B63\u5E38 + 1"}),e(c,{onClick:i,children:"\u9632\u6296 + 1"})]})]})})})};export{y as default};
