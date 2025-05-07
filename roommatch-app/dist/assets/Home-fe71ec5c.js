import{r as J,a as jn,g as $n,s as m,j as u,b as x,F as na,u as En}from"./index-415e2806.js";var oa={exports:{}},sa={exports:{}},la={exports:{}},ca={exports:{}},da={exports:{}},ua={exports:{}},Jr=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Dn=Object.getOwnPropertyNames,zn=Object.prototype.hasOwnProperty,Fn=(e,r)=>{for(var n in r)Jr(e,n,{get:r[n],enumerable:!0})},Ln=(e,r,n,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let h of Dn(r))!zn.call(e,h)&&h!==n&&Jr(e,h,{get:()=>r[h],enumerable:!(s=Vn(r,h))||s.enumerable});return e},Rn=e=>Ln(Jr({},"__esModule",{value:!0}),e),ha={};Fn(ha,{__raf:()=>Tn,raf:()=>le});var Bn=Rn(ha),ar=Be(),le=e=>Vt(e,ar),nr=Be();le.write=e=>Vt(e,nr);var Et=Be();le.onStart=e=>Vt(e,Et);var or=Be();le.onFrame=e=>Vt(e,or);var sr=Be();le.onFinish=e=>Vt(e,sr);var at=[];le.setTimeout=(e,r)=>{let n=le.now()+r,s=()=>{let p=at.findIndex(b=>b.cancel==s);~p&&at.splice(p,1),Te-=~p?1:0},h={time:n,handler:e,cancel:s};return at.splice(pa(n),0,h),Te+=1,fa(),h};var pa=e=>~(~at.findIndex(r=>r.time>e)||~at.length);le.cancel=e=>{Et.delete(e),or.delete(e),sr.delete(e),ar.delete(e),nr.delete(e)};le.sync=e=>{Yr=!0,le.batchedUpdates(e),Yr=!1};le.throttle=e=>{let r;function n(){try{e(...r)}finally{r=null}}function s(...h){r=h,le.onStart(n)}return s.handler=e,s.cancel=()=>{Et.delete(n),r=null},s};var Kr=typeof window<"u"?window.requestAnimationFrame:()=>{};le.use=e=>Kr=e;le.now=typeof performance<"u"?()=>performance.now():Date.now;le.batchedUpdates=e=>e();le.catch=console.error;le.frameLoop="always";le.advance=()=>{le.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ga()};var He=-1,Te=0,Yr=!1;function Vt(e,r){Yr?(r.delete(e),e(0)):(r.add(e),fa())}function fa(){He<0&&(He=0,le.frameLoop!=="demand"&&Kr(ma))}function Hn(){He=-1}function ma(){~He&&(Kr(ma),le.batchedUpdates(ga))}function ga(){let e=He;He=le.now();let r=pa(He);if(r&&(va(at.splice(0,r),n=>n.handler()),Te-=r),!Te){Hn();return}Et.flush(),ar.flush(e?Math.min(64,He-e):16.667),or.flush(),nr.flush(),sr.flush()}function Be(){let e=new Set,r=e;return{add(n){Te+=r==e&&!e.has(n)?1:0,e.add(n)},delete(n){return Te-=r==e&&e.has(n)?1:0,e.delete(n)},flush(n){r.size&&(e=new Set,Te-=r.size,va(r,s=>s(n)&&e.add(s)),Te+=e.size,r=e)}}}function va(e,r){e.forEach(n=>{try{r(n)}catch(s){le.catch(s)}})}var Tn={count(){return Te},isRunning(){return He>=0},clear(){He=-1,at=[],Et=Be(),ar=Be(),or=Be(),nr=Be(),sr=Be(),Te=0}};ua.exports=Bn;var lr=ua.exports,Zr=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,Gn=Object.getOwnPropertyNames,Nn=Object.prototype.hasOwnProperty,ya=(e,r)=>{for(var n in r)Zr(e,n,{get:r[n],enumerable:!0})},Wn=(e,r,n,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let h of Gn(r))!Nn.call(e,h)&&h!==n&&Zr(e,h,{get:()=>r[h],enumerable:!(s=qn(r,h))||s.enumerable});return e},Yn=e=>Wn(Zr({},"__esModule",{value:!0}),e),xa={};ya(xa,{FluidValue:()=>ho,Globals:()=>ba,addFluidObserver:()=>po,callFluidObserver:()=>Ba,callFluidObservers:()=>uo,clamp:()=>Oa,colorToRgba:()=>Qr,colors:()=>ro,createInterpolator:()=>ri,createStringInterpolator:()=>xo,defineHidden:()=>Qn,deprecateDirectCall:()=>Mo,deprecateInterpolate:()=>wo,each:()=>ka,eachProp:()=>Jn,easings:()=>so,flush:()=>Ma,flushCalls:()=>Zn,frameLoop:()=>Ia,getFluidObservers:()=>co,getFluidValue:()=>Ra,hasFluidValue:()=>lo,hex3:()=>Da,hex4:()=>za,hex6:()=>Fa,hex8:()=>La,hsl:()=>Ea,hsla:()=>Va,is:()=>qe,isAnimatedString:()=>_o,isEqual:()=>Xn,isSSR:()=>cr,noop:()=>wa,onResize:()=>Ga,onScroll:()=>$o,once:()=>ii,prefix:()=>hr,raf:()=>Yo.raf,removeFluidObserver:()=>fo,rgb:()=>ja,rgba:()=>$a,setFluidGetter:()=>Ha,toArray:()=>Kn,useConstant:()=>Vo,useForceUpdate:()=>Lo,useIsomorphicLayoutEffect:()=>ai,useMemoOne:()=>Ro,useOnce:()=>To,usePrev:()=>Go,useReducedMotion:()=>Wo});var Un=Yn(xa),ba={};ya(ba,{assign:()=>Sa,colors:()=>Je,createStringInterpolator:()=>ei,skipAnimation:()=>Pa,to:()=>_a,willAdvance:()=>ti});var Gt=lr;function wa(){}var Qn=(e,r,n)=>Object.defineProperty(e,r,{value:n,writable:!0,configurable:!0}),qe={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0};function Xn(e,r){if(qe.arr(e)){if(!qe.arr(r)||e.length!==r.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}return e===r}var ka=(e,r)=>e.forEach(r);function Jn(e,r,n){if(qe.arr(e)){for(let s=0;s<e.length;s++)r.call(n,e[s],`${s}`);return}for(let s in e)e.hasOwnProperty(s)&&r.call(n,e[s],s)}var Kn=e=>qe.und(e)?[]:qe.arr(e)?e:[e];function Ma(e,r){if(e.size){let n=Array.from(e);e.clear(),ka(n,r)}}var Zn=(e,...r)=>Ma(e,n=>n(...r)),cr=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),ei,_a,Je=null,Pa=!1,ti=wa,Sa=e=>{e.to&&(_a=e.to),e.now&&(Gt.raf.now=e.now),e.colors!==void 0&&(Je=e.colors),e.skipAnimation!=null&&(Pa=e.skipAnimation),e.createStringInterpolator&&(ei=e.createStringInterpolator),e.requestAnimationFrame&&Gt.raf.use(e.requestAnimationFrame),e.batchedUpdates&&(Gt.raf.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ti=e.willAdvance),e.frameLoop&&(Gt.raf.frameLoop=e.frameLoop)},Xt=lr,Ct=new Set,Ee=[],Er=[],er=0,Ia={get idle(){return!Ct.size&&!Ee.length},start(e){er>e.priority?(Ct.add(e),Xt.raf.onStart(eo)):(Aa(e),(0,Xt.raf)(Ur))},advance:Ur,sort(e){if(er)Xt.raf.onFrame(()=>Ia.sort(e));else{let r=Ee.indexOf(e);~r&&(Ee.splice(r,1),Ca(e))}},clear(){Ee=[],Ct.clear()}};function eo(){Ct.forEach(Aa),Ct.clear(),(0,Xt.raf)(Ur)}function Aa(e){Ee.includes(e)||Ca(e)}function Ca(e){Ee.splice(to(Ee,r=>r.priority>e.priority),0,e)}function Ur(e){let r=Er;for(let n=0;n<Ee.length;n++){let s=Ee[n];er=s.priority,s.idle||(ti(s),s.advance(e),s.idle||r.push(s))}return er=0,Er=Ee,Er.length=0,Ee=r,Ee.length>0}function to(e,r){let n=e.findIndex(r);return n<0?e.length:n}var Oa=(e,r,n)=>Math.min(Math.max(n,e),r),ro={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Fe="[-+]?\\d*\\.?\\d+",tr=Fe+"%";function dr(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var ja=new RegExp("rgb"+dr(Fe,Fe,Fe)),$a=new RegExp("rgba"+dr(Fe,Fe,Fe,Fe)),Ea=new RegExp("hsl"+dr(Fe,tr,tr)),Va=new RegExp("hsla"+dr(Fe,tr,tr,Fe)),Da=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,za=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Fa=/^#([0-9a-fA-F]{6})$/,La=/^#([0-9a-fA-F]{8})$/;function io(e){let r;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(r=Fa.exec(e))?parseInt(r[1]+"ff",16)>>>0:Je&&Je[e]!==void 0?Je[e]:(r=ja.exec(e))?(st(r[1])<<24|st(r[2])<<16|st(r[3])<<8|255)>>>0:(r=$a.exec(e))?(st(r[1])<<24|st(r[2])<<16|st(r[3])<<8|ji(r[4]))>>>0:(r=Da.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+"ff",16)>>>0:(r=La.exec(e))?parseInt(r[1],16)>>>0:(r=za.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+r[4]+r[4],16)>>>0:(r=Ea.exec(e))?(Ci(Oi(r[1]),Nt(r[2]),Nt(r[3]))|255)>>>0:(r=Va.exec(e))?(Ci(Oi(r[1]),Nt(r[2]),Nt(r[3]))|ji(r[4]))>>>0:null}function Vr(e,r,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(r-e)*6*n:n<1/2?r:n<2/3?e+(r-e)*(2/3-n)*6:e}function Ci(e,r,n){let s=n<.5?n*(1+r):n+r-n*r,h=2*n-s,p=Vr(h,s,e+1/3),b=Vr(h,s,e),T=Vr(h,s,e-1/3);return Math.round(p*255)<<24|Math.round(b*255)<<16|Math.round(T*255)<<8}function st(e){let r=parseInt(e,10);return r<0?0:r>255?255:r}function Oi(e){return(parseFloat(e)%360+360)%360/360}function ji(e){let r=parseFloat(e);return r<0?0:r>1?255:Math.round(r*255)}function Nt(e){let r=parseFloat(e);return r<0?0:r>100?1:r/100}function Qr(e){let r=io(e);if(r===null)return e;r=r||0;let n=(r&4278190080)>>>24,s=(r&16711680)>>>16,h=(r&65280)>>>8,p=(r&255)/255;return`rgba(${n}, ${s}, ${h}, ${p})`}var ri=(e,r,n)=>{if(qe.fun(e))return e;if(qe.arr(e))return ri({range:e,output:r,extrapolate:n});if(qe.str(e.output[0]))return ei(e);let s=e,h=s.output,p=s.range||[0,1],b=s.extrapolateLeft||s.extrapolate||"extend",T=s.extrapolateRight||s.extrapolate||"extend",K=s.easing||(k=>k);return k=>{let E=no(k,p);return ao(k,p[E],p[E+1],h[E],h[E+1],K,b,T,s.map)}};function ao(e,r,n,s,h,p,b,T,K){let k=K?K(e):e;if(k<r){if(b==="identity")return k;b==="clamp"&&(k=r)}if(k>n){if(T==="identity")return k;T==="clamp"&&(k=n)}return s===h?s:r===n?e<=r?s:h:(r===-1/0?k=-k:n===1/0?k=k-r:k=(k-r)/(n-r),k=p(k),s===-1/0?k=-k:h===1/0?k=k+s:k=k*(h-s)+s,k)}function no(e,r){for(var n=1;n<r.length-1&&!(r[n]>=e);++n);return n-1}var oo=(e,r="end")=>n=>{n=r==="end"?Math.min(n,.999):Math.max(n,.001);let s=n*e,h=r==="end"?Math.floor(s):Math.ceil(s);return Oa(0,1,h/e)},rr=1.70158,Wt=rr*1.525,$i=rr+1,Ei=2*Math.PI/3,Vi=2*Math.PI/4.5,Yt=e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,so={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e===0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>$i*e*e*e-rr*e*e,easeOutBack:e=>1+$i*Math.pow(e-1,3)+rr*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*((Wt+1)*2*e-Wt)/2:(Math.pow(2*e-2,2)*((Wt+1)*(e*2-2)+Wt)+2)/2,easeInElastic:e=>e===0?0:e===1?1:-Math.pow(2,10*e-10)*Math.sin((e*10-10.75)*Ei),easeOutElastic:e=>e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e*10-.75)*Ei)+1,easeInOutElastic:e=>e===0?0:e===1?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Vi))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Vi)/2+1,easeInBounce:e=>1-Yt(1-e),easeOutBounce:Yt,easeInOutBounce:e=>e<.5?(1-Yt(1-2*e))/2:(1+Yt(2*e-1))/2,steps:oo},jt=Symbol.for("FluidValue.get"),ht=Symbol.for("FluidValue.observers"),lo=e=>!!(e&&e[jt]),Ra=e=>e&&e[jt]?e[jt]():e,co=e=>e[ht]||null;function Ba(e,r){e.eventObserved?e.eventObserved(r):e(r)}function uo(e,r){let n=e[ht];n&&n.forEach(s=>{Ba(s,r)})}var ho=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Ha(this,e)}},Ha=(e,r)=>Ta(e,jt,r);function po(e,r){if(e[jt]){let n=e[ht];n||Ta(e,ht,n=new Set),n.has(r)||(n.add(r),e.observerAdded&&e.observerAdded(n.size,r))}return r}function fo(e,r){let n=e[ht];if(n&&n.has(r)){let s=n.size-1;s?n.delete(r):e[ht]=null,e.observerRemoved&&e.observerRemoved(s,r)}}var Ta=(e,r,n)=>Object.defineProperty(e,r,{value:n,writable:!0,configurable:!0}),Jt=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,mo=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Di=new RegExp(`(${Jt.source})(%|[a-z]+)`,"i"),go=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ur=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,qa=e=>{let[r,n]=vo(e);if(!r||cr())return e;let s=window.getComputedStyle(document.documentElement).getPropertyValue(r);return s?s.trim():n&&n.startsWith("--")?window.getComputedStyle(document.documentElement).getPropertyValue(n)||e:n&&ur.test(n)?qa(n):n||e},vo=e=>{let r=ur.exec(e);if(!r)return[,];let[,n,s]=r;return[n,s]},Dr,yo=(e,r,n,s,h)=>`rgba(${Math.round(r)}, ${Math.round(n)}, ${Math.round(s)}, ${h})`,xo=e=>{Dr||(Dr=Je?new RegExp(`(${Object.keys(Je).join("|")})(?!\\w)`,"g"):/^\b$/);let r=e.output.map(h=>Ra(h).replace(ur,qa).replace(mo,Qr).replace(Dr,Qr)),n=r.map(h=>h.match(Jt).map(Number)),s=n[0].map((h,p)=>n.map(b=>{if(!(p in b))throw Error('The arity of each "output" value must be equal');return b[p]})).map(h=>ri({...e,output:h}));return h=>{var T;let p=!Di.test(r[0])&&((T=r.find(K=>Di.test(K)))==null?void 0:T.replace(Jt,"")),b=0;return r[0].replace(Jt,()=>`${s[b++](h)}${p||""}`).replace(go,yo)}},hr="react-spring: ",ii=e=>{let r=e,n=!1;if(typeof r!="function")throw new TypeError(`${hr}once requires a function parameter`);return(...s)=>{n||(r(...s),n=!0)}},bo=ii(console.warn);function wo(){bo(`${hr}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var ko=ii(console.warn);function Mo(){ko(`${hr}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function _o(e){return qe.str(e)&&(e[0]=="#"||/\d/.test(e)||!cr()&&ur.test(e)||e in(Je||{}))}var zi=lr,lt,Kt=new WeakMap,Po=e=>e.forEach(({target:r,contentRect:n})=>{var s;return(s=Kt.get(r))==null?void 0:s.forEach(h=>h(n))});function So(e,r){lt||typeof ResizeObserver<"u"&&(lt=new ResizeObserver(Po));let n=Kt.get(r);return n||(n=new Set,Kt.set(r,n)),n.add(e),lt&&lt.observe(r),()=>{let s=Kt.get(r);s&&(s.delete(e),!s.size&&lt&&lt.unobserve(r))}}var Zt=new Set,kt,Io=()=>{let e=()=>{Zt.forEach(r=>r({width:window.innerWidth,height:window.innerHeight}))};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},Ao=e=>(Zt.add(e),kt||(kt=Io()),()=>{Zt.delete(e),!Zt.size&&kt&&(kt(),kt=void 0)}),Ga=(e,{container:r=document.documentElement}={})=>r===document.documentElement?Ao(e):So(e,r),Co=(e,r,n)=>r-e===0?1:(n-e)/(r-e),Oo={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}},jo=class{constructor(r,n){this.createAxis=()=>({current:0,progress:0,scrollLength:0}),this.updateAxis=s=>{let h=this.info[s],{length:p,position:b}=Oo[s];h.current=this.container[`scroll${b}`],h.scrollLength=this.container[`scroll${p}`]-this.container[`client${p}`],h.progress=Co(0,h.scrollLength,h.current)},this.update=()=>{this.updateAxis("x"),this.updateAxis("y")},this.sendEvent=()=>{this.callback(this.info)},this.advance=()=>{this.update(),this.sendEvent()},this.callback=r,this.container=n,this.info={time:0,x:this.createAxis(),y:this.createAxis()}}},Mt=new WeakMap,Fi=new WeakMap,zr=new WeakMap,Li=e=>e===document.documentElement?window:e,$o=(e,{container:r=document.documentElement}={})=>{let n=zr.get(r);n||(n=new Set,zr.set(r,n));let s=new jo(e,r);if(n.add(s),!Mt.has(r)){let p=()=>(n==null||n.forEach(T=>T.advance()),!0);Mt.set(r,p);let b=Li(r);window.addEventListener("resize",p,{passive:!0}),r!==document.documentElement&&Fi.set(r,Ga(p,{container:r})),b.addEventListener("scroll",p,{passive:!0})}let h=Mt.get(r);return(0,zi.raf)(h),()=>{var T;zi.raf.cancel(h);let p=zr.get(r);if(!p||(p.delete(s),p.size))return;let b=Mt.get(r);Mt.delete(r),b&&(Li(r).removeEventListener("scroll",b),window.removeEventListener("resize",b),(T=Fi.get(r))==null||T())}},Eo=J;function Vo(e){let r=(0,Eo.useRef)(null);return r.current===null&&(r.current=e()),r.current}var Do=J,zo=J,Ri=J,ai=cr()?Ri.useEffect:Ri.useLayoutEffect,Fo=()=>{let e=(0,zo.useRef)(!1);return ai(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function Lo(){let e=(0,Do.useState)()[1],r=Fo();return()=>{r.current&&e(Math.random())}}var Fr=J;function Ro(e,r){let[n]=(0,Fr.useState)(()=>({inputs:r,result:e()})),s=(0,Fr.useRef)(),h=s.current,p=h;return p?r&&p.inputs&&Bo(r,p.inputs)||(p={inputs:r,result:e()}):p=n,(0,Fr.useEffect)(()=>{s.current=p,h==n&&(n.inputs=n.result=void 0)},[p]),p.result}function Bo(e,r){if(e.length!==r.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}var Ho=J,To=e=>(0,Ho.useEffect)(e,qo),qo=[],Bi=J;function Go(e){let r=(0,Bi.useRef)();return(0,Bi.useEffect)(()=>{r.current=e}),r.current}var No=J,Wo=()=>{let[e,r]=(0,No.useState)(null);return ai(()=>{let n=window.matchMedia("(prefers-reduced-motion)"),s=h=>{r(h.matches),Sa({skipAnimation:h.matches})};return s(n),n.addEventListener?n.addEventListener("change",s):n.addListener(s),()=>{n.removeEventListener?n.removeEventListener("change",s):n.removeListener(s)}},[]),e},Yo=lr;da.exports=Un;var Q=da.exports,Na={exports:{}},Uo=Object.create,pr=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,Xo=Object.getOwnPropertyNames,Jo=Object.getPrototypeOf,Ko=Object.prototype.hasOwnProperty,Zo=(e,r)=>{for(var n in r)pr(e,n,{get:r[n],enumerable:!0})},Wa=(e,r,n,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let h of Xo(r))!Ko.call(e,h)&&h!==n&&pr(e,h,{get:()=>r[h],enumerable:!(s=Qo(r,h))||s.enumerable});return e},es=(e,r,n)=>(n=e!=null?Uo(Jo(e)):{},Wa(r||!e||!e.__esModule?pr(n,"default",{value:e,enumerable:!0}):n,e)),ts=e=>Wa(pr({},"__esModule",{value:!0}),e),Ya={};Zo(Ya,{Animated:()=>ni,AnimatedArray:()=>oi,AnimatedObject:()=>mr,AnimatedString:()=>fr,AnimatedValue:()=>Dt,createHost:()=>us,getAnimated:()=>Qa,getAnimatedType:()=>os,getPayload:()=>Ja,isAnimated:()=>Ua,setAnimated:()=>Xa});var rs=ts(Ya),is=Q,$t=Symbol.for("Animated:node"),Ua=e=>!!e&&e[$t]===e,Qa=e=>e&&e[$t],Xa=(e,r)=>(0,is.defineHidden)(e,$t,r),Ja=e=>e&&e[$t]&&e[$t].getPayload(),ni=class{constructor(){Xa(this,this)}getPayload(){return this.payload||[]}},Lr=Q,Dt=class extends ni{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Lr.is.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Dt(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,r){return Lr.is.num(e)&&(this.lastPosition=e,r&&(e=Math.round(e/r)*r,this.done&&(this.lastPosition=e))),this._value===e?!1:(this._value=e,!0)}reset(){let{done:e}=this;this.done=!1,Lr.is.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Rr=Q,fr=class extends Dt{constructor(e){super(0),this._string=null,this._toString=(0,Rr.createInterpolator)({output:[e,e]})}static create(e){return new fr(e)}getValue(){return this._string??(this._string=this._toString(this._value))}setValue(e){if(Rr.is.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=(0,Rr.createInterpolator)({output:[this.getValue(),e]})),this._value=0,super.reset()}},as=Q,it=Q,ir={dependencies:null},mr=class extends ni{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){let r={};return(0,it.eachProp)(this.source,(n,s)=>{Ua(n)?r[s]=n.getValue(e):(0,it.hasFluidValue)(n)?r[s]=(0,it.getFluidValue)(n):e||(r[s]=n)}),r}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&(0,it.each)(this.payload,e=>e.reset())}_makePayload(e){if(e){let r=new Set;return(0,it.eachProp)(e,this._addToPayload,r),Array.from(r)}}_addToPayload(e){ir.dependencies&&(0,it.hasFluidValue)(e)&&ir.dependencies.add(e);let r=Ja(e);r&&(0,it.each)(r,n=>this.add(n))}},oi=class extends mr{constructor(e){super(e)}static create(e){return new oi(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let r=this.getPayload();return e.length==r.length?r.map((n,s)=>n.setValue(e[s])).some(Boolean):(super.setValue(e.map(ns)),!0)}};function ns(e){return((0,as.isAnimatedString)(e)?fr:Dt).create(e)}var Hi=Q;function os(e){let r=Qa(e);return r?r.constructor:Hi.is.arr(e)?oi:(0,Hi.isAnimatedString)(e)?fr:Dt}var ut=Q,ss=es(J),_t=J,Ce=Q,Ti=(e,r)=>{let n=!Ce.is.fun(e)||e.prototype&&e.prototype.isReactComponent;return(0,_t.forwardRef)((s,h)=>{let p=(0,_t.useRef)(null),b=n&&(0,_t.useCallback)(P=>{p.current=ds(h,P)},[h]),[T,K]=cs(s,r),k=(0,Ce.useForceUpdate)(),E=()=>{let P=p.current;n&&!P||(P?r.applyAnimatedValues(P,T.getValue(!0)):!1)===!1&&k()},te=new ls(E,K),G=(0,_t.useRef)();(0,Ce.useIsomorphicLayoutEffect)(()=>(G.current=te,(0,Ce.each)(K,P=>(0,Ce.addFluidObserver)(P,te)),()=>{G.current&&((0,Ce.each)(G.current.deps,P=>(0,Ce.removeFluidObserver)(P,G.current)),Ce.raf.cancel(G.current.update))})),(0,_t.useEffect)(E,[]),(0,Ce.useOnce)(()=>()=>{let P=G.current;(0,Ce.each)(P.deps,H=>(0,Ce.removeFluidObserver)(H,P))});let ae=r.getComponentProps(T.getValue());return ss.createElement(e,{...ae,ref:b})})},ls=class{constructor(e,r){this.update=e,this.deps=r}eventObserved(e){e.type=="change"&&Ce.raf.write(this.update)}};function cs(e,r){let n=new Set;return ir.dependencies=n,e.style&&(e={...e,style:r.createAnimatedStyle(e.style)}),e=new mr(e),ir.dependencies=null,[e,n]}function ds(e,r){return e&&(Ce.is.fun(e)?e(r):e.current=r),r}var qi=Symbol.for("AnimatedComponent"),us=(e,{applyAnimatedValues:r=()=>!1,createAnimatedStyle:n=h=>new mr(h),getComponentProps:s=h=>h}={})=>{let h={applyAnimatedValues:r,createAnimatedStyle:n,getComponentProps:s},p=b=>{let T=Gi(b)||"Anonymous";return ut.is.str(b)?b=p[b]||(p[b]=Ti(b,h)):b=b[qi]||(b[qi]=Ti(b,h)),b.displayName=`Animated(${T})`,b};return(0,ut.eachProp)(e,(b,T)=>{ut.is.arr(e)&&(T=Gi(b)),p[T]=p(b)}),{animated:p}},Gi=e=>ut.is.str(e)?e:e&&ut.is.str(e.displayName)?e.displayName:ut.is.fun(e)&&e.name||null;Na.exports=rs;var Ot=Na.exports,Br={exports:{}},Hr,Ni;function hs(){if(Ni)return Hr;Ni=1;var e=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,h=(k,E)=>{for(var te in E)e(k,te,{get:E[te],enumerable:!0})},p=(k,E,te,G)=>{if(E&&typeof E=="object"||typeof E=="function")for(let ae of n(E))!s.call(k,ae)&&ae!==te&&e(k,ae,{get:()=>E[ae],enumerable:!(G=r(E,ae))||G.enumerable});return k},b=k=>p(e({},"__esModule",{value:!0}),k),T={};h(T,{Any:()=>K}),Hr=b(T);var K=class{};return Hr}var Wi;function ps(){return Wi||(Wi=1,Br.exports=hs()),Br.exports}(function(e){var r=Object.create,n=Object.defineProperty,s=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,p=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty,T=(t,i)=>{for(var a in i)n(t,a,{get:i[a],enumerable:!0})},K=(t,i,a,o)=>{if(i&&typeof i=="object"||typeof i=="function")for(let l of h(i))!b.call(t,l)&&l!==a&&n(t,l,{get:()=>i[l],enumerable:!(o=s(i,l))||o.enumerable});return t},k=(t,i,a)=>(K(t,i,"default"),a&&K(a,i,"default")),E=(t,i,a)=>(a=t!=null?r(p(t)):{},K(i||!t||!t.__esModule?n(a,"default",{value:t,enumerable:!0}):a,t)),te=t=>K(n({},"__esModule",{value:!0}),t),G={};T(G,{BailSignal:()=>vr,Controller:()=>Mr,FrameValue:()=>zt,Globals:()=>Ht.Globals,Interpolation:()=>Bt,Spring:()=>bn,SpringContext:()=>ot,SpringRef:()=>Lt,SpringValue:()=>kr,Trail:()=>kn,Transition:()=>Mn,config:()=>se,createInterpolator:()=>Tt.createInterpolator,easings:()=>Tt.easings,inferTo:()=>fe,interpolate:()=>In,to:()=>Sn,update:()=>An,useChain:()=>me,useInView:()=>xn,useIsomorphicLayoutEffect:()=>Tt.useIsomorphicLayoutEffect,useReducedMotion:()=>Tt.useReducedMotion,useResize:()=>vn,useScroll:()=>gn,useSpring:()=>yt,useSpringRef:()=>hn,useSpringValue:()=>pn,useSprings:()=>Sr,useTrail:()=>_i,useTransition:()=>Pi}),e.exports=te(G);var ae=Q,P=Q;function H(t,...i){return P.is.fun(t)?t(...i):t}var de=(t,i)=>t===!0||!!(i&&t&&(P.is.fun(t)?t(i):(0,P.toArray)(t).includes(i))),Pe=(t,i)=>P.is.obj(t)?i&&t[i]:t,ne=(t,i)=>t.default===!0?t[i]:t.default?t.default[i]:void 0,z=t=>t,C=(t,i=z)=>{let a=Z;t.default&&t.default!==!0&&(t=t.default,a=Object.keys(t));let o={};for(let l of a){let d=i(t[l],l);P.is.und(d)||(o[l]=d)}return o},Z=["config","onProps","onStart","onChange","onPause","onResume","onRest"],N={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Me(t){let i={},a=0;if((0,P.eachProp)(t,(o,l)=>{N[l]||(i[l]=o,a++)}),a)return i}function fe(t){let i=Me(t);if(i){let a={to:i};return(0,P.eachProp)(t,(o,l)=>l in i||(a[l]=o)),a}return{...t}}function W(t){return t=(0,P.getFluidValue)(t),P.is.arr(t)?t.map(W):(0,P.isAnimatedString)(t)?P.Globals.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function j(t){for(let i in t)return!0;return!1}function ge(t){return P.is.fun(t)||P.is.arr(t)&&P.is.obj(t[0])}function Le(t,i){var a;(a=t.ref)==null||a.delete(t),i==null||i.delete(t)}function X(t,i){var a;i&&t.ref!==i&&((a=t.ref)==null||a.delete(t),i.add(t),t.ref=i)}function me(t,i,a=1e3){(0,ae.useIsomorphicLayoutEffect)(()=>{if(i){let o=0;(0,ae.each)(t,(l,d)=>{let v=l.current;if(v.length){let g=a*i[d];isNaN(g)?g=o:o=g,(0,ae.each)(v,w=>{(0,ae.each)(w.queue,y=>{let F=y.delay;y.delay=M=>g+H(F||0,M)})}),l.start()}})}else{let o=Promise.resolve();(0,ae.each)(t,l=>{let d=l.current;if(d.length){let v=d.map(g=>{let w=g.queue;return g.queue=[],w});o=o.then(()=>((0,ae.each)(d,(g,w)=>(0,ae.each)(v[w]||[],y=>g.queue.push(y))),Promise.all(l.start())))}})}})}var re=Q,O=J,f=Q,c=Q,$=Ot,ie=Q,se={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},xe={...se.default,mass:1,damping:1,easing:ie.easings.linear,clamp:!1},Se=class{constructor(){this.velocity=0,Object.assign(this,xe)}};function be(t,i,a){a&&(a={...a},Ve(a,i),i={...a,...i}),Ve(t,i),Object.assign(t,i);for(let v in xe)t[v]==null&&(t[v]=xe[v]);let{frequency:o,damping:l}=t,{mass:d}=t;return ie.is.und(o)||(o<.01&&(o=.01),l<0&&(l=0),t.tension=Math.pow(2*Math.PI/o,2)*d,t.friction=4*Math.PI*l*d/o),t}function Ve(t,i){if(!ie.is.und(i.decay))t.duration=void 0;else{let a=!ie.is.und(i.tension)||!ie.is.und(i.friction);(a||!ie.is.und(i.frequency)||!ie.is.und(i.damping)||!ie.is.und(i.mass))&&(t.duration=void 0,t.decay=void 0),a&&(t.frequency=void 0)}}var Re=[],Ke=class{constructor(){this.changed=!1,this.values=Re,this.toValues=null,this.fromValues=Re,this.config=new Se,this.immediate=!1}},Ye=Q;function ue(t,{key:i,props:a,defaultProps:o,state:l,actions:d}){return new Promise((v,g)=>{let w,y,F=de(a.cancel??(o==null?void 0:o.cancel),i);if(F)L();else{Ye.is.und(a.pause)||(l.paused=de(a.pause,i));let V=o==null?void 0:o.pause;V!==!0&&(V=l.paused||de(V,i)),w=H(a.delay||0,i),V?(l.resumeQueue.add(B),d.pause()):(d.resume(),B())}function M(){l.resumeQueue.add(B),l.timeouts.delete(y),y.cancel(),w=y.time-Ye.raf.now()}function B(){w>0&&!Ye.Globals.skipAnimation?(l.delayed=!0,y=Ye.raf.setTimeout(L,w),l.pauseQueue.add(M),l.timeouts.add(y)):L()}function L(){l.delayed&&(l.delayed=!1),l.pauseQueue.delete(M),l.timeouts.delete(y),t<=(l.cancelId||0)&&(F=!0);try{d.start({...a,callId:t,cancel:F},v)}catch(V){g(V)}}})}var ye=Q,gr=(t,i)=>i.length==1?i[0]:i.some(a=>a.cancelled)?nt(t.get()):i.every(a=>a.noop)?li(t.get()):De(t.get(),i.every(a=>a.finished)),li=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),De=(t,i,a=!1)=>({value:t,finished:i,cancelled:a}),nt=t=>({value:t,cancelled:!0,finished:!1});function ci(t,i,a,o){let{callId:l,parentId:d,onRest:v}=i,{asyncTo:g,promise:w}=a;return!d&&t===g&&!i.reset?w:a.promise=(async()=>{a.asyncId=l,a.asyncTo=t;let y=C(i,(S,_)=>_==="onRest"?void 0:S),F,M,B=new Promise((S,_)=>(F=S,M=_)),L=S=>{let _=l<=(a.cancelId||0)&&nt(o)||l!==a.asyncId&&De(o,!1);if(_)throw S.result=_,M(S),S},V=(S,_)=>{let R=new vr,A=new di;return(async()=>{if(ye.Globals.skipAnimation)throw pt(a),A.result=De(o,!1),M(A),A;L(R);let Y=ye.is.obj(S)?{...S}:{..._,to:S};Y.parentId=l,(0,ye.eachProp)(y,(je,oe)=>{ye.is.und(Y[oe])&&(Y[oe]=je)});let he=await o.start(Y);return L(R),a.paused&&await new Promise(je=>{a.resumeQueue.add(je)}),he})()},I;if(ye.Globals.skipAnimation)return pt(a),De(o,!1);try{let S;ye.is.arr(t)?S=(async _=>{for(let R of _)await V(R)})(t):S=Promise.resolve(t(V,o.stop.bind(o))),await Promise.all([S.then(F),B]),I=De(o.get(),!0,!1)}catch(S){if(S instanceof vr)I=S.result;else if(S instanceof di)I=S.result;else throw S}finally{l==a.asyncId&&(a.asyncId=d,a.asyncTo=d?g:void 0,a.promise=d?w:void 0)}return ye.is.fun(v)&&ye.raf.batchedUpdates(()=>{v(I,o,o.item)}),I})()}function pt(t,i){(0,ye.flush)(t.timeouts,a=>a.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,i&&(t.cancelId=i)}var vr=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},di=class extends Error{constructor(){super("SkipAnimationSignal")}},Ze=Q,en=Ot,yr=t=>t instanceof zt,tn=1,zt=class extends Ze.FluidValue{constructor(){super(...arguments),this.id=tn++,this._priority=0}get priority(){return this._priority}set priority(t){this._priority!=t&&(this._priority=t,this._onPriorityChange(t))}get(){let t=(0,en.getAnimated)(this);return t&&t.getValue()}to(...t){return Ze.Globals.to(this,t)}interpolate(...t){return(0,Ze.deprecateInterpolate)(),Ze.Globals.to(this,t)}toJSON(){return this.get()}observerAdded(t){t==1&&this._attach()}observerRemoved(t){t==0&&this._detach()}_attach(){}_detach(){}_onChange(t,i=!1){(0,Ze.callFluidObservers)(this,{type:"change",parent:this,value:t,idle:i})}_onPriorityChange(t){this.idle||Ze.frameLoop.sort(this),(0,Ze.callFluidObservers)(this,{type:"priority",parent:this,priority:t})}},et=Symbol.for("SpringPhase"),ui=1,xr=2,br=4,wr=t=>(t[et]&ui)>0,Ue=t=>(t[et]&xr)>0,ft=t=>(t[et]&br)>0,hi=(t,i)=>i?t[et]|=xr|ui:t[et]&=~xr,pi=(t,i)=>i?t[et]|=br:t[et]&=~br,kr=class extends zt{constructor(t,i){if(super(),this.animation=new Ke,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!c.is.und(t)||!c.is.und(i)){let a=c.is.obj(t)?{...t}:{...i,from:t};c.is.und(a.default)&&(a.default=!0),this.start(a)}}get idle(){return!(Ue(this)||this._state.asyncTo)||ft(this)}get goal(){return(0,c.getFluidValue)(this.animation.to)}get velocity(){let t=(0,$.getAnimated)(this);return t instanceof $.AnimatedValue?t.lastVelocity||0:t.getPayload().map(i=>i.lastVelocity||0)}get hasAnimated(){return wr(this)}get isAnimating(){return Ue(this)}get isPaused(){return ft(this)}get isDelayed(){return this._state.delayed}advance(t){let i=!0,a=!1,o=this.animation,{toValues:l}=o,{config:d}=o,v=(0,$.getPayload)(o.to);!v&&(0,c.hasFluidValue)(o.to)&&(l=(0,c.toArray)((0,c.getFluidValue)(o.to))),o.values.forEach((y,F)=>{if(y.done)return;let M=y.constructor==$.AnimatedString?1:v?v[F].lastPosition:l[F],B=o.immediate,L=M;if(!B){if(L=y.lastPosition,d.tension<=0){y.done=!0;return}let V=y.elapsedTime+=t,I=o.fromValues[F],S=y.v0!=null?y.v0:y.v0=c.is.arr(d.velocity)?d.velocity[F]:d.velocity,_,R=d.precision||(I==M?.005:Math.min(1,Math.abs(M-I)*.001));if(c.is.und(d.duration))if(d.decay){let A=d.decay===!0?.998:d.decay,Y=Math.exp(-(1-A)*V);L=I+S/(1-A)*(1-Y),B=Math.abs(y.lastPosition-L)<=R,_=S*Y}else{_=y.lastVelocity==null?S:y.lastVelocity;let A=d.restVelocity||R/10,Y=d.clamp?0:d.bounce,he=!c.is.und(Y),je=I==M?y.v0>0:I<M,oe,_e=!1,pe=1,$e=Math.ceil(t/pe);for(let Ie=0;Ie<$e&&(oe=Math.abs(_)>A,!(!oe&&(B=Math.abs(M-L)<=R,B)));++Ie){he&&(_e=L==M||L>M==je,_e&&(_=-_*Y,L=M));let Ge=-d.tension*1e-6*(L-M),Ne=-d.friction*.001*_,D=(Ge+Ne)/d.mass;_=_+D*pe,L=L+_*pe}}else{let A=1;d.duration>0&&(this._memoizedDuration!==d.duration&&(this._memoizedDuration=d.duration,y.durationProgress>0&&(y.elapsedTime=d.duration*y.durationProgress,V=y.elapsedTime+=t)),A=(d.progress||0)+V/this._memoizedDuration,A=A>1?1:A<0?0:A,y.durationProgress=A),L=I+d.easing(A)*(M-I),_=(L-y.lastPosition)/t,B=A==1}y.lastVelocity=_,Number.isNaN(L)&&(console.warn("Got NaN while animating:",this),B=!0)}v&&!v[F].done&&(B=!1),B?y.done=!0:i=!1,y.setValue(L,d.round)&&(a=!0)});let g=(0,$.getAnimated)(this),w=g.getValue();if(i){let y=(0,c.getFluidValue)(o.to);(w!==y||a)&&!d.decay?(g.setValue(y),this._onChange(y)):a&&d.decay&&this._onChange(w),this._stop()}else a&&this._onChange(w)}set(t){return c.raf.batchedUpdates(()=>{this._stop(),this._focus(t),this._set(t)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ue(this)){let{to:t,config:i}=this.animation;c.raf.batchedUpdates(()=>{this._onStart(),i.decay||this._set(t,!1),this._stop()})}return this}update(t){return(this.queue||(this.queue=[])).push(t),this}start(t,i){let a;return c.is.und(t)?(a=this.queue||[],this.queue=[]):a=[c.is.obj(t)?t:{...i,to:t}],Promise.all(a.map(o=>this._update(o))).then(o=>gr(this,o))}stop(t){let{to:i}=this.animation;return this._focus(this.get()),pt(this._state,t&&this._lastCallId),c.raf.batchedUpdates(()=>this._stop(i,t)),this}reset(){this._update({reset:!0})}eventObserved(t){t.type=="change"?this._start():t.type=="priority"&&(this.priority=t.priority+1)}_prepareNode(t){let i=this.key||"",{to:a,from:o}=t;a=c.is.obj(a)?a[i]:a,(a==null||ge(a))&&(a=void 0),o=c.is.obj(o)?o[i]:o,o==null&&(o=void 0);let l={to:a,from:o};return wr(this)||(t.reverse&&([a,o]=[o,a]),o=(0,c.getFluidValue)(o),c.is.und(o)?(0,$.getAnimated)(this)||this._set(a):this._set(o)),l}_update({...t},i){let{key:a,defaultProps:o}=this;t.default&&Object.assign(o,C(t,(v,g)=>/^on/.test(g)?Pe(v,a):v)),gi(this,t,"onProps"),vt(this,"onProps",t,this);let l=this._prepareNode(t);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let d=this._state;return ue(++this._lastCallId,{key:a,props:t,defaultProps:o,state:d,actions:{pause:()=>{ft(this)||(pi(this,!0),(0,c.flushCalls)(d.pauseQueue),vt(this,"onPause",De(this,mt(this,this.animation.to)),this))},resume:()=>{ft(this)&&(pi(this,!1),Ue(this)&&this._resume(),(0,c.flushCalls)(d.resumeQueue),vt(this,"onResume",De(this,mt(this,this.animation.to)),this))},start:this._merge.bind(this,l)}}).then(v=>{if(t.loop&&v.finished&&!(i&&v.noop)){let g=fi(t);if(g)return this._update(g,!0)}return v})}_merge(t,i,a){if(i.cancel)return this.stop(!0),a(nt(this));let o=!c.is.und(t.to),l=!c.is.und(t.from);if(o||l)if(i.callId>this._lastToId)this._lastToId=i.callId;else return a(nt(this));let{key:d,defaultProps:v,animation:g}=this,{to:w,from:y}=g,{to:F=w,from:M=y}=t;l&&!o&&(!i.default||c.is.und(F))&&(F=M),i.reverse&&([F,M]=[M,F]);let B=!(0,c.isEqual)(M,y);B&&(g.from=M),M=(0,c.getFluidValue)(M);let L=!(0,c.isEqual)(F,w);L&&this._focus(F);let V=ge(i.to),{config:I}=g,{decay:S,velocity:_}=I;(o||l)&&(I.velocity=0),i.config&&!V&&be(I,H(i.config,d),i.config!==v.config?H(v.config,d):void 0);let R=(0,$.getAnimated)(this);if(!R||c.is.und(F))return a(De(this,!0));let A=c.is.und(i.reset)?l&&!i.default:!c.is.und(M)&&de(i.reset,d),Y=A?M:this.get(),he=W(F),je=c.is.num(he)||c.is.arr(he)||(0,c.isAnimatedString)(he),oe=!V&&(!je||de(v.immediate||i.immediate,d));if(L){let Ie=(0,$.getAnimatedType)(F);if(Ie!==R.constructor)if(oe)R=this._set(he);else throw Error(`Cannot animate between ${R.constructor.name} and ${Ie.name}, as the "to" prop suggests`)}let _e=R.constructor,pe=(0,c.hasFluidValue)(F),$e=!1;if(!pe){let Ie=A||!wr(this)&&B;(L||Ie)&&($e=(0,c.isEqual)(W(Y),he),pe=!$e),(!(0,c.isEqual)(g.immediate,oe)&&!oe||!(0,c.isEqual)(I.decay,S)||!(0,c.isEqual)(I.velocity,_))&&(pe=!0)}if($e&&Ue(this)&&(g.changed&&!A?pe=!0:pe||this._stop(w)),!V&&((pe||(0,c.hasFluidValue)(w))&&(g.values=R.getPayload(),g.toValues=(0,c.hasFluidValue)(F)?null:_e==$.AnimatedString?[1]:(0,c.toArray)(he)),g.immediate!=oe&&(g.immediate=oe,!oe&&!A&&this._set(w)),pe)){let{onRest:Ie}=g;(0,c.each)(an,Ne=>gi(this,i,Ne));let Ge=De(this,mt(this,w));(0,c.flushCalls)(this._pendingCalls,Ge),this._pendingCalls.add(a),g.changed&&c.raf.batchedUpdates(()=>{var Ne;g.changed=!A,Ie==null||Ie(Ge,this),A?H(v.onRest,Ge):(Ne=g.onStart)==null||Ne.call(g,Ge,this)})}A&&this._set(Y),V?a(ci(i.to,i,this._state,this)):pe?this._start():Ue(this)&&!L?this._pendingCalls.add(a):a(li(Y))}_focus(t){let i=this.animation;t!==i.to&&((0,c.getFluidObservers)(this)&&this._detach(),i.to=t,(0,c.getFluidObservers)(this)&&this._attach())}_attach(){let t=0,{to:i}=this.animation;(0,c.hasFluidValue)(i)&&((0,c.addFluidObserver)(i,this),yr(i)&&(t=i.priority+1)),this.priority=t}_detach(){let{to:t}=this.animation;(0,c.hasFluidValue)(t)&&(0,c.removeFluidObserver)(t,this)}_set(t,i=!0){let a=(0,c.getFluidValue)(t);if(!c.is.und(a)){let o=(0,$.getAnimated)(this);if(!o||!(0,c.isEqual)(a,o.getValue())){let l=(0,$.getAnimatedType)(a);!o||o.constructor!=l?(0,$.setAnimated)(this,l.create(a)):o.setValue(a),o&&c.raf.batchedUpdates(()=>{this._onChange(a,i)})}}return(0,$.getAnimated)(this)}_onStart(){let t=this.animation;t.changed||(t.changed=!0,vt(this,"onStart",De(this,mt(this,t.to)),this))}_onChange(t,i){i||(this._onStart(),H(this.animation.onChange,t,this)),H(this.defaultProps.onChange,t,this),super._onChange(t,i)}_start(){let t=this.animation;(0,$.getAnimated)(this).reset((0,c.getFluidValue)(t.to)),t.immediate||(t.fromValues=t.values.map(i=>i.lastPosition)),Ue(this)||(hi(this,!0),ft(this)||this._resume())}_resume(){c.Globals.skipAnimation?this.finish():c.frameLoop.start(this)}_stop(t,i){if(Ue(this)){hi(this,!1);let a=this.animation;(0,c.each)(a.values,l=>{l.done=!0}),a.toValues&&(a.onChange=a.onPause=a.onResume=void 0),(0,c.callFluidObservers)(this,{type:"idle",parent:this});let o=i?nt(this.get()):De(this.get(),mt(this,t??a.to));(0,c.flushCalls)(this._pendingCalls,o),a.changed&&(a.changed=!1,vt(this,"onRest",o,this))}}};function mt(t,i){let a=W(i),o=W(t.get());return(0,c.isEqual)(o,a)}function fi(t,i=t.loop,a=t.to){let o=H(i);if(o){let l=o!==!0&&fe(o),d=(l||t).reverse,v=!l||l.reset;return gt({...t,loop:i,default:!1,pause:void 0,to:!d||ge(a)?a:void 0,from:v?t.from:void 0,reset:v,...l})}}function gt(t){let{to:i,from:a}=t=fe(t),o=new Set;return c.is.obj(i)&&mi(i,o),c.is.obj(a)&&mi(a,o),t.keys=o.size?Array.from(o):null,t}function rn(t){let i=gt(t);return c.is.und(i.default)&&(i.default=C(i)),i}function mi(t,i){(0,c.eachProp)(t,(a,o)=>a!=null&&i.add(o))}var an=["onStart","onRest","onChange","onPause","onResume"];function gi(t,i,a){t.animation[a]=i[a]!==ne(i,a)?Pe(i[a],t.key):void 0}function vt(t,i,...a){var o,l,d,v;(l=(o=t.animation)[i])==null||l.call(o,...a),(v=(d=t.defaultProps)[i])==null||v.call(d,...a)}var U=Q,nn=["onStart","onChange","onRest"],on=1,Mr=class{constructor(t,i){this.id=on++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),i&&(this._flush=i),t&&this.start({default:!0,...t})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(t=>t.idle&&!t.isDelayed&&!t.isPaused)}get item(){return this._item}set item(t){this._item=t}get(){let t={};return this.each((i,a)=>t[a]=i.get()),t}set(t){for(let i in t){let a=t[i];U.is.und(a)||this.springs[i].set(a)}}update(t){return t&&this.queue.push(gt(t)),this}start(t){let{queue:i}=this;return t?i=(0,U.toArray)(t).map(gt):this.queue=[],this._flush?this._flush(this,i):(wi(this,i),_r(this,i))}stop(t,i){if(t!==!!t&&(i=t),i){let a=this.springs;(0,U.each)((0,U.toArray)(i),o=>a[o].stop(!!t))}else pt(this._state,this._lastAsyncId),this.each(a=>a.stop(!!t));return this}pause(t){if(U.is.und(t))this.start({pause:!0});else{let i=this.springs;(0,U.each)((0,U.toArray)(t),a=>i[a].pause())}return this}resume(t){if(U.is.und(t))this.start({pause:!1});else{let i=this.springs;(0,U.each)((0,U.toArray)(t),a=>i[a].resume())}return this}each(t){(0,U.eachProp)(this.springs,t)}_onFrame(){let{onStart:t,onChange:i,onRest:a}=this._events,o=this._active.size>0,l=this._changed.size>0;(o&&!this._started||l&&!this._started)&&(this._started=!0,(0,U.flush)(t,([g,w])=>{w.value=this.get(),g(w,this,this._item)}));let d=!o&&this._started,v=l||d&&a.size?this.get():null;l&&i.size&&(0,U.flush)(i,([g,w])=>{w.value=v,g(w,this,this._item)}),d&&(this._started=!1,(0,U.flush)(a,([g,w])=>{w.value=v,g(w,this,this._item)}))}eventObserved(t){if(t.type=="change")this._changed.add(t.parent),t.idle||this._active.add(t.parent);else if(t.type=="idle")this._active.delete(t.parent);else return;U.raf.onFrame(this._onFrame)}};function _r(t,i){return Promise.all(i.map(a=>vi(t,a))).then(a=>gr(t,a))}async function vi(t,i,a){let{keys:o,to:l,from:d,loop:v,onRest:g,onResolve:w}=i,y=U.is.obj(i.default)&&i.default;v&&(i.loop=!1),l===!1&&(i.to=null),d===!1&&(i.from=null);let F=U.is.arr(l)||U.is.fun(l)?l:void 0;F?(i.to=void 0,i.onRest=void 0,y&&(y.onRest=void 0)):(0,U.each)(nn,I=>{let S=i[I];if(U.is.fun(S)){let _=t._events[I];i[I]=({finished:R,cancelled:A})=>{let Y=_.get(S);Y?(R||(Y.finished=!1),A&&(Y.cancelled=!0)):_.set(S,{value:null,finished:R||!1,cancelled:A||!1})},y&&(y[I]=i[I])}});let M=t._state;i.pause===!M.paused?(M.paused=i.pause,(0,U.flushCalls)(i.pause?M.pauseQueue:M.resumeQueue)):M.paused&&(i.pause=!0);let B=(o||Object.keys(t.springs)).map(I=>t.springs[I].start(i)),L=i.cancel===!0||ne(i,"cancel")===!0;(F||L&&M.asyncId)&&B.push(ue(++t._lastAsyncId,{props:i,state:M,actions:{pause:U.noop,resume:U.noop,start(I,S){L?(pt(M,t._lastAsyncId),S(nt(t))):(I.onRest=g,S(ci(F,I,M,t)))}}})),M.paused&&await new Promise(I=>{M.resumeQueue.add(I)});let V=gr(t,await Promise.all(B));if(v&&V.finished&&!(a&&V.noop)){let I=fi(i,v,l);if(I)return wi(t,[I]),vi(t,I,!0)}return w&&U.raf.batchedUpdates(()=>w(V,t,t.item)),V}function Pr(t,i){let a={...t.springs};return i&&(0,U.each)((0,U.toArray)(i),o=>{U.is.und(o.keys)&&(o=gt(o)),U.is.obj(o.to)||(o={...o,to:void 0}),bi(a,o,l=>xi(l))}),yi(t,a),a}function yi(t,i){(0,U.eachProp)(i,(a,o)=>{t.springs[o]||(t.springs[o]=a,(0,U.addFluidObserver)(a,t))})}function xi(t,i){let a=new kr;return a.key=t,i&&(0,U.addFluidObserver)(a,i),a}function bi(t,i,a){i.keys&&(0,U.each)(i.keys,o=>{(t[o]||(t[o]=a(o)))._prepareNode(i)})}function wi(t,i){(0,U.each)(i,a=>{bi(t.springs,a,o=>xi(o,t))})}var ki=E(J),sn=J,ln=Q,ot=({children:t,...i})=>{let a=(0,sn.useContext)(Ft),o=i.pause||!!a.pause,l=i.immediate||!!a.immediate;i=(0,ln.useMemoOne)(()=>({pause:o,immediate:l}),[o,l]);let{Provider:d}=Ft;return ki.createElement(d,{value:i},t)},Ft=cn(ot,{});ot.Provider=Ft.Provider,ot.Consumer=Ft.Consumer;function cn(t,i){return Object.assign(t,ki.createContext(i)),t.Provider._context=t,t.Consumer._context=t,t}var Oe=Q,Lt=()=>{let t=[],i=function(o){(0,Oe.deprecateDirectCall)();let l=[];return(0,Oe.each)(t,(d,v)=>{if(Oe.is.und(o))l.push(d.start());else{let g=a(o,d,v);g&&l.push(d.start(g))}}),l};i.current=t,i.add=function(o){t.includes(o)||t.push(o)},i.delete=function(o){let l=t.indexOf(o);~l&&t.splice(l,1)},i.pause=function(){return(0,Oe.each)(t,o=>o.pause(...arguments)),this},i.resume=function(){return(0,Oe.each)(t,o=>o.resume(...arguments)),this},i.set=function(o){(0,Oe.each)(t,(l,d)=>{let v=Oe.is.fun(o)?o(d,l):o;v&&l.set(v)})},i.start=function(o){let l=[];return(0,Oe.each)(t,(d,v)=>{if(Oe.is.und(o))l.push(d.start());else{let g=this._getProps(o,d,v);g&&l.push(d.start(g))}}),l},i.stop=function(){return(0,Oe.each)(t,o=>o.stop(...arguments)),this},i.update=function(o){return(0,Oe.each)(t,(l,d)=>l.update(this._getProps(o,l,d))),this};let a=function(o,l,d){return Oe.is.fun(o)?o(d,l):o};return i._getProps=a,i};function Sr(t,i,a){let o=f.is.fun(i)&&i;o&&!a&&(a=[]);let l=(0,O.useMemo)(()=>o||arguments.length==3?Lt():void 0,[]),d=(0,O.useRef)(0),v=(0,f.useForceUpdate)(),g=(0,O.useMemo)(()=>({ctrls:[],queue:[],flush(_,R){let A=Pr(_,R);return d.current>0&&!g.queue.length&&!Object.keys(A).some(Y=>!_.springs[Y])?_r(_,R):new Promise(Y=>{yi(_,A),g.queue.push(()=>{Y(_r(_,R))}),v()})}}),[]),w=(0,O.useRef)([...g.ctrls]),y=[],F=(0,f.usePrev)(t)||0;(0,O.useMemo)(()=>{(0,f.each)(w.current.slice(t,F),_=>{Le(_,l),_.stop(!0)}),w.current.length=t,M(F,t)},[t]),(0,O.useMemo)(()=>{M(0,Math.min(F,t))},a);function M(_,R){for(let A=_;A<R;A++){let Y=w.current[A]||(w.current[A]=new Mr(null,g.flush)),he=o?o(A,Y):i[A];he&&(y[A]=rn(he))}}let B=w.current.map((_,R)=>Pr(_,y[R])),L=(0,O.useContext)(ot),V=(0,f.usePrev)(L),I=L!==V&&j(L);(0,f.useIsomorphicLayoutEffect)(()=>{d.current++,g.ctrls=w.current;let{queue:_}=g;_.length&&(g.queue=[],(0,f.each)(_,R=>R())),(0,f.each)(w.current,(R,A)=>{l==null||l.add(R),I&&R.start({default:L});let Y=y[A];Y&&(X(R,Y.ref),R.ref?R.queue.push(Y):R.start(Y))})}),(0,f.useOnce)(()=>()=>{(0,f.each)(g.ctrls,_=>_.stop(!0))});let S=B.map(_=>({..._}));return l?[S,l]:S}function yt(t,i){let a=re.is.fun(t),[[o],l]=Sr(1,a?t:[t],a?i||[]:i);return a||arguments.length==2?[o,l]:o}var dn=J,un=()=>Lt(),hn=()=>(0,dn.useState)(un)[0],Mi=Q,pn=(t,i)=>{let a=(0,Mi.useConstant)(()=>new kr(t,i));return(0,Mi.useOnce)(()=>()=>{a.stop()}),a},Rt=Q;function _i(t,i,a){let o=Rt.is.fun(i)&&i;o&&!a&&(a=[]);let l=!0,d,v=Sr(t,(g,w)=>{let y=o?o(g,w):i;return d=y.ref,l=l&&y.reverse,y},a||[{}]);if((0,Rt.useIsomorphicLayoutEffect)(()=>{(0,Rt.each)(v[1].current,(g,w)=>{let y=v[1].current[w+(l?1:-1)];if(X(g,d),g.ref){y&&g.update({to:y.springs});return}y?g.start({to:y.springs}):g.start()})},a),o||arguments.length==3){let g=d??v[1];return g._getProps=(w,y,F)=>{let M=Rt.is.fun(w)?w(F,y):w;if(M){let B=g.current[F+(M.reverse?1:-1)];return B&&(M.to=B.springs),M}},v}return v[0]}var Ir=E(J),xt=J,ee=Q;function Pi(t,i,a){let o=ee.is.fun(i)&&i,{reset:l,sort:d,trail:v=0,expires:g=!0,exitBeforeEnter:w=!1,onDestroyed:y,ref:F,config:M}=o?o():i,B=(0,xt.useMemo)(()=>o||arguments.length==3?Lt():void 0,[]),L=(0,ee.toArray)(t),V=[],I=(0,xt.useRef)(null),S=l?null:I.current;(0,ee.useIsomorphicLayoutEffect)(()=>{I.current=V}),(0,ee.useOnce)(()=>((0,ee.each)(V,D=>{B==null||B.add(D.ctrl),D.ctrl.ref=B}),()=>{(0,ee.each)(I.current,D=>{D.expired&&clearTimeout(D.expirationId),Le(D.ctrl,B),D.ctrl.stop(!0)})}));let _=mn(L,o?o():i,S),R=l&&I.current||[];(0,ee.useIsomorphicLayoutEffect)(()=>(0,ee.each)(R,({ctrl:D,item:q,key:we})=>{Le(D,B),H(y,q,we)}));let A=[];if(S&&(0,ee.each)(S,(D,q)=>{D.expired?(clearTimeout(D.expirationId),R.push(D)):(q=A[q]=_.indexOf(D.key),~q&&(V[q]=D))}),(0,ee.each)(L,(D,q)=>{V[q]||(V[q]={key:_[q],item:D,phase:"mount",ctrl:new Mr},V[q].ctrl.item=D)}),A.length){let D=-1,{leave:q}=o?o():i;(0,ee.each)(A,(we,ke)=>{let ve=S[ke];~we?(D=V.indexOf(ve),V[D]={...ve,item:L[we]}):q&&V.splice(++D,0,ve)})}ee.is.fun(d)&&V.sort((D,q)=>d(D.item,q.item));let Y=-v,he=(0,ee.useForceUpdate)(),je=C(i),oe=new Map,_e=(0,xt.useRef)(new Map),pe=(0,xt.useRef)(!1);(0,ee.each)(V,(D,q)=>{let we=D.key,ke=D.phase,ve=o?o():i,Ae,We,Cn=H(ve.delay||0,we);if(ke=="mount")Ae=ve.enter,We="enter";else{let ze=_.indexOf(we)<0;if(ke!="leave")if(ze)Ae=ve.leave,We="leave";else if(Ae=ve.update)We="update";else return;else if(!ze)Ae=ve.enter,We="enter";else return}if(Ae=H(Ae,D.item,q),Ae=ee.is.obj(Ae)?fe(Ae):{to:Ae},!Ae.config){let ze=M||je.config;Ae.config=H(ze,D.item,q,We)}Y+=v;let tt={...je,delay:Cn+Y,ref:F,immediate:ve.immediate,reset:!1,...Ae};if(We=="enter"&&ee.is.und(tt.from)){let ze=o?o():i,wt=ee.is.und(ze.initial)||S?ze.from:ze.initial;tt.from=H(wt,D.item,q)}let{onResolve:On}=tt;tt.onResolve=ze=>{H(On,ze);let wt=I.current,Qe=wt.find(qt=>qt.key===we);if(Qe&&!(ze.cancelled&&Qe.phase!="update")&&Qe.ctrl.idle){let qt=wt.every(rt=>rt.ctrl.idle);if(Qe.phase=="leave"){let rt=H(g,Qe.item);if(rt!==!1){let $r=rt===!0?0:rt;if(Qe.expired=!0,!qt&&$r>0){$r<=2147483647&&(Qe.expirationId=setTimeout(he,$r));return}}}qt&&wt.some(rt=>rt.expired)&&(_e.current.delete(Qe),w&&(pe.current=!0),he())}};let Ai=Pr(D.ctrl,tt);We==="leave"&&w?_e.current.set(D,{phase:We,springs:Ai,payload:tt}):oe.set(D,{phase:We,springs:Ai,payload:tt})});let $e=(0,xt.useContext)(ot),Ie=(0,ee.usePrev)($e),Ge=$e!==Ie&&j($e);(0,ee.useIsomorphicLayoutEffect)(()=>{Ge&&(0,ee.each)(V,D=>{D.ctrl.start({default:$e})})},[$e]),(0,ee.each)(oe,(D,q)=>{if(_e.current.size){let we=V.findIndex(ke=>ke.key===q.key);V.splice(we,1)}}),(0,ee.useIsomorphicLayoutEffect)(()=>{(0,ee.each)(_e.current.size?_e.current:oe,({phase:D,payload:q},we)=>{let{ctrl:ke}=we;we.phase=D,B==null||B.add(ke),Ge&&D=="enter"&&ke.start({default:$e}),q&&(X(ke,q.ref),(ke.ref||B)&&!pe.current?ke.update(q):(ke.start(q),pe.current&&(pe.current=!1)))})},l?void 0:a);let Ne=D=>Ir.createElement(Ir.Fragment,null,V.map((q,we)=>{let{springs:ke}=oe.get(q)||q.ctrl,ve=D({...ke},q.item,q,we);return ve&&ve.type?Ir.createElement(ve.type,{...ve.props,key:ee.is.str(q.key)||ee.is.num(q.key)?q.key:q.ctrl.id,ref:ve.ref}):ve}));return B?[Ne,B]:Ne}var fn=1;function mn(t,{key:i,keys:a=i},o){if(a===null){let l=new Set;return t.map(d=>{let v=o&&o.find(g=>g.item===d&&g.phase!=="leave"&&!l.has(g));return v?(l.add(v),v.key):fn++})}return ee.is.und(a)?t:ee.is.fun(a)?t.map(a):(0,ee.toArray)(a)}var Ar=Q,gn=({container:t,...i}={})=>{let[a,o]=yt(()=>({scrollX:0,scrollY:0,scrollXProgress:0,scrollYProgress:0,...i}),[]);return(0,Ar.useIsomorphicLayoutEffect)(()=>{let l=(0,Ar.onScroll)(({x:d,y:v})=>{o.start({scrollX:d.current,scrollXProgress:d.progress,scrollY:v.current,scrollYProgress:v.progress})},{container:(t==null?void 0:t.current)||void 0});return()=>{(0,Ar.each)(Object.values(a),d=>d.stop()),l()}},[]),a},Cr=Q,vn=({container:t,...i})=>{let[a,o]=yt(()=>({width:0,height:0,...i}),[]);return(0,Cr.useIsomorphicLayoutEffect)(()=>{let l=(0,Cr.onResize)(({width:d,height:v})=>{o.start({width:d,height:v,immediate:a.width.get()===0||a.height.get()===0})},{container:(t==null?void 0:t.current)||void 0});return()=>{(0,Cr.each)(Object.values(a),d=>d.stop()),l()}},[]),a},Si=J,Or=Q,yn={any:0,all:1};function xn(t,i){let[a,o]=(0,Si.useState)(!1),l=(0,Si.useRef)(),d=Or.is.fun(t)&&t,v=d?d():{},{to:g={},from:w={},...y}=v,F=d?i:t,[M,B]=yt(()=>({from:w,...y}),[]);return(0,Or.useIsomorphicLayoutEffect)(()=>{let L=l.current,{root:V,once:I,amount:S="any",..._}=F??{};if(!L||I&&a||typeof IntersectionObserver>"u")return;let R=new WeakMap,A=()=>(g&&B.start(g),o(!0),I?void 0:()=>{w&&B.start(w),o(!1)}),Y=je=>{je.forEach(oe=>{let _e=R.get(oe.target);if(oe.isIntersecting!==!!_e)if(oe.isIntersecting){let pe=A();Or.is.fun(pe)?R.set(oe.target,pe):he.unobserve(oe.target)}else _e&&(_e(),R.delete(oe.target))})},he=new IntersectionObserver(Y,{root:V&&V.current||void 0,threshold:typeof S=="number"||Array.isArray(S)?S:yn[S],..._});return he.observe(L),()=>he.unobserve(L)},[F]),d?[l,M]:[l,a]}function bn({children:t,...i}){return t(yt(i))}var wn=Q;function kn({items:t,children:i,...a}){let o=_i(t.length,a);return t.map((l,d)=>{let v=i(l,d);return wn.is.fun(v)?v(o[d]):v})}function Mn({items:t,children:i,...a}){return Pi(t,a)(i)}var _n=Q,ce=Q,bt=Ot,Bt=class extends zt{constructor(t,i){super(),this.source=t,this.idle=!0,this._active=new Set,this.calc=(0,ce.createInterpolator)(...i);let a=this._get(),o=(0,bt.getAnimatedType)(a);(0,bt.setAnimated)(this,o.create(a))}advance(t){let i=this._get(),a=this.get();(0,ce.isEqual)(i,a)||((0,bt.getAnimated)(this).setValue(i),this._onChange(i,this.idle)),!this.idle&&Ii(this._active)&&jr(this)}_get(){let t=ce.is.arr(this.source)?this.source.map(ce.getFluidValue):(0,ce.toArray)((0,ce.getFluidValue)(this.source));return this.calc(...t)}_start(){this.idle&&!Ii(this._active)&&(this.idle=!1,(0,ce.each)((0,bt.getPayload)(this),t=>{t.done=!1}),ce.Globals.skipAnimation?(ce.raf.batchedUpdates(()=>this.advance()),jr(this)):ce.frameLoop.start(this))}_attach(){let t=1;(0,ce.each)((0,ce.toArray)(this.source),i=>{(0,ce.hasFluidValue)(i)&&(0,ce.addFluidObserver)(i,this),yr(i)&&(i.idle||this._active.add(i),t=Math.max(t,i.priority+1))}),this.priority=t,this._start()}_detach(){(0,ce.each)((0,ce.toArray)(this.source),t=>{(0,ce.hasFluidValue)(t)&&(0,ce.removeFluidObserver)(t,this)}),this._active.clear(),jr(this)}eventObserved(t){t.type=="change"?t.idle?this.advance():(this._active.add(t.parent),this._start()):t.type=="idle"?this._active.delete(t.parent):t.type=="priority"&&(this.priority=(0,ce.toArray)(this.source).reduce((i,a)=>Math.max(i,(yr(a)?a.priority:0)+1),0))}};function Pn(t){return t.idle!==!1}function Ii(t){return!t.size||Array.from(t).every(Pn)}function jr(t){t.idle||(t.idle=!0,(0,ce.each)((0,bt.getPayload)(t),i=>{i.done=!0}),(0,ce.callFluidObservers)(t,{type:"idle",parent:t}))}var Sn=(t,...i)=>new Bt(t,i),In=(t,...i)=>((0,_n.deprecateInterpolate)(),new Bt(t,i)),Ht=Q;Ht.Globals.assign({createStringInterpolator:Ht.createStringInterpolator,to:(t,i)=>new Bt(t,i)});var An=Ht.frameLoop.advance,Tt=Q;k(G,ps(),e.exports)})(ca);var fs=ca.exports;la.exports=fs;var Yi=la.exports;(function(e){var r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,h=Object.prototype.hasOwnProperty,p=(f,c)=>{for(var $ in c)r(f,$,{get:c[$],enumerable:!0})},b=(f,c,$,ie)=>{if(c&&typeof c=="object"||typeof c=="function")for(let se of s(c))!h.call(f,se)&&se!==$&&r(f,se,{get:()=>c[se],enumerable:!(ie=n(c,se))||ie.enumerable});return f},T=(f,c,$)=>(b(f,c,"default"),$&&b($,c,"default")),K=f=>b(r({},"__esModule",{value:!0}),f),k={};p(k,{a:()=>O,animated:()=>O}),e.exports=K(k);var E=Yi,te=jn,G=Q,ae=Ot,P=/^--/;function H(f,c){return c==null||typeof c=="boolean"||c===""?"":typeof c=="number"&&c!==0&&!P.test(f)&&!(ne.hasOwnProperty(f)&&ne[f])?c+"px":(""+c).trim()}var de={};function Pe(f,c){if(!f.nodeType||!f.setAttribute)return!1;let $=f.nodeName==="filter"||f.parentNode&&f.parentNode.nodeName==="filter",{className:ie,style:se,children:xe,scrollTop:Se,scrollLeft:be,viewBox:Ve,...Re}=c,Ke=Object.values(Re),Ye=Object.keys(Re).map(ue=>$||f.hasAttribute(ue)?ue:de[ue]||(de[ue]=ue.replace(/([A-Z])/g,ye=>"-"+ye.toLowerCase())));xe!==void 0&&(f.textContent=xe);for(let ue in se)if(se.hasOwnProperty(ue)){let ye=H(ue,se[ue]);P.test(ue)?f.style.setProperty(ue,ye):f.style[ue]=ye}Ye.forEach((ue,ye)=>{f.setAttribute(ue,Ke[ye])}),ie!==void 0&&(f.className=ie),Se!==void 0&&(f.scrollTop=Se),be!==void 0&&(f.scrollLeft=be),Ve!==void 0&&f.setAttribute("viewBox",Ve)}var ne={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z=(f,c)=>f+c.charAt(0).toUpperCase()+c.substring(1),C=["Webkit","Ms","Moz","O"];ne=Object.keys(ne).reduce((f,c)=>(C.forEach($=>f[z($,c)]=f[c]),f),ne);var Z=Ot,N=Q,Me=/^(matrix|translate|scale|rotate|skew)/,fe=/^(translate)/,W=/^(rotate|skew)/,j=(f,c)=>N.is.num(f)&&f!==0?f+c:f,ge=(f,c)=>N.is.arr(f)?f.every($=>ge($,c)):N.is.num(f)?f===c:parseFloat(f)===c,Le=class extends Z.AnimatedObject{constructor({x:f,y:c,z:$,...ie}){let se=[],xe=[];(f||c||$)&&(se.push([f||0,c||0,$||0]),xe.push(Se=>[`translate3d(${Se.map(be=>j(be,"px")).join(",")})`,ge(Se,0)])),(0,N.eachProp)(ie,(Se,be)=>{if(be==="transform")se.push([Se||""]),xe.push(Ve=>[Ve,Ve===""]);else if(Me.test(be)){if(delete ie[be],N.is.und(Se))return;let Ve=fe.test(be)?"px":W.test(be)?"deg":"";se.push((0,N.toArray)(Se)),xe.push(be==="rotate3d"?([Re,Ke,Ye,ue])=>[`rotate3d(${Re},${Ke},${Ye},${j(ue,Ve)})`,ge(ue,0)]:Re=>[`${be}(${Re.map(Ke=>j(Ke,Ve)).join(",")})`,ge(Re,be.startsWith("scale")?1:0)])}}),se.length&&(ie.transform=new X(se,xe)),super(ie)}},X=class extends N.FluidValue{constructor(f,c){super(),this.inputs=f,this.transforms=c,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let f="",c=!0;return(0,N.each)(this.inputs,($,ie)=>{let se=(0,N.getFluidValue)($[0]),[xe,Se]=this.transforms[ie](N.is.arr(se)?se:$.map(N.getFluidValue));f+=" "+xe,c=c&&Se}),c?"none":f}observerAdded(f){f==1&&(0,N.each)(this.inputs,c=>(0,N.each)(c,$=>(0,N.hasFluidValue)($)&&(0,N.addFluidObserver)($,this)))}observerRemoved(f){f==0&&(0,N.each)(this.inputs,c=>(0,N.each)(c,$=>(0,N.hasFluidValue)($)&&(0,N.removeFluidObserver)($,this)))}eventObserved(f){f.type=="change"&&(this._value=null),(0,N.callFluidObservers)(this,f)}},me=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];T(k,Yi,e.exports),E.Globals.assign({batchedUpdates:te.unstable_batchedUpdates,createStringInterpolator:G.createStringInterpolator,colors:G.colors});var re=(0,ae.createHost)(me,{applyAnimatedValues:Pe,createAnimatedStyle:f=>new Le(f),getComponentProps:({scrollTop:f,scrollLeft:c,...$})=>$}),O=re.animated})(sa);var ms=sa.exports;oa.exports=ms;var gs=oa.exports;const{useState:vs,useEffect:ys}=J;function xs(){const[e,r]=vs({width:void 0,height:void 0});return ys(()=>{function n(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]),e}var bs=xs;const ct=J,{useSpring:ws,animated:ks}=gs,Ms=bs,Xe={maxTilt:25,rotationPower:50,swipeThreshold:.5},Xr={touchResponsive:{friction:50,tension:2e3},animateOut:{friction:30,tension:400},animateBack:{friction:10,tension:200}},Ui=(e,r)=>Math.sqrt(Math.pow(e,2)+Math.pow(r,2)),_s=e=>{const r=Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2));return{x:e.x/r,y:e.y/r}},Pt=async(e,r,n,s)=>{const h=Ui(n,s),p=Ui(e.x,e.y),b=h*e.x,T=h*e.y,K=e.x*45,k=h/p;return r.start({xyrot:[b,T,K],config:{duration:k}}),await new Promise(E=>setTimeout(()=>{E()},k))},Qi=e=>new Promise(r=>{e.start({xyrot:[0,0,0],config:Xr.animateBack,onRest:r})}),Xi=e=>{if(Math.abs(e.x)>Math.abs(e.y)){if(e.x>Xe.swipeThreshold)return"right";if(e.x<-Xe.swipeThreshold)return"left"}else{if(e.y>Xe.swipeThreshold)return"down";if(e.y<-Xe.swipeThreshold)return"up"}return"none"},Ps=ks.div,Ss=ct.forwardRef(({flickOnSwipe:e=!0,children:r,onSwipe:n,onCardLeftScreen:s,className:h,preventSwipe:p=[],swipeRequirementType:b="velocity",swipeThreshold:T=Xe.swipeThreshold,onSwipeRequirementFulfilled:K,onSwipeRequirementUnfulfilled:k},E)=>{const{width:te,height:G}=Ms(),[{xyrot:ae},P]=ws(()=>({xyrot:[0,0,0],config:Xr.touchResponsive}));Xe.swipeThreshold=T,ct.useImperativeHandle(E,()=>({async swipe(z="right"){n&&n(z);const C=1.3,Z=(Math.random()-.5)/2;z==="right"?await Pt({x:C,y:Z},P,te,G):z==="left"?await Pt({x:-C,y:Z},P,te,G):z==="up"?await Pt({x:Z,y:-C},P,te,G):z==="down"&&await Pt({x:Z,y:C},P,te,G),s&&s(z)},async restoreCard(){await Qi(P)}}));const H=ct.useCallback(async(z,C)=>{const Z=Xi({x:b==="velocity"?C.vx:C.dx,y:b==="velocity"?C.vy:C.dy});if(Z!=="none"&&e&&!p.includes(Z)){n&&n(Z),await Pt(b==="velocity"?{x:C.vx,y:C.vy}:_s({x:C.dx,y:C.dy}),z,te,G),s&&s(Z);return}Qi(z)},[b,e,p,n,s,te,G]);let de="none";const Pe=(z,C,Z,N)=>{let Me=N?z.touches[0].clientX-C.x:z.clientX-C.x,fe=N?z.touches[0].clientY-C.y:z.clientY-C.y;C.x===0&&C.y===0&&(Me=0,fe=0);const W=-(Me-Z.dx)/(Z.timeStamp-Date.now()),j=-(fe-Z.dy)/(Z.timeStamp-Date.now());return{dx:Me,dy:fe,vx:W,vy:j,timeStamp:Date.now()}};ct.useLayoutEffect(()=>{let z={x:0,y:0},C={dx:0,dy:0,vx:0,vy:0,timeStamp:Date.now()},Z=!1;const N=X=>{!X.srcElement.className.includes("pressable")&&X.cancelable&&X.preventDefault(),C=Pe(X,z,C,!0),z={x:X.touches[0].clientX,y:X.touches[0].clientY}};ne.current.addEventListener("touchstart",N);const Me=X=>{Z=!0,C=Pe(X,z,C,!1),z={x:X.clientX,y:X.clientY}};ne.current.addEventListener("mousedown",Me);const fe=X=>{if(K||k){const re=Xi({x:b==="velocity"?X.vx:X.dx,y:b==="velocity"?X.vy:X.dy});re!==de&&(de=re,de==="none"?k&&k():K&&K(re))}let me=X.vx*15;isNaN(me)&&(me=0),me=Math.max(Math.min(me,Xe.maxTilt),-Xe.maxTilt),P.start({xyrot:[X.dx,X.dy,me],config:Xr.touchResponsive})},W=X=>{if(!Z)return;const me=Pe(X,z,C,!1);C=me,fe(me)};window.addEventListener("mousemove",W);const j=X=>{Z&&(Z=!1,H(P,C),z={x:0,y:0},C={dx:0,dy:0,vx:0,vy:0,timeStamp:Date.now()})};window.addEventListener("mouseup",j);const ge=X=>{const me=Pe(X,z,C,!0);C=me,fe(me)};ne.current.addEventListener("touchmove",ge);const Le=X=>{H(P,C),z={x:0,y:0},C={dx:0,dy:0,vx:0,vy:0,timeStamp:Date.now()}};return ne.current.addEventListener("touchend",Le),()=>{ne.current.removeEventListener("touchstart",N),ne.current.removeEventListener("touchmove",ge),ne.current.removeEventListener("touchend",Le),window.removeEventListener("mousemove",W),window.removeEventListener("mouseup",j),ne.current.removeEventListener("mousedown",Me)}},[H,P,K,k]);const ne=ct.useRef();return ct.createElement(Ps,{ref:ne,className:h,style:{transform:ae.to((z,C,Z)=>`translate3d(${z}px, ${C}px, 0px) rotate(${Z}deg)`)},children:r})});var Is=Ss;const As=$n(Is),Cs=m.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 65vh;
  display: flex;
  justify-content: center;
`,Os=m.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`,js=m.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  border-radius: 0 0 20px 20px;
  min-height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,Ut=m.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;

  svg {
    margin-right: 5px;
  }
`,$s=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`,Ji=m.h2`
  font-size: 24px;
  margin: 0;
`,Es=m.div`
  background-color: white;
  color: var(--primary-color);
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
`,Ki=m.button`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  font-size: 14px;
  font-weight: bold;
  opacity: 0.9;
  transition: opacity 0.3s ease, transform 0.2s ease;
  z-index: 10;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`,Vs=m.div`
  display: ${e=>e.visible?"block":"none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  z-index: 5;
  transition: opacity 0.3s ease;
  opacity: ${e=>e.visible?1:0};
`,Ds=m.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  overflow-y: auto;
`,zs=m.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
  font-size: 14px;
  line-height: 1.5;
  max-height: 40%;
  overflow-y: auto;
`,Fs=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`,Ls=m.span`
  background-color: var(--primary-color);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
`,Rs=m.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  z-index: 3;
`,Bs=m.span`
  margin-right: 5px;
  font-size: 14px;
`,Hs=m.div`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  gap: 8px;
  z-index: 4;
`,Ts=m.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${e=>e.active?"white":"rgba(255, 255, 255, 0.5)"};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`,Zi=m.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  z-index: 4;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`,qs=m.button`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: bold;
  z-index: 10;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateX(-50%) scale(1.05);
  }
`,Tr=m.div`
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 10px;
  width: 100%;
`,qr=m.h3`
  font-size: 16px;
  margin: 0 0 8px 0;
  color: white;
  opacity: 0.9;
`,Gr=m.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 14px;
`,Nr=m.span`
  opacity: 0.8;
`,Wr=m.span`
  font-weight: bold;
`,Gs=({roommate:e,onSwipe:r,onCardClick:n})=>{const{name:s,age:h,bio:p,imageUrl:b,location:T,budget:K,moveInDate:k,images:E,interests:te,traits:G}=e,[ae,P]=J.useState(!1),[H,de]=J.useState(0),Pe=W=>{W.stopPropagation(),P(!ae)},ne=()=>{ae?n&&n(e):P(!0)},z=E&&E.length>1,C=W=>{W.stopPropagation(),E&&E.length>1&&de(j=>j===E.length-1?0:j+1)},Z=W=>{W.stopPropagation(),E&&E.length>1&&de(j=>j===0?E.length-1:j-1)},N=(W,j)=>{j.stopPropagation(),de(W)},Me=E&&E.length>0?E[H]:b,fe=(W,j)=>{if(!j)return"Not specified";switch(W){case"sleepSchedule":return j===1?"Night Owl":j===2?"Late Nights":j===3?"Balanced":j===4?"Early Nights":"Early Riser";case"socialLevel":return j===1?"Homebody":j===2?"Occasionally Social":j===3?"Balanced":j===4?"Social":"Very Social";case"cleanliness":return j===1?"Relaxed":j===2?"Somewhat Tidy":j===3?"Average":j===4?"Clean":"Very Clean";default:return j}};return u(Cs,{children:u(As,{className:"swipe",preventSwipe:["up","down"],onSwipe:W=>r(W,e),children:x(Os,{style:{backgroundImage:`url(${Me})`},onClick:ne,children:[z&&x(na,{children:[x(Rs,{children:[u(Bs,{children:"📷"})," ",H+1,"/",E.length]}),u(Hs,{children:E.map((W,j)=>u(Ts,{active:j===H,onClick:ge=>N(j,ge)},j))}),u(Zi,{className:"prev",onClick:Z,children:"❮"}),u(Zi,{className:"next",onClick:C,children:"❯"})]}),x(js,{children:[x($s,{children:[x(Ji,{children:[s,", ",h]}),u(Es,{children:K})]}),x(Ut,{children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),u("circle",{cx:"12",cy:"10",r:"3"})]}),T]}),x(Ut,{children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),u("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),u("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),u("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),"Moving: ",k]}),u("p",{children:p.length>60?`${p.substring(0,60)}...`:p}),u(qs,{onClick:Pe,children:"See Full Profile"}),u(Ki,{onClick:W=>{W.stopPropagation(),n&&n(e)},children:"View Details"})]}),u(Vs,{visible:ae,children:x(Ds,{children:[x(Ji,{children:[s,", ",h]}),x(Ut,{children:[T," • ",K]}),x(Ut,{children:["Available from ",k]}),x(Tr,{children:[u(qr,{children:"About"}),u(zs,{children:p})]}),te&&te.length>0&&x(Tr,{children:[u(qr,{children:"Interests"}),u(Fs,{children:te.map((W,j)=>u(Ls,{children:W},j))})]}),G&&x(Tr,{children:[u(qr,{children:"Lifestyle"}),G.sleepSchedule&&x(Gr,{children:[u(Nr,{children:"Sleep Schedule:"}),u(Wr,{children:fe("sleepSchedule",G.sleepSchedule)})]}),G.socialLevel&&x(Gr,{children:[u(Nr,{children:"Social Level:"}),u(Wr,{children:fe("socialLevel",G.socialLevel)})]}),G.cleanliness&&x(Gr,{children:[u(Nr,{children:"Cleanliness:"}),u(Wr,{children:fe("cleanliness",G.cleanliness)})]})]}),x(Ki,{onClick:W=>{W.stopPropagation(),n&&n(e)},children:["View Detailed Profile ",z&&`(${E.length} Photos)`]})]})})]})},s)})},Ns=m.div`
  position: fixed;
  bottom: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
`,Ka=m.button`
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }
`,Ws=m(Ka)`
  color: var(--primary-color);
`,Ys=m(Ka)`
  color: var(--secondary-color);
`,Us=({onSwipe:e,currentProfile:r})=>x(Ns,{children:[u(Ws,{onClick:()=>e("left"),title:"Dislike",children:x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),u(Ys,{onClick:()=>e("right"),title:"Like",children:u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})})]}),Qt=[{id:"1",name:"Alex",age:25,bio:"Software engineer working remotely. I'm clean, quiet, and enjoy cooking. Looking for a place near downtown.",imageUrl:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",images:["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"],location:"Downtown",budget:"$800-1200/mo",moveInDate:"June 1st",interests:["Cooking","Technology","Hiking"],cleaningHabits:"Very tidy",schedule:"Regular 9-5 work hours",traits:{sleepSchedule:3,socialLevel:2,cleanliness:5}},{id:"2",name:"Jamie",age:28,bio:"Grad student in psychology. Looking for a quiet place to study. I love cats and am an early riser.",imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",images:["https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"],location:"University District",budget:"$700-900/mo",moveInDate:"July 15th",interests:["Reading","Psychology","Cats"],cleaningHabits:"Clean and organized",schedule:"Early riser, studies during day",traits:{sleepSchedule:5,socialLevel:3,cleanliness:4}},{id:"3",name:"Taylor",age:24,bio:"Barista and part-time musician. I practice guitar but use headphones after 8pm. Looking for creative roommates.",imageUrl:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",images:["https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"],location:"Arts District",budget:"$600-800/mo",moveInDate:"ASAP",interests:["Music","Art","Coffee"],cleaningHabits:"Somewhat tidy",schedule:"Works mornings, free evenings",traits:{sleepSchedule:2,socialLevel:4,cleanliness:3}},{id:"4",name:"Morgan",age:30,bio:"Marketing manager who works from home. I'm tidy, organized, and looking for a place with good internet.",imageUrl:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",images:["https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80","https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80","https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"],location:"Midtown",budget:"$900-1300/mo",moveInDate:"August 1st",interests:["Marketing","Running","Cooking"],cleaningHabits:"Very organized",schedule:"Works from home, regular hours",traits:{sleepSchedule:4,socialLevel:3,cleanliness:5}},{id:"5",name:"Jordan",age:26,bio:"Teacher who loves hiking on weekends. Looking for roommates with similar schedules and clean habits.",imageUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",images:["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"],location:"Suburbs",budget:"$700-1000/mo",moveInDate:"September 1st",interests:["Hiking","Education","Reading"],cleaningHabits:"Clean and tidy",schedule:"Teacher hours, free weekends",traits:{sleepSchedule:4,socialLevel:2,cleanliness:4}}],Qs=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: calc(100vh - 72px);
`,Xs=m.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  flex: 1;
  position: relative;
  margin-bottom: 70px;
`,Js=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 400px;
  padding: 20px;
`,Ks=m.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`,Zs=m.div`
  margin-top: 20px;
  font-weight: bold;
  color: var(--primary-color);
`,el=m.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,tl=m.div`
  background-color: white;
  width: 90%;
  max-width: 500px;
  max-height: 85vh;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,rl=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid var(--light-gray);
`,il=m.div`
  flex: 1;
  overflow-y: auto;
  padding: 0;
`;m.div`
  position: relative;
  height: 300px;
  width: 100%;
`;m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;const al=m.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  padding: 20px;
  color: white;
`,nl=m.div`
  padding: 20px;
`,St=m.div`
  margin-bottom: 15px;
`,It=m.h4`
  margin: 0 0 5px 0;
  font-size: 14px;
  color: var(--dark-gray);
`,dt=m.p`
  margin: 0;
  font-size: 16px;
`,ol=m.div`
  padding: 15px 20px;
  border-top: 1px solid var(--light-gray);
  display: flex;
  justify-content: space-between;
`,sl=m.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,si=m.button`
  padding: 12px 20px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
  
  &:active {
    transform: scale(0.98);
  }
`,ll=m(si)`
  background-color: var(--secondary-color);
  color: white;
  border: none;
  flex: 1;
  margin-left: 10px;
`,cl=m(si)`
  background-color: white;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  flex: 1;
  margin-right: 10px;
`,dl=m.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--dark-gray);
  line-height: 1;
