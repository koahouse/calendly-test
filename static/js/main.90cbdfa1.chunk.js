(this.webpackJsonpintake=this.webpackJsonpintake||[]).push([[0],{10:function(e,t,n){e.exports={boat:"styles_boat__OBlm3",visible:"styles_visible__XghHV",boatStep0:"styles_boatStep0__2eTPw",boatStep1:"styles_boatStep1__1G4ic",boatStep2:"styles_boatStep2__1CV0-",boatStep3:"styles_boatStep3__3Sh0d"}},103:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(76),c=n.n(i),o=(n(103),n(2)),s=n(1),l=(n(119),function(){return Object(a.useEffect)((function(){window.history.pushState(null,"",window.location.href),window.onpopstate=function(){window.history.pushState(null,"",window.location.href)}}),[]),null});l.displayName="BackButtonDisabler";var u=function(e){var t=e.step,n=function(e){if("localhost"!==window.location.hostname)return e.preventDefault(),e.returnValue="something","something"};return Object(a.useEffect)((function(){if(![0,7].includes(t))return window.addEventListener("beforeunload",n),function(){return window.removeEventListener("beforeunload",n)}}),[t]),null};u.displayName="CloseWindowWarner";var _=n(16),E=n.n(_),d=n(33),m=n(77),p=n(78),O=n.n(p),T=n(3),A=n(34),N=n(79),S=n(19),f=function(e){var t;return(t={},Object(S.a)(t,"eur","\u20ac"),Object(S.a)(t,"gbp","\xa3"),t)[e]},b=r.a.createContext({pack:"",price:""}),g=Object(A.parse)(window.location.search),I=g.currency,h=void 0===I?"eur":I,v=g.pack,y=void 0===v?"6":v,R=g.d,w=g.giftcard,M="FM"===R,L="TPC"===R,j=function(e){var t,n=e.children,i=Object(a.useState)(null),c=Object(o.a)(i,2),s=c[0],l=c[1],u=Object(a.useState)(null),_=Object(o.a)(u,2),m=_[0],p=_[1],O=Object(a.useState)(null),A=Object(o.a)(O,2),S=A[0],g=A[1],I=Object(a.useState)(null),v=Object(o.a)(I,2),R=v[0],j=v[1],C=Object(T.c)();return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(E.a.mark((function e(){var t,n,a,r,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.a)({currency:h,isFoundingMember:M,isTenpercenter:L,languageCode:C,pack:y});case 2:t=e.sent,n=t.amount,a=t.couponId,r=t.discountedAmount,i=t.id,l(a),p(r),g(n),j(i);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(b.Provider,{value:{couponId:s,currencyCode:h,currencySymbol:f(h),discountedPrice:m,expiry:(t=y,{3:1,6:3,12:6}[t]),giftcard:w,isFoundingMember:M,pack:y,price:S,priceId:R}},n)};j.displayName="PricingProvider";var C=function(){return Object(a.useContext)(b).giftcard},P=function(){return Object(a.useContext)(b).pack},Y=n(11),U=n.n(Y),W=function(e,t,n){return new Intl.NumberFormat(n,{style:"currency",currency:t}).format(e/100).replace(/\D00(?=\D*$)/,"")},H=function(){return Object(a.useContext)(b)},D=n(69),F=n.n(D),k=function(){var e=Object(T.c)(),t=H(),n=t.currencyCode,a=t.discountedPrice,i=t.price,c=a&&W(a,n,e),o=W(i,n,e);return function(){return r.a.createElement("span",{className:U()(F.a.container,Object(S.a)({},F.a.isLoaded,null!==i))},c||o)}},B=n(52),G=n.n(B),x=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(""),l=Object(o.a)(c,2),u=l[0],_=l[1],p=Object(a.useState)(!1),A=Object(o.a)(p,2),N=A[0],S=A[1],f=Object(a.useState)(!1),b=Object(o.a)(f,2),g=b[0],I=b[1],h=Object(T.c)(),v=H(),y=v.currencyCode,R=v.currencySymbol,w=v.pack,M=v.price,L=Object(T.d)(),j=function(){var e=Object(d.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return _(L.WE_NEED_YOUR_EMAIL),e.abrupt("return");case 3:if(Object(m.validate)(n)){e.next=7;break}return _(L.YOUR_EMAIL_DOESNT_LOOK_RIGHT),e.abrupt("return");case 7:return S(!0),e.next=10,O()("https://house.us10.list-manage.com/subscribe/post-json?u=dbf347e9af099367f9ef8e159&id=e7574a7b60&EMAIL=".concat(n),{jsonpCallback:"c"});case 10:return e.next=12,fetch("https://hooks.slack.com/services/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",{method:"POST",body:JSON.stringify({text:"Email: ".concat(n.substr(0,2),"*****").concat(n.substr(n.indexOf("@")),"\nLanguage: ").concat(h,"\nCurrency: ").concat(y,"\nPack: ").concat(w,"\nPrice: ").concat(R).concat(M/100,"\n            "),username:"Waitlist signup"})});case 12:I(!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:G.a.container},r.a.createElement("div",{className:G.a.content},r.a.createElement("h1",{className:G.a.logo},"Oliva"),g?r.a.createElement(a.Fragment,null,r.a.createElement(s.Paragraph,null,L.THANKS),r.a.createElement(s.Paragraph,null,L.WELL_BE_IN_TOUCH_WHEN_A_SPACE_OPENS_UP),r.a.createElement(s.Paragraph,null,L.IN_THE_MEANTIME_YOU_CAN," ",r.a.createElement("a",{href:"https://www.instagram.com/mind.chronicles/"},L.READ_THERAPY_STORIES),".")):r.a.createElement(a.Fragment,null,r.a.createElement(s.Paragraph,null,L.WE_CURRENTLY_HAVE_NO_SPACE),r.a.createElement(s.Paragraph,null,L.PLEASE_SIGN_UP_TO_OUR_WAITING_LIST),r.a.createElement("div",{className:G.a.error},r.a.createElement(s.Paragraph,null,u)),r.a.createElement("input",{onChange:function(e){var t=e.target.value;_(""),i(t)},placeholder:"Email",type:"text",value:n}),r.a.createElement(s.Button,{isDisabled:!!u,isLoading:N,onClick:j},L.SIGN_UP))))};x.displayName="CloseWindowWarner";var K=n(35),V=n.n(K),q=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useCallback)(V()((function(){r(window.innerWidth<=900)}),100),[]);return Object(a.useEffect)((function(){return i(),window.addEventListener("load",i),window.addEventListener("resize",i),function(){window.removeEventListener("load",i),window.removeEventListener("resize",i)}}),[i]),n},J=function(e){var t=e.owner,n=e.appointmentType,a=e.certificate,r=e.firstName,i=e.lastName,c=e.email;return window.encodeURIComponent(["https://app.acuityscheduling.com/schedule.php","?owner=".concat(t),"&appointmentType=".concat(n),"&certificate=".concat(a),"&firstName=".concat(r),"&lastName=".concat(i),"&email=".concat(c)].join(""))},z=function(e,t,n,a){var r=a.firstName,i=void 0===r?"":r,c=a.lastName,o=void 0===c?"":c,s=a.email,l=void 0===s?"":s,u=a.certificate,_=e.includes("es")?{appointmentTypeCouple:16266387,appointmentTypeIndividual:16738020,bookingLinkAppointmentTypeIndividual:17676826,bookingLinkFieldName:"field:8634468",calendarID:4333756,idFieldName:"field:8295360",owner:20408348}:{appointmentTypeCouple:16735191,appointmentTypeIndividual:15473079,bookingLinkAppointmentTypeIndividual:17676776,bookingLinkFieldName:"field:8634463",calendarID:4188857,idFieldName:"field:8295421",owner:20088051},E=_.appointmentTypeCouple,d=_.appointmentTypeIndividual,m=_.bookingLinkFieldName,p=_.bookingLinkAppointmentTypeIndividual,O=_.calendarID,T=_.idFieldName,A=_.owner;return["https://app.acuityscheduling.com/schedule.php","?owner=".concat(A),"&appointmentType=".concat(n?d:E),"&calendarID=".concat(O),"&".concat(T,"=").concat(t),"&".concat(m,"=").concat(J({owner:A,appointmentType:p,certificate:u,firstName:i,lastName:o,email:l})),"&certificate=".concat(u),"&firstName=".concat(i),"&lastName=".concat(o),"&email=".concat(l)].join("")},X=n(53),Z=n.n(X),Q=function(e){var t=e.onSubmit,n=e.responseId,i=e.paymentInformation,c=q(),l=Object(a.useState)(!1),u=Object(o.a)(l,2),_=u[0],E=u[1],d=Object(a.useState)(!1),m=Object(o.a)(d,2),p=m[0],O=m[1],A=Object(a.useRef)(null),N=Object(T.d)(),f=Object(T.c)(),b=C(),g=Object(a.useCallback)((function(e){e&&e.data&&e.origin.includes("acuity")&&(A.current&&window.clearTimeout(A.current),e.data.includes("sizing")&&E(!0),e.data.includes("acuity-appointment-scheduled")&&(O(!0),!c&&t()))}),[c,t]);return Object(a.useEffect)((function(){return window.addEventListener("message",g),function(){return window.removeEventListener("message",g)}}),[g,c]),r.a.createElement("div",{className:U()(Z.a.container,Object(S.a)({},Z.a.visible,_)),id:"acuity-container"},n&&i&&r.a.createElement(a.Fragment,null,r.a.createElement("iframe",{src:z(f,n,!0,i),title:"booking-form"}),r.a.createElement("div",{className:U()(Z.a.confirmationContainer,Object(S.a)({},Z.a.visible,p))},r.a.createElement(s.Paragraph,null,N.ALL_DONE),r.a.createElement(s.Paragraph,null,b?N.WE_SENT_YOU_AN_EMAIL:Object(T.b)(N.WE_SENT_AN_EMAIL_TO,i.email)),c&&r.a.createElement(s.Button,{onClick:t},N.WHAT_HAPPENS_NOW))))};Q.displayName="Acuity";var $=n(80),ee=n.n($),te=function(e){var t=e.onFinish,n=Object(T.d)(),a=C();return r.a.createElement("div",{className:ee.a.container},r.a.createElement(s.Button,{isCentered:!0,onClick:t},a?n.PICK_A_TIME:n.PAY_AND_PICK))};te.displayName="PrepaymentMessage";var ne=n(81),ae=n.n(ne),re=function(e){var t=e.onFinish,n=Object(T.d)(),a=q();return a?null:r.a.createElement("div",{className:ae.a.container},r.a.createElement(s.Button,{isCentered:!a,onClick:t},n.GET_STARTED))};re.displayName="SplashMessage";var ie=n(82),ce=(n(147),function(e){var t=e.onFinish,n=Object(T.d)(),i=Object(T.c)(),c=P(),s=k(),l=H(),u=l.couponId,_=l.priceId;return r.a.createElement(ie.Stripe,{couponId:u,isNewMember:!0,languageCode:i,onFinish:t,pack:c,priceId:_,renderChargeDescription:function(){return function(e,t,n){var i=Object(T.b)(e.YOU_WILL_BE_CHARGED,"|||",n).split("|||"),c=Object(o.a)(i,2),s=c[0],l=c[1];return r.a.createElement(a.Fragment,null,s,r.a.createElement(t,null),l)}(n,s,c)},strings:n,stripePublicKey:"pk_live_51HYpBBIC0gTe0BTt1h2esyxTioSzPbrMk4vRFtV8OL8XCR0obV2Ieo18Ozw1PZoCfAtqfEAPQA2xXHeCz7mWKTqQ002QJbMlee"})});ce.displayName="Stripe";var oe=n(152),se=n(86),le=n.n(se),ue=Object(oe.a)().replace(/-/g,"").substring(0,8),_e=function(e){var t=e.onSubmit,n=Object(T.c)(),i=Object(a.useCallback)((function(e){e&&e.data&&("surveyCompleted"!==e.data.type||t(ue,function(e){var t=e.customParams,n=e.response;if(t&&t.individual)return JSON.parse(t.individual);var a=n.find((function(e){var t=e.id;return[828893,1068322].includes(t)}));return!a||["Individual","[Pending translation]"].includes(a.answer)}(e.data)))}),[t]);Object(a.useEffect)((function(){return window.addEventListener("message",i),function(){return window.removeEventListener("message",i)}}),[i]);var c=function(e,t,n){return["https://oliva.surveysparrow.com/widget",t.includes("es")?"/intake--spanish/tt-890999":"/intake--english/tt-5031b3","?id=".concat(e),"&individual=".concat(n)].join("")}(ue,n,!0);return r.a.createElement("div",{className:le.a.container},r.a.createElement("iframe",{allowFullScreen:"",id:"ss_widget_frame",src:c,title:"questionnaire"}))};_e.displayName="SurveySparrow";var Ee=n(87),de=n.n(Ee),me=function(e){var t=e.onFinish,n=Object(T.d)(),a=q();return r.a.createElement("div",{className:de.a.container},r.a.createElement(s.Paragraph,null,n.THANKS),r.a.createElement(s.Paragraph,null,n.YOUR_PAYMENT_WAS_SUCCESSFUL),r.a.createElement(s.Paragraph,null,n.NOW_TO_PICK_A_TIME),r.a.createElement("div",{style:{height:"12px"}}),r.a.createElement(s.Button,{isCentered:!a,onClick:t},n.OK))};me.displayName="Thanks";var pe=n(23),Oe=n(75),Te=n(97),Ae=n(48),Ne=n.n(Ae),Se=function(e){var t=e.children,n=e.shouldRemainShowing,a=void 0!==n&&n,i=e.showOnStep,c=e.step;return c>i-4&&r.a.createElement("div",{className:U()(Ne.a.pane,[].concat(Object(Te.a)(Array(i).fill(Ne.a.down)),[Ne.a.middle])[c]||(a?Ne.a.middle:Ne.a.up))},t)};Se.displayName="Pane";var fe=n(71),be=n.n(fe),ge=[2,4,5,6],Ie=function(e){var t=e.step,n=e.setStep,i=q(),c=Object(a.useState)(null),s=Object(o.a)(c,2),l=s[0],u=s[1],_=Object(a.useState)(null),E=Object(o.a)(_,2),d=E[0],m=E[1],p=Object(a.useState)(null),O=Object(o.a)(p,2),T=O[0],A=O[1],N=Object(a.useState)(!i),S=Object(o.a)(N,2),f=S[0],b=S[1],g=H(),I=g.currencySymbol,h=g.discountedPrice,v=g.price,y=C(),R=Object(Oe.a)();Object(a.useEffect)((function(){window.requestAnimationFrame((function(){return b(!i||ge.includes(t))}))}),[i,t]);return r.a.createElement("div",{className:"".concat(be.a.container," ").concat(f?be.a.visible:"")},!i&&r.a.createElement(Se,{showOnStep:0,step:t},r.a.createElement(re,{onFinish:function(){n(2)}})),r.a.createElement(Se,{showOnStep:2,step:t},r.a.createElement(_e,{onSubmit:function(e,t){n(3),u(e),m(t),R(pe.b)}})),!i&&r.a.createElement(Se,{showOnStep:3,step:t},r.a.createElement(te,{onFinish:function(){n(y?6:4)}})),r.a.createElement(Se,{showOnStep:4,step:t},r.a.createElement(ce,{onFinish:function(e){n(5),A(e),R(pe.c,{id:l,value:h||v,currency:I})}})),r.a.createElement(Se,{showOnStep:5,step:t},r.a.createElement(me,{onFinish:function(){n(6)}})),r.a.createElement(Se,{shouldRemainShowing:!0,showOnStep:6,step:t},r.a.createElement(Q,{isIndividual:d,onSubmit:function(){n(7),R(pe.a)},paymentInformation:y?{certificate:y}:T,responseId:l})))};Ie.displayName="Form";var he=n(10),ve=n.n(he),ye=n(90),Re=n.n(ye),we=n(91),Me=n.n(we),Le=n(92),je=n.n(Le),Ce=n(93),Pe=n.n(Ce),Ye=function(e){var t=e.step;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{alt:"boat",className:"".concat(ve.a.boat," ").concat(ve.a.boatStep0," ").concat(0===t&&ve.a.visible),src:Re.a}),r.a.createElement("img",{alt:"boat",className:"".concat(ve.a.boat," ").concat(ve.a.boatStep1," ").concat(1===t&&ve.a.visible),src:Me.a}),r.a.createElement("img",{alt:"boat",className:"".concat(ve.a.boat," ").concat(ve.a.boatStep2," ").concat(2===t&&ve.a.visible),src:je.a}),r.a.createElement("img",{alt:"boat",className:"".concat(ve.a.boat," ").concat(ve.a.boatStep3," ").concat(3===t&&ve.a.visible),src:Pe.a}))};Ye.displayName="Boat";var Ue=n(94),We=n.n(Ue),He=n(95),De=n.n(He),Fe=function(e){var t=e.containerWidth,n=e.step,i=Object(a.useRef)(null),c=Object(a.useState)(null),s=Object(o.a)(c,2),l=s[0],u=s[1],_=Object(a.useState)(-10),E=Object(o.a)(_,2),d=E[0],m=E[1],p=function(){u(i.current.offsetWidth)};return Object(a.useEffect)((function(){i.current&&i.current.complete&&p()}),[]),Object(a.useEffect)((function(){null!==t&&window.requestAnimationFrame((function(){return m([-10,(t-l)/3,2*(t-l)/3,t-l][n])}))}),[n,t,l]),r.a.createElement("img",{alt:"sea",className:We.a.sea,onLoad:p,ref:i,src:De.a,style:{left:d}})};Fe.displayName="Sea";var ke=n(15),Be=n.n(ke),Ge=function(e){var t=e.hasBorder,n=Object(T.d)(),i=C(),c=P(),o=k();return r.a.createElement("div",{className:U()(Be.a.container,Object(S.a)({},Be.a.hasBorder,t))},r.a.createElement("div",{className:Be.a.step},r.a.createElement("div",{className:Be.a.number},"1"),r.a.createElement("div",{className:Be.a.text},r.a.createElement(s.Subheading,null,n.ANSWER_A_FEW_QUESTIONS),r.a.createElement(s.SmallPrint,null,n.YOUR_ANSWERS_ARE_CONFIDENTIAL))),r.a.createElement("div",{className:Be.a.step},r.a.createElement("div",{className:Be.a.number},"2"),r.a.createElement("div",{className:Be.a.text},i?r.a.createElement(a.Fragment,null,r.a.createElement(s.Subheading,null,n.TO_PICK_A_TIME),r.a.createElement(s.SmallPrint,null,n.YOU_GET_SIXTY_MINUTES)):r.a.createElement(a.Fragment,null,r.a.createElement(s.Subheading,null,n.PAY," ",r.a.createElement(o,null)),r.a.createElement(s.SmallPrint,null,Object(T.b)(n.THE_ONE_OFF_COST,c))))),r.a.createElement("div",{className:Be.a.step},r.a.createElement("div",{className:Be.a.number},"3"),r.a.createElement("div",{className:Be.a.text},i?r.a.createElement(a.Fragment,null,r.a.createElement(s.Subheading,null,n.LEAVE_TWENTY_TWENTY_BEHIND),r.a.createElement(s.SmallPrint,null,n.WEVE_ALL_HAD_ENOUGH)):r.a.createElement(a.Fragment,null,r.a.createElement(s.Subheading,null,n.TO_PICK_A_TIME),r.a.createElement(s.SmallPrint,null,n.YOU_GET_SIXTY_MINUTES)))))};Ge.displayName="ThreeSteps";var xe=n(49),Ke=n.n(xe),Ve=function(e){var t=e.setStep,n=e.step,i=Object(T.d)(),c=q(),l=Object(a.useState)(1),u=Object(o.a)(l,2),_=u[0],E=u[1],d=Object(a.useState)(0),m=Object(o.a)(d,2),p=m[0],O=m[1],A=Object(a.useState)(null),N=Object(o.a)(A,2),S=N[0],f=N[1],g=Object(a.useRef)(null),I=function(e){return[0,1,1,2,2,2,2,3][e]}(n),h=Object(a.useContext)(b).isFoundingMember,v=C(),y=Object(a.useCallback)(V()((function(){f(g.current.offsetWidth)}),100),[]);return Object(a.useEffect)((function(){return window.addEventListener("resize",y),function(){return window.removeEventListener("resize",y)}}),[y]),Object(a.useEffect)((function(){g.current&&f(g.current.offsetWidth)}),[]),Object(a.useEffect)((function(){var e=function(e,t){return t?[0,1,2,3,4,5,5,6][e]:[0,1,1,3,3,3,3,6][e]}(n,c);p!==e&&(0!==n&&window.requestAnimationFrame((function(){return E(0)})),window.setTimeout((function(){window.requestAnimationFrame((function(){E(1),O(e)}))}),600))}),[n,c]),r.a.createElement("div",{className:Ke.a.container,ref:g},r.a.createElement(Fe,{containerWidth:S,step:I}),r.a.createElement(Ye,{step:I}),r.a.createElement("div",{className:Ke.a.mask}),!c&&r.a.createElement("h1",{className:Ke.a.logo},"Oliva"),r.a.createElement("div",{className:Ke.a.content,style:{opacity:_}},r.a.createElement("h2",{className:Ke.a.heading},["".concat(h?i.HEY_FOUNDING_MEMBER:""," ").concat(i.WELCOME),i.UNDERSTANDING_STARTS_WITH,"",i.THATS_THE_HARD_PART,"","",i.YOUVE_TAKEN_YOUR_FIRST][p]),r.a.createElement(s.Subheading,null,["",i.TALKING_ABOUT_PERSONAL_STUFF,"",v?i.NOW_ALL_YOU_HAVE_TO_DO_IS_PICK:i.NOW_ALL_YOU_HAVE_TO_DO_IS_PAY,"","",i.THATS_EVERYTHING_WE_NEED][p]),0===p&&r.a.createElement(a.Fragment,null,r.a.createElement(s.Subheading,null,i.IN_THE_NEXT_TEN_MINUTES),r.a.createElement(Ge,null),c&&r.a.createElement(s.Button,{onClick:function(){return t(1)}},i.OK)),1===p&&c&&r.a.createElement(s.Button,{onClick:function(){return t(2)}},i.GET_STARTED),3===p&&r.a.createElement(a.Fragment,null,!v&&r.a.createElement(s.Bullets,{items:[i.SAFE_AND_SECURE_PAYMENT,i.GUARANTEED_THERAPIST_MATCH]}),c&&r.a.createElement(s.Button,{onClick:function(){return t(v?6:4)}},v?i.PICK_A_TIME:i.PAY_AND_PICK)),6===p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s.Subheading,null,i.WELL_BE_IN_TOUCH_TO_REMIND),r.a.createElement(s.Subheading,null,i.IN_THE_MEANTIME_YOU_CAN," ",r.a.createElement("a",{href:"https://www.instagram.com/mind.chronicles/"},i.READ_THERAPY_STORIES),"."),r.a.createElement("div",{style:{height:100}}))))};Ve.displayName="Hero";var qe=n(96),Je=n.n(qe),ze=n(72),Xe=n.n(ze),Ze=function(){var e=Object(T.d)(),t=e.THIS_WEBSITE_WORKS_BEST,n=e.USE_IT_ANYWAY,i=Object(a.useState)(!1),c=Object(o.a)(i,2),l=c[0],u=c[1],_=Object(a.useState)(!1),E=Object(o.a)(_,2),d=E[0],m=E[1],p=Object(a.useCallback)(V()((function(){m(!1),u(window.innerWidth>500&&window.innerHeight<500)}),100),[m,u]);return Object(a.useEffect)((function(){return p(),window.addEventListener("resize",p),function(){return window.removeEventListener("resize",p)}}),[p]),r.a.createElement("div",{className:"".concat(Xe.a.container," ").concat(!d&&l&&Xe.a.visible)},r.a.createElement("img",{alt:"portrait-mode",src:Je.a}),r.a.createElement(s.Subheading,null,t),r.a.createElement("p",{onClick:function(){return m(!0)}},n))};Ze.displayName="MinimumHeightWarner";var Qe=function(){var e=q(),t=Object(a.useState)(0),n=Object(o.a)(t,2),i=n[0],c=n[1],_=function(e){var t=Math.max(0,Math.min(7,e));c(t)};return r.a.createElement(T.a,null,r.a.createElement(j,null,r.a.createElement(Ze,null),r.a.createElement(l,null),r.a.createElement(u,{step:i}),r.a.createElement(s.Viewport,{isVisible:null!==e},r.a.createElement(x,null),r.a.createElement(Ve,{setStep:_,step:i}),r.a.createElement(Ie,{setStep:_,step:i}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},15:function(e,t,n){e.exports={step:"styles_step__FW_sS",hasBorder:"styles_hasBorder__1cQoq",number:"styles_number__1Bc0x",container:"styles_container__2R_M2"}},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var a="INTAKE_FORM_COMPLETE",r="PAYMENT_COMPLETE",i="BOOKING_COMPLETE"},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return O}));var a=n(2),r=n(0),i=n.n(r),c=n(34),o={GET_STARTED:"Start questions",IN_THE_MEANTIME_YOU_CAN:"In the meantime, you can",NOW_ALL_YOU_HAVE_TO_DO_IS_PAY:"Now all you have to do is pay and pick a time for your matching session, where one of our qualified therapists will get to know you better.",NOW_ALL_YOU_HAVE_TO_DO_IS_PICK:"Now all you have to do is pick a time for your matching session, where one of our qualified therapists will get to know you better.",OK:"OK",PICK_A_TIME:"Pick a time",READ_THERAPY_STORIES:"read stories from people like you",TALKING_ABOUT_PERSONAL_STUFF:"Talking about personal stuff isn\u2019t always easy, so we really appreciate your openness. Your answers will help us prepare for your matching session.",THANKS:"Thanks!",THATS_EVERYTHING_WE_NEED:"That\u2019s everything we need for now.",THATS_THE_HARD_PART:"That\u2019s the hard part over",THIS_WEBSITE_WORKS_BEST:"This website works best in portrait mode",UNDERSTANDING_STARTS_WITH:"Understanding starts with a few questions",USE_IT_ANYWAY:"Use it anyway",WELL_BE_IN_TOUCH_TO_REMIND:"We\u2019ll be in touch to remind you about your matching session. You don\u2019t need to prepare anything, so relax and know that you\u2019re in good hands.",WHAT_HAPPENS_NOW:"What happens now?",YOUR_PAYMENT_WAS_SUCCESSFUL:"Your payment was successful.",HEY_FOUNDING_MEMBER:"Hey, Founding Member \ud83d\udc4b",WELCOME:"Your journey starts here",YOUVE_TAKEN_YOUR_FIRST:"You\u2019ve taken your first step. Now it\u2019s our turn.",I_WANT_THERAPY_IN:"I want therapy in",FOR:"for",ME:"me",MY_PARTNER_AND_ME:"my partner and me",ANSWER_A_FEW_QUESTIONS:"Answer some questions",PAY:"Pay",YOUR_ANSWERS_ARE_CONFIDENTIAL:"Your information will be 100% confidential",YOU_GET_SIXTY_MINUTES:"This is when we match you with the right therapist",THE_ONE_OFF_COST:"The one-off cost for your pack of {{0}} sessions",IN_THE_NEXT_TEN_MINUTES:"In the next few minutes, we\u2019ll ask you to:",SIXTY_MINUTE_VIDEO_CALL:"60 minute video call",TO_PICK_A_TIME:"Book your matching session",YOU_WILL_BE_CHARGED:"You\u2019ll be charged {{0}} for {{1}} sessions",FIRST_NAME:"First name",LAST_NAME:"Last name",EMAIL:"Email",MOBILE_NUMBER:"Mobile number",WE_NEED_YOUR_FIRST_NAME:"We need your first name",WE_NEED_YOUR_LAST_NAME:"We need your last name",YOUR_EMAIL_DOESNT_LOOK_RIGHT:"Your email doesn't look right",WE_NEED_YOUR_EMAIL:"We need your email",YOUR_MOBILE_NUMBER_DOESNT_LOOK_RIGHT:"Your mobile number doesn't look right",WE_NEED_YOUR_MOBILE_NUMBER:"We need your mobile number",WE_NEED_YOUR_CARD_DETAILS:"We need your card details",WE_NEED_YOU_TO_AGREE_WITH_OUR_TERMS:"We need you to agree with our terms",NOW_TO_PICK_A_TIME:"All that\u2019s left is to pick a time for your matching session, then you\u2019re all done.",ALL_DONE:"All done!",WE_SENT_AN_EMAIL_TO:"We just sent an email to {{0}} with all the details of your matching session and a payment receipt.",WE_SENT_YOU_AN_EMAIL:"We just sent you an email with all the details of your matching session.",PAY_AND_PICK:"Pay & pick a time",MONTH:"month",MONTHS:"months",TO_USE_YOUR_SESSIONS:"You have {{0}} {{1}} to use your sessions",SAFE_AND_SECURE_PAYMENT:"Safe & secure payment",GUARANTEED_THERAPIST_MATCH:"Guaranteed therapist match",I_AGREE_TO_THE:"I agree to the",TERMS_OF_USE:"terms of use",AND:"and",PRIVACY_POLICY:"privacy policy",PLEASE_SEND_ME_NEWS:"Please send me news, articles and relevant content about Oliva",LEAVE_TWENTY_TWENTY_BEHIND:"Leave 2020 behind",WEVE_ALL_HAD_ENOUGH:"Becuase we\u2019ve all had enough of this year",WE_CURRENTLY_HAVE_NO_SPACE:"We currently have no space for new bookings.",PLEASE_SIGN_UP_TO_OUR_WAITING_LIST:"Please sign up to our waiting list and we\u2019ll let you know when a space opens up.",SIGN_UP:"Sign up",WELL_BE_IN_TOUCH_WHEN_A_SPACE_OPENS_UP:"We\u2019ll be in touch as soon as a space opens up."},s={CARE_NAVIGATION_IS:"[Pending]",CHECK_YOUR_INBOX:"[Pending]",FIND_A_TIME:"[Pending]",NEXT:"[Pending]",NOW_TO_FIND_A_TIME:"[Pending]",SOME_MORE_COMFORTING_COPY:"[Pending]",START_QUESTIONNAIRE:"[Pending]",TAKE_A_BREATH:"[Pending]",THANKS:"[Pending]",THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES:"[Pending]",TIME_FOR_YOU:"[Pending]",WE_CHARGE_SIXTY_EUROS:"[Pending]",WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS:"[Pending]",YOUR_JOURNEY_STARTS_HERE:"[Pending]",YOURE_DONE:"[Pending]",YOURE_MAKING_THE_RIGHT_CHOICE:"[Pending]",YOURE_TAKING_A_POSITIVE_STEP:"[Pending]"},l={GET_STARTED:"Empezar",IN_THE_MEANTIME_YOU_CAN:"Mientras tanto, si quieres puedes",NOW_ALL_YOU_HAVE_TO_DO:"Ahora todo lo que tienes que hacer es pagar y elegir un momento para tu sesi\xf3n de afinidad, donde uno de nuestros terapeutas certificados tendr\xe1 la ocasi\xf3n de conocerte mejor.",OK:"De acuerdo",PICK_A_TIME:"Elige una fecha",READ_THERAPY_STORIES:"leer algunas historias de personas como t\xfa",TALKING_ABOUT_PERSONAL_STUFF:"Hablar de temas personales no siempre es f\xe1cil, por lo que apreciamos mucho tu franqueza.",THANKS:"\xa1Gracias!",THATS_EVERYTHING_WE_NEED:"Esto es todo lo que necesitamos por ahora.",THATS_THE_HARD_PART:"Ya ha pasado lo m\xe1s dif\xedcil",THIS_WEBSITE_WORKS_BEST:"Este sitio web funciona mejor en modo retrato",UNDERSTANDING_STARTS_WITH:"Para comprendernos, empezaremos con unas cuantas preguntas.",USE_IT_ANYWAY:"Usar de todos modos",WELL_BE_IN_TOUCH_TO_REMIND:"Nos pondremos en contacto contigo para recordarte de tu sesi\xf3n de afinidad. No necesitas preparar nada, as\xed que puedes relajarte porque est\xe1s en buenas manos.",WHAT_HAPPENS_NOW:"\xbfQu\xe9 pasa ahora?",YOUR_PAYMENT_WAS_SUCCESSFUL:"Tu pago se ha realizado con \xe9xito.",HEY_FOUNDING_MEMBER:"Hola, Miembro Fundador \ud83d\udc4b",WELCOME:"Tu camino empieza aqu\xed",YOUVE_TAKEN_YOUR_FIRST:"Ya has dado el primer paso, y ahora es nuestro turno.",I_WANT_THERAPY_IN:"Quiero terapia en",FOR:"para",ME:"mi",MY_PARTNER_AND_ME:"mi pareja y para mi",ANSWER_A_FEW_QUESTIONS:"Responder a algunas preguntas",PAY:"Pagar",YOUR_ANSWERS_ARE_CONFIDENTIAL:"Tu informaci\xf3n ser\xe1 100% confidencial",YOU_GET_SIXTY_MINUTES:"Aqu\xed es cuando te asignaremos al terapeuta ideal para ti",THE_ONE_OFF_COST:"El coste \xfanico de tu pack de {{0}} sesiones",IN_THE_NEXT_TEN_MINUTES:"En los pr\xf3ximos minutos, te pediremos:",SIXTY_MINUTE_VIDEO_CALL:"videollamada de 60 minutos",TO_PICK_A_TIME:"Elegir una fecha para tu sesi\xf3n de afinidad",YOU_WILL_BE_CHARGED:"Se te cobrar\xe1n {{0}} por {{1}} sesiones",FIRST_NAME:"Nombre",LAST_NAME:"Apellido",EMAIL:"Email",MOBILE_NUMBER:"N\xfamero de m\xf3vil",WE_NEED_YOUR_FIRST_NAME:"Necesitamos tu nombre",WE_NEED_YOUR_LAST_NAME:"Necesitamos tu apellido",YOUR_EMAIL_DOESNT_LOOK_RIGHT:"Tu email no parece correcto",WE_NEED_YOUR_EMAIL:"Necesitamos tu email",YOUR_MOBILE_NUMBER_DOESNT_LOOK_RIGHT:"Tu n\xfamero de m\xf3vil no parece correcto",WE_NEED_YOUR_MOBILE_NUMBER:"Necesitamos tu n\xfamero de m\xf3vil",WE_NEED_YOUR_CARD_DETAILS:"Necesitamos los datos de su tarjeta",WE_NEED_YOU_TO_AGREE_WITH_OUR_TERMS:"Necesitamos que aceptes los t\xe9rminos y condiciones",NOW_TO_PICK_A_TIME:"Ahora vamos a reservar una fecha para tu sesi\xf3n de afinidad, y ya habremos acabado.",ALL_DONE:"\xa1Hemos terminado!",WE_SENT_AN_EMAIL_TO:"Acabamos de enviarte un email a {{0}} con todos los detalles de tu sesi\xf3n de afinidad, y un recibo del pago.",PAY_AND_PICK:"Pagar y elegir una fecha",MONTH:"mes",MONTHS:"meses",TO_USE_YOUR_SESSIONS:"Tienes {{0}} {{1}} para usar tus sesiones",SAFE_AND_SECURE_PAYMENT:"Pago seguro",GUARANTEED_THERAPIST_MATCH:"Asignaci\xf3n de tu terapeuta garantizada",I_AGREE_TO_THE:"Estoy de acuerdo con los",TERMS_OF_USE:"t\xe9rminos y condiciones",AND:"y",PRIVACY_POLICY:"pol\xedtica de privacidad",PLEASE_SEND_ME_NEWS:"Recibir noticias, articulos y contenido sobre Oliva"},u=function(e){if(!e)return o;switch(!0){case e.startsWith("ca"):return s;case e.startsWith("es")||e.includes("-ES"):return l;default:return o}},_=i.a.createContext({setLanguageCode:function(){},strings:u()}),E=Object(c.parse)(window.location.search).language||(window.navigator.language&&window.navigator.language.startsWith("es")?"es":"en"),d=function(e){var t=e.children,n=Object(r.useState)(E),c=Object(a.a)(n,2),o=c[0],s=c[1];return i.a.createElement(_.Provider,{value:{languageCode:o,setLanguageCode:s,strings:u(o)}},t)};d.displayName="I18nProvider";var m=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return n.reduce((function(e,t,n){return e.replace("{{".concat(n,"}}"),t)}),e)},p=function(){return Object(r.useContext)(_).languageCode},O=function(){return Object(r.useContext)(_).strings}},48:function(e,t,n){e.exports={pane:"styles_pane__3wOA4",middle:"styles_middle__3_n0J",up:"styles_up__3pPTb",down:"styles_down__19LgI"}},49:function(e,t,n){e.exports={container:"styles_container__3W-sl",mask:"styles_mask__3VhZW",content:"styles_content__3pU17",logo:"styles_logo__A_BxZ",heading:"styles_heading__h8pTJ"}},52:function(e,t,n){e.exports={container:"styles_container__3bczZ",content:"styles_content__2rkVQ",logo:"styles_logo__C4U0k",error:"styles_error__3bgRy"}},53:function(e,t,n){e.exports={container:"styles_container__3SlFj",confirmationContainer:"styles_confirmationContainer__3QPwz",visible:"styles_visible__1cMLN"}},69:function(e,t,n){e.exports={container:"styles_container__ptvwb",isLoaded:"styles_isLoaded__3X1TL",price:"styles_price__zqRx2",discountedPrice:"styles_discountedPrice__JTMx4"}},71:function(e,t,n){e.exports={container:"styles_container__1Ybc_",visible:"styles_visible__30Lnc"}},72:function(e,t,n){e.exports={container:"styles_container__uJOP6",visible:"styles_visible__3r6CJ"}},75:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var a=n(2),r=n(0),i=n(3),c=n(88),o=n(89),s=function(){var t=Object(r.useState)(!1),n=Object(a.a)(t,2),s=n[0],l=n[1],u=Object(i.c)();return Object(r.useEffect)((function(){e.google_tag_manager||Object(c.a)(),l(!0)}),[]),Object(r.useCallback)((function(t,n){if(s){var a=Object(o.a)(t,n,u);e.dataLayer&&e.dataLayer.push(a)}}),[s])}}).call(this,n(32))},79:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var a=n(16),r=n.n(a),i=n(33),c=n(34),o=function(){var t=Object(i.a)(r.a.mark((function t(n){var a,i,o,s,l,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.currency,i=n.isFoundingMember,o=n.isTenpercenter,s=n.languageCode,l=n.pack,u=Object(c.stringify)({currencyCode:a,isTenpercenter:o||void 0,isFoundingMember:i||void 0,languageCode:s,pack:l}),t.abrupt("return",e.fetch("https://mrazu50nsj.execute-api.us-east-1.amazonaws.com/dev/getPrice?".concat(u)).then((function(e){return e.json()})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}).call(this,n(32))},80:function(e,t,n){e.exports={container:"styles_container__3MZ4e"}},81:function(e,t,n){e.exports={container:"styles_container__3ENJa"}},86:function(e,t,n){e.exports={container:"styles_container__6mvs3"}},87:function(e,t,n){e.exports={container:"styles_container__1JM7J"}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(){!function(e,t,n,a,r){e[a]=e[a]||[],e[a].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var i=t.getElementsByTagName(n)[0],c=t.createElement(n);c.async=!0,c.src="https://www.googletagmanager.com/gtm.js?id=GTM-T4SBTVH",i.parentNode.insertBefore(c,i)}(window,document,"script","dataLayer")}},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(23),r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;switch(e){case a.b:case a.a:return{event:e};case a.c:return{event:"transaction",ecommerce:{purchase:{actionField:{id:t.id,revenue:t.value},products:[{name:"Matching session",variant:n}]}}}}}},90:function(e,t,n){e.exports=n.p+"static/media/step1@2x.70bd5f0b.png"},91:function(e,t,n){e.exports=n.p+"static/media/step2@2x.87516c05.png"},92:function(e,t,n){e.exports=n.p+"static/media/step3@2x.acbabdf7.png"},93:function(e,t,n){e.exports=n.p+"static/media/step4@2x.f10d3786.png"},94:function(e,t,n){e.exports={sea:"styles_sea__3_FK6"}},95:function(e,t,n){e.exports=n.p+"static/media/waves@2x.fe5913d8.jpg"},96:function(e,t){e.exports="data:image/png;base64,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"},98:function(e,t,n){e.exports=n(149)}},[[98,1,2]]]);
//# sourceMappingURL=main.90cbdfa1.chunk.js.map