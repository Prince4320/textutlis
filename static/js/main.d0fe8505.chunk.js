(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),o=(a(14),a(1));a(16);var s=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-&{props.alert.type} alert-dismissible fade show",role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg)},i=a(2),m=a.n(i);function u(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},e.aboutText))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"lihgt")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"enable dark mode")))))}function d(e){var t=function(e){console.log(" on change"),s(e.target.value)},a=Object(n.useState)("Enter text here"),c=Object(o.a)(a,2),r=c[0],s=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading," "),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:t,style:{background:"light"===e.mode?"grey":"white",color:"dark"===e.mode?"black":"white"},id:"Mybox",rows:"8"}))),l.a.createElement("button",{className:"btn btn-primery mx-1",onClick:function(){var t=r.toUpperCase();s(t),e.showAlert("convert to upper case","success")}},"Convert to upper case "),l.a.createElement("button",{className:"btn btn-success mx-1",onClick:function(){console.log("Uppercase case clicked"+r);var e=r.toLowerCase();s(e)}},"Convert to lower  case "),l.a.createElement("button",{className:"btn btn-success mx-1",onClick:function(){console.log("Uppercase case clicked"+r);s("")}},"CLEAR"),l.a.createElement("button",{className:"btn btn-success mx-1",onClick:t}," handleOnChange"),l.a.createElement("button",{className:"btn btn-success mx-1",onClick:function(){var e=document.getElementById("Mybox");e.Select(),navigator.clipboard.writeText(e.value)}}," copy"),l.a.createElement("button",{className:"btn btn-success mx-1",onClick:function(){var e=r.split(/[ ]+/);s(e.join(" "))}}," remove extraspace"),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,"your text summary"),l.a.createElement("p",null,r.split(" ").length," words and ",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").length," minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something to previwe")))}u.prototypes={title:m.a.string.isRequired,aboutText:m.a.string},u.defaultProps={title:"set title here",aboutText:"about text here"};var b=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(o.a)(r,2),m=i[0],b=i[1],g=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},3e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{title:"TexTutList",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="grey",g("Dark Mode Is Enable","success")):(c("light"),document.body.style.backgroundColor="white",g("light Mode Is Enable","success"),document.title="TextUtils - light Mode")}}),l.a.createElement(s,{alert:m}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(d,{showAlert:g,heading:"enter here your title",mode:a})))},g=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,21)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),g()},5:function(e,t,a){e.exports=a(20)}},[[5,3,2]]]);
//# sourceMappingURL=main.d0fe8505.chunk.js.map