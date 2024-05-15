import{s as _e,f as I,g as y,h as M,d as $,j,i as k,a as B,l as x,c as U,m as ee,K as F,p as te,M as ue,o as Fe,e as ke,I as ze,n as Ae}from"../chunks/scheduler.7a274a43.js";import{S as he,i as ge,b as P,d as L,m as V,a as p,t as d,e as q,g as le,c as re}from"../chunks/index.28409b7f.js";import{U as Me,g as me,e as Y}from"../chunks/UIcon.ab284b70.js";import{t as Ne,i as we}from"../chunks/projects.f67864a8.js";import{i as Re}from"../chunks/skills.7b1097d1.js";import{C as de}from"../chunks/Chip.1061836e.js";import{b as Te,g as Ye,a as Ce}from"../chunks/app.38572dc4.js";import{C as Ke}from"../chunks/Card.9040c5be.js";import{C as Ge,a as He}from"../chunks/ChipIcon.4b8f32c3.js";import{C as je}from"../chunks/CardDivider.09b854d8.js";import{C as Je}from"../chunks/CardLogo.ffd18bf4.js";import{b as $e}from"../chunks/paths.2573d5b3.js";import{S as Oe}from"../chunks/SearchPage.4b5ca3bf.js";function Qe(s){let t,r,e;return r=new Me({props:{icon:"i-carbon-link",classes:"text-[var(--secondary-text)]"}}),{c(){t=I("a"),P(r.$$.fragment),this.h()},l(l){t=y(l,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0,"data-help":!0});var a=M(t);L(r.$$.fragment,a),a.forEach($),this.h()},h(){j(t,"class","card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit svelte-18qy750"),j(t,"href",s[1]),j(t,"title",s[0]),j(t,"target","_blank"),j(t,"rel","noreferrer"),j(t,"data-help",s[0])},m(l,a){k(l,t,a),V(r,t,null),e=!0},p(l,[a]){(!e||a&2)&&j(t,"href",l[1]),(!e||a&1)&&j(t,"title",l[0]),(!e||a&1)&&j(t,"data-help",l[0])},i(l){e||(p(r.$$.fragment,l),e=!0)},o(l){d(r.$$.fragment,l),e=!1},d(l){l&&$(t),q(r)}}}function We(s,t,r){let{label:e}=t,{to:l}=t;return s.$$set=a=>{"label"in a&&r(0,e=a.label),"to"in a&&r(1,l=a.to)},[e,l]}class Xe extends he{constructor(t){super(),ge(this,t,We,Qe,_e,{label:0,to:1})}}function De(s,t,r){const e=s.slice();return e[5]=t[r],e}function Se(s,t,r){const e=s.slice();return e[8]=t[r],e}function Ee(s){let t,r;return t=new Xe({props:{label:s[8].label??"",to:s[8].to}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){V(t,e,l),r=!0},p(e,l){const a={};l&1&&(a.label=e[8].label??""),l&1&&(a.to=e[8].to),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function Ze(s){let t;return{c(){t=x(s[2])},l(r){t=ee(r,s[2])},m(r,e){k(r,t,e)},p(r,e){e&4&&te(t,r[2])},d(r){r&&$(t)}}}function Ie(s){let t,r;return t=new de({props:{$$slots:{default:[xe]},$$scope:{ctx:s}}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){V(t,e,l),r=!0},p(e,l){const a={};l&2050&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function xe(s){let t;return{c(){t=x(s[1])},l(r){t=ee(r,s[1])},m(r,e){k(r,t,e)},p(r,e){e&2&&te(t,r[1])},d(r){r&&$(t)}}}function ye(s){let t,r;return t=new He({props:{logo:me(s[5].logo),name:s[5].name,href:`${$e}/skills/${s[5].slug}`}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){V(t,e,l),r=!0},p(e,l){const a={};l&1&&(a.logo=me(e[5].logo)),l&1&&(a.name=e[5].name),l&1&&(a.href=`${$e}/skills/${e[5].slug}`),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function et(s){let t,r,e,l,a,i,c,o,z,h,g,E=s[0].type+"",u,_,D,w,K,G,Z,ne=s[0].shortDescription+"",oe,ae,A,N,pe,ie,H,fe,R,J;t=new Je({props:{alt:s[0].name,src:me(s[0].logo),size:40,radius:"0"}}),l=new Ge({props:{title:s[0].name}});let O=Y(s[0].links),v=[];for(let n=0;n<O.length;n+=1)v[n]=Ee(Se(s,O,n));const Be=n=>d(v[n],1,1,()=>{v[n]=null});o=new je({}),N=new de({props:{$$slots:{default:[Ze]},$$scope:{ctx:s}}});let C=s[2]!==s[1]&&Ie(s);H=new je({});let Q=Y(s[0].skills),b=[];for(let n=0;n<Q.length;n+=1)b[n]=ye(De(s,Q,n));const Ue=n=>d(b[n],1,1,()=>{b[n]=null});return{c(){P(t.$$.fragment),r=B(),e=I("div"),P(l.$$.fragment),a=B(),i=I("div");for(let n=0;n<v.length;n+=1)v[n].c();c=B(),P(o.$$.fragment),z=B(),h=I("div"),g=I("p"),u=x(E),_=B(),D=I("p"),w=x(s[3]),K=B(),G=I("div"),Z=I("p"),oe=x(ne),ae=B(),A=I("div"),P(N.$$.fragment),pe=B(),C&&C.c(),ie=B(),P(H.$$.fragment),fe=B(),R=I("div");for(let n=0;n<b.length;n+=1)b[n].c();this.h()},l(n){L(t.$$.fragment,n),r=U(n),e=y(n,"DIV",{class:!0});var f=M(e);L(l.$$.fragment,f),a=U(f),i=y(f,"DIV",{class:!0});var S=M(i);for(let X=0;X<v.length;X+=1)v[X].l(S);S.forEach($),f.forEach($),c=U(n),L(o.$$.fragment,n),z=U(n),h=y(n,"DIV",{class:!0});var W=M(h);g=y(W,"P",{});var se=M(g);u=ee(se,E),se.forEach($),_=U(W),D=y(W,"P",{});var m=M(D);w=ee(m,s[3]),m.forEach($),W.forEach($),K=U(n),G=y(n,"DIV",{class:!0});var T=M(G);Z=y(T,"P",{class:!0});var ve=M(Z);oe=ee(ve,ne),ve.forEach($),T.forEach($),ae=U(n),A=y(n,"DIV",{class:!0});var ce=M(A);L(N.$$.fragment,ce),pe=U(ce),C&&C.l(ce),ce.forEach($),ie=U(n),L(H.$$.fragment,n),fe=U(n),R=y(n,"DIV",{class:!0});var be=M(R);for(let X=0;X<b.length;X+=1)b[X].l(be);be.forEach($),this.h()},h(){j(i,"class","row"),j(e,"class","m-t-20px row justify-between items-center"),j(h,"class","row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"),j(Z,"class","text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1 line-clamp-3"),j(G,"class","col sm:h-100px md:h-160px"),j(A,"class","row justify-between text-0.8em font-400"),j(R,"class","row flex-wrap")},m(n,f){V(t,n,f),k(n,r,f),k(n,e,f),V(l,e,null),F(e,a),F(e,i);for(let S=0;S<v.length;S+=1)v[S]&&v[S].m(i,null);k(n,c,f),V(o,n,f),k(n,z,f),k(n,h,f),F(h,g),F(g,u),F(h,_),F(h,D),F(D,w),k(n,K,f),k(n,G,f),F(G,Z),F(Z,oe),k(n,ae,f),k(n,A,f),V(N,A,null),F(A,pe),C&&C.m(A,null),k(n,ie,f),V(H,n,f),k(n,fe,f),k(n,R,f);for(let S=0;S<b.length;S+=1)b[S]&&b[S].m(R,null);J=!0},p(n,f){const S={};f&1&&(S.alt=n[0].name),f&1&&(S.src=me(n[0].logo)),t.$set(S);const W={};if(f&1&&(W.title=n[0].name),l.$set(W),f&1){O=Y(n[0].links);let m;for(m=0;m<O.length;m+=1){const T=Se(n,O,m);v[m]?(v[m].p(T,f),p(v[m],1)):(v[m]=Ee(T),v[m].c(),p(v[m],1),v[m].m(i,null))}for(le(),m=O.length;m<v.length;m+=1)Be(m);re()}(!J||f&1)&&E!==(E=n[0].type+"")&&te(u,E),(!J||f&8)&&te(w,n[3]),(!J||f&1)&&ne!==(ne=n[0].shortDescription+"")&&te(oe,ne);const se={};if(f&2052&&(se.$$scope={dirty:f,ctx:n}),N.$set(se),n[2]!==n[1]?C?(C.p(n,f),f&6&&p(C,1)):(C=Ie(n),C.c(),p(C,1),C.m(A,null)):C&&(le(),d(C,1,1,()=>{C=null}),re()),f&1){Q=Y(n[0].skills);let m;for(m=0;m<Q.length;m+=1){const T=De(n,Q,m);b[m]?(b[m].p(T,f),p(b[m],1)):(b[m]=ye(T),b[m].c(),p(b[m],1),b[m].m(R,null))}for(le(),m=Q.length;m<b.length;m+=1)Ue(m);re()}},i(n){if(!J){p(t.$$.fragment,n),p(l.$$.fragment,n);for(let f=0;f<O.length;f+=1)p(v[f]);p(o.$$.fragment,n),p(N.$$.fragment,n),p(C),p(H.$$.fragment,n);for(let f=0;f<Q.length;f+=1)p(b[f]);J=!0}},o(n){d(t.$$.fragment,n),d(l.$$.fragment,n),v=v.filter(Boolean);for(let f=0;f<v.length;f+=1)d(v[f]);d(o.$$.fragment,n),d(N.$$.fragment,n),d(C),d(H.$$.fragment,n),b=b.filter(Boolean);for(let f=0;f<b.length;f+=1)d(b[f]);J=!1},d(n){n&&($(r),$(e),$(c),$(z),$(h),$(K),$(G),$(ae),$(A),$(ie),$(fe),$(R)),q(t,n),q(l),ue(v,n),q(o,n),q(N),C&&C.d(),q(H,n),ue(b,n)}}}function tt(s){let t,r;return t=new Ke({props:{color:s[0].color,href:`${$e}/projects/${s[0].slug}`,$$slots:{default:[et]},$$scope:{ctx:s}}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){V(t,e,l),r=!0},p(e,[l]){const a={};l&1&&(a.color=e[0].color),l&1&&(a.href=`${$e}/projects/${e[0].slug}`),l&2063&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function lt(s,t,r){let e,l,a,{project:i}=t;return s.$$set=c=>{"project"in c&&r(0,i=c.project)},s.$$.update=()=>{s.$$.dirty&1&&Te(i.period.from,i.period.to),s.$$.dirty&1&&r(3,e=`${Ye(i.period.from,i.period.to??new Date(Date.now()+1e3*60*60*24))}`),s.$$.dirty&1&&r(2,l=`${Ce(i.period.from.getMonth())} ${i.period.from.getFullYear()}`),s.$$.dirty&1&&r(1,a=i.period.to?`${Ce(i.period.to.getMonth())} ${i.period.to.getFullYear()}`:"now")},[i,a,l,e]}class rt extends he{constructor(t){super(),ge(this,t,lt,tt,_e,{project:0})}}function Pe(s,t,r){const e=s.slice();return e[7]=t[r],e}function Le(s,t,r){const e=s.slice();return e[10]=t[r],e}function nt(s){let t=s[10].name+"",r;return{c(){r=x(t)},l(e){r=ee(e,t)},m(e,l){k(e,r,l)},p(e,l){l&1&&t!==(t=e[10].name+"")&&te(r,t)},d(e){e&&$(r)}}}function Ve(s){let t,r;function e(){return s[5](s[10])}return t=new de({props:{active:s[10].isSelected,classes:"text-0.8em",$$slots:{default:[nt]},$$scope:{ctx:s}}}),t.$on("click",e),{c(){P(t.$$.fragment)},l(l){L(t.$$.fragment,l)},m(l,a){V(t,l,a),r=!0},p(l,a){s=l;const i={};a&1&&(i.active=s[10].isSelected),a&8193&&(i.$$scope={dirty:a,ctx:s}),t.$set(i)},i(l){r||(p(t.$$.fragment,l),r=!0)},o(l){d(t.$$.fragment,l),r=!1},d(l){q(t,l)}}}function st(s){let t,r,e=Y(s[1]),l=[];for(let i=0;i<e.length;i+=1)l[i]=qe(Pe(s,e,i));const a=i=>d(l[i],1,1,()=>{l[i]=null});return{c(){t=I("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=y(i,"DIV",{class:!0});var c=M(t);for(let o=0;o<l.length;o+=1)l[o].l(c);c.forEach($),this.h()},h(){j(t,"class","projects-list mt-5 svelte-f4z73x")},m(i,c){k(i,t,c);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(t,null);r=!0},p(i,c){if(c&2){e=Y(i[1]);let o;for(o=0;o<e.length;o+=1){const z=Pe(i,e,o);l[o]?(l[o].p(z,c),p(l[o],1)):(l[o]=qe(z),l[o].c(),p(l[o],1),l[o].m(t,null))}for(le(),o=e.length;o<l.length;o+=1)a(o);re()}},i(i){if(!r){for(let c=0;c<e.length;c+=1)p(l[c]);r=!0}},o(i){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)d(l[c]);r=!1},d(i){i&&$(t),ue(l,i)}}}function ot(s){let t,r,e,l,a="Could not find anything...",i;return r=new Me({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){t=I("div"),P(r.$$.fragment),e=B(),l=I("p"),l.textContent=a,this.h()},l(c){t=y(c,"DIV",{class:!0});var o=M(t);L(r.$$.fragment,o),e=U(o),l=y(o,"P",{class:!0,["data-svelte-h"]:!0}),ze(l)!=="svelte-1jyyf6v"&&(l.textContent=a),o.forEach($),this.h()},h(){j(l,"class","font-300"),j(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(c,o){k(c,t,o),V(r,t,null),F(t,e),F(t,l),i=!0},p:Ae,i(c){i||(p(r.$$.fragment,c),i=!0)},o(c){d(r.$$.fragment,c),i=!1},d(c){c&&$(t),q(r)}}}function qe(s){let t,r;return t=new rt({props:{project:s[7]}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){V(t,e,l),r=!0},p(e,l){const a={};l&2&&(a.project=e[7]),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function at(s){let t,r,e,l,a,i,c=Y(s[0]),o=[];for(let u=0;u<c.length;u+=1)o[u]=Ve(Le(s,c,u));const z=u=>d(o[u],1,1,()=>{o[u]=null}),h=[ot,st],g=[];function E(u,_){return u[1].length===0?0:1}return e=E(s),l=g[e]=h[e](s),{c(){t=I("div");for(let u=0;u<o.length;u+=1)o[u].c();r=B(),l.c(),a=ke(),this.h()},l(u){t=y(u,"DIV",{class:!0});var _=M(t);for(let D=0;D<o.length;D+=1)o[D].l(_);_.forEach($),r=U(u),l.l(u),a=ke(),this.h()},h(){j(t,"class","projects-filters")},m(u,_){k(u,t,_);for(let D=0;D<o.length;D+=1)o[D]&&o[D].m(t,null);k(u,r,_),g[e].m(u,_),k(u,a,_),i=!0},p(u,_){if(_&5){c=Y(u[0]);let w;for(w=0;w<c.length;w+=1){const K=Le(u,c,w);o[w]?(o[w].p(K,_),p(o[w],1)):(o[w]=Ve(K),o[w].c(),p(o[w],1),o[w].m(t,null))}for(le(),w=c.length;w<o.length;w+=1)z(w);re()}let D=e;e=E(u),e===D?g[e].p(u,_):(le(),d(g[D],1,1,()=>{g[D]=null}),re(),l=g[e],l?l.p(u,_):(l=g[e]=h[e](u),l.c()),p(l,1),l.m(a.parentNode,a))},i(u){if(!i){for(let _=0;_<c.length;_+=1)p(o[_]);p(l),i=!0}},o(u){o=o.filter(Boolean);for(let _=0;_<o.length;_+=1)d(o[_]);d(l),i=!1},d(u){u&&($(t),$(r),$(a)),ue(o,u),g[e].d(u)}}}function it(s){let t,r;return t=new Oe({props:{title:Ne,$$slots:{default:[at]},$$scope:{ctx:s}}}),t.$on("search",s[3]),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){V(t,e,l),r=!0},p(e,[l]){const a={};l&8195&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function ft(s,t,r){let e=Re.filter(h=>we.some(g=>g.skills.some(E=>E.slug===h.slug))),l="",a=[];const i=h=>e.some(g=>g.slug===h&&g.isSelected),c=h=>{r(0,e=e.map(g=>(g.slug===h&&(g.isSelected=!i(h)),g)))},o=h=>{r(4,l=h.detail.search)};Fe(()=>{if(location.search){const E=new URLSearchParams(location.search).get("item");E&&r(4,l=E)}});const z=h=>c(h.slug);return s.$$.update=()=>{s.$$.dirty&17&&r(1,a=we.filter(h=>{const g=e.every(u=>!u.isSelected)||h.skills.some(u=>e.some(_=>_.isSelected&&_.slug===u.slug)),E=l.trim().length===0||h.name.trim().toLowerCase().includes(l.trim().toLowerCase());return g&&E}))},[e,a,c,o,l,z]}class Ct extends he{constructor(t){super(),ge(this,t,ft,it,_e,{})}}export{Ct as component};