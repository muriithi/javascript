function factorial(x) {
    "use strict";
    if (x <= 1) {
	    return 1;
    } else {
            return x* factorial(x - 1);
    }
}

factorial(9);