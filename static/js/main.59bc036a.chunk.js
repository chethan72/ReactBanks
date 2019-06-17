(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(3),r=a.n(l),s=a(4),o=a(5),c=a(7),u=a(6),h=a(1),m=a(8);var d=function(e){return i.a.createElement("tr",null,i.a.createElement("td",null,e.branchData.ifsc),i.a.createElement("td",null,e.branchData.bank_id),i.a.createElement("td",null,e.branchData.branch),i.a.createElement("td",null,e.branchData.address),i.a.createElement("td",null,e.branchData.district),i.a.createElement("td",null,e.branchData.bank_name),i.a.createElement("td",null,i.a.createElement("button",{className:"button is-outlined is-warning",style:{marginLeft:"45%",justifyContent:"center"}},"*")))};var p=function(e){var t=e.data.filteredDetails.map(function(e){return i.a.createElement(d,{key:e.ifsc,branchData:e})}).slice((e.data.present-1)*e.data.limit,e.data.limit*e.data.present);return i.a.createElement("div",null,i.a.createElement("table",{className:"table is-striped is-hoverable",style:{fontSize:"12px",margin:"30px 0px 20px 60px",alignSelf:"center"}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{style:{color:"crimson",backgroundColor:"#111",fontSize:"16px"}},"IFSC"),i.a.createElement("th",{style:{color:"crimson",backgroundColor:"#111",fontSize:"16px"}},"BANK ID"),i.a.createElement("th",{style:{color:"crimson",backgroundColor:"#111",fontSize:"16px"}},"BRANCH"),i.a.createElement("th",{style:{color:"crimson",backgroundColor:"#111",fontSize:"16px"}},"ADDRESS"),i.a.createElement("th",{style:{color:"crimson",backgroundColor:"#111",fontSize:"16px"}},"DISTRICT"),i.a.createElement("th",{style:{color:"crimson",backgroundColor:"#111",fontSize:"16px"}},"BANK NAME"),i.a.createElement("th",{style:{color:"crimson",backgroundColor:"#111",fontSize:"16px"}},"MARK AS FAVORITE"))),i.a.createElement("tbody",null,t)))};function f(e){return i.a.createElement("button",{className:"button is-danger is-outlined is-normal",name:e.name,value:e.page,style:{color:"black",backgroundColor:"white"},onClick:e.handleClick,disabled:e.disabled},e.name)}var b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={bankDetails:[],filteredDetails:[],city:"BANGALORE",searchText:"",first:1,previous:1,present:1,next:2,last:0,limit:10,total:0,isLoading:!0},e.componentDidMount=e.componentDidMount.bind(Object(h.a)(e)),e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleClick=e.handleClick.bind(Object(h.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://vast-shore-74260.herokuapp.com/banks?city="+this.state.city).then(function(e){return e.json()}).then(function(t){return e.setState(function(e){return e.total=t.length,e.bankDetails=t,e.filteredDetails=t,e.first=1,e.previous=1,e.next=2,e.last=parseInt(e.total/e.limit),e.total%e.limit!==0&&(e.last+=1),e.isLoading=!1,e},e.handleSubmit(e.state))}),console.log(this.state)}},{key:"handleChange",value:function(e){var t=this,a=e.target,n=a.name,i=a.value;if("city"===n)this.setState(function(e){return e.city=i,e}),fetch("https://vast-shore-74260.herokuapp.com/banks?city="+i).then(function(e){return e.json()}).then(function(e){return t.setState(function(t){return t.total=e.length,t.bankDetails=e,t.filteredDetails=e,t.first=1,t.previous=1,t.next=2,t.searchText="",t.last=parseInt(t.total/t.limit),t.total%t.limit!==0&&(t.last+=1),t})});else if("limit"===n)this.setState(function(e){return e.limit=i,e});else if("searchText"===n){var l=i.toUpperCase();this.setState(function(e){return e.searchText=i,e},this.handleSubmit(i));var r=this.state.bankDetails.filter(function(e){return e.ifsc.indexOf(l)>=0||e.bank_id===i||e.address.indexOf(l)>=0||e.district.indexOf(l)>=0||e.bank_name.indexOf(l)>=0});this.setState(function(e){return e.filteredDetails=r,e.previous=1,e.next=2,e.present=1,e},this.handleSubmit(i))}}},{key:"handleSubmit",value:function(e){console.log(e)}},{key:"handleClick",value:function(e){var t=e.target,a=t.name,n=t.value;console.log(a,n),"first"===a?this.setState(function(e){return e.previous=1,e.next=2,e.present=1,e}):"last"===a?this.setState(function(e){return e.previous=e.last-1,e.next=e.last,e.present=e.last,e}):"previous"===a&&n>=1?this.setState(function(e){return e.next=e.present,e.present=e.previous,e.previous=e.previous-1,e},this.handleSubmit(this.state)):"next"===a&&n<=this.state.last&&this.setState(function(e){return e.previous=e.present,e.present=e.next,e.next=e.next+1,e})}},{key:"render",value:function(){return!0===this.state.isLoading?i.a.createElement("h1",null,"Loading..."):i.a.createElement("div",null,i.a.createElement("div",{className:"hero",style:{paddingLeft:"10px",backgroundColor:"#222",width:"100%",marginLeft:"0px",fontSize:"32px",fontWeight:"bold",color:"crimson"}},"Bank Branches"),i.a.createElement("div",{style:{backgroundColor:"#eee",margin:"50px 50px"}},i.a.createElement("div",{className:"select is-danger",style:{float:"left"}},i.a.createElement("select",{value:this.state.city,name:"city",onChange:this.handleChange},i.a.createElement("option",{value:"MUMBAI"},"Mumbai"),i.a.createElement("option",{value:"CHENNAI"},"Chennai"),i.a.createElement("option",{value:"PUNE"},"Pune"),i.a.createElement("option",{value:"KOLKATA"},"Kolkata"),i.a.createElement("option",{value:"BANGALORE"},"Bangalore"))),"\xa0 \xa0",i.a.createElement("span",null,i.a.createElement("input",{type:"text",className:"input is-danger",name:"searchText",value:this.state.searchText,onChange:this.handleChange,placeholder:"Search here",style:{float:"right",width:"30%"}})),i.a.createElement(p,{data:this.state}),i.a.createElement("div",{className:"select is-danger"},i.a.createElement("select",{value:this.state.limit,name:"limit",onChange:this.handleChange},i.a.createElement("option",{value:"10"},"10"),i.a.createElement("option",{value:"25"},"25"),i.a.createElement("option",{value:"50"},"50"),i.a.createElement("option",{value:"100"},"100"))),i.a.createElement("div",{style:{float:"right"}},i.a.createElement(f,{page:this.state.first,name:"first",limit:this.state.limit,handleClick:this.handleClick}),i.a.createElement(f,{page:this.state.previous,name:"previous",limit:this.state.limit,handleClick:this.handleClick}),i.a.createElement(f,{page:this.state.present,name:this.state.present,limit:this.state.limit,handleClick:this.handleClick,disabled:!0}),i.a.createElement(f,{page:this.state.next,name:"next",limit:this.state.limit,handleClick:this.handleClick}),i.a.createElement(f,{page:this.state.last,name:"last",limit:this.state.limit,handleClick:this.handleClick}))))}}]),t}(i.a.Component);a(15);r.a.render(i.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.59bc036a.chunk.js.map