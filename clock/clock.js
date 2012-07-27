
var clock =(function(){
	
	showTime =function (){
		var clock = document.getElementById("clock");
		var now = new Date();
		clock.innerHTML = now.toLocaleTimeString();
		setTimeout( showTime , 1000);  //Run after 1 second
		
	}
	
	
		
	return {
		time : showTime,
	};
	
}());

window.onload = clock.time;