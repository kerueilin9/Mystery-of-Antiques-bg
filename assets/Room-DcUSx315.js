import{d as p,a as b,h as U,f as W,s as y,c as Y,g as H}from"./firebaseConfig-BxjB4Upe.js";import{d as T,r as f,h as M,i as Z,a as c,o as G,c as J,g as k,t as S,b as l,w as i,e as q,j as L,u as O}from"./index-CuIsaB5c.js";import{_ as Q,i as X}from"./SelectModal.vue_vue_type_script_setup_true_lang-B0ErMx07.js";const ee={class:"w-10/12 max-w-sm mt-8 mx-auto text-center"},ae={class:"text-3xl"},te={class:"flex gap-2 flex-wrap mt-2 justify-center"},oe="/Mystery-of-Antiques-bg",ce=T({__name:"Room",setup(le){const w=L(),C=O(),n=f();n.value=w.params.roomId;const x=p(b,"rooms",n.value),g=f(!1),v=f(),z=f(1),R=f(0),F=[{label:"老朝奉",value:"LaoChaofeng"},{label:"藥不然",value:"MedicineIsNot"},{label:"鄭國渠",value:"ZhengGuoqu"},{label:"許願",value:"MakeAWish"},{label:"方震",value:"FangZhen"},{label:"姬雲浮",value:"JiYunfu"},{label:"木戶加奈",value:"KidoKana"},{label:"黃煙煙",value:"HuangYanyan"}],V=["KidoKana","HuangYanyan"],t=f({...{name:null,character:null}}),B={name:{required:!0,trigger:["blur","input","change"],type:"string",validator:(a,e)=>e==null||e===""?Promise.reject("必填"):Promise.resolve()},character:{required:!0,trigger:["blur","input","change"],type:"string",validator:(a,e)=>e==null||e===""?Promise.reject("必填"):Promise.resolve()}},h=M(()=>w.query.host==="1"),I=h.value,$=M(()=>h.value?"開始遊戲":"加入遊戲"),j=async()=>{try{const a=Y(x,"animals"),e=await H(a),o=[];e.forEach(m=>{const r=m.data(),u={name:r.animal,value:r.value,view_value:r.view_value};o.push(u)}),console.log(o),v.value=o}catch{}},N=async()=>{for(let a=1;a<=3;a++)try{const e=v.value.filter(s=>s.value===1),o=v.value.filter(s=>s.value===0),m=A(e,2),r=A(o,2),u=D([...m,...r]);for(const s of u)await y(p(x,`ReadomAnimalForRound${a}`,String(z.value++)),s);console.log(u),v.value=v.value.filter(s=>!u.some(_=>_.name===s.name))}catch{}},A=(a,e)=>a.sort(()=>.5-Math.random()).slice(0,e),D=a=>{for(let e=a.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[a[e],a[o]]=[a[o],a[e]]}return a},E=()=>Math.floor(Math.random()*3)+1,K=async()=>{try{const a=p(b,"rooms",n.value),e={name:t.value.name,character:t.value.character,host:h.value,remain:1,myTurn:0,attacked:0,isCheckAble:1,isSkillAble:1,inActiveRound:V.includes(t.value.character)?E():0};h.value?(await y(p(a,"players",t.value.name),e),await X(b,"rooms","roomId",n.value,"currentRound",1),await j(),await N(),R.value=1,g.value=!0):(await y(p(a,"players",t.value.name),e),C.push({path:`${oe}/game/${n.value}`,query:{host:h.value?1:0,player:t.value.name}}))}catch{}};return Z(async()=>{try{n.value&&I&&!R.value&&(await U(W,"deleteRoomWithSubcollections")({roomId:n.value}),console.log(`房間 ${n.value} 已成功刪除。`))}catch(a){console.error("Error deleting room: ",a)}}),(a,e)=>{const o=c("n-input"),m=c("n-form-item"),r=c("n-select"),u=c("n-form"),s=c("n-card"),_=c("n-button"),P=c("router-link");return G(),J("div",ee,[k("p",ae,"房號："+S(n.value),1),l(s,{"header-style":"font-size: 32px",title:"玩家資料",class:"mt-8"},{default:i(()=>[l(u,{class:"text-center",ref:"basicFormRef","require-mark-placement":"left",rules:B,model:t.value},{default:i(()=>[l(m,{path:"name",label:"玩家暱稱","label-style":"font-size: 24px"},{default:i(()=>[l(o,{size:"large",class:"w-full text-xl","show-button":!1,value:t.value.name,"onUpdate:value":e[0]||(e[0]=d=>t.value.name=d),placeholder:"請填參與玩家都知道的暱稱"},null,8,["value"])]),_:1}),l(m,{path:"character",label:"角色","label-style":"font-size: 24px"},{default:i(()=>[l(r,{size:"large",class:"w-full custom-select-font-size",value:t.value.character,"onUpdate:value":e[1]||(e[1]=d=>t.value.character=d),options:F,placeholder:"選取抽到的角色"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}),k("section",te,[l(P,{to:"/Mystery-of-Antiques-bg/"},{default:i(()=>[l(_,{class:"text-2xl",size:"large"},{default:i(()=>[q("返回")]),_:1})]),_:1}),l(_,{class:"text-2xl",size:"large",type:"primary",onClick:e[2]||(e[2]=d=>K())},{default:i(()=>[q(S($.value),1)]),_:1})]),l(Q,{showModal:g.value,"onUpdate:showModal":e[3]||(e[3]=d=>g.value=d),name:t.value.name},null,8,["showModal","name"])])}}});export{ce as default};