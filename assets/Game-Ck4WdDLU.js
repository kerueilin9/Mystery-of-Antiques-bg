import{d as F,j as G,r as l,k as z,l as Q,h as u,o as h,m as R,w as n,a as c,f as j,b as C,c as B,n as K,F as O,t as X,p as Y,i as L,e as W,g as E,q as te}from"./index-B9k0ZTQV.js";import{d as H,a as N,c as A,g as D,q as I,w as T,u as V}from"./firebaseConfig-BlVJPXzE.js";import{_ as oe}from"./SelectModal.vue_vue_type_script_setup_true_lang-DufiafGB.js";const ne={class:"flex justify-end"},le=F({__name:"CheckAntiquesModal",props:{showModal:{},showModalModifiers:{},currentRound:{},currentRoundModifiers:{},character:{},characterModifiers:{}},emits:["update:showModal","update:currentRound","update:character"],setup(q){const S=L();W();const g=G(),M=l();M.value=S.params.roomId;const $=H(N,"rooms",M.value),d=z(q,"showModal"),k=z(q,"currentRound"),y=z(q,"character"),i=l(),s=l(null),w=l(""),_=l(!0),x=async()=>{try{console.log(k.value);const r=A($,`ReadomAnimalForRound${k.value}`),m=await D(r),o=[];m.forEach(e=>{const t=e.data(),a={name:t.name,value:t.value,view_value:t.view_value};o.push(a)}),console.log(o),i.value=o}catch{}},U=async()=>{let r=null;if(s.value.length!==0&&s.value!==null&&_.value){const m=typeof s.value=="string"?[s.value]:s.value;r=i.value.filter(e=>m.some(t=>t===e.name));let o=[];r.forEach(e=>{o.push(`${e.name}是${e.view_value?"真的":"假的"}`)}),w.value=o.join(`
`),console.log(w.value),_.value=!1}else g.warning("無法查看")},P=r=>{s.value=r};return Q(()=>d.value,r=>{r===!0&&x()}),(r,m)=>{const o=u("n-radio"),e=u("n-space"),t=u("n-radio-group"),a=u("n-checkbox"),p=u("n-gi"),v=u("n-grid"),b=u("n-checkbox-group"),Z=u("n-button"),J=u("n-card"),ee=u("n-modal");return h(),R(ee,{show:d.value,"onUpdate:show":m[2]||(m[2]=f=>d.value=f),"mask-closable":!0},{default:n(()=>[c(J,{style:{width:"400px"},title:"鑑定古董",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{footer:n(()=>[j("div",ne,[c(Z,{size:"large",type:"primary",onClick:m[1]||(m[1]=f=>U())},{default:n(()=>[C("確認")]),_:1})])]),default:n(()=>[y.value!=="MakeAWish"?(h(),R(t,{key:0,value:s.value,"onUpdate:value":m[0]||(m[0]=f=>s.value=f),name:"radiogroup"},{default:n(()=>[c(e,null,{default:n(()=>[(h(!0),B(O,null,K(i.value,f=>(h(),R(o,{key:f.name,value:f.name,label:f.name},null,8,["value","label"]))),128))]),_:1})]),_:1},8,["value"])):(h(),R(b,{key:1,max:2,"onUpdate:value":P},{default:n(()=>[c(v,{"y-gap":8,cols:2},{default:n(()=>[(h(!0),B(O,null,K(i.value,(f,ae)=>(h(),R(p,{key:ae},{default:n(()=>[c(a,{value:f.name,label:f.name},null,8,["value","label"])]),_:2},1024))),128))]),_:1})]),_:1})),w.value.length!==0?(h(),R(J,{key:2,title:"鑑定結果"},{default:n(()=>[C(X(w.value),1)]),_:1})):Y("",!0)]),_:1})]),_:1},8,["show"])}}}),se="/Mystery-of-Antiques-bg",re=F({__name:"SkillModal",props:{showModal:{},showModalModifiers:{},name:{},nameModifiers:{}},emits:["update:showModal","update:name"],setup(q){const S=G(),g=L(),M=W(),$=l(),d=l(""),k=l();k.value=g.params.roomId;const y=H(N,"rooms",k.value),i=l("");i.value=String(g.query.player);const s=E(()=>g.query.host==="1"),w=z(q,"showModal"),_=z(q,"name"),x=E(()=>!(s.value&&g.fullPath.includes("room"))),U=async()=>{try{const o=A(y,"players"),e=await D(o),t=[];e.forEach(a=>{const p=a.data();if(p.remain){const v={label:p.name,value:p.character};t.push(v)}}),$.value=t,console.log($.value)}catch{}},P=async o=>{const e=A(y,"players");let t=I(e,T("character","==",o)),p=(await D(t)).docs.map(v=>V(v.ref,{remain:0}));await Promise.all(p)},r=async o=>{const e=A(y,"players");let t=I(e,T("character","==",o)),a=await D(t);const p=a.docs.map(v=>V(v.ref,{myTurn:1}));if(await Promise.all(p),!s.value){t=I(e,T("name","==",i.value)),a=await D(t);const v=a.docs.map(b=>V(b.ref,{myTurn:0}));await Promise.all(v)}},m=async()=>{d.value.length===0?S.warning("請選擇玩家"):s.value?(await P(d.value),await r(d.value),M.push({path:`${se}/game/${k.value}`,query:{host:s.value?1:0,player:String(_.value)}})):(await P(d.value),await r(d.value))};return Q(()=>w.value,o=>{o===!0&&U()}),(o,e)=>{const t=u("n-select"),a=u("n-button"),p=u("n-card"),v=u("n-modal");return h(),R(v,{show:w.value,"onUpdate:show":e[2]||(e[2]=b=>w.value=b),"mask-closable":!!x.value},{default:n(()=>[c(p,{style:{width:"400px"},title:"選擇下一位玩家",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{footer:n(()=>[c(a,{size:"large",type:"primary",onClick:e[1]||(e[1]=b=>m())},{default:n(()=>[C("確認")]),_:1})]),default:n(()=>[c(t,{value:d.value,"onUpdate:value":e[0]||(e[0]=b=>d.value=b),options:$.value},null,8,["value","options"])]),_:1})]),_:1},8,["show","mask-closable"])}}}),ue={class:"w-10/12 max-w-sm mt-8 mx-auto text-center"},ce={class:"text-3xl"},de={class:"flex flex-col h-96 justify-around"},ve=F({__name:"Game",setup(q){const S=L();W();const g=G(),M=l();M.value=S.params.roomId;const $=H(N,"rooms",M.value),d=l();d.value=S.query.player;const k=E(()=>S.query.host==="1"),y=l(0);l(1);const i=l(!1),s=l(!1),w=l(!1),_=l(),x=l(""),U=async()=>{try{const o=I(A($,"players"),T("name","==",d.value));return(await D(o)).docs[0].data()}catch{}},P=async()=>{try{const o=I(A(N,"rooms"),T("roomId","==",M.value));return(await D(o)).docs[0].data().currentRound}catch{}},r=async()=>{_.value=await U(),_.value.myTurn===1?(x.value=_.value.character,console.log(x.value),y.value=await P(),s.value=!0):g.warning("還沒有到你的回合")},m=async()=>{_.value=await U(),_.value.myTurn===1?(y.value=await P(),w.value=!0):g.warning("還沒有到你的回合")};return te(async()=>{}),(o,e)=>{const t=u("n-button");return h(),B("div",ue,[j("p",ce,"房號："+X(M.value),1),j("div",de,[c(t,{class:"text-4xl h-14",type:"primary",size:"large",onClick:e[0]||(e[0]=()=>{})},{default:n(()=>[C("查看隊友")]),_:1}),c(t,{class:"text-4xl h-14",type:"primary",size:"large",onClick:e[1]||(e[1]=a=>r())},{default:n(()=>[C("鑑定古董")]),_:1}),c(t,{class:"text-4xl h-14",type:"primary",size:"large",onClick:e[2]||(e[2]=a=>m())},{default:n(()=>[C("使用技能")]),_:1}),c(t,{class:"text-4xl h-14",type:"primary",size:"large",onClick:e[3]||(e[3]=a=>i.value=!0)},{default:n(()=>[C("選擇下一位玩家")]),_:1}),k.value?(h(),R(t,{key:0,class:"text-4xl h-14",type:"primary",size:"large",onClick:e[4]||(e[4]=a=>i.value=!0)},{default:n(()=>[C("投票")]),_:1})):Y("",!0)]),c(le,{showModal:s.value,"onUpdate:showModal":e[5]||(e[5]=a=>s.value=a),currentRound:y.value,"onUpdate:currentRound":e[6]||(e[6]=a=>y.value=a),character:x.value,"onUpdate:character":e[7]||(e[7]=a=>x.value=a)},null,8,["showModal","currentRound","character"]),c(re,{showModal:i.value,"onUpdate:showModal":e[8]||(e[8]=a=>i.value=a)},null,8,["showModal"]),c(oe,{showModal:i.value,"onUpdate:showModal":e[9]||(e[9]=a=>i.value=a)},null,8,["showModal"])])}}});export{ve as default};
