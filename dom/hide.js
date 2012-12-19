(function () {
    "use strict";
    
    function hide(e, reflow) {//hide element e by scripting it's css style
        if (reflow) {
            e.style.display = "none"; //Hide e and use it's space
        };
        else {
            e.style.visibility = "hidden";
        };
    }    
}());