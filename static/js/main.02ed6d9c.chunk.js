(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(3),l=a.n(s),r=a(4),c=a(5),o=a(7),m=a(6),d=a(1),u=a(8);var h=function(e){var t=!0===e.favorite?{color:"crimson",justifyContent:"center",backgroundColor:"crimson",width:"32px",height:"32px",border:"1px solid crimson",borderRadius:"5px"}:{color:"crimson",justifyContent:"center",backgroundColor:"white",width:"32px",height:"32px",border:"1px solid crimson",borderRadius:"5px"};return i.a.createElement("button",{value:e.ifsc,name:"favorite",onClick:e.handleClick,style:t},"+")};var p=function(e){var t=e.data.map(function(t){return i.a.createElement("div",{key:t.ifsc,className:"box",style:{margin:"2px",padding:"8px"}},i.a.createElement("div",{className:"columns is-centered",style:{textAlign:"center"}},i.a.createElement("div",{className:"column is-1",style:{width:"10%"}},t.bank_id),i.a.createElement("div",{className:"column is-2"},t.bank_name),i.a.createElement("div",{className:"column is-2"},t.branch),i.a.createElement("div",{className:"column is-1"},t.ifsc),i.a.createElement("div",{className:"column is-4"},t.address),i.a.createElement("div",{className:"column is-1"},t.district),i.a.createElement("div",{className:"column is-1"},i.a.createElement(h,{ifsc:t.ifsc,favorite:t.favorite,handleClick:e.handleClick}))))});return i.a.createElement("div",null,i.a.createElement("div",{className:"box",style:{backgroundColor:"#1d1d1d",margin:"2px",padding:"20px 0px 5px 0px"}},i.a.createElement("div",{className:"columns is-centered",style:{color:"#ff3333",textAlign:"center",fontSize:"16px",fontWeight:"bolder"}},i.a.createElement("div",{className:"column is-1"},"BANK ID"),i.a.createElement("div",{className:"column is-2"},"BANK NAME"),i.a.createElement("div",{className:"column is-2"},"BRANCH"),i.a.createElement("div",{className:"column is-1"},"IFSC"),i.a.createElement("div",{className:"column is-4"},"ADDRESS"),i.a.createElement("div",{className:"column is-1"},"DISTRICT"),i.a.createElement("div",{className:"column is-1",style:{paddingTop:"5px"}},"MARK AS FAVORITE"))),i.a.createElement("div",{style:{marginTop:"10px"}},t))};function f(e){return i.a.createElement("button",{className:"button is-danger is-outlined",name:e.name,value:e.page,onClick:e.handleClick},e.name)}var v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={city:e.city,bankDetails:JSON.parse(localStorage.getItem("bankDetails"+e.city))||[],searchText:"",present:1,last:0,limit:10,total:0,isLoading:!0},a.componentDidMount=a.componentDidMount.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleClick=a.handleClick.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=0,a=!0,n=!1,i=void 0;try{for(var s,l=this.state.bankDetails[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){s.value;t++}}catch(r){n=!0,i=r}finally{try{a||null==l.return||l.return()}finally{if(n)throw i}}0===t?fetch("https://vast-shore-74260.herokuapp.com/banks?city="+this.state.city).then(function(e){return e.json()}).then(function(t){t.map(function(e){return e.favorite=!1,e}),e.setState(function(e){return e.total=t.length,e.bankDetails=t,e.filteredDetails=t,e.present=1,e.last=parseInt(e.total/e.limit),e.total%e.limit!==0&&(e.last+=1),e.isLoading=!1,e},function(){localStorage.setItem("bankDetails"+e.state.city,JSON.stringify(e.state.bankDetails))})}):this.setState(function(e){return e.total=t,e.last=parseInt(e.total/e.limit),e.total%e.limit!==0&&(e.last+=1),e.isLoading=!1,e})}},{key:"handleChange",value:function(e){var t=this,a=e.target,n=a.name,i=a.value;if("city"===n){this.setState({isLoading:!0}),this.setState(function(e){return e.bankDetails=JSON.parse(localStorage.getItem("bankDetails"+i))||[],e.city=i,e.searchText="",e.present=1,e});var s=0,l=!0,r=!1,c=void 0;try{for(var o,m=this.state.bankDetails[Symbol.iterator]();!(l=(o=m.next()).done);l=!0){o.value;s++}}catch(d){r=!0,c=d}finally{try{l||null==m.return||m.return()}finally{if(r)throw c}}0===s?fetch("https://vast-shore-74260.herokuapp.com/banks?city="+i).then(function(e){return e.json()}).then(function(e){e.map(function(e){return e.favorite=!1,e}),t.setState(function(t){return t.total=e.length,t.bankDetails=e,t.present=1,t.last=parseInt(t.total/t.limit),t.total%t.limit!==0&&(t.last+=1),t.isLoading=!1,t},function(){localStorage.setItem("bankDetails"+i,JSON.stringify(t.state.bankDetails))})}):this.setState(function(e){return e.isLoading=!1,e})}else"limit"===n?this.setState(function(e){return e.limit=i,e}):"searchText"===n&&this.setState(function(e){return e.searchText=i,e.present=1,e},this.handleSubmit(i))}},{key:"handleSubmit",value:function(e){}},{key:"handleClick",value:function(e){var t=this,a=e.target,n=a.name,i=a.value;"first"===n?this.setState(function(e){return e.present=1,e}):"last"===n?this.setState(function(e){return e.present=parseInt(i),e.last=parseInt(i),e}):"previous"===n&&parseInt(i)>1?this.setState(function(e){return e.present=parseInt(i)-1,e},this.handleSubmit(this.state)):"next"===n?(console.log(n,parseInt(i),this.state.last),this.state.last>i&&(console.log(n,i),this.setState(function(e){return e.present=parseInt(i)+1,e}))):"favorite"===n?this.setState(function(e){var t=e.bankDetails.findIndex(function(e){return e.ifsc===i});return e.bankDetails[t].favorite=!e.bankDetails[t].favorite,console.log(e.bankDetails[t].favorite),e},function(){localStorage.setItem("bankDetails"+t.state.city,JSON.stringify(t.state.bankDetails))}):"favorites"===n&&this.setState(function(e){return e.bankDetails=e.bankDetails.filter(function(e){return!0===e.favorite}),e.present=1,e})}},{key:"render",value:function(){var e=this,t=this.state.bankDetails.filter(function(t){return t.ifsc.indexOf(e.state.searchText.toUpperCase())>=0||t.bank_id===parseInt(e.state.searchText.toUpperCase())||t.address.indexOf(e.state.searchText.toUpperCase())>=0||t.district.indexOf(e.state.searchText)>=0||t.bank_name.indexOf(e.state.searchText.toUpperCase())>=0}),a=(this.state.present-1)*this.state.limit,n=this.state.present*this.state.limit,s=t.slice(a,n),l=0,r=!0,c=!1,o=void 0;try{for(var m,d=t[Symbol.iterator]();!(r=(m=d.next()).done);r=!0){m.value;l++}}catch(g){c=!0,o=g}finally{try{r||null==d.return||d.return()}finally{if(c)throw o}}var u=parseInt(l/this.state.limit)+1,h={margin:"10px 50px 10px 50px",padding:"10px"},v=["MUMBAI","CHENNAI","PUNE","LUCKNOW","KOLKATA","BANGALORE"].map(function(e){return i.a.createElement("option",{key:e,value:e},e)}),b=[10,25,50,100].map(function(e){return i.a.createElement("option",{key:e,value:e},e)});return!0===this.state.isLoading?i.a.createElement("h1",null,"Loading..."):i.a.createElement("div",{style:{color:"black"}},i.a.createElement("div",{className:"box",style:{margin:"0px",padding:"10px",backgroundColor:"#1d1d1d",color:"#ff3333",fontSize:"32px",fontWeight:"bolder"}},"BANK BRANCHES"),i.a.createElement("div",{className:"box",style:h},i.a.createElement("div",{className:"select is-danger"},i.a.createElement("select",{value:this.state.city,name:"city",onChange:this.handleChange},v)),"\xa0 \xa0",i.a.createElement("button",{name:"favorites",onClick:this.handleClick,className:"button is-danger"},"YOUR FAVORITES"),i.a.createElement("span",null,i.a.createElement("input",{type:"text",className:"input is-danger",name:"searchText",value:this.state.searchText,onChange:this.handleChange,placeholder:"Search here",style:{float:"right",width:"30%"}}))),i.a.createElement("div",{className:"box",style:h},i.a.createElement(p,{data:s,handleClick:this.handleClick})),i.a.createElement("div",{className:"box",style:h},i.a.createElement("div",{className:"select is-danger"},i.a.createElement("select",{value:this.state.limit,name:"limit",onChange:this.handleChange},b)),i.a.createElement("div",{style:{float:"right"}},i.a.createElement(f,{page:1,name:"first",handleClick:this.handleClick}),i.a.createElement(f,{page:this.state.present,name:"previous",handleClick:this.handleClick}),i.a.createElement(f,{page:this.state.present,name:this.state.present,handleClick:this.handleClick,disabled:!0}),i.a.createElement(f,{page:this.state.present,name:"next",handleClick:this.handleClick}),i.a.createElement(f,{page:u,name:"last",handleClick:this.handleClick}))))}}]),t}(i.a.Component);a(15);l.a.render(i.a.createElement(v,{city:"MUMBAI"}),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.02ed6d9c.chunk.js.map