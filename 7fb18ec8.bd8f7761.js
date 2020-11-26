(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{103:function(e,t,n){"use strict";var a=n(0),r=n(104);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},104:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},111:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(103),i=n(96),o=n(53),c=n.n(o),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.children,b=e.defaultValue,d=e.values,p=e.groupId,m=e.className,v=Object(l.a)(),f=v.tabGroupChoices,O=v.setTabGroupChoices,j=Object(a.useState)(b),g=j[0],h=j[1];if(null!=p){var y=f[p];null!=y&&y!==g&&d.some((function(e){return e.value===y}))&&h(y)}var N=function(e){h(e),null!=p&&O(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(o.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},o.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},112:function(e,t,n){"use strict";var a=n(3),r=n(0),l=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return l.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),l=(n(0),n(97)),i=n(111),o=n(112),c={id:"linux",title:"Linux"},s={unversionedId:"introduction/install/linux",id:"introduction/install/linux",isDocsHomePage:!1,title:"Linux",description:"L'ensemble de la pile logiciel a \xe9t\xe9 test\xe9 sous les distributions Linux suivantes : Manjaro et Ubuntu (20.04).",source:"@site/docs/introduction/install/linux.md",slug:"/introduction/install/linux",permalink:"/club-innovation-ssl/introduction/install/linux",editUrl:"https://github.com/EtienneSchmitz/club-innovation-ssl/tree/master/docs/introduction/install/linux.md",version:"current",sidebar:"docs",previous:{title:"Pr\xe9sentation",permalink:"/club-innovation-ssl/introduction/presentation"},next:{title:"Windows",permalink:"/club-innovation-ssl/introduction/install/windows"}},u=[{value:"GrSim",id:"grsim",children:[{value:"D\xe9pendances",id:"d\xe9pendances",children:[]},{value:"Installation",id:"installation",children:[]}]},{value:"Game Controller",id:"game-controller",children:[]},{value:"Backend Node",id:"backend-node",children:[{value:"D\xe9pendances",id:"d\xe9pendances-1",children:[]},{value:"Installation",id:"installation-1",children:[]}]}],b={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"L'ensemble de la pile logiciel a \xe9t\xe9 test\xe9 sous les distributions ",Object(l.b)("em",{parentName:"p"},"Linux")," suivantes : Manjaro et Ubuntu (20.04).",Object(l.b)("br",{parentName:"p"}),"\n","Les autres distribution Linux sont utilisables, il faudra adapter les commandes \xe0 votre distribution."))),Object(l.b)("h2",{id:"grsim"},"GrSim"),Object(l.b)("p",null,"GrSim est le simulateur de la division SSL."),Object(l.b)("h3",{id:"d\xe9pendances"},"D\xe9pendances"),Object(l.b)("p",null,"Avant d'installer GrSim, il faut installer les d\xe9pendances suivantes :"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Boost development libraries "),Object(l.b)("li",{parentName:"ul"},"CMake"),Object(l.b)("li",{parentName:"ul"},"g++"),Object(l.b)("li",{parentName:"ul"},"Google Protobuf"),Object(l.b)("li",{parentName:"ul"},"OpenGL"),Object(l.b)("li",{parentName:"ul"},"Open Dynamics Engine (ODE)"),Object(l.b)("li",{parentName:"ul"},"Qt5 Development Libraries")),Object(l.b)(i.a,{defaultValue:"ub",groupId:"operating-systems",values:[{label:"Ubuntu",value:"ub"},{label:"Manjaro",value:"man"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"ub",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# CMake\nsudo apt-get install -y apt-transport-https ca-certificates gnupg software-properties-common wget\nwget -O - https://apt.kitware.com/keys/kitware-archive-latest.asc 2>/dev/null > /tmp/kitware-archive-latest.asc\nsudo apt-key add /tmp/kitware-archive-latest.asc\nsudo apt-add-repository 'deb https://apt.kitware.com/ubuntu/ bionic main'\nsudo apt-get update\nsudo apt install -y cmake\n\n# Autres d\xe9p\xeandances\nsudo apt install -y git build-essential curl protobuf-compiler libprotobuf-dev qt5-default libqt5opengl5-dev libgl1-mesa-dev libglu1-mesa-dev protobuf-compiler libode-dev libboost-dev\n"))),Object(l.b)(o.a,{value:"man",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo pacman -S cmake base-devel ode protobuf qt5 boost boost-libs curl\n")))),Object(l.b)("h3",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://gitlab.namec.fr/ssl/software/external/grSim.git grSim\ncd grSim\nmkdir build && cd build \ncmake .. && make\nsudo make install # optionnel : Permet d'installer globalement GRSim.\n")),Object(l.b)("h2",{id:"game-controller"},"Game Controller"),Object(l.b)("p",null,"TODO "),Object(l.b)("h2",{id:"backend-node"},"Backend Node"),Object(l.b)("h3",{id:"d\xe9pendances-1"},"D\xe9pendances"),Object(l.b)("p",null,"Les d\xe9pendances de la partie software sont :"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Node.JS >= 14.x"),Object(l.b)("li",{parentName:"ul"},"NPM (Node Package Manager) >= 6.x")),Object(l.b)(i.a,{defaultValue:"ub",groupId:"operating-systems",values:[{label:"Ubuntu",value:"ub"},{label:"Manjaro",value:"man"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"ub",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -\nsudo apt-get install -y nodejs\n"))),Object(l.b)(o.a,{value:"man",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash\nnvm install node # Install latest version without npm problems.\n")))),Object(l.b)("p",null,"Pour v\xe9rifier votre installation de Node, vous pouvez regarder les versions de node et npm."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node -v  # version >= 14.x.x\nnpm -v # version >= 6.x.x\n")),Object(l.b)("h3",{id:"installation-1"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Cloner le d\xe9pot\ngit clone https://gitlab.namec.fr/ssl/software/backend-node/backend-node.git --recursive\n\n# Installer les d\xe9pendances\ncd backend-node\n./install-dependencies.sh\n")))}d.isMDXComponent=!0},96:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||l;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);