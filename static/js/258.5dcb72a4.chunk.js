"use strict";(self.webpackChunkprometheus_x_course_task=self.webpackChunkprometheus_x_course_task||[]).push([[258],{3258:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var a=t(7269),r=t(1413),u=t(9439),s=t(2791),i=t(4925),o="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",l="TextField_wrapper__Lt-lM",c="TextField_field__VZyp7",m=t(184),d=["label","handleChange"],_=function(e){var n=e.label,t=e.handleChange,a=(0,i.Z)(e,d),u=(0,s.useMemo)((function(){return function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;)n+=o[63&t[e]];return n}()}),[]);return(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("label",{htmlFor:u,children:n}),(0,m.jsx)("input",(0,r.Z)({className:c,id:u,onChange:t},a))]})},h=t(4942),b=function(e){var n=e.onSubmit,t=e.initialState,a=(0,s.useState)((0,r.Z)({},t)),i=(0,u.Z)(a,2),o=i[0],l=i[1],c=(0,s.useCallback)((function(e){var n=e.target,t=n.name,a=n.value;l((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,h.Z)({},t,a))}))}),[l]);return{state:o,setState:l,handleChange:c,handleSubmit:function(e){e.preventDefault(),n((0,r.Z)({},o)),l((0,r.Z)({},t))}}},f={userName:""},p={userName:{type:"userName",name:"userName",required:!0,label:"Username",placeholder:" type Username",pattern:"^.{4,16}$"}},g={form:"SingInForm_form__l+SUH",btn:"SingInForm_btn__SPaXZ",btnDisabled:"SingInForm_btnDisabled__teOVD"},S=function(e){var n=e.onSubmit,t=b({initialState:f,onSubmit:n}),a=t.state,i=t.handleChange,o=t.handleSubmit,l=a.userName,c=(0,s.useState)(""),d=(0,u.Z)(c,2),h=d[0],S=d[1],Z=(0,s.useState)(!1),v=(0,u.Z)(Z,2),x=v[0],j=v[1];(0,s.useEffect)((function(){var e;return x&&(l.length<4||l.length>16)?e=setTimeout((function(){S("Username must be between 4 and 16 characters")}),3e3):S(""),function(){return clearTimeout(e)}}),[l,x]);return(0,m.jsxs)("form",{className:g.form,onSubmit:function(e){return o(e,n)},children:[(0,m.jsx)(_,(0,r.Z)((0,r.Z)({value:l,handleChange:i},p.userName),{},{onFocus:function(){j(!0)}})),h&&(0,m.jsx)("p",{className:g.error,children:h}),(0,m.jsx)("button",{className:"".concat(g.btn," ").concat(h&&g.btnDisabled),type:"submit",children:"Sign-In"})]})},Z="SingIn_wrapperSection__owXeg",v=function(e){var n=e.onSubmit;return(0,m.jsxs)("section",{className:Z,children:[(0,m.jsx)("img",{src:a,alt:"avatar"}),(0,m.jsx)(S,{onSubmit:n})]})},x=t(2290),j=function(e){var n=e.onSubmit;return(0,m.jsx)("div",{className:x.Z.wrapper,children:(0,m.jsx)(v,{onSubmit:n})})}},2290:function(e,n){n.Z={wrapper:"page_wrapper__KZ6Xj",notFoundPage:"page_notFoundPage__OzMtn",notFoundPageImg:"page_notFoundPageImg__AKTFW"}}}]);
//# sourceMappingURL=258.5dcb72a4.chunk.js.map