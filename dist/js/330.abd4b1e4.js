"use strict";(self["webpackChunkplatform_electronic_billing"]=self["webpackChunkplatform_electronic_billing"]||[]).push([[330],{8645:function(e,t,l){l.r(t),l.d(t,{default:function(){return Ge}});var a=l(3396),n=l(7139),o=l(9242),i=l(870),u=l(5039),s=(l(560),l(8099),l(9166)),r=l(8157),c=l(1138),v=l(3766),d=l(1107);const m=["start","end","center"],p=["space-between","space-around","space-evenly"];function f(e,t){return r.AV.reduce(((l,a)=>{const o=e+(0,n.kC)(a);return l[o]=t(),l}),{})}const g=[...m,"baseline","stretch"],y=e=>g.includes(e),h=f("align",(()=>({type:String,default:null,validator:y}))),w=[...m,...p],b=e=>w.includes(e),x=f("justify",(()=>({type:String,default:null,validator:b}))),_=[...m,...p,"stretch"],S=e=>_.includes(e),W=f("alignContent",(()=>({type:String,default:null,validator:S}))),I={align:Object.keys(h),justify:Object.keys(x),alignContent:Object.keys(W)},C={align:"align",justify:"justify",alignContent:"align-content"};function k(e,t,l){let a=C[e];if(null!=l){if(t){const l=t.replace(e,"");a+=`-${l}`}return a+=`-${l}`,a.toLowerCase()}}const F=(0,v.U)({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y},...h,justify:{type:String,default:null,validator:b},...x,alignContent:{type:String,default:null,validator:S},...W,...(0,s.l)(),...(0,c.Q)()},"VRow"),M=(0,d.ev)()({name:"VRow",props:F(),setup(e,t){let{slots:l}=t;const n=(0,a.Fl)((()=>{const t=[];let l;for(l in I)I[l].forEach((a=>{const n=e[a],o=k(l,a,n);o&&t.push(o)}));return t.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),t}));return()=>(0,a.h)(e.tag,{class:["v-row",n.value,e.class],style:e.style},l.default?.())}});var E=l(8521),V=l(3712),L=l(4870),$=l(7514),H=l(131);const j=Symbol.for("vuetify:layout"),R=Symbol.for("vuetify:layout-item"),B=1e3,Y=(0,v.U)({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),z=(0,v.U)({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function P(){const e=(0,a.f3)(j);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function T(e){const t=(0,a.f3)(j);if(!t)throw new Error("[Vuetify] Could not find injected layout");const l=e.id??`layout-item-${(0,$.sq)()}`,n=(0,$.FN)("useLayoutItem");(0,a.JJ)(R,{id:l});const o=(0,L.XI)(!1);(0,a.se)((()=>o.value=!0)),(0,a.dl)((()=>o.value=!1));const{layoutItemStyles:i,layoutItemScrimStyles:u}=t.register(n,{...e,active:(0,a.Fl)((()=>!o.value&&e.active.value)),id:l});return(0,a.Jd)((()=>t.unregister(l))),{layoutItemStyles:i,layoutRect:t.layoutRect,layoutItemScrimStyles:u}}const X=(e,t,l,a)=>{let n={top:0,left:0,right:0,bottom:0};const o=[{id:"",layer:{...n}}];for(const i of e){const e=t.get(i),u=l.get(i),s=a.get(i);if(!e||!u||!s)continue;const r={...n,[e.value]:parseInt(n[e.value],10)+(s.value?parseInt(u.value,10):0)};o.push({id:i,layer:r}),n=r}return o};function A(e){const t=(0,a.f3)(j,null),l=(0,a.Fl)((()=>t?t.rootZIndex.value-100:B)),n=(0,L.iH)([]),o=(0,L.qj)(new Map),i=(0,L.qj)(new Map),u=(0,L.qj)(new Map),s=(0,L.qj)(new Map),r=(0,L.qj)(new Map),{resizeRef:c,contentRect:v}=(0,V.y)(),d=(0,a.Fl)((()=>{const t=new Map,l=e.overlaps??[];for(const e of l.filter((e=>e.includes(":")))){const[l,a]=e.split(":");if(!n.value.includes(l)||!n.value.includes(a))continue;const u=o.get(l),s=o.get(a),r=i.get(l),c=i.get(a);u&&s&&r&&c&&(t.set(a,{position:u.value,amount:parseInt(r.value,10)}),t.set(l,{position:s.value,amount:-parseInt(c.value,10)}))}return t})),m=(0,a.Fl)((()=>{const e=[...new Set([...u.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[];for(const l of e){const e=n.value.filter((e=>u.get(e)?.value===l));t.push(...e)}return X(t,o,i,s)})),p=(0,a.Fl)((()=>!Array.from(r.values()).some((e=>e.value)))),f=(0,a.Fl)((()=>m.value[m.value.length-1].layer)),g=(0,a.Fl)((()=>({"--v-layout-left":(0,H.kb)(f.value.left),"--v-layout-right":(0,H.kb)(f.value.right),"--v-layout-top":(0,H.kb)(f.value.top),"--v-layout-bottom":(0,H.kb)(f.value.bottom),...p.value?void 0:{transition:"none"}}))),y=(0,a.Fl)((()=>m.value.slice(1).map(((e,t)=>{let{id:l}=e;const{layer:a}=m.value[t],n=i.get(l),u=o.get(l);return{id:l,...a,size:Number(n.value),position:u.value}})))),h=e=>y.value.find((t=>t.id===e)),w=(0,$.FN)("createLayout"),b=(0,L.XI)(!1);(0,a.bv)((()=>{b.value=!0})),(0,a.JJ)(j,{register:(e,t)=>{let{id:c,order:v,position:f,layoutSize:g,elementSize:h,active:x,disableTransitions:_,absolute:S}=t;u.set(c,v),o.set(c,f),i.set(c,g),s.set(c,x),_&&r.set(c,_);const W=(0,H.bY)(R,w?.vnode),I=W.indexOf(e);I>-1?n.value.splice(I,0,c):n.value.push(c);const C=(0,a.Fl)((()=>y.value.findIndex((e=>e.id===c)))),k=(0,a.Fl)((()=>l.value+2*m.value.length-2*C.value)),F=(0,a.Fl)((()=>{const e="left"===f.value||"right"===f.value,t="right"===f.value,a="bottom"===f.value,n={[f.value]:0,zIndex:k.value,transform:`translate${e?"X":"Y"}(${(x.value?0:-110)*(t||a?-1:1)}%)`,position:S.value||l.value!==B?"absolute":"fixed",...p.value?void 0:{transition:"none"}};if(!b.value)return n;const o=y.value[C.value];if(!o)throw new Error(`[Vuetify] Could not find layout item "${c}"`);const i=d.value.get(c);return i&&(o[i.position]+=i.amount),{...n,height:e?`calc(100% - ${o.top}px - ${o.bottom}px)`:h.value?`${h.value}px`:void 0,left:t?void 0:`${o.left}px`,right:t?`${o.right}px`:void 0,top:"bottom"!==f.value?`${o.top}px`:void 0,bottom:"top"!==f.value?`${o.bottom}px`:void 0,width:e?h.value?`${h.value}px`:void 0:`calc(100% - ${o.left}px - ${o.right}px)`}})),M=(0,a.Fl)((()=>({zIndex:k.value-1})));return{layoutItemStyles:F,layoutItemScrimStyles:M,zIndex:k}},unregister:e=>{u.delete(e),o.delete(e),i.delete(e),s.delete(e),r.delete(e),n.value=n.value.filter((t=>t!==e))},mainRect:f,mainStyles:g,getLayoutItem:h,items:y,layoutRect:v,rootZIndex:l});const x=(0,a.Fl)((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),_=(0,a.Fl)((()=>({zIndex:t?l.value:void 0,position:t?"relative":void 0,overflow:t?"hidden":void 0})));return{layoutClasses:x,layoutStyles:_,getLayoutItem:h,items:y,layoutRect:v,layoutRef:c}}var N=l(9888);const U=(0,v.U)({...(0,s.l)(),...Y()},"VLayout"),D=(0,d.ev)()({name:"VLayout",props:U(),setup(e,t){let{slots:l}=t;const{layoutClasses:n,layoutStyles:o,getLayoutItem:i,items:u,layoutRef:s}=A(e);return(0,N.L)((()=>(0,a.Wm)("div",{ref:s,class:[n.value,e.class],style:[o.value,e.style]},[l.default?.()]))),{getLayoutItem:i,items:u}}});var O=l(2329),q=l(8777),J=l(1372);const Z=(0,v.U)({scrollable:Boolean,...(0,s.l)(),...(0,c.Q)({tag:"main"})},"VMain"),G=(0,d.ev)()({name:"VMain",props:Z(),setup(e,t){let{slots:l}=t;const{mainStyles:n}=P(),{ssrBootStyles:o}=(0,J.u)();return(0,N.L)((()=>(0,a.Wm)(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,o.value,e.style]},{default:()=>[e.scrollable?(0,a.Wm)("div",{class:"v-main__scroller"},[l.default?.()]):l.default?.()]}))),{}}});function Q(e){let{rootEl:t,isSticky:l,layoutItemStyles:n}=e;const o=(0,L.XI)(!1),i=(0,L.XI)(0),u=(0,a.Fl)((()=>{const e="boolean"===typeof o.value?"top":o.value;return[l.value?{top:"auto",bottom:"auto",height:void 0}:void 0,o.value?{[e]:(0,H.kb)(i.value)}:{top:n.value.top}]}));(0,a.bv)((()=>{(0,a.YP)(l,(e=>{e?window.addEventListener("scroll",r,{passive:!0}):window.removeEventListener("scroll",r)}),{immediate:!0})})),(0,a.Jd)((()=>{window.removeEventListener("scroll",r)}));let s=0;function r(){const e=s>window.scrollY?"up":"down",l=t.value.getBoundingClientRect(),a=parseFloat(n.value.top??0),u=window.scrollY-Math.max(0,i.value-a),r=l.height+Math.max(i.value,a)-window.scrollY-window.innerHeight,c=parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y"))||0;l.height<window.innerHeight-a?(o.value="top",i.value=a):"up"===e&&"bottom"===o.value||"down"===e&&"top"===o.value?(i.value=window.scrollY+l.top-c,o.value=!0):"down"===e&&r<=0?(i.value=0,o.value="bottom"):"up"===e&&u<=0&&(c?"top"!==o.value&&(i.value=-u+c+a,o.value="top"):(i.value=l.top+u,o.value="top")),s=window.scrollY}return{isStuck:o,stickyStyles:u}}const K=100,ee=20;function te(e){const t=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*t}function le(e){if(e.length<2)return 0;if(2===e.length)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let t=0;for(let l=e.length-1;l>0;l--){if(e[l].t===e[l-1].t)continue;const a=te(t),n=(e[l].d-e[l-1].d)/(e[l].t-e[l-1].t);t+=(n-a)*Math.abs(n),l===e.length-1&&(t*=.5)}return 1e3*te(t)}function ae(){const e={};function t(t){Array.from(t.changedTouches).forEach((l=>{const a=e[l.identifier]??(e[l.identifier]=new H.PU(ee));a.push([t.timeStamp,l])}))}function l(t){Array.from(t.changedTouches).forEach((t=>{delete e[t.identifier]}))}function a(t){const l=e[t]?.values().reverse();if(!l)throw new Error(`No samples for touch id ${t}`);const a=l[0],n=[],o=[];for(const e of l){if(a[0]-e[0]>K)break;n.push({t:e[0],d:e[1].clientX}),o.push({t:e[0],d:e[1].clientY})}return{x:le(n),y:le(o),get direction(){const{x:e,y:t}=this,[l,a]=[Math.abs(e),Math.abs(t)];return l>a&&e>=0?"right":l>a&&e<=0?"left":a>l&&t>=0?"down":a>l&&t<=0?"up":ne()}}}return{addMovement:t,endTouch:l,getVelocity:a}}function ne(){throw new Error}function oe(e){let{isActive:t,isTemporary:l,width:n,touchless:o,position:i}=e;(0,a.bv)((()=>{window.addEventListener("touchstart",h,{passive:!0}),window.addEventListener("touchmove",w,{passive:!1}),window.addEventListener("touchend",b,{passive:!0})})),(0,a.Jd)((()=>{window.removeEventListener("touchstart",h),window.removeEventListener("touchmove",w),window.removeEventListener("touchend",b)}));const u=(0,a.Fl)((()=>["left","right"].includes(i.value))),{addMovement:s,endTouch:r,getVelocity:c}=ae();let v=!1;const d=(0,L.XI)(!1),m=(0,L.XI)(0),p=(0,L.XI)(0);let f;function g(e,t){return("left"===i.value?e:"right"===i.value?document.documentElement.clientWidth-e:"top"===i.value?e:"bottom"===i.value?document.documentElement.clientHeight-e:ie())-(t?n.value:0)}function y(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const l="left"===i.value?(e-p.value)/n.value:"right"===i.value?(document.documentElement.clientWidth-e-p.value)/n.value:"top"===i.value?(e-p.value)/n.value:"bottom"===i.value?(document.documentElement.clientHeight-e-p.value)/n.value:ie();return t?Math.max(0,Math.min(1,l)):l}function h(e){if(o.value)return;const a=e.changedTouches[0].clientX,c=e.changedTouches[0].clientY,d=25,h="left"===i.value?a<d:"right"===i.value?a>document.documentElement.clientWidth-d:"top"===i.value?c<d:"bottom"===i.value?c>document.documentElement.clientHeight-d:ie(),w=t.value&&("left"===i.value?a<n.value:"right"===i.value?a>document.documentElement.clientWidth-n.value:"top"===i.value?c<n.value:"bottom"===i.value?c>document.documentElement.clientHeight-n.value:ie());(h||w||t.value&&l.value)&&(v=!0,f=[a,c],p.value=g(u.value?a:c,t.value),m.value=y(u.value?a:c),r(e),s(e))}function w(e){const t=e.changedTouches[0].clientX,l=e.changedTouches[0].clientY;if(v){if(!e.cancelable)return void(v=!1);const a=Math.abs(t-f[0]),n=Math.abs(l-f[1]),o=u.value?a>n&&a>3:n>a&&n>3;o?(d.value=!0,v=!1):(u.value?n:a)>3&&(v=!1)}if(!d.value)return;e.preventDefault(),s(e);const a=y(u.value?t:l,!1);m.value=Math.max(0,Math.min(1,a)),a>1?p.value=g(u.value?t:l,!0):a<0&&(p.value=g(u.value?t:l,!1))}function b(e){if(v=!1,!d.value)return;s(e),d.value=!1;const l=c(e.changedTouches[0].identifier),a=Math.abs(l.x),n=Math.abs(l.y),o=u.value?a>n&&a>400:n>a&&n>3;t.value=o?l.direction===({left:"right",right:"left",top:"down",bottom:"up"}[i.value]||ie()):m.value>.5}const x=(0,a.Fl)((()=>d.value?{transform:"left"===i.value?`translateX(calc(-100% + ${m.value*n.value}px))`:"right"===i.value?`translateX(calc(100% - ${m.value*n.value}px))`:"top"===i.value?`translateY(calc(-100% + ${m.value*n.value}px))`:"bottom"===i.value?`translateY(calc(100% - ${m.value*n.value}px))`:ie(),transition:"none"}:void 0));return{isDragging:d,dragProgress:m,dragStyles:x}}function ie(){throw new Error}var ue=l(1629),se=l(2718),re=l(2370),ce=l(6107),ve=l(2465),de=l(8717),me=l(4231),pe=l(6183),fe=l(5975),ge=l(5935),ye=l(4770),he=l(2879);const we=["start","end","left","right","top","bottom"],be=(0,v.U)({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>we.includes(e)},sticky:Boolean,...(0,se.m)(),...(0,s.l)(),...(0,ve.c)(),...z(),...(0,me.I)(),...(0,c.Q)({tag:"nav"}),...(0,ge.x$)()},"VNavigationDrawer"),xe=(0,d.ev)()({name:"VNavigationDrawer",props:be(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,t){let{attrs:l,emit:n,slots:i}=t;const{isRtl:u}=(0,ue.Vw)(),{themeClasses:s}=(0,ge.ER)(e),{borderClasses:c}=(0,se.P)(e),{backgroundColorClasses:v,backgroundColorStyles:d}=(0,re.Y5)((0,L.Vh)(e,"color")),{elevationClasses:m}=(0,ve.Y)(e),{mobile:p}=(0,r.AW)(),{roundedClasses:f}=(0,me.b)(e),g=(0,pe.tv)(),y=(0,de.z)(e,"modelValue",null,(e=>!!e)),{ssrBootStyles:h}=(0,J.u)(),{scopeId:w}=(0,fe.a)(),b=(0,L.iH)(),x=(0,L.XI)(!1),_=(0,a.Fl)((()=>e.rail&&e.expandOnHover&&x.value?Number(e.width):Number(e.rail?e.railWidth:e.width))),S=(0,a.Fl)((()=>(0,he.Wc)(e.location,u.value))),W=(0,a.Fl)((()=>!e.permanent&&(p.value||e.temporary))),I=(0,a.Fl)((()=>e.sticky&&!W.value&&"bottom"!==S.value));(0,ye.U)((()=>e.expandOnHover&&null!=e.rail),(()=>{(0,a.YP)(x,(e=>n("update:rail",!e)))})),(0,ye.U)((()=>!e.disableResizeWatcher),(()=>{(0,a.YP)(W,(t=>!e.permanent&&(0,a.Y3)((()=>y.value=!t))))})),(0,ye.U)((()=>!e.disableRouteWatcher&&!!g),(()=>{(0,a.YP)(g.currentRoute,(()=>W.value&&(y.value=!1)))})),(0,a.YP)((()=>e.permanent),(e=>{e&&(y.value=!0)})),(0,a.wF)((()=>{null!=e.modelValue||W.value||(y.value=e.permanent||!p.value)}));const{isDragging:C,dragProgress:k,dragStyles:F}=oe({isActive:y,isTemporary:W,width:_,touchless:(0,L.Vh)(e,"touchless"),position:S}),M=(0,a.Fl)((()=>{const t=W.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):_.value;return C.value?t*k.value:t})),{layoutItemStyles:E,layoutItemScrimStyles:V}=T({id:e.name,order:(0,a.Fl)((()=>parseInt(e.order,10))),position:S,layoutSize:M,elementSize:_,active:(0,a.Fl)((()=>y.value||C.value)),disableTransitions:(0,a.Fl)((()=>C.value)),absolute:(0,a.Fl)((()=>e.absolute||I.value&&"string"!==typeof $.value))}),{isStuck:$,stickyStyles:H}=Q({rootEl:b,isSticky:I,layoutItemStyles:E}),j=(0,re.Y5)((0,a.Fl)((()=>"string"===typeof e.scrim?e.scrim:null))),R=(0,a.Fl)((()=>({...C.value?{opacity:.2*k.value,transition:"none"}:void 0,...V.value})));function B(){x.value=!0}function Y(){x.value=!1}return(0,ce.AF)({VList:{bgColor:"transparent"}}),(0,N.L)((()=>{const t=i.image||e.image;return(0,a.Wm)(a.HY,null,[(0,a.Wm)(e.tag,(0,a.dG)({ref:b,onMouseenter:B,onMouseleave:Y,class:["v-navigation-drawer",`v-navigation-drawer--${S.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":x.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":W.value,"v-navigation-drawer--active":y.value,"v-navigation-drawer--sticky":I.value},s.value,v.value,c.value,m.value,f.value,e.class],style:[d.value,E.value,F.value,h.value,H.value,e.style]},w,l),{default:()=>[t&&(0,a.Wm)("div",{key:"image",class:"v-navigation-drawer__img"},[i.image?i.image?.({image:e.image}):(0,a.Wm)("img",{src:e.image,alt:""},null)]),i.prepend&&(0,a.Wm)("div",{class:"v-navigation-drawer__prepend"},[i.prepend?.()]),(0,a.Wm)("div",{class:"v-navigation-drawer__content"},[i.default?.()]),i.append&&(0,a.Wm)("div",{class:"v-navigation-drawer__append"},[i.append?.()])]}),(0,a.Wm)(o.uT,{name:"fade-transition"},{default:()=>[W.value&&(C.value||y.value)&&!!e.scrim&&(0,a.Wm)("div",(0,a.dG)({class:["v-navigation-drawer__scrim",j.backgroundColorClasses.value],style:[R.value,j.backgroundColorStyles.value],onClick:()=>y.value=!1},w),null)]})])})),{isStuck:$}}}),_e={class:"p-2 pt-10 flex items-center justify-center gap-2"},Se=["src"],We={key:0,class:"font-bold text-2xl"},Ie={class:"w-full bg-white flex justify-between items-center px-3 shadow-sm"},Ce={class:"flex items-center"},ke={class:"flex items-center text-start text-xs"},Fe={class:"text-sm"},Me={class:"caption"};function Ee(e,t,l,s,r,c){const v=(0,a.up)("router-link"),d=(0,a.up)("MenuAsPopover"),m=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(u._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a.Wm)(xe,{modelValue:s.drawer,"onUpdate:modelValue":t[5]||(t[5]=e=>s.drawer=e),rail:s.rail,permanent:"",onClick:t[6]||(t[6]=e=>s.rail=!1),color:"teal"},{default:(0,a.w5)((()=>[(0,a._)("div",_e,[(0,a._)("img",{src:r.logoBilling,class:"w-6"},null,8,Se),s.rail?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",We,"Mixercon"))]),(0,a.Wm)(O.i,{density:"compact",nav:"",class:"pt-10"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{to:"/home"},{default:(0,a.w5)((()=>[(0,a.Wm)(q.l,{onClick:t[0]||(t[0]=e=>s.selectItem("/home")),"prepend-icon":"mdi-view-dashboard",title:"Home",value:"home",class:(0,n.C_)({"selected-item":"/home"===s.selectedItem})},null,8,["class"])])),_:1}),(0,a.Wm)(v,{to:"/customers"},{default:(0,a.w5)((()=>[(0,a.Wm)(q.l,{onClick:t[1]||(t[1]=e=>s.selectItem("/customers")),"prepend-icon":"mdi-domain",title:"Clientes",value:"customers",class:(0,n.C_)({"selected-item":"/customers"===s.selectedItem})},null,8,["class"])])),_:1}),(0,a.Wm)(v,{to:"/products"},{default:(0,a.w5)((()=>[(0,a.Wm)(q.l,{onClick:t[2]||(t[2]=e=>s.selectItem("/products")),"prepend-icon":"mdi-shape-plus",title:"Productos",value:"products",class:(0,n.C_)({"selected-item":"/products"===s.selectedItem})},null,8,["class"])])),_:1}),(0,a.Wm)(v,{to:"/store"},{default:(0,a.w5)((()=>[(0,a.Wm)(q.l,{onClick:t[3]||(t[3]=e=>s.selectItem("/store")),"prepend-icon":"mdi-factory",title:"Almacén",value:"store",class:(0,n.C_)({"selected-item":"/store"===s.selectedItem})},null,8,["class"])])),_:1}),(0,a.Wm)(v,{to:"/establishment"},{default:(0,a.w5)((()=>[(0,a.Wm)(q.l,{onClick:t[4]||(t[4]=e=>s.selectItem("/establishment")),"prepend-icon":"mdi-store",title:"Establecimiento",value:"establishment",class:(0,n.C_)({"selected-item":"/establishment"===s.selectedItem})},null,8,["class"])])),_:1})])),_:1})])),_:1},8,["modelValue","rail"]),(0,a.Wm)(G,{class:"h-screen bg-slate-50 block"},{default:(0,a.w5)((()=>[(0,a._)("div",Ie,[(0,a.Wm)(i.T,{variant:"text",icon:"mdi-menu",color:"blue-grey-lighten-1",class:"cursor-pointer",onClick:t[7]||(t[7]=(0,o.iM)((e=>s.rail=!s.rail),["stop"]))}),(0,a._)("div",Ce,[(0,a._)("div",ke,[(0,a.Wm)(O.i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(q.l,{class:"text-start item-personalizado","prepend-avatar":r.avatarPath},{default:(0,a.w5)((()=>[(0,a.Wm)(M,null,{default:(0,a.w5)((()=>[(0,a.Wm)(E.D,null,{default:(0,a.w5)((()=>[(0,a._)("div",Fe,"Hola, "+(0,n.zw)(s.username),1),(0,a._)("div",Me,(0,n.zw)(s.rol),1)])),_:1})])),_:1})])),_:1},8,["prepend-avatar"])])),_:1})]),(0,a.Wm)(d)])]),(0,a._)("section",{class:(0,n.C_)(["overflow-y-auto section_main",s.isMobile?"p-4":"p-8"])},[(0,a.Wm)(m)],2)])),_:1})])),_:1})])),_:1})}var Ve=l(2483),Le=l.p+"img/iconuser_hombre.66103c98.png",$e=l.p+"img/BillingLogo.c5c89ba8.png",He=l(4075),je=l(4193);const Re=e=>((0,a.dD)("data-v-267989c3"),e=e(),(0,a.Cn)(),e),Be={class:"text-center"},Ye=Re((()=>(0,a._)("div",{class:"cursor-pointer transition hover:text-blue-300 ease-in duration-100 flex gap-2 rounded-lg items-center text-gray-400 text-sm"},[(0,a._)("i",{class:"fa-solid fa-user"}),(0,a._)("span",null," Perfil")],-1))),ze=Re((()=>(0,a._)("div",{class:"cursor-pointer transition hover:text-blue-300 ease-in duration-100 flex gap-2 rounded-lg items-center text-gray-400 text-sm"},[(0,a._)("i",{class:"fa-solid fa-gear"}),(0,a._)("span",null," Configuración")],-1))),Pe=Re((()=>(0,a._)("span",null," Cerrar sesión",-1))),Te=Re((()=>(0,a._)("i",{class:"fa-solid fa-right-from-bracket"},null,-1))),Xe=[Pe,Te];function Ae(e,t,l,n,o,s){return(0,a.wg)(),(0,a.iD)("div",Be,[(0,a.Wm)(je.T,{modelValue:e.menu,"onUpdate:modelValue":t[1]||(t[1]=t=>e.menu=t),"close-on-content-click":!1,location:"end","onClick:outside":n.rotateIcon},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(i.T,(0,a.dG)({icon:"mdi-chevron-down",size:"small",variant:"text"},e,{class:{rotated:n.isRotated},onClick:n.rotateIcon}),null,16,["class","onClick"])])),default:(0,a.w5)((()=>[(0,a.Wm)(u._,{"min-width":"200"},{default:(0,a.w5)((()=>[(0,a.Wm)(He.J),(0,a.Wm)(O.i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(q.l,{class:"px-5"},{default:(0,a.w5)((()=>[Ye])),_:1}),(0,a.Wm)(q.l,{class:"px-5"},{default:(0,a.w5)((()=>[ze])),_:1})])),_:1}),(0,a.Wm)(O.i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(q.l,{class:"px-3"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"py-2 px-5 bg-red-400 hover:bg-red-500 cursor-pointer transition ease-in duration-100 flex justify-between rounded-lg items-center text-white text-sm",onClick:t[0]||(t[0]=(...e)=>n.logout&&n.logout(...e))},Xe)])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])])}var Ne={data:()=>({fav:!0,menu:!1,message:!1,hints:!0}),setup(){const e=(0,L.iH)(!1),t=()=>{e.value=!e.value},l=()=>{localStorage.clear(),location.reload()};return{logout:l,rotateIcon:t,isRotated:e}}},Ue=l(89);const De=(0,Ue.Z)(Ne,[["render",Ae],["__scopeId","data-v-267989c3"]]);var Oe=De,qe=l(4239),Je={components:{MenuAsPopover:Oe},data(){return{avatarPath:Le,logoBilling:$e}},setup(){const e=(0,L.iH)(!1),t=(0,L.iH)(!0),l=(0,L.iH)(!0),n=(0,L.iH)(""),o=(0,L.iH)(""),i=(0,L.iH)(null),u=(0,Ve.yj)();(0,a.bv)((()=>{n.value=qe.Z.state.rol,o.value=qe.Z.state.username;const e=u.fullPath;i.value=e,r(),window.addEventListener("resize",r)}));const s=e=>{i.value=e},r=()=>{e.value=window.innerWidth<=500};return{isMobile:e,drawer:t,rail:l,rol:n,username:o,selectedItem:i,selectItem:s}}};const Ze=(0,Ue.Z)(Je,[["render",Ee]]);var Ge=Ze}}]);
//# sourceMappingURL=330.abd4b1e4.js.map