function distance(x1, y1, x2, y2) {
    "use strict";
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}


distance(9, 23, 34, 6);