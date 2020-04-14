function usern(){
    var use = document.getElementById("user").value;
    RegExp1=/(^[a-zA-Z0-9\._-]+)@([a-zA-Z0-9-]+).[a-z]{2,20}$/
    if (RegExp1.test(use))
    {
        return true;
    }
    else{
        document.getElementById("lbl").style.visibility="visible";
        document.getElementById("user").style.border="1px solid red";
        return false;
    }
}
function passn(){
    var pas = document.getElementById("pass").value;
    RegExp2=/^[a-z]{5,10}[0-9]{2,3}[!@#$%&*()_+-=]{1,2}$/
    if (RegExp2.test(pas))
    {
        return true;
    }
    else{
        document.getElementById("lbl").style.visibility="visible";
        document.getElementById("pass").style.border="1px solid red";
        return false;
    }
}