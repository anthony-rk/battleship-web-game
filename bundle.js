!function(e){var i={};function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(1&i&&(e=t(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var s in e)t.d(n,s,function(i){return e[i]}.bind(null,s));return n},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="/",t(t.s=7)}([function(e,i,t){"use strict";t.r(i),t.d(i,"sum",(function(){return n})),t.d(i,"shipFactory",(function(){return s})),t.d(i,"gameBoardFactory",(function(){return r})),t.d(i,"playerFactory",(function(){return a})),t.d(i,"shipValidator",(function(){return h})),t.d(i,"handleFormSubmission",(function(){return o}));t(1);const n=(e,i)=>e+i,s=(e,i,t,n,s)=>{let a=[];if(!0===n)for(let n=0;n<e;n++){let e={y:i,x:t+n,isHit:!1};a.push(e)}else for(let n=0;n<e;n++){let e={y:i+n,x:t,isHit:!1};a.push(e)}return{shipLength:e,isSunk:!1,hitArray:a,hit:(e,i)=>{let t=a.findIndex(t=>{if(t.y===e&&t.x===i)return!0});a[t].isHit=!0},shipID:s,shipIsSunk:()=>{let e=!1;for(let i=0;i<a.length;i++){if(!1===a[i].isHit)return!1;e=!0}return e}}},a=(e,i)=>({name:e,attack:(e,t)=>{i.receiveAttack(e,t)},computerAttack:()=>{let e=!0;do{let t=Math.floor(8*Math.random())+1,n=Math.floor(8*Math.random())+1;!1===i.board[n][t].shipHasBeenHit&&!1===i.board[n][t].hitAndMiss&&(e=!1,i.receiveAttack(n,t))}while(!0===e)},enemyGameBoard:i}),r=()=>{const e={destroyer:{},submarine:{},cruiser:{},battleship:{},"aircraft carrier":{}},i={1:{1:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},2:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},3:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},4:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},5:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},6:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},7:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},8:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"}},2:{1:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},2:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},3:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},4:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},5:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},6:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},7:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},8:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"}},3:{1:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},2:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},3:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},4:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},5:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},6:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},7:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},8:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"}},4:{1:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},2:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},3:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},4:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},5:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},6:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},7:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},8:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"}},5:{1:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},2:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},3:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},4:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},5:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},6:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},7:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},8:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"}},6:{1:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},2:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},3:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},4:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},5:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},6:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},7:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},8:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"}},7:{1:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},2:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},3:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},4:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},5:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},6:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},7:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},8:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"}},8:{1:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},2:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},3:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},4:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},5:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},6:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},7:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"},8:{hasShip:!1,shipHasBeenHit:!1,hitAndMiss:!1,shipID:"NA"}}};return{board:i,addShip:(t,n,a,r,h)=>{const o=s(t,n,a,r,h);if(!0===r)for(let e=0;e<t;e++)i[n][a+e].hasShip=!0,i[n][a+e].shipID=h;else for(let e=0;e<t;e++)i[n+e][a].hasShip=!0,i[n+e][a].shipID=h;e[h]=o},receiveAttack:(t,n)=>{if(!0===i[t][n].hasShip){i[t][n].shipHasBeenHit=!0;let s=i[t][n].shipID;e[s].hit(t,n),e[s].isSunk=e[s].shipIsSunk()}else i[t][n].hitAndMiss=!0},shipContainerObj:e,gameFinishedCheck:()=>!0===e.submarine.isSunk&&!0===e.destroyer.isSunk&&!0===e.cruiser.isSunk&&!0===e.battleship.isSunk&&!0===e["aircraft carrier"].isSunk,shipsOnBoard:0}},h=(e,i,t,n,s)=>{let a=!0;const r=t+i;if(!0===s)if(n+i>8)a=!1;else for(let s=0;s<i;s++)!0===e.board[t][n+s].hasShip&&(a=!1);else if(r>8)a=!1;else for(let s=0;s<i;s++)!0===e.board[t+s][n].hasShip&&(a=!1);return a},o=(e,i,t,n,s,a)=>{!0===h(e,i,t,n,s)?(e.addShip(i,t,n,s,a),e.shipsOnBoard++):console.log("isValidForm is false...")}},function(e,i,t){"use strict";t.d(i,"a",(function(){return a})),t.d(i,"c",(function(){return s})),t.d(i,"b",(function(){return r})),t.d(i,"d",(function(){return o}));var n=t(0);const s=()=>{for(let e=1;e<9;e++)for(let i=1;i<9;i++){let t=document.getElementById(e+"-player1-"+i);t.innerHTML="-",t.classList.contains("ship-has-been-hit")&&t.classList.remove("ship-has-been-hit"),t.classList.contains("hit-and-miss")&&t.classList.remove("hit-and-miss"),t.classList.contains("has-a-ship")&&t.classList.remove("has-a-ship")}for(let e=1;e<9;e++)for(let i=1;i<9;i++){let t=document.getElementById(e+"-computer-"+i);t.innerHTML="-",t.classList.contains("ship-has-been-hit")&&t.classList.remove("ship-has-been-hit"),t.classList.contains("hit-and-miss")&&t.classList.remove("hit-and-miss")}},a=(e,i,t,n)=>{for(let a=1;a<9;a++)for(let r=1;r<9;r++){document.getElementById(a+"-computer-"+r).addEventListener("click",()=>{!1===i.board[a][r].hitAndMiss&&!1===i.board[a][r].shipHasBeenHit&&(e.attack(a,r),h(i,"computer"),t.computerAttack(),h(n,"player1")),!0===i.gameFinishedCheck()?(console.log("GAME OVER, PLAYER 1 HAS WON!!"),alert("GAME OVER, PLAYER 1 HAS WON!!"),console.log(i),setTimeout((function(){s()}),1e3)):!0===n.gameFinishedCheck()&&(console.log("GAME OVER, COMPUTER HAS WON!!"),alert("GAME OVER, COMPUTER HAS WON!!"),console.log(n),setTimeout((function(){s()}),1e3))})}},r=e=>{let i=document.getElementById("submit-destoyer-button"),t=document.getElementById("submit-submarine-button"),s=document.getElementById("submit-cruiser-button"),a=document.getElementById("submit-battleship-button"),r=document.getElementById("submit-aircraft-button");i.addEventListener("click",(function(){let i=parseInt(document.getElementById("y-number-destroyer").value),t=parseInt(document.getElementById("x-number-destroyer").value),s=document.getElementById("t1-destroyer").value;s="Horizontal"===s,Object(n.handleFormSubmission)(e,2,i,t,s,"destroyer"),h(e,"player1")})),t.addEventListener("click",(function(){let i=parseInt(document.getElementById("y-number-submarine").value),t=parseInt(document.getElementById("x-number-submarine").value),s=document.getElementById("t1-submarine").value;s="Horizontal"===s,Object(n.handleFormSubmission)(e,3,i,t,s,"submarine"),h(e,"player1")})),s.addEventListener("click",(function(){let i=parseInt(document.getElementById("y-number-cruiser").value),t=parseInt(document.getElementById("x-number-cruiser").value),s=document.getElementById("t1-cruiser").value;s="Horizontal"===s,Object(n.handleFormSubmission)(e,3,i,t,s,"cruiser"),h(e,"player1")})),a.addEventListener("click",(function(){let i=parseInt(document.getElementById("y-number-battleship").value),t=parseInt(document.getElementById("x-number-battleship").value),s=document.getElementById("t1-battleship").value;s="Horizontal"===s,Object(n.handleFormSubmission)(e,4,i,t,s,"battleship"),h(e,"player1")})),r.addEventListener("click",(function(){let i=parseInt(document.getElementById("y-number-aircraft").value),t=parseInt(document.getElementById("x-number-aircraft").value),s=document.getElementById("t1-aircraft").value;s="Horizontal"===s,Object(n.handleFormSubmission)(e,5,i,t,s,"aircraft carrier"),h(e,"player1")}))},h=(e,i)=>{for(let t=1;t<9;t++)for(let n=1;n<9;n++){let s=document.getElementById(t+"-"+i+"-"+n);if(!0===e.board[t][n].shipHasBeenHit?s.classList.add("ship-has-been-hit"):!0===e.board[t][n].hitAndMiss?s.classList.add("hit-and-miss"):s.classList.add("game-board-square"),!0===e.board[t][n].hasShip&&"player1"==i){s.classList.add("has-a-ship");let i=e.board[t][n].shipID;s.innerHTML=i[0]}}},o=e=>{Math.floor(2*Math.random()+1)%2==0?(e.addShip(2,1,1,!0,"destroyer"),e.addShip(3,3,1,!0,"submarine"),e.addShip(3,4,2,!0,"cruiser"),e.addShip(4,2,8,!1,"battleship"),e.addShip(5,6,4,!0,"aircraft carrier")):(e.addShip(2,1,5,!1,"destroyer"),e.addShip(3,3,4,!0,"submarine"),e.addShip(3,8,3,!0,"cruiser"),e.addShip(4,5,7,!1,"battleship"),e.addShip(5,1,8,!0,"aircraft carrier"))}},function(e,i,t){var n=t(3),s=t(4);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var a={insert:"head",singleton:!1};n(s,a);e.exports=s.locals||{}},function(e,i,t){"use strict";var n,s=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(i){if(void 0===e[i]){var t=document.querySelector(i);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[i]=t}return e[i]}}(),r=[];function h(e){for(var i=-1,t=0;t<r.length;t++)if(r[t].identifier===e){i=t;break}return i}function o(e,i){for(var t={},n=[],s=0;s<e.length;s++){var a=e[s],o=i.base?a[0]+i.base:a[0],d=t[o]||0,p="".concat(o," ").concat(d);t[o]=d+1;var c=h(p),l={css:a[1],media:a[2],sourceMap:a[3]};-1!==c?(r[c].references++,r[c].updater(l)):r.push({identifier:p,updater:b(l,i),references:1}),n.push(p)}return n}function d(e){var i=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var s=t.nc;s&&(n.nonce=s)}if(Object.keys(n).forEach((function(e){i.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(i);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(i)}return i}var p,c=(p=[],function(e,i){return p[e]=i,p.filter(Boolean).join("\n")});function l(e,i,t,n){var s=t?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=c(i,s);else{var a=document.createTextNode(s),r=e.childNodes;r[i]&&e.removeChild(r[i]),r.length?e.insertBefore(a,r[i]):e.appendChild(a)}}function u(e,i,t){var n=t.css,s=t.media,a=t.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,f=0;function b(e,i){var t,n,s;if(i.singleton){var a=f++;t=m||(m=d(i)),n=l.bind(null,t,a,!1),s=l.bind(null,t,a,!0)}else t=d(i),n=u.bind(null,t,i),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return n(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;n(e=i)}else s()}}e.exports=function(e,i){(i=i||{}).singleton||"boolean"==typeof i.singleton||(i.singleton=s());var t=o(e=e||[],i);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<t.length;n++){var s=h(t[n]);r[s].references--}for(var a=o(e,i),d=0;d<t.length;d++){var p=h(t[d]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}t=a}}}},function(e,i,t){(i=t(5)(!1)).push([e.i,"body {\n    background-color: lightslategray;\n}\n\n#content {\n    width: 100%;\n}\n\nh1 {\n    height: 25px;\n}\n\n#title {\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif;\n    font-style: italic;\n    color: whitesmoke;\n}\n\n#github-link {\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif;\n    padding-bottom: 10px;\n    color: whitesmoke;\n}\n\n#start-button-div {\n    text-align: center;\n    width: 100%;\n}\n\n#start-button {\n    width: 150px;\n    height: 30px;\n    background-color: rgb(255, 255, 0);\n}\n\n#match-start {\n    width: 150px;\n    height: 30px;\n    margin-top: 10px;\n    background-color: rgb(255, 255, 0);\n}\n\n.player-name-div {\n    width: 47%;\n    height: 50px;\n    margin: 1%;\n    border: solid black 2px;\n    padding-top: 25px;\n    font-size: larger;\n    display: inline-block;\n    text-align: center;\n    background-color: lightcoral;\n    color: whitesmoke;\n}\n\n.gameboard {\n    width: 47%;\n    height: 200px;\n    margin: 1%;\n    border: solid black 2px;\n    /* padding-top: 25px; */\n    font-size: larger;\n    display: inline-block;\n    text-align: center;\n    background-color: lightcoral;\n    color: whitesmoke;\n}\n\n.game-board-square {\n    width: 12.5%;\n    height: 12.5%;\n    display: inline-block;\n}\n\n.has-a-ship {\n    background-color: blue;\n}\n\n.ship-has-been-hit {\n    background-color: green;\n}\n\n.hit-and-miss {\n    background-color: black;\n}\n\n#forms-div {\n    text-align: center;\n    visibility: hidden;\n}\n\n.ship-form {\n    text-align: right;\n    width: 80%;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\ninput:invalid {\n    border: 2px dashed red;\n}\n  \ninput:valid {\n    border: 2px solid black;\n}\n\n",""]),e.exports=i},function(e,i,t){"use strict";e.exports=function(e){var i=[];return i.toString=function(){return this.map((function(i){var t=function(e,i){var t=e[1]||"",n=e[3];if(!n)return t;if(i&&"function"==typeof btoa){var s=(r=n,h=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(h),"/*# ".concat(o," */")),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([s]).join("\n")}var r,h,o;return[t].join("\n")}(i,e);return i[2]?"@media ".concat(i[2]," {").concat(t,"}"):t})).join("")},i.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(n)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(s[r]=!0)}for(var h=0;h<e.length;h++){var o=[].concat(e[h]);n&&s[o[0]]||(t&&(o[2]?o[2]="".concat(t," and ").concat(o[2]):o[2]=t),i.push(o))}},i}},function(e,i,t){"use strict";t.r(i),t.d(i,"gameFlowController",(function(){return r})),t.d(i,"setUpPlayerName",(function(){return a}));var n=t(0),s=t(1);const a=()=>prompt("What is your name?"),r=()=>{Object(s.c)();const e=Object(n.gameBoardFactory)(),i=Object(n.gameBoardFactory)();e&&Object(s.b)(e);const t=Object(n.playerFactory)("anthony",i),a=Object(n.playerFactory)("computer",e);Object(s.d)(i),document.getElementById("forms-div").style.visibility="visible";document.getElementById("match-start").addEventListener("click",()=>{5===e.shipsOnBoard&&(Object(s.a)(t,i,a,e),document.getElementById("forms-div").style.visibility="hidden")})}},function(e,i,t){"use strict";t.r(i);t(2);const{gameBoardFactory:n}=t(0),{gameFlowController:s}=t(6),a=(e,i,t)=>{const n=document.createElement(e);return n.innerHTML=i,t&&n.setAttribute("id",t),n};window.addEventListener("load",(function(){(()=>{let e=document.getElementById("content-div");e.appendChild(a("h1","Battleship!","title"));let i=a("div","","github-link");e.appendChild(i);let t=document.createElement("a"),n=document.createTextNode("GitHub Link");t.appendChild(n),t.href="https://github.com/anthony-rk/battleship-web-game",i.appendChild(t),e.appendChild(a("div","","start-button-div"));const r=document.getElementById("start-button-div"),h=a("button","Start!","start-button");h.addEventListener("click",()=>{console.log("start clicked"),s()}),r.appendChild(h);const o=a("div","Player 1");o.classList.add("player-name-div"),e.appendChild(o);const d=a("div","Computer");d.classList.add("player-name-div"),e.appendChild(d);const p=a("div","","player1-gameboard");p.classList.add("gameboard"),e.appendChild(p);for(let e=1;e<9;e++)for(let i=1;i<9;i++){let t=a("div","",e+"-player1-"+i);t.classList.add("game-board-square"),t.addEventListener("click",(function(){console.log("Hello "+t.id)})),p.appendChild(t)}const c=a("div","","player2-gameboard");c.classList.add("gameboard"),e.appendChild(c);for(let e=1;e<9;e++)for(let i=1;i<9;i++){let t=a("div","",e+"-computer-"+i);t.classList.add("game-board-square"),t.addEventListener("click",(function(){console.log("Hello "+t.id)})),c.appendChild(t)}console.log("page intializer fn ran...")})()}))}]);