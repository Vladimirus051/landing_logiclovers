"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[873],{9873:function(e,n,r){r.r(n),r.d(n,{default:function(){return I}});var t=r(9439),i=r(1057),a=r(9603),s=r(615),l=r(3638),o=r(4942),d=r(4165),c=r(5861),m=r(1413),u=r(2791),p=r(4338),h={name:"",email:"",message:""};function Z(e){var n={};return e.name||(n.name="\u0418\u043c\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0438\u0306 email"):n.email="Email \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d",e.message||(n.message="Message is required"),n}var x,g,f,v,j,y,b,w,P,k,C,S,z=r(5224),O=r(168),E=r(1191),M=(0,E.ZP)("p")(x||(x=(0,O.Z)(["\n  margin-top: 1.5rem;\n"]))),T=(0,E.ZP)("div")(g||(g=(0,O.Z)(["\n  position: relative;\n  max-width: 700px;\n"]))),F=(0,E.ZP)("div")(f||(f=(0,O.Z)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"]))),_=r(184),q=(0,s.Z)()((function(e){var n=e.title,r=e.content,t=e.t;return(0,_.jsxs)(T,{children:[(0,_.jsx)("h6",{children:t(n)}),(0,_.jsx)(F,{children:(0,_.jsx)(M,{children:t(r)})})]})})),D=(0,E.ZP)("div")(v||(v=(0,O.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),J=(0,E.ZP)("input")(j||(j=(0,O.Z)(["\n  font-size: 0.875rem;\n"]))),N=((0,E.ZP)("div")(y||(y=(0,O.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),(0,E.ZP)("textarea")(b||(b=(0,O.Z)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n"]))),(0,E.ZP)("label")(w||(w=(0,O.Z)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"])))),Y=(0,s.Z)()((function(e){var n=e.name,r=e.placeholder,t=e.onChange,i=e.t;return(0,_.jsxs)(D,{children:[(0,_.jsx)(N,{htmlFor:n,children:i(n)}),(0,_.jsx)(J,{placeholder:i(r),name:n,id:n,onChange:t})]})})),A=(0,E.ZP)("div")(P||(P=(0,O.Z)(["\n  padding: 5rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n"]))),B=(0,E.ZP)("form")(k||(k=(0,O.Z)(["\n  width: 100%;\n  max-width: 520px;\n\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"]))),G=(0,E.ZP)("span")(C||(C=(0,O.Z)(["\n  display: block;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),H=(0,E.ZP)("div")(S||(S=(0,O.Z)(["\n  text-align: end;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),I=(0,s.Z)()((function(e){var n=e.title,r=e.content,s=e.id,x=e.t,g=function(e){var n=(0,u.useState)({values:(0,m.Z)({},h),errors:(0,m.Z)({},h)}),r=(0,t.Z)(n,2),i=r[0],a=r[1],s=function(){var n=(0,c.Z)((0,d.Z)().mark((function n(r){var t,s;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t=i.values,s=e(t),a((function(e){return(0,m.Z)((0,m.Z)({},e),{},{errors:s})})),n.prev=5,!Object.values(s).every((function(e){return""===e}))){n.next=11;break}return n.next=9,fetch("",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 9:n.sent.ok?(r.target.reset(),a((function(){return{values:(0,m.Z)({},h),errors:(0,m.Z)({},h)}})),p.ZP.success({message:"Success",description:"Your message has been sent!"})):p.ZP.error({message:"Error",description:"There was an error sending your message, please try again later."});case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(5),p.ZP.error({message:"Error",description:"Failed to submit form. Please try again later."});case 16:case"end":return n.stop()}}),n,null,[[5,13]])})));return function(e){return n.apply(this,arguments)}}();return{handleChange:function(e){e.persist();var n=e.target,r=n.name,t=n.value;a((function(e){return(0,m.Z)((0,m.Z)({},e),{},{values:(0,m.Z)((0,m.Z)({},e.values),{},(0,o.Z)({},r,t)),errors:(0,m.Z)((0,m.Z)({},e.errors),{},(0,o.Z)({},r,""))})}))},handleSubmit:s,values:i.values,errors:i.errors}}(Z),f=g.values,v=g.errors,j=g.handleChange,y=(g.handleSubmit,(0,u.useState)("")),b=(0,t.Z)(y,2),w=b[0],P=(b[1],function(e){var n=e.type,r=v[n];return(0,_.jsx)(G,{children:r})});return(0,_.jsx)(A,{id:s,children:(0,_.jsxs)(i.Z,{justify:"space-between",align:"middle",children:[(0,_.jsx)(a.Z,{lg:12,md:11,sm:24,xs:24,children:(0,_.jsx)(l.Mi,{direction:"left",triggerOnce:!0,children:(0,_.jsx)(q,{title:n,content:r})})}),(0,_.jsx)(a.Z,{lg:12,md:12,sm:24,xs:24,children:(0,_.jsx)(l.Mi,{direction:"right",triggerOnce:!0,children:(0,_.jsxs)(B,{autoComplete:"off",children:[(0,_.jsxs)(a.Z,{span:24,children:[(0,_.jsx)(Y,{type:"text",name:"email",placeholder:"\u0412\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430",value:f.email||"",onChange:j}),(0,_.jsx)(P,{type:"email"})]}),(0,_.jsx)(H,{children:(0,_.jsx)(z.z,{onClick:function(){alert("\u041f\u043e\u043a\u0430 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e")},name:"submit",children:x("\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")})}),"success"===w&&(0,_.jsx)(G,{style:{color:"green"},children:"\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443"}),"error"===w&&(0,_.jsx)(G,{style:{color:"red"},children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u0444\u043e\u0440\u043c\u044b (\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0442\u0430\u043a\u043e\u0439 email \u0443\u0436\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d)"})]})})})]})})}))}}]);
//# sourceMappingURL=873.a1863341.chunk.js.map