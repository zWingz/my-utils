
/**
 * @file 浏览器垫片
 * @author zhengzhirong@youmi.net
 *
 */


 export function closestPolyfill() {
     /**
      * Element.closest() polyfill
      */
     if(!Element.prototype.closest) {
         if(!Element.prototype.matches) {
             Element.prototype.matches =
                 Element.prototype.msMatchesSelector ||
                 Element.prototype.webkitMatchesSelector
         }
         Element.prototype.closest = function(s) {
             let el = this
             if(!document.documentElement.contains(el)) {
                 return null
             }
             while(el) {
                 if(el.matches(s)) {
                     return el
                 }
                 el = el.parentElement
             }
             return null
         }
     }
 }
