(this["webpackJsonppwa-mobile"]=this["webpackJsonppwa-mobile"]||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(49),o=t.n(c),r=(t(76),t(50)),s=t(51),m=t(69),i=t(68),u=t(9),d=t(56),p=t.n(d),E=(t(87),t(11)),v=t(20),g=t.n(v),h=t(121),b=t(58),N=t(59),f=t(122);var w=function(e){var a=Object(n.useState)(e),t=Object(E.a)(a,2),l=t[0],c=t[1];return{value:l,onChange:function(e){c(e.target.value)}}},x=function(e){var a=Object(n.useState)(!1),t=Object(E.a)(a,2),c=t[0],o=t[1],r=w(""),s=w(""),m=Object(n.useState)(null),i=Object(E.a)(m,2),d=i[0],p=i[1];return l.a.createElement("div",{className:"loginScreen"},l.a.createElement("h1",null,"PWA"),l.a.createElement("h5",null,"Catchphrase"),l.a.createElement(h.a,null,l.a.createElement(b.a,{controlId:"username"},l.a.createElement(N.a,Object.assign({autoFocus:!0,type:"email"},r,{autoComplete:"new-password",placeholder:"first name"}))),l.a.createElement(b.a,{controlId:"password"},l.a.createElement(N.a,Object.assign({},s,{type:"password",autoComplete:"new-password",placeholder:"password"}))),l.a.createElement(f.a,{block:!0,type:"button",value:c?"Loading...":"Login in",onClick:function(e){return e.preventDefault(),p(null),""==r.value?(p("Enter your username"),!1):""==s.value?(p("Enter your password"),!1):(o(!0),void g.a.post("https://techespo.com/pwa-react/api/signin.php",{username:r.value,password:s.value}).then((function(e){o(!1),""!=e.data.data?(p("Successfully login"),u.d.push("/home")):p("Incorrect username or password")})).catch((function(e){o(!1),p("Something went wrong. Please try again later.")})))}},"Login in"),l.a.createElement("a",{href:"/register"},"Register")),d&&l.a.createElement(l.a.Fragment,null,l.a.createElement("small",{style:{color:"red"}},d),l.a.createElement("br",null)),l.a.createElement("br",null))},S=t(120),C=t(61),y=t(60);var O=function(e){var a=Object(n.useState)(e),t=Object(E.a)(a,2),l=t[0],c=t[1];return{value:l,onChange:function(e){c(e.target.value)}}},j=function(e){var a=Object(n.useState)(!1),t=Object(E.a)(a,2),c=t[0],o=t[1],r=O(""),s=O(""),m=O(""),i=Object(n.useState)(""),d=Object(E.a)(i,2),p=d[0],v=d[1],f=Object(n.useState)(null),w=Object(E.a)(f,2),x=w[0],j=w[1],k=Object(n.useState)(!1),I=Object(E.a)(k,2),z=I[0],A=I[1],F=Object(n.useState)(!1),W=Object(E.a)(F,2),L=W[0],T=W[1];return l.a.createElement("div",{className:"registerScreen"},l.a.createElement(h.a,null,l.a.createElement("h4",null,"What's Your Name?"),l.a.createElement(b.a,{className:"nameText",controlId:"fname"},l.a.createElement(N.a,Object.assign({autoFocus:!0,type:"text"},r,{placeholder:"First Name"}))),l.a.createElement(b.a,{controlId:"lname"},l.a.createElement(N.a,Object.assign({},s,{type:"text",placeholder:"Last Name"}))),l.a.createElement("h4",null,"And your gender?"),l.a.createElement(S.a,{className:"nameText"},l.a.createElement(C.a,{className:"gender",md:6},l.a.createElement(b.a,{controlId:"gender"},l.a.createElement(N.a,Object.assign({className:L},p,{type:"text",value:"Male",onClick:function(){T("select"),A(null),v("Male")}})))),l.a.createElement(C.a,{className:"gender",md:6},l.a.createElement(b.a,{controlId:"gender"},l.a.createElement(N.a,Object.assign({className:z},p,{type:"text",value:"Female",onClick:function(){A("select"),T(null),v("Female")}}))))),l.a.createElement("h4",null,"What's your date of birth?"),l.a.createElement(y.a,{className:"dobInstruction"},l.a.createElement("p",null,"This Can't be changed later.")),l.a.createElement(b.a,{className:"nameText",controlId:"dob"},l.a.createElement(N.a,Object.assign({type:"date"},m,{placeholder:"First Name"}))),l.a.createElement("a",{href:"#",className:"next round",onClick:function(e){return e.preventDefault(),j(null),""==r.value?(j("Enter your first name"),!1):""==s.value?(j("Enter your last name"),!1):""==p?(j("Select your gender"),!1):""==m.value?(j("Select your date of birth"),!1):(o(!0),void g.a.post("https://techespo.com/pwa-react/api/signup.php",{fname:r.value,lname:s.value,gender:p,dob:m.value}).then((function(e){o(!1),""!=e.data.data&&(j("Successfully signup"),u.d.push("/home"))})).catch((function(e){o(!1),j("Something went wrong. Please try again later.")})))},disabled:c},"\u203a"),x&&l.a.createElement(l.a.Fragment,null,l.a.createElement("small",{style:{color:"red"}},x),l.a.createElement("br",null)),l.a.createElement("br",null)))},k=t(18),I=t(65),z=t.n(I),A=t(67),F=t.n(A),W=t(27),L=t.n(W);var T=function(e){var a=Object(n.useState)(!1),t=Object(E.a)(a,2),c=t[0],o=t[1];return l.a.createElement("div",{className:"homeScreen"},l.a.createElement("div",{className:"row textWidth"},l.a.createElement("div",{className:"col-md-6 col-sm-6 col-xs-6"},l.a.createElement("div",{className:"userName"},"Sonali Gupta")),l.a.createElement("div",{className:"col-md-6 col-sm-6 col-xs-6"},l.a.createElement("div",{className:"menu"}))),l.a.createElement("div",{className:"row center"},l.a.createElement("div",{className:"col-md-3 col-sm-1 col-xs-1 w10"},l.a.createElement("a",{href:"#",className:"round previous"}," \u2039 ")),l.a.createElement("div",{className:"col-md-6 col-sm-10 col-xs-10 w80"},l.a.createElement("button",{className:"btn headerInfo"},"Header Info")),l.a.createElement("div",{className:"col-md-3 col-sm-1 col-xs-1 w10"},l.a.createElement("a",{href:"#",className:"round"}," \u203a"))),l.a.createElement("div",{className:"row caption"},l.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},"Caption 1")),l.a.createElement("div",{className:"row caption captionSpace"},l.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},l.a.createElement("img",{src:"./logo512.png"}))),l.a.createElement("div",{className:"row caption textWidth"},l.a.createElement("div",{className:"col-md-6 col-sm-6 col-xs-6"},"Caption text"),l.a.createElement("div",{className:"col-md-6 col-sm-6 col-xs-6"},"Caption text")),l.a.createElement("div",{className:"row caption2 captionSpace"},l.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},"Caption 1")),l.a.createElement(k.b,{slideSpeed:500,direction:"left",spacing:120,isOpen:c},l.a.createElement(k.c,{iconResting:l.a.createElement(z.a,{style:{fontSize:20},nativeColor:"white"}),iconActive:l.a.createElement(F.a,{style:{fontSize:20},nativeColor:"white"}),backgroundColor:"black",onClick:function(){o(!c)},size:56}),l.a.createElement(k.a,{lable:"ddd",icon:l.a.createElement(L.a,{style:{fontSize:20},nativeColor:"black"}),backgroundColor:"white",size:40,onClick:function(){return console.log("First button clicked")}}),l.a.createElement(k.a,{icon:l.a.createElement(L.a,{style:{fontSize:20},nativeColor:"black"}),backgroundColor:"white",size:40}),l.a.createElement(k.a,{icon:l.a.createElement(L.a,{style:{fontSize:20},nativeColor:"black"}),backgroundColor:"white",size:40})),l.a.createElement("div",{className:"row caption"},l.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},"Caption 1")),l.a.createElement("div",{className:"row caption captionSpace"},l.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},l.a.createElement("img",{src:"./logo512.png"}))),l.a.createElement("div",{className:"row caption3 captionSpace"},l.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},"Caption text")),l.a.createElement("div",{className:"row caption"},l.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},"Caption 1")),l.a.createElement("div",{className:"row caption captionSpace"},l.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},l.a.createElement("img",{src:"./logo512.png"}))),l.a.createElement("div",{className:"row caption textWidth1"},l.a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-4"},"Caption text"),l.a.createElement("div",{className:"col-md-4 col-md-4 col-sm-4 col-xs-4"},"Caption text"),l.a.createElement("div",{className:"col-md-4 col-md-4 col-sm-4 col-xs-4"},"Caption text")),l.a.createElement("div",{className:"row caption2"},l.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},"Caption 1")))},M=(t(107),function(e){var a=e.title;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-header"},l.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),l.a.createElement("h2",null,a)),l.a.createElement("p",{className:"App-intro"},"This is the ",a," page."),l.a.createElement("p",null,l.a.createElement(u.a,{to:"/"},"Home")),l.a.createElement("p",null,l.a.createElement(u.a,{to:"/about"},"About")),l.a.createElement("p",null,l.a.createElement(u.a,{to:"/settings"},"Settings")),l.a.createElement("p",null,l.a.createElement(u.a,{to:"/login"},"Login")),l.a.createElement("p",null,l.a.createElement(u.a,{to:"/register"},"Register")))}),P=function(e){return l.a.createElement(M,{title:"About"})},R=function(e){return l.a.createElement(M,{title:"Settings"})},B=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(u.c,{history:u.d},l.a.createElement(u.b,{path:"/",component:x}),l.a.createElement(u.b,{path:"/about",component:P}),l.a.createElement(u.b,{path:"/settings",component:R}),l.a.createElement(u.b,{path:"/home",component:T}),l.a.createElement(u.b,{path:"/register",component:j}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},71:function(e,a,t){e.exports=t(109)},76:function(e,a,t){},87:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.4ecb1c01.chunk.js.map