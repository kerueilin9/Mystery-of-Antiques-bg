import{s as v,d as i,a as m,q as C,w as $,c as q,g as b}from"./firebaseConfig-BR434puB.js";import{s as I,a as M}from"./setFirebaseData-DednQhw6.js";import{d as _,r as d,a as V,o as f,c as p,b as l,w as y,e as g,u as w,f as x,N as k,B as A,g as R}from"./index-CHbzvP-e.js";const B="/Mystery-of-Antiques-bg",N=_({__name:"CreateRoom",setup(h){const c=w(),t=()=>Math.floor(1e5+Math.random()*9e5).toString(),n=d(!1);function u(){const e=["鼠","牛","虎","兔","龍","蛇","馬","羊","猴","雞","狗","豬"],o=e.map(a=>({animal:a,value:0,view_value:0}));let s=0;for(;s<6;){const a=Math.floor(Math.random()*e.length);o[a].value===0&&(o[a].value=1,o[a].view_value=1,s++)}return o}const r=async()=>{const e=t();try{n.value=!0,await v(i(m,"rooms",e),{roomId:e,currentRound:0,score:0,voteLaoChaofeng:0,createdAt:new Date}),await I("/rooms",{roomId:e}),await M(e,"playerCount",1);const o=u(),s=i(m,"rooms",e);for(const a of o)await v(i(s,"animals",a.animal),a);alert(`房間已創建！房號：${e}`),c.push({path:`${B}/room/${e}`,query:{host:"1"}})}catch(o){n.value=!1,console.error("Error adding document: ",o)}};return(e,o)=>{const s=V("n-button");return f(),p("div",null,[l(s,{class:"text-8xl h-fit",type:"primary",loading:n.value,onClick:r},{default:y(()=>[g("開房")]),_:1},8,["loading"])])}}}),D={class:"flex flex-col items-center"},S="/Mystery-of-Antiques-bg",T=_({__name:"JoinRoom",setup(h){const c=w();d("");const t=d(),n=async()=>{if(t.value){const u=C(q(m,"rooms"),$("roomId","==",t.value));(await b(u)).empty?alert("房間不存在！"):c.push(`${S}/room/${t.value}`)}else alert("請輸入房間號！")};return(u,r)=>(f(),p("div",D,[l(x(k),{size:"large",class:"max-w-56 block",value:t.value,"onUpdate:value":r[0]||(r[0]=e=>t.value=e),placeholder:"輸入房間ID"},null,8,["value"]),l(x(A),{class:"text-8xl h-fit",type:"info",onClick:n},{default:y(()=>[g("入房")]),_:1})]))}}),j={class:"mt-8"},E=R("p",{class:"text-5xl"},"古董局中局",-1),L={class:"flex flex-col h-80 justify-around mt-16"},U=_({__name:"Home",setup(h){return(c,t)=>(f(),p("div",j,[E,R("div",L,[l(N),l(T)])]))}});export{U as default};
