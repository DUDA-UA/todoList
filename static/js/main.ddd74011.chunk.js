(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),r=n(10),c=n.n(r),i=n(8),l=n(6),s=n(7),u=n(2),d=n(3),b=n(5),f=n(4),j=(n(17),function(t){var e=t.todo,n=t.done,a=t.imp;return Object(o.jsxs)("div",{className:"app-header d-flex",children:[Object(o.jsx)("h1",{children:"My Todo list"}),Object(o.jsxs)("h2",{children:[e," more to do, ",n," done, important ",a]})]})}),h=(n(18),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={label:""},t.onLabelChange=function(e){t.setState({label:e.target.value})},t.onSubmit=function(e){e.preventDefault();var n=t.state.label;if(0===n.length)return!1;t.props.addItem(n),t.setState({label:""})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:"footer-btn d-flex",onSubmit:this.onSubmit,children:[Object(o.jsx)("button",{className:"btn btn-info btn-outline-warning footer-btn-item",children:"Enter"}),Object(o.jsx)("input",{type:"text",placeholder:"enter some",className:"form-control footer-input",onChange:this.onLabelChange,value:this.state.label})]})}}]),n}(a.Component)),m=(n(19),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterChange,a=this.buttons.map((function(t){var a=t.name,r=t.label,c=e===a?"btn-info":"btn-outline-secondary";return Object(o.jsx)("button",{type:"button",className:"btn ".concat(c),onClick:function(){return n(a)},children:r},a)}));return Object(o.jsx)("div",{className:"btn-group",children:a})}}]),n}(a.Component)),p=(n(20),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={term:""},t.newValue=function(e){var n=e.target.value;t.setState({term:n}),t.props.newValue(n)},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterChange;return Object(o.jsxs)("div",{className:"search-field",children:[Object(o.jsx)("input",{placeholder:"enter password",className:"search-input",value:this.state.term,onChange:this.newValue}),Object(o.jsx)(m,{filter:e,onFilterChange:n})]})}}]),n}(a.Component)),O=n(11),v=(n(21),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDeleted,a=t.onDone,r=t.onImportant,c="todo-list-item";return t.done&&(c+=" done"),t.important&&(c+=" important"),Object(o.jsxs)("div",{className:"todo-item-box",children:[Object(o.jsx)("span",{className:c,onClick:a,children:Object(o.jsx)("span",{className:"todo-label",onClick:this.onLabelClick,children:e})}),Object(o.jsxs)("div",{className:"todo-icon",children:[Object(o.jsx)("button",{className:"btn btn-outline-danger btn-sm",onClick:n,children:Object(o.jsx)("i",{className:"fas fa-trash-alt"})}),Object(o.jsx)("button",{className:"btn btn-outline-success btn-sm",onClick:r,children:Object(o.jsx)("i",{className:"fas fa-exclamation"})})]})]})}}]),n}(a.Component)),x=(n(22),function(t){var e=t.todos,n=t.onDeleted,a=t.onToogleImportant,r=t.onToogleDone,c=e.map((function(t){var e=t.id,c=Object(O.a)(t,["id"]);return Object(o.jsx)("li",{className:"list-group-item",children:Object(o.jsx)(v,Object(l.a)(Object(l.a)({},c),{},{onDeleted:function(){return n(e)},onImportant:function(){return a(e)},onDone:function(){return r(e)}}))},e)}));return Object(o.jsx)("ul",{className:"list-group todo-list",children:c})}),g=(n(23),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).maxId=100,t.state={todoData:[t.createTodoItem("Drink nice cofee"),t.createTodoItem("Make awesome app"),t.createTodoItem("Be front-end developer")],term:"",filter:"all"},t.deleteItem=function(e){t.setState((function(t){var n=t.todoData,o=n.findIndex((function(t){return t.id===e})),a=n.slice(0,o),r=n.slice(o+1);return{todoData:[].concat(Object(s.a)(a),Object(s.a)(r))}}))},t.addItem=function(e){var n=t.createTodoItem(e);t.setState((function(t){var e=t.todoData;return{todoData:[].concat(Object(s.a)(e),[n])}}))},t.onToogleDone=function(e){t.setState((function(n){var o=n.todoData;return{todoData:t.toogleProperty(o,e,"done")}}))},t.onToogleImportant=function(e){t.setState((function(n){var o=n.todoData;return{todoData:t.toogleProperty(o,e,"important")}}))},t.newValue=function(e){t.setState({term:e})},t.onFilterChange=function(e){t.setState({filter:e})},t}return Object(d.a)(n,[{key:"createTodoItem",value:function(t){return{label:t,important:!1,done:!1,id:this.maxId++}}},{key:"toogleProperty",value:function(t,e,n){var o=t.findIndex((function(t){return t.id===e})),a=t[o],r=Object(l.a)(Object(l.a)({},a),{},Object(i.a)({},n,!a[n]));return[].concat(Object(s.a)(t.slice(0,o)),[r],Object(s.a)(t.slice(o+1)))}},{key:"search",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))}},{key:"filter",value:function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}));default:return t}}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.term,a=t.filter,r=this.filter(this.search(e,n),a),c=e.filter((function(t){return t.done})).length,i=e.filter((function(t){return!t.done})).length,l=e.filter((function(t){return t.important})).length;return Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)(j,{todo:i,done:c,imp:l}),Object(o.jsx)(p,{newValue:this.newValue,filter:a,onFilterChange:this.onFilterChange}),Object(o.jsx)(x,{todos:r,onDeleted:this.deleteItem,onToogleDone:this.onToogleDone,onToogleImportant:this.onToogleImportant}),Object(o.jsx)(h,{addItem:this.addItem})]})}}]),n}(a.Component));c.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.ddd74011.chunk.js.map