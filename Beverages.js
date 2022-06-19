import {sidebar} from "./import.js"
document.querySelector("#adi").innerHTML= sidebar();

import {footer} from "./footer.js"
document.querySelector("#footer").innerHTML= footer();

import  home from "./homeport.js"
 document.querySelector(".nav").innerHTML=home()

 

document.getElementById("dill").addEventListener("click",myFunction)

let cart=JSON.parse(localStorage.getItem("basket")) || []



  let h4=document.createElement("h4")
h4.innerText=`Cart Items ${cart.length}`
h4.addEventListener("click",openCart)
h4.style.cursor="pointer"
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


import {Display,handle_sort} from "./append.js";

let p=document.createElement("P")
p.innerText="Beverages"

document.getElementById("pname").append(p)





var fruitsData =[{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/266569_15-red-label-tea.jpg",
  name: "Tea",
  "ng-scope 3": "- Rs",
  price: "1122.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1204483_2-tata-tea-gold-leaf-tea.jpg",
  name: "Leaf Tea",
  "ng-scope 3": "- Rs",
  price: "255"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1204490_1-red-label-tea-natural-care.jpg",
  name: "Tea - Natural Care",
  "ng-scope 3": "- Rs",
  price: "25"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1204484_1-taj-mahal-tea.jpg",
  name: "Tea",
  "ng-scope 3": "- Rs",
  price: "250 "
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1214886_7-fresho-tender-coconut-water-no-added-sugar-flavours.jpg",
  name: "Tender Coconut Water - No Added Sugar, Flavours",
  "ng-scope 3": "- Rs",
  price: "155.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/241695_13-nescafe-sunrise-rich-aroma-instant-coffee-chicory-mix.jpg",
  name: "Sunrise Instant Coffee - Chicory Mix, Rich In Aroma & Flavour",
  "ng-scope 3": "- Rs",
  price: "795.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1210082_2-raw-pressery-coconut-water.jpg",
  name: "Coconut Water",
  "ng-scope 3": "- Rs",
  price: "24"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1209630_1-pepsi-black-soft-drink-max-taste-zero-caldiet.jpg",
  name: "Black Soft Drink - Max Taste, Zero Cal(Diet)",
  "ng-scope 3": "- Rs",
  price: "30.60"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/174367_2-bisleri-mineral-water.jpg",
  name: "Mineral Water",
  "ng-scope 3": "- Rs",
  price: "70.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/186070_8-cothas-coffee-.jpg",
  name: "Coffee - Regular",
  "ng-scope 3": "- Rs",
  price: "270.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/266579_23-bru-instant-coffee.jpg",
  name: "Instant Coffee",
  "ng-scope 3": "- Rs",
  price: "200 "
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1206998_3-paper-boat-coconut-water-refreshing-flavour-vital-electrolytes.jpg",
  name: "Coconut Water - Refreshing Flavour, Vital Electrolytes",
  "ng-scope 3": "- Rs",
  price: "200"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1208188_1-coca-cola-soft-drink.jpg",
  name: "Soft Drink",
  "ng-scope 3": "- Rs",
  price: "864.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/265783_4-frooti-drink-fresh-n-juicy-mango.jpg",
  name: "Drink - Fresh 'N' Juicy Mango",
  "ng-scope 3": "- Rs",
  price: "10.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1209750_2-tata-tea-gold-leaf-tea-1-kg-leaf-tea-250-g.jpg",
  name: "Leaf Tea 1 kg + Leaf Tea 250 g",
  "ng-scope 3": "",
  price: "122"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/251014_11-thums-up-soft-drink.jpg",
  name: "Soft Drink - Refreshing, Strong",
  "ng-scope 3": "- Rs",
  price: "32.64"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1204514_3-bournvita-pro-health-drink-chocolate.jpg",
  name: "Pro-Health Drink - Chocolate",
  "ng-scope 3": "- Rs",
  price: "532.52"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1200130_9-coca-cola-diet-coke-soft-drink.jpg",
  name: "Diet Coke Soft Drink",
  "ng-scope 3": "- Rs",
  price: "36.72"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/265725_12-maaza-juice-mango-refresh.jpg",
  name: "Juice - Mango Refresh",
  "ng-scope 3": "- Rs",
  price: "10.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1204513_1-bru-filter-coffee-green-label.jpg",
  name: "Filter Coffee - Green Label",
  "ng-scope 3": "- Rs",
  price: "142.80"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/40094179_5-pepsi-soft-drink.jpg",
  name: "Soft Drink",
  "ng-scope 3": "- Rs",
  price: "55"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/40071513_8-horlicks-health-nutrition-drink-classic-malt.jpg",
  name: "Health & Nutrition Drink - Classic Malt",
  "ng-scope 3": "- Rs",
  price: "118.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/251006_10-sprite-soft-drink-lime-flavoured.jpg",
  name: "Soft Drink - Refreshing",
  "ng-scope 3": "- Rs",
  price: "864.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/264437_2-tata-tea-kanan-devan-tea.jpg",
  name: "Tea",
  "ng-scope 3": "- Rs",
  price: "148.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1204510_1-cothas-coffee-coffee-powder-speciality-blend-of-coffee-chicory-powder.jpg",
  name: "Coffee - Powder, Speciality Blend Of Coffee & Chicory Powder",
  "ng-scope 3": "- Rs",
  price: "114.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1200126_5-tropicana-fruit-juice-orange-delight.jpg",
  name: "Fruit Juice - Orange Delight",
  "ng-scope 3": "- Rs",
  price: "126"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1213944_3-tang-instant-drink-mix-orange.jpg",
  name: "Instant Drink Mix - Orange",
  "ng-scope 3": "- Rs",
  price: "75"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/266535_3-3-roses-dust-tea.jpg",
  name: "Dust Tea",
  "ng-scope 3": "- Rs",
  price: "133"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1207003_4-paper-boat-lychee-litchi-fruit-juice.jpg",
  name: "Lychee - Litchi Fruit Juice",
  "ng-scope 3": "- Rs",
  price: "216.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/240049_8-tata-tea-premium-the-countrys-tea.jpg",
  name: "Premium - The Countrys Tea",
  "ng-scope 3": "- Rs",
  price:120.00
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1207414_8-raw-pressery-cold-extracted-juice-valencia-orange.jpg",
  name: "Cold Extracted Juice - Valencia Orange",
  "ng-scope 3": "- Rs",
  price: "143.60"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1206975_3-tropicana-fruit-juice-delight-litchi.jpg",
  name: "Fruit Juice - Delight, Litchi",
  "ng-scope 3": "- Rs",
  price: "20.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/231187_8-nescafe-classic-100-pure-instant-coffee.jpg",
  name: "Classic 100% Pure Instant Coffee",
  "ng-scope 3": "- Rs",
  price: "302.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/119377_6-boost-nutrition-drink-health-energy-sports.jpg",
  name: "Nutrition Drink - Health, Energy & Sports",
  "ng-scope 3": "- Rs",
  price: "250.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1213604_3-b-natural-juice-mixed-fruit-merry.jpg",
  name: "Mixed Fruit Juice - Goodness Of Fiber, Made From Choicest Fruits",
  "ng-scope 3": "- Rs",
  price: "60.00"
},
{
  image_url: "https://www.bigbasket.com/media/uploads/p/s/1221265_1-bb-combo-emperia-premium-tea-500g-bb-royal-refined-sugar-sulphurless-1kg.jpg",
  name: "Emperia Premium Tea 500g+ bb Royal Refined Sugar (Sulphurless) 1kg",
  "ng-scope 3": "",
  price: "123"
}
]
  

  

let bdiv=document.getElementById("beauty_product_container")
var basketLSData = JSON.parse(localStorage.getItem("basket")) || [];

document.querySelector("#filter").addEventListener("change", function(){
  handle_sort(fruitsData,bdiv)
});

Display(fruitsData,bdiv,basketLSData)
  
