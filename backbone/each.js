//_.each - Iterates over a list yielding each member to an iterator function

_.each([1,2,3,4], function(num) {
	console.log(num);
});


//

_.each({ 'one' : 1, 'two' : 2, 'three' : 3}, function (num, key){
	console.log(num, key);
});