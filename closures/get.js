"use strict"

function getFunction(value){
	return function(value){
		return value;
	}
}

var a = getFunction(),
	b =getFunction(),
	c = getFunction()


console.log(a(0));

console.log(b(1));

console.log(c(2));

console.log(a===b);
