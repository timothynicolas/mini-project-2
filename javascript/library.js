const url = 'http://127.0.0.1:5500/javascript/library-api.js';

fetch(url)
.then( response => response.json())
.then( result => {
    console.log(result) //array

    let a = [];
    a = result;

    let div_area = document.getElementById("book-list");

    let show = "";

    a.forEach(
        function(item){
            show += `
            <div class="book-container">
                <p id="p${item.id}" hidden>${item.id}</p>

                <img class="book-thumbnail" src="${item.image}">

                <p class="book-title mt-2" id="prod${item.id}">${item.bookName}</p>

                <p class="price" id="pri${item.id}">₱${item.price}</p>
                
                <button id="btn${item.id}"class="btn btn-primary btn-view green-btn" onclick="addToCart(${item.id})" data-bs-toggle="m${item.id}" data-bs-target="m${item.id}">View Product</button>
         
            </div>
            
            <!-- Modal -->
                <div class="modal fade" id="m${item.id}" tabindex="-1" aria-labelledby="m${item.id}Label" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 text-black" id="m${item.id}">${item.bookName}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-black">

                        <div class="row">
                        
                        </div>

                        <img class="book-thumbnail" src="${item.image}">

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            
            `;
        });
        div_area.innerHTML = show;
        
});

function addToCart(id){

    //CSS Feature

    let addBtn = document.getElementById(`btn${id}`);

    if(addBtn.innerHTML === 'Add to Cart'){
        addBtn.innerHTML = 'Item Added'
        addBtn.classList.add('addedBtn');
        
    }else{
        addBtn.innerHTML = 'Add to Cart';
        addBtn.classList.remove('addedBtn');
    };

    //Add To Cart Feature

    let array = localStorage.getItem("order");
    console.log(array);

    if (array == null){
        let orderlist = [];
        let new_id = document.getElementById("p"+id).innerText;
        let new_prod = document.getElementById("prod"+id).innerText;
        let new_price = document.getElementById("pri"+id).innerText;
        orderlist.push({id: new_id, product: new_prod, price: new_price});
        localStorage.setItem("order", JSON.stringify(orderlist));
    }

}


