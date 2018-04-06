var str=""
function checkform() {
    var usernameip=checkname();
    var pass=checkpass();
     if(!(usernameip&&pass)){
         alert(str);
     }

}

function checkname() {
    var  username=document.getElementById("username");
    if (username.value.length===0) {
        str+="please input username, ";
        return false;
    }
    else{
        return true;
    }
}

function checkpass() {
    var  pass=document.getElementById("password");
    if (pass.value.length===0) {
        str+="please input password, ";
        return false;
    }
    else{
        return true;
    }
}