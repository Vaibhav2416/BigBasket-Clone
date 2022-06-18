
let indi = JSON.parse(localStorage.getItem("individual")) || [];
//console.log(indi);
var basketLSData = JSON.parse(localStorage.getItem("basket")) || [];

Display(indi);

function Display(indi){

   document.querySelector("#individaul");
    var div = document.createElement("div");
    div.setAttribute("id", "avtar");
    var img = document.createElement("img");
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
  