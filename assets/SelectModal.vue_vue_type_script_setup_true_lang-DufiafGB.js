import{d as B,a as I,c as w,q as g,w as _,g as i,u as P}from"./firebaseConfig-BlVJPXzE.js";import{d as U,j as V,r as m,g as R,k as x,l as j,h as d,o as A,m as E,w as p,a as b,b as F,i as G,e as H}from"./index-B9k0ZTQV.js";const J="/Mystery-of-Antiques-bg",O=U({__name:"SelectModal",props:{showModal:{},showModalModifiers:{},name:{},nameModifiers:{}},emits:["update:showModal","update:name"],setup(M){const S=V(),u=G(),T=H(),f=m(),n=m(""),v=m();v.value=u.params.roomId;const h=B(I,"rooms",v.value),q=m("");q.value=String(u.query.player);const c=R(()=>u.query.host==="1"),y=x(M,"showModal"),D=x(M,"name"),N=R(()=>!(c.value&&u.fullPath.includes("room"))),$=async()=>{try{const o=w(h,"players"),e=await i(o),a=[];e.forEach(l=>{const t=l.data();if(t.remain){const s={label:t.name,value:t.character};a.push(s)}}),f.value=a,console.log(f.value)}catch{}},C=async o=>{const e=w(h,"players");let a=g(e,_("character","==",o)),t=(await i(a)).docs.map(s=>P(s.ref,{remain:0}));await Promise.all(t)},k=async o=>{const e=w(h,"players");let a=g(e,_("character","==",o)),l=await i(a);const t=l.docs.map(s=>P(s.ref,{myTurn:1}));if(await Promise.all(t),!c.value){a=g(e,_("name","==",q.value)),l=await i(a);const s=l.docs.map(r=>P(r.ref,{myTurn:0}));await Promise.all(s)}},z=async()=>{n.value.length===0?S.warning("請選擇玩家"):c.value?(await C(n.value),await k(n.value),T.push({path:`${J}/game/${v.value}`,query:{host:c.value?1:0,player:String(D.value)}})):(await C(n.value),await k(n.value))};return j(()=>y.value,o=>{o===!0&&$()}),(o,e)=>{const a=d("n-select"),l=d("n-button"),t=d("n-card"),s=d("n-modal");return A(),E(s,{show:y.value,"onUpdate:show":e[2]||(e[2]=r=>y.value=r),"mask-closable":!!N.value},{default:p(()=>[b(t,{style:{width:"400px"},title:"選擇下一位玩家",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{footer:p(()=>[b(l,{size:"large",type:"primary",onClick:e[1]||(e[1]=r=>z())},{default:p(()=>[F("確認")]),_:1})]),default:p(()=>[b(a,{value:n.value,"onUpdate:value":e[0]||(e[0]=r=>n.value=r),options:f.value},null,8,["value","options"])]),_:1})]),_:1},8,["show","mask-closable"])}}});export{O as _};
