window.onload = function() {
    var nick = prompt("Enter your nickname"); //Get user's nickname
    var input = document.getElementById("input");
    input.focus();
    
    //Open a websocket to send and receive chat messages
    var socket = new WebSocket("ws://" + location.host + "/");
    
    //Receiveing messages
    socket.onmessage = function(event){
	var message = event.data;
	var node = document.createTextNode(msg);
	var div = document.createElement("div");
	div.appendChild(node);
	document.body.insertBefore(div, input);
	input.scrollIntoView();
	};
    //Send messages
    input.onchange = function() {
	var msg = nick + ":" + input.value;
	socket.send(msg);
	input.value = "";
	};

};