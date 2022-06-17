import navbar from "./exportnav.js"
document.getElementById("container").innerHTML=navbar()


let clas= document.getElementById("dill").addEventListener("click",myFunction)
let count=0
  function myFunction(){
    count++
    console.log("triggers")
    if(count===1){
    document.getElementById("down").style.display="flex"
    }
    else if(count===2){
        document.getElementById("down").style.display="none" 
        count=0
    }
  }


let cart=JSON.parse(localStorage.getItem("basket"))

let h4=document.createElement("h4")
h4.innerText=`Cart Items ${2}`

let base=document.getElementById("ket")
base.append(h4)