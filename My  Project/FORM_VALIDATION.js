function Email(){
    var mail = document.getElementById("email").value;
    RegExp1=/(^[a-zA-Z0-9\._-]+)@([a-zA-Z0-9-]+).[a-z]{2,20}$/
    if (RegExp1.test(mail))
    {
        document.getElementById("lbl").innerHTML="Valid";
        document.getElementById("lbl").style.color="green";
        document.getElementById("lbl").style.visibility="visible";
        return true;
    }
    else
    {
        document.getElementById("lbl").style.visibility="visible";
        document.getElementById("email").style.border="2px solid green";
        return false;
    }        
}
function Passt(){
    var passed = document.getElementById("pass").value;
    RegExp2=/^[a-z]{5,10}[0-9]{2,3}[!@#$%&*()_+-=]{1,2}$/ 
    if (RegExp2.test(passed))
    {
        document.getElementById("lbl2").innerHTML="Valid";
        document.getElementById("lbl2").style.color="green";
        document.getElementById("lbl2").style.visibility="visible";
        return true;
    }
    else
    {
        document.getElementById("lbl2").style.visibility="visible";
        document.getElementById("pass").style.border="2px solid green";
        return false;
    }        
}
function conf(){
    var passed = document.getElementById("pass").value;
    var confi = document.getElementById("cnfrm").value;
    if(passed === confi){
        document.getElementById("lbl3").innerHTML="Matched";
        document.getElementById("lbl3").style.color="green";
        document.getElementById("lbl3").style.visibility="visible";
        document.getElementById("cnfrm").style.border="2px solid green";
        return true;
    }
    else{
        document.getElementById("lbl3").style.visibility="visible";
        document.getElementById("cnfrm").style.border="2px solid red";
        return false;
    }
}
function capt(){
    var check = document.getElementsById("captcha");
    if (check.checked === false){
        return true;
    }
    else {
        alert("Check Captcha");
        return false;
    }
}