function sidebar(){
    return `
    
    <div id="main_container">
    <div id="beauty_category_container">
        <h2 class="beauty_category_heading">Category</h2>
        <div id="beauty_category">
            <div><a href="Bakery.html">Fruits & Vegetables</a></div>
            <div class="beauty_category_name"><a href="#">Cuts & Sprouts</a></div>
            <div class="beauty_category_name"><a href="#">Cut & Peeled Veggies</a></div>
            <div class="beauty_category_name"><a href="#">Fresh Salads & Sprouts</a></div>
            <div class="beauty_category_name"><a href="#">fresh fruits</a></div>
            <div class="beauty_category_name"><a href="#">fresh Vegetables</a></div>
           
        </div>
        <div id="brand"><h2  class="beauty_category_heading">Brand</h2>
            <div class="beauty_category_name"><a href="#">bb combo</a></div>
            <div class="beauty_category_name"><a href="#">brotos</a></div>
            <div class="beauty_category_name"><a href="#">freshco</a></div>
            <div class="beauty_category_name"><a href="#">fresho</a></div>
            <div class="beauty_category_name"><a href="#">gopalan organic</a></div>
        </div>
        <div id="seasonal"><h2  class="beauty_category_heading">Seosonal</h2>
            <div class="beauty_category_name"><a href="#">pooja items</a></div>
            <div class="beauty_category_name"><a href="#">summer fruits</a></div>
            <div class="beauty_category_name"><a href="#">summer Veggies</a></div>
            <div class="beauty_category_name"><a href="#">winter fruits</a></div>
            <div class="beauty_category_name"><a href="#">winter Veggies</a></div>
        </div>
        <div id="country"><h2  class="beauty_category_heading">Country of Origin</h2>
            <div class="beauty_category_name"><a href="#">Australia</a></div>
            <div class="beauty_category_name"><a href="#">greece</a></div>
            <div class="beauty_category_name"><a href="#">India</a></div>
            <div class="beauty_category_name"><a href="#">spain</a></div>
            <div class="beauty_category_name"><a href="#">USA</a></div>
        </div>

    </div>
      
    <div>

<!-- end  -->
    <div id="detail">
       
    <h2 id="pname"> </h2>
    <div id="sort_div">
        <h4 id="sort">Filter By:</h4>
        <select id="filter">
            <option value="none">Featured</option>
            <option value="asc">Price: Low to High</option>
            <option value="dec">Price: High to Low</option>
            <option value="new">Newest</option>
            <option value="bestselling">Bestselling</option>
        </select>
    </div>
</div>
<div id="beauty_product_container">
    

</div>`
}
export  {sidebar}