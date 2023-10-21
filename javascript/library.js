const url = 'https://timothynicolas.github.io/mini-project-2/javascript/library-api.js';



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
                <img class="book-thumbnail" src="${item.image}">
                <p id="img${item.id}" hidden>${item.image}</p>
                <p id="p${item.id}" hidden>${item.id}</p>
                <p id="pri${item.id}" hidden>${item.price}</p>
                <p id="desc${item.id}" class="my-3" hidden>${item.bookdescription}</p>
                <p id="prod${item.id}" class="book-title mt-2">${item.bookName}</p>
                <button id="btn${item.id}" class="btn btn-success btn-view green-btn" data-bs-toggle="modal" data-bs-target=#m${item.id}>View Product</button>
            </div>
        
            <!-- Modal -->

            <div class="modal fade" id="m${item.id}" tabindex="-1" aria-labelledby="m${item.id}Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-black" id="m${item.id}Label">${item.bookName}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-black">

                    <div class="row">
                        <div class="col-6">
                            <img class="book-thumbnail book-outline" src="${item.image}">
                            <p id="p${item.id}" hidden>${item.id}</p>

                            <!-- <p id="prod${item.id}" class="book-title mt-2">${item.bookName}</p> -->

                            <button id="btn${item.id}" class="btn btn-primary btn-view green-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">View Product</button>
                        </div>

                        <div class="col-6 d-flex flex-column justify-content-between">
                            <p id="desc${item.id}" class="my-3">${item.bookdescription}</p>
                            <p class="text-black text-left h3">&#8369; ${item.price}</p>
                        </div>
                    </div>

                    
                </div>
                <div class="modal-footer">
                    
                    <button type="button" class="btn btn-success  green-btn" data-bs-dismiss="modal" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
                </div>
            </div>
            </div>
            
            `;
        });
        div_area.innerHTML = show;
        
});

function addToCart(id){

    let array = localStorage.getItem("order");
    console.log(array);

    if(array == null){
        let orderlist = [];

        let new_id = document.getElementById("p"+id).innerText;
        let new_prod = document.getElementById("prod"+id).innerText;
        let new_price = document.getElementById("pri"+id).innerText;
        let new_desc =document.getElementById("desc"+id).innerText;
        let new_img =document.getElementById("img"+id).innerText;


        orderlist.push({id: new_id, product: new_prod, price: new_price, desc: new_desc, image: new_img});
        localStorage.setItem("order", JSON.stringify(orderlist));

    }else{
        let orderlist = JSON.parse(localStorage.getItem("order"));

        let new_id = document.getElementById("p"+id).innerText;
        let new_prod = document.getElementById("prod"+id).innerText;
        let new_price = document.getElementById("pri"+id).innerText;
        let new_desc =document.getElementById("desc"+id).innerText;
        let new_img =document.getElementById("img"+id).innerText;

        orderlist.push({id: new_id, product: new_prod, price: new_price, desc: new_desc, image: new_img});
        localStorage.setItem("order", JSON.stringify(orderlist));
    }
}

