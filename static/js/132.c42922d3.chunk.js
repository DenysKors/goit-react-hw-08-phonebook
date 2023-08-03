"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[132],{8132:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,o,a,c,s=t(2791),l=t(9434),d=t(4227),u=function(n){return n.contacts.items.filter((function(e){return e.name.toLowerCase().includes(n.filter.filter.toLowerCase())}))},p=function(n){return n.contacts.items},f=function(n){return n.filter.filter},x=function(n){return n.contacts.isLoading},h=function(n){return n.contacts.error},g=t(168),b=t(7691),m=b.ZP.main(r||(r=(0,g.Z)(["\n  min-height: calc(100vh - 156px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),v=t(9439),w=b.ZP.form(i||(i=(0,g.Z)(["\n  margin: 40px;\n  padding: 30px;\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n"]))),Z=b.ZP.label(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  font-weight: 500;\n  font-size: 20px;\n"]))),j=b.ZP.input(a||(a=(0,g.Z)(["\n  padding-left: 3px;\n  padding-right: 3px;\n  width: 250px;\n  min-height: 30px;\n  font-size: 16px;\n\n  border: 2px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n\n  &:focus {\n    outline: none;\n    border-color: cadetblue;\n  }\n"]))),y=b.ZP.button(c||(c=(0,g.Z)(["\n  width: 200px;\n\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.88;\n  text-align: center;\n  color: #ffffff;\n\n  border: none;\n  border-radius: 4px;\n  background-color: cornflowerblue;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #0c49b9;\n  }\n"]))),k=t(184);function C(){var n=(0,s.useState)(""),e=(0,v.Z)(n,2),t=e[0],r=e[1],i=(0,s.useState)(""),o=(0,v.Z)(i,2),a=o[0],c=o[1],u=(0,l.I0)(),f=(0,l.v9)(p),x=function(n){var e=n.target,t=e.value;switch(e.name){case"name":r(t);break;case"number":c(t);break;default:return}},h=function(){r(""),c("")};return(0,k.jsxs)(w,{onSubmit:function(n){n.preventDefault();var e=t.toLowerCase();if(f.find((function(n){return n.name.toLowerCase()===e})))return alert("".concat(t," is already in contacts"));u((0,d.uK)({name:t,number:a})),h()},children:[(0,k.jsxs)(Z,{children:["Name",(0,k.jsx)(j,{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:x})]}),(0,k.jsxs)(Z,{children:["Number",(0,k.jsx)(j,{type:"tel",name:"number",value:a,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:x})]}),(0,k.jsx)(y,{type:"submit",children:"Add to Contacts"})]})}var z,P,A,L,S,I=t(4808),_=b.ZP.label(z||(z=(0,g.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n"]))),F=b.ZP.input(P||(P=(0,g.Z)(["\n  margin-left: 10px;\n  padding-left: 3px;\n  padding-right: 3px;\n  width: 250px;\n  min-height: 30px;\n  font-size: 16px;\n\n  border: 2px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n\n  &:focus {\n    outline: none;\n    border-color: cadetblue;\n  }\n"]))),N=function(){var n=(0,l.I0)(),e=(0,l.v9)(f);return(0,k.jsxs)(_,{children:["Find contacts by name",(0,k.jsx)(F,{type:"text",value:e,onChange:function(e){return t=e.target.value,void n((0,I.T)(t));var t}})]})},q=b.ZP.li(A||(A=(0,g.Z)(["\n  padding-left: 5px;\n  padding-right: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 40px;\n  border: 2px solid rgba(33, 33, 33, 0.1);\n  border-radius: 4px;\n\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),D=b.ZP.p(L||(L=(0,g.Z)(["\n  display: inline-block;\n\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.18;\n"]))),K=b.ZP.button(S||(S=(0,g.Z)(["\n  width: 70px;\n  height: 30px;\n  padding: 3px;\n  font-weight: 500;\n  font-size: 14px;\n  text-align: center;\n  color: #ffffff;\n\n  border: none;\n  border-radius: 4px;\n  background-color: cornflowerblue;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #0c49b9;\n  }\n"]))),B=function(){var n=(0,l.I0)(),e=(0,l.v9)(u);return e.map((function(e){var t=e.id,r=e.name,i=e.number;return(0,k.jsxs)(q,{children:[(0,k.jsxs)(D,{children:[r,", tel. ",i]}),(0,k.jsx)(K,{onClick:function(){return function(e){n((0,d.GK)(e))}(t)},children:"Delete"})]},t)}))},E=function(){return(0,k.jsx)("ul",{children:(0,k.jsx)(B,{})})};function G(){var n=(0,l.I0)(),e=(0,l.v9)(p),t=(0,l.v9)(x),r=(0,l.v9)(h);return(0,s.useEffect)((function(){n((0,d.yF)())}),[n]),(0,k.jsxs)(m,{children:[(0,k.jsx)(C,{}),(0,k.jsx)("h2",{children:"Contacts"}),(0,k.jsx)(N,{}),null!==r&&(0,k.jsx)("p",{style:{color:"red",fontWeight:700,fontSize:20},children:"Something gone wrong, please try again!"}),t&&!r&&(0,k.jsx)("p",{children:"Loading, please wait..."}),e.length>0&&(0,k.jsx)(E,{}),0===e.length&&!t&&(0,k.jsx)("p",{children:"You don`t have any contacts yet"})]})}}}]);
//# sourceMappingURL=132.c42922d3.chunk.js.map