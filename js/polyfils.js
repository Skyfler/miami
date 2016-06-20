"use strict";

module.exports = function() {

    function runAll () {
        polyfilForMatches();
        polyfilForClosest();
    }
    
    function polyfilForMatches() {
            var e = Element.prototype;
            e.matches || (e.matches=e.matchesSelector||function(selector){
                    var matches = document.querySelectorAll(selector), th = this;
                    return Array.prototype.some.call(matches, function(e){
                        return e === th;
                    });
                });
    
    }
    
    function polyfilForClosest() {
        
        var e = Element.prototype;
            e.closest = e.closest || function(css){
                    var node = this;
    
                    while (node) {
                        if (node.matches(css)) return node;
                        else node = node.parentElement;
                    }
                    return null;
                }
    
    }

    runAll();
}();