`,ul=m.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,hl=m.div`
  background-color: white;
  width: 90%;
  max-width: 400px;
  border-radius: 20px;
  padding: 30px 20px;
  text-align: center;
`,pl=m.h2`
  color: var(--primary-color);
  margin-bottom: 20px;
  font-size: 28px;
`,fl=m.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`,ea=m.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--primary-color);
  margin: 0 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,ml=m(si)`
  background-color: var(--primary-color);
  color: white;
  border: none;
  margin-top: 20px;
  padding: 12px 30px;
`,gl=m.button`
  background: none;
  border: none;
  margin-top: 15px;
  color: var(--dark-gray);
  text-decoration: underline;
  cursor: pointer;
`,vl=m.div`
  position: relative;
  height: 350px;
  width: 100%;
`,yl=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`,xl=m.div`
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
`,bl=m.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${e=>e.active?"white":"rgba(255, 255, 255, 0.5)"};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s;
`,ta=m.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`,wl=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 20px;
`,kl=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`,Ml=m.span`
  background-color: var(--light-gray);
  color: var(--dark-gray);
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
`,ra=m.div`
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid var(--light-gray);
`,ia=m.h3`
  margin: 0 0 10px 0;
  font-size: 18px;
  color: var(--primary-color);
`,_l=m.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,Pl=m.div`
  background-color: white;
  width: 90%;
  max-width: 400px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`,Sl=m.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`,Il=m.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 2px solid ${e=>e.type==="like"?"var(--secondary-color)":"var(--primary-color)"};
