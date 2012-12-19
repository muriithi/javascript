function printprops(o) {
    "use strict";
    var p;
    for (p in o) {
	    console.log(p + ":" + o[p] + "\n");
    }
}

var person = {
    fname : "muriithi",
    lname : "kamweti"
};

printprops(person);
    


