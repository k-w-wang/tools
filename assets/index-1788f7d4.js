import{r as c,j as o,T as p,a as e,C as g,S as x,I as y,B as k}from"./index-f72dbdd0.js";import{T}from"./Table-bcd70392.js";import{m as I}from"./index-55ab7d99.js";import"./useForceUpdate-ee2e3dfd.js";const h=(i,d=0,n="id",l="children")=>[].concat(...i.map(t=>{const s=JSON.parse(JSON.stringify(t[l]));return Reflect.deleteProperty(t,l),[].concat({...t,pId:d},...h(s,t[n],n,l))})),{Title:r}=p,v=[{id:1,children:[{id:2,children:[{id:3,children:[]}]},{id:6,children:[]}]},{id:4,children:[{id:5,children:[]}]}],S=()=>{const[i,d]=c.exports.useState(()=>JSON.stringify(v,null,4)),[n,l]=c.exports.useState(),t=a=>{d(a)},s=()=>{try{const a=JSON.parse(i),f=h(a);l(JSON.stringify(f,null,4))}catch(a){console.log(a),I.error(a.message)}},m=[{key:"1",params:"arr",explain:"\u5FC5\u586B\uFF0C\u9700\u8981\u8F6C\u5316\u7684\u5D4C\u5957\u6811\u7ED3\u6784\u6570\u636E",type:"arr[]  ",default:"-"},{key:"2",params:"pId",explain:"\u53EF\u9009\u9879, \u7B2C\u4E00\u5C42\u8282\u70B9\u7684\u7236\u8282\u70B9ID",type:"string \uFF5C number",default:"0"},{key:"3",params:"pKey",explain:"\u53EF\u9009\u9879, \u7236\u8282\u70B9id\u7684key\u503C",type:"string",default:"id"},{key:"4",params:"childKey",explain:"\u53EF\u9009\u9879, \u5D4C\u5957\u7684\u5B50\u8282\u70B9key\u503C",type:"string",default:"children"}],u=[{title:"\u53C2\u6570",dataIndex:"params",key:"params"},{title:"\u8BF4\u660E",dataIndex:"explain",key:"explain"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u9ED8\u8BA4\u503C",dataIndex:"default",key:"default"}];return o(p,{children:[e(g,{placeholder:"add commnt",onPost:a=>{console.log(a)},imgUrl:"https://p3-passport.byteimg.com/img/user-avatar/dbe68af40bc02e65b8f1ff4a191c1ad8~100x100.awebp"}),e(r,{children:"TreeToFlat"}),e(r,{level:5,children:"TreeToFlat\u662F\u4E00\u4E2A\u628A\u5D4C\u5957\u6811\u7ED3\u6784\u8F6C\u5316\u4E3A\u6570\u7EC4\u7ED3\u6784\u7684\u65B9\u6CD5\u3002"}),e(r,{level:3,children:"\u4EE3\u7801\u6F14\u793A"}),e(r,{level:4,children:"\u57FA\u7840\u7528\u6CD5"}),o(x,{children:[e(y.TextArea,{style:{width:400},rows:30,onChange:a=>t(a.target.value),value:i}),e(k,{type:"primary",onClick:s,children:"\u8F6C\u5316"}),e(y.TextArea,{style:{width:400},rows:30,value:n})]}),e(r,{level:3,children:"API"}),e("pre",{children:e(p.Text,{code:!0,children:"nestedToFlat(arr: any[], pId?: string | number | undefined, pKey?: string | undefined, childKey?: string | undefined): any[]"})}),e(r,{level:3,children:"Params"}),e(T,{dataSource:m,columns:u,pagination:!1})]})};export{S as default};