document.querySelector("#form").addEventListener("submit",submitplay)

    let bio=JSON.parse(localStorage.getItem("Data")) || [];



    function submitplay(){
       event.preventDefault();

       let p1=Math.floor((Math.random() * 1000000) + 1000);
       console.log(p1)
      let obj= {
         name: form.name.value,
         email: form.email.value,
         otp:p1
       }
      

       function otp(p1){
        alert(`Your OTP Is  ${p1}`)
         window.location.href="login.html"
       }

     


       localStorage.setItem("Data",JSON.stringify(obj))
       let full=document.querySelectorAll("input")
       {
           full.forEach(function(element){
                element.value=null;
           })
       }
       otp(p1) 
    //  window.location.href="login.html"

    }
    