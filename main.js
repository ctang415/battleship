(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,".body {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    flex-wrap: nowrap;\n\n}\n.container, .containertwo {\n    display: grid;\n    grid-template-columns: repeat(10, 3em);\n    grid-template-rows: repeat(10, 3em);\n}\n\n.div {\n    display: flex;\n    border: solid black;\n    justify-content: center;\n    cursor: pointer;\n    height: 3em;\n    width: 3em;\n}\n\n.playerlabel, .computerlabel {\n    font-size: 2em;\n}\n\n.player, .computer {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.span {\n    display: flex;\n    justify-content: center;\n}\n\n.box {\n    display: flex;\n    flex-direction: row-reverse;\n    gap: 1em;\n}\n\n.side, .sidetwo {\n    margin-top: 3em;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-content: space-evenly;\n}\n",""]);const c=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},171:e=>{e.exports=()=>{const e="ABCDEFGHIJ".split(""),t=document.querySelector(".playerlabel"),n=document.querySelector(".computerlabel"),r=document.querySelector(".side"),o=document.querySelector(".sidetwo"),a=document.querySelector(".container"),i=document.querySelector(".containertwo");return{createGrid:(t,n)=>{if("J"==a.lastChild.textContent)for(let r=0;r<t;r++)for(let t=0;t<n;t++){const n=document.createElement("div");n.id=[e[r],t],n.occupied="empty",n.hit=!1,a.appendChild(n).className="div"}else for(let r=0;r<t;r++)for(let t=0;t<n;t++){const n=document.createElement("div");n.id=[e[r],t],n.occupied="empty",n.hit=!1,i.appendChild(n).className="div"}},nameBoard:e=>{if(t.firstChild){const t=document.createElement("span");t.textContent=`${e}'s Board`,n.appendChild(t)}else{const n=document.createElement("span");n.textContent=`${e}'s Board`,t.appendChild(n)}},labelGrid:()=>{if(a.firstChild)for(let t=0;t<e.length;t++){const n=document.createElement("span"),r=document.createElement("span");n.textContent=e[t],r.textContent=t,i.appendChild(n).className="span",o.appendChild(r)}else for(let t=0;t<e.length;t++){const n=document.createElement("span"),o=document.createElement("span");n.textContent=e[t],o.textContent=t,a.appendChild(n).className="span",r.appendChild(o)}}}}},498:(e,t,n)=>{n(643),e.exports=()=>{const e=[],t=[];return{placeShip:(e,n,r)=>{t.push(e);for(const t of r){n.occupy=e,n.hit=!1;for(let n=0;n<r.length;n++)e.changeCoordinate(n,t)}},showBoard:(e,t)=>{for(const n of t)for(let r=0;r<t.length;r++)if(n==e.getArray()[r].xy.toString())return"set"},receiveAttack:(t,n)=>"empty"==t.occupy&&0==t.hit?(e.push(n),"miss"):"empty"!==t.occupy&&0==t.hit?(t.hit=!0,t.occupy.isHit(n),"hit"):"already hit",reportShips:()=>{const e=e=>1==e.isSunk();return t.every(e)?"all ships sunk":t.every(e)?void 0:"not all ships sunk"}}}},507:e=>{e.exports=e=>{let t=!0;const n=()=>t=!1;return{attackBoard:(e,r,o,a)=>{if(t)return n(),r.myTurn=!0,e.receiveAttack(o,a)},setFalse:n,computerMove:()=>[Math.floor(10*Math.random()),Math.floor(10*Math.random())]}}},643:e=>{e.exports=e=>{let t=!1;const n=[];for(let t=0;t<e;t++)n.push({xy:null,hit:!1});return{getArray:()=>n,changeCoordinate:(e,t)=>{n[e].xy=t},isHit:e=>{let t=n.findIndex((t=>t.xy.toString()==e));return n[t].hit=!0},isSunk:()=>n.every((e=>1==e.hit))?t=!0:t}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),l=n(216),u=n.n(l),d=n(589),p=n.n(d),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=n(498),y=n(507),v=n(171);(()=>{h(),h(),y("me"),y("AI");const e=v(),t=v();e.nameBoard("Carrie"),t.nameBoard("Computer"),e.labelGrid(),t.labelGrid(),e.createGrid(10,10),t.createGrid(10,10)})()})()})();