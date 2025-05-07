import{s as o,r as l,b as a,j as t,L as I}from"./index-415e2806.js";const H=o.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`,D=o.div`
  margin-bottom: 20px;
`,B=o.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`,W=o.div`
  display: flex;
  padding: 15px;
  border-bottom: 1px solid var(--light-gray);
  position: relative;
  cursor: pointer;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: var(--light-gray);
  }
`,v=o.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  flex-shrink: 0;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,j=o.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 12px;
  height: 12px;
  background-color: var(--primary-color);
  border-radius: 50%;
  border: 2px solid white;
`,T=o.div`
  flex: 1;
  min-width: 0;
`,E=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`,M=o.h3`
  font-size: 16px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,U=o.span`
  font-size: 12px;
  color: var(--dark-gray);
`,z=o.p`
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--dark-gray);
  font-size: 14px;
`,A=o.div`
  text-align: center;
  padding: 40px 20px;
`,G=o.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
`,L=o.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: 60vh;
`,q=o.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid var(--light-gray);
`,J=o.button`
  background: none;
  border: none;
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
`,N=o.div`
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
`,O=o.div`
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 18px;
  margin-bottom: 10px;
  word-break: break-word;
  
  ${p=>p.sent?`
    align-self: flex-end;
    background-color: var(--primary-color);
    color: white;
  `:`
    align-self: flex-start;
    background-color: var(--light-gray);
    color: var(--text-color);
  `}
`,P=o.form`
  display: flex;
  padding: 15px;
  border-top: 1px solid var(--light-gray);
`,V=o.input`
  flex: 1;
  padding: 10px 15px;
  border-radius: 30px;
  border: 1px solid var(--medium-gray);
  font-size: 14px;
  outline: none;
  
  &:focus {
    border-color: var(--primary-color);
  }
`,Y=o.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,$=()=>{var y;const[p,d]=l.useState([]),[i,u]=l.useState(null),[x,m]=l.useState({}),[c,f]=l.useState(""),b=l.useRef(null);l.useEffect(()=>{const s=JSON.parse(localStorage.getItem("roommate-matches")||"[]").map(n=>({...n,lastMessage:w(n.name),timestamp:"2 hours ago",unread:!0}));s.length===0?d([{id:"1",name:"Jamie",age:28,imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",lastMessage:"Hey! I really liked your profile. Would love to chat about the apartment.",timestamp:"2 hours ago",unread:!0},{id:"2",name:"Alex",age:25,imageUrl:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",lastMessage:"When would you be available to meet?",timestamp:"1 day ago",unread:!1},{id:"3",name:"Morgan",age:30,imageUrl:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",lastMessage:"I have a viewing scheduled for this Saturday at 2pm. Would you be interested in joining?",timestamp:"3 days ago",unread:!1}]):d(s);const r={};s.forEach(n=>{r[n.id]=[{id:1,text:w(n.name),sent:!1,timestamp:new Date().toISOString()}]}),m(r)},[]),l.useEffect(()=>{var e;(e=b.current)==null||e.scrollIntoView({behavior:"smooth"})},[x,i]);const w=e=>{const s=["Hey! I really liked your profile. Would love to be roommates!","Hi there! I think we'd be great roommates. When are you looking to move?","Hello! I'm interested in discussing the possibility of sharing an apartment. Are you still looking?"];return s[Math.floor(Math.random()*s.length)]},k=e=>{d(s=>s.map(r=>r.id===e.id?{...r,unread:!1}:r)),u(e)},S=e=>{if(e.preventDefault(),!c.trim()||!i)return;const s={id:Date.now(),text:c.trim(),sent:!0,timestamp:new Date().toISOString()};m(r=>({...r,[i.id]:[...r[i.id]||[],s]})),d(r=>r.map(n=>n.id===i.id?{...n,lastMessage:c.trim(),timestamp:"Just now"}:n)),f(""),setTimeout(()=>{const r=["That sounds great! When would you like to meet?","I'm interested too! Do you have any specific requirements for a roommate?","Thanks for reaching out! Would you prefer to visit the place first?","I like your profile too! What area are you looking to live in?","Perfect timing! I've been looking for someone like you to share with!"],n={id:Date.now(),text:r[Math.floor(Math.random()*r.length)],sent:!1,timestamp:new Date().toISOString()};m(g=>({...g,[i.id]:[...g[i.id]||[],n]})),d(g=>g.map(h=>h.id===i.id?{...h,lastMessage:n.text,timestamp:"Just now"}:h))},1e3+Math.random()*2e3)},C=e=>new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return a(H,{children:[t(D,{children:t("h1",{children:"Your Messages"})}),i?t("div",{children:a(L,{children:[a(q,{children:[t(J,{onClick:()=>{u(null)},children:"←"}),t(v,{children:t("img",{src:i.imageUrl,alt:i.name})}),a(M,{children:[i.name,", ",i.age]})]}),a(N,{children:[(y=x[i.id])==null?void 0:y.map(e=>a(O,{sent:e.sent,children:[e.text,t("div",{style:{fontSize:"0.7rem",opacity:.7,marginTop:"5px",textAlign:e.sent?"right":"left"},children:C(e.timestamp)})]},e.id)),t("div",{ref:b})]}),a(P,{onSubmit:S,children:[t(V,{type:"text",placeholder:"Type a message...",value:c,onChange:e=>f(e.target.value)}),t(Y,{type:"submit",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),t("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})]})]})}):p.length>0?t(B,{children:p.map(e=>a(W,{onClick:()=>k(e),children:[a(v,{children:[t("img",{src:e.imageUrl,alt:e.name}),e.unread&&t(j,{})]}),a(T,{children:[a(E,{children:[a(M,{children:[e.name,", ",e.age]}),t(U,{children:e.timestamp})]}),t(z,{children:e.lastMessage})]})]},e.id))}):a(A,{children:[t("h2",{children:"No messages yet"}),t("p",{children:"Match with roommates to start chatting!"}),t(I,{to:"/",children:t(G,{children:"Find Roommates"})})]})]})};export{$ as default};
