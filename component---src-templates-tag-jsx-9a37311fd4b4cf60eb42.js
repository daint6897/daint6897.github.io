(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return k}));var a=n(1),r=n.n(a),o=n(0),s=n.n(o),i=n(104),c=n.n(i),l=n(248),p=n(33),u=n.n(p),m=n(240),g=n(247),h=n(241),f=n(243),d=n(244),v=n(245),E=n(246),y=n(307),N=n(308),x=n(242),C=n(329),O=n(239),w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){var n=t.state.menuOpen;e.stopPropagation(),n?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.data.authors,a=e.nodes,r=e.pageContext,o=r.tag,i=r.page,p=r.pages,w=r.total,k=r.limit,b=r.prev,P=r.next,M=this.state.menuOpen;return s.a.createElement(O.a,{location:t},s.a.createElement(m.a,{isOpen:M},s.a.createElement(c.a,{title:'Posts tagged as "'+o+'" | '+u.a.siteTitle}),s.a.createElement(g.a,{config:u.a,onClose:this.handleOnClose}),s.a.createElement(h.a,null,s.a.createElement("div",{className:"tag-template"},s.a.createElement(f.a,{className:"tag-head",cover:o.featureImage},s.a.createElement(d.a,null,s.a.createElement(v.a,{logo:u.a.siteLogo,title:u.a.siteTitle}),s.a.createElement(E.a,{navigation:u.a.siteNavigation,onClick:this.handleOnClick})),s.a.createElement("div",{className:"vertical"},s.a.createElement("div",{className:"main-header-content inner"},s.a.createElement(y.a,{text:o}),s.a.createElement(N.a,{text:o.description||"A "+w+"-post collection"})))),s.a.createElement(C.a,{page:i,pages:p,total:w,limit:k,prev:b,next:P},s.a.createElement(l.a,{postEdges:a,postAuthors:n.edges}))),s.a.createElement(x.a,{copyright:u.a.copyright,promoteGatsby:u.a.promoteGatsby}))))},t}(s.a.Component),k="333490751";t.default=w},291:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(0),s=n.n(o),i=n(38),c=n.n(i),l=(n(309),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("content",n);return s.a.createElement("main",{id:"content",className:a,role:"main"},t)},t}(s.a.Component));t.a=l},307:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(0),s=n.n(o),i=(n(333),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?s.a.createElement("h1",{className:"page-title"},e):null},t}(s.a.Component));t.a=i},308:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(0),s=n.n(o),i=(n(334),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?s.a.createElement("h2",{className:"page-description"},e):null},t}(s.a.Component));t.a=i},329:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(0),s=n.n(o),i=n(291),c=(n(21),n(71)),l=n.n(c),p=n(13),u=(n(335),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.url,n=e.text,a=e.className,r=l()(e,["url","text","className"]);if(t){var o=a?"nav-link "+a:"nav-link";return delete r.style,s.a.createElement(p.Link,Object.assign({to:t,className:o},r),n)}return null},t}(s.a.Component)),m=(n(336),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next;return s.a.createElement("nav",{className:"pagination"},s.a.createElement(u,{className:"newer-posts",url:a,text:"← Newer Posts"}),s.a.createElement("span",{className:"page-number"},"Page "+t+" of "+n),s.a.createElement(u,{className:"older-posts",url:r,text:"Older Posts →"}))},t}(s.a.Component)),g=(n(337),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next,o=e.children,c="";return t>1&&(c+=" paged"),s.a.createElement(i.a,{className:c},s.a.createElement("div",{className:"extra-pagination inner"},s.a.createElement(m,{page:t,pages:n,prev:a,next:r})),o,s.a.createElement(m,{page:t,pages:n,prev:a,next:r}))},t}(s.a.Component));t.a=g}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-9a37311fd4b4cf60eb42.js.map