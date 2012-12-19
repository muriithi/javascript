(function () {
    "use strict";

    function debug(msg) {
        
        //Find debugging section and create one if none exists
        var log = document.getElementById("debuglog");
        if (!log) {
            log = document.createElement("div");
            log.id = "debulog";
            log.innerHtml = "<h1> Debug Log</h1>";
            document.body.appendChild(log);
        }
        
        //Wrap message in <pre> and append it to the log;
        var pre = document.createElement("pre");
        var text = document.createTextNode(msg);
        pre.appendChild(text);
        log.appendChild(pre);
        
    }
    debug("Test message");
}());
        
    
    
    