import{c as g,q as P,w as _,g as p,u as M,i as $,d as z,a as A}from"./firebaseConfig-yf3y-t-J.js";import{d as B,k as U,r as v,h as T,l as D,m as j,a as y,o as E,n as G,w,b as k,e as H,j as F,u as J}from"./index-CrkAOP7J.js";const Q=async(f,b,r,q,c,s)=>{const i=g(f,b);let m=P(i,_(r,"==",q)),h=(await p(m)).docs.map(d=>M(d.ref,{[c]:$(s)}));await Promise.all(h)},K="/Mystery-of-Antiques-bg",W=B({__name:"SelectModal",props:{showModal:{},showModalModifiers:{},name:{},nameModifiers:{}},emits:["update:showModal","update:name"],setup(f){const b=U(),r=F(),q=J(),c=v(),s=v(""),i=v();i.value=r.params.roomId;const m=z(A,"rooms",i.value),C=v("");C.value=String(r.query.player);const h=T(()=>r.query.host==="1"),d=D(f,"showModal"),I=D(f,"name"),R=T(()=>!(h.value&&r.fullPath.includes("room"))),N=async()=>{try{const t=g(m,"players"),e=await p(t),a=[];e.forEach(l=>{const o=l.data();if(o.remain){const n={label:o.name,value:o.character};a.push(n)}}),c.value=a,console.log(c.value)}catch{}},x=async t=>{const e=g(m,"players");let a=P(e,_("character","==",t)),o=(await p(a)).docs.map(n=>M(n.ref,{remain:0}));await Promise.all(o)},S=async t=>{const e=g(m,"players");let a=P(e,_("character","==",t)),l=await p(a);const o=l.docs.map(n=>M(n.ref,{myTurn:1}));if(await Promise.all(o),R.value){a=P(e,_("name","==",C.value)),l=await p(a);const n=l.docs.map(u=>M(u.ref,{myTurn:0}));await Promise.all(n)}},V=async()=>{s.value.length===0?b.warning("請選擇玩家"):R.value?(await x(s.value),await S(s.value)):(await x(s.value),await S(s.value),q.push({path:`${K}/game/${i.value}`,query:{host:h.value?1:0,player:String(I.value)}}))};return j(()=>d.value,t=>{t===!0&&N()}),(t,e)=>{const a=y("n-select"),l=y("n-button"),o=y("n-card"),n=y("n-modal");return E(),G(n,{show:d.value,"onUpdate:show":e[2]||(e[2]=u=>d.value=u),"mask-closable":!!R.value},{default:w(()=>[k(o,{style:{width:"400px"},title:"選擇下一位玩家",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{footer:w(()=>[k(l,{size:"large",type:"primary",onClick:e[1]||(e[1]=u=>V())},{default:w(()=>[H("確認")]),_:1})]),default:w(()=>[k(a,{value:s.value,"onUpdate:value":e[0]||(e[0]=u=>s.value=u),options:c.value},null,8,["value","options"])]),_:1})]),_:1},8,["show","mask-closable"])}}});export{W as _,Q as i};
