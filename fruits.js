
 import {sidebar} from "./import.js"
 document.querySelector("#adi").innerHTML= sidebar();

 import {footer} from "./footer.js"
document.querySelector("#footer").innerHTML= footer();

 let p = document.createElement("p");
   p.innerText = "Fruits & Vegetables";
   document.getElementById("pname").append(p);


let fruitsData = [ {
    image_url: "https://www.bigbasket.com/media/uploads/p/s/1201414_1-fresho-onion.jpg",
    name: "Onion",
    
   price: "5"
},

{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/40162469_6-fresho-potato-new-crop.jpg",
    name: "Potato",
    
   price: "60.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000298_10-fresho-banganapalli-mango.jpg",
    name: "Banganapalli Mango",
    
   price: "91.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg",
    name: "Carrot - Orange",
    
   price: "61.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/40218332_1-fresho-grapes-green.jpg",
    name: "Grapes- Green Seedless, Thompson",
    "btn": "",
   price: "10"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000203_16-fresho-tomato-local.jpg",
    name: "Tomato - Local",
    
   price: "51.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/1203678_1-fresho-tender-coconut-medium.jpg",
    name: "Tender Coconut - Medium",
    
   price: "47"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000143_14-fresho-ladies-finger.jpg",
    name: "Ladies Finger",
    
   price: "8.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000201_15-fresho-tomato-hybrid.jpg",
    name: "Tomato - Hybrid",
    
   price: "35.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000031_21-fresho-banana-yelakki.jpg",
    name: "Banana - Yelakki",
    
   price: "91.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
    name: "Cauliflower",
    "btn": "",
   price: "50"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/40103540_4-fresho-watermelon-medium.jpg",
    name: "Watermelon -  Medium",
    
   price: "80"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/1203441_1-fresho-onion-1-kg-new-potato-1-kg-tomato-hybrid-1-kg.jpg",
    name: "Onion 1 kg + New Potato 1 kg + Tomato - Hybrid 1 kg",
    "btn": "",
   price: "37"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000335_15-fresho-lemon.jpg",
    name: "Lemon",
    
   price: "129.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000188_12-fresho-palak-cleaned-without-roots.jpg",
    name: "Palak - Cleaned, without roots",
    
   price: "54.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000102_17-fresho-cucumber.jpg",
    name: "Cucumber",
    
   price: "19.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000302_4-fresho-alphonso-mango-badami.jpg",
    name: "Alphonso Mango - Badami",
    "btn": "",
   price: "60"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
    name: "Capsicum - Green",
    
   price: "56.50"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/40089743_2-fresho-beans-haricot.jpg",
    name: "Beans - Haricot",
    
   price: "17.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000273_16-fresho-mushrooms-button.jpg",
    name: "Mushrooms - Button",
    "btn": "",
   price: "46"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000326_14-fresho-coriander-leaves.jpg",
    name: "Coriander Leaves",
    
   price: "81.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000269_30-fresho-pomegranate.jpg",
    name: "Pomegranate",
    "btn": "",
   price: "26"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000093_16-fresho-coconut-medium.jpg",
    name: "Coconut - Medium",
    "btn": "",
   price: "40"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000066_25-fresho-cabbage.jpg",
    name: "Cabbage",
    "btn": "",
   price: "36"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000046_17-fresho-beetroot.jpg",
    name: "Beetroot",
    
   price: "22.50"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000599_12-fresho-cucumber-english.jpg",
    name: "Cucumber - English",
    
   price: "26.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000025_27-fresho-banana-robusta.jpg",
    name: "Banana - Robusta",
    
   price: "52.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/1203781_1-fresho-apple-red-delicious-washington-regular.jpg",
    name: "Apple - Red Delicious / Washington, Regular",
    
   price: "256.00"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000081_19-fresho-chilli-green-long-medium.jpg",
    name: "Chilli - Green Long, Medium",
    
   price: "6.10"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/20000745_5-fresho-bottle-gourd.jpg",
    name: "Bottle Gourd",
    "btn": "",
   price: "50"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000108_21-fresho-drumstickmoringa.jpg",
    name: "Drumstick/Moringa",
    "btn": "",
   price: "30"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000063_20-fresho-broccoli.jpg",
    name: "Broccoli",
    
   price: "40"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/40033819_27-fresho-apple-shimla.jpg",
    name: "Apple - Shimla",
    
   price: "28"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/50000509_5-fresho-ginger-organically-grown.jpg",
    name: "Ginger - Organically Grown",
    
   price: "5.20"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/1202153_1-fresho-cucumber-carrot-beetroot-500g-each-salad.jpg",
    name: "Cucumber, Carrot & Beetroot 500g Each Salad",
    "btn": "",
   price: "30"
},
{
    image_url: "https://www.bigbasket.com/media/uploads/p/s/10000330_14-fresho-garlic.jpg",
    name: "Garlic",
    
   price: "91.00"
}
]
  

  
var basketLSData = JSON.parse(localStorage.getItem("basket")) || [];
document.querySelector("#filter").addEventListener("change", function(){
   handle_sort(fruitsData, bdiv)
});
  
  
  
  import {Display, handle_sort} from "./append.js";

  let bdiv = document.getElementById("beauty_product_container");
          Display(fruitsData, bdiv, basketLSData);

 