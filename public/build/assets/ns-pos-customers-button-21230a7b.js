import{_ as r}from"./preload-helper-41c905a7.js";import{P as n}from"./bootstrap-8be442b1.js";import{_ as a}from"./currency-f8bd78d1.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import{d as p,o as _,c,a as t,t as l}from"./runtime-core.esm-bundler-b48de70a.js";const m={name:"ns-pos-customers-button",methods:{__:a,openCustomerPopup(){n.show(p({loader:()=>r(()=>import("./ns-pos-order-type-popup-5204386b.js").then(e=>e.d),["./ns-pos-order-type-popup-5204386b.js","./bootstrap-8be442b1.js","./currency-f8bd78d1.js","./runtime-core.esm-bundler-b48de70a.js","./ns-prompt-popup-100414c5.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./ns-orders-preview-popup-5ba94079.js","./index.es-25aa42ee.js"],import.meta.url)}))}},beforeDestroy(){nsHotPress.destroy("ns_pos_keyboard_create_customer")},mounted(){for(let e in nsShortcuts)["ns_pos_keyboard_create_customer"].includes(e)&&nsHotPress.create("ns_pos_keyboard_create_customer").whenNotVisible([".is-popup"]).whenPressed(nsShortcuts[e]!==null?nsShortcuts[e].join("+"):null,s=>{s.preventDefault(),this.openCustomerPopup()})}},i={class:"ns-button default"},d=t("i",{class:"mr-1 text-xl lar la-user-circle"},null,-1);function f(e,s,h,P,x,o){return _(),c("div",i,[t("button",{onClick:s[0]||(s[0]=b=>o.openCustomerPopup()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[d,t("span",null,l(o.__("Customers")),1)])])}const B=u(m,[["render",f]]);export{B as default};
