import{r as o,a as p}from"./index-9818afee.js";import{d as h}from"./debounce-8d5293c1.js";function C({content:l,className:g}){const[t,d]=o.exports.useState([l]),x=(c,r)=>{d(()=>(t.splice(r,1,...c),[...t]))};return p("div",{className:g,style:{display:"flex",flexDirection:"column",gap:"4px"},children:t.map((c,r)=>p(E,{content:c,onChange:m=>x(m,r)},c+r.toString()))})}function E({content:l,onChange:g}){const t=o.exports.useRef(null),d=o.exports.useRef([]).current,[x,c]=o.exports.useState(null),[r,m]=o.exports.useState({x:0,y:0}),[u,v]=o.exports.useState({x:0,y:0});return o.exports.useEffect(()=>{var s;if(t.current==null)return;const e=document.createTextNode(l);(s=t.current)==null||s.appendChild(e);const i=h(()=>{d.length=0;for(let a=1;a<e.length;a++){const f=document.createRange();f.setStart(e,a),f.setEnd(e,a+1),d.push(f.getBoundingClientRect())}},1e3,!0),n=new ResizeObserver(a=>{for(const f of a){const{width:y}=f.contentRect;i(),console.log("Element width changed:",y)}});return n.observe(t.current),()=>n.disconnect()},[l]),o.exports.useEffect(()=>{var e,i;return(e=t.current)==null||e.addEventListener("mousemove",n=>{v({x:n.clientX,y:n.clientY})}),(i=t.current)==null||i.addEventListener("mouseleave",n=>{v({x:0,y:0})}),()=>{var n,s;(n=t.current)==null||n.removeEventListener("mousemove",()=>{console.log("remove mousemove")}),(s=t.current)==null||s.removeEventListener("mouseleave",()=>{console.log("remove mousemove")})}},[]),o.exports.useEffect(()=>{if(u.x===0||u.y===0){c(null),m({x:0,y:0});return}d.forEach((e,i)=>{var n,s;e.left<=u.x&&e.right>=u.x&&e.top<=u.y&&e.bottom>=u.y&&(m({x:e.left-(((n=t.current)==null?void 0:n.getBoundingClientRect().left)??0)-2,y:e.top-(((s=t.current)==null?void 0:s.getBoundingClientRect().top)??0)}),c(i+1))})},[u]),p("div",{title:"点击任意位置拆分",className:"content",style:{border:"1px dashed #3c85f0",padding:4},ref:t,onClick:()=>{if(x==null)return;const e=[l.substring(0,x),l.substring(x)];g(e)},children:r.x!==0&&r.y!==0&&p("span",{className:"content-before",style:{left:r.x,top:r.y}})})}const L=()=>p(C,{content:"这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！这是一段测试文字！"});export{L as default};
