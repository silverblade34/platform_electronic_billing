"use strict";(self["webpackChunkplatform_electronic_billing"]=self["webpackChunkplatform_electronic_billing"]||[]).push([[971],{5066:function(e,l,t){t.d(l,{LI:function(){return r},L_:function(){return o},Mn:function(){return u},WB:function(){return i}});var a=t(3041);const n="http://143.244.144.235:8000/api";function o(e){return a.Z.get(`${n}/client/`,{headers:{Authorization:`Bearer ${e}`}})}function u(e,l){return a.Z.post(`${n}/client/`,e,{headers:{Authorization:`Bearer ${l}`}})}function i(e,l,t){return a.Z.put(`${n}/client/${e}/`,l,{headers:{Authorization:`Bearer ${t}`}})}function r(e,l){return a.Z.delete(`${n}/client/${e}/`,{headers:{Authorization:`Bearer ${l}`}})}},2658:function(e,l,t){t.d(l,{C7:function(){return r},Qb:function(){return o},mi:function(){return u},z$:function(){return i}});var a=t(3041);const n="http://143.244.144.235:8000/api";function o(e){return a.Z.get(`${n}/establishment/`,{headers:{Authorization:`Bearer ${e}`}})}function u(e,l){return a.Z.post(`${n}/establishment/`,e,{headers:{Authorization:`Bearer ${l}`}})}function i(e,l,t){return a.Z.put(`${n}/establishment/${e}/`,l,{headers:{Authorization:`Bearer ${t}`}})}function r(e,l){return a.Z.delete(`${n}/establishment/${e}/`,{headers:{Authorization:`Bearer ${l}`}})}},3509:function(e,l,t){t.d(l,{PQ:function(){return i},cT:function(){return u},oi:function(){return o},zf:function(){return r}});var a=t(3041);const n="http://143.244.144.235:8000/api";function o(e){return a.Z.get(`${n}/product/`,{headers:{Authorization:`Bearer ${e}`}})}function u(e,l){return a.Z.post(`${n}/product/`,e,{headers:{Authorization:`Bearer ${l}`}})}function i(e,l,t){return a.Z.put(`${n}/product/${e}/`,l,{headers:{Authorization:`Bearer ${t}`}})}function r(e,l){return a.Z.delete(`${n}/product/${e}/`,{headers:{Authorization:`Bearer ${l}`}})}},9414:function(e,l,t){t.d(l,{Kg:function(){return o},Zu:function(){return u},cA:function(){return r},jT:function(){return i}});var a=t(3041);const n="http://143.244.144.235:8000/api";function o(e){return a.Z.get(`${n}/store/`,{headers:{Authorization:`Bearer ${e}`}})}function u(e,l){return a.Z.post(`${n}/store/`,e,{headers:{Authorization:`Bearer ${l}`}})}function i(e,l,t){return a.Z.put(`${n}/store/${e}/`,l,{headers:{Authorization:`Bearer ${t}`}})}function r(e,l){return a.Z.delete(`${n}/store/${e}/`,{headers:{Authorization:`Bearer ${l}`}})}},1239:function(e,l,t){t.d(l,{Hr:function(){return r},Ih:function(){return c},LW:function(){return o},Qg:function(){return u},ff:function(){return i}});var a=t(3041);const n="http://143.244.144.235:8000/api";function o(e){return a.Z.get(`${n}/list_voucher/`,{headers:{Authorization:`Bearer ${e}`}})}function u(e,l){return a.Z.post(`${n}/voucher/`,e,{headers:{Authorization:`Bearer ${l}`}})}function i(e,l){return a.Z.post(`${n}/list_voucher/`,e,{headers:{Authorization:`Bearer ${l}`}})}function r(e,l,t){return a.Z.put(`${n}/voucher/${e}/`,l,{headers:{Authorization:`Bearer ${t}`}})}function c(e,l){return a.Z.delete(`${n}/voucher/${e}/`,{headers:{Authorization:`Bearer ${l}`}})}},9790:function(e,l,t){t.d(l,{Z:function(){return A}});var a=t(3396),n=t(7139),o=t(870),u=t(5039),i=t(1888),r=t(1334),c=t(3601),d=t(8521),s=t(9234),m=t(3289),v=t(240),p=t(2900),f=t(1328);const h=(0,a._)("span",{class:"px-4 w-full text-center text-teal-500 font-bold title_views"},"CREAR CLIENTE",-1),_={class:"text-xs pl-3 pb-3 text-red-400"},g={class:"grid grid-cols-2 gap-2"},b={class:"grid grid-cols-2 gap-2"},V={class:"grid grid-cols-2 gap-2"};function w(e,l,t,w,y,C){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(o.T,{size:"small",class:"text-none",color:"indigo-lighten-2",onClick:l[0]||(l[0]=e=>w.dialog=!0)},{default:(0,a.w5)((()=>[(0,a.Wm)(m.t,{icon:"mdi-plus"}),(0,a.Uk)(" Nuevo")])),_:1}),(0,a.Wm)(c.B,{modelValue:w.dialog,"onUpdate:modelValue":l[12]||(l[12]=e=>w.dialog=e),width:"650","onClick:outside":w.closeItem},{default:(0,a.w5)((()=>[(0,a.Wm)(u._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f.i,null,{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)(i.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(v.rL,{variant:"outlined",label:"Tipo de documento",items:["DNI","RUC"],color:"teal",modelValue:w.document_type,"onUpdate:modelValue":l[1]||(l[1]=e=>w.document_type=e),"prepend-inner-icon":"mdi-format-list-bulleted-type"},null,8,["modelValue"]),(0,a.Wm)(p.h,{variant:"outlined",label:"N° documento","prepend-inner-icon":"mdi-barcode",color:"teal",modelValue:w.document_number,"onUpdate:modelValue":l[2]||(l[2]=e=>w.document_number=e),counter:"",maxlength:"11",onInput:l[3]||(l[3]=e=>w.customerValidate()),"hide-details":""},null,8,["modelValue"]),(0,a._)("span",_,(0,n.zw)(w.messageValidate),1),(0,a.Wm)(p.h,{variant:"outlined",label:"Nombre legal","prepend-inner-icon":"mdi-domain",color:"teal",modelValue:w.legal_name,"onUpdate:modelValue":l[4]||(l[4]=e=>w.legal_name=e)},null,8,["modelValue"]),(0,a.Wm)(p.h,{variant:"outlined",label:"Nombre comercial","prepend-inner-icon":"mdi-form-textbox",color:"teal",modelValue:w.tradename,"onUpdate:modelValue":l[5]||(l[5]=e=>w.tradename=e)},null,8,["modelValue"]),(0,a._)("div",g,[(0,a.Wm)(p.h,{variant:"outlined",label:"Pais","prepend-inner-icon":"mdi-flag",color:"teal",modelValue:w.country,"onUpdate:modelValue":l[6]||(l[6]=e=>w.country=e)},null,8,["modelValue"]),(0,a.Wm)(p.h,{variant:"outlined",label:"Departamento","prepend-inner-icon":"mdi-map",color:"teal",modelValue:w.department,"onUpdate:modelValue":l[7]||(l[7]=e=>w.department=e)},null,8,["modelValue"])]),(0,a._)("div",b,[(0,a.Wm)(p.h,{variant:"outlined",label:"Provincia","prepend-inner-icon":"mdi-map-marker-multiple",color:"teal",modelValue:w.province,"onUpdate:modelValue":l[8]||(l[8]=e=>w.province=e)},null,8,["modelValue"]),(0,a.Wm)(p.h,{variant:"outlined",label:"Distrito","prepend-inner-icon":"mdi-map-marker-path",color:"teal",modelValue:w.district,"onUpdate:modelValue":l[9]||(l[9]=e=>w.district=e)},null,8,["modelValue"])]),(0,a._)("div",V,[(0,a.Wm)(p.h,{variant:"outlined",label:"Teléfono","prepend-inner-icon":"mdi-phone",color:"teal",modelValue:w.phone,"onUpdate:modelValue":l[10]||(l[10]=e=>w.phone=e)},null,8,["modelValue"]),(0,a.Wm)(p.h,{variant:"outlined",label:"Correo","prepend-inner-icon":"mdi-email",color:"teal",modelValue:w.email,"onUpdate:modelValue":l[11]||(l[11]=e=>w.email=e)},null,8,["modelValue"])])])),_:1})])),_:1}),(0,a.Wm)(r.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s.C),(0,a.Wm)(o.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:w.closeItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Cancelar ")])),_:1},8,["onClick"]),(0,a.Wm)(o.T,{color:"blue-lighten-1",variant:"tonal",onClick:w.createItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])],64)}var y=t(1076);const C="http://143.244.144.235:8000/api";function k(e){return y.Z.post(`${C}/sunat-api/`,e)}var W=t(4870),x={emits:["create-item"],setup(e,{emit:l}){const t=(0,W.iH)(!1),n=(0,W.iH)(""),o=(0,W.iH)(""),u=(0,W.iH)(""),i=(0,W.iH)(""),r=(0,W.iH)(""),c=(0,W.iH)(""),d=(0,W.iH)(""),s=(0,W.iH)(""),m=(0,W.iH)(""),v=(0,W.iH)(""),p=(0,W.iH)(""),f=()=>{l("create-item",{document_type:n.value,document_number:o.value,legal_name:u.value,tradename:i.value,country:r.value,department:c.value,province:d.value,district:s.value,phone:m.value,email:v.value}),h()},h=()=>{t.value=!1,n.value=o.value=i.value=m.value=v.value="",u.value=c.value=d.value=s.value=r.value=""};(0,a.YP)((()=>n.value),(()=>{_()}));const _=()=>{if(8==o.value.length||11==o.value.length)if("RUC"==n.value){const e={tipo_documento:"ruc",numero:o.value};k(e).then((e=>{p.value="",u.value=e.data.data.nombre,c.value=e.data.data.departamento,d.value=e.data.data.provincia,s.value=e.data.data.distrito,r.value="PERÚ"})).catch((e=>{u.value=c.value=d.value=s.value=r.value="",p.value=e.response.data.data}))}else{const e={tipo_documento:"dni",numero:o.value};k(e).then((e=>{u.value=e.data.data.nombres,p.value=""})).catch((e=>{u.value=c.value=d.value=s.value=r.value="",p.value=e.response.data.data}))}};return{dialog:t,document_type:n,document_number:o,messageValidate:p,legal_name:u,tradename:i,country:r,department:c,province:d,district:s,phone:m,email:v,customerValidate:_,createItem:f,closeItem:h}}},$=t(89);const U=(0,$.Z)(x,[["render",w]]);var A=U},892:function(e,l,t){t.d(l,{Z:function(){return V}});var a=t(3396),n=t(870),o=t(5039),u=t(1888),i=t(1334),r=t(3601),c=t(8521),d=t(9234),s=t(3289),m=t(2900),v=t(1328);const p=(0,a._)("span",{class:"px-4 w-full text-center text-teal-500 font-bold title_views"},"CREAR PRODUCTO",-1);function f(e,l,t,f,h,_){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(n.T,{size:"small",class:"text-none",color:"indigo-lighten-2",onClick:l[0]||(l[0]=e=>f.dialog=!0)},{default:(0,a.w5)((()=>[(0,a.Wm)(s.t,{icon:"mdi-plus"}),(0,a.Uk)(" Nuevo")])),_:1}),(0,a.Wm)(r.B,{modelValue:f.dialog,"onUpdate:modelValue":l[4]||(l[4]=e=>f.dialog=e),width:"550","onClick:outside":f.closeItem},{default:(0,a.w5)((()=>[(0,a.Wm)(o._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v.i,null,{default:(0,a.w5)((()=>[p])),_:1}),(0,a.Wm)(u.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(m.h,{variant:"outlined",label:"Codigo producto",color:"teal",modelValue:f.cod_product,"onUpdate:modelValue":l[1]||(l[1]=e=>f.cod_product=e),"prepend-inner-icon":"mdi-barcode"},null,8,["modelValue"]),(0,a.Wm)(m.h,{variant:"outlined",label:"Descripción","prepend-inner-icon":"mdi-text-box-plus",color:"blue",modelValue:f.description,"onUpdate:modelValue":l[2]||(l[2]=e=>f.description=e)},null,8,["modelValue"]),(0,a.Wm)(m.h,{type:"number",variant:"outlined",label:"Precio","prepend-inner-icon":"mdi-cash",color:"blue",modelValue:f.price_list,"onUpdate:modelValue":l[3]||(l[3]=e=>f.price_list=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(i.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d.C),(0,a.Wm)(n.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:f.closeItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Cancelar ")])),_:1},8,["onClick"]),(0,a.Wm)(n.T,{color:"blue-lighten-1",variant:"tonal",onClick:f.createItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])],64)}var h=t(4870),_={emits:["create-item"],setup(e,{emit:l}){const t=(0,h.iH)(!1),a=(0,h.iH)(""),n=(0,h.iH)(""),o=(0,h.iH)(""),u=()=>{l("create-item",{cod_product:a.value,description:n.value,price_list:o.value,email:"user@example.com",state:!0}),i()},i=()=>{t.value=!1,a.value=n.value=o.value=""};return{dialog:t,cod_product:a,description:n,price_list:o,createItem:u,closeItem:i}}},g=t(89);const b=(0,g.Z)(_,[["render",f]]);var V=b},5620:function(e,l,t){t.d(l,{Z:function(){return $e}});var a=t(3396),n=t(7139),o=t(1550),u=t(7103),i=t(836),r=t(3289),c=t(6052),d=t(8777),s=t(4193),m=t(240),v=t(2900),p=t(1556),f=t(5863),h=t(2370),_=t(1819),g=t(4357),b=t(3185),V=t(4019),w=t(1629),y=t(8717),C=t(4906),k=t(4870),W=t(3766),x=t(131),$=t(1107),U=t(2385),A=t(9888);function H(e,l,t){if(null==l)return e;if(Array.isArray(l))throw new Error("Multiple matches is not implemented");return"number"===typeof l&&~l?(0,a.Wm)(a.HY,null,[(0,a.Wm)("span",{class:"v-autocomplete__unmask"},[e.substr(0,l)]),(0,a.Wm)("span",{class:"v-autocomplete__mask"},[e.substr(l,t)]),(0,a.Wm)("span",{class:"v-autocomplete__unmask"},[e.substr(l+t)])]):e}const I=(0,W.U)({autoSelectFirst:{type:[Boolean,String]},search:String,...(0,_.Up)({filterKeys:["title"]}),...(0,m.fL)(),...(0,x.CE)((0,v.w)({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...(0,C.X)({transition:!1})},"VAutocomplete"),P=(0,$.ev)()({name:"VAutocomplete",props:I(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,l){let{slots:t}=l;const{t:n}=(0,w.bU)(),m=(0,k.iH)(),C=(0,k.XI)(!1),W=(0,k.XI)(!0),$=(0,k.XI)(!1),I=(0,k.iH)(),P=(0,k.iH)(),z=(0,y.z)(e,"menu"),T=(0,a.Fl)({get:()=>z.value,set:e=>{z.value&&!e&&I.value?.ΨopenChildren||(z.value=e)}}),Z=(0,k.XI)(-1),S=(0,a.Fl)((()=>m.value?.color)),D=(0,a.Fl)((()=>T.value?e.closeText:e.openText)),{items:E,transformIn:B,transformOut:F}=(0,V.Ce)(e),{textColorClasses:L,textColorStyles:Y}=(0,h.rY)(S),M=(0,y.z)(e,"search",""),N=(0,y.z)(e,"modelValue",[],(e=>B(null===e?[null]:(0,x.FT)(e))),(l=>{const t=F(l);return e.multiple?t:t[0]??null})),R=(0,g.cI)(),{filteredItems:K,getMatches:O}=(0,_.L0)(e,E,(()=>W.value?"":M.value)),Q=(0,a.Fl)((()=>e.hideSelected?K.value.filter((e=>!N.value.some((l=>l.value===e.value)))):K.value)),X=(0,a.Fl)((()=>N.value.map((e=>e.props.value)))),j=(0,a.Fl)((()=>{const l=!0===e.autoSelectFirst||"exact"===e.autoSelectFirst&&M.value===Q.value[0]?.title;return l&&Q.value.length>0&&!W.value&&!$.value})),q=(0,a.Fl)((()=>e.hideNoData&&!E.value.length||e.readonly||R?.isReadonly.value)),G=(0,k.iH)(),{onListScroll:J,onListKeydown:ee}=(0,f.B)(G,m);function le(l){e.openOnClear&&(T.value=!0),M.value=""}function te(){q.value||(T.value=!0)}function ae(e){q.value||(C.value&&(e.preventDefault(),e.stopPropagation()),T.value=!T.value)}function ne(l){if(e.readonly||R?.isReadonly.value)return;const t=m.value.selectionStart,a=N.value.length;if((Z.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(T.value=!0),["Escape"].includes(l.key)&&(T.value=!1),j.value&&["Enter","Tab"].includes(l.key)&&me(Q.value[0]),"ArrowDown"===l.key&&j.value&&G.value?.focus("next"),e.multiple){if(["Backspace","Delete"].includes(l.key)){if(Z.value<0)return void("Backspace"!==l.key||M.value||(Z.value=a-1));const e=Z.value,t=N.value[Z.value];t&&!t.props.disabled&&me(t),Z.value=e>=a-1?a-2:e}if("ArrowLeft"===l.key){if(Z.value<0&&t>0)return;const e=Z.value>-1?Z.value-1:a-1;N.value[e]?Z.value=e:(Z.value=-1,m.value.setSelectionRange(M.value?.length,M.value?.length))}if("ArrowRight"===l.key){if(Z.value<0)return;const e=Z.value+1;N.value[e]?Z.value=e:(Z.value=-1,m.value.setSelectionRange(0,0))}}}function oe(e){M.value=e.target.value}function ue(e){if((0,x.Ku)(m.value,":autofill")||(0,x.Ku)(m.value,":-webkit-autofill")){const l=E.value.find((l=>l.title===e.target.value));l&&me(l)}}function ie(){C.value&&(W.value=!0,m.value?.focus())}function re(e){C.value=!0,setTimeout((()=>{$.value=!0}))}function ce(e){$.value=!1}function de(l){(null==l||""===l&&!e.multiple)&&(N.value=[])}const se=(0,k.XI)(!1);function me(l){if(e.multiple){const t=N.value.findIndex((t=>e.valueComparator(t.value,l.value)));if(-1===t)N.value=[...N.value,l];else{const e=[...N.value];e.splice(t,1),N.value=e}}else N.value=[l],se.value=!0,M.value=l.title,T.value=!1,W.value=!0,(0,a.Y3)((()=>se.value=!1))}return(0,a.YP)(C,((l,t)=>{l!==t&&(l?(se.value=!0,M.value=e.multiple?"":String(N.value.at(-1)?.props.title??""),W.value=!0,(0,a.Y3)((()=>se.value=!1))):(e.multiple||M.value?!j.value||$.value||N.value.some((e=>{let{value:l}=e;return l===Q.value[0].value}))||me(Q.value[0]):N.value=[],T.value=!1,M.value="",Z.value=-1))})),(0,a.YP)(M,(e=>{C.value&&!se.value&&(e&&(T.value=!0),W.value=!e)})),(0,a.YP)(T,(()=>{if(!e.hideSelected&&T.value&&N.value.length){const e=Q.value.findIndex((e=>N.value.some((l=>e.value===l.value))));U.BR&&window.requestAnimationFrame((()=>{e>=0&&P.value?.scrollToIndex(e)}))}})),(0,A.L)((()=>{const l=!(!e.chips&&!t.chip),f=!!(!e.hideNoData||Q.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),h=N.value.length>0,[_]=v.h.filterProps(e);return(0,a.Wm)(v.h,(0,a.dG)({ref:m},_,{modelValue:M.value,"onUpdate:modelValue":de,focused:C.value,"onUpdate:focused":e=>C.value=e,validationValue:N.externalValue,counterValue:N.value.length,dirty:h,onInput:oe,onChange:ue,class:["v-autocomplete","v-autocomplete--"+(e.multiple?"multiple":"single"),{"v-autocomplete--active-menu":T.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":Z.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:h?void 0:e.placeholder,"onClick:clear":le,"onMousedown:control":te,onKeydown:ne}),{...t,default:()=>(0,a.Wm)(a.HY,null,[(0,a.Wm)(s.T,(0,a.dG)({ref:I,modelValue:T.value,"onUpdate:modelValue":e=>T.value=e,activator:"parent",contentClass:"v-autocomplete__content",disabled:q.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:ie},e.menuProps),{default:()=>[f&&(0,a.Wm)(c.i,{ref:G,selected:X.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onKeydown:ee,onFocusin:re,onFocusout:ce,onScrollPassive:J,tabindex:"-1",color:e.itemColor??e.color},{default:()=>[t["prepend-item"]?.(),!Q.value.length&&!e.hideNoData&&(t["no-data"]?.()??(0,a.Wm)(d.l,{title:n(e.noDataText)},null)),(0,a.Wm)(p.t,{ref:P,renderless:!0,items:Q.value},{default:l=>{let{item:n,index:u,itemRef:i}=l;const c=(0,a.dG)(n.props,{ref:i,key:u,active:!(!j.value||0!==u)||void 0,onClick:()=>me(n)});return t.item?.({item:n,index:u,props:c})??(0,a.Wm)(d.l,c,{prepend:l=>{let{isSelected:t}=l;return(0,a.Wm)(a.HY,null,[e.multiple&&!e.hideSelected?(0,a.Wm)(o.p,{key:n.value,modelValue:t,ripple:!1,tabindex:"-1"},null):void 0,n.props.prependIcon&&(0,a.Wm)(r.t,{icon:n.props.prependIcon},null)])},title:()=>W.value?n.title:H(n.title,O(n)?.title,M.value?.length??0)})}}),t["append-item"]?.()]})]}),N.value.map(((n,o)=>{function r(e){e.stopPropagation(),e.preventDefault(),me(n)}const c={"onClick:close":r,onMousedown(e){e.preventDefault(),e.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},d=l?!!t.chip:!!t.selection,s=d?(0,x._g)(l?t.chip({item:n,index:o,props:c}):t.selection({item:n,index:o})):void 0;if(!d||s)return(0,a.Wm)("div",{key:n.value,class:["v-autocomplete__selection",o===Z.value&&["v-autocomplete__selection--selected",L.value]],style:o===Z.value?Y.value:{}},[l?t.chip?(0,a.Wm)(i.z,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:n.title}}},{default:()=>[s]}):(0,a.Wm)(u.v,(0,a.dG)({key:"chip",closable:e.closableChips,size:"small",text:n.title,disabled:n.props.disabled},c),null):s??(0,a.Wm)("span",{class:"v-autocomplete__selection-text"},[n.title,e.multiple&&o<N.value.length-1&&(0,a.Wm)("span",{class:"v-autocomplete__selection-comma"},[(0,a.Uk)(",")])])])}))]),"append-inner":function(){for(var l=arguments.length,o=new Array(l),u=0;u<l;u++)o[u]=arguments[u];return(0,a.Wm)(a.HY,null,[t["append-inner"]?.(...o),e.menuIcon?(0,a.Wm)(r.t,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:ae,onClick:x.ZT,"aria-label":n(D.value),title:n(D.value)},null):void 0])}})})),(0,b.F)({isFocused:C,isPristine:W,menu:T,search:M,filteredItems:K,select:me},m)}});var z=t(870),T=t(1231),Z=t(678);const S={class:"rounded-lg bg-white elevation-1 p-8 lg:grid lg:grid-cols-4 gap-2 block"},D=(0,a._)("span",null,"Tipo de comprobante",-1),E=(0,a._)("span",null,"Moneda",-1),B=(0,a._)("span",null,"Condición de pago",-1),F=(0,a._)("span",null,"Fecha de emisión",-1),L=(0,a._)("span",null,"Fecha de vencimiento",-1),Y=(0,a._)("span",null,"Establecimiento",-1),M=(0,a._)("span",null,"Almacén",-1),N={class:"col-span-2 pt-2"},R=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{class:"text-left"}," # "),(0,a._)("th",{class:"text-left"}," Descripción "),(0,a._)("th",{class:"text-left"}," Cantidad "),(0,a._)("th",{class:"text-left"}," Precio unitario "),(0,a._)("th",{class:"text-left min-w-[5rem]"}," Total "),(0,a._)("th",{class:"text-center"}," Acciones ")])],-1),K={class:"text-center"},O=["onClick"],Q={class:"flex justify-end w-full col-span-4 pt-4"},X={class:"text-gray-400 font-bold title_views flex"},j=(0,a._)("span",{class:"w-full"},"Subtotal: ",-1),q={class:"w-full text-end"},G={class:"text-gray-400 font-bold title_views flex"},J=(0,a._)("span",{class:"w-full"},"I.G.V. 18%:",-1),ee={class:"w-full text-end"},le={class:"text-gray-400 font-bold title_views flex"},te=(0,a._)("span",{class:"w-full"},"Total:",-1),ae={class:"w-full text-end"},ne={class:"flex gap-2 pt-4"};function oe(e,l,t,o,u,i){const r=(0,a.up)("ModalCreateCustomer"),c=(0,a.up)("ModalCreateProcuct"),d=(0,a.up)("AutocompleteProduct");return(0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("div",null,[D,(0,a.Wm)(m.rL,{label:"Seleccionar",class:"pt-4",items:["FACTURA ELECTRÓNICA","BOLETA DE VENTA ELECTRÓNICA","NOTA DE VENTA"],color:"blue",modelValue:o.voucher_type,"onUpdate:modelValue":l[0]||(l[0]=e=>o.voucher_type=e)},null,8,["modelValue"])]),(0,a._)("div",null,[(0,a._)("span",null,[(0,a.Uk)("Cliente "),(0,a.Wm)(r,{onCreateItem:o.createCustomers},null,8,["onCreateItem"])]),(0,a.Wm)(P,{label:"Seleccionar",class:"pt-2",items:o.listCustomers.map((e=>e.legal_name)),color:"blue",modelValue:o.customer,"onUpdate:modelValue":l[1]||(l[1]=e=>o.customer=e)},null,8,["items","modelValue"])]),(0,a._)("div",null,[E,(0,a.Wm)(m.rL,{label:"Seleccionar",class:"pt-4",items:["PEN","USD"],color:"blue",modelValue:o.currency,"onUpdate:modelValue":l[2]||(l[2]=e=>o.currency=e)},null,8,["modelValue"])]),(0,a._)("div",null,[B,(0,a.Wm)(m.rL,{label:"Seleccionar",class:"pt-4",items:["Contado","Crédito"],color:"blue",modelValue:o.condition,"onUpdate:modelValue":l[3]||(l[3]=e=>o.condition=e)},null,8,["modelValue"])]),(0,a._)("div",null,[F,(0,a.Wm)(v.h,{type:"date","hide-details":"",class:"pt-4",color:"blue",modelValue:o.date_created,"onUpdate:modelValue":l[4]||(l[4]=e=>o.date_created=e)},null,8,["modelValue"])]),(0,a._)("div",null,[L,(0,a.Wm)(v.h,{type:"date","hide-details":"",class:"pt-4",color:"blue",modelValue:o.due_date,"onUpdate:modelValue":l[5]||(l[5]=e=>o.due_date=e)},null,8,["modelValue"])]),(0,a._)("div",null,[Y,(0,a.Wm)(m.rL,{label:"Seleccionar",class:"pt-4",items:o.listEstablishment.map((e=>e.name)),color:"blue",modelValue:o.establishment,"onUpdate:modelValue":l[6]||(l[6]=e=>o.establishment=e)},null,8,["items","modelValue"])]),(0,a._)("div",null,[M,(0,a.Wm)(m.rL,{label:"Seleccionar",class:"pt-4",items:o.listStore.map((e=>e.name)),color:"blue",modelValue:o.store,"onUpdate:modelValue":l[7]||(l[7]=e=>o.store=e)},null,8,["items","modelValue"])]),(0,a._)("div",N,[(0,a._)("span",null,[(0,a.Uk)("Producto "),(0,a.Wm)(c,{onCreateItem:o.createProduct},null,8,["onCreateItem"])]),(0,a.Wm)(d,{itemsProduct:o.listProducts.map((e=>e.description)),onSelectedItem:o.onSelectedProduct},null,8,["itemsProduct","onSelectedItem"])]),(0,a.Wm)(T.Y,{class:"col-span-4"},{default:(0,a.w5)((()=>[R,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.voucherProducts,((e,l)=>((0,a.wg)(),(0,a.iD)("tr",{key:l},[(0,a._)("td",null,(0,n.zw)(l+1),1),(0,a._)("td",null,(0,n.zw)(e.description),1),(0,a._)("td",null,[(0,a.Wm)(v.h,{type:"number",modelValue:e.amount,"onUpdate:modelValue":l=>e.amount=l,density:"compact","hide-details":"",class:"max-w-[50%]",variant:"underlined",color:"blue"},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("td",null,[(0,a.Wm)(v.h,{type:"number",modelValue:e.unit_price,"onUpdate:modelValue":l=>e.unit_price=l,density:"compact","hide-details":"",class:"max-w-[50%]",variant:"underlined",color:"blue"},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("td",null,(0,n.zw)(o.siglaMoney)+" "+(0,n.zw)(e.total.toFixed(2)),1),(0,a._)("td",K,[(0,a._)("span",{onClick:e=>o.removeProduct(l)},[(0,a.Wm)(z.T,{icon:"mdi-delete-empty",size:"small",variant:"text",color:"red"}),(0,a.Wm)(Z.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Quitar")])),_:1})],8,O)])])))),128))])])),_:1}),(0,a._)("div",Q,[(0,a._)("div",null,[(0,a._)("div",X,[j,(0,a._)("div",q,(0,n.zw)(o.siglaMoney)+" "+(0,n.zw)(o.total),1)]),(0,a._)("div",G,[J,(0,a._)("div",ee,(0,n.zw)(o.siglaMoney)+" "+(0,n.zw)((o.total/100*18).toFixed(2)),1)]),(0,a._)("div",le,[te,(0,a._)("div",ae,(0,n.zw)(o.siglaMoney)+" "+(0,n.zw)((Number(o.total)+Number(o.total/100*18)).toFixed(2)),1)]),(0,a._)("div",ne,[(0,a.Wm)(z.T,{class:"text-none",color:"blue-grey-lighten-2",onClick:o.cancelQuote},{default:(0,a.w5)((()=>[(0,a.Uk)("Cancelar")])),_:1},8,["onClick"]),(0,a.Wm)(z.T,{class:"text-none",color:"indigo-lighten-2",onClick:o.acceptQuote},{default:(0,a.w5)((()=>[(0,a.Uk)("Aceptar")])),_:1},8,["onClick"])])])])])}t(560);var ue=t(3512),ie=t(5066),re=t(3509),ce=t(2658),de=t(9414),se=t(892),me=t(9790),ve=t(9242);const pe={class:"w-full mt-2.5"},fe={class:"w-full block lg:grid gap-2"},he={class:"container_autocomplete col-span-2"},_e={class:"w-full flex gap-2 min-h-[2rem] pt-1 lg:pt-0"},ge=["onClick"];function be(e,l,t,o,u,i){return(0,a.wg)(),(0,a.iD)("div",pe,[(0,a._)("div",fe,[(0,a._)("div",he,[(0,a.Wm)(P,{modelValue:o.selectedItem,"onUpdate:modelValue":l[0]||(l[0]=e=>o.selectedItem=e),items:o.filteredItems,"hide-details":"",placeholder:"Seleccionar productos",onKeydown:[(0,ve.D2)((0,ve.iM)(o.addTag,["stop","prevent"]),["tab"]),(0,ve.D2)((0,ve.iM)(o.addTag,["stop","prevent"]),["enter"])],"onUpdate:search":o.updateValueInput,color:"blue",clearable:""},null,8,["modelValue","items","onKeydown","onUpdate:search"])]),(0,a._)("div",_e,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.tags,((e,l)=>((0,a.wg)(),(0,a.j4)(z.T,{variant:"outlined",key:l,color:"blue",size:"small",class:"no-cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e)+" ",1),(0,a._)("span",{onClick:e=>o.removeTag(l),class:"remove-tag"},"X",8,ge)])),_:2},1024)))),128))])])])}var Ve={props:{itemsProduct:Array},emits:["selected-item"],setup(e,{emit:l}){const t=(0,k.iH)([]),n=(0,k.iH)(""),o=(0,k.iH)(""),u=(0,k.iH)([]);(0,a.YP)((()=>e.itemsProduct),(e=>{t.value=e}));const i=(0,a.Fl)((()=>{if(u.value.length>0){const e=u.value.map((e=>new RegExp(e,"i")));return t.value.filter((l=>e.every((e=>e.test(l)))))}return e.itemsProduct})),r=e=>{o.value=e},c=()=>{""!==o.value.trim()&&(u.value.push(o.value.trim()),o.value="",n.value="")},d=e=>{u.value.splice(e,1)};return(0,a.YP)((()=>n.value),(e=>{e&&l("selected-item",{item:e}),n.value=""})),{items:t,selectedItem:n,newTag:o,tags:u,filteredItems:i,updateValueInput:r,addTag:c,removeTag:d}}},we=t(89);const ye=(0,we.Z)(Ve,[["render",be]]);var Ce=ye,ke=t(4239),We={components:{ModalCreateCustomer:me.Z,ModalCreateProcuct:se.Z,AutocompleteProduct:Ce},props:{itemEdit:Object},emits:["cancel-quote","accept-quote"],setup(e,{emit:l}){const t=(0,k.iH)([]),n=(0,k.iH)([]),o=(0,k.iH)([]),u=(0,k.iH)([]),i=(0,k.iH)([]),r=(0,k.iH)(0),c=(0,k.iH)(""),d=(0,k.iH)(""),s=(0,k.iH)(""),m=(0,k.iH)(""),v=(0,k.iH)(""),p=(0,k.iH)(""),f=(0,k.iH)(""),h=(0,k.iH)(""),_=(0,k.iH)(null),g=(0,k.iH)(""),b=(0,k.iH)(null),V=(0,k.iH)(""),w=(0,k.iH)(null),y=()=>{const e=new Date,l=e.getFullYear(),t=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${l}-${t}-${a}`};(0,a.YP)((()=>e.itemEdit),(async e=>{await W(),e&&Object.keys(e).length>0&&C(e)}));const C=e=>{r.value=e.total,c.value=e.voucher_type,d.value=e.currency,m.value=e.condition,v.value=e.date_created.split("T")[0],p.value=e.due_date.split("T")[0],g.value=e.client.legal_name,h.value=e.store.name,V.value=e.establishment.name,i.value=e.elements.map((e=>{const l=e.product,{product:t,...a}=e;return a.description=l.description,a}))};(0,a.bv)((async()=>{f.value=ke.Z.state.rol,await W(),v.value=y(),p.value=y(),e.itemEdit&&Object.keys(e.itemEdit).length>0&&C(e.itemEdit)}));const W=async()=>{const[e,l,a,i]=await Promise.all([(0,re.oi)(ke.Z.state.token),(0,de.Kg)(ke.Z.state.token),(0,ie.L_)(ke.Z.state.token),(0,ce.Qb)(ke.Z.state.token)]);t.value=e.data,n.value=a.data,u.value=i.data,o.value=l.data},x=async e=>{""!=e.document_type&&""!=e.document_number?await(0,ie.Mn)(e,ke.Z.state.token).then((()=>{(0,ue.y)((()=>{W()}),"success","Logrado","Se ha creado correctamente")})).catch((e=>{(0,ue.y)((()=>{}),"error","Error",e.message)})):(0,ue.y)((()=>{}),"warning","Error","Los campos no deben estar vacios")},$=async e=>{""!=e.cod_product&&""!=e.description&&""!=e.price_list?await(0,re.cT)(e,ke.Z.state.token).then((()=>{(0,ue.y)((()=>{W()}),"success","Logrado","Se ha creado correctamente")})).catch((e=>{(0,ue.y)((()=>{}),"error","Error",e.message)})):(0,ue.y)((()=>{}),"warning","Error","Los campos no deben estar vacios")},U=e=>{i.value.splice(e,1)};(0,a.YP)((()=>d.value),(e=>{"PEN"==e?s.value="S/.":"USD"==e&&(s.value="$ ")})),(0,a.YP)((()=>g.value),(e=>{if(e){const l=n.value.find((l=>l.legal_name==e));b.value=l.id}})),(0,a.YP)((()=>V.value),(e=>{e&&(w.value=u.value.find((l=>l.name==e)).id)})),(0,a.YP)((()=>h.value),(e=>{e&&(_.value=o.value.find((l=>l.name==e)).id)}));const A=e=>{const l={description:e.item,amount:1,unit_price:0,total:0,product:t.value.find((l=>l.description==e.item)).id};i.value.push(l)};(0,a.YP)((()=>i.value),(e=>{let l=0;e.forEach((e=>{e.total=Number((e.amount*e.unit_price).toFixed(2)),l+=e.total})),r.value=l}),{deep:!0});const H=()=>{v.value=p.value=m.value=h.value=d.value=r.value="",i.value=[],l("cancel-quote")},I=()=>{""!=v.value&&""!=p.value&&""!=m.value&&""!=d.value&&""!=h.value&&""!=r.value&&i.value.length>0?l("accept-quote",{date_created:v.value+" 00:00",due_date:p.value+" 00:00",condition:m.value,voucher_type:c.value,currency:d.value,total:r.value,client:b.value,store:_.value,establishment:w.value,elements:i.value}):(0,ue.y)((()=>{}),"warning","Advertencia","Hay campos que están sin seleccionar o rellenar")};return{createCustomers:x,cancelQuote:H,removeProduct:U,acceptQuote:I,createProduct:$,onSelectedProduct:A,voucher_type:c,siglaMoney:s,rol:f,customer:g,total:r,establishment:V,listProducts:t,voucherProducts:i,currency:d,condition:m,date_created:v,due_date:p,store:h,listCustomers:n,listEstablishment:u,listStore:o}}};const xe=(0,we.Z)(We,[["render",oe]]);var $e=xe}}]);
//# sourceMappingURL=971.d4a8e186.js.map