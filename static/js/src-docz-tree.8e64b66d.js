(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/docz/Tree.mdx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),o=t.n(r),a=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./src/components/Node.tsx");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,n){return!n||"object"!==i(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,a,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,r["Component"]),t=n,(a=[{key:"renderNode",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.id,a=e.name,i=e.nodes;return o.a.createElement(c.a,{id:n,name:a,key:r||n,style:t?{padding:0}:{}},i&&i.map(this.renderNode.bind(this)))}},{key:"render",value:function(){var e=this;return this.props.nodes.map(function(n,t){return e.renderNode(n,t,!0)})}}])&&p(t.prototype,a),i&&p(t,i),n}(),l=d;try{d.displayName="Tree",d.__docgenInfo={description:"",displayName:"Tree",props:{nodes:{defaultValue:null,description:"",name:"nodes",required:!1,type:{name:"INode[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tree.tsx#Tree"]={docgenInfo:d.__docgenInfo,name:"Tree",path:"src/components/Tree.tsx#Tree"})}catch(e){}var u=t("./node_modules/docz/dist/index.m.js");function f(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components,t=f(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:n},o.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"tree"}},o.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#tree"}},o.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Tree"),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"properties"}},o.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},o.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),o.a.createElement(u.e,{of:l}),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"demo"}},o.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#demo"}},o.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Demo"),o.a.createElement(u.d,{__position:1,__code:"<Tree\n  nodes={[\n    {\n      id: 0,\n      name: 'Tree',\n      nodes: [\n        {\n          id: 1,\n          name: 'Branch',\n        },\n        {\n          id: 2,\n          name: 'Branch',\n        },\n        {\n          id: 3,\n          name: 'Branch',\n          nodes: [\n            {\n              id: 5,\n              name: 'Leaf',\n            },\n          ],\n        },\n      ],\n    },\n  ]}\n/>",__scope:{props:t,Tree:l}},o.a.createElement(l,{nodes:[{id:0,name:"Tree",nodes:[{id:1,name:"Branch"},{id:2,name:"Branch"},{id:3,name:"Branch",nodes:[{id:5,name:"Leaf"}]}]}]})))}}}]);