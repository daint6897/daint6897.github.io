(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{225:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(231),r=a(137);var c=function(){return l.a.createElement("div",{className:"container my-4"},l.a.createElement("h2",{className:"card-title text-info font-weight-bold"},"The 404 Blog"),l.a.createElement("p",{className:"card-subtitle mt-2"},"Crafted for developers , hoping they can learn something valuable out of it."),l.a.createElement(r.Link,{className:"btn btn-info my-3",to:"about"},"Know More"),l.a.createElement("hr",null),l.a.createElement("h4",null,"Built with"),l.a.createElement("a",{href:"https://reactjs.org/"},l.a.createElement("img",{className:"mr-4 mt-3",src:"https://img.icons8.com/ios/40/00D8FF/react-native-filled.png",alt:"build-with-icon-1"})),l.a.createElement("a",{href:"http://gatsbyjs.org/"},l.a.createElement("img",{className:"mr-4 mt-3",width:"40px",src:"https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png",alt:"build-with-icon-2"})),l.a.createElement("a",{href:"https://www.netlify.com/"},l.a.createElement("img",{className:"mr-4 mt-3",width:"40px",src:"https://www.netlify.com/img/press/logos/logomark.png",alt:"build-with-icon-3"})),l.a.createElement("a",{href:"https://www.markdownguide.org/"},l.a.createElement("img",{className:"mr-4 mt-3",src:"https://img.icons8.com/office/40/000000/markdown.png",alt:"build-with-icon-4"})),l.a.createElement("h6",null,l.a.createElement("br",null),"Open Sourced on ",l.a.createElement("a",{href:"https://github.com"},"Github")))},s=a(241),m=a(235),i=a(229),u=a.n(i),d=function(){var e=s.data;return l.a.createElement("div",{className:"col-lg-8"},e.allMarkdownRemark.edges.map(function(e){var t=e.node;return l.a.createElement(m.a,{slug:t.frontmatter.slug,authorName:t.frontmatter.author,title:t.frontmatter.title,description:t.frontmatter.description,timeStamp:t.frontmatter.date})}),l.a.createElement(u.a,{fade:!0,className:"my-3 float-right btn text-info shadow-sm",to:"blog",duration:.5},"View All →"))},g=a(233),h=a.n(g);t.default=function(){return l.a.createElement(o.a,null,l.a.createElement(h.a,null,l.a.createElement("title",null,"Home | The 404 Blog")),l.a.createElement("div",{className:"container abs"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(c,null)),l.a.createElement(d,null))))}},230:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=Object(n.useState)("light"),t=e[0],a=e[1];return Object(n.useEffect)(function(){var e=localStorage.getItem("theme");e&&a(e)},{}),{theme:t,toggleTheme:function(){"dark"!==t?(localStorage.setItem("theme","dark"),a("dark")):(localStorage.setItem("theme","light"),a("light"))}}}},231:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(229),r=a.n(o),c={color:"#00F0FF",fontSize:"24px",fontWeight:"600"},s={color:"#FFF"},m=function(e){var t=e.children,a=e.to;return l.a.createElement(r.a,{to:a,activeStyle:s,style:c,fade:!0,duration:1},t)};var i=function(){return l.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light shadow-sm ",style:{backgroundColor:"#00BCD4"}},l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{class:"nav justify-content-center container"},l.a.createElement("li",{class:"nav-item mr-5"},l.a.createElement(m,{class:"nav-link",to:"/"},"Home")),l.a.createElement("li",{class:"nav-item mr-5"},l.a.createElement(m,{class:"nav-link",to:"/blog"},"Blog")),l.a.createElement("li",{class:"nav-item mr-5"},l.a.createElement(m,{class:"nav-link",to:"/tags"},"Tags")),l.a.createElement("li",{class:"nav-item mr-5"},l.a.createElement(m,{class:"nav-link",to:"/search"},"Search")))))},u=(a(219),a(230));t.a=function(e){var t=e.children,a=Object(u.a)(),n=a.theme,o=a.toggleTheme;return l.a.createElement("div",{className:n},l.a.createElement(i,null),l.a.createElement("button",{className:"btn theme-toggle-button",onClick:o},"light"===n?("undefined"!=typeof window&&document.documentElement.style.setProperty("--bg-color","#FFF"),l.a.createElement("img",{src:"https://img.icons8.com/ios-glyphs/24/FFFFFF/moon-symbol.png",alt:"moon-icon"})):("undefined"!=typeof window&&document.documentElement.style.setProperty("--bg-color","#12181B"),l.a.createElement("img",{src:"https://img.icons8.com/android/24/FFFFFF/sun.png",alt:"sun-icon"}))),l.a.createElement("main",null,t),l.a.createElement("footer",{className:"text-center pt-4 "+n},l.a.createElement("h5",null,"Created and Presented By ",l.a.createElement("a",{className:"font-weight-bold text-info",href:"https://www.github.com/mohanmonu777"},"Mohan")),l.a.createElement("h6",null,"Copyright © The 404 Blog | 2019"),l.a.createElement("br",null)))}},235:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(229),r=a.n(o),c={fontWeight:"700"},s={color:"#00BCD4"},m=function(e){var t=e.children,a=e.to;return l.a.createElement(r.a,{style:s,to:a,className:"font-weight-bold",fade:!0},t)};t.a=function(e){var t=e.title,a=e.description,n=e.timeStamp,o=e.authorName,s=e.slug,i={color:"undefined"!=typeof window&&getComputedStyle(document.documentElement).getPropertyValue("--card-text-color"),textDecoration:"none"};return l.a.createElement(r.a,{style:i,to:s,cover:!0,bg:"#00BCD4"},l.a.createElement("div",{class:"card my-4"},l.a.createElement("div",{class:"card-body"},l.a.createElement("h5",{class:"card-title",style:c},t),l.a.createElement("p",{class:"card-text"},a),l.a.createElement("h6",{class:"card-subtitle text-muted"},l.a.createElement(m,{to:"/about"},o)," on ",n))))}},241:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"How to add Bootstrap to Gatsby",slug:"/blog/add-bootstrap-to-gatsby",date:"July 13, 2019",author:"Mohan",description:"In this post, you will understand how to add bootstrap to your gatsby project"}}},{node:{frontmatter:{title:"How to create Blog in less than 5 Minutes",slug:"/blog/create-blog-lessthan-5mins",date:"July 12, 2019",author:"Mohan",description:"In this post, you will see how to create an awesome blog in less than 5 minutes"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-8445fb8dd422a2333729.js.map