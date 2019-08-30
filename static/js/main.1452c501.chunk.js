(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){e.exports=n(114)},114:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"todoList",function(){return W});var r={};n.r(r),n.d(r,"addTodo",function(){return Ee}),n.d(r,"completeTodo",function(){return fe}),n.d(r,"uncompleteTodo",function(){return Oe}),n.d(r,"deleteTodo",function(){return be});var o,c,l=n(0),i=n(10),d=n(49),u=n(24),m=n(81),s=n(20),p=n(36),E=n(164),f=n(159),O=n(165),b=n(166),h=n(167),g=n(168),v=n(169),T=n(156),j=n(173),y=n(176),C=n(170),x=n(175),D=n(67),w=n.n(D),L=n(91),k=n.n(L),N=n(92),_=n.n(N),M=n(117),P=n(174),A=n(29),I=n(82),B=n(15),F=(n(83),n(84)),z=n(68),R=n(64),U=n(47),H=n(60);!function(e){e[e.ADD_TODO=0]="ADD_TODO",e[e.DELETE_TODO=1]="DELETE_TODO",e[e.COMPLETE_TODO=2]="COMPLETE_TODO",e[e.UNCOMPLETE_TODO=3]="UNCOMPLETE_TODO"}(o||(o={}));var S,J,W=(S=[],c={},Object(s.a)(c,o.ADD_TODO,function(e,t){return[].concat(Object(H.a)(e),[t.payload])}),Object(s.a)(c,o.COMPLETE_TODO,function(e,t){return e.map(function(e){return e.id===t.payload?Object(U.a)({},e,{completed:!0}):e})}),Object(s.a)(c,o.UNCOMPLETE_TODO,function(e,t){return e.map(function(e){return e.id===t.payload?Object(U.a)({},e,{completed:!1}):e})}),Object(s.a)(c,o.DELETE_TODO,function(e,t){return e.filter(function(e){return e.id!==t.payload})}),J=c,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return J.hasOwnProperty(t.type)?J[t.type](e,t):e}),K={key:"root",version:1,storage:I,blacklist:[]},Y=(Object(F.createLogger)(),Object(A.a)()),q=Object(B.applyMiddleware)(R.a);var G=Object(z.a)(K,Object(B.combineReducers)(Object(U.a)({},a))),Q=n(150),V=n(94),X=n(95),Z=n(115);var $=function(e,t,n){return n[t[e]]},ee=Object(Z.a)(function(e){return{box:function(e){return{display:"flex",alignItems:"center",borderRadius:8,background:$("color",e,{red:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",blue:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"}),height:e.size,width:e.size}},text:{color:"white"}}}),te=function(e){e.size;var t=Object(V.a)(e,["size"]),n=ee(e);return l.createElement(X.a,Object.assign({className:n.box},t),l.createElement(d.a,{variant:"subtitle1",className:n.text},"I'm an example how to handle dynamic styles based on props"))};var ne=Object(M.a)({root:{height:"100%",textAlign:"center",paddingTop:20,paddingLeft:15,paddingRight:15},centerContainer:{flex:1,height:"90%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},button:{marginTop:20}}),ae=function(e){var t=ne(),n=l.useState("red"),a=Object(p.a)(n,2),r=a[0],o=a[1],c=Object(u.d)(function(e){return e.todoList});return l.createElement("div",{className:t.root},l.createElement(d.a,{variant:"h4",gutterBottom:!0},"You have ",c.length," TODOs in your list!"),l.createElement("div",{className:t.centerContainer},l.createElement(te,{size:300,color:r}),l.createElement(Q.a,{className:t.button,onClick:function(){return o("red"===r?"blue":"red")},variant:"outlined",color:"primary"},"Change Color")))},re=n(161),oe=n(151),ce=n(152),le=n(153),ie=n(154),de=n(155),ue=n(172),me=n(88),se=n.n(me);function pe(e,t){var n=Object(u.c)();return Object(l.useMemo)(function(){return Array.isArray(e)?e.map(function(e){return Object(B.bindActionCreators)(e,n)}):Object(B.bindActionCreators)(e,n)},t?[n].concat(Object(H.a)(t)):t)}function Ee(e){return{type:o.ADD_TODO,payload:e}}function fe(e){return function(t,n){t({type:o.COMPLETE_TODO,payload:e})}}function Oe(e){return{type:o.UNCOMPLETE_TODO,payload:e}}function be(e){return{type:o.DELETE_TODO,payload:e}}var he=Object(M.a)({paper:{width:"100%",minWidth:260,display:"inline-block"},table:{width:"100%"}}),ge=function(e){var t=he(),n=Object(u.d)(function(e){return e.todoList}),a=pe(r);return l.createElement(X.a,{className:t.paper},l.createElement(oe.a,{className:t.table},l.createElement(ce.a,null,l.createElement(le.a,null,l.createElement(ie.a,{padding:"default"},"Completed"),l.createElement(ie.a,{padding:"default"},"Text"),l.createElement(ie.a,{padding:"default"},"Delete"))),l.createElement(de.a,null,n.map(function(e){return l.createElement(le.a,{key:e.id,hover:!0,onClick:function(t){var n;(n=e).completed?a.uncompleteTodo(n.id):a.completeTodo(n.id)}},l.createElement(ie.a,{padding:"none"},l.createElement(ue.a,{checked:e.completed})),l.createElement(ie.a,{padding:"none"},e.text),l.createElement(ie.a,{padding:"none"},l.createElement(T.a,{"aria-label":"Delete",color:"default",onClick:function(){return a.deleteTodo(e.id)}},l.createElement(se.a,null))))}))))},ve=n(157),Te=n(158),je=n(171),ye=n(160);var Ce=Object(M.a)({textField:{width:"80%",margin:20}}),xe=function(e){var t=e.open,n=e.onClose,a=Ce(),o=l.useState(""),c=Object(p.a)(o,2),i=c[0],d=c[1],u=pe(r),m=function(){u.addTodo({id:Math.random(),completed:!1,text:i}),n(),d("")};return l.createElement(ve.a,{open:t,onClose:m},l.createElement(Te.a,null,"Add a new TODO"),l.createElement(je.a,{id:"multiline-flexible",multiline:!0,value:i,onChange:function(e){d(e.target.value)},className:a.textField}),l.createElement(ye.a,null,l.createElement(Q.a,{color:"primary",onClick:m},"OK")))};var De=Object(M.a)(function(e){return{root:Object(s.a)({padding:20},e.breakpoints.down("md"),{paddingTop:50,paddingLeft:15,paddingRight:15}),buttonContainer:{width:"100%",display:"flex",justifyContent:"flex-end"},button:{marginBottom:15}}}),we=function(e){var t=De(),n=l.useState(!1),a=Object(p.a)(n,2),r=a[0],o=a[1];return l.createElement(re.a,{container:!0,className:t.root},l.createElement(xe,{open:r,onClose:function(){o(!1)}}),l.createElement(re.a,{item:!0,xs:6},l.createElement(d.a,{variant:"h4",gutterBottom:!0},"Todo List")),l.createElement(re.a,{item:!0,xs:6},l.createElement("div",{className:t.buttonContainer},l.createElement(Q.a,{className:t.button,variant:"contained",color:"secondary",onClick:function(){o(!0)}},"Add Todo"))),l.createElement(re.a,{item:!0,xs:12},l.createElement(ge,null)))},Le=n(163),ke=n(93),Ne=n(162),_e=Object(ke.a)({palette:{primary:{light:"#e5e5e5",main:"#727272",dark:"#363839",contrastText:"#fff"},secondary:{light:"#ff5e50",main:"#e41e26",dark:"#a90000",contrastText:"#fff"}}});var Me=function(e){return function(t){return l.createElement(Ne.a,{theme:_e},l.createElement(Le.a,null),l.createElement(e,t))}};function Pe(){var e=Be();return l.createElement("div",{className:e.content},l.createElement(P.a,{exact:!0,path:"/",component:ae}),l.createElement(P.a,{exact:!0,path:"/home",component:ae}),l.createElement(P.a,{exact:!0,path:"/todo",component:we}))}function Ae(e){var t=Be();return l.createElement("div",null,l.createElement("div",{className:t.drawerHeader}),l.createElement(E.a,null),l.createElement(f.a,null,l.createElement(O.a,{button:!0,onClick:function(){return Y.push("/")}},l.createElement(b.a,null,l.createElement(k.a,null)),l.createElement(h.a,{primary:"Home"}))),l.createElement(E.a,null),l.createElement(f.a,null,l.createElement(O.a,{button:!0,onClick:function(){return Y.push("/todo")}},l.createElement(b.a,null,l.createElement(Ie,{todoList:e.todoList})),l.createElement(h.a,{primary:"Todo"}))))}function Ie(e){var t=e.todoList.filter(function(e){return!1===e.completed});return t.length>0?l.createElement(C.a,{color:"secondary",badgeContent:t.length},l.createElement(w.a,null)):l.createElement(w.a,null)}var Be=Object(M.a)(function(e){return{root:{width:"100%",height:"100%",zIndex:1,overflow:"hidden"},appFrame:{position:"relative",display:"flex",width:"100%",height:"100%"},appBar:{zIndex:e.zIndex.drawer+1,position:"absolute"},navIconHide:Object(s.a)({},e.breakpoints.up("md"),{display:"none"}),drawerHeader:e.mixins.toolbar,drawerPaper:Object(s.a)({width:250,backgroundColor:e.palette.background.default},e.breakpoints.up("md"),{width:240,position:"relative",height:"100%"}),content:Object(s.a)({backgroundColor:e.palette.background.default,width:"100%",height:"calc(100% - 56px)",marginTop:56},e.breakpoints.up("sm"),{height:"calc(100% - 64px)",marginTop:64})}});var Fe=Object(u.b)(function(e){return{todoList:e.todoList}})(Me(Object(x.a)()(function(e){var t=Be(),n=l.useState(!0),a=Object(p.a)(n,2),r=a[0],o=a[1];if(!e)return null;var c=function(){o(!r)};return l.createElement(P.b,{history:Y},l.createElement("div",{className:t.root},l.createElement("div",{className:t.appFrame},l.createElement(g.a,{className:t.appBar},l.createElement(v.a,null,l.createElement(T.a,{color:"inherit","aria-label":"open drawer",onClick:c,className:t.navIconHide},l.createElement(_.a,null)),l.createElement(d.a,{variant:"h6",color:"inherit",noWrap:Object(x.c)("sm",e.width)},"Create-React-App with Material-UI, Typescript, Redux and Routing"))),l.createElement(j.a,{mdUp:!0},l.createElement(y.a,{variant:"temporary",anchor:"left",open:r,classes:{paper:t.drawerPaper},onClose:c,ModalProps:{keepMounted:!0}},l.createElement(Ae,{todoList:e.todoList}))),l.createElement(j.a,{smDown:!0},l.createElement(y.a,{variant:"permanent",open:!0,classes:{paper:t.drawerPaper}},l.createElement(Ae,{todoList:e.todoList}))),l.createElement(Pe,null))))}))),ze=function(){var e=Object(B.createStore)(G,{},q);return{store:e,persistor:Object(z.b)(e)}}(),Re=ze.persistor,Ue=ze.store;var He=function(){return l.createElement(u.a,{store:Ue},l.createElement(m.a,{loading:l.createElement(d.a,null,"Loading..."),persistor:Re},l.createElement(Fe,null)))},Se=document.getElementById("root");i.render(l.createElement(He,null),Se)}},[[102,1,2]]]);
//# sourceMappingURL=main.1452c501.chunk.js.map