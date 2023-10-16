

let array = JSON.parse(localStorage.getItem("order"));
let show = document.getElementById("cart-items");

let prod = "";

array.forEach(
    function(item){
        prod +=`
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
                <img src="${item.image}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${item.product}</h5>
                <p class="card-text">"${item.desc}"</p>
                <p class="card-text"><small class="text-body-secondary">₱ ${item.price}</small></p>
              </div>
            </div>
          </div>
        </div>
        
        ` ;

    })

    show.innerHTML = prod;