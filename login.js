document.querySelector('#form').addEventListener("submit",hello)
    
   

function hello(){
        event.preventDefault();

        let pass=form.pw.value;
        // console.log(pass)
        let consume=JSON.parse(localStorage.getItem("Data"))
        // console.log(consume.otp)
if(consume){
console.log(consume)
   
      if(consume.otp==pass)
      {
        alert("Congratulations! Sign In Successfuly") 
       return location.replace("indexx.html");
      }
      
} 
else if(consume===null) {
    alert("No Such User Exists")
    return;
// localStorage.setItem('Data', '[]');
}

return alert('Invalid Credentials, Please Enter Right OTP');
}