import  home from "./homeport.js"
 document.querySelector(".nav").innerHTML=home()

 

document.getElementById("dill").addEventListener("click",myFunction)

let cart=JSON.parse(localStorage.getItem("basket")) || [];



  let h4=document.createElement("h4")
h4.innerText=`Cart Items ${cart.length}`


let base=document.getElementById("ket")
base.append(h4)


let consume=JSON.parse(localStorage.getItem("Data"))
console.log(consume.name)

let naaav=document.getElementById("update")
naaav.innerText=consume.name
naaav.style.fontWeight="bold"
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
let tab=0
naaav.addEventListener("click",off)
function off(){
    tab++
 let process=document.getElementById("upper")
if(tab===1){
 
  process.innerHTML=null
    let div=document.createElement("div")
    div.setAttribute("class","make")
    
    let p=document.createElement("p")
    p.innerText="Log Out"
    p.style.cursor="pointer"
    p.addEventListener("click",logOff)
    div.append(p)
    process.append(div)
}
else if(tab===2){
    process.innerHTML=null
    tab=0
}

}

function logOff(){
    console.log("trigete")
    window.location.href="index.html"
}



let indi = JSON.parse(localStorage.getItem("individual")) || [];
//console.log(indi);
var basketLSData = JSON.parse(localStorage.getItem("basket")) || [];

Display(indi);

function Display(indi){

   document.querySelector("#individaul");
    var div = document.createElement("div");
    div.setAttribute("id", "avtar");
    var img = document.createElement("img");
    img.setAttribute("class","picc")
    img.style.width = "250px";
  
    img.setAttribute("src", indi.image);
    var Name = document.createElement("h3");
    Name.style.fontSize = "25px";
    Name.style.marginLeft ="12px"
  
    Name.innerText = indi.name;
  
  
    var dollar = document.createElement("h4");
    dollar.innerText = "Rs- ";
    dollar.style.fontSize = "25px"
    dollar.style.marginLeft = "70px"
    dollar.style.display = "inline"
  
  
    var Price = document.createElement("h4");
    Price.innerText = indi.price;
    Price.style.marginLeft = "1px"
    Price.style.display = "inline"
    Price.style.fontSize = "25px"
  
    var button = document.createElement("button");
    button.innerText = "Add To Basket";
    button.setAttribute("id", "add_to_basket");
    button.addEventListener("click", Addtobasket);
    function Addtobasket(){
      var addedProduct = {
        image: indi.image_url,
        name: indi.name,
        price: indi.price
      }
      // console.log(elm.image_url);
      basketLSData.push(addedProduct);
      localStorage.setItem("basket", JSON.stringify(basketLSData));
      alert("Product added Successfully");
      window.location.href = "basket.html"
    }
    div.append(img);
   let desc = document.getElementById("desc");
   desc.append(Name, dollar, Price, button )
    
    document.querySelector("#individual").append(div);
    document.getElementById("main").append(div, desc);
   
  }
  