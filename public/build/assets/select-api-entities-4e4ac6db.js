import{b as p}from"./ns-prompt-popup-4f52d15c.js";import{P as c}from"./bootstrap-b8cd97d4.js";import{j as b}from"./join-array-567f2575.js";async function d(o,m,u,i="multiselect"){return await new Promise((r,s)=>{nsHttpClient.get(o).subscribe({next:async n=>{try{const t=await new Promise((a,e)=>{c.show(p,{label:m,type:i,options:n.map(l=>({label:l.name,value:l.id})),value:u,resolve:a,reject:e})});if(i==="multiselect"){const a=n.filter(e=>t.includes(e.id)).map(e=>e.name);return r({labels:b(a),values:t})}else{const a=n.filter(e=>+e.id==+t).map(e=>e.name);return r({labels:a,values:[t]})}}catch(t){return s(t)}},error:n=>s(n)})})}export{d as s};
