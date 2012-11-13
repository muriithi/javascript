"use strict"

var x =42;
console.log(x);

var message = (function(x){
	return function(){
		console.log("x is " + x);
	}
})(x);

message();

x = 12;

console.log(x);

message();

