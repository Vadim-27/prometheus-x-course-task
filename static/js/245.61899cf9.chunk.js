"use strict";(self.webpackChunkprometheus_x_course_task=self.webpackChunkprometheus_x_course_task||[]).push([[245],{2245:function(t,e,r){r.r(e),r.d(e,{default:function(){return E}});var c=r(9439),a=r(4420),n=r(2791),i=r(3995),s=r(6512),o=r(9524),l=r(1087),u="EmptyCart_titleEmptyCart__GkiZG",_="EmptyCart_textEmptyCart__m9HLP",d="EmptyCart_linkBtn__s9eMf",m="EmptyCart_btnEmptyCart__n1Cds",p=r(184),h=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{className:u,children:"The cart is currently empty."}),(0,p.jsx)("p",{className:_,children:"To add books to your cart, go to the books page"}),(0,p.jsx)(l.rU,{className:d,to:"/books",children:(0,p.jsx)("button",{className:m,type:"button",children:"Go to books page"})})]})},x="Cart_btnBought__qeFji",C="Cart_section__6bgIi",j="Cart_cartItem__JZK9j",f="Cart_cartItemTitle__y-Sgq",N="Cart_cartItemPrice__0beE9",b="Cart_cartItemCountName__qpaRn",k="Cart_cartItemBtn__ys-xR",g="Cart_cartItemCount__i15at",y="Cart_cartItem_totalPrice__YtyV7",v="Cart_totalPrice__PDJI1",I="Cart_wrapperItemTrash__10p8u",P=function(){var t=(0,a.I0)(),e=(0,a.v9)(i.d),r=localStorage.getItem("cart"),l=(0,n.useState)([]),u=(0,c.Z)(l,2),_=u[0],d=u[1];(0,n.useEffect)((function(){var t=e.length>0?e:JSON.parse(r)||[];d(t)}),[e,r]);var m=_.map((function(e){var r=e.id,c=e.title,a=e.price,n=e.count,i=e.totalPrice;return(0,p.jsxs)("li",{className:j,children:[(0,p.jsx)("p",{className:f,children:c}),(0,p.jsxs)("p",{className:N,children:["Price: ",a," $"]}),(0,p.jsx)("p",{className:b,children:"Count:"}),(0,p.jsx)("button",{className:k,onClick:function(){return function(e){var r=e.id,c=e.title,a=e.count,n=e.price;console.log("handleDecrement",r);var i=a>1?a-1:1,o=i*n;t((0,s.H9)({id:r,title:c,count:i,price:n,totalPrice:o}))}({id:r,title:c,count:n,price:a,totalPrice:i})},children:"-"}),(0,p.jsx)("p",{className:g,children:n}),(0,p.jsx)("button",{className:k,onClick:function(){return function(e){var r=e.id,c=e.title,a=e.count,n=e.price,i=a<42?a+1:42,o=i*n;t((0,s.H9)({id:r,title:c,count:i,price:n,totalPrice:o}))}({id:r,title:c,count:n,price:a,totalPrice:i})},children:"+"}),(0,p.jsxs)("p",{className:y,children:["Total price, $",i.toFixed(2)]}),(0,p.jsx)("div",{className:I,onClick:function(){return function(e){var r=e.id;t((0,s.jT)({id:r}))}({id:r})},children:(0,p.jsx)(o.O,{id:"trash"})})]},r)})),P=_.reduce((function(t,e){return t+e.totalPrice}),0);return console.log("cartData",_),(0,p.jsx)("div",{className:"".concat(C," ","container"),children:_.length>0?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{type:"button",className:x,onClick:function(){localStorage.removeItem("cart"),t((0,s.F2)([])),d([])},children:"Purchase"}),(0,p.jsx)("ul",{children:m}),(0,p.jsxs)("p",{className:v,children:["Total price, $ ",P.toFixed(2)," "]})]}):(0,p.jsx)(h,{})})},E=function(){return(0,p.jsx)("div",{children:(0,p.jsx)(P,{})})}}}]);
//# sourceMappingURL=245.61899cf9.chunk.js.map