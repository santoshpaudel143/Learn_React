(this.webpackJsonpmy_chating_app=this.webpackJsonpmy_chating_app||[]).push([[0],{18:function(e,t,a){e.exports=a(36)},23:function(e,t,a){},24:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),s=a.n(c),o=(a(23),a(9)),i=(a(24),a(14)),l=a(15),m=a(17),u=a(16),p=(n.Component,a(8)),d=a.n(p),h=d.a.initializeApp({apiKey:"AIzaSyAPN0J22NjgdNBK38vNkuT1Xapq2pWz-cM",authDomain:"theboss-559e3.firebaseapp.com",databaseURL:"https://theboss-559e3.firebaseio.com",projectId:"theboss-559e3",storageBucket:"theboss-559e3.appspot.com",messagingSenderId:"559353482363",appId:"1:559353482363:web:97116e071d70eaed0126de",measurementId:"G-9NLYRDGQ3X"}).firestore();a(35);var f=function(e){var t=e.psr===e.userName;return r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:t?"chat1":"chat2"},r.a.createElement("p",null,r.a.createElement("i",null,e.userName)," : ",r.a.createElement("b",null,r.a.createElement("big",null,e.message)))))};var g=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),l=i[0],m=i[1],u=Object(n.useState)(""),p=Object(o.a)(u,2),g=p[0],b=p[1];return Object(n.useEffect)((function(){b(prompt("Enter Your username"))}),[]),Object(n.useEffect)((function(){h.collection("message").orderBy("timestamp","asc").onSnapshot((function(e){m(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"title"},r.a.createElement("marquee",{direction:"Right",bgcolor:"Blue",text:"Blue"},r.a.createElement("b",null,r.a.createElement("h1",null,"The BOSS_ Chatting Group")))),r.a.createElement("div",{id:"div2"},l.map((function(e){e.id;var t=e.message;return r.a.createElement(f,{psr:g,userName:t.userName,message:t.message})}))),r.a.createElement("div",{id:"div3"},r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Type your message",onChange:function(e){return c(e.target.value)},value:a}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),h.collection("message").add({message:a,userName:g,timestamp:d.a.firestore.FieldValue.serverTimestamp()}),c("")},disabled:!a}," Send "))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.d2b842df.chunk.js.map