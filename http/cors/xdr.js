var xdr = new XDomainRequest();
xdr.onload = function(){
	alert(xdr.responseText);
};
xdr.onerror = function(){
	alert("An error occurred.");
};
xdr.timeout = 1000;
xdr.ontimeout = function(){
	alert("Request took too long.");
};
xdr.open("get", "http://www.somewhere-else.com/page/");
xdr.send(null);
