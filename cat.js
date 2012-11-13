var Pet = function(name,legs){
	this.name=name;
	this.legs = legs;
};
	
Pet.prototype.getDetails = function() {
	return this.name + ' has '+ this.legs +' legs '
	
};

var Cat = function(){
	