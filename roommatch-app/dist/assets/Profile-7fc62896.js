import{s as n,r as b,b as r,j as e,F as R,L as U}from"./index-415e2806.js";const W=n.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`,Y=n.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,$=n.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`,q=n.div`
  height: 250px;
  width: 100%;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,K=n.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`,Q=n.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 20px;
  color: white;
`,X=n.div`
  padding: 20px;

  p {
    margin-bottom: 15px;
    line-height: 1.5;
  }
`,w=n.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
  svg {
    margin-right: 10px;
    color: var(--primary-color);
  }
`,u=n.div`
  margin-bottom: 15px;
`,s=n.label`
  display: block;
  font-size: 14px;
  color: var(--dark-gray);
  margin-bottom: 5px;
`,x=n.input`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--medium-gray);
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 5px;
`,Z=n.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--medium-gray);
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 5px;
  min-height: 100px;
  resize: vertical;
`,_=n.select`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--medium-gray);
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 5px;
`,E=n.div`
  margin-top: 20px;
`,k=n.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
`,l=n.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--light-gray);
  border-radius: 5px;
`,N=n.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    margin-right: 8px;
  }
`,z=n.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,B=n.button`
  flex: 1;
  padding: 15px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`,H=n(B)`
  background-color: var(--primary-color);
  color: white;
`,F=n(B)`
  background-color: white;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
`,ee=n(B)`
  background-color: #ff4757;
  color: white;
`,re=n.button`
  background-color: ${c=>c.active?"var(--primary-color)":"white"};
  color: ${c=>c.active?"white":"var(--primary-color)"};
  border: 1px solid var(--primary-color);
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
`,S=n.div`
  margin: 15px 0;
`,C=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`,L=n.span`
  font-size: 14px;
  color: var(--dark-gray);
`,I=n.span`
  font-weight: bold;
  color: var(--primary-color);
`,D=n.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, var(--light-gray), var(--primary-color));
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`,P=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`,M=n.h3`
  font-size: 18px;
  margin: 20px 0 10px;
  color: var(--primary-color);
