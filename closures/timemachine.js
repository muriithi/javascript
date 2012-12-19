"use strict"

function TimeMachine(){
	//private member
	var destination = 'October 5, 1955';
	
	//public member
	this.getDestination = function(){
		return destination;
	};
}

var delorian = new TimeMachine();

//October 5, 1955
console.log(delorian.getDestination());

//undefined
console.log(delorian.destination);
