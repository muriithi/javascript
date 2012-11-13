function log(){
	try {
		console.log.apply(console , arguments);
	}
	catch(e){									//No console log!
		try {
			opera.postError.apply(opera , arguments);	//Opera yu no console log!
		}
		catch(e){
			alert(Array.prototype.join.call(arguments , "")); //Good old alert
		}
	}
}
			