function createXhr() {
    if(typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
        } else if (typeof ActiveXObject != "undefined") {
            if (typeof arguments.callee.activeXString != "string") {
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"],
                       i, len;
                for (i=0,len=versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex){
                        //skip
                    }
                }
            }
        return new ActiveXObject(arguments.callee.activeXString);
        } else {
            throw new Error("No XHR object available.");
        }
}

function syncAjax(){
    var xhr =createXhr();

    //Synchronous GET Http Request to example.txt
    xhr.open("get", "example.txt", false);
    xhr.send(null);


    //200 series == succeess & 304 == not modified(in cache)
    if((xhr.status >=200 && xhr.status < 304 ) || xhr.status == 304){
        alert(xhr.responseText);
    } else {
        alert("Request was unsuccessful" + xhr.status);
    }
    
}

function asyncAjax(){
    var xhr = createXhr();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhrStatus < 300) || xhr.status == 304){
                alert(xhr.responseText);
            } else {
                alert("Request was unsuccessful : " + xhr.status);
            }
        }
    };
    xhr.open("get", "example.txt", true);
    xhr.send(null);
    
}


