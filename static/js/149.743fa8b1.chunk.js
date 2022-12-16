/*! For license information please see 149.743fa8b1.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[149],{5149:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return V}});var t=r(1413);function i(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var o=r(1694),a=r.n(o),s=r(2791),c=r(184),u=["xxl","xl","lg","md","sm","xs"],l=s.createContext({prefixes:{},breakpoints:u,minBreakpoint:"xs"});l.Consumer,l.Provider;function d(n,e){var r=(0,s.useContext)(l).prefixes;return n||r[e]||e}var x=["bsPrefix","variant","animation","size","as","className"],p=s.forwardRef((function(n,e){var r=n.bsPrefix,o=n.variant,s=n.animation,u=void 0===s?"border":s,l=n.size,p=n.as,f=void 0===p?"div":p,h=n.className,v=i(n,x);r=d(r,"spinner");var b="".concat(r,"-").concat(u);return(0,c.jsx)(f,(0,t.Z)((0,t.Z)({ref:e},v),{},{className:a()(h,b,l&&"".concat(b,"-").concat(l),o&&"text-".concat(o))}))}));p.displayName="Spinner";var f=p;var h,v,b,g,m,j,Z,y,k,w=function(){return(0,c.jsx)(f,{animation:"border",role:"status",children:(0,c.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},z=r(9434),C=r(4382),S=r(5604),O=function(){var n=(0,z.v9)((function(n){return n.contacts})),e=n.contacts,r=n.isLoading,t=n.error,i=(0,z.v9)((function(n){return n.filter.filter})),o=(0,z.I0)();return(0,c.jsxs)("ul",{children:[t&&(0,c.jsxs)("p",{children:["\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0432\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 ",t]}),r&&(0,c.jsx)(w,{}),e.filter((function(n){return n.name.toLowerCase().includes(i.toLowerCase())})).map((function(n){var e=n.id,r=n.name,t=n.number;return(0,c.jsxs)(S.Li,{children:[r,": ",t,(0,c.jsx)(S.v,{type:"button",onClick:function(){return n=e,void o((0,C.GK)(n));var n},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]},e)}))]})},I=r(9378),L=r(168),_=r(4934),A=_.Z.div(h||(h=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),P=_.Z.input(v||(v=(0,L.Z)(["\n  height: 30px;\n  padding: 20px;\n  font-size: 30px;\n  border-radius: 15px;\n  box-sizing: border-box;\n \n  outline: none;\n"]))),N=function(){var n=(0,z.v9)((function(n){return n.filter.filter})),e=(0,z.I0)();return(0,c.jsxs)(A,{children:[(0,c.jsx)("span",{children:"\u041f\u043e\u0448\u0443\u043a \u0437\u0430 \u0456\u043c'\u044f\u043c:"}),(0,c.jsx)(P,{type:"text",name:"filter",value:n,onChange:function(n){e((0,I.T1)(n.target.value))}})]})},E=r(4942),B=r(885),F=_.Z.div(b||(b=(0,L.Z)(["\n  padding: 10px;\n  border: 1px solid rosybrown;\n  width: 400px;\n"]))),K=_.Z.form(g||(g=(0,L.Z)(["\ndisplay: flex;\n    flex-direction: column;\n"]))),q=_.Z.label(m||(m=(0,L.Z)(["\n  display: contents;\n  margin-bottom: 10px;\n"]))),D=_.Z.input(j||(j=(0,L.Z)(["\n  height: 30px;\n  padding: 20px;\n  font-size: 30px;\n  border-radius: 15px;\n  box-sizing: border-box;\n \n  outline: none;\n"]))),G=_.Z.input(Z||(Z=(0,L.Z)(["\n  height: 30px;\n  padding: 20px;\n  font-size: 30px;\n  border-radius: 15px;\n  box-sizing: border-box;\n \n  outline: none;\n"]))),J=_.Z.span(y||(y=(0,L.Z)(["\n  font-size: 25px;\n  margin-right: 5px;\n"]))),M=_.Z.button(k||(k=(0,L.Z)(["\n  padding: 10px;\n  margin: 0 auto;\n  margin-top: 5px;\n  width: 200px;\n  border: none;\n  border-radius: 10px;\n  &:hover {\n    background: cadetblue;\n    cursor: pointer;\n  }\n"]))),R=function(){var n=(0,s.useState)({name:"",number:""}),e=(0,B.Z)(n,2),r=e[0],i=e[1],o=(0,z.I0)(),a=function(n){var e=n.target,r=e.name,o=e.value;i((function(n){return(0,t.Z)((0,t.Z)({},n),{},(0,E.Z)({},r,o))}))},u=function(){i({name:"",number:""})};return(0,c.jsx)(F,{children:(0,c.jsxs)(K,{onSubmit:function(n){n.preventDefault();var e={name:r.name,number:r.number};o((0,C.uK)(e)),u()},children:[(0,c.jsxs)(q,{children:[(0,c.jsx)(J,{children:"\u0406\u043c'\u044f"}),(0,c.jsx)(D,{type:"text",name:"name",value:r.name,onChange:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,c.jsxs)(q,{children:[(0,c.jsx)(J,{children:"\u041d\u043e\u043c\u0435\u0440"}),(0,c.jsx)(G,{type:"tel",name:"number",value:r.number,onChange:a,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,c.jsx)(M,{type:"submit",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})})},T=r(7689);var $=function(n,e){return function(r){var i=localStorage.getItem("token");return Boolean(i)?(0,c.jsx)(n,(0,t.Z)({},r)):(0,c.jsx)(T.Fg,{to:e})}},H=r(46),Q=r(4475),U=r(8617);var V=$((function(){var n=(0,z.v9)((function(n){return n.contacts})).isLoading,e=(0,z.I0)(),r=localStorage.getItem("token");return(0,s.useEffect)((function(){localStorage.getItem("token")&&e((0,H.v0)())}),[e]),(0,s.useEffect)((function(){r&&e((0,C.K2)())}),[e,r]),(0,c.jsxs)("div",{children:[(0,c.jsx)(U.Z,{}),r?(0,c.jsx)(Q.Z,{}):(0,c.jsx)("p",{children:"\u0412\u0438 \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u043b\u0438\u0441\u044c"}),(0,c.jsx)("h1",{children:"\u041a\u043d\u0438\u0433\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432"}),(0,c.jsx)(R,{}),(0,c.jsx)("h2",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),(0,c.jsx)(N,{}),n&&(0,c.jsx)(w,{}),(0,c.jsx)(O,{})]})}),"/login")},8617:function(n,e,r){"use strict";r.d(e,{Z:function(){return u}});var t,i=r(168),o=r(4934),a=r(1087),s=(0,o.Z)(a.OL)(t||(t=(0,i.Z)(["\n  text-decoration: none;\n  color: black;\n  padding: 15px 30px;\n  font-size: 22px;\n  border: none;\n  border-radius: 10px 10px 0 0;\n  cursor: pointer;\n  &.active {\n    background-color: cadetblue;\n    color: white;\n  }\n"]))),c=r(184),u=function(){var n=localStorage.getItem("token");return(0,c.jsx)("header",{children:(0,c.jsxs)("nav",{children:[n?(0,c.jsx)(s,{to:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{to:"/",children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"}),(0,c.jsx)(s,{to:"/register",children:"\u0420\u0435\u0433\u0456\u0441\u0442\u0440\u0430\u0446\u0456\u044f"}),(0,c.jsx)(s,{to:"/login",children:"\u041b\u043e\u0433\u0456\u043d"})]}),(0,c.jsx)("hr",{})]})})}},5604:function(n,e,r){"use strict";r.d(e,{Li:function(){return c},v:function(){return u}});var t,i,o,a=r(168),s=r(4934),c=s.Z.li(t||(t=(0,a.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  font-style: italic;\n  &::first-letter {\n    text-transform: uppercase;\n  }\n"]))),u=s.Z.button(i||(i=(0,a.Z)(["\n  border: none;\n  cursor: pointer;\n  &:hover,\n  focus {\n    border-radius: 10px;\n    background: cadetblue;\n  }\n\n"])));s.Z.svg(o||(o=(0,a.Z)(["\n    font-size: 30px;\n"])))},4475:function(n,e,r){"use strict";r(2791);var t=r(9434),i=r(7689),o=r(46),a=r(5604),s=r(184);e.Z=function(){var n=(0,t.v9)((function(n){var e;return null===(e=n.auth.user)||void 0===e?void 0:e.user})),e=(0,t.I0)(),r=(0,i.s0)();return(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:["\u0406\u043c'\u044f:",(0,s.jsxs)("b",{children:[" ",null===n||void 0===n?void 0:n.name]})]}),(0,s.jsxs)("p",{children:["Email:",(0,s.jsxs)("b",{children:[" ",null===n||void 0===n?void 0:n.email]})]}),(0,s.jsx)(a.v,{type:"button",onClick:function(){r("/login"),e((0,o.ni)())},children:"\u0412\u0438\u0439\u0442\u0438"})]})}},1694:function(n,e){var r;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)n.push(r);else if(Array.isArray(r)){if(r.length){var a=i.apply(null,r);a&&n.push(a)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){n.push(r.toString());continue}for(var s in r)t.call(r,s)&&r[s]&&n.push(s)}}}return n.join(" ")}n.exports?(i.default=i,n.exports=i):void 0===(r=function(){return i}.apply(e,[]))||(n.exports=r)}()}}]);
//# sourceMappingURL=149.743fa8b1.chunk.js.map