`,Al=m.h3`
  margin: 0;
  font-size: 18px;
  color: ${e=>e.type==="like"?"var(--secondary-color)":"var(--primary-color)"};
`,Cl=m.p`
  margin: 10px 0;
  font-size: 16px;
`,Ol=m.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`,aa=m.button`
  padding: 10px 15px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${e=>e.primary?"var(--secondary-color)":"white"};
  color: ${e=>e.primary?"white":"var(--primary-color)"};
  border: ${e=>e.primary?"none":"1px solid var(--primary-color)"};
  flex: 1;
  margin: 0 5px;
`;m.button`
  background-color: white;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 10px 15px;
  border-radius: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;const jl=m.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  animation: fadeIn 0.2s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,$l=m.div`
  background-color: white;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
`,El=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid var(--light-gray);
  
  h3 {
    margin: 0;
    color: var(--primary-color);
  }
`,Vl=m.div`
  width: 100%;
  height: 350px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Dl=m.div`
  padding: 20px;
  overflow-y: auto;
`,At=m.div`
  margin-bottom: 15px;
  
  h4 {
    margin: 0 0 5px 0;
    color: var(--dark-gray);
    font-size: 14px;
  }
  
  p {
    margin: 0;
    font-size: 16px;
  }
`,zl=m.div`
  display: flex;
  gap: 10px;
  padding: 15px 20px;
  border-top: 1px solid var(--light-gray);
