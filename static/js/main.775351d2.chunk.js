(this["webpackJsonpnotissimus_test-task"]=this["webpackJsonpnotissimus_test-task"]||[]).push([[0],{10:function(e,t,r){},28:function(e,t,r){},35:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),c=r(11),a=r.n(c),u=(r(28),r(20)),o=r.p+"static/media/logo.6ce24c58.svg",i=r(4),j="user/requiredAuthorization",l="app/redirectToRoute",b="user/resetUser",d=function(e){return{type:j,payload:e}},h=function(e){return{type:l,payload:e}},O=function(){return{type:b}},p=(r(10),r(1)),x=Object(i.b)(null,(function(e){return{resetUser:function(){e(O())}}}))((function(e){var t=e.resetUser;return Object(p.jsx)("button",{className:"button",onClick:t,children:"Logout"})})),f="AUTH",m="NO_AUTH",g="/",v="/profile",y=Object(i.b)((function(e){return{authStatus:e.authStatus,userLogin:e.userLogin,userPassword:e.userPassword}}),(function(e){return{redirectToProfile:function(){e(h(v))},setAuthStatus:function(){e(d(f))}}}))((function(e){var t=e.authStatus,r=e.userLogin,c=e.userPassword,a=e.redirectToProfile,i=e.setAuthStatus,j=Object(n.useState)(""),l=Object(u.a)(j,2),b=l[0],d=l[1],h=Object(n.useState)(!0),O=Object(u.a)(h,2),f=O[0],m=O[1],g=Object(n.useRef)(),v=Object(n.useRef)(),y=function(){v.current.value===c&&g.current.value===r&&m(!1)};return Object(p.jsx)(s.a.Fragment,{children:Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("header",{children:Object(p.jsx)("nav",{className:"header_navigation",children:"NO_AUTH"===t?"":Object(p.jsx)(x,{})})}),Object(p.jsxs)("main",{className:"main",children:[Object(p.jsx)("img",{src:o,className:"main-logo",alt:"logo"}),Object(p.jsx)("p",{children:"Welcome to the Main page!"}),Object(p.jsxs)("form",{className:"login-form",action:"#",onSubmit:function(e){e.preventDefault(),v.current.value===c&&g.current.value===r?(d(""),i(),a()):d("* Wrong login or password. Try again.")},children:[Object(p.jsxs)("label",{children:[" Login",Object(p.jsx)("input",{type:"text",required:!0,onChange:function(){return y()},placeholder:" Insert your login",ref:g,style:{borderColor:b?"red":""}})]}),Object(p.jsxs)("label",{children:[" Password",Object(p.jsx)("input",{type:"text",required:!0,onChange:function(){return y()},placeholder:"Insert your password",ref:v,style:{borderColor:b?"red":""}})]}),Object(p.jsx)("button",{className:"button button--submit",type:"submit",disabled:!!f,children:"Enter"})]}),b?Object(p.jsx)("p",{children:b}):""]})]})})})),S=r(36),N=Object(i.b)((function(e){return{userLogin:e.userLogin,authStatus:e.authStatus}}),null)((function(e){var t=e.userLogin,r=e.authStatus;return Object(p.jsx)(s.a.Fragment,{children:Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("header",{children:Object(p.jsxs)("nav",{className:"header_navigation",children:[Object(p.jsx)("h1",{className:"header_user-email",children:t}),"NO_AUTH"===r?"":Object(p.jsx)(x,{})]})}),Object(p.jsxs)("main",{className:"main",children:[Object(p.jsx)("img",{src:o,className:"main-logo",alt:"logo"}),Object(p.jsx)("p",{children:"Welcome to your Profile page!"})]})]})})})),w=r(21),L=Object(w.a)(),T=Object(i.b)((function(e){return{authStatus:e.authStatus}}))((function(e){var t=e.render,r=e.path,n=e.exact,s=e.authStatus;return Object(p.jsx)(S.b,{path:r,exact:n,render:function(e){return s===f?t(e):Object(p.jsx)(S.a,{to:g})}})})),P=function(){return Object(p.jsx)(S.c,{history:L,children:Object(p.jsxs)(S.d,{children:[Object(p.jsx)(S.b,{exact:!0,path:g,children:Object(p.jsx)(y,{})}),Object(p.jsx)(T,{exact:!0,path:v,render:function(){return Object(p.jsx)(N,{})}})]})})},_=r(15),A=r(9),U={authStatus:m,userLogin:"developer21",userPassword:"123456"},k=r(22),C=Object(_.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(A.a)(Object(A.a)({},e),{},{authStatus:t.payload});case b:return Object(A.a)(Object(A.a)({},e),{},{authStatus:m})}return e}),Object(k.composeWithDevTools)(Object(_.applyMiddleware)((function(e){return function(e){return function(t){return t.type===l&&L.push(t.payload),e(t)}}}))));a.a.render(Object(p.jsx)(i.a,{store:C,children:Object(p.jsx)(P,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.775351d2.chunk.js.map