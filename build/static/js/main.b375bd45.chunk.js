(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{145:function(e,t,s){},146:function(e,t,s){},167:function(e,t,s){},176:function(e,t,s){},256:function(e,t,s){},259:function(e,t,s){},260:function(e,t,s){},261:function(e,t,s){},262:function(e,t,s){},341:function(e,t,s){},342:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),l=s(18),n=s.n(l),r=(s(145),s(146),s(12)),j=s.n(r),i=s(23),d=s(5),b=s(19),h=s.n(b),o=s(10),O=(s(167),s(0));function x(e){var t=e.ele;return Object(O.jsx)("div",{className:"main-product-card",children:Object(O.jsx)(o.b,{to:"/style/edit/".concat(t._id),children:Object(O.jsx)("div",{className:"container4",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"rt-profile-card",children:[Object(O.jsx)("img",{className:"full-width img-fluid",src:t.frontImageUrl,alt:""}),Object(O.jsxs)("div",{class:"rt-profile-body",children:[Object(O.jsxs)("div",{class:"rt-profile-name",children:[t.styleCode,Object(O.jsx)("br",{}),t.name]}),Object(O.jsx)("div",{class:"rt-profile-text",children:t.name})]})]})})})})})}var u=s(123),m=s.n(u);s(176);function p(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),s=t[0],a=t[1],l=Object(c.useState)(null),n=Object(d.a)(l,2),r=(n[0],n[1],function(){var e=Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()({method:"get",url:"http://localhost:3002/style"});case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(c.useEffect)((function(){r()}),[]),Object(O.jsxs)("div",{className:"Home",children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("div",{title:"404",className:"titl",children:Object(O.jsx)(o.b,{to:"/",children:Object(O.jsx)("h1",{children:"Stylobug "})})}),Object(O.jsxs)("div",{className:"input",children:[Object(O.jsx)(m.a,{}),Object(O.jsx)("input",{type:"text",placeholder:"Search Style"})]})]}),Object(O.jsxs)("div",{className:"banner-page",children:[Object(O.jsx)("div",{className:"side1",children:Object(O.jsxs)("h2",{children:["Introducing the New Revolution in Fashion -"," ",Object(O.jsx)("span",{className:"teg",children:"StyloBug"})," "]})}),Object(O.jsx)("div",{className:"side2",children:Object(O.jsx)("lottie-player",{src:"https://assets3.lottiefiles.com/packages/lf20_sk5h1kfn.json",background:"transparent",speed:"1",hover:!0,loop:!0,autoplay:!0})})]}),Object(O.jsx)("div",{className:"products",children:s?s.map((function(e){return Object(O.jsx)(x,{ele:e},e._id)})):null})]})}var f=s(9),v=(s(85),s(57)),g=s.n(v),N=function(e){for(var t=0;t<e.length;t++){var s=e.charCodeAt(t);if(!(s>47&&s<58)&&!(s>64&&s<91)&&!(s>96&&s<123))return!1}return!0},y=function(e){if(e.match(" ")||e.length>20)return!1;for(var t=0;t<e.length;t++){var s=e.charCodeAt(t);if(!(s>47&&s<58)&&!(s>64&&s<91)&&"-"!==e[t]&&":"!==e[t])return!1}return!0},S=function(e){if(e.length>30)return!1;for(var t=0;t<e.length;t++)if("-"!==e[t]&&" "!==e[t]&&":"!==e[t]&&!N(e[t]))return!1;return!0};function C(e){return g.a.isURL(e)}function k(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),s=t[0],a=t[1],l=Object(c.useState)(null),n=Object(d.a)(l,2),r=n[0],b=n[1],x=Object(c.useState)(null),u=Object(d.a)(x,2),m=u[0],p=u[1],f=Object(c.useState)(null),v=Object(d.a)(f,2),g=v[0],N=v[1],k=Object(c.useState)(null),I=Object(d.a)(k,2),F=I[0],w=I[1],P=Object(c.useState)(null),z=Object(d.a)(P,2),U=z[0],E=z[1],A=Object(c.useState)(null),T=Object(d.a)(A,2),B=T[0],K=T[1],V=Object(c.useState)(null),_=Object(d.a)(V,2),D=_[0],H=_[1],R=Object(c.useState)(null),M=Object(d.a)(R,2),W=M[0],Z=M[1],L=Object(c.useState)(null),X=Object(d.a)(L,2),J=X[0],Y=X[1],$=Object(c.useState)(null),q=Object(d.a)($,2),G=q[0],Q=q[1],ee=Object(c.useState)(null),te=Object(d.a)(ee,2),se=te[0],ce=te[1],ae=Object(c.useState)(null),le=Object(d.a)(ae,2),ne=le[0],re=le[1],je=Object(c.useState)(null),ie=Object(d.a)(je,2),de=ie[0],be=ie[1],he=function(){var e=Object(i.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H(null),Q(null),s&&r&&m&&g&&F&&U&&B){e.next=5;break}return Q("Please fill all details to proceed."),e.abrupt("return");case 5:return t={styleCode:s,frontImageUrl:r,backImageUrl:m,zoomImageUrl:g,color:F,name:U,hasSize:B},e.next=8,h()({method:"post",url:"http://localhost:3002/style/add",data:t});case 8:(c=e.sent).data&&H(c.data);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container1",children:[Object(O.jsxs)("div",{className:"head",children:[Object(O.jsxs)("h2",{children:[" ",Object(O.jsx)("span",{children:"Add"})," Style To Fashion"]}),Object(O.jsx)(o.b,{to:"/Onboarding",children:Object(O.jsx)("p",{className:"close",children:"X"})})]}),Object(O.jsx)("p",{children:G}),D?Object(O.jsxs)("p",{children:["New Style Added Successfully."," ",Object(O.jsx)(o.b,{to:"/style/add/".concat(D._id),children:"Add SKUs"})]}):null,Object(O.jsxs)("div",{className:"inputs",children:[Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"styleCode",children:"Style Code: "}),Object(O.jsx)("input",{type:"text",id:"styleCode",placeholder:"Style Code",onChange:function(e){a(e.target.value),!y(e.target.value)&&e.target.value.length?(Z("Invalid Style Code!!"),a(null)):Z(null)}})]}),W?Object(O.jsx)("p",{children:W}):null,Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"styleName",children:"Name: "}),Object(O.jsx)("input",{type:"text",id:"styleName",placeholder:"Name",onChange:function(e){E(e.target.value),e.target.value&&!S(e.target.value)?(Y("Enter Valid Name"),E(null)):Y(null)}})]}),J?Object(O.jsx)("p",{children:J}):null,Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"styleName",children:"Color: "}),Object(O.jsx)("input",{type:"text",id:"styleColor",placeholder:"Color",onChange:function(e){return w(e.target.value)}})]}),Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"frontImageUrl",children:"Front Image: "}),Object(O.jsx)("input",{type:"text",id:"frontImageUrl",placeholder:"Front Image",onChange:function(e){p(e.target.value),!C(e.target.value)&&e.target.value?(ce("Enter Valid Url"),p(null)):ce(null)}})]}),se?Object(O.jsx)("p",{children:se}):null,Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"backImageUrl",children:"Back Image: "}),Object(O.jsx)("input",{type:"text",id:"backImageUrl",placeholder:"Back Image",onChange:function(e){b(e.target.value),!C(e.target.value)&&e.target.value?(re("Enter Valid Url"),b(null)):re(null)}})]}),ne?Object(O.jsx)("p",{children:ne}):null,Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"zoomImageUrl",children:"Zoom Image: "}),Object(O.jsx)("input",{type:"text",id:"zoomImageUrl",placeholder:"Zoom Image",onChange:function(e){N(e.target.value),!C(e.target.value)&&e.target.value?(be("Enter Valid Url"),N(null)):be(null)}})]}),de?Object(O.jsx)("p",{children:de}):null,Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"hasSize",children:"Has Size: "}),Object(O.jsx)("input",{type:"text",id:"hasSize",placeholder:"Has Size (T/F)",onChange:function(e){return K(e.target.value)}})]}),Object(O.jsx)("button",{className:"butt",onClick:he,children:"Add Style"})]})]})}s(256);function I(){var e=Object(f.e)(),t=Object(c.useState)(null),s=Object(d.a)(t,2),a=(s[0],s[1]),l=Object(c.useState)(null),n=Object(d.a)(l,2),r=n[0],b=n[1],x=Object(c.useState)(null),u=Object(d.a)(x,2),m=(u[0],u[1]),p=Object(c.useState)(null),v=Object(d.a)(p,2),g=(v[0],v[1],Object(c.useState)(null)),N=Object(d.a)(g,2),C=(N[0],N[1],Object(c.useState)(null)),k=Object(d.a)(C,2),I=(k[0],k[1]),F=Object(c.useState)(null),w=Object(d.a)(F,2),P=(w[0],w[1]),z=Object(c.useState)(null),U=Object(d.a)(z,2),E=U[0],A=U[1],T=Object(c.useState)(null),B=Object(d.a)(T,2),K=(B[0],B[1],Object(c.useState)(null)),V=Object(d.a)(K,2),_=V[0],D=(V[1],Object(c.useState)(null)),H=Object(d.a)(D,2),R=(H[0],H[1]),M=function(){var t=Object(i.a)(j.a.mark((function t(){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h()({method:"get",url:"http://localhost:3002/style/"+e.skuCode});case 2:s=t.sent,R(s.data[0]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){M()}),[]),Object(O.jsxs)("div",{className:"container2",children:[Object(O.jsxs)("div",{className:"head1",children:[Object(O.jsxs)("h2",{children:[" ","Add Sku For Style: ",Object(O.jsx)("span",{children:"StyleCode"})]}),Object(O.jsx)(o.b,{to:"/Onboarding",children:Object(O.jsx)("p",{className:"close",children:"X"})})]}),Object(O.jsx)("p",{children:_}),Object(O.jsxs)("div",{className:"inputs",children:[Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"styleCode",children:"SKU: "}),Object(O.jsx)("input",{type:"text",id:"styleCode",placeholder:"Style Code",onChange:function(e){!y(e.target.value)&&e.target.value.length?(b("Invalid Style Code!!"),a(null)):b(null),a(e.target.value)}})]}),r?Object(O.jsx)("p",{children:r}):null,Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"styleName",children:"StyleCode: "}),Object(O.jsx)("input",{type:"text",id:"styleName",placeholder:"Name",onChange:function(e){e.target.value&&!S(e.target.value)?(A("Enter Valid Name"),P(null)):A(null),P(e.target.value)}})]}),E?Object(O.jsx)("p",{children:E}):null,Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"styleName",children:"SizeCode: "}),Object(O.jsx)("input",{type:"text",id:"styleColor",placeholder:"Color",onChange:function(e){return I(e.target.value)}})]}),Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"frontImg",children:"BarCode: "}),Object(O.jsx)("input",{type:"text",id:"frontImg",placeholder:"Front Image",onChange:function(e){return m(e.target.value)}})]}),Object(O.jsx)("button",{className:"butt",children:"Add Sku"})]})]})}function F(){var e=Object(f.e)(),t=Object(c.useState)(null),s=Object(d.a)(t,2),a=(s[0],s[1],Object(c.useState)(null)),l=Object(d.a)(a,2),n=l[0],r=(l[1],Object(c.useState)(null)),b=Object(d.a)(r,2),x=b[0],u=b[1],m=Object(c.useState)(null),p=Object(d.a)(m,2),v=p[0],g=p[1],N=Object(c.useState)(null),y=Object(d.a)(N,2),C=y[0],k=y[1],I=Object(c.useState)(null),F=Object(d.a)(I,2),w=F[0],P=F[1],z=Object(c.useState)(null),U=Object(d.a)(z,2),E=U[0],A=U[1],T=Object(c.useState)(null),B=Object(d.a)(T,2),K=B[0],V=B[1],_=Object(c.useState)(null),D=Object(d.a)(_,2),H=D[0],R=D[1],M=Object(c.useState)(null),W=Object(d.a)(M,2),Z=W[0],L=W[1],X=Object(c.useState)(null),J=Object(d.a)(X,2),Y=J[0],$=J[1],q=function(){var t=Object(i.a)(j.a.mark((function t(){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(R(null),L(null),x&&v&&C&&w&&E){t.next=5;break}return L("Please fill all details to proceed."),t.abrupt("return");case 5:if(x!==Y.frontImageUrl||v!==Y.backImageUrl||C!==Y.zoomImageUrl||w!==Y.color||E!==Y.name){t.next=8;break}return L("Everything is already Updated"),t.abrupt("return");case 8:return s={frontImageUrl:x,backImageUrl:v,zoomImageUrl:C,color:w,name:E},t.next=11,h()({method:"patch",url:"http://localhost:3002/style/update/"+e.styleCode,data:s});case 11:t.sent.status&&R("Style Updated Successfully.");case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=function(){var t=Object(i.a)(j.a.mark((function t(){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h()({method:"get",url:"http://localhost:3002/style/"+e.styleCode});case 2:s=t.sent,$(s.data[0]),u(s.data[0].frontImageUrl),g(s.data[0].backImageUrl),k(s.data[0].zoomImageUrl),P(s.data[0].color),A(s.data[0].name);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){G()}),[]),Y?Object(O.jsxs)("div",{className:"container2",children:[Object(O.jsxs)("div",{className:"head1",children:[Object(O.jsxs)("h2",{children:[" ",Object(O.jsx)("span",{children:"Edit"})," Style"]}),Object(O.jsx)(o.b,{to:"/",children:Object(O.jsx)("p",{className:"close",children:"X"})})]}),Object(O.jsx)("p",{children:Z}),H?Object(O.jsxs)("p",{children:[" ",H," ",Object(O.jsx)(o.b,{to:"/style/add/".concat(H._id),children:"Edit SKUs?"})]}):null,Object(O.jsxs)("div",{className:"inputsss",children:[Object(O.jsxs)("div",{className:"side7",children:[Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"styleCode",children:"Style Code: "}),Object(O.jsx)("input",{type:"text",id:"styleCode",autoComplete:"off",placeholder:"Style Code",value:Y.styleCode,disabled:!0})]}),n?Object(O.jsx)("p",{children:n}):null,Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"styleName",children:"Name: "}),Object(O.jsx)("input",{type:"text",id:"styleName",autoComplete:"off",value:E,placeholder:"Name",onChange:function(e){e.target.value&&!S(e.target.value)?(V("Enter Valid Name"),A(null)):V(null),A(e.target.value)}})]}),K?Object(O.jsx)("p",{children:K}):null,Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"styleName",children:"Color: "}),Object(O.jsx)("input",{type:"text",id:"styleColor",autoComplete:"off",placeholder:"Color",value:w,onChange:function(e){return P(e.target.value)}})]})]}),Object(O.jsxs)("div",{className:"side8",children:[Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"frontImg",children:"Front Image: "}),Object(O.jsx)("input",{type:"text",id:"frontImg",autoComplete:"off",placeholder:"Front Image",value:x,onChange:function(e){return u(e.target.value)}})]}),Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"backImg",children:"Back Image: "}),Object(O.jsx)("input",{type:"text",id:"backImg",autoComplete:"off",placeholder:"Back Image",value:v,onChange:function(e){return g(e.target.value)}})]}),Object(O.jsxs)("div",{className:"itemss",children:[Object(O.jsx)("label",{htmlFor:"zoomImg",children:"Zoom Image: "}),Object(O.jsx)("input",{type:"text",id:"zoomImg",autoComplete:"off",placeholder:"Zoom Image",value:C,onChange:function(e){return k(e.target.value)}})]}),Object(O.jsx)("button",{className:"butt",onClick:q,children:"Update"})]})]})]}):null}var w=s(75),P=s(366),z=s(367),U=s(127),E=s.n(U),A=s(128),T=s.n(A),B=s(73),K=(s(259),s(365)),V=Object(K.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},button:{margin:e.spacing(1)}}}));var _=function(){V();var e=Object(c.useState)([{id:Object(B.v4)(),StyleCode:"",Name:""}]),t=Object(d.a)(e,2),s=t[0],a=t[1],l=Object(c.useState)(null),n=Object(d.a)(l,2),r=n[0],b=n[1],x=Object(c.useState)(null),u=Object(d.a)(x,2),m=(u[0],u[1]),p=Object(c.useState)(null),f=Object(d.a)(p,2),v=f[0],N=f[1],y=Object(c.useState)(null),S=Object(d.a)(y,2),C=(S[0],S[1]),k=Object(c.useState)(null),I=Object(d.a)(k,2),F=I[0],U=I[1],A=Object(c.useState)(null),K=Object(d.a)(A,2),_=K[0],D=K[1],H=function(){a([].concat(Object(w.a)(s),[{id:Object(B.v4)(),StyleCode:"",Name:""}]))},R=function(){var e=Object(i.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U(null),D(null),v&&r){e.next=5;break}return U("Please Fill all fields!!.."),e.abrupt("return");case 5:return{sizeCode:r,sizeName:v},e.next=8,h()({method:"post",url:"http://localhost:3002/size/add"});case 8:e.sent.data&&D("Successfully added the size");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(P.a,{children:Object(O.jsxs)("div",{className:"container3",children:[Object(O.jsxs)("div",{className:"head2",children:[Object(O.jsxs)("h2",{children:[" ",Object(O.jsx)("span",{children:"Add"})," Size"]}),Object(O.jsx)(o.b,{to:"/Onboarding",children:Object(O.jsx)("p",{className:"close",children:"X"})})]}),Object(O.jsx)("p",{children:F}),Object(O.jsx)("p",{children:_}),s.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"container3_items",children:[Object(O.jsxs)("div",{className:"container3_item",children:[Object(O.jsx)("label",{children:"Size Code"}),Object(O.jsx)("input",{type:"text",placeholder:"Size Code",onChange:function(e){b(e.target.value),!function(e){if(e.length<3||e.length>10)return!1;for(var t=0;t<e.length;t++)if(!g.a.isAlphanumeric(e[t])&&":"!==e[t]&&"-"!==e[t]&&"_"!==e[t])return!1;return!0}(e.target.value)&&e.target.value?(b(null),m("Enter Valid Sizecode")):m(null)}})]}),Object(O.jsxs)("div",{className:"container3_item",children:[Object(O.jsx)("label",{children:"Name"}),Object(O.jsx)("input",{type:"text",placeholder:"Name",onChange:function(e){N(e.target.value),!function(e){if(e.length>50||e.length<5)return!1;for(var t=0;t<e.length;t++)if(!g.a.isAlphanumeric(e[t])&&"-"!==e[t]&&":"!==e[t]&&"-"!==e[t]&&"_"!==e[t]&&"."!==e[t]&&"]"!==e[t]&&"["!==e[t]&&"}"!==e[t]&&"{"!==e[t]&&")"!==e[t]&&"("!==e[t])return!1;return!0}(e.target.value)&&e.target.value?(N(null),C("Enter Valid size name")):C(null)}})]}),Object(O.jsx)(z.a,{disabled:1===s.length,onClick:function(){return function(e){var t=Object(w.a)(s);t.splice(t.findIndex((function(t){return t.id===e})),1),a(t)}(e.id)},children:Object(O.jsx)(E.a,{})}),Object(O.jsx)(z.a,{onClick:H,children:Object(O.jsx)(T.a,{})})]})},e.id)})),Object(O.jsxs)("button",{className:"butt",onClick:R,children:["Add Size"," "]})]})})},D=(s(260),s(129)),H=s.n(D),R=s(131),M=s.n(R),W=s(132),Z=s.n(W),L=s(133),X=s.n(L),J=s(134),Y=s.n(J),$=s(130),q=s.n($);var G=function(){return Object(O.jsx)("div",{className:"sidebar",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"list ",children:Object(O.jsxs)("a",{href:"",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)(H.a,{})}),Object(O.jsx)("span",{className:"title",children:"Home"})]})}),Object(O.jsx)("li",{className:"list",children:Object(O.jsxs)("a",{href:"/Onboarding",children:[Object(O.jsxs)("span",{className:"icon",children:[" ",Object(O.jsx)(q.a,{})]}),Object(O.jsx)("span",{className:"title",children:"OnBoarding"})]})}),Object(O.jsx)("li",{className:"list",children:Object(O.jsxs)("a",{href:"/Dashboard",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)(M.a,{})}),Object(O.jsx)("span",{className:"title",children:"Inventory DashBoard"})]})}),Object(O.jsx)("li",{className:"list",children:Object(O.jsxs)("a",{href:"/MarketPlaceHealth",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("lord-icon",{src:"https://cdn.lordicon.com/hdiorcun.json",trigger:"loop",colors:"primary:#ffffff,secondary:#08a88a",stroke:120})}),Object(O.jsx)("span",{className:"title",children:"MarketPlace Health"})]})}),Object(O.jsx)("li",{className:"list",children:Object(O.jsxs)("a",{href:"",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)(Z.a,{})}),Object(O.jsx)("span",{className:"title",children:"Help"})]})}),Object(O.jsx)("li",{className:"list",children:Object(O.jsxs)("a",{href:"",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)(X.a,{})}),Object(O.jsx)("span",{className:"title",children:"Password"})]})}),Object(O.jsx)("li",{className:"list",children:Object(O.jsxs)("a",{href:"",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)(Y.a,{})}),Object(O.jsx)("span",{className:"title",children:"Sign Out"})]})})]})})},Q=s(76);s(261),s(262);function ee(e){e.client;return Object(O.jsx)("div",{className:"nav",children:Object(O.jsxs)("div",{className:"container",children:[" ",Object(O.jsx)("div",{title:"404",className:"titl",children:Object(O.jsx)(o.b,{to:"/",children:Object(O.jsx)("h1",{children:"Stylobug "})})}),Object(O.jsxs)("div",{className:"items",children:[Object(O.jsxs)("div",{className:"item",children:[" ",Object(O.jsxs)(o.b,{to:"/size/add",children:[Object(O.jsx)("p",{children:"+ SIZE"})," "]})]}),Object(O.jsx)("div",{className:"item",children:Object(O.jsx)(o.b,{to:"/style/add",children:Object(O.jsx)("p",{children:"+ STYLE"})})}),Object(O.jsx)("div",{className:"item",children:Object(O.jsx)(o.b,{to:"/sku/add/skuCode",children:Object(O.jsx)("p",{children:"+ SKU"})})})]})]})})}var te=s(135),se=s.n(te),ce=(s(300),s(301),s(136)),ae=s.n(ce),le=(s(309),s(36)),ne=s.n(le),re=(s(317),s(74)),je=s.n(re);var ie=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),s=t[0],l=t[1],n=(re.CSVExport.ExportCSVButton,function(e){return Object(O.jsxs)("div",{className:"tableheader",children:[Object(O.jsxs)("div",{className:"csv",children:[Object(O.jsx)("div",{className:"csvinputs",children:Object(O.jsx)("input",{className:"csvinput",type:"file",name:"csvFile",onChange:b})}),Object(O.jsx)("div",{className:"csvbutton",children:Object(O.jsx)("button",{className:"butt",onClick:o,children:"Submit"})})]}),Object(O.jsx)("div",{className:"export",children:Object(O.jsx)("button",{className:"butt",onClick:function(){e.onExport()},children:"Export to CSV"})})]})}),r=[{dataField:"StyleCode",text:"StyleCode",sort:!0,filter:Object(le.textFilter)()},{dataField:"TrafficActual",text:"Traffic Actual",sort:!0,filter:Object(le.textFilter)()},{dataField:"CurrentInv",text:"Current INV",sort:!0,filter:Object(le.textFilter)()},{dataField:"SalesNumber",text:"Sales Number",sort:!0,filter:Object(le.textFilter)()},{dataField:"SalesRank",text:"Sales Rank",sort:!0,filter:Object(le.textFilter)()}],j=ae()({page:1,sizePerPage:5,lastPageText:">>",firstPageText:"<<",nextPageText:">",prePageText:"<",showTotal:!0,alwaysShowAllBtns:!0,onPageChange:function(e,t){console.log("page",e),console.log("sizePerPage",t)},onSizePerPageChange:function(e,t){console.log("page",e),console.log("sizePerPage",t)}});console.log(s);var i=new FormData,b=function(e){console.log(e.target.files[0]),e.target&&e.target.files[0]&&(i.append("csvFile",e.target.files[0]),console.log(i))},o=function(){h.a.post("http://localhost:3002/api/skuInventory",i).then((function(e){console.log(e),l(e.data)})).catch((function(e){console.log(e)}))};return Object(O.jsx)("div",{className:"Dashboard__table",children:Object(O.jsx)(je.a,{bootstrap4:!0,keyField:"styleCode",data:s,columns:r,exportCSV:!0,children:function(e){return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(n,Object(Q.a)({},e.csvProps)),Object(O.jsx)(se.a,Object(Q.a)({pagination:j,filter:ne()()},e.baseProps))]})}})})},de=s(48),be=s.n(de);var he=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(ee,{})})};s(341);var oe=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"checkbox",className:"nav-toggle"}),Object(O.jsxs)("div",{className:"sidebarr",children:[Object(O.jsx)("div",{className:"sidebar-brand",children:Object(O.jsxs)("h1",{children:[" ",Object(O.jsx)("span",{className:"fab fa-asymmetrik",children:" "})," ",Object(O.jsx)("span",{children:"SellerBoost"})]})}),Object(O.jsx)("div",{className:"sidebar-menu",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsxs)("a",{href:"#",className:"active",children:[Object(O.jsx)("span",{className:"fas fa-tachometer-alt"}),Object(O.jsx)("span",{children:"Dashboard"})]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("a",{href:"#",children:[Object(O.jsx)("span",{className:"fas fa-users"}),Object(O.jsx)("span",{children:"Customers"})]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("a",{href:"#",children:[Object(O.jsx)("span",{className:"fas fa-stream"}),Object(O.jsx)("span",{children:"Projects"})]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("a",{href:"#",children:[Object(O.jsx)("span",{className:"fas fa-shopping-cart"}),Object(O.jsx)("span",{children:"Orders"})]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("a",{href:"#",children:[Object(O.jsx)("span",{className:"fas fa-boxes"}),Object(O.jsx)("span",{children:"Inventory"})]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("a",{href:"#",children:[Object(O.jsx)("span",{className:"fas fa-user-circle"}),Object(O.jsx)("span",{children:"Accounts"})]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("a",{href:"#",children:[Object(O.jsx)("span",{className:"fas fa-tasks"}),Object(O.jsx)("span",{children:"Task"})]})})]})})]}),Object(O.jsxs)("div",{className:"main-content",children:[Object(O.jsxs)("header",{children:[Object(O.jsxs)("h2",{children:[Object(O.jsx)("label",{for:"nav-toggle",children:Object(O.jsx)("span",{class:"fas fa-bars"})}),"Dashboard"]}),Object(O.jsxs)("div",{class:"search-wrapper",children:[Object(O.jsx)("span",{class:"fas fa-search",children:" "}),Object(O.jsx)("input",{type:"search",placeholder:"Search..."})]}),Object(O.jsxs)("div",{class:"user-wrapper",children:[Object(O.jsx)("img",{src:"https://bit.ly/3bvT89p",width:"40px",height:"40px",alt:"profile-img"}),Object(O.jsxs)("div",{class:"",children:[Object(O.jsx)("h4",{children:"Ayan Khan"}),Object(O.jsx)("small",{children:"Super Admin"})]})]})]}),Object(O.jsxs)("main",{children:[Object(O.jsxs)("div",{className:"cards",children:[Object(O.jsxs)("div",{className:"card-single",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"50"}),Object(O.jsx)("span",{children:"Customers"})]}),Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"fas fa-users"})})]}),Object(O.jsxs)("div",{className:"card-single",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"12"}),Object(O.jsx)("span",{children:"Projects"})]}),Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"fas fa-clipboard-list"})})]}),Object(O.jsxs)("div",{className:"card-single",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"15"}),Object(O.jsx)("span",{children:"Orders"})]}),Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"fas fa-shopping-cart"})})]}),Object(O.jsxs)("div",{className:"card-single",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"$50K"}),Object(O.jsx)("span",{children:"Income"})]}),Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"fas fa-wallet"})})]})]}),Object(O.jsxs)("div",{className:"recent-grid",children:[Object(O.jsx)("div",{className:"projects",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("div",{className:"card-header",children:[Object(O.jsx)("h2",{children:"Recent Projects"}),Object(O.jsxs)("button",{children:["See all ",Object(O.jsx)("span",{className:"fas fa-arrow-right"})," "]})]}),Object(O.jsx)("div",{className:"card-body",children:Object(O.jsx)("div",{className:"table-responsive",children:Object(O.jsxs)("table",{width:"100%",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Project Title"}),Object(O.jsx)("td",{children:"Department"}),Object(O.jsx)("td",{children:"Status"})]})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Website"}),Object(O.jsx)("td",{children:"Frontend"}),Object(O.jsxs)("td",{children:[Object(O.jsx)("span",{className:"status purple"}),"Review"]})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Website"}),Object(O.jsx)("td",{children:"Frontend"}),Object(O.jsxs)("td",{children:[Object(O.jsx)("span",{className:"status orange"}),"Pending"]})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Website"}),Object(O.jsx)("td",{children:"Frontend"}),Object(O.jsxs)("td",{children:[Object(O.jsx)("span",{className:"status pink"}),"In Progress"]})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Website"}),Object(O.jsx)("td",{children:"Frontend"}),Object(O.jsxs)("td",{children:[Object(O.jsx)("span",{className:"status purple"}),"Review"]})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Website"}),Object(O.jsx)("td",{children:"Frontend"}),Object(O.jsxs)("td",{children:[Object(O.jsx)("span",{className:"status pink"}),"In Progress"]})]})]})]})})})]})}),Object(O.jsx)("div",{className:"customers",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("div",{className:"card-header",children:[Object(O.jsx)("h2",{children:"New Customers"}),Object(O.jsxs)("button",{children:["See all ",Object(O.jsx)("span",{className:"fas fa-arrow-right"})," "]})]}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsxs)("div",{className:"customer",children:[Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("img",{src:"https://bit.ly/3bvT89p",height:"40px",width:"40px",alt:"customer"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Ayan Khan"}),Object(O.jsx)("small",{children:"CEO"})]})]}),Object(O.jsxs)("div",{className:"contact",children:[Object(O.jsx)("span",{className:"fas fa-user-circle"}),Object(O.jsx)("span",{className:"fas fa-comment"}),Object(O.jsx)("span",{className:"fas fa-phone-alt"})]})]}),Object(O.jsxs)("div",{className:"customer",children:[Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("img",{src:"https://bit.ly/3bvT89p",height:"40px",width:"40px",alt:"customer"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Ayan Khan"}),Object(O.jsx)("small",{children:"CEO"})]})]}),Object(O.jsxs)("div",{className:"contact",children:[Object(O.jsx)("span",{className:"fas fa-user-circle"}),Object(O.jsx)("span",{className:"fas fa-comment"}),Object(O.jsx)("span",{className:"fas fa-phone-alt"})]})]}),Object(O.jsxs)("div",{className:"customer",children:[Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("img",{src:"https://bit.ly/3bvT89p",height:"40px",width:"40px",alt:"customer"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Ayan Khan"}),Object(O.jsx)("small",{children:"CEO"})]})]}),Object(O.jsxs)("div",{className:"contact",children:[Object(O.jsx)("span",{className:"fas fa-user-circle"}),Object(O.jsx)("span",{className:"fas fa-comment"}),Object(O.jsx)("span",{className:"fas fa-phone-alt"})]})]}),Object(O.jsxs)("div",{className:"customer",children:[Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("img",{src:"https://bit.ly/3bvT89p",height:"40px",width:"40px",alt:"customer"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Ayan Khan"}),Object(O.jsx)("small",{children:"CEO"})]})]}),Object(O.jsxs)("div",{className:"contact",children:[Object(O.jsx)("span",{className:"fas fa-user-circle"}),Object(O.jsx)("span",{className:"fas fa-comment"}),Object(O.jsx)("span",{className:"fas fa-phone-alt"})]})]}),Object(O.jsxs)("div",{className:"customer",children:[Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("img",{src:"https://bit.ly/3bvT89p",height:"40px",width:"40px",alt:"customer"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Ayan Khan"}),Object(O.jsx)("small",{children:"CEO"})]})]}),Object(O.jsxs)("div",{className:"contact",children:[Object(O.jsx)("span",{className:"fas fa-user-circle"}),Object(O.jsx)("span",{className:"fas fa-comment"}),Object(O.jsx)("span",{className:"fas fa-phone-alt"})]})]}),Object(O.jsxs)("div",{className:"customer",children:[Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("img",{src:"https://bit.ly/3bvT89p",height:"40px",width:"40px",alt:"customer"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Ayan Khan"}),Object(O.jsx)("small",{children:"CEO"})]})]}),Object(O.jsxs)("div",{className:"contact",children:[Object(O.jsx)("span",{className:"fas fa-user-circle"}),Object(O.jsx)("span",{className:"fas fa-comment"}),Object(O.jsx)("span",{className:"fas fa-phone-alt"})]})]}),Object(O.jsxs)("div",{className:"customer",children:[Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("img",{src:"https://bit.ly/3bvT89p",height:"40px",width:"40px",alt:"customer"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Ayan Khan"}),Object(O.jsx)("small",{children:"CEO"})]})]}),Object(O.jsxs)("div",{className:"contact",children:[Object(O.jsx)("span",{className:"fas fa-user-circle"}),Object(O.jsx)("span",{className:"fas fa-comment"}),Object(O.jsx)("span",{className:"fas fa-phone-alt"})]})]})]})]})})]})]})]})]})},Oe={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",height:"600px",width:"1100px",transform:"translate(-50%, -50%)"}};var xe=function(){return Object(O.jsx)(o.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(f.a,{exact:!0,path:"/style/add",children:Object(O.jsx)(be.a,{isOpen:"true",style:Oe,children:Object(O.jsx)(k,{})})}),Object(O.jsx)(f.a,{exact:!0,path:"/style/edit/:styleCode",children:Object(O.jsx)(be.a,{isOpen:"true",style:Oe,children:Object(O.jsx)(F,{})})}),Object(O.jsx)(f.a,{exact:!0,path:"/sku/add/skuCode",children:Object(O.jsx)(be.a,{isOpen:"true",style:Oe,children:Object(O.jsx)(I,{})})}),Object(O.jsx)(f.a,{exact:!0,path:"/size/add",children:Object(O.jsx)(be.a,{isOpen:"true",style:Oe,children:Object(O.jsx)(_,{})})}),Object(O.jsx)(f.a,{exact:!0,path:"/Dashboard",children:Object(O.jsx)(ie,{})}),Object(O.jsx)(f.a,{exact:!0,path:"/Onboarding",children:Object(O.jsx)(he,{})}),Object(O.jsx)(f.a,{exact:!0,path:"/MarketPlaceHealth",children:Object(O.jsx)(oe,{})}),Object(O.jsxs)(f.a,{exact:!0,path:"/",children:[Object(O.jsx)("div",{className:"sidebar",children:Object(O.jsx)(G,{})}),Object(O.jsx)("div",{className:"home",children:Object(O.jsx)(p,{})})]})]})})},ue=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,369)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),l(e),n(e)}))};n.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(xe,{})}),document.getElementById("root")),ue()},85:function(e,t,s){}},[[342,1,2]]]);
//# sourceMappingURL=main.b375bd45.chunk.js.map