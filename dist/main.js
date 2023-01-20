(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),c=n.n(i)()(o());c.push([e.id,".body {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    flex-wrap: nowrap;\n\n}\n.container, .containertwo {\n    display: grid;\n    grid-template-columns: repeat(10, 2.5em);\n    grid-template-rows: repeat(10, 2.5em);\n    padding: 1em;\n}\n\n.div, .divs {\n    display: flex;\n    border: solid black;\n    justify-content: center;\n    cursor: pointer;\n    height: 2.5em;\n    width: 2.5em;\n    background-color: aquamarine;\n}\n\n.divtwo {\n    display: flex;\n    border: solid black;\n    justify-content: center;\n    cursor: pointer;\n    height: 2.5em;\n    width: 2.5em;\n    background-color: grey;\n}\n\n.playerlabel, .computerlabel {\n    font-size: 2em;\n}\n\n.player, .computer {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.span {\n    display: flex;\n    justify-content: center;\n}\n\n.box {\n    display: flex;\n    flex-direction: row-reverse;\n    gap: 1em;\n}\n\n.side, .sidetwo {\n    margin-top: 2.7em;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n",""]);const a=c},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},c=[],a=0;a<e.length;a++){var s=e[a],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=a,t.splice(a,0,{identifier:d,updater:f,references:1})}c.push(d)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=n(i[c]);t[a].references--}for(var s=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},171:e=>{e.exports=()=>{const e="ABCDEFGHIJ".split("");let t;const n=document.querySelector(".playerlabel"),r=document.querySelector(".computerlabel"),o=document.querySelector(".side"),i=document.querySelector(".sidetwo"),c=document.querySelector(".container"),a=document.querySelector(".containertwo");return{createGrid:(e,n)=>{if("J"==c.lastChild.textContent)for(let t=0;t<e;t++)for(let e=0;e<n;e++){const n=document.createElement("div");n.setAttribute("data-id",`[${t}, ${e}]`),n.setAttribute("occupied","empty"),n.setAttribute("hit",!1),c.appendChild(n).className="div"}else for(let r=0;r<e;r++)for(let e=0;e<n;e++){const n=document.createElement("div");n.setAttribute("data-id",`[${r}, ${e}]`),n.setAttribute("occupied","empty"),n.setAttribute("hit",!1),n.addEventListener("click",(function(){t=n.id})),a.appendChild(n).className="divs"}},nameBoard:e=>{if(n.firstChild){const t=document.createElement("span");t.textContent=`${e} Board`,r.appendChild(t)}else{const t=document.createElement("span");t.textContent=`${e} Board`,n.appendChild(t)}},labelGrid:()=>{if(c.firstChild)for(let t=0;t<e.length;t++){const n=document.createElement("span"),r=document.createElement("span");n.textContent=e[t],r.textContent=t,a.appendChild(n).className="span",i.appendChild(r)}else for(let t=0;t<e.length;t++){const n=document.createElement("span"),r=document.createElement("span");n.textContent=e[t],r.textContent=t,c.appendChild(n).className="span",o.appendChild(r)}},findClick:()=>t}}},498:e=>{e.exports=()=>{const e=[],t=[],n=(e,r,o,i)=>{let c=r[0],a=r[1];if(1==i.getPlace()){if("horizontal"==o){if(!(a+(e.getLength()-1)<10))return n(e,i.computerMove(),e.getDirection(),i);for(let t=0;t<e.getLength();t++){if("empty"!=document.querySelectorAll(`[data-id="[${c}, ${a}]"]`)[1].getAttribute("occupied"))return n(e,i.computerMove(),e.getDirection(),i);a++}t.push(e),e.changeCoordinate(r),a=r[1];for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${c}, ${a}]"]`)[1];t.setAttribute("occupied",e.myName),t.className="divtwo",a++}}else if("vertical"==o){if(!(c+(e.getLength()-1)<10))return n(e,i.computerMove(),e.getDirection(),i);for(let t=0;t<e.getLength();t++){if("empty"!=document.querySelectorAll(`[data-id="[${c}, ${a}]"]`)[1].getAttribute("occupied"))return n(e,i.computerMove(),e.getDirection(),i);c++}t.push(e),e.changeCoordinate(r),c=r[0];for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${c}, ${a}]"]`)[1];console.log(t.getAttribute("data-id")),t.setAttribute("occupied",e.myName),t.className="divtwo",c++}}}else if("horizontal"==o){if(a+(e.getLength()-1)<10){for(let t=0;t<e.getLength();t++){if("empty"!=document.querySelectorAll(`[data-id="[${c}, ${a}]"]`)[0].getAttribute("occupied"))return console.log("choose a different spot");a++}t.push(e),e.changeCoordinate(r),a=r[1];for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${c}, ${a}]"]`)[0];t.setAttribute("occupied",e.myName),t.className="divtwo",a++}}}else if("vertical"==o&&c+(e.getLength()-1)<10){for(let t=0;t<e.getLength();t++){if("empty"!=document.querySelectorAll(`[data-id="[${c}, ${a}]"]`)[0].getAttribute("occupied"))return console.log("pick a new spot");c++}t.push(e),e.changeCoordinate(r),c=r[0];for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${c}, ${a}]"]`)[0];t.setAttribute("occupied",e.myName),t.className="divtwo",c++}}};return{placeShip:n,showBoard:(e,t)=>{for(const n of t)for(let r=0;r<t.length;r++)if(n==e.getArray()[r].xy.toString())return"set"},receiveAttack:(t,n)=>"empty"==t.occupy&&0==t.hit?(e.push(n),"miss"):"empty"!==t.occupy&&0==t.hit?(t.hit=!0,t.occupy.isHit(n),"hit"):"already hit",reportShips:()=>{const e=e=>1==e.isSunk();return t.every(e)?"all ships sunk":t.every(e)?void 0:"not all ships sunk"},reportLength:()=>t.length}}},507:e=>{e.exports=e=>{const t={myTurn:!0,canPlace:!0};return{attackBoard:(e,t,n,r)=>{if(myTurn)return setFalse(),t.myTurn=!0,e.receiveAttack(n,r)},setTurnFalse:()=>t.myTurn=!1,computerMove:()=>{let e=[],t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());return e.push(t),e.push(n),e},randomDirection:()=>Math.round(Math.random()),setPlaceFalse:()=>t.canPlace=!1,getPlace:()=>t.canPlace,getTurn:()=>t.myTurn}}},643:e=>{e.exports=(e,t)=>{const n=e;let r="horizontal",o=!1;const i=[];for(let e=0;e<t;e++)i.push({xy:null,hit:!1});const c=e=>{let n=e[1],o=e[0];if("horizontal"==r)for(let e=0;e<t;e++)i[e].xy=`[${o}, ${n}]`,n=n++;else for(let e=0;e<t;e++)i[e].xy=`[${o}, ${n}]`,o=o++},a=()=>t,s=()=>r;return{myName:n,getArray:()=>i,array:i,changeCoordinate:c,isHit:e=>{let t=i.findIndex((t=>t.xy.toString()==e));return i[t].hit=!0},isSunk:()=>i.every((e=>1==e.hit))?o=!0:o,changeDirection:e=>{let t=e[0],o=e[1];if("horizontal"==r){if(t+(a()-1)<10){t++;for(let e=1;e<a();e++){if("empty"!=document.querySelectorAll(`[data-id="[${t}, ${o}]"]`)[0].getAttribute("occupied"))return console.log("spot is filled");t++}t=e[0];for(let e=0;e<a();e++){const e=document.querySelectorAll(`[data-id="[${t}, ${o}]"]`)[0];e.setAttribute("occupied","empty"),e.className="div",o++}o=e[1],r="vertical";for(let r=0;r<a();r++){const r=document.querySelectorAll(`[data-id="[${t}, ${o}]"]`)[0];r.setAttribute("occupied",n),r.className="divtwo",c(e),t++}}}else if(o+(a()-1)<10){o++;for(let e=1;e<a();e++){if("empty"!=document.querySelectorAll(`[data-id="[${t}, ${o}]"]`)[0].getAttribute("occupied"))return console.log("please choose a different spot");o++}o=e[1];for(let e=0;e<a();e++){const e=document.querySelectorAll(`[data-id="[${t}, ${o}]"]`)[0];e.setAttribute("occupied","empty"),e.className="div",t++}t=e[0],r="horizontal";for(let r=0;r<a();r++){const r=document.querySelectorAll(`[data-id="[${t}, ${o}]"]`)[0];r.setAttribute("occupied",n),r.className="divtwo",c(e),o++}}},getLength:a,getDirection:s,computerRandomDirection:e=>0==e?(r="horizontal",s()):(r="vertical",s())}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),c=n.n(i),a=n(565),s=n.n(a),l=n(216),u=n.n(l),d=n(589),p=n.n(d),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=n(643),y=n(507),g=n(498),v=n(171);(()=>{const e=g(),t=g(),n=(y("me"),y("AI")),r=[],o=[],i=h("myCarrier",5),c=h("myBattleship",4),a=h("myCruiser",3),s=h("mySubmarine",3),l=h("myDestroyer",2);r.push(i),r.push(c),r.push(a),r.push(s),r.push(l);const u=h("enemyCarrier",5),d=h("enemyBattleship",4),p=h("enemyCruiser",3),m=h("enemySubmarine",3),f=h("enemyDestroyer",2);o.push(u),o.push(d),o.push(p),o.push(m),o.push(f),n.setTurnFalse();const b=v(),A=v();b.nameBoard("My"),A.nameBoard("Computer"),b.labelGrid(),A.labelGrid(),b.createGrid(10,10),A.createGrid(10,10),document.querySelectorAll(".div").forEach((e=>e.addEventListener("click",(function(){if("empty"!==this.getAttribute("occupied")){let e=this.getAttribute("occupied"),t=r.find((t=>t.myName==e)),n=t.getArray()[0].xy,o=n[1],i=n[4];t.changeDirection([parseInt(o),parseInt(i)])}else console.log(this.getAttribute("data-id"))})))),e.placeShip(u,n.computerMove(),u.computerRandomDirection(n.randomDirection()),n),e.placeShip(d,n.computerMove(),d.computerRandomDirection(n.randomDirection()),n),e.placeShip(p,n.computerMove(),p.computerRandomDirection(n.randomDirection()),n),e.placeShip(m,n.computerMove(),m.computerRandomDirection(n.randomDirection()),n),e.placeShip(f,n.computerMove(),f.computerRandomDirection(n.randomDirection()),n),n.setPlaceFalse(),t.placeShip(i,[5,3],i.getDirection(),n),t.placeShip(c,[1,5],c.getDirection(),n),t.placeShip(a,[6,6],a.getDirection(),n),t.placeShip(s,[2,2],s.getDirection(),n),t.placeShip(l,[7,7],l.getDirection(),n)})()})()})();