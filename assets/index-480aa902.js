import{r as y,j as u,a as t}from"./index-823f429a.js";import{T as c,S as h,I as f,B as x,a as T,m as g}from"./index-4c6a9410.js";function I(d,l="id",n="pId",s="children"){const p=[],a={};for(const e of d){a[e[l]]==null&&(a[e[l]]={[s]:[]}),a[e[l]]={...e,[s]:a[e[l]][s]};const o=a[e[l]];Reflect.deleteProperty(o,n),e[n]===0?p.push(o):(a[e[n]]==null&&(a[e[n]]={[s]:[]}),a[e[n]][s].push(o))}return p}const{Title:i}=c,k=[{id:1,pId:0},{id:2,pId:1},{id:3,pId:2},{id:6,pId:1},{id:4,pId:0},{id:5,pId:4}],w=()=>{const[d,l]=y.exports.useState(()=>JSON.stringify(k,null,4)),[n,s]=y.exports.useState(),p=r=>{l(r)},a=()=>{try{const r=JSON.parse(d),m=I(r);s(JSON.stringify(m,null,4))}catch(r){console.log(r),g.error(r.message)}},e=[{key:"1",params:"items",explain:"必填，需要转化的数组数据",type:"arr[] ",default:"-"},{key:"2",params:"uniqueKey",explain:"可选项, 数组中数据的唯一值的key",type:"string",default:"id"},{key:"3",params:"pId",explain:"可选项, 数组中表示所属父节点的key",type:"string",default:"pId"},{key:"4",params:"childKey",explain:"可选项, 转化出来存放子节点的key",type:"string",default:"children"}],o=[{title:"参数",dataIndex:"params",key:"params"},{title:"说明",dataIndex:"explain",key:"explain"},{title:"类型",dataIndex:"type",key:"type"},{title:"默认值",dataIndex:"default",key:"default"}];return u(c,{children:[t(i,{children:"FlatToTree"}),t(i,{level:5,children:"FlatToTree是一个把数组结构转化为嵌套树结构的方法。"}),t(i,{level:3,children:"代码演示"}),t(i,{level:4,children:"基础用法"}),u(h,{children:[t(f.TextArea,{style:{width:400},rows:30,onChange:r=>p(r.target.value),value:d}),t(x,{type:"primary",onClick:a,children:"转化"}),t(f.TextArea,{style:{width:400},rows:30,value:n})]}),t(i,{level:3,children:"API"}),t("pre",{children:t(c.Text,{code:!0,children:"flatToTree(items: any[], uniqueKey?: string, pId?: string, childKey?: string): any[]"})}),t(i,{level:3,children:"Params"}),t(T,{dataSource:e,columns:o,pagination:!1})]})};export{w as default};
