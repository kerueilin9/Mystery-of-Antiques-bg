import{s as q,d as g,a as w,c as A,g as V,q as N,w as U}from"./firebaseConfig-BR434puB.js";import{s as z,a as j}from"./setFirebaseData-DDiyQXTP.js";import{d as x,r as c,a as v,o as M,c as $,b as r,w as m,e as b,u as k,f as E,g as B,h as L,i as P,j as C,k as S,N as T,B as F,F as J}from"./index-Kfy5H1H5.js";const H="/Mystery-of-Antiques-bg",Z=x({__name:"CreateRoom",setup(p){const i=k(),s=()=>Math.floor(1e5+Math.random()*9e5).toString(),n=c(!1);function t(){const o=["鼠","牛","虎","兔","龍","蛇","馬","羊","猴","雞","狗","豬"],e=o.map(l=>({animal:l,value:0,view_value:0}));let a=0;for(;a<6;){const l=Math.floor(Math.random()*o.length);e[l].value===0&&(e[l].value=1,e[l].view_value=1,a++)}return e}const d=async()=>{const o=s();try{n.value=!0,await q(g(w,"rooms",o),{roomId:o,currentRound:0,score:0,voteLaoChaofeng:0,createdAt:new Date}),await z("/rooms",{roomId:o}),await j(o,"playerCount",1);const e=t(),a=g(w,"rooms",o);for(const l of e)await q(g(a,"animals",l.animal),l);alert(`房間已創建！房號：${o}`),i.push({path:`${H}/room/${o}`,query:{host:"1"}})}catch(e){n.value=!1,console.error("Error adding document: ",e)}};return(o,e)=>{const a=v("n-button");return M(),$("div",null,[r(a,{round:"",class:"text-7xl h-fit py-3 px-10 font-style-Bakudai text-stone-300",type:"primary",loading:n.value,onClick:d},{default:m(()=>[b("開房")]),_:1},8,["loading"])])}}}),G="/Mystery-of-Antiques-bg",K=x({__name:"ReJoinModal",props:{showModal:{},showModalModifiers:{},roomId:{},roomIdModifiers:{}},emits:["update:showModal","update:roomId"],setup(p){const i=E(),s=k(),n=c(),t=c(""),d=c(!1),o=B(p,"showModal"),e=B(p,"roomId"),a=c(),l=async()=>{try{const f=A(a.value,"players"),u=await V(f),h=[];u.forEach(R=>{const _=R.data(),I={label:_.name,value:_.name};h.push(I)}),n.value=h,console.log(n.value)}catch{}},D=async()=>{t.value===null||t.value.trim()===""?i.warning("請選擇玩家"):(d.value=!0,s.push({path:`${G}/game/${e.value}`,query:{host:0,player:String(t.value)}}),o.value=!1,d.value=!1)};return L(()=>o.value,f=>{f===!0&&(a.value=g(w,"rooms",e.value),t.value=null,l())}),(f,u)=>{const h=v("n-select"),R=v("n-button"),_=v("n-card"),I=v("n-modal");return M(),P(I,{show:o.value,"onUpdate:show":u[2]||(u[2]=y=>o.value=y)},{default:m(()=>[r(_,{"header-style":"font-size: 28px",class:"max-w-90 w-96 font-style-Bakudai",title:"重新入房",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{footer:m(()=>[r(R,{loading:d.value,size:"large",type:"primary",onClick:u[1]||(u[1]=y=>D())},{default:m(()=>[b("確認")]),_:1},8,["loading"])]),default:m(()=>[r(h,{value:t.value,"onUpdate:value":u[0]||(u[0]=y=>t.value=y),options:n.value},null,8,["value","options"])]),_:1})]),_:1},8,["show"])}}}),O={class:"flex flex-col items-center font-style-Bakudai"},Q="/Mystery-of-Antiques-bg",W=x({__name:"JoinRoom",setup(p){const i=k(),s=c(),n=c(!1),t=c(!1),d=async()=>{if(s.value){t.value=!0;const o=N(A(w,"rooms"),U("roomId","==",s.value)),e=await V(o);e.empty?alert("房間不存在！"):e.docs[0].data().currentRound!==0?(n.value=!0,t.value=!1):i.push(`${Q}/room/${s.value}`)}else alert("請輸入房間號！");t.value=!1};return(o,e)=>(M(),$(J,null,[C("div",O,[r(S(T),{size:"large",class:"max-w-44 block text-xl",value:s.value,"onUpdate:value":e[0]||(e[0]=a=>s.value=a),placeholder:"輸入房間ID"},null,8,["value"]),r(S(F),{round:"",class:"text-7xl h-fit py-3 px-10 text-stone-300",type:"info",onClick:d,loading:t.value},{default:m(()=>[b("入房")]),_:1},8,["loading"])]),r(K,{roomId:s.value,"onUpdate:roomId":e[1]||(e[1]=a=>s.value=a),showModal:n.value,"onUpdate:showModal":e[2]||(e[2]=a=>n.value=a)},null,8,["roomId","showModal"])],64))}}),X={class:"mt-16"},Y=C("p",{class:"text-7xl font-style-MaShanZheng"},"古董局中局",-1),ee={class:"flex flex-col h-80 justify-around mt-16"},se=x({__name:"Home",setup(p){return(i,s)=>(M(),$("div",X,[Y,C("div",ee,[r(Z),r(W)])]))}});export{se as default};