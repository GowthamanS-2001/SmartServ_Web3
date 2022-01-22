function validateForm() { 
var uname1 = document.getElementById("uname").value; 
 var pass1 = document.getElementById("pass").value; 

 if(uname1 == "") { 
 alert("Username should not be empty")
 
 }

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 if (uname1.match(validRegex))
  {
   
  }
  else{
    alert("You have entered an invalid email address!")
   
}

var checkpass= /^(?=.*[0-9])(?=.*[@])[a-zA-Z0-9@]{4,20}$/;
var def="SmartServTest@123";

if(pass1.match(checkpass) && pass1 ==def){ 
    window.open('dashboard.html')
    return true;
} 
else{
    alert("Password pattern is not matched")
    return false;
}

}