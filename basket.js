import {footer} from "./footer.js"
document.querySelector("#footer").innerHTML= footer();
let basketLSData  =JSON.parse(localStorage.getItem("basket")) || [];

console.log(basketLSData)

let sum=0
for(let i=0;i<basketLSData.length;i++){
  let b=  parseInt(basketLSData[i].price)
  console.log(typeof(b))

    sum=Math.floor(sum+b)

}
console.log(sum)

var cont = document.querySelector("#total_price")
var divison = document.createElement("h2")
divison.innerText = "Rs. " +sum
divison.style.marginLeft = "150px"

var total = document.createElement("h2")
total.innerText = "TOTAL PRICE :"
cont.append(total,divison)


localStorage.setItem("Total_sum", JSON.stringify(sum))


displayData(basketLSData)

function displayData(basket){
   let container = document.querySelector("#main_container")
    basket.forEach(function(elm,index){

        var div = document.createElement("div");
        div.setAttribute("id", "avtar");

        // var img = document.createElement("img");
        // img.style.width = "250px";
        // img.setAttribute("src", elm.image);

        var Name = document.createElement("p");
        Name.style.whiteSpace = "nowrap"
        Name.style.overflow = "hidden"
        Name.innerText = elm.name;
        Name.style.fontSize = "15px"
    
        var Price = document.createElement("p");
        Price.innerText = elm.price;
        Price.style.fontSize = "15px"
        // Price.style.display = "inline"

        // var Quantity = document.createElement("p")
        // Quantity.innerText =elm.quantity

        var deleteItem = document.createElement("button")
        deleteItem.innerText = "DELETE"
        deleteItem.style.backgroundColor = "red"
        deleteItem.style.padding = "6px"
        deleteItem.style.fontWeight = "600"
        deleteItem.style.border = "5px"
        deleteItem.style.borderRadius = "5px"        

        deleteItem.addEventListener("click",function (){
          remove(elm,index)
            })

        div.append(Name, Price, deleteItem);

        container.append(div)

    })

    function remove(elm,index){
        basket.splice(index,1)
        localStorage.setItem("basket", JSON.stringify(basketLSData))
        window.location.reload()
    }

    document.querySelector("#btn3").addEventListener("click",goToPayment);
        function goToPayment() {
            alert("Go to the Payment Page");
            window.location.href="checkout.html";
        }
  }
