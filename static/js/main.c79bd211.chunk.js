(this.webpackJsonpme=this.webpackJsonpme||[]).push([[0],{71:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var n=c(43),s=c(0),a=c.n(s),r=c(15),i=c.n(r),j=(c(71),c(53)),l=c(33),o={en:{translation:{"Get started":"Get started"}},ru:{translation:{"Get started":"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0440\u0435\u0437\u044e\u043c\u0435"}}};j.a.use(l.e).init({resources:o,lng:localStorage.getItem("lang")||"ru",interpolation:{escapeValue:!1}});j.a,c(72);var b=c(20),d=c(45),x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,99)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))},u=c(12),O=c(8),h=c(50),m=c.n(h),p=c(60),v=c(95),g=c(97),f=c(94),y=c(63),S=c(93),k=function(e){return{type:"SET_ROUTE",payload:e}},N=c(98),R=c(1),C=Object(b.b)((function(e){return{route:e.me.route}}),{setRoute:k})((function(e){var t=e.route,c=e.setRoute,a=Object(N.a)().i18n,r=Object(s.useState)(localStorage.getItem("lang")||"ru"),i=Object(n.a)(r,2),j=i[0],l=i[1],o=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.changeLanguage(t);case 2:l(t),localStorage.setItem("lang",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)(v.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"fixed-top",children:[Object(R.jsx)(v.a.Brand,{href:"/",children:"\u041d\u0438\u043a\u0438\u0442\u0430 \u0424\u0438\u043b\u043e\u043d\u043e\u0432"}),Object(R.jsx)(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(R.jsxs)(v.a.Collapse,{id:"responsive-navbar-nav",children:[Object(R.jsx)(g.a,{className:"mr-auto"}),Object(R.jsxs)(g.a,{children:[Object(R.jsx)(f.a,{inline:!0,children:Object(R.jsx)(y.a,{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a",className:"mr-sm-2"})}),Object(R.jsx)(g.a.Link,{active:"/"===t,eventKey:"/",to:"/",as:u.b,onSelect:function(){return c("/")},children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(R.jsx)(g.a.Link,{eventKey:"/about",to:"/about",as:u.b,active:"/about"===t,onSelect:function(){return c("/about")},children:"\u041e\u0431\u0437\u043e\u0440"}),Object(R.jsx)(g.a.Link,{eventKey:"/education",to:"/education",as:u.b,active:"/education"===t,onSelect:function(){return c("/education")},children:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(R.jsx)(g.a.Link,{eventKey:"/work",to:"/work",as:u.b,active:"/work"===t,onSelect:function(){return c("/work")},children:"\u041e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b"}),Object(R.jsx)(g.a.Link,{eventKey:"/projects",to:"/projects",as:u.b,active:"/projects"===t,onSelect:function(){return c("/projects")},children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"}),Object(R.jsxs)(S.a,{title:"\u042f\u0437\u044b\u043a",id:"collasible-nav-dropdown",children:[Object(R.jsx)(S.a.Item,{onClick:function(){return o("ru")},active:"ru"===j,children:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}),Object(R.jsx)(S.a.Item,{onClick:function(){return o("en")},active:"en"===j,children:"English"})]})]})]})]})})),P=c(96),L=c(92),I=c(64),w=c(66),E=Object(b.b)(null,{setRoute:k})((function(e){var t=e.setRoute,c=Object(O.f)(),n=Object(N.a)().t;return Object(R.jsxs)("div",{className:"container mt-5",children:[Object(R.jsx)("h4",{className:"text-center",children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c! \u0412\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u043b\u0438\u0447\u043d\u043e\u043c \u0441\u0430\u0439\u0442\u0435 \u041d\u0438\u043a\u0438\u0442\u044b \u0424\u0438\u043b\u043e\u043d\u043e\u0432\u0430."}),Object(R.jsx)("h4",{className:"text-center text-secondary",children:"\u042f \u0443\u0432\u043b\u0435\u043a\u0430\u044e\u0441\u044c \u0432\u0435\u0431 \u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439"}),Object(R.jsx)("div",{className:"text-center",children:Object(R.jsx)(w.a,{variant:"secondary",className:"mt-5",onClick:function(){t("/about"),c.push("/about")},children:n("Get started")})}),Object(R.jsxs)(L.a,{style:{marginTop:"10%"},children:[Object(R.jsx)("hr",{style:{width:"100%"}}),Object(R.jsxs)(I.a,{children:[Object(R.jsx)("h5",{children:"\u0412\u044b\u0441\u043e\u043a\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"}),Object(R.jsx)("p",{className:"text-secondary mt-3",children:"\u042f \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0430\u0446\u0435\u043b\u0435\u043d \u043d\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442. \u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0435\u043a\u0442 \u043c\u043d\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0435\u043d, \u0442\u043e \u044f \u0441\u043f\u043e\u0441\u043e\u0431\u0435\u043d \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u0437\u0430 \u043d\u0435\u0434\u0435\u043b\u044e, \u0432 \u0442\u043e \u0432\u0440\u0435\u043c\u044f, \u043a\u043e\u0433\u0434\u0430 \u0434\u0440\u0443\u0433\u0438\u043c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c \u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f \u043c\u0435\u0441\u044f\u0446\u044b \u043d\u0430 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e."})]}),Object(R.jsxs)(I.a,{children:[Object(R.jsx)("h5",{children:"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0441\u0442\u044d\u043a"}),Object(R.jsx)("p",{className:"text-secondary mt-3",children:"\u042f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0442 \u0432\u044b\u0441\u043e\u043a\u0443\u044e \u043f\u0440\u043e\u0434\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c. \u0410 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043b\u0435\u0433\u043a\u043e \u043c\u0430\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442."})]}),Object(R.jsxs)(I.a,{children:[Object(R.jsx)("h5",{children:"\u0420\u0430\u0437\u043d\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0439 \u043e\u043f\u044b\u0442"}),Object(R.jsx)("p",{className:"text-secondary mt-3",children:"\u0412 \u043c\u043e\u0435\u0439 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u0431\u044b\u043b \u043e\u043f\u044b\u0442, \u043a\u0430\u043a \u0431\u044d\u043a\u0435\u043d\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438, \u0442\u0430\u043a \u0438 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434 (\u0432\u0435\u0431/\u043c\u043e\u0431\u0438\u043b\u043a\u0430). \u0415\u0441\u0442\u044c \u043e\u0433\u0440\u043e\u043c\u043d\u044b\u0439 \u043e\u043f\u044b\u0442 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0430\u0432\u0442\u043e\u0442\u0435\u0441\u0442\u043e\u0432, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u043e\u0439 \u043a\u043e\u0434 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u043e\u043a\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f API \u0438 Unit \u0442\u0435\u0441\u0442\u0430\u043c\u0438. \u0414\u043b\u044f \u043c\u0435\u043d\u044f \u043d\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0432 CI/CD."})]})]})]})})),K=function(){return Object(R.jsxs)("div",{className:"container container-fluid mb-5",children:[Object(R.jsx)("h4",{children:"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),Object(R.jsx)("hr",{}),Object(R.jsxs)("p",{className:"text-secondary mt-3",children:["\u0418\u043c\u0435\u044e \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043e\u043f\u044b\u0442 \u0432 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0442\u0435\u0441\u0442\u043e\u0432. \u0410 \u0442\u0430\u043a\u0436\u0435 \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 CI \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0442\u0435\u0441\u0442\u043e\u0432. \u0418\u043c\u0435\u0435\u0442\u0441\u044f \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u043e\u043c. \u041f\u043e\u043d\u0438\u043c\u0430\u044e \u043b\u043e\u0433\u0438\u043a\u0443 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0430. \u0415\u0441\u0442\u044c \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 https, wss \u0441 \u0444\u0440\u043e\u043d\u0442\u0430. \u041e\u0442\u043b\u0438\u0447\u043d\u043e \u0437\u043d\u0430\u044e, \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f. \u0421\u043f\u043e\u043a\u043e\u0439\u043d\u043e \u043c\u043e\u0433\u0443 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 ",Object(R.jsx)("strong",{children:"HTML/CSS"}),Object(R.jsx)("br",{}),Object(R.jsx)("br",{}),"\u0418\u043c\u0435\u044e \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0431\u044d\u043a\u0435\u043d\u0434 \u0447\u0430\u0441\u0442\u044c\u044e. \u041e\u0442\u043b\u0438\u0447\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u044e, \u0432\u0441\u0435 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f RESTful \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u0423\u043c\u0435\u044e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043a\u0430\u043a \u0441 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0442\u0430\u043a \u0438 \u0441 \u043d\u0435\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. \u0425\u043e\u0440\u043e\u0448\u043e \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u044e\u0441\u044c \u0432 \u0432\u0438\u0434\u0430\u0445 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0439 ",Object(R.jsx)("strong",{children:"Basic/API KEY/Bearer/OAuth2/Session"})," ","\u0438 \u0438\u043c\u0435\u044e \u043e\u043f\u044b\u0442 \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u044f \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u044b.",Object(R.jsx)("br",{}),Object(R.jsx)("br",{}),"\u0415\u0441\u0442\u044c \u043e\u043f\u044b\u0442 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 API \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0441\u043e\u0446 \u0441\u0435\u0442\u0435\u0439 \u0438 \u043c\u0435\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u043e\u0432, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a: ",Object(R.jsx)("br",{}),Object(R.jsx)("li",{children:"Telegram"}),Object(R.jsx)("li",{children:"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"}),Object(R.jsx)("li",{children:"Slack"}),Object(R.jsx)("li",{children:"Facebook"}),Object(R.jsx)("li",{children:"Discord"}),"\u0422\u0430\u043a\u0436\u0435 \u0435\u0441\u0442\u044c \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0442\u0430\u043a\u0438\u0445 google \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432, \u043a\u0430\u043a:",Object(R.jsx)("br",{}),Object(R.jsx)("li",{children:"Google Calendar"}),Object(R.jsx)("li",{children:"Google Places Autocomplete"}),Object(R.jsx)("li",{children:"Google Maps"}),Object(R.jsx)("li",{children:"Google Authentication"}),"\u0414\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0435\u0441\u0442\u044c \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Firebase, \u0430 \u0438\u043c\u0435\u043d\u043d\u043e:",Object(R.jsx)("li",{children:"Cloud Messaging (Push-\u0443\u0432\u0435\u0434\u043c\u043e\u043b\u0435\u043d\u0438\u044f)"}),Object(R.jsx)("li",{children:"Storage"}),Object(R.jsx)("li",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 Push-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 c \u0431\u044d\u043a\u0435\u043d\u0434\u0430"}),Object(R.jsx)("br",{}),"\u041d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u0435\u0441\u0442\u044c \u043e\u043f\u044b\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0447\u0430\u0442\u0430, \u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0438 \u0444\u0430\u0439\u043b\u043e\u0432. \u0415\u0441\u0442\u044c \u043e\u043f\u044b\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0441 ",Object(R.jsx)("strong",{children:"deep linking"})," \u0434\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u0414\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u043e \u043c\u043e\u0433\u0443 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 ",Object(R.jsx)("strong",{children:"\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438"})," ","\u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0438\u043b\u0438 \u0436\u0435 \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043c\u043e\u0433\u0443 \u0433\u0440\u0430\u043c\u043c\u043e\u0442\u043d\u043e \u043c\u0438\u043a\u0441\u043e\u0432\u0430\u0442\u044c \u0434\u0432\u0430 \u0442\u0438\u043f \u0441\u0435\u0440\u0432\u0435\u0440 + \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u0431\u0434. \u0418\u043c\u0435\u044e \u043e\u043f\u044b\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",Object(R.jsx)("strong",{children:"dark/light theme"})," \u0434\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439.",Object(R.jsx)("br",{}),Object(R.jsx)("br",{}),"\u0418\u043c\u0435\u0435\u0442\u0441\u044f \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043c\u043e\u043d\u043e\u043b\u0438\u0442\u043d\u043e\u0439 \u0438 \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u0440\u0432\u0438\u0441\u043d\u043e\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043e\u0439. \u0422\u0430\u043a\u0436\u0435 \u0438\u043c\u0435\u0435\u0442\u0441\u044f \u043e\u043f\u044b\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f ",Object(R.jsx)("strong",{children:"\u043f\u0435\u0440\u0435\u043e\u0434\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0445"})," \u0437\u0430\u0434\u0430\u0447 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u0431\u044d\u043a\u0435\u043d\u0434\u0430."]}),Object(R.jsx)("h4",{className:"mt-5",children:"\u0421\u0442\u044d\u043a \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(R.jsx)("hr",{}),Object(R.jsxs)("li",{children:["\u0411\u044d\u043a\u0435\u043d\u0434:"," ",Object(R.jsx)("p",{className:"text-secondary mt-3",children:"Python 3.+, Django, Django Rest Framework, Flask, Redis, Celery, Celery-Beat"})]}),Object(R.jsxs)("li",{children:["\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434 (\u0432\u0435\u0431):"," ",Object(R.jsx)("p",{className:"text-secondary mt-3",children:"JavaScript, ES6, ES7, JSX, React, React-Redux, Redux, Redux-Saga, i18next, HTML5, CSS3, Bootstrap, Material-UI, Google Authentication"})]}),Object(R.jsxs)("li",{children:["\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434 (\u043c\u043e\u0431\u0438\u043b\u043a\u0438):"," ",Object(R.jsx)("p",{className:"text-secondary mt-3",children:"JavaScript, TypeScript, ES6, ES7, JSX, React-Native, React-Redux, Redux, i18n, React Native Elements, React Native Paper, Native Base, Google Places Autocomplete, Google Authentication, Google Maps, Firebase, Firebase Cloud Messaging, Firebase Storage"})]}),Object(R.jsxs)("li",{children:["\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434 (\u0434\u0435\u0441\u043a\u0442\u043e\u043f):"," ",Object(R.jsx)("p",{className:"text-secondary mt-3",children:"JavaScript, ES6, ES7, JSX, React, React-Redux, Redux, i18n, Electron 13.+"})]}),Object(R.jsxs)("li",{children:["\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f:"," ",Object(R.jsx)("p",{className:"text-secondary mt-3",children:"Python 3.+, Pytest, Selenium, Webium, Behave, Pytest-BDD, Slack-Client, Allure"})]}),Object(R.jsxs)("li",{children:["\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b CI/CD:"," ",Object(R.jsx)("p",{className:"text-secondary mt-3",children:"GitLab CI, Jenkins, Circle CI"})]}),Object(R.jsxs)("li",{children:["\u0411\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 SQL:"," ",Object(R.jsx)("p",{className:"text-secondary mt-3",children:"MySQL, PostgreSQL, MS SQL, Sqlite 3"})]}),Object(R.jsxs)("li",{children:["\u0411\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 NOSQL:"," ",Object(R.jsx)("p",{className:"text-secondary mt-3",children:"Realm MongoDB, Atlas Mongo DB"})]}),Object(R.jsxs)("li",{children:["\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b:"," ",Object(R.jsx)("p",{className:"text-secondary mt-3",children:"Docker, Docker-Compose, PyCharm, Visual Studio, Atom, GitHub, GitLab, Jira, YouTrack, TestRail"})]}),Object(R.jsx)("h4",{className:"mt-5",children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"}),Object(R.jsx)("hr",{}),Object(R.jsx)("li",{children:"RQ Timer - \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u0431\u043e\u0441\u0441\u043e\u0432 \u0432 MMORPG."})]})},G=function(){return Object(R.jsx)("div",{children:"Education"})},T=function(){return Object(R.jsx)("div",{children:"Work"})},M=function(){return Object(R.jsx)("div",{children:"Projects"})},A=Object(b.b)((function(e){return{route:e.me.route}}),{setRoute:k})((function(e){var t=e.route,c=e.setRoute,n=Object(O.f)();return Object(s.useEffect)((function(){c(n.location.pathname);var e=n.listen((function(e,t){c(e.pathname)}));return function(){e()}}),[n,c]),Object(R.jsx)(P.a.Container,{id:"left-tabs-example",defaultActiveKey:"/",activeKey:t,onSelect:function(e){return c(e)},children:Object(R.jsxs)(L.a,{className:"mt-5 ml-2 mr-2",children:[Object(R.jsx)(I.a,{sm:3,children:Object(R.jsxs)(g.a,{variant:"pills",style:{width:"18%"},className:"flex-column position-fixed d-none d-sm-block",bg:"dark",children:[Object(R.jsx)(g.a.Item,{className:"w-100",children:Object(R.jsx)(g.a.Link,{as:u.b,to:"/",eventKey:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(R.jsx)(g.a.Item,{children:Object(R.jsx)(g.a.Link,{as:u.b,to:"/about",eventKey:"/about",children:"\u041e\u0431\u0437\u043e\u0440"})}),Object(R.jsx)(g.a.Item,{children:Object(R.jsx)(g.a.Link,{as:u.b,to:"/education",eventKey:"/education",children:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435"})}),Object(R.jsx)(g.a.Item,{children:Object(R.jsx)(g.a.Link,{as:u.b,to:"/work",eventKey:"/work",children:"\u041e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b"})}),Object(R.jsx)(g.a.Item,{children:Object(R.jsx)(g.a.Link,{as:u.b,to:"/projects",eventKey:"/projects",children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"})})]})}),Object(R.jsx)(I.a,{sm:7,children:Object(R.jsxs)(P.a.Content,{children:[Object(R.jsx)(P.a.Pane,{eventKey:"/",children:Object(R.jsx)(E,{})}),Object(R.jsx)(P.a.Pane,{eventKey:"/about",children:Object(R.jsx)(K,{})}),Object(R.jsx)(P.a.Pane,{eventKey:"/education",children:Object(R.jsx)(G,{})}),Object(R.jsx)(P.a.Pane,{eventKey:"/work",children:Object(R.jsx)(T,{})}),Object(R.jsx)(P.a.Pane,{eventKey:"/projects",children:Object(R.jsx)(M,{})})]})})]})})})),B=c(54),D={route:"/"},F=Object(d.a)({me:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ROUTE":return Object(B.a)(Object(B.a)({},e),{},{route:t.payload});default:return e}}}),J=function(){return Object(R.jsx)(R.Fragment,{})},Q=Object(d.b)(F),U=function(){var e=Object(s.useState)("/"),t=Object(n.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){a(window.location.pathname);var e=Q.subscribe((function(){return a(Q.getState().me.route)}));return function(){e()}}),[]),Object(R.jsxs)(u.a,{children:[Object(R.jsx)(C,{}),Object(R.jsxs)("div",{className:"container-fluid",children:["/"!==c?Object(R.jsx)(A,{}):Object(R.jsx)(E,{}),Object(R.jsx)(O.c,{children:Object(R.jsx)(O.a,{path:"/about",exact:!0,component:J})})]})]})};i.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(b.a,{store:Q,children:Object(R.jsx)(U,{})})}),document.getElementById("root")),x()}},[[87,1,2]]]);