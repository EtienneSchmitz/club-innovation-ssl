(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(e,t,n){"use strict";var r=n(0),a=n(104);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},104:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},111:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(103),i=n(96),c=n(53),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.children,p=e.defaultValue,m=e.values,d=e.groupId,b=e.className,f=Object(o.a)(),v=f.tabGroupChoices,g=f.setTabGroupChoices,O=Object(r.useState)(p),y=O[0],j=O[1];if(null!=d){var h=v[d];null!=h&&h!==y&&m.some((function(e){return e.value===h}))&&j(h)}var x=function(e){j(e),null!=d&&g(d,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},m.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(r.cloneElement)(c.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},112:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(97)),i=(n(111),n(112),{id:"tuto_strategies",title:"Faire une strat\xe9gie"}),c={unversionedId:"tutoriel/tuto_strategies",id:"tutoriel/tuto_strategies",isDocsHomePage:!1,title:"Faire une strat\xe9gie",description:"Proc\xe9dures",source:"@site/docs/tutoriel/strategies.md",slug:"/tutoriel/tuto_strategies",permalink:"/club-innovation-ssl/tutoriel/tuto_strategies",editUrl:"https://github.com/EtienneSchmitz/club-innovation-ssl/tree/master/docs/tutoriel/strategies.md",version:"current",sidebar:"docs",previous:{title:"Technique",permalink:"/club-innovation-ssl/introduction/tech"}},s=[{value:"Proc\xe9dures",id:"proc\xe9dures",children:[]},{value:"Exemple",id:"exemple",children:[{value:"Commande en vitesse du robot.",id:"commande-en-vitesse-du-robot",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"proc\xe9dures"},"Proc\xe9dures"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Dans le dossier ",Object(o.b)("inlineCode",{parentName:"p"},"src/controllers/strategies")," du service MSB, dupliquer le fichier ",Object(o.b)("inlineCode",{parentName:"p"},"template.ts")," et renommer le avec le nom de votre strat\xe9gie.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Renommer la classe. N'oubliez pas de modifier l'initialisation dans la fonction ",Object(o.b)("inlineCode",{parentName:"p"},"handler")," de la d\xe9claration.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Modifier la fonction compute en fonction de vos besoins.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enregistrer la strat\xe9gie dans le fichier ",Object(o.b)("inlineCode",{parentName:"p"},"index.ts")," du dossier."))),Object(o.b)("h2",{id:"exemple"},"Exemple"),Object(o.b)("h3",{id:"commande-en-vitesse-du-robot"},"Commande en vitesse du robot."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="/src/controllers/strategies/turn.ts"',title:'"/src/controllers/strategies/turn.ts"'}),"\nimport { ActionSchema, Context, ServiceBroker } from 'moleculer'\nimport { Control } from '@ssl/types/internal/control/'\nimport Strategies from '@ssl/types/internal/task-manager/tasks/strategies'\n\nimport { state } from '../../models/GameState'\n\nexport default class Turn extends Strategies {\n  name = 'turn';\n\n  public constructor(public id: number) {\n    super()\n  }\n\n  public static declaration: ActionSchema = {\n    params: {\n      id: {\n        type: 'number', min: 0, max: 15,\n      },\n    },\n    handler(ctx: Context<{ id: number }>): void {\n      state.assign.register([ctx.params.id], new Turn(ctx.params.id))\n    },\n  }\n\n  compute(broker: ServiceBroker): boolean {\n    // const robot = state.data.robots.allies[this.id]\n\n    void broker.call('bots-gateway.control', {\n      id: this.id,\n      yellow: true,\n      velocity:\n      {\n        normal: 0,\n        angular: 0.2,\n        tangent: 0,\n      },\n    } as Control)\n\n    return false\n  }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="/src/controllers/strategies/index.ts"',title:'"/src/controllers/strategies/index.ts"'}),"\\\\ Autre importation de fichiers ici\nimport Turn from './turn'\n\nexport default {\n  \\\\ Autre code ici\n  turn : Turn.declarations,\n}\n")))}u.isMDXComponent=!0},96:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);