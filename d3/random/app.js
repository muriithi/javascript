(function draw() {
	"use strict";
	var dataset =[];

	for (var i=0; i<30;i++){
	var random = Math.random()*30; //genetare random number 0 - 30
	dataset = dataset.concat(random);
	}


	d3.select("body")
		.selectAll("div")
		.data(dataset)
		.enter()
		.append("div")
		.attr("class","bar")
		.style("height" ,function(d){
		var barHeight = d*5;
		return barHeight+"px";
		});
	
})();
	
	
	