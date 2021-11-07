(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={contacts__list:"ContactList_contacts__list__re6gJ",contacts__button:"ContactList_contacts__button__9cavp"}},13:function(t,e,n){t.exports={filter:"Filter_filter__kML3K"}},18:function(t,e,n){},19:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=(n(18),n(7)),s=n(3),u=n(4),l=n(6),m=n(5),b=(n(19),n(12)),d=n.n(b),h=n(9),j=n.n(h),f=n(0),p=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleNameChange=function(e){t.setState({name:e.target.value})},t.handleNumberChange=function(e){t.setState({number:e.target.value})},t.handleButtonSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onSubmit({name:a,number:c}),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:j.a.form,onSubmit:this.handleButtonSubmit,children:[Object(f.jsx)("label",{htmlFor:"name",children:"Name"}),Object(f.jsx)("input",{value:this.state.name,id:"name",onChange:this.handleNameChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(f.jsx)("label",{htmlFor:"number",children:"Number"}),Object(f.jsx)("input",{value:this.state.number,id:"number",onChange:this.handleNumberChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(f.jsx)("button",{className:j.a.form__button,type:"submit",children:"Add Contact"})]})}}]),n}(a.Component),C=n(10),O=n.n(C);function _(t){var e=t.title,n=t.contacts,a=t.onClick;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:e}),Object(f.jsx)("ul",{className:O.a.contacts__list,children:n.map((function(t){return Object(f.jsxs)("li",{children:[t.name,": ",t.number,Object(f.jsx)("button",{className:O.a.contacts__button,"data-id":t.id,onClick:a,type:"button",children:"Delete"})]},t.id)}))})]})}var v=n(13),x=n.n(v);function g(t){var e=t.onChange,n=t.filter;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("label",{className:x.a.filter,htmlFor:"findname",children:["Find contacts by name",Object(f.jsx)("input",{id:"findname",type:"text",onChange:e,value:n})]})})}var y=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.filterContact=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.handleSubmit=function(e){var n=e.name,a=e.number;t.state.contacts.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[{name:n,number:a,id:d.a.generate()}])}}))},t.handleDelContact=function(e){var n=t.state.contacts.findIndex((function(t){return t.id===e.target.dataset.id}));t.setState((function(t){var e=Object(i.a)(t.contacts);return e.splice(n,1),{contacts:Object(i.a)(e)}}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{onSubmit:this.handleSubmit}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(g,{contacts:this.state.contacts,filter:this.state.filter,title:"Find contacts by name",onChange:this.changeFilter}),Object(f.jsx)(_,{onClick:this.handleDelContact,contacts:this.filterContact()})]})}}]),n}(a.Component),S=y;o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"ContactsForm_form__1pPvw",form__button:"ContactsForm_form__button__3aCC3"}}},[[29,1,2]]]);
//# sourceMappingURL=main.d3b13a8b.chunk.js.map