`,ie=()=>{const c={name:"Sam Smith",age:27,bio:"Software developer looking for a clean and quiet roommate. I enjoy cooking and hiking on weekends.",location:"Downtown",budget:"$800-1200/mo",moveInDate:"June 1st",profileImage:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",preferences:{smoking:!1,pets:!0,gender:"Any",ageRange:"21-35"},traits:{sleepSchedule:3,socialLevel:3,cleanliness:4}},[h,f]=b.useState(!1),[a,y]=b.useState(c),[o,g]=b.useState(c);b.useEffect(()=>{const d=localStorage.getItem("roommate-user-profile");if(d)try{const i=JSON.parse(d);i.traits||(i.traits=c.traits),y(i),g(i)}catch(i){console.error("Error parsing saved user data:",i)}},[]);const t=d=>{const{name:i,value:p,type:v,checked:j}=d.target;if(i.includes(".")){const[A,J]=i.split(".");g({...o,[A]:{...o[A],[J]:v==="checkbox"?j:v==="range"?parseInt(p,10):p}})}else g({...o,[i]:v==="checkbox"?j:p})},O=d=>{const i=d.target.files[0];if(i){const p=new FileReader;p.onloadend=()=>{g({...o,profileImage:p.result})},p.readAsDataURL(i)}},T=()=>{localStorage.setItem("roommate-user-profile",JSON.stringify(o)),y(o),f(!1)},V=()=>{g(a),f(!1)},G=()=>{window.confirm("Are you sure you want to reset your profile to default?")&&(y(c),g(c),localStorage.setItem("roommate-user-profile",JSON.stringify(c)),f(!1))},m=(d,i)=>{switch(d){case"sleepSchedule":return i===1?"Night Owl":i===2?"Late Nights":i===3?"Balanced":i===4?"Early Nights":"Early Riser";case"socialLevel":return i===1?"Homebody":i===2?"Occasionally Social":i===3?"Balanced":i===4?"Social":"Very Social";case"cleanliness":return i===1?"Relaxed":i===2?"Somewhat Tidy":i===3?"Average":i===4?"Clean":"Very Clean";default:return i}};return r(W,{children:[r(Y,{children:[e("h1",{children:"Your Profile"}),e(re,{active:h,onClick:()=>f(!h),children:h?"Cancel Edit":"Edit Profile"})]}),r($,{children:[r(q,{children:[e("img",{src:o.profileImage,alt:o.name}),h&&r(K,{children:[r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{d:"M20 21h-16a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h4l2-3h4l2 3h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z"}),e("circle",{cx:"12",cy:"13",r:"4"})]}),e("p",{children:"Change Photo"}),e("input",{type:"file",accept:"image/*",onChange:O,style:{position:"absolute",width:"100%",height:"100%",opacity:0,cursor:"pointer"}})]}),e(Q,{children:r("h2",{children:[o.name,", ",o.age]})})]}),e(X,{children:h?r(R,{children:[r(u,{children:[e(s,{children:"Name"}),e(x,{type:"text",name:"name",value:o.name,onChange:t})]}),r(u,{children:[e(s,{children:"Age"}),e(x,{type:"number",name:"age",value:o.age,onChange:t,min:"18",max:"100"})]}),r(u,{children:[e(s,{children:"Location"}),e(x,{type:"text",name:"location",value:o.location,onChange:t})]}),r(u,{children:[e(s,{children:"Budget"}),e(x,{type:"text",name:"budget",value:o.budget,onChange:t,placeholder:"e.g. $800-1200/mo"})]}),r(u,{children:[e(s,{children:"Move-in Date"}),e(x,{type:"text",name:"moveInDate",value:o.moveInDate,onChange:t,placeholder:"e.g. June 1st"})]}),r(u,{children:[e(s,{children:"About You"}),e(Z,{name:"bio",value:o.bio,onChange:t,placeholder:"Tell potential roommates about yourself..."})]}),e(M,{children:"Lifestyle & Habits"}),r(S,{children:[r(C,{children:[e(L,{children:"Sleep Schedule"}),e(I,{children:m("sleepSchedule",o.traits.sleepSchedule)})]}),e(D,{type:"range",min:"1",max:"5",name:"traits.sleepSchedule",value:o.traits.sleepSchedule,onChange:t}),r(P,{children:[e("span",{children:"Night Owl"}),e("span",{children:"Early Riser"})]})]}),r(S,{children:[r(C,{children:[e(L,{children:"Social Level"}),e(I,{children:m("socialLevel",o.traits.socialLevel)})]}),e(D,{type:"range",min:"1",max:"5",name:"traits.socialLevel",value:o.traits.socialLevel,onChange:t}),r(P,{children:[e("span",{children:"Homebody"}),e("span",{children:"Very Social"})]})]}),r(S,{children:[r(C,{children:[e(L,{children:"Cleanliness"}),e(I,{children:m("cleanliness",o.traits.cleanliness)})]}),e(D,{type:"range",min:"1",max:"5",name:"traits.cleanliness",value:o.traits.cleanliness,onChange:t}),r(P,{children:[e("span",{children:"Relaxed"}),e("span",{children:"Very Clean"})]})]}),r(E,{children:[e("h3",{children:"Preferences"}),r(k,{children:[e(l,{children:r(N,{children:[e("input",{type:"checkbox",name:"preferences.smoking",checked:o.preferences.smoking,onChange:t}),"Smoking Allowed"]})}),e(l,{children:r(N,{children:[e("input",{type:"checkbox",name:"preferences.pets",checked:o.preferences.pets,onChange:t}),"Pets Allowed"]})}),r(l,{children:[e(s,{children:"Preferred Gender"}),r(_,{name:"preferences.gender",value:o.preferences.gender,onChange:t,children:[e("option",{value:"Any",children:"Any"}),e("option",{value:"Male",children:"Male"}),e("option",{value:"Female",children:"Female"}),e("option",{value:"Non-binary",children:"Non-binary"})]})]}),r(l,{children:[e(s,{children:"Age Range"}),e(x,{type:"text",name:"preferences.ageRange",value:o.preferences.ageRange,onChange:t,placeholder:"e.g. 21-35"})]})]})]})]}):r(R,{children:[r(w,{children:[r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),e("circle",{cx:"12",cy:"10",r:"3"})]}),e("span",{children:a.location})]}),r(w,{children:[r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),r("span",{children:["Budget: ",a.budget]})]}),r(w,{children:[r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),r("span",{children:["Available: ",a.moveInDate]})]}),e("p",{children:a.bio}),e(M,{children:"Lifestyle & Habits"}),r(k,{children:[r(l,{children:[e("span",{children:"Sleep Schedule"}),e("span",{children:m("sleepSchedule",a.traits.sleepSchedule)})]}),r(l,{children:[e("span",{children:"Social Level"}),e("span",{children:m("socialLevel",a.traits.socialLevel)})]}),r(l,{children:[e("span",{children:"Cleanliness"}),e("span",{children:m("cleanliness",a.traits.cleanliness)})]})]}),r(E,{children:[e("h3",{children:"Preferences"}),r(k,{children:[r(l,{children:[e("span",{children:"Smoking"}),e("span",{children:a.preferences.smoking?"Yes":"No"})]}),r(l,{children:[e("span",{children:"Pets"}),e("span",{children:a.preferences.pets?"Yes":"No"})]}),r(l,{children:[e("span",{children:"Gender"}),e("span",{children:a.preferences.gender})]}),r(l,{children:[e("span",{children:"Age Range"}),e("span",{children:a.preferences.ageRange})]})]})]})]})})]}),h?r(z,{children:[e(F,{onClick:V,children:"Cancel"}),e(H,{onClick:T,children:"Save Changes"})]}):r(z,{children:[e(H,{onClick:()=>f(!0),children:"Edit Profile"}),e(U,{to:"/",style:{flex:1},children:e(F,{children:"Back to Swiping"})})]}),h&&e(ee,{onClick:G,children:"Reset to Default"})]})};export{ie as default};
