import{s as ct,n as x,c as $,o as it,r as ut}from"../chunks/scheduler.Bnq60-53.js";import{S as ft,i as pt,e as b,s as D,c as _,a as P,l as W,f as M,d as h,m as u,g as H,h as l,r as rt,t as T,b as A,j as S,n as tt,o as et}from"../chunks/index.Ds0bHGC8.js";import{b as st,d as at,e as mt,u as dt}from"../chunks/firebase.xiFXEIL6.js";import{w as nt}from"../chunks/index.Cyf_2U9l.js";function ht(n){let t,e;return{c(){t=b("p"),e=T(n[6]),this.h()},l(s){t=_(s,"P",{class:!0});var a=P(t);e=A(a,n[6]),a.forEach(h),this.h()},h(){u(t,"class","mt-4 text-red-600")},m(s,a){H(s,t,a),l(t,e)},p(s,a){a&64&&S(e,s[6])},d(s){s&&h(t)}}}function bt(n){let t,e,s,a,k,d,c,r,f,C,w,I,U,y,v,N,q,g,L,X='<span class="label-text text-black">New Transaction Amount</span>',Q,E,j,R,Y="Update Transaction Amount",F,V,O,Z,p=n[6]&&lt(n),m=n[7]&&ot(n);return{c(){t=b("div"),e=b("p"),s=T("Employee Name: "),a=T(n[1]),k=D(),d=b("p"),c=T("Transaction Amount: $"),r=T(n[2]),f=D(),C=b("p"),w=T("Influencer: "),I=T(n[5]),U=D(),y=b("p"),v=T("QR Code ID: "),N=T(n[4]),q=D(),g=b("div"),L=b("label"),L.innerHTML=X,Q=D(),E=b("input"),j=D(),R=b("button"),R.textContent=Y,F=D(),p&&p.c(),V=D(),m&&m.c(),this.h()},l(i){t=_(i,"DIV",{class:!0});var o=P(t);e=_(o,"P",{class:!0});var z=P(e);s=A(z,"Employee Name: "),a=A(z,n[1]),z.forEach(h),k=M(o),d=_(o,"P",{class:!0});var G=P(d);c=A(G,"Transaction Amount: $"),r=A(G,n[2]),G.forEach(h),f=M(o),C=_(o,"P",{class:!0});var J=P(C);w=A(J,"Influencer: "),I=A(J,n[5]),J.forEach(h),U=M(o),y=_(o,"P",{class:!0});var K=P(y);v=A(K,"QR Code ID: "),N=A(K,n[4]),K.forEach(h),q=M(o),g=_(o,"DIV",{class:!0});var B=P(g);L=_(B,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),W(L)!=="svelte-1q9sp6"&&(L.innerHTML=X),Q=M(B),E=_(B,"INPUT",{id:!0,type:!0,step:!0,class:!0}),B.forEach(h),j=M(o),R=_(o,"BUTTON",{class:!0,"data-svelte-h":!0}),W(R)!=="svelte-130tbqt"&&(R.textContent=Y),F=M(o),p&&p.l(o),V=M(o),m&&m.l(o),o.forEach(h),this.h()},h(){u(e,"class","text-black font-bold mb-2"),u(d,"class","text-black font-bold mb-2"),u(C,"class","text-black font-bold mb-2"),u(y,"class","text-black font-bold mb-2"),u(L,"class","label"),u(L,"for","newTransactionAmount"),u(E,"id","newTransactionAmount"),u(E,"type","number"),u(E,"step","0.01"),u(E,"class","input input-bordered border-black text-black"),u(g,"class","form-control mb-4"),u(R,"class","btn btn-primary w-full shadow-md"),u(t,"class","w-full max-w-sm shadow-lg rounded-lg p-6 bg-white")},m(i,o){H(i,t,o),l(t,e),l(e,s),l(e,a),l(t,k),l(t,d),l(d,c),l(d,r),l(t,f),l(t,C),l(C,w),l(C,I),l(t,U),l(t,y),l(y,v),l(y,N),l(t,q),l(t,g),l(g,L),l(g,Q),l(g,E),tt(E,n[3]),l(t,j),l(t,R),l(t,F),p&&p.m(t,null),l(t,V),m&&m.m(t,null),O||(Z=[et(E,"input",n[11]),et(R,"click",n[10])],O=!0)},p(i,o){o&2&&S(a,i[1]),o&4&&S(r,i[2]),o&32&&S(I,i[5]),o&16&&S(N,i[4]),o&8&&rt(E.value)!==i[3]&&tt(E,i[3]),i[6]?p?p.p(i,o):(p=lt(i),p.c(),p.m(t,V)):p&&(p.d(1),p=null),i[7]?m?m.p(i,o):(m=ot(i),m.c(),m.m(t,null)):m&&(m.d(1),m=null)},d(i){i&&h(t),p&&p.d(),m&&m.d(),O=!1,ut(Z)}}}function lt(n){let t,e;return{c(){t=b("p"),e=T(n[6]),this.h()},l(s){t=_(s,"P",{class:!0});var a=P(t);e=A(a,n[6]),a.forEach(h),this.h()},h(){u(t,"class","mt-4 text-red-600")},m(s,a){H(s,t,a),l(t,e)},p(s,a){a&64&&S(e,s[6])},d(s){s&&h(t)}}}function ot(n){let t,e;return{c(){t=b("p"),e=T(n[7]),this.h()},l(s){t=_(s,"P",{class:!0});var a=P(t);e=A(a,n[7]),a.forEach(h),this.h()},h(){u(t,"class","mt-4 text-green-600")},m(s,a){H(s,t,a),l(t,e)},p(s,a){a&128&&S(e,s[7])},d(s){s&&h(t)}}}function _t(n){let t,e,s="Transaction Successful",a;function k(r,f){return r[0]?bt:ht}let d=k(n),c=d(n);return{c(){t=b("div"),e=b("h1"),e.textContent=s,a=D(),c.c(),this.h()},l(r){t=_(r,"DIV",{class:!0});var f=P(t);e=_(f,"H1",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-wvlv96"&&(e.textContent=s),a=M(f),c.l(f),f.forEach(h),this.h()},h(){u(e,"class","text-3xl font-bold text-black mb-6"),u(t,"class","p-8 bg-base-100 text-black min-h-screen flex flex-col items-center")},m(r,f){H(r,t,f),l(t,e),l(t,a),c.m(t,null)},p(r,[f]){d===(d=k(r))&&c?c.p(r,f):(c.d(1),c=d(r),c&&(c.c(),c.m(t,null)))},i:x,o:x,d(r){r&&h(t),c.d()}}}function vt(n,t,e){let s,a,k="",d="",c="",r="",f="",C="",w=nt("");$(n,w,v=>e(6,s=v));let I=nt("");$(n,I,v=>e(7,a=v)),it(()=>{const v=new URLSearchParams(window.location.search);if(e(0,k=v.get("transaction")||""),k){const N=st(at,"transactions",k);mt(N).then(q=>{if(q.exists()){const g=q.data();e(1,d=g.employeeName||""),e(2,c=g.transactionAmount||""),e(3,r=c),e(4,f=g.qrCodeId||""),e(5,C=g.influencerName||"")}else w.set("Transaction not found.")}).catch(q=>{w.set("Error fetching transaction."),console.error("Error fetching transaction:",q)})}else w.set("No transaction ID found.")});const U=async()=>{const v=parseFloat(r);if(isNaN(v)||v<=0){w.set("Transaction amount must be a valid number."),I.set("");return}try{const N=st(at,"transactions",k);await dt(N,{transactionAmount:v}),e(2,c=r),I.set("Transaction amount updated successfully."),w.set("")}catch(N){console.error("Error updating transaction:",N),w.set("Error updating transaction. Please try again."),I.set("")}};function y(){r=rt(this.value),e(3,r)}return[k,d,c,r,f,C,s,a,w,I,U,y]}class Tt extends ft{constructor(t){super(),pt(this,t,vt,_t,ct,{})}}export{Tt as component};
