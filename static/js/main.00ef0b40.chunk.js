(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),l=c(1),s=(c(10),c(2)),r=c.n(s);function o(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var j=c(0),d=function(e){var a=e.items,c=e.itemsPerPage,t=e.currentPage,n=e.onChangePage,i=Math.ceil(a/c),l=o(1,Math.ceil(i));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:r()("page-item",{disabled:1===t}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":"true",onClick:function(){1!==t&&n(t-1)},children:"\xab"})}),l.map((function(e){return Object(j.jsx)("li",{className:r()("page-item",{active:e===t}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#1",onClick:function(){e!==t&&n(e)},children:e})},e)})),Object(j.jsx)("li",{className:r()("page-item",{disabled:t===i}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":"false",onClick:function(){t!==i&&n(t+1)},children:"\xbb"})})]})})},h=o(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(l.useState)(1),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(l.useState)(5),s=Object(i.a)(n,2),r=s[0],o=s[1],u=(c-1)*r,b=h.length,m=b<c*r?b:c*r,p=h.slice(u,m);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (items ").concat(u+1,"\n          "," - ","\n          ").concat(m,")\n          "," of ","\n          ").concat(h.length,"\n          ")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:r,onChange:function(e){o(+e.target.value),t(1)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{items:b,itemsPerPage:r,currentPage:c,onChangePage:t}),Object(j.jsx)("ul",{children:p.map((function(e){return Object(j.jsx)("li",{children:e},e)}))})]})};n.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.00ef0b40.chunk.js.map