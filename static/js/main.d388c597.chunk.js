(this.webpackJsonpintake=this.webpackJsonpintake||[]).push([[0],[,function(e,t,a){e.exports={boat:"styles_boat__OBlm3",visible:"styles_visible__XghHV",boatStep1:"styles_boatStep1__1G4ic",boatStep2:"styles_boatStep2__1CV0-",boatStep3:"styles_boatStep3__3Sh0d",boatStep4:"styles_boatStep4__oeo3N"}},function(e,t,a){e.exports={container:"styles_container__1Ybc_",middle:"styles_middle__jfYK9",up:"styles_up__2awH9",down:"styles_down__2NRt-"}},function(e,t,a){e.exports={container:"styles_container__3W-sl",isHidden:"styles_isHidden__pIkC3",logo:"styles_logo__A_BxZ",heading:"styles_heading__h8pTJ",widescreenFlexPlaceholder:"styles_widescreenFlexPlaceholder__zfU_G",boat:"styles_boat__2cw9g",visible:"styles_visible__3ZuGY",boatStep1:"styles_boatStep1__3uK7H",boatStep2:"styles_boatStep2__1UsfW",boatStep3:"styles_boatStep3__187O4",boatStep4:"styles_boatStep4__1l4Bb",sea:"styles_sea__Xu3ZU",seaStep1:"styles_seaStep1__2wxm5",seaStep2:"styles_seaStep2__3GJ5R",seaStep3:"styles_seaStep3__1ZGVZ",seaStep4:"styles_seaStep4__37QNJ"}},,,function(e,t,a){e.exports={container:"styles_container__3SlFj",visible:"styles_visible__1cMLN"}},function(e,t,a){e.exports={subheading:"styles_subheading__2whtF",centered:"styles_centered__tDMVd"}},,,function(e,t,a){e.exports={button:"styles_button__3lKmz"}},function(e,t,a){e.exports={container:"styles_container__2MmGh"}},function(e,t,a){e.exports={container:"styles_container__3ENJa"}},function(e,t,a){e.exports={container:"styles_container__6mvs3"}},function(e,t,a){e.exports={container:"styles_container__DaIe2"}},function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),c=a.n(i),o=(a(20),a(4)),r=function(){return Object(n.useEffect)((function(){window.history.pushState(null,"",window.location.href),window.onpopstate=function(){window.history.pushState(null,"",window.location.href)}}),[]),null};r.displayName="BackButtonDisabler";var l=a(9),_={FIND_A_TIME:"Find a time",NEXT:"Next",NOW_TO_FIND_A_TIME:"Now to find a time.",WE_CHARGE_SIXTY_EUROS:"We charge \u20ac60 for care navigation. We will do everything we can to find a good match with a care provider. If we can't, we give you your money back.",THANKS:"Thanks",YOUR_JOURNEY_STARTS_HERE:"Your journey to a better you starts here.",YOURE_TAKING_A_POSITIVE_STEP:"You're taking a positive step. You're in good hands.",START_QUESTIONNAIRE:"Start questionnaire",THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES:"This will take five to ten minutes",YOURE_MAKING_THE_RIGHT_CHOICE:"You're making the right choice, bravo.",SOME_MORE_COMFORTING_COPY:"Some more comforting copy, to build trust.",CHECK_YOUR_INBOX:"Check your inbox",WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS:"We've sent you something with all the details."},d={FIND_A_TIME:"[Pending]",NEXT:"[Pending]",NOW_TO_FIND_A_TIME:"[Pending]",WE_CHARGE_SIXTY_EUROS:"[Pending]",THANKS:"[Pending]",YOUR_JOURNEY_STARTS_HERE:"[Pending]"},u={FIND_A_TIME:"[Pending]",NEXT:"[Pending]",NOW_TO_FIND_A_TIME:"[Pending]",WE_CHARGE_SIXTY_EUROS:"[Pending]",THANKS:"[Pending]",YOUR_JOURNEY_STARTS_HERE:"[Pending]",START_QUESTIONNAIRE:"[Pending]",THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES:"[Pending]",YOURE_MAKING_THE_RIGHT_CHOICE:"[Pending]",SOME_MORE_COMFORTING_COPY:"[Pending]",CHECK_YOUR_INBOX:"[Pending]",WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS:"[Pending]"},E=function(e){if(!e)return _;switch(!0){case e.startsWith("ca"):return d;case e.startsWith("es")||e.includes("-ES"):return u;default:return _}},m=s.a.createContext({setLanguageCode:function(){},strings:E()}),p=Object(l.parse)(window.location.search).language||window.navigator.language,S=function(e){var t=e.children,a=Object(n.useState)(p),i=Object(o.a)(a,2),c=i[0],r=i[1];return s.a.createElement(m.Provider,{value:{languageCode:c,setLanguageCode:r,strings:E(c)}},t)};S.displayName="I18nProvider";var v=function(){return Object(n.useContext)(m).languageCode},N=function(){return Object(n.useContext)(m).strings},b=a(6),T=a.n(b),O=function(e){var t=e.onSubmit,a=e.responseId,i=Object(n.useState)(!1),c=Object(o.a)(i,2),r=c[0],l=c[1],_=v(),d=function(e){e&&e.data&&e.origin.includes("acuity")&&(e.data.includes("sizing")&&l(!0),e.data.includes("load:")&&t())};return Object(n.useEffect)((function(){return window.addEventListener("message",d),function(){return window.removeEventListener("message",d)}}),[]),Object(n.useEffect)((function(){a&&function(e,t){var a=window.document.createElement("iframe"),n=e.includes("es")?20408348:20088051;a.src="https://app.acuityscheduling.com/schedule.php?owner=".concat(n,"&phone=").concat(t);var s=window.document.createElement("script");s.src="https://embed.acuityscheduling.com/js/embed.js",s.type="text/javascript";var i=window.document.querySelector("#acuity-container");i.appendChild(a),i.appendChild(s)}(_,a)}),[a]),s.a.createElement("div",{className:"".concat(T.a.container," ").concat(r&&T.a.visible),id:"acuity-container"})};O.displayName="Acuity";var g=a(10),y=a.n(g),h=function(e){var t=e.children,a=e.onClick;return s.a.createElement("button",{className:y.a.button,onClick:a},t)};h.displayName="Button";var f=a(7),I=a.n(f),w=function(e){var t=e.children,a=e.isCentered;return s.a.createElement("h3",{className:"".concat(I.a.subheading," ").concat(a&&I.a.centered)},t)};w.displayName="Subheading";var R=a(11),C=a.n(R),H=function(e){var t=e.children;return s.a.createElement("div",{className:C.a.container},t)};H.displayName="Viewport";var A=a(12),Y=a.n(A),M=function(e){var t=e.onFinish,a=N(),n=a.START_QUESTIONNAIRE,i=a.THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES;return s.a.createElement("div",{className:Y.a.container},s.a.createElement(h,{onClick:t},n),s.a.createElement(w,{isCentered:!0},i))};M.displayName="BridgeMessage";var U=a(25),P=a(13),j=a.n(P),W=Object(U.a)().replace(/-/g,""),F=function(e){var t=e.onSubmit,a=v(),i=function(e){e&&e.data&&("surveyCompleted"!==e.data.type||t(W))};Object(n.useEffect)((function(){return window.addEventListener("message",i),function(){return window.removeEventListener("message",i)}}),[]);var c=Object(n.useMemo)((function(){return a.includes("es")?"https://oliva.surveysparrow.com/widget/intake--spanish/tt-246a95?id=".concat(W):"https://oliva.surveysparrow.com/widget/intake--english/tt-5031b3?id=".concat(W)}),[a]);return s.a.createElement("div",{className:j.a.container},s.a.createElement("iframe",{allowFullScreen:"",id:"ss_widget_frame",src:c}))};F.displayName="SurveySparrow";var G=a(14),x=a.n(G),L=function(){var e=N(),t=e.CHECK_YOUR_INBOX,a=e.WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS;return s.a.createElement("div",{className:x.a.container},s.a.createElement(w,{isCentered:!0},t),s.a.createElement(w,{isCentered:!0},a))};L.displayName="EndMessage";var k=a(2),K=a.n(k),B=function(e){var t=e.step,a=e.setStep,i=Object(n.useState)(null),c=Object(o.a)(i,2),r=c[0],l=c[1];return s.a.createElement("div",{className:K.a.container},s.a.createElement("div",{className:{0:K.a.middle}[t]||K.a.up},s.a.createElement(M,{onFinish:function(){return a(1)}})),s.a.createElement("div",{className:{0:K.a.down,1:K.a.middle}[t]||K.a.up},s.a.createElement(F,{onSubmit:function(e){a(2),l(e)}})),s.a.createElement("div",{className:{0:K.a.down,1:K.a.down,2:K.a.middle}[t]||K.a.up},s.a.createElement(O,{onSubmit:function(){return a(3)},responseId:r})),s.a.createElement("div",{className:{3:K.a.middle}[t]||K.a.down},s.a.createElement(L,null)))};B.displayName="Form";var V=a(1),D=a.n(V),X=function(e){var t=e.step;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"".concat(D.a.boat," ").concat(0===t&&D.a.visible)}),s.a.createElement("div",{className:"".concat(D.a.boat," ").concat(D.a.boatStep1," ").concat(1===t&&D.a.visible)}),s.a.createElement("div",{className:"".concat(D.a.boat," ").concat(D.a.boatStep2," ").concat(2===t&&D.a.visible)}),s.a.createElement("div",{className:"".concat(D.a.boat," ").concat(D.a.boatStep3," ").concat(3===t&&D.a.visible)}),s.a.createElement("div",{className:"".concat(D.a.boat," ").concat(D.a.boatStep4," ").concat(4===t&&D.a.visible)}))};X.displayName="Boat";var J=a(3),Z=a.n(J),Q=function(e){var t=e.step,a=Object(n.useState)(!1),i=Object(o.a)(a,2),c=i[0],r=i[1],l=N(),_=l.NEXT,d=l.YOUR_JOURNEY_STARTS_HERE,u=l.YOURE_TAKING_A_POSITIVE_STEP,E=l.YOURE_MAKING_THE_RIGHT_CHOICE,m=l.SOME_MORE_COMFORTING_COPY;return s.a.createElement("div",{className:"".concat(Z.a.container," ").concat(c?Z.a.isHidden:"")},s.a.createElement(X,{step:t}),s.a.createElement("div",{className:"".concat(Z.a.sea," ").concat({1:Z.a.seaStep1,2:Z.a.seaStep2,3:Z.a.seaStep3,4:Z.a.seaStep4}[t])}),s.a.createElement("h1",{className:Z.a.logo},"Oliva"),s.a.createElement("h2",{className:Z.a.heading},{0:d,1:E}[t]),s.a.createElement(w,null,{0:u,1:m}[t]),s.a.createElement(h,{onClick:function(){return r(!0)}},_),s.a.createElement("div",{className:Z.a.widescreenFlexPlaceholder}))};Q.displayName="Hero";var z=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],i=t[1];return s.a.createElement(S,null,s.a.createElement(r,null),s.a.createElement(H,null,s.a.createElement(Q,{step:a}),s.a.createElement(B,{setStep:i,step:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.d388c597.chunk.js.map