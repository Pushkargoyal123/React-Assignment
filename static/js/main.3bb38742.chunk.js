(this.webpackJsonpyoutube_mern=this.webpackJsonpyoutube_mern||[]).push([[0],{35:function(e,t,i){},36:function(e,t,i){},43:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i.n(n),r=i(6),c=i.n(r),o=(i(35),i(4)),a=(i(36),i(63)),d=i(1);var l=function(e){var t=Object(n.useState)(!1),i=Object(o.a)(t,2),s=i[0],r=i[1],c=Object(n.useState)(!1),l=Object(o.a)(c,2),b=l[0],j=l[1];return Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("div",{style:{height:"100%"},children:Object(d.jsxs)("div",{style:{background:"#dfe6e9",padding:"40px",height:"100vh"},children:[Object(d.jsxs)("div",{className:"shadow-lg",style:{background:"white",display:"flex",padding:"10px"},children:[Object(d.jsx)("img",{alt:"shahrukh",src:"/shahrukh.jpg",style:{width:50,height:50,borderRadius:"50%"}}),Object(d.jsxs)("div",{style:{margin:"0 10px"},children:[Object(d.jsx)("div",{style:{fontWeight:"700"},children:"Hi Reader!"}),Object(d.jsx)("div",{style:{fontSize:"16px",color:"grey"},children:"How's Your News"})]})]}),Object(d.jsxs)("div",{className:"shadow-lg",style:b?{display:"none"}:{background:"white",margin:"20px 0"},children:[Object(d.jsx)("div",{style:{fontWeight:"700"},children:"View Toggle"}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"center",padding:10,margin:"0 10px"},children:[Object(d.jsx)("i",{onClick:function(){r(!0),e.type(!0)},style:s?{background:"#81ecec",padding:10,fontSize:"30px",width:50,cursor:"pointer",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}:{background:"#dfe6e9",padding:10,fontSize:"30px",width:50,cursor:"pointer",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"},className:"fas fa-grip-horizontal"}),Object(d.jsx)("i",{onClick:function(){r(!1),e.type(!1)},style:s?{background:"#dfe6e9",padding:10,fontSize:"30px",width:50,cursor:"pointer",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}:{background:"#81ecec",padding:10,fontSize:"30px",width:50,cursor:"pointer",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"},className:"fas fa-grip-vertical"})]})]}),Object(d.jsxs)("div",{className:"shadow-lg",style:{background:"white",margin:"20px 0",padding:"10px"},children:[Object(d.jsx)("div",{style:{fontWeight:"700"},children:"Have A Feedback?"}),Object(d.jsx)("div",{onClick:function(){j(!b)},style:b?{display:"flex",cursor:"pointer",justifyContent:"center",padding:10,background:"pink",margin:"10px 10px"}:{display:"flex",cursor:"pointer",justifyContent:"center",padding:10,background:"#81ecec",margin:"10px 10px"},children:"Write Something"})]})]})}),Object(d.jsx)("div",{style:b?{background:"#dfe6e9",position:"absolute",right:"35%",minHeight:"100vh",borderRadius:"10px",padding:"30px",paddingRight:"140px"}:{width:0,overflow:"hidden"},children:Object(d.jsxs)("form",{children:[Object(d.jsx)("div",{style:{fontWeight:"600"},children:"Thank You so much for taking the time!"}),Object(d.jsx)("div",{style:{color:"grey"},children:"Please provide the below Details"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:{textAlign:"left"},children:"First Name"}),Object(d.jsx)("div",{style:{textAlign:"left"},children:Object(d.jsx)("input",{required:!0,className:"shadow-lg",style:{outline:"none",border:"none"}})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:{textAlign:"left"},children:"Last Name"}),Object(d.jsx)("div",{style:{textAlign:"left"},children:Object(d.jsx)("input",{required:!0,className:"shadow-lg",style:{outline:"none",border:"none"}})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:{textAlign:"left"},children:"Address"}),Object(d.jsx)("div",{style:{textAlign:"left"},children:Object(d.jsx)("textarea",{required:!0,className:"shadow-lg",style:{outline:"none",border:"none"},rows:"5",cols:"50"})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:{textAlign:"left"},children:"Country"}),Object(d.jsx)("div",{style:{textAlign:"left"},children:Object(d.jsx)("input",{required:!0,className:"shadow-lg",style:{outline:"none",border:"none"}})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:{textAlign:"left"},children:"Email ID"}),Object(d.jsx)("div",{style:{textAlign:"left"},children:Object(d.jsx)("input",{required:!0,className:"shadow-lg",style:{outline:"none",border:"none"}})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:{textAlign:"left"},children:"Phone NO"}),Object(d.jsx)("div",{style:{textAlign:"left"},children:Object(d.jsx)("input",{required:!0,className:"shadow-lg",style:{outline:"none",border:"none"}})})," ",Object(d.jsx)("br",{}),Object(d.jsx)(a.a,{type:"submit",className:"shadow-lg",variant:"contained",style:{background:"#00b894",color:"white"},children:"Submit Feedback"})]})})]})},b=i(23),j=i.n(b),p=i(27),u=i(64),x=i(62),h=Object(x.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function g(){return Math.round(20*Math.random())-10}function O(){var e=50+g(),t=50+g();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var f=function(e){var t=h(),i=Object(n.useState)(!1),s=Object(o.a)(i,2),r=s[0],c=s[1],a=Object(n.useState)(!1),l=Object(o.a)(a,2),b=l[0],j=l[1],p=Object(n.useState)(O),x=Object(o.a)(p,1)[0],g=Object(d.jsxs)("div",{style:x,className:t.paper,children:[Object(d.jsx)("h2",{id:"simple-modal-title",children:e.title}),Object(d.jsx)("p",{id:"simple-modal-description",children:e.body})]});return Object(d.jsxs)("div",{style:r?{display:"none",width:"100%",cursor:"pointer"}:{margin:"10px 50px",width:"100%",cursor:"pointer"},role:"alert","aria-live":"assertive","aria-atomic":"true",children:[Object(d.jsxs)("div",{className:"toast-header",style:{height:35},children:[Object(d.jsx)("img",{src:"...",className:"rounded me-2",alt:"..."}),Object(d.jsx)("strong",{className:"me-auto",style:{color:"black"},children:e.title}),Object(d.jsxs)("button",{style:{border:"none"},onClick:function(){return c(!r)},type:"button","aria-label":"Close",children:[" ",Object(d.jsx)("i",{style:{color:"red",fontSize:"25px"},className:"fas fa-times"})]})]}),Object(d.jsx)("div",{onClick:function(){j(!0)},className:"toast-body",style:{background:"white"},children:e.body}),Object(d.jsx)(u.a,{open:b,onClose:function(){j(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:g})]})},y=Object(x.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function m(){return Math.round(20*Math.random())-10}function v(){var e=50+m(),t=50+m();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var w=function(e){var t=y(),i=Object(n.useState)(!1),s=Object(o.a)(i,2),r=s[0],c=s[1],a=Object(n.useState)(!1),l=Object(o.a)(a,2),b=l[0],j=l[1],p=Object(n.useState)(v),x=Object(o.a)(p,1)[0],h=Object(d.jsxs)("div",{style:x,className:t.paper,children:[Object(d.jsx)("h2",{id:"simple-modal-title",children:e.title}),Object(d.jsx)("p",{id:"simple-modal-description",children:e.body})]});return Object(d.jsxs)("div",{style:r?{display:"none",cursor:"pointer"}:{cursor:"pointer"},children:[Object(d.jsxs)("div",{style:{margin:20,background:"white",textAlign:"left",padding:20,boxShadow:"2px 2px 10px 0px black",position:"relative"},children:[Object(d.jsx)("i",{onClick:function(){return c(!r)},style:{position:"absolute",right:"10px",color:"red",fontSize:"25px",cursor:"pointer"},className:"fas fa-times"}),Object(d.jsx)("div",{style:{fontWeight:700,background:"#ecf0f1",padding:"5px 10px"},children:e.title}),Object(d.jsx)("div",{onClick:function(){j(!0)},style:{color:"grey"},children:e.body}),Object(d.jsx)("img",{alt:"information",src:"",style:{width:"100%"}})]}),Object(d.jsx)(u.a,{open:b,onClose:function(){j(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:h})]})};var k=function(e){var t=Object(n.useState)([]),i=Object(o.a)(t,2),s=i[0],r=i[1];function c(){return(c=Object(p.a)(j.a.mark((function e(){var t,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:i=e.sent,r(i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[]),Object(d.jsx)("div",{style:{display:"flex",flexWrap:"wrap",background:"#bdc3c7",width:"80%"},children:s.map((function(t,i){return e.view?Object(d.jsx)("div",{style:{width:400},children:Object(d.jsx)(w,{title:t.title,body:t.body},i)}):Object(d.jsx)(f,{title:t.title,body:t.body},i)}))})};var N=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),i=t[0],s=t[1];return Object(d.jsxs)("div",{className:"App",style:{display:"flex",height:"100%",background:"#dfe6e9"},children:[Object(d.jsx)(l,{type:function(e){s(e)}}),Object(d.jsx)(k,{view:i})]})},S=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,66)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),S()}},[[43,1,2]]]);
//# sourceMappingURL=main.3bb38742.chunk.js.map