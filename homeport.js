
function home(){
    return ` <div id="add">
    <img src="https://cdn-icons-png.flaticon.com/512/126/126509.png" alt="">
    <p>1860 123 1000</p>
    
    <img src="data:image/png;base64,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" alt="">
    <select name="" id="">
        <option value="">Select Location</option>
        <option value="">Mumbai</option>
        <option value="">Patna</option>
        <option value="">Banglore</option>
        <option value="">Amritsar</option>
        <option value="">Lucknow</option>
        <option value="">Bhopal</option>
        <option value="">Pune</option>
        <option value="">Amravati</option>
        <option value="">Nashik</option>
        
    </select>
   

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0HlQ_ckX6HqCAlqroocyRDx_ZRu3x3ezoA&usqp=CAU" alt=""> <p id="update"><div id="upper"></div></p>
  
    

</div>

<div id="searchar">

<div id="basketlogo">
    <img src="https://www.bbassets.com/static/v2557/custPage/build/content/img/bb_logo.png" alt="">
</div>

<div id="hout">
<form class="example" >
    <input type="text" placeholder="Search.." name="search">
    <button type="submit"><i class="fa fa-search"></i></button>
  </form> 
</div>             

<div id="ket">
    <img src="https://cdn-icons.flaticon.com/png/512/3352/premium/3352069.png?token=exp=1655353067~hmac=cc7530b9589a4eb4679309710d446737" alt="">
</div>

</div>
<div id="categories">
<div id="dill">
<h3>SHOP BY CATEGORIES</h3>
<img src="https://cdn-icons.flaticon.com/png/512/2985/premium/2985150.png?token=exp=1655354769~hmac=ebb9bf1f03ceb534d2368c8799ac545d" alt="">     
</div>

<h3>OFFERS</h3>   
</div>

<div id="down">
<a href="fruit.html">Fruits & Vegetables</a>
<a href="foodgrains.html">Foodgrains,Oil & Masala</a>
<a href="Bakery.html">Bakery,Cakes & Dairy</a>
<a href="Beverages.html">Beverages</a>
<a href="#">Snacks & Nranded Foods</a>
<a href="#">Beauty and Hygine</a>
</div>
`
}

export default home