(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,".body {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    flex-wrap: nowrap;\n    padding: 1vw;\n\n}\n.container, .containertwo {\n    display: grid;\n    grid-template-columns: repeat(10, 2.5vw);\n    grid-template-rows: repeat(10, 2.5vw);\n    padding: 2vw;\n}\n\n.divplayer, .divenemy {\n    display: flex;\n    border: solid black;\n    justify-content: center;\n    cursor: pointer;\n    height: 2.5vw;\n    width: 2.5vw;\n    background-color: aquamarine;\n}\n\n.miss {\n    border: solid black;\n    font-size: 240%;\n    line-height: 100%;\n    color: black;\n    text-align: center;\n}\n\n.hit {\n    border: solid black;\n    background-color : red;\n    font-size: 240%;\n    color: black;\n    line-height: 100%;\n    text-align: center;\n}\n\n.divtwo {\n    display: flex;\n    border: solid black;\n    justify-content: center;\n    cursor: pointer;\n    height: 2.5vw;\n    width: 2.5vw;\n    background-color: grey;\n}\n\n.playerlabel, .computerlabel {\n    font-size: 2vw;\n}\n\n.player, .computer {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.span {\n    display: flex;\n    justify-content: center;\n}\n\n.box {\n    display: flex;\n    font-size: 2.0vh;\n    flex-direction: row-reverse;\n    gap: 1vh;\n}\n\n.side, .sidetwo {\n    margin-top: 2.7vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.bottom {\n    display: flex;\n    justify-content: center;\n}\n\n.overlay {\n    display: none; \n    position: fixed; \n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%;\n    overflow: auto; \n    background-color: rgb(0,0,0); \n    background-color: rgba(0,0,0,0.4); \n}\n\n.popup {\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    margin: 20% auto; \n    gap: 1vh;\n    padding: 2vh;\n    width: 30%; \n    border-radius: 1vh;\n    text-align: center;\n    font-size: 2vh;\n}\n\n.playbutton {\n    display: flex;\n    justify-content: center;\n}\n\n@media only screen and (min-device-width:280px) and (max-device-width: 950px) {\n    .body {\n        display: flex;\n        flex-direction: column;\n        gap: 2em;\n    }\n    .container, .containertwo {\n        display: grid;\n        grid-template-columns: repeat(10, 2.4vh);\n        grid-template-rows: repeat(10, 2.4vh);\n        padding: 1.5vw;\n    }\n    .divplayer, .divenemy {\n        display: flex;\n        border: solid black;\n        justify-content: center;\n        cursor: pointer;\n        height: 2.4vh;\n        width: 2.4vh;\n        background-color: aquamarine;\n    }\n    .divtwo {\n        display: flex;\n        border: solid black;\n        justify-content: center;\n        cursor: pointer;\n        height: 2.4vh;\n        width: 2.4vh;\n        background-color: grey;\n    }\n    .side, .sidetwo {\n        margin-top: 2.5vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n    }\n    .playerlabel, .computerlabel {\n        font-size: 2.3vh;\n    }\n    .box {\n        display: flex;\n        font-size: 2.0vh;\n        flex-direction: row-reverse;\n        gap: 1em;\n    }\n    .miss {\n        border: solid black;\n        font-size: 2.4vh;\n        color: black;\n        height: 2.4vh;\n        width: 2.4vh;\n        text-align: center;\n    }\n    \n    .hit {\n        border: solid black;\n        background-color : red;\n        font-size: 2.4vh;\n        color: black;\n        height: 2.4vh;\n        width: 2.4vh;\n        text-align: center;\n    }\n    .popup {\n        display: flex;\n        flex-direction: column;\n        background-color: white;\n        margin: 50% auto; \n        gap: 1vh;\n        padding: 2vh;\n        width: 30%; \n        border-radius: 1vh;\n        text-align: center;\n        font-size: 2vh;\n    }\n}\n",""]);const c=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=o[s]||0,u="".concat(s," ").concat(d);o[s]=d+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=i(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=n(o[a]);t[c].references--}for(var l=r(e,i),s=0;s<o.length;s++){var d=n(o[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},171:e=>{e.exports=()=>{const e="ABCDEFGHIJ".split(""),t=document.querySelector(".playerlabel"),n=document.querySelector(".computerlabel"),r=document.querySelector(".side"),i=document.querySelector(".sidetwo"),o=document.querySelector(".container"),a=document.querySelector(".containertwo");return{createGrid:(e,t)=>{if("J"==o.lastChild.textContent)for(let n=0;n<e;n++)for(let e=0;e<t;e++){const t=document.createElement("div");t.setAttribute("data-id",`[${n}, ${e}]`),t.setAttribute("occupied","empty"),t.setAttribute("hit",!1),t.draggable=!1,o.appendChild(t).className="divplayer"}else for(let n=0;n<e;n++)for(let e=0;e<t;e++){const t=document.createElement("div");t.setAttribute("data-id",`[${n}, ${e}]`),t.setAttribute("occupied","empty"),t.setAttribute("hit",!1),a.appendChild(t).className="divenemy"}},nameBoard:e=>{if(t.firstChild){const t=document.createElement("span");t.textContent=`${e} Board`,n.appendChild(t)}else{const n=document.createElement("span");n.textContent=`${e} Board`,t.appendChild(n)}},labelGrid:()=>{if(o.firstChild)for(let t=0;t<e.length;t++){const n=document.createElement("span"),r=document.createElement("span");n.textContent=e[t],r.textContent=t,a.appendChild(n).className="span",i.appendChild(r)}else for(let t=0;t<e.length;t++){const n=document.createElement("span"),i=document.createElement("span");n.textContent=e[t],i.textContent=t,o.appendChild(n).className="span",r.appendChild(i)}}}}},498:e=>{e.exports=()=>{const e=[],t=[],n={shipHit:!1,shipCoordinate:null},r=(e,n,i,o)=>{let a=n[0],c=n[1];if(1==o.getPlace()){if("horizontal"==i){if(!(c+(e.getLength()-1)<10))return r(e,o.makeRandomMove(),e.getDirection(),o);for(let t=0;t<e.getLength();t++){if("empty"!=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[1].getAttribute("occupied"))return r(e,o.makeRandomMove(),e.getDirection(),o);c++}0==t.includes(e)&&t.push(e),e.changeCoordinate(n),c=n[1];for(let t=0;t<e.getLength();t++)document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[1].setAttribute("occupied",e.myName),c++}else if("vertical"==i){if(!(a+(e.getLength()-1)<10))return r(e,o.makeRandomMove(),e.getDirection(),o);for(let t=0;t<e.getLength();t++){if("empty"!=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[1].getAttribute("occupied"))return r(e,o.makeRandomMove(),e.getDirection(),o);a++}0==t.includes(e)&&t.push(e),e.changeCoordinate(n),a=n[0];for(let t=0;t<e.getLength();t++)document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[1].setAttribute("occupied",e.myName),a++}}else if(!0!==o.getPlace())if("horizontal"==i){if(!(c+(e.getLength()-1)<10))return r(e,e.getArray()[0].xy,e.getDirection(),o);for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[0];if("empty"!=t.getAttribute("occupied")&&t.getAttribute("occupied")!=e.shipName)return r(e,e.getArray()[0].xy,e.getDirection(),o);c++}0==t.includes(e)&&t.push(e),e.changeCoordinate(n),c=n[1];for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[0];t.setAttribute("occupied",e.myName),t.draggable=!0,t.className="divtwo",c++}}else if("vertical"==i){if(!(a+(e.getLength()-1)<10))return r(e,e.getArray()[0].xy,e.getDirection(),o);for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[0];if("empty"!=t.getAttribute("occupied")&&t.getAttribute("occupied")!=e.shipName)return r(e,e.getArray()[0].xy,e.getDirection(),o);a++}0==t.includes(e)&&t.push(e),e.changeCoordinate(n),a=n[0];for(let t=0;t<e.getLength();t++){const t=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[0];t.setAttribute("occupied",e.myName),t.draggable=!0,t.className="divtwo",a++}}},i=(t,r,o)=>{let a=r[0],c=r[1];if(0==o.getTurn()){const n=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[1];if("empty"==n.getAttribute("occupied")&&"false"==n.getAttribute("hit"))e.push(r),n.setAttribute("hit",!0),n.className="miss",n.textContent="X";else if("empty"!==n.getAttribute("occupied")&&"false"==n.getAttribute("hit")){n.setAttribute("hit",!0),n.className="hit",n.textContent="X";let e=n.getAttribute("occupied");t.find((t=>t.myName===e)).isHit(r)}}else{const l=document.querySelectorAll(`[data-id="[${a}, ${c}]"]`)[0];if("empty"==l.getAttribute("occupied")&&"false"==l.getAttribute("hit"))e.push(r),l.setAttribute("hit",!0),l.className="miss",l.textContent="X",n.shipHit=!1;else{if("empty"===l.getAttribute("occupied")||"false"!=l.getAttribute("hit"))return i(t,o.makeRandomMove(),o);{l.setAttribute("hit",!0),l.className="hit",l.textContent="X";let e=l.getAttribute("occupied");t.find((t=>t.myName===e)).isHit(r),n.shipHit=!0,n.shipCoordinate=[a,c]}}}};return{placeShip:r,showBoard:(e,t)=>{for(const n of t)for(let r=0;r<t.length;r++)if(n==e.getArray()[r].xy.toString())return"set"},receiveAttack:i,reportShips:()=>{const e=e=>1==e.isSunk();return t.every(e)?"all ships sunk":t.every(e)?void 0:"not all ships sunk"},reportLength:()=>t.length,shipHit:()=>n.shipHit,shipCoordinate:()=>n.shipCoordinate,getMissingCoordinates:()=>e.length}}},507:e=>{e.exports=e=>{const t={myTurn:!0,canPlace:!0},n=()=>t.myTurn=!1;return{attackBoard:(e,r,i,o,a)=>{1==t.myTurn&&(r.receiveAttack(e,a,i),n(),o.setTurnTrue())},setTurnFalse:n,makeRandomMove:()=>{let e=[],t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());return e.push(t),e.push(n),e},getRandomNumber:()=>Math.round(Math.random()),setPlaceFalse:()=>t.canPlace=!1,getPlace:()=>t.canPlace,getTurn:()=>t.myTurn,setTurnTrue:()=>t.myTurn=!0}}},643:e=>{e.exports=(e,t)=>{const n=e,r={direction:"horizontal",sunk:!1},i=[];for(let e=0;e<t;e++)i.push({xy:null,hit:!1});const o=e=>{let n=e[0],o=e[1];if("horizontal"==r.direction)for(let e=0;e<t;e++)i[e].xy=[n,o++];else for(let e=0;e<t;e++)i[e].xy=[n++,o]},a=()=>t,c=()=>r.direction;return{myName:n,getArray:()=>i,changeCoordinate:o,isHit:e=>{let t=i.findIndex((t=>t.xy.toString()==e));return i[t].hit=!0},isSunk:()=>{if(i.every((e=>1==e.hit)))return r.sunk=!0},changeDirection:e=>{let t=e[0],i=e[1];if("horizontal"==r.direction){if(t+(a()-1)<10){t++;for(let e=1;e<a();e++){if("empty"!=document.querySelectorAll(`[data-id="[${t}, ${i}]"]`)[0].getAttribute("occupied"))return console.log("spot is filled");t++}t=e[0];for(let e=0;e<a();e++){const e=document.querySelectorAll(`[data-id="[${t}, ${i}]"]`)[0];e.setAttribute("occupied","empty"),e.draggable=!1,e.className="divplayer",i++}i=e[1],r.direction="vertical";for(let r=0;r<a();r++){const r=document.querySelectorAll(`[data-id="[${t}, ${i}]"]`)[0];r.setAttribute("occupied",n),r.draggable=!0,r.className="divtwo",o(e),t++}}}else if(i+(a()-1)<10){i++;for(let e=1;e<a();e++){if("empty"!=document.querySelectorAll(`[data-id="[${t}, ${i}]"]`)[0].getAttribute("occupied"))return console.log("please choose a different spot");i++}i=e[1];for(let e=0;e<a();e++){const e=document.querySelectorAll(`[data-id="[${t}, ${i}]"]`)[0];e.setAttribute("occupied","empty"),e.draggable=!1,e.className="divplayer",t++}t=e[0],r.direction="horizontal";for(let r=0;r<a();r++){const r=document.querySelectorAll(`[data-id="[${t}, ${i}]"]`)[0];r.setAttribute("occupied",n),r.draggable=!0,r.className="divtwo",o(e),i++}}},getLength:a,getDirection:c,getRandomDirection:e=>0==e?(r.direction="horizontal",c()):(r.direction="vertical",c())}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),i=n.n(r),o=n(569),a=n.n(o),c=n(565),l=n.n(c),s=n(216),d=n.n(s),u=n(589),p=n.n(u),m=n(426),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const g=n(643),f=n(507),y=n(498),v=n(171);(()=>{const e=y(),t=y(),n=f("me"),r=f("AI"),i=[],o=g("myCarrier",5),a=g("myBattleship",4),c=g("myCruiser",3),l=g("mySubmarine",3),s=g("myDestroyer",2);i.push(o),i.push(a),i.push(c),i.push(l),i.push(s);const d=g("enemyCarrier",5),u=g("enemyBattleship",4),p=g("enemyCruiser",3),m=g("enemySubmarine",3),h=g("enemyDestroyer",2);i.push(d),i.push(u),i.push(p),i.push(m),i.push(h),r.setTurnFalse();const b=v(),A=v();function x(){if("empty"!==this.getAttribute("occupied")){let e=this.getAttribute("occupied"),t=i.find((t=>t.myName===e)),n=t.getArray()[0].xy,r=n[0],o=n[1];t.changeDirection([parseInt(r),parseInt(o)])}}b.nameBoard("My"),A.nameBoard("Computer"),b.labelGrid(),A.labelGrid(),b.createGrid(10,10),A.createGrid(10,10),document.getElementById("play").addEventListener("click",(function(){window.location.reload()}));const w=document.querySelectorAll(".divplayer");let S,k;w.forEach((e=>e.addEventListener("click",x,!0)));const C=document.getElementById("button");C.addEventListener("click",(function(){w.forEach((e=>e.style.pointerEvents="none"));const o=document.querySelectorAll(".divenemy");C.style.display="none",o.forEach((o=>o.addEventListener("click",(function(){let o=this.getAttribute("data-id"),a=o[1],c=o[4];if(n.attackBoard(i,e,r,r,[a,c]),this.style.pointerEvents="none",0==t.shipHit())if(r.attackBoard(i,t,r,n,r.makeRandomMove()),1==t.shipHit()){const e=t.shipCoordinate();console.log(e),S=parseInt(e[0]),k=parseInt(e[1]),k+1<10?k+=1:k-=1}else{const e=r.makeRandomMove();S=parseInt(e[0]),k=parseInt(e[1])}else if(1==t.shipHit()){const e=t.shipCoordinate();console.log(e),S=parseInt(e[0]),k=parseInt(e[1]),k+1<10?k+=1:k-=1,r.attackBoard(i,t,r,n,[S,k])}(()=>{const n=document.querySelectorAll(".divenemy"),r=document.querySelector(".overlay"),i=document.querySelector(".content");if(5===e.reportLength()&&5===t.reportLength()&&("all ships sunk"==e.reportShips()||"all ships sunk"==t.reportShips())){if("all ships sunk"==e.reportShips())return n.forEach((e=>e.style.pointerEvents="none")),r.style.display="inline-block",i.textContent="You win!";"all ships sunk"==t.reportShips()&&(n.forEach((e=>e.style.pointerEvents="none")),r.style.display="inline-block",i.textContent="You lose!")}})()}))))})),document.addEventListener("DOMContentLoaded",(()=>{let e,n;function o(t){t.target.classList.add("divplayer"),t.dataTransfer.setData("data",t.target.getAttribute("occupied"));let r=t.dataTransfer.getData("data");n=i.find((e=>e.myName===r)),e=t.target.getAttribute("data-id")}function a(e){e.target.classList.add("divplayer")}function c(e){e.preventDefault(),e.target.classList.add("divtwo")}function l(e){e.target.classList.add("divtwo")}function s(e){"empty"==e.target.getAttribute("occupied")&&e.target.classList.remove("divtwo")}function d(o){if(o.preventDefault(),"empty"==o.target.getAttribute("occupied")||o.target.getAttribute("occupied")==n.myName){o.target.classList.remove("divtwo");let n=o.dataTransfer.getData("data"),a=o.target.getAttribute("data-id"),c=parseInt(a[1]),l=parseInt(a[4]),s=i.find((e=>e.myName===n)),d=s.getLength(),u=parseInt(e[1]),p=parseInt(e[4]);if("horizontal"==s.getDirection())for(let e=0;e<d;e++){let e=document.querySelectorAll(`[data-id="[${u}, ${p}]"]`)[0];e.setAttribute("occupied","empty"),e.draggable=!1,e.className="divplayer",p++}else for(let e=0;e<d;e++){let e=document.querySelectorAll(`[data-id="[${u}, ${p}]"]`)[0];e.setAttribute("occupied","empty"),e.draggable=!1,e.className="divplayer",u++}t.placeShip(s,[c,l],s.getDirection(),r)}}document.querySelectorAll(".divplayer, .divtwo").forEach((e=>{e.addEventListener("dragstart",o),e.addEventListener("dragover",c),e.addEventListener("dragenter",l),e.addEventListener("dragleave",s),e.addEventListener("dragend",a),e.addEventListener("drop",d)}))})),e.placeShip(d,r.makeRandomMove(),d.getRandomDirection(r.getRandomNumber()),r),e.placeShip(u,r.makeRandomMove(),u.getRandomDirection(r.getRandomNumber()),r),e.placeShip(p,r.makeRandomMove(),p.getRandomDirection(r.getRandomNumber()),r),e.placeShip(m,r.makeRandomMove(),m.getRandomDirection(r.getRandomNumber()),r),e.placeShip(h,r.makeRandomMove(),h.getRandomDirection(r.getRandomNumber()),r),r.setPlaceFalse(),t.placeShip(o,[5,0],o.getDirection(),r),t.placeShip(a,[1,5],a.getDirection(),r),t.placeShip(c,[6,6],c.getDirection(),r),t.placeShip(l,[2,2],l.getDirection(),r),t.placeShip(s,[8,3],s.getDirection(),r)})()})()})();