(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".body {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    flex-wrap: nowrap;\n\n}\n.container, .containertwo {\n    display: grid;\n    grid-template-columns: repeat(10, 2.5em);\n    grid-template-rows: repeat(10, 2.5em);\n    padding: 1em;\n}\n\n.div, .divs {\n    display: flex;\n    border: solid black;\n    justify-content: center;\n    cursor: pointer;\n    height: 2.5em;\n    width: 2.5em;\n    background-color: aquamarine;\n}\n\n.over {\n    border: 3px dotted black;\n}\n\n.miss {\n    border: solid black;\n    font-size: 240%;\n    color: black;\n    text-align: center;\n}\n\n.hit {\n    border: solid black;\n    background-color : red;\n    font-size: 240%;\n    color: black;\n    text-align: center;\n}\n\n.divtwo {\n    display: flex;\n    border: solid black;\n    justify-content: center;\n    cursor: pointer;\n    height: 2.5em;\n    width: 2.5em;\n    background-color: grey;\n}\n\n.playerlabel, .computerlabel {\n    font-size: 2em;\n}\n\n.player, .computer {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.span {\n    display: flex;\n    justify-content: center;\n}\n\n.box {\n    display: flex;\n    flex-direction: row-reverse;\n    gap: 1em;\n}\n\n.side, .sidetwo {\n    margin-top: 2.7em;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n",""]);const c=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=i[s]||0,u="".concat(s," ").concat(d);i[s]=d+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var l=r(e,o),s=0;s<i.length;s++){var d=n(i[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},171:e=>{e.exports=()=>{const e="ABCDEFGHIJ".split("");let t;const n=document.querySelector(".playerlabel"),r=document.querySelector(".computerlabel"),o=document.querySelector(".side"),i=document.querySelector(".sidetwo"),a=document.querySelector(".container"),c=document.querySelector(".containertwo");return{createGrid:(e,n)=>{if("J"==a.lastChild.textContent)for(let t=0;t<e;t++)for(let e=0;e<n;e++){const n=document.createElement("div");n.id="empty",n.setAttribute("data-id",`[${t}, ${e}]`),n.setAttribute("occupied","empty"),n.setAttribute("hit",!1),a.appendChild(n).className="div"}else for(let r=0;r<e;r++)for(let e=0;e<n;e++){const n=document.createElement("div");n.setAttribute("data-id",`[${r}, ${e}]`),n.setAttribute("occupied","empty"),n.setAttribute("hit",!1),n.addEventListener("click",(function(){t=n.id})),c.appendChild(n).className="divs"}},nameBoard:e=>{if(n.firstChild){const t=document.createElement("span");t.textContent=`${e} Board`,r.appendChild(t)}else{const t=document.createElement("span");t.textContent=`${e} Board`,n.appendChild(t)}},labelGrid:()=>{if(a.firstChild)for(let t=0;t<e.length;t++){const n=document.createElement("span"),r=document.createElement("span");n.textContent=e[t],r.textContent=t,c.appendChild(n).className="span",i.appendChild(r)}else for(let t=0;t<e.length;t++){const n=document.createElement("span"),r=document.createElement("span");n.textContent=e[t],r.textContent=t,a.appendChild(n).className="span",o.appendChild(r)}},findClick:()=>t}}},498:e=>{e.exports=()=>{const e=[],t=[],n=(e,r,o,i)=>{let a=r[0],c=r[1];if(1==i.getPlace()){if("horizontal"==o){if(!(c+(e.getLength()-1)<10))return n(e,i.computerMove(),e.getDirection(),i);for(let t=0;t<e.getLength();t++){if("empty"!=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[1].getAttribute("occupied"))return n(e,i.computerMove(),e.getDirection(),i);c++}t.push(e),e.changeCoordinate(r),c=r[1];for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[1];t.setAttribute("occupied",e.myName),t.className="divtwo",c++}}else if("vertical"==o){if(!(a+(e.getLength()-1)<10))return n(e,i.computerMove(),e.getDirection(),i);for(let t=0;t<e.getLength();t++){if("empty"!=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[1].getAttribute("occupied"))return n(e,i.computerMove(),e.getDirection(),i);a++}t.push(e),e.changeCoordinate(r),a=r[0];for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[1];console.log(t.getAttribute("data-id")),t.setAttribute("occupied",e.myName),t.className="divtwo",a++}}}else if("horizontal"==o){if(c+(e.getLength()-1)<10){for(let t=0;t<e.getLength();t++){if("empty"!=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[0].getAttribute("occupied"))return console.log("choose a different spot");c++}t.push(e),e.changeCoordinate(r),c=r[1];for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[0];t.setAttribute("occupied",e.myName),t.draggable=!0,t.className="divtwo",c++}}}else if("vertical"==o&&a+(e.getLength()-1)<10){for(let t=0;t<e.getLength();t++){if("empty"!=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[0].getAttribute("occupied"))return console.log("pick a new spot");a++}t.push(e),e.changeCoordinate(r),a=r[0];for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[0];t.setAttribute("occupied",e.myName),t.draggable=!0,t.className="divtwo",a++}}};return{placeShip:n,showBoard:(e,t)=>{for(const n of t)for(let r=0;r<t.length;r++)if(n==e.getArray()[r].xy.toString())return"set"},receiveAttack:(t,n,r)=>{let o=n[0],i=n[1];if(0==r.getTurn()){const r=document.querySelectorAll(`[data-id="[${o}, ${i}]"]`)[1];if("empty"==r.getAttribute("occupied")&&"false"==r.getAttribute("hit"))e.push(n),r.setAttribute("hit",!0),r.className="miss",r.textContent="X";else if("empty"!==r.getAttribute("occupied")&&"false"==r.getAttribute("hit")){r.setAttribute("hit",!0),r.className="hit",r.textContent="X";let e=r.getAttribute("occupied");t.find((t=>t.myName===e)).isHit(n)}}else{const r=document.querySelectorAll(`[data-id="[${o}, ${i}]"]`)[0];if(console.log(r.getAttribute("occupied")),"empty"==r.getAttribute("occupied")&&"false"==r.getAttribute("hit"))e.push(n),r.setAttribute("hit",!0),r.className="miss",r.textContent="X";else if("empty"!==r.getAttribute("occupied")&&"false"==r.getAttribute("hit")){r.setAttribute("hit",!0),r.className="hit",r.textContent="X";let e=r.getAttribute("occupied");t.find((t=>t.myName===e)).isHit(n)}}},reportShips:()=>{const e=e=>1==e.isSunk();return t.every(e)?"all ships sunk":t.every(e)?void 0:"not all ships sunk"},reportLength:()=>t.length}}},507:e=>{e.exports=e=>{const t={myTurn:!0,canPlace:!0},n=()=>t.myTurn=!1;return{attackBoard:(e,r,o,i,a)=>{1==t.myTurn&&(r.receiveAttack(e,a,o),n(),i.setTurnTrue())},setTurnFalse:n,computerMove:()=>{let e=[],t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());return e.push(t),e.push(n),e},randomDirection:()=>Math.round(Math.random()),setPlaceFalse:()=>t.canPlace=!1,getPlace:()=>t.canPlace,getTurn:()=>t.myTurn,setTurnTrue:()=>t.myTurn=!0}}},643:e=>{e.exports=(e,t)=>{const n=e;let r="horizontal",o=!1;const i=[];for(let e=0;e<t;e++)i.push({xy:null,hit:!1});const a=e=>{let n=e[0],o=e[1];if("horizontal"==r)for(let e=0;e<t;e++)i[e].xy=[n,o++];else for(let e=0;e<t;e++)i[e].xy=[n++,o]},c=()=>t,l=()=>r;return{myName:n,getArray:()=>i,changeCoordinate:a,isHit:e=>{console.log(e),console.log(i);let t=i.findIndex((t=>t.xy.toString()==e));return console.log(t),i[t].hit=!0},isSunk:()=>i.every((e=>1==e.hit))?o=!0:o,changeDirection:e=>{let t=e[0],o=e[1];if("horizontal"==r){if(t+(c()-1)<10){t++;for(let e=1;e<c();e++){if("empty"!=document.querySelectorAll(`[data-id="[${t}, ${o}]"]`)[0].getAttribute("occupied"))return console.log("spot is filled");t++}t=e[0];for(let e=0;e<c();e++){const e=document.querySelectorAll(`[data-id="[${t}, ${o}]"]`)[0];e.setAttribute("occupied","empty"),e.draggable=!1,e.className="div",o++}o=e[1],r="vertical";for(let r=0;r<c();r++){const r=document.querySelectorAll(`[data-id="[${t}, ${o}]"]`)[0];r.setAttribute("occupied",n),r.draggable=!0,r.className="divtwo",a(e),t++}}}else if(o+(c()-1)<10){o++;for(let e=1;e<c();e++){if("empty"!=document.querySelectorAll(`[data-id="[${t}, ${o}]"]`)[0].getAttribute("occupied"))return console.log("please choose a different spot");o++}o=e[1];for(let e=0;e<c();e++){const e=document.querySelectorAll(`[data-id="[${t}, ${o}]"]`)[0];e.setAttribute("occupied","empty"),e.draggable=!1,e.className="div",t++}t=e[0],r="horizontal";for(let r=0;r<c();r++){const r=document.querySelectorAll(`[data-id="[${t}, ${o}]"]`)[0];r.setAttribute("occupied",n),r.draggable=!0,r.className="divtwo",a(e),o++}}},getLength:c,getDirection:l,computerRandomDirection:e=>0==e?(r="horizontal",l()):(r="vertical",l())}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),l=n.n(c),s=n(216),d=n.n(s),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=n(643),h=n(507),y=n(498),v=n(171);(()=>{const e=y(),t=y(),n=h("me"),r=h("AI"),o=[],i=g("myCarrier",5),a=g("myBattleship",4),c=g("myCruiser",3),l=g("mySubmarine",3),s=g("myDestroyer",2);o.push(i),o.push(a),o.push(c),o.push(l),o.push(s);const d=g("enemyCarrier",5),u=g("enemyBattleship",4),p=g("enemyCruiser",3),m=g("enemySubmarine",3),f=g("enemyDestroyer",2);o.push(d),o.push(u),o.push(p),o.push(m),o.push(f),r.setTurnFalse();const b=v(),A=v();b.nameBoard("My"),A.nameBoard("Computer"),b.labelGrid(),A.labelGrid(),b.createGrid(10,10),A.createGrid(10,10),document.querySelectorAll(".div").forEach((e=>e.addEventListener("click",(function(){if("empty"!==this.getAttribute("occupied")){let e=this.getAttribute("occupied"),t=o.find((t=>t.myName===e)),n=t.getArray()[0].xy,r=n[0],i=n[1];t.changeDirection([parseInt(r),parseInt(i)])}else console.log(this.getAttribute("data-id"))})))),document.addEventListener("DOMContentLoaded",(e=>{function t(e){console.log(e.target),this.classList.remove("divtwo"),console.log("one")}function n(e){console.log("two")}function r(e){e.preventDefault(),console.log("three"),e.target.classList.add("divtwo")}function o(e){console.log("four"),e.target.classList.add("divtwo")}function i(e){console.log("five"),e.target.classList.remove("divtwo")}function a(e){e.preventDefault(),console.log("six"),e.target.classList.add("divtwo")}document.querySelectorAll(".div").forEach((e=>{e.addEventListener("dragstart",t),e.addEventListener("dragover",r),e.addEventListener("dragenter",o),e.addEventListener("dragleave",i),e.addEventListener("dragend",n),e.addEventListener("drop",a)}))})),e.placeShip(d,r.computerMove(),d.computerRandomDirection(r.randomDirection()),r),e.placeShip(u,r.computerMove(),u.computerRandomDirection(r.randomDirection()),r),e.placeShip(p,r.computerMove(),p.computerRandomDirection(r.randomDirection()),r),e.placeShip(m,r.computerMove(),m.computerRandomDirection(r.randomDirection()),r),e.placeShip(f,r.computerMove(),f.computerRandomDirection(r.randomDirection()),r),r.setPlaceFalse(),t.placeShip(i,[5,3],i.getDirection(),r),t.placeShip(a,[1,5],a.getDirection(),r),t.placeShip(c,[6,6],c.getDirection(),r),t.placeShip(l,[2,2],l.getDirection(),r),t.placeShip(s,[7,7],s.getDirection(),r),n.attackBoard(o,e,r,r,[2,3]),r.attackBoard(o,t,r,n,r.computerMove())})()})()})();