(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[0],{129:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(4),o=c.n(s),a=(c(53),c.p,c(54),c(5)),l=c(6),r=c(3),j=function(e){var t=e.selected;return Object(r.jsxs)("div",{style:t?{left:"4px",top:"4px",position:"absolute",zIndex:"1"}:{display:"none"},children:[Object(r.jsx)("svg",{style:{fill:"white",position:"absolute"},width:"24px",height:"24px",children:Object(r.jsx)("circle",{cx:"12.5",cy:"12.2",r:"8.292"})}),Object(r.jsx)("svg",{style:{fill:"#06befa",position:"absolute"},width:"24px",height:"24px",children:Object(r.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})})]})},b={transition:"transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"},u={transform:"translateZ(0px) scale3d(0.9, 0.9, 1)",transition:"transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"},d={backgroundColor:"#eee",cursor:"pointer",overflow:"hidden",position:"relative"},h=function(e){e.index;var t=e.photo,c=e.margin,i=e.direction,s=e.top,o=e.left,h=e.selected,p=Object(n.useState)(h),O=Object(l.a)(p,2),x=O[0],f=O[1],g=(100-30/t.width*100)/100,v=(100-30/t.height*100)/100;u.transform="translateZ(0px) scale3d(".concat(g,", ").concat(v,", 1)"),"column"===i&&(d.position="absolute",d.left=o,d.top=s);return Object(n.useEffect)((function(){f(h)}),[h]),Object(r.jsxs)("div",{style:Object(a.a)({margin:c,height:t.height,width:t.width},d),className:x?"":"not-selected",children:[Object(r.jsx)(j,{selected:!!x}),Object(r.jsx)("img",Object(a.a)(Object(a.a)({alt:t.title,style:x?Object(a.a)(Object(a.a)({},b),u):Object(a.a)({},b)},t),{},{onClick:function(e){f(!x)}})),Object(r.jsx)("style",{children:".not-selected:hover{outline:2px solid #06befa}"})]})},p=c(40),O=c(13),x=[{src:"./photos/IMG_1404.jpg",width:5,height:7,title:"DSC02576",alt:"DSC02576",key:"40673436833"}];var f=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(!1),o=Object(l.a)(s,2),j=o[0],b=o[1],u=Object(n.useState)(x),d=Object(l.a)(u,2),f=d[0],g=(d[1],Object(n.useState)(!1)),v=Object(l.a)(g,2),m=v[0],y=(v[1],Object(n.useState)(!1)),C=Object(l.a)(y,2),S=C[0],k=C[1],w=Object(n.useCallback)((function(e,t){t.photo;var c=t.index;i(c),b(!0)}),[]),I=Object(n.useCallback)((function(e){var t=e.index,c=e.left,n=e.top,i=e.key,s=e.photo;return Object(r.jsx)(h,{selected:!!m,margin:"2px",index:t,photo:s,left:c,top:n},i)}),[m]);return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:[!S&&Object(r.jsx)("button",{onClick:function(){return k(!0)},children:"enable selection"}),S&&Object(r.jsx)("button",{onClick:function(){return k(!1)},children:"done"})]}),Object(r.jsx)(p.a,{photos:f,onClick:w,direction:"column",renderImage:S?I:null}),Object(r.jsx)(O.b,{children:j?Object(r.jsx)(O.a,{onClose:function(){i(0),b(!1)},children:Object(r.jsx)(O.c,{currentIndex:c,views:f.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{srcset:e.srcSet,caption:e.title})}))})}):null})]})};var g=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App-header"}),Object(r.jsx)(f,{})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,131)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),i(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),v()},53:function(e,t,c){},54:function(e,t,c){}},[[129,1,2]]]);
//# sourceMappingURL=main.a1fb185b.chunk.js.map