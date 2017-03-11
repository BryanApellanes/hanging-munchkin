module.exports = (function(){
    "use strict";

    return function(action, selector, wait, then){
        this.selector = selector;
        this.action = action;
        this.wait = wait;
        this.then = then;
    }
})();