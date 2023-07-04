(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,".body {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    flex-wrap: nowrap;\n    padding: 1vw;\n\n}\n.container, .containertwo {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    padding: 1vw;\n}\n\n.divplayer, .divenemy {\n    display: flex;\n    border: solid 1px black;\n    justify-content: center;\n    padding: 3vh;\n    cursor: pointer;\n    background-color: aquamarine;\n}\n\n.miss {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: solid 1px #000000;\n    color: black;\n    padding: 21.5%;\n    text-align: center;\n}\n\n.hit {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: solid 1px black;\n    background-color : red;\n    color: black;\n    text-align: center;\n}\n\n.divtwo {\n    display: flex;\n    border: solid black;\n    justify-content: center;\n    cursor: pointer;\n    background-color: grey;\n}\n\n.playerlabel, .computerlabel {\n    font-size: 2vw;\n}\n\n.player, .computer {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.span {\n    display: flex;\n    justify-content: center;\n}\n\n.box {\n    display: flex;\n    flex-direction: row-reverse;\n    gap: 1vh;\n}\n\n.side, .sidetwo {\n    margin-top: 2.7vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.bottom {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    gap: 1em;\n}\n\n.overlay {\n    display: none; \n    position: fixed; \n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%;\n    overflow: auto; \n    background-color: rgb(0,0,0); \n    background-color: rgba(0,0,0,0.4); \n}\n\n.popup {\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    margin: 20% auto; \n    gap: 1vh;\n    padding: 2vh;\n    width: 30%; \n    border-radius: 1vh;\n    text-align: center;\n    font-size: 2vh;\n}\n\n.playbutton {\n    display: flex;\n    justify-content: center;\n}\n\n@media only screen and (min-device-width:280px) and (max-device-width: 950px) {\n    .body {\n        display: flex;\n        flex-direction: column;\n        gap: 2em;\n    }\n    .container, .containertwo {\n        display: grid;\n        grid-template-columns: repeat(10, 1fr);\n        padding: 1.5vw;\n    }\n\n    .divplayer, .divenemy {\n        display: flex;\n        border: solid black;\n        justify-content: center;\n        cursor: pointer;\n        padding: 0.58em;\n        background-color: aquamarine;\n    }\n    .divtwo {\n        display: flex;\n        border: solid black;\n        justify-content: center;\n        cursor: pointer;\n        background-color: grey;\n    }\n    .side, .sidetwo {\n        margin-top: 2.5vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n    }\n    .playerlabel, .computerlabel {\n        font-size: 2.3vh;\n    }\n    .box {\n        display: flex;\n        flex-direction: row-reverse;\n        gap: 1em;\n    }\n    .miss {\n        border: solid black;\n        color: black;\n        padding: 0em;\n        text-align: center;\n    }\n    \n    .hit {\n        border: solid black;\n        background-color : red;\n        color: black;\n        text-align: center;\n    }\n    .popup {\n        display: flex;\n        flex-direction: column;\n        background-color: white;\n        margin: 50% auto; \n        gap: 1vh;\n        padding: 2vh;\n        width: 30%; \n        border-radius: 1vh;\n        text-align: center;\n        font-size: 2vh;\n    }\n}\n",""]);const c=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=o[s]||0,u="".concat(s," ").concat(d);o[s]=d+1;var p=n(u),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(g);else{var m=i(g,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=n(o[a]);t[c].references--}for(var l=r(e,i),s=0;s<o.length;s++){var d=n(o[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},171:e=>{e.exports=()=>{const e="ABCDEFGHIJ".split(""),t=document.querySelector(".playerlabel"),n=document.querySelector(".computerlabel"),r=document.querySelector(".side"),i=document.querySelector(".sidetwo"),o=document.querySelector(".container"),a=document.querySelector(".containertwo");return{createGrid:(e,t)=>{if("J"==o.lastChild.textContent)for(let n=0;n<e;n++)for(let e=0;e<t;e++){const t=document.createElement("div");t.setAttribute("data-id",`[${n}, ${e}]`),t.setAttribute("occupied","empty"),t.setAttribute("hit",!1),t.draggable=!1,o.appendChild(t).className="divplayer"}else for(let n=0;n<e;n++)for(let e=0;e<t;e++){const t=document.createElement("div");t.setAttribute("data-id",`[${n}, ${e}]`),t.setAttribute("occupied","empty"),t.setAttribute("hit",!1),a.appendChild(t).className="divenemy"}},nameBoard:e=>{if(t.firstChild){const t=document.createElement("span");t.textContent=`${e} Board`,n.appendChild(t)}else{const n=document.createElement("span");n.textContent=`${e} Board`,t.appendChild(n)}},labelGrid:()=>{if(o.firstChild)for(let t=0;t<e.length;t++){const n=document.createElement("span"),r=document.createElement("span");n.textContent=e[t],r.textContent=t,a.appendChild(n).className="span",i.appendChild(r)}else for(let t=0;t<e.length;t++){const n=document.createElement("span"),i=document.createElement("span");n.textContent=e[t],i.textContent=t,o.appendChild(n).className="span",r.appendChild(i)}}}}},498:e=>{e.exports=()=>{const e=[],t=[],n=[],r={shipHit:!1,shipCoordinate:null},i=(e,t,r,o)=>{let a=t[0],c=t[1];if(1==o.getPlace()){if("horizontal"==r){if(!(c+(e.getLength()-1)<10))return i(e,o.makeRandomMove(),e.getDirection(),o);for(let t=0;t<e.getLength();t++){if("empty"!=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[1].getAttribute("occupied"))return i(e,o.makeRandomMove(),e.getDirection(),o);c++}0==n.includes(e)&&n.push(e),e.changeCoordinate(t),c=t[1];for(let t=0;t<e.getLength();t++)document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[1].setAttribute("occupied",e.myName),c++}else if("vertical"==r){if(!(a+(e.getLength()-1)<10))return i(e,o.makeRandomMove(),e.getDirection(),o);for(let t=0;t<e.getLength();t++){if("empty"!=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[1].getAttribute("occupied"))return i(e,o.makeRandomMove(),e.getDirection(),o);a++}0==n.includes(e)&&n.push(e),e.changeCoordinate(t),a=t[0];for(let t=0;t<e.getLength();t++)document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[1].setAttribute("occupied",e.myName),a++}}else if(!0!==o.getPlace())if("horizontal"==r){if(!(c+(e.getLength()-1)<10))return i(e,e.getArray()[0].xy,e.getDirection(),o);for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[0];if("empty"!=t.getAttribute("occupied")&&t.getAttribute("occupied")!=e.shipName)return i(e,e.getArray()[0].xy,e.getDirection(),o);c++}0==n.includes(e)&&n.push(e),e.changeCoordinate(t),c=t[1];for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[0];t.setAttribute("occupied",e.myName),t.draggable=!0,t.className="divtwo",c++}}else if("vertical"==r){if(!(a+(e.getLength()-1)<10))return i(e,e.getArray()[0].xy,e.getDirection(),o);for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[0];if("empty"!=t.getAttribute("occupied")&&t.getAttribute("occupied")!=e.shipName)return i(e,e.getArray()[0].xy,e.getDirection(),o);a++}0==n.includes(e)&&n.push(e),e.changeCoordinate(t),a=t[0];for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[0];t.setAttribute("occupied",e.myName),t.draggable=!0,t.className="divtwo",a++}}},o=(t,n,i)=>{let a=n[0],c=n[1];if(0==i.getTurn()){const r=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[1];if("empty"==r.getAttribute("occupied")&&"false"==r.getAttribute("hit"))e.push(n),r.setAttribute("hit",!0),r.className="miss",r.textContent="X";else if("empty"!==r.getAttribute("occupied")&&"false"==r.getAttribute("hit")){r.setAttribute("hit",!0),r.className="hit",r.textContent="X";let e=r.getAttribute("occupied");t.find((t=>t.myName===e)).isHit(n)}}else{const l=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[0];if("empty"==l.getAttribute("occupied")&&"false"==l.getAttribute("hit"))e.push(n),l.setAttribute("hit",!0),l.className="miss",l.textContent="X",r.shipHit=!1;else{if("empty"===l.getAttribute("occupied")||"false"!=l.getAttribute("hit"))return o(t,i.makeRandomMove(),i);{l.setAttribute("hit",!0),l.className="hit",l.textContent="X";let e=l.getAttribute("occupied");t.find((t=>t.myName===e)).isHit(n),r.shipHit=!0,r.shipCoordinate=[a,c]}}}};return{placeShip:i,showBoard:(e,t)=>{for(const n of t)for(let r=0;r<t.length;r++)if(n==e.getArray()[r].xy.toString())return"set"},receiveAttack:o,reportShips:()=>{const e=e=>1==e.isSunk();return n.every(e)?"all ships sunk":n.every(e)?void 0:"not all ships sunk"},reportLength:()=>n.length,shipHit:()=>r.shipHit,shipCoordinate:()=>r.shipCoordinate,getMissingCoordinates:()=>e.length,getAttacks:()=>t}}},507:e=>{e.exports=e=>{const t={myTurn:!0,canPlace:!0,queue:[]},n=()=>t.myTurn=!1;return{attackBoard:(e,r,i,o,a)=>{1==t.myTurn&&(r.receiveAttack(e,a,i),n(),o.setTurnTrue())},setTurnFalse:n,makeRandomMove:()=>{let e=[],t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());return e.push(t),e.push(n),e},getRandomNumber:()=>Math.round(Math.random()),setPlaceFalse:()=>t.canPlace=!1,getPlace:()=>t.canPlace,getTurn:()=>t.myTurn,setTurnTrue:()=>t.myTurn=!0,getQueue:()=>t.queue}}},643:e=>{e.exports=(e,t)=>{const n=e,r={direction:"horizontal",sunk:!1},i=[];for(let e=0;e<t;e++)i.push({xy:null,hit:!1});const o=e=>{let n=e[0],o=e[1];if("horizontal"==r.direction)for(let e=0;e<t;e++)i[e].xy=[n,o++];else for(let e=0;e<t;e++)i[e].xy=[n++,o]},a=()=>t,c=()=>r.direction;return{myName:n,getArray:()=>i,changeCoordinate:o,isHit:e=>{let t=i.findIndex((t=>t.xy.toString()==e));return i[t].hit=!0},isSunk:()=>{if(i.every((e=>1==e.hit)))return r.sunk=!0},changeDirection:e=>{let t=e[0],i=e[1];if("horizontal"==r.direction){if(t+(a()-1)<10){t++;for(let e=1;e<a();e++){if("empty"!=document.querySelectorAll(`[data-id="[${t}, ${i}]"]`)[0].getAttribute("occupied"))return console.log("spot is filled");t++}t=e[0];for(let e=0;e<a();e++){const e=document.querySelectorAll(`[data-id="[${t}, ${i}]"]`)[0];e.setAttribute("occupied","empty"),e.draggable=!1,e.className="divplayer",i++}i=e[1],r.direction="vertical";for(let r=0;r<a();r++){const r=document.querySelectorAll(`[data-id="[${t}, ${i}]"]`)[0];r.setAttribute("occupied",n),r.draggable=!0,r.className="divtwo",o(e),t++}}}else if(i+(a()-1)<10){i++;for(let e=1;e<a();e++){if("empty"!=document.querySelectorAll(`[data-id="[${t}, ${i}]"]`)[0].getAttribute("occupied"))return console.log("please choose a different spot");i++}i=e[1];for(let e=0;e<a();e++){const e=document.querySelectorAll(`[data-id="[${t}, ${i}]"]`)[0];e.setAttribute("occupied","empty"),e.draggable=!1,e.className="divplayer",t++}t=e[0],r.direction="horizontal";for(let r=0;r<a();r++){const r=document.querySelectorAll(`[data-id="[${t}, ${i}]"]`)[0];r.setAttribute("occupied",n),r.draggable=!0,r.className="divtwo",o(e),i++}}},getLength:a,getDirection:c,getRandomDirection:e=>0==e?(r.direction="horizontal",c()):(r.direction="vertical",c())}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),i=n.n(r),o=n(569),a=n.n(o),c=n(565),l=n.n(c),s=n(216),d=n.n(s),u=n(589),p=n.n(u),g=n(426),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),t()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals;const f=n(643),y=n(507),h=n(498),v=n(171);(()=>{const e=h(),t=h(),n=y("me"),r=y("AI"),i=[],o=f("myCarrier",5),a=f("myBattleship",4),c=f("myCruiser",3),l=f("mySubmarine",3),s=f("myDestroyer",2);i.push(o),i.push(a),i.push(c),i.push(l),i.push(s);const d=f("enemyCarrier",5),u=f("enemyBattleship",4),p=f("enemyCruiser",3),g=f("enemySubmarine",3),m=f("enemyDestroyer",2);i.push(d),i.push(u),i.push(p),i.push(g),i.push(m),r.setTurnFalse();const b=v(),A=v();function x(){if("empty"!==this.getAttribute("occupied")){let e=this.getAttribute("occupied"),t=i.find((t=>t.myName===e)),n=t.getArray()[0].xy,r=n[0],o=n[1];t.changeDirection([parseInt(r),parseInt(o)])}}b.nameBoard("My"),A.nameBoard("Computer"),b.labelGrid(),A.labelGrid(),b.createGrid(10,10),A.createGrid(10,10),document.getElementById("play").addEventListener("click",(function(){window.location.reload()}));const S=document.querySelectorAll(".divplayer");let k,C;S.forEach((e=>e.addEventListener("click",x,!0)));const N=document.getElementById("button"),w=document.getElementById("text");let $,E=[[0,1],[0,-1],[1,0],[-1,0]];N.addEventListener("click",(function(){S.forEach((e=>e.style.pointerEvents="none"));const o=document.querySelectorAll(".divenemy");N.style.display="none",w.style.display="none",o.forEach((o=>o.addEventListener("click",(function(){let o=this.getAttribute("data-id");console.log(o);let a=o[1],c=o[4];if(n.attackBoard(i,e,r,r,[a,c]),this.style.pointerEvents="none",0===r.getQueue().length&&!0===t.shipHit()){const e=t.shipCoordinate();k=parseInt(e[0]),C=parseInt(e[1]),$=[k,C];for(let e=0;e<E.length;e++)if(-1<E[e][0]+k&&E[e][0]+k<10&&-1<E[e][1]+C&&E[e][1]+C<10){let n=E[e][1]+C,i=E[e][0]+k;!1===JSON.stringify(r.getQueue()).includes(JSON.stringify([i,n]))&&!1===JSON.stringify(t.getAttacks()).includes(JSON.stringify([i,n]))&&r.getQueue().push([i,n])}let o=r.getQueue().pop();r.attackBoard(i,t,r,n,o),t.getAttacks().push(o)}else if(0!==r.getQueue().length&&!1===t.shipHit()){let e=r.getQueue().pop();r.attackBoard(i,t,r,n,e),t.getAttacks().push(e)}else if(!0===t.shipHit()&&0!==r.getQueue().length){const e=t.shipCoordinate();if(k=parseInt(e[0]),C=parseInt(e[1]),$[0]-k==0){let e=[[0,2],[0,-2],[0,1],[0,-1]];for(let n=0;n<e.length;n++)if(-1<$[1]+e[n][1]&&$[1]+e[n][1]<10){let i=e[n][1]+$[1],o=e[n][0]+$[0];!1===JSON.stringify(r.getQueue()).includes(JSON.stringify([o,i]))&&!1===JSON.stringify(t.getAttacks()).includes(JSON.stringify([o,i]))&&r.getQueue().push([o,i])}let o=r.getQueue().pop();r.attackBoard(i,t,r,n,o),t.getAttacks().push(o)}else if($[1]-C==0){let e=[[2,0],[-2,0],[1,0],[-1,0]];for(let n=0;n<e.length;n++)if(-1<$[0]+e[n][0]&&$[0]+e[n][0]<10){let i=e[n][1]+$[1],o=e[n][0]+$[0];!1===JSON.stringify(r.getQueue()).includes(JSON.stringify([o,i]))&&!1===JSON.stringify(t.getAttacks()).includes(JSON.stringify([o,i]))&&r.getQueue().push([o,i])}let o=r.getQueue().pop();r.attackBoard(i,t,r,n,o),t.getAttacks().push(o)}}else if(0===r.getQueue().length){let e=r.makeRandomMove();r.attackBoard(i,t,r,n,e),t.getAttacks().push(e),console.log("random")}else{let e=r.getQueue().pop();r.attackBoard(i,t,r,n,e),t.getAttacks().push(e),console.log("else")}console.log(r.getQueue()),(()=>{const n=document.querySelectorAll(".divenemy"),r=document.querySelector(".overlay"),i=document.querySelector(".content");if(5===e.reportLength()&&5===t.reportLength()&&("all ships sunk"==e.reportShips()||"all ships sunk"==t.reportShips())){if("all ships sunk"==e.reportShips())return n.forEach((e=>e.style.pointerEvents="none")),r.style.display="inline-block",i.textContent="You win!";"all ships sunk"==t.reportShips()&&(n.forEach((e=>e.style.pointerEvents="none")),r.style.display="inline-block",i.textContent="You lose!")}})()}))))})),document.addEventListener("DOMContentLoaded",(()=>{let e,n;function o(t){t.target.classList.add("divplayer"),t.dataTransfer.setData("data",t.target.getAttribute("occupied"));let r=t.dataTransfer.getData("data");n=i.find((e=>e.myName===r)),e=t.target.getAttribute("data-id")}function a(e){e.target.classList.add("divplayer")}function c(e){e.preventDefault(),e.target.classList.add("divtwo")}function l(e){e.target.classList.add("divtwo")}function s(e){"empty"==e.target.getAttribute("occupied")&&e.target.classList.remove("divtwo")}function d(o){if(o.preventDefault(),"empty"==o.target.getAttribute("occupied")||o.target.getAttribute("occupied")==n.myName){o.target.classList.remove("divtwo");let n=o.dataTransfer.getData("data"),a=o.target.getAttribute("data-id"),c=parseInt(a[1]),l=parseInt(a[4]),s=i.find((e=>e.myName===n)),d=s.getLength(),u=parseInt(e[1]),p=parseInt(e[4]);if("horizontal"==s.getDirection())for(let e=0;e<d;e++){let e=document.querySelectorAll(`[data-id="[${u}, ${p}]"]`)[0];e.setAttribute("occupied","empty"),e.draggable=!1,e.className="divplayer",p++}else for(let e=0;e<d;e++){let e=document.querySelectorAll(`[data-id="[${u}, ${p}]"]`)[0];e.setAttribute("occupied","empty"),e.draggable=!1,e.className="divplayer",u++}t.placeShip(s,[c,l],s.getDirection(),r)}}document.querySelectorAll(".divplayer, .divtwo").forEach((e=>{e.addEventListener("dragstart",o),e.addEventListener("dragover",c),e.addEventListener("dragenter",l),e.addEventListener("dragleave",s),e.addEventListener("dragend",a),e.addEventListener("drop",d)}))})),e.placeShip(d,r.makeRandomMove(),d.getRandomDirection(r.getRandomNumber()),r),e.placeShip(u,r.makeRandomMove(),u.getRandomDirection(r.getRandomNumber()),r),e.placeShip(p,r.makeRandomMove(),p.getRandomDirection(r.getRandomNumber()),r),e.placeShip(g,r.makeRandomMove(),g.getRandomDirection(r.getRandomNumber()),r),e.placeShip(m,r.makeRandomMove(),m.getRandomDirection(r.getRandomNumber()),r),r.setPlaceFalse(),t.placeShip(o,[5,0],o.getDirection(),r),t.placeShip(a,[1,5],a.getDirection(),r),t.placeShip(c,[6,6],c.getDirection(),r),t.placeShip(l,[2,2],l.getDirection(),r),t.placeShip(s,[8,3],s.getDirection(),r)})()})()})();