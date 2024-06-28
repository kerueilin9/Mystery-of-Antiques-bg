import{d as z,r as v,g as x,h as c,o as K,c as T,f as M,t as A,a as n,w as i,b as k,i as Y,e as Z}from"./index-B9k0ZTQV.js";import{d as p,a as w,s as b,c as C,g as F,q as G,w as H,u as J,i as L}from"./firebaseConfig-BlVJPXzE.js";import{_ as O}from"./SelectModal.vue_vue_type_script_setup_true_lang-DufiafGB.js";const W={class:"w-10/12 max-w-sm mt-8 mx-auto text-center"},Q={class:"text-3xl"},X={class:"flex gap-2 flex-wrap mt-2 justify-center"},ee="/Mystery-of-Antiques-bg",se=z({__name:"Room",setup(ae){const y=Y(),P=Z(),m=v();m.value=y.params.roomId;const R=p(w,"rooms",m.value),g=v(!1),f=v(),B=v(1),D=[{label:"老朝奉",value:"LaoChaofeng"},{label:"藥不然",value:"MedicineIsNot"},{label:"鄭國渠",value:"ZhengGuoqu"},{label:"許願",value:"MakeAWish"},{label:"方震",value:"FangZhen"},{label:"姬雲浮",value:"JiYunfu"},{label:"木戶加奈",value:"KidoKana"},{label:"黃煙煙",value:"HuangYanyan"}],o=v({...{name:null,character:null}}),I={name:{required:!0,trigger:["blur","input","change"],type:"string",validator:(a,e)=>e==null||e===""?Promise.reject("必填"):Promise.resolve()},character:{required:!0,trigger:["blur","input","change"],type:"string",validator:(a,e)=>e==null||e===""?Promise.reject("必填"):Promise.resolve()}},h=x(()=>y.query.host==="1"),S=x(()=>h.value?"開始遊戲":"加入遊戲"),V=async()=>{try{const a=C(R,"animals"),e=await F(a),t=[];e.forEach(r=>{const l=r.data(),u={name:l.animal,value:l.value,view_value:l.view_value};t.push(u)}),console.log(t),f.value=t}catch{}},$=async()=>{for(let a=1;a<=3;a++)try{const e=f.value.filter(s=>s.value===1),t=f.value.filter(s=>s.value===0),r=q(e,2),l=q(t,2),u=j([...r,...l]);for(const s of u)await b(p(R,`ReadomAnimalForRound${a}`,String(B.value++)),s);console.log(u),f.value=f.value.filter(s=>!u.some(_=>_.name===s.name))}catch{}},q=(a,e)=>a.sort(()=>.5-Math.random()).slice(0,e),j=a=>{for(let e=a.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[a[e],a[t]]=[a[t],a[e]]}return a},N=async()=>{const a=C(w,"rooms");let e=G(a,H("roomId","==",m.value)),r=(await F(e)).docs.map(l=>J(l.ref,{currentRound:L(1)}));await Promise.all(r)},E=async()=>{try{const a=p(w,"rooms",m.value),e={name:o.value.name,character:o.value.character,host:h.value,remain:1,myTurn:0,attacked:0};h.value?(await b(p(a,"players",o.value.name),e),await N(),await V(),await $(),g.value=!0):(await b(p(a,"players",o.value.name),e),P.push({path:`${ee}/game/${m.value}`,query:{host:h.value?1:0,player:o.value.name}}))}catch{}};return(a,e)=>{const t=c("n-input"),r=c("n-form-item"),l=c("n-select"),u=c("n-form"),s=c("n-card"),_=c("n-button"),U=c("router-link");return K(),T("div",W,[M("p",Q,"房號："+A(m.value),1),n(s,{title:"玩家資料",class:"mt-8"},{default:i(()=>[n(u,{class:"text-center",ref:"basicFormRef","require-mark-placement":"left",rules:I,model:o.value},{default:i(()=>[n(r,{path:"name",label:"玩家暱稱"},{default:i(()=>[n(t,{class:"w-full","show-button":!1,value:o.value.name,"onUpdate:value":e[0]||(e[0]=d=>o.value.name=d),placeholder:"請填參與玩家都知道的暱稱"},null,8,["value"])]),_:1}),n(r,{path:"character",label:"角色"},{default:i(()=>[n(l,{class:"w-full",value:o.value.character,"onUpdate:value":e[1]||(e[1]=d=>o.value.character=d),options:D,placeholder:"選取抽到的角色"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}),M("section",X,[n(U,{to:"/Mystery-of-Antiques-bg/",class:"underline"},{default:i(()=>[n(_,{size:"large"},{default:i(()=>[k("返回")]),_:1})]),_:1}),n(_,{size:"large",type:"primary",onClick:e[2]||(e[2]=d=>E())},{default:i(()=>[k(A(S.value),1)]),_:1})]),n(O,{showModal:g.value,"onUpdate:showModal":e[3]||(e[3]=d=>g.value=d),name:o.value.name},null,8,["showModal","name"])])}}});export{se as default};
