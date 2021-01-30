(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(2),s=n(14),c=n.n(s),i=(n(25),function(e){return Object(a.jsxs)("nav",{className:"navbar shadow content-right",children:[Object(a.jsx)("h1",{children:"Employee Directory"}),Object(a.jsx)("form",{className:"form-inline m-2 form-control-lg",onSubmit:e.handleFormSubmit,children:Object(a.jsx)("input",{className:"form-control",value:e.value,name:"search",onChange:e.handleInputChange,type:"search",placeholder:"Search"})})]})}),o=n(3),l=n(4),d=n(15),h=n(16),u=n(19),m=n(18),j=(n(26),function(e){return Object(a.jsxs)("table",{className:"table table-striped table-sortable text-center",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Image"}),Object(a.jsx)("th",{scope:"col","data-field":"name","data-sortable":"true",children:Object(a.jsx)("span",{onClick:function(){return e.sortBy("name","last","first")},children:"Name"})}),Object(a.jsx)("th",{scope:"col",children:Object(a.jsx)("span",{onClick:function(){return e.sortBy("phone")},children:"Phone"})}),Object(a.jsx)("th",{scope:"col",children:Object(a.jsx)("span",{onClick:function(){return e.sortBy("email")},children:"Email"})}),Object(a.jsx)("th",{scope:"col",children:Object(a.jsx)("span",{onClick:function(){return e.sortBy("dob","date")},children:"DOB"})})]})}),Object(a.jsx)("tbody",{children:e.state.filteredEmployees.map((function(t){var n=t.name,r=n.first,s=n.last,c="".concat(r," ").concat(s),i=e.formatDate(t.dob.date);return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:t.picture.thumbnail,alt:c})}),Object(a.jsx)("td",{className:"align-middle",children:c}),Object(a.jsx)("td",{className:"align-middle",children:Object(a.jsx)("a",{href:"tel:+1".concat(t.phone),children:t.phone})}),Object(a.jsx)("td",{className:"align-middle email",children:Object(a.jsx)("a",{href:"mailto:".concat(t.email),children:t.email})}),Object(a.jsx)("td",{className:"align-middle",children:i})]},t.login.uuid)}))})]})}),p=n(17),b=n.n(p),f=function(){return b.a.get("https://randomuser.me/api/?results=100&nat=us")},O=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:"",employees:[],filteredEmployees:[],sortDirections:e.initialSortDirections},e.handleInputChange=function(t){var n=t.target.value;e.setState({search:n}),e.filterEmployees(n.toLowerCase().trim())},e.handleFormSubmit=function(e){e.preventDefault()},e.sortBy=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e.state.filteredEmployees;e.state.sortDirections[t]?e.setState({filteredEmployees:r.reverse(),sortDirections:Object(l.a)(Object(l.a)({},e.initialSortDirections),{},Object(o.a)({},t,"asc"===e.state.sortDirections[t]?"desc":"asc"))}):(r=e.state.filteredEmployees.sort((function(e,r){return e=e[t],r=r[t],n?a&&e[n]===r[n]?e[a].localeCompare(r[a]):e[n].localeCompare(r[n]):e.localeCompare(r)})),e.setState({filteredEmployees:r,sortDirections:Object(l.a)(Object(l.a)({},e.initialSortDirections),{},Object(o.a)({},t,"asc"))}))},e.filterEmployees=function(t){t?e.setState({filteredEmployees:e.state.employees.filter((function(n){return n.name.first.toLowerCase().concat(" ",n.name.last.toLowerCase()).includes(t)||n.phone.includes(t)||n.phone.replace(/[^\w\s]/gi,"").includes(t)||n.email.includes(t)||e.formatDate(n.dob.date).includes(t)}))}):e.setState({filteredEmployees:e.state.employees})},e.formatDate=function(e){e=new Date(e);var t=[];return t.push(("0"+(e.getMonth()+1)).slice(-2)),t.push(("0"+e.getDate()).slice(-2)),t.push(e.getFullYear()),t.join("-")},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){return e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(i,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(a.jsx)("div",{className:"container mt-4",children:Object(a.jsx)(j,{state:this.state,sortBy:this.sortBy,filterEmployees:this.filterEmployees,formatDate:this.formatDate})})]})}},{key:"initialSortDirections",get:function(){return{name:"",phone:"",email:"",dob:""}}}]),n}(r.Component);n(45);var y=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(O,{})})};c.a.render(Object(a.jsx)(y,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.69417240.chunk.js.map