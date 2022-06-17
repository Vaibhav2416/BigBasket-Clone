import {sidebar} from "./import.js";

 document.querySelector("body").innerHTML = sidebar();

 let p = document.createElement("p");
   p.innerText = "Foodgrains, Oil & Masala";
   document.getElementById("pname").append(p);


  let foodsData = [ {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/126906_8-aashirvaad-atta-whole-wheat.jpg",
        name: "Atta/Godihittu - Whole Wheat",
        "ng-scope 3": "- Rs",
       price: "115.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/20001214_15-bb-royal-sona-masoori-raw-rice.jpg",
        name: "Sona Masoori Raw Rice/Akki",
        "ng-scope 3": "- Rs",
       price: "510.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/40026603_9-bb-royal-cuminjeera-whole.jpg",
        name: "Cumin/Jeera/Jeerige - Whole",
        "ng-scope 3": "- Rs",
       price: "50"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/10000407_12-bb-royal-refined-sugar-sulphurless.jpg",
        name: "Refined Sugar (Sulphurless)/Sakkare",
        "ng-scope 3": "- Rs",
       price: "47.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/10000423_12-bb-royal-sooji-ordinarybombay-rava.jpg",
        name: "Sooji Ordinary/Bombay Rava",
        "ng-scope 3": "- Rs",
       price: "24.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/1204455_2-fortune-sunflower-refined-oil-sun-lite.jpg",
        name: "Sunflower Refined Oil - Sun Lite",
        "ng-scope 3": "- Rs",
       price: "594.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/40075897_12-bb-royal-sona-masoori-rice-raw-rice-super-premium.jpg",
        name: "Sona Masoori Rice/Akki Raw Rice/Akki - Super Premium",
        "ng-scope 3": "- Rs",
       price: "520.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/10000804_12-bb-royal-toor-dalarhar-dal-desi.jpg",
        name: "Toor Dal/Togari Bele - Desi",
        "ng-scope 3": "- Rs",
       price: "266.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/40075469_9-bb-royal-organic-turtoor-dal.jpg",
        name: "Organic - Toor Dal/Togari Bele",
        "ng-scope 3": "- Rs",
       price: "149.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/1214143_1-nandini-pure-ghee.jpg",
        name: "Pure Ghee",
        "ng-scope 3": "- Rs",
       price: "500.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/30005417_8-bb-popular-sugar.jpg",
        name: "Sugar/Sakkare",
        "ng-scope 3": "- Rs",
       price: "89.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/40044731_13-bb-popular-moong-dal.jpg",
        name: "Moong Dal/Hesaru Bele",
        "ng-scope 3": "- Rs",
       price: "124.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/10000446_17-bb-royal-peanutsmungaphalishengdana-raw.jpg",
        name: "Peanuts/Kadalekayi - Raw",
        "ng-scope 3": "- Rs",
       price: "159.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/241600_5-tata-salt-iodized.jpg",
        name: "Iodized",
        "ng-scope 3": "",
       price: "10"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/40021405_11-bb-popular-almondbadam-californian-giri.jpg",
        name: "Almond/Badam - Californian, Giri",
        "ng-scope 3": "- Rs",
       price: "89.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/30010383_12-bb-popular-peanutsmungaphalishengdana-raw.jpg",
        name: "Peanuts/Kadalekayi - Raw",
        "ng-scope 3": "- Rs",
       price: "80.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/20000541_12-bb-royal-fried-grambengal-gram.jpg",
        name: "Fried Gram/Huri Kadale",
        "ng-scope 3": "- Rs",
       price: "27.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/274120_3-sunpure-refined-sunflower-oil.jpg",
        name: "Refined - Sunflower Oil",
        "ng-scope 3": "",
       price: "20"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/40021402_7-bb-popular-cashewkaju-whole.jpg",
        name: "Cashew/Godambi - Whole",
        "ng-scope 3": "- Rs",
       price: "187.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/40044729_7-bb-royal-maida.jpg",
        name: "Maida",
        "ng-scope 3": "- Rs",
       price: "78.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/40236230_2-aashirvaad-atta-with-multigrains-high-fibre-soft-rotis.jpg",
        name: "Atta With Multigrains - High In Fibre, Aids Digestion, Boosts Immunity",
        "ng-scope 3": "- Rs",
       price: "15"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/40000291_8-tata-sampann-unpolished-toor-dalarhar-dal.jpg",
        name: "Toor Dal/Togari Bele",
        "ng-scope 3": "- Rs",
       price: "81.88"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/20001215_11-bb-popular-rice-raw-sona-masoori.jpg",
        name: "Rice/Akki - Raw, Sona Masoori",
        "ng-scope 3": "- Rs",
       price: "470.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/1200049_2-bb-combo-bb-royal-sona-masoori-raw-rice-10-kg-toor-dal-1kg-sugar-1kg.jpg",
        name: "bb Royal Sona Masoori Raw Rice (10 kg) + Toor Dal 1kg + Sugar 1kg",
        "ng-scope 3": "",
       price: "1600"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/40236231_1-aashirvaad-select-sharbati-atta-100-mp-whole-wheat-rotis-stay-softer-for-longer.jpg",
        name: "Select Sharbatti Atta - 100% MP Whole Wheat, Premium, Packed With Nutrients",
        "ng-scope 3": "- Rs",
       price: "283.80"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/10000803_14-bb-royal-channa-dal.jpg",
        name: "Channa Dal/Kadale Bele",
        "ng-scope 3": "- Rs",
       price: "180.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/30005421_6-bb-popular-kabuli-channa.jpg",
        name: "Kabuli Channa/Kabuli Kadale",
        "ng-scope 3": "- Rs",
       price: "72.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/10000443_16-bb-royal-moong-green-wholesabut.jpg",
        name: "Moong - Green, Whole/Sabut",
        "ng-scope 3": "- Rs",
       price: "139.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/40189429_4-bb-royal-superior-mp-sharbati-atta-fortified.jpg",
        name: "MP Sharbati Atta",
        "ng-scope 3": "- Rs",
       price: "255.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/1203724_1-bb-combo-bb-royal-basmati-rice-everyday-1-kg-fresho-new-potato-1-kg.jpg",
        name: "BB Royal Basmati Rice - Everyday 1 kg + Fresho New Potato 1 kg",
        "ng-scope 3": "",
       price: "300"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/40072510_14-bb-royal-organic-almondbadam.jpg",
        name: "Organic - Almond/Badam",
        "ng-scope 3": "- Rs",
       price: "119.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/40000263_15-bb-popular-toorarhar-dal.jpg",
        name: "Toor/Arhar Dal",
        "ng-scope 3": "- Rs",
       price: "647.70"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/1203529_5-saffola-gold-pro-healthy-lifestyle-edible-oil.jpg",
        name: "Gold - Pro Healthy Lifestyle Edible Oil",
        "ng-scope 3": "- Rs",
       price: "225.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/1220742_1-aashirvaad-atta-whole-wheat-10-kg-iodised-salt-1-kg.jpg",
        name: "Atta - Whole Wheat 10 kg + Iodised Salt 1 kg",
        "ng-scope 3": "",
       price: "1500"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/20000430_8-bb-royal-urad-gota-whole.jpg",
        name: "Urad Gota - Whole",
        "ng-scope 3": "- Rs",
       price: "72.00"
    },
    {
       image_url: "https://www.bigbasket.com/media/uploads/p/s/1204461_1-fortune-mustard-oil-kachi-ghani.jpg",
        name: "Mustard Oil - (Kachi Ghani)",
        "ng-scope 3": "- Rs",
       price: "1005.00"
    }
];
 

 var basketLSData = JSON.parse(localStorage.getItem("basket")) || [];

   
 import {Display, handle_sort} from "./append.js";

 let bdiv = document.getElementById("beauty_product_container");
  Display(foodsData, bdiv, basketLSData);
  
  document.querySelector("#filter").addEventListener("change", function(){
   handle_sort(foodsData, bdiv);
  });
  