



function ContactValidate() {
    const submitBTN = document.getElementById('Submit');
    const Name = document.getElementById('Name').value;
    const Email = document.getElementById('Email').value;
    const MsgBox = document.getElementById('MessageArea').value;
    var usercheck = /^[A-Za-z.]{3,20}$/;
    var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    

    if (usercheck.test(Name)) {
        document.getElementById("namewarn").innerHTML = "";
    }else{
        document.getElementById("namewarn").innerHTML = "**Username is Invalid";
        return false
    }
    
    if (emailcheck.test(Email)) {
        document.getElementById("emailwarn").innerHTML = "";
    }else{
        document.getElementById("emailwarn").innerHTML = "**Email is Invalid";
        return false
    }
    
    if (MsgBox !== "") {
        document.getElementById("warningmsg").innerHTML = "";
    }
    else{
        document.getElementById("warningmsg").innerHTML = "**MessageBox must be Filled";
        return false;

    }
    
    
}