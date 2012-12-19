"use strict"
obj = {};
	
obj.method = function(){
	var that = this;
	this.counter = 0;
	
	var count = function(){
		that.counter += 1;
		console.log(that.counter);
	}
	count();
	count();
	console.log(this.counter);
}

obj.method();
	
