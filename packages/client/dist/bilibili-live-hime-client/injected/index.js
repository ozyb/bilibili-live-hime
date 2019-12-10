/*!
 * bilibili-live-hime v1.0.1
 * Github: https://github.com/zhw2590582/bilibili-live-hime
 * (c) 2018-2019 Harvey Zack
 * Released under the MIT License.
 */

var BilibiliLiveHimeInjected=function(){"use strict";var t=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")};function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var e=function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t},i="blh";function r(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelector(t)}return new(function(){function n(){t(this,n),window.location.href.includes(i)&&this.init()}return e(n,[{key:"init",value:function(){this.getChatHistoryList().then((function(t){new MutationObserver((function(t){t.forEach((function(t){Array.from(t.addedNodes||[]).forEach((function(t){if(t.classList.contains("danmaku-item"))try{window.postMessage({type:"danmu",data:{uid:Number(t.dataset.uid),uname:t.dataset.uname.trim(),text:t.dataset.danmaku.trim()}})}catch(t){}if(t.classList.contains("gift-item"))try{window.postMessage({type:"gift",data:{uid:null,uname:r(".username",t).innerText.trim(),action:r(".action",t).innerText.trim(),gift:r(".gift-name",t).innerText.trim(),num:r(".gift-num",t).innerText.trim(),count:r(".gift-count",t).innerText.trim()}})}catch(t){}if(t.classList.contains("guard-buy"))try{window.postMessage({type:"guard",data:{uid:null,uname:r(".username",t).innerText.trim(),action:"购买",gift:"舰长",num:"",count:r(".count",t).innerText.trim()}})}catch(t){}}))}))})).observe(t,{childList:!0})})),this.getPenuryGiftMsg().then((function(t){new MutationObserver((function(t){t.forEach((function(t){Array.from(t.addedNodes||[]).forEach((function(t){try{window.postMessage({type:"gift",data:{uid:null,uname:r(".username",t).innerText.trim(),action:r(".action",t).innerText.trim(),gift:r(".gift-name",t).innerText.trim(),num:"",count:r(".count",t).innerText.trim()}})}catch(t){}}))}))})).observe(t,{childList:!0})}))}},{key:"getChatHistoryList",value:function(){return new Promise((function(t){!function n(){var e=r("#chat-history-list");e?t(e):setTimeout(n,1e3)}()}))}},{key:"getPenuryGiftMsg",value:function(){return new Promise((function(t){!function n(){var e=r("#penury-gift-msg");e?t(e):setTimeout(n,1e3)}()}))}}]),n}())}();
