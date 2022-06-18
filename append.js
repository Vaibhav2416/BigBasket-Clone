
function handle_sort(foodsData,bdiv){

 
    var sort_type = document.querySelector("#filter").value;

    if(sort_type=="none"){
      Display(foodsData,bdiv);
    }
    else if(sort_type == "asc" ){
      foodsData.sort(function (a,b){
         console.log(b.Price)
        return a.price-b.price;
      });
      // console.log(dressData);
      Display(foodsData,bdiv);
    }
    else if(sort_type == "dec"){
      foodsData.sort(function (a,b){
        
        return (b.price) - (a.price);
      });
      Display(foodsData,bdiv);


    }
    else{
      var filtered = foodsData.filter(function (elem){
        return elem.category == sort_type;
      })
      Display(filtered,bdiv);
    }
  }



function Display(foodsData,bdiv,basketLSData){
  
    document.querySelector("#beauty_product_container").innerHTML ="";
    foodsData.forEach(function(elm){

    var div = document.createElement("div");
    div.setAttribute("id", "avtar");
    var img = document.createElement("img");
    img.style.width = "250px";

    img.setAttribute("src", elm.image_url);
    var Name = document.createElement("h3");
    Name.style.fontSize = "15px";
    Name.style.marginLeft ="12px"

    Name.innerText = elm.name;


    var dollar = document.createElement("h4");
    dollar.innerText = "Rs- ";
    dollar.style.marginLeft = "70px"
    dollar.style.display = "inline"


    var Price = document.createElement("h4");
    Price.innerText = elm.price;
    Price.style.marginLeft = "1px"
    Price.style.display = "inline"

    var button = document.createElement("button");
    button.innerText = "Add";
    button.style.display = "block"
    button.style.margin = "10px 65px"
    button.setAttribute("id", "add_to_basket");
    button.addEventListener("click", Addtobasket);
    function Addtobasket(){
      var addedProduct = {
        image: elm.image_url,
        name: elm.name,
        price: elm.price
      }
      // console.log(elm.image_url);
      basketLSData.push(addedProduct);
      localStorage.setItem("basket", JSON.stringify(basketLSData));
      alert("Product added Successfully");
    }
    div.append(img, Name, dollar, Price, button);

    var add = {
      image: elm.image_url,
      name: elm.name,
      price: elm.price
    }
    div.onclick = () => {
      playvideo(add);
    };
    //document.querySelector("#beauty_product_container").append(div);
bdiv.append(div)



  });
}
 //Display(foodsData);


 let playvideo = (add) => {
   console.log(add);
      localStorage.setItem("individual",JSON.stringify(add));
      window.location.href="./zoom.html";
 };

 export{Display,handle_sort}