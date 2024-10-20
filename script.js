fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                let productList =document.getElementById('product-list')
                let product= ``
                
                for(let products of json){
                    product+=`<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                <div class="card" >
                    <img src="${products.image}" class="card-img-top product-image" alt="...">
                    <div class="card-body">
                      <h5 class="card-title" id ="product-title">${products.title}</h5>
                      <p id ="price">$${products.price}</p>
                      <p class="card-text" id ="product-desc">${products.description}</p>
                      <div id ="button">
                      <a href="#" class="btn btn-primary">Buy Now</a>
                      <a href="#" class="btn btn-warning">Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  </div>`
                }
                productList.innerHTML=product   

            })



