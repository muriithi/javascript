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
    }
    
    xhr.open("post", "postexample.php", true);
    var form = document.getElementById("yourform here");
    //No need to set form headers explicitly
    xhr.send(new FormData(form));

    }