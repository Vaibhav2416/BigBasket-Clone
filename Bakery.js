

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
p.innerText="Bakery Cakes & Dairy"
document.getElementById("pname").append(p)




 let foodsData = 

[
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/40003150_3-milky-mist-paneer-premium-fresh.jpg",
        name: "Paneer - Premium Fresh",
        "ng-scope 3": "- Rs",
        price: "187.92"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/242671_1-nandini-goodlife-toned-milk.jpg",
        name: "GoodLife UHT Treated Toned Milk",
        "ng-scope 3": "290",
        price: "12.00"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1200163_4-amul-butter-pasteurized.jpg",
        name: "Butter - Pasteurized",
        "ng-scope 3": "- Rs",
        price: "99.96"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1200180_4-milky-mist-curd-farm-fresh.jpg",
        name: "Curd - Farm Fresh",
        "ng-scope 3": "- Rs",
        price: "79.56"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/100285703_15-nandini-goodlife-toned-milk.jpg",
        name: "GoodLife UHT Treated Toned Milk",
        "ng-scope 3": "290",
        price: "290"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/40137716_10-id-natural-paneer.jpg",
        name: "Soft & Creamy Paneer",
        "ng-scope 3": "- Rs",
        price: "290"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1204357_1-fresho-bread-whole-wheat-chemical-free-400g-eggs-table-tray-12pcs.jpg",
        name: "Bread - Whole Wheat, Chemical Free 400G + Eggs - Table Tray 12pcs",
        "ng-scope 3": "290",
        price: "290"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1204360_1-fresho-bread-whole-wheat-chemical-free-400g-eggs-table-tray-30pcs.jpg",
        name: "Bread - Whole Wheat, Chemical Free 400G + Eggs - Table Tray 30pcs",
        "ng-scope 3": "290",
        price: "290"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1207078_2-amul-masti-buttermilk-spice.jpg",
        name: "Masti Buttermilk - Spice",
        "ng-scope 3": "- Rs",
        price: "36.00"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1204354_1-fresho-bread-whole-wheat-chemical-free-400g-eggs-regular-6pcs.jpg",
        name: "Bread - Whole Wheat, Chemical Free 400G + Eggs - Regular 6pcs",
        "ng-scope 3": "290",
        price: "290"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1204352_1-fresho-sandwich-bread-white-chemical-free-400g-eggs-regular-6pcs.jpg",
        name: "Sandwich Bread - White, Chemical Free 400G + Eggs - Regular 6pcs",
        "ng-scope 3": "290",
        price: "290"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1209046_3-amul-taaza-homogenised-toned-milk.jpg",
        name: "Homogenised Toned Milk",
        "ng-scope 3": "- Rs",
        price: "68.00"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1204353_1-fresho-bread-brown-chemical-free-400g-eggs-regular-6pcs.jpg",
        name: "Bread - Brown, Chemical Free 400G + Eggs - Regular 6pcs",
        "ng-scope 3": "290",
        price: "1111"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/244999_1-nandini-goodlife-toned-milk.jpg",
        name: "GoodLife UHT Treated Toned Milk",
        "ng-scope 3": "290",
        price: "112"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/40025355_6-fresho-whole-wheat-bread-safe-preservative-free.jpg",
        name: "Whole Wheat Bread - Safe, Preservative Free",
        "ng-scope 3": "290",
        price: "290"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/104808_9-amul-cheese-slices.jpg",
        name: "Processed Cheese Spread",
        "ng-scope 3": "- Rs",
        price: "245.00"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/242673_1-nandini-slim-skimmed-milk.jpg",
        name: "Slim UHT Treated Skimmed Milk",
        "ng-scope 3": "- Rs",
        price: "26.00"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1209134_2-milky-mist-natural-set-curd.jpg",
        name: "Natural Set Curd",
        "ng-scope 3": "- Rs",
        price: "222.96"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1209043_2-amul-gold-homogenised-standardised-milk.jpg",
        name: "Homogenised Standardised Milk",
        "ng-scope 3": "- Rs",
        price: "73.44"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/40087525_4-fresho-sandwich-bread-safe-preservative-free.jpg",
        name: "Sandwich Bread - Safe, Preservative Free",
        "ng-scope 3": "- Rs",
        price: "290"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1213687_1-nandini-cooking-butter-unsalted.jpg",
        name: "Cooking Butter - Unsalted",
        "ng-scope 3": "- Rs",
        price: "400.00"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/312169_13-britannia-bake-rusk-toast.jpg",
        name: "Toastea Rusk Toast - Crispy Baked, Premium Quality Teatime Snack",
        "ng-scope 3": "290",
        price: "290"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/40087526_5-fresho-brown-bread-safe-preservative-free.jpg",
        name: "Brown Bread - Safe, Preservative Free",
        "ng-scope 3": "- Rs",
        price: "290"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/40045943_1-amul-butter-pasteurised.jpg",
        name: "Pasteurised Butter Chiplets",
        "ng-scope 3": "290",
        price: "290"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/279588_6-amul-malai-paneer.jpg",
        name: "Malai Paneer",
        "ng-scope 3": "- Rs",
        price: "80.58"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/40202190_1-id-creamy-thick-curd.jpg",
        name: "Creamy Thick Curd",
        "ng-scope 3": "- Rs",
        price: "32.64"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/40020214_9-nestle-everyday-dairy-whitener-milk-powder-for-tea.jpg",
        name: "Everyday Dairy Whitener - Milk Powder For Tea",
        "ng-scope 3": "- Rs",
        price: "10.00"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1209279_4-yakult-probiotic-health-drink.jpg",
        name: "Probiotic Health Drink",
        "ng-scope 3": "- Rs",
        price: "320.00"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1214334_3-britannia-treat-croissant-cocoa-creme-roll-100-veg.jpg",
        name: "Treat Croissant - Cocoa Creme Filling, 100% Veg, Soft",
        "ng-scope 3": "- Rs",
        price: "456"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/40025357_4-fresho-pav-safe-preservative-free.jpg",
        name: "Pav - Safe, Preservative Free",
        "ng-scope 3": "290",
        price: "2290"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/40000519_2-nandini-slim-skimmed-milk.jpg",
        name: "Slim UHT Treated Skimmed Milk",
        "ng-scope 3": "290",
        price: "290"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/40087524_4-fresho-multigrain-bread-safe-preservative-free.jpg",
        name: "Multigrain Bread - Safe, Preservative Free",
        "ng-scope 3": "- Rs",
        price: "390"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1212194_1-fresho-whole-wheat-bread-safe-preservative-free-400-g-pav-300-g.jpg",
        name: "Whole Wheat Bread - Safe, Preservative Free 400 g + Pav 300 g",
        "ng-scope 3": "290",
        price: "790"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/1214335_3-britannia-treat-croissant-vanilla-creme-roll-100-veg.jpg",
        name: "Treat Croissant - Vanilla Creme Filling, 100% Veg, Soft",
        "ng-scope 3": "- Rs",
        price: "62"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/40004532_8-mother-dairy-dahi-made-from-toned-milk.jpg",
        name: "Dahi - Made From Toned Milk",
        "ng-scope 3": "- Rs",
        price: "50.00"
    },
    {
        image_url: "https://www.bigbasket.com/media/uploads/p/s/270620_4-nandini-paneer.jpg",
        name: "Fresh Paneer",
        "ng-scope 3": "- Rs",
        price: "340.00"
    }
]


  
let bdiv=document.getElementById("beauty_product_container")

 var basketLSData = JSON.parse(localStorage.getItem("basket")) || [];
 document.querySelector("#filter").addEventListener("change", function(){
    handle_sort(foodsData,bdiv)
 })


    
  




Display(foodsData,bdiv,basketLSData)