`,Za=m.button`
  flex: 1;
  padding: 12px;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
`,Fl=m(Za)`
  background-color: var(--primary-color);
  color: white;
  border: none;
`,Ll=m(Za)`
  background-color: white;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
`;m.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 15px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: white;
`;m.div`
  width: 100%;
  height: 200px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;m.h3`
  margin: 0 0 5px 0;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span {
    font-size: 14px;
    color: var(--dark-gray);
    background-color: var(--light-gray);
    padding: 3px 8px;
    border-radius: 10px;
  }
`;const Hl=()=>{const e=En(),[r,n]=J.useState([]),[s,h]=J.useState([]),[p,b]=J.useState(null),[T,K]=J.useState(!1),[k,E]=J.useState(!1),[te,G]=J.useState(null),[ae,P]=J.useState(0),[H,de]=J.useState(null),[Pe,ne]=J.useState(!1);J.useEffect(()=>{try{console.log("Loading roommate data:",Qt),n(Qt);const O=JSON.parse(localStorage.getItem("roommate-matches")||"[]");h(O)}catch(O){console.error("Error initializing data:",O)}},[]),J.useEffect(()=>{P(0)},[p]);const z=()=>r.length>0?r[r.length-1]:null,C=()=>{ne(!1),W(z())},Z=(O,f)=>{de({direction:O,roommate:f})},N=(O,f)=>{try{if(de(null),n(c=>c.filter($=>$.id!==f.id)),O==="right"&&Math.random()>.3&&!s.some(ie=>ie.id===f.id)){const ie={...f,isMatched:!0};h(xe=>[...xe,ie]);const se=[...s,ie];localStorage.setItem("roommate-matches",JSON.stringify(se)),G(ie),E(!0)}}catch(c){console.error("Error handling swipe:",c)}},Me=()=>{de(null)},fe=()=>{localStorage.removeItem("roommate-matches"),h([]),console.log("Resetting with fresh data:",Qt),n(Qt)},W=O=>{b(O),K(!0)},j=()=>{K(!1),b(null)},ge=()=>{E(!1),G(null)},Le=()=>{ge(),e("/messages")},X=()=>{p&&p.images&&P(O=>O===p.images.length-1?0:O+1)},me=()=>{p&&p.images&&P(O=>O===0?p.images.length-1:O-1)},re=z();return x(Qs,{children:[u(Xs,{children:r.length>0?r.map(O=>u(Gs,{roommate:O,onSwipe:f=>Z(f,O),onCardClick:()=>W(O)},O.id)):x(Js,{children:[u("h2",{children:"No more roommates!"}),u("p",{children:"Check back later or adjust your preferences."}),u(Ks,{onClick:fe,children:"Reset Roommates"}),s.length>0&&x(Zs,{children:["You have ",s.length," matches! Check your messages."]})]})}),r.length>0&&x(na,{children:[z()&&u("div",{style:{width:"100%",maxWidth:"400px",height:"600px",borderRadius:"15px",overflow:"hidden",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.2)",backgroundColor:"white",marginLeft:"auto",marginRight:"auto",position:"relative",marginBottom:"20px"},children:u("div",{style:{width:"100%",height:"100%",backgroundImage:`url(${z().imageUrl})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"relative"},children:x("div",{style:{position:"absolute",bottom:0,left:0,width:"100%",background:"linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 100%)",padding:"60px 20px 20px 20px"},children:[u("div",{style:{display:"flex",alignItems:"center",marginBottom:"4px"},children:x("h2",{style:{margin:0,color:"white",fontSize:"26px",fontWeight:"bold"},children:[z().name,", ",z().age,u("span",{style:{color:"#2196F3",fontSize:"18px",marginLeft:"5px"},children:"✓"})]})}),x("p",{style:{margin:"0 0 8px 0",color:"rgba(255,255,255,0.8)",fontSize:"14px"},children:[z().location," • 5 miles away"]}),x("div",{style:{color:"white",fontSize:"14px",marginBottom:"20px"},children:[u("p",{style:{margin:"0 0 5px 0",fontWeight:"bold"},children:"About Me"}),u("p",{style:{margin:0,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},children:z().bio})]})]})})}),u(Us,{onSwipe:O=>{r.length>0&&Z(O,r[r.length-1])},currentProfile:z()})]}),Pe&&re&&u(jl,{onClick:()=>ne(!1),children:x($l,{onClick:O=>O.stopPropagation(),children:[x(El,{children:[x("h3",{children:[re.name,", ",re.age]}),u("button",{onClick:()=>ne(!1),"aria-label":"Close preview",style:{background:"none",border:"none",fontSize:"24px",cursor:"pointer"},children:"×"})]}),u(Vl,{children:u("img",{src:re.imageUrl,alt:`${re.name}, ${re.age}`})}),x(Dl,{children:[x(At,{children:[u("h4",{children:"Location"}),u("p",{children:re.location})]}),x(At,{children:[u("h4",{children:"Budget"}),u("p",{children:re.budget})]}),x(At,{children:[u("h4",{children:"Move-in Date"}),u("p",{children:re.moveInDate})]}),x(At,{children:[u("h4",{children:"About"}),u("p",{children:re.bio})]}),re.traits&&x(At,{children:[u("h4",{children:"Lifestyle"}),x("p",{children:[re.traits.sleepSchedule===1?"Night Owl":re.traits.sleepSchedule===2?"Late Nights":re.traits.sleepSchedule===3?"Balanced Sleep Schedule":re.traits.sleepSchedule===4?"Early Nights":"Early Riser"," • ",re.traits.cleanliness===1?"Relaxed Cleaning":re.traits.cleanliness===2?"Somewhat Tidy":re.traits.cleanliness===3?"Average Cleanliness":re.traits.cleanliness===4?"Clean":"Very Clean"]})]})]}),x(zl,{children:[u(Ll,{onClick:()=>ne(!1),children:"Close"}),u(Fl,{onClick:C,children:"View Full Profile"})]})]})}),T&&p&&u(el,{onClick:j,children:x(tl,{onClick:O=>O.stopPropagation(),children:[x(rl,{children:[x("h2",{children:[p.name,", ",p.age]}),u(dl,{onClick:j,children:"×"})]}),x(il,{children:[x(vl,{children:[p.images&&p.images.map((O,f)=>u(yl,{src:O,alt:`${p.name} ${f+1}`,style:{display:f===ae?"block":"none"}},f)),u(ta,{className:"prev",onClick:O=>{O.stopPropagation(),me()},children:"❮"}),u(ta,{className:"next",onClick:O=>{O.stopPropagation(),X()},children:"❯"}),u(xl,{children:p.images&&p.images.map((O,f)=>u(bl,{active:f===ae,onClick:c=>{c.stopPropagation(),P(f)}},f))}),u(al,{children:x("h3",{children:[p.name,", ",p.age]})})]}),x(nl,{children:[x(wl,{children:[x(St,{children:[u(It,{children:"Location"}),u(dt,{children:p.location})]}),x(St,{children:[u(It,{children:"Budget"}),u(dt,{children:p.budget})]}),x(St,{children:[u(It,{children:"Move-in Date"}),u(dt,{children:p.moveInDate})]}),x(St,{children:[u(It,{children:"Cleaning Habits"}),u(dt,{children:p.cleaningHabits||"Not specified"})]})]}),x(St,{children:[u(It,{children:"About"}),u(dt,{children:p.bio})]}),p.interests&&p.interests.length>0&&x(ra,{children:[u(ia,{children:"Interests"}),u(kl,{children:p.interests.map((O,f)=>u(Ml,{children:O},f))})]}),p.schedule&&x(ra,{children:[u(ia,{children:"Schedule"}),u(dt,{children:p.schedule})]})]})]}),u(ol,{children:x(sl,{children:[u(cl,{onClick:()=>{N("left",p),j()},children:"Dislike"}),u(ll,{onClick:()=>{N("right",p),j()},children:"Like"})]})})]})}),k&&te&&u(ul,{children:x(hl,{children:[u(pl,{children:"It's a Match!"}),x("p",{children:["You and ",te.name," have liked each other."]}),x(fl,{children:[u(ea,{children:u("img",{src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",alt:"You"})}),u(ea,{children:u("img",{src:te.imageUrl,alt:te.name})})]}),u("p",{children:"Start a conversation now to discuss potential roommate arrangements!"}),u(ml,{onClick:Le,children:"Send a Message"}),u("br",{}),u(gl,{onClick:ge,children:"Keep Swiping"})]})}),H&&u(_l,{children:x(Pl,{children:[x(Sl,{children:[u(Il,{src:H.roommate.imageUrl,alt:H.roommate.name,type:H.direction==="right"?"like":"dislike"}),x(Al,{type:H.direction==="right"?"like":"dislike",children:[H.direction==="right"?"Like":"Dislike"," ",H.roommate.name,"?"]})]}),u(Cl,{children:H.direction==="right"?`You're about to like ${H.roommate.name} as a potential roommate.`:`You're about to pass on ${H.roommate.name} as a roommate.`}),x(Ol,{children:[u(aa,{onClick:Me,children:"Cancel"}),u(aa,{primary:!0,onClick:()=>N(H.direction,H.roommate),children:"Confirm"})]})]})})]})};export{Hl as default};
