
import  home from "./homeport.js"
 document.querySelector(".nav").innerHTML=home()

 

document.getElementById("dill").addEventListener("click",myFunction)

let cart=JSON.parse(localStorage.getItem("basket")) || []



  let h4=document.createElement("h4")
h4.innerText=`Cart Items ${cart.length}`
h4.style.cursor="pointer"
h4.addEventListener("click",openCart)
function openCart(){
  window.location.href="basket.html"
}

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




// variable to store index
var slideIndex = 0;
// calling the function
Slides();
// creating the function which contains code to slide the images
function Slides() {
  var i;
  var slides = document.getElementsByClassName("Slide");
  var dots = document.getElementsByClassName("circle");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(Slides, 2000); // Change image every 2 seconds
}

//for second slideshow

// variable to store index
var slide1Index = 0;
// calling the function
Slides1();
// creating the function which contains code to slide the images
function Slides1() {
  var i;
  var slides1 = document.getElementsByClassName("slide");
  var dots1 = document.getElementsByClassName("circle1");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  slide1Index++;
  if (slide1Index > slides1.length) {slide1Index = 1}    
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slide1Index-1].style.display = "block";  
  dots1[slide1Index-1].className += " active";
  setTimeout(Slides1, 4000); // Change image every 4 seconds
}

// variable to store index
var slide2Index = 0;
// calling the function
Slides2();
// creating the function which contains code to slide the images
function Slides2() {
  var i;
  var slides2 = document.getElementsByClassName("slide1");
  var dots2 = document.getElementsByClassName("circle2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slide2Index++;
  if (slide2Index > slides2.length) {slide2Index = 1}    
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slide2Index-1].style.display = "block";  
  dots2[slide2Index-1].className += " active";
  setTimeout(Slides2, 4000); // Change image every 4 seconds
}


// variable to store index
var slide3Index = 0;
// calling the function
Slides3();
// creating the function which contains code to slide the images
function Slides3() {
  var i;
  var slides3 = document.getElementsByClassName("slide2");
  var dots3 = document.getElementsByClassName("circle3");
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";  
  }
  slide3Index++;
  if (slide3Index > slides3.length) {slide3Index = 1}    
  for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slide3Index-1].style.display = "block";  
  dots3[slide3Index-1].className += " active";
  setTimeout(Slides3, 4000); // Change image every 4 seconds
}
import {footer} from "./footer.js"

document.querySelector(".footer").innerHTML = footer();
