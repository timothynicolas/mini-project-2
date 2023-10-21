let array = JSON.parse(localStorage.getItem("order"));

// CART CARDS

let show = document.getElementById("cart-items");

let prod = "";

array.forEach(
  function(item){
    prod +=`
    <center>
    <div class="card mb-3 d-flex justify-content-center" style="max-width: 540px;">
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
    </center>
    
    `;
});

show.innerHTML = prod;

//CART ENTRIES

let cartEntries = document.getElementById("cart-entries");

let cartEntry = "";

array.forEach(
  function(item){
    cartEntry +=` <p>${item.product}</p>
    
    
    `;
});

cartEntries.innerHTML = cartEntry;

// CART PRICES

let cartPrices = document.getElementById("cart-prices");

let cartPrice = "";

array.forEach(
  function(item){
    cartPrice +=` 
    <p class="text-end">₱ ${item.price}</p>
    `;
});

cartPrices.innerHTML = cartPrice;

// NUMBER OF ITEMS

let numItems = document.getElementById("cartnum-items");

numItems.innerHTML = `<p> Items (${array.length}):</p>`;

// SUBTOTAL

let subtotal = document.getElementById("sub-total");

let subTotal = 0;

array.forEach(
  function(item){
    subTotal += Number(item.price);
});


subtotal.innerHTML = `<p class="text-end"> ₱ ${subTotal}</p>`;

// ESTIMATED TAX

let tax_div = document.getElementById("tax_div");

let taxComputation = Number(subTotal * .04);

tax_div.innerHTML = `<p class="text-end">₱ ${taxComputation} </p>`;

// GRAND TOTAL

let grandtotal_div = document.getElementById("grandtotal_div");

let grandtotalComputation = Number(subTotal + taxComputation);

grandtotal_div.innerHTML  = `<p class="text-end" id="final-total"> ₱ ${grandtotalComputation} </p>`;

function clearCart(){
  localStorage.clear();
  location.href = "home-updated.html";
}




    