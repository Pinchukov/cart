!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(2)},function(t,e){let n,r,o=document.querySelector(".row"),u=document.querySelector(".result");o.addEventListener("click",(function(t){t.target.classList.contains("add")&&(n=t.target.dataset.title,r=t.target.dataset.price,u.innerHTML+=`<li>Имя: ${n} | Цена: ${r} |\n    Колличество: <input class="cart-quantity-input" type="number" value="1"> | \n    <button class="resBtnRemove">&#10060;</button></li>`)})),u.addEventListener("click",(function(t){t.target.classList.contains("resBtnRemove")&&t.target.parentElement.remove()}))},function(t,e){}]);