import{s as U,c as L,n as p,a as $,u as E,g as q,b as A}from"../chunks/scheduler.PCYk-eKx.js";import{S as C,i as D,k,g as S,l as h,m as I,n as b,d as _,o as N,e as g,t as m,c as y,a as v,b as d,p as R,h as u}from"../chunks/index.BWac97FB.js";import{a as V}from"../chunks/authStore.Dc8xNwkm.js";import{b as j}from"../chunks/paths.PaoNn1MQ.js";/* empty css                    */function w(a){let e,o,t,s,i;return{c(){e=g("div"),o=m("User is not signed in, click "),t=g("a"),s=m("here"),i=m(" to sign in."),this.h()},l(n){e=y(n,"DIV",{});var l=v(e);o=d(l,"User is not signed in, click "),t=y(l,"A",{href:!0});var r=v(t);s=d(r,"here"),r.forEach(_),i=d(l," to sign in."),l.forEach(_),this.h()},h(){R(t,"href",a[1]+"/auth/sign-up")},m(n,l){S(n,e,l),u(e,o),u(e,t),u(t,s),u(e,i)},p,i:p,o:p,d(n){n&&_(e)}}}function z(a){let e;const o=a[4].default,t=$(o,a,a[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,i){t&&t.m(s,i),e=!0},p(s,i){t&&t.p&&(!e||i&8)&&E(t,o,s,s[3],e?A(o,s[3],i,null):q(s[3]),null)},i(s){e||(b(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function B(a){let e,o,t,s;const i=[z,w],n=[];function l(r,c){return r[0]?0:1}return e=l(a),o=n[e]=i[e](a),{c(){o.c(),t=k()},l(r){o.l(r),t=k()},m(r,c){n[e].m(r,c),S(r,t,c),s=!0},p(r,[c]){let f=e;e=l(r),e===f?n[e].p(r,c):(N(),h(n[f],1,1,()=>{n[f]=null}),I(),o=n[e],o?o.p(r,c):(o=n[e]=i[e](r),o.c()),b(o,1),o.m(t.parentNode,t))},i(r){s||(b(o),s=!0)},o(r){h(o),s=!1},d(r){r&&_(t),n[e].d(r)}}}function F(a,e,o){let t;L(a,V,r=>o(2,t=r));let{$$slots:s={},$$scope:i}=e,n=j,l=!1;return a.$$set=r=>{"$$scope"in r&&o(3,i=r.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&t&&o(0,l=!!t.currentUser)},[l,n,t,i,s]}class O extends C{constructor(e){super(),D(this,e,F,B,U,{})}}export{O as component};
