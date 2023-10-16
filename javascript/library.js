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
                <img class="book-thumbnail" src="${item.image}">
                <p id="p${item.id}" hidden>${item.id}</p>
                <p id="prod${item.id}" class="book-title mt-2">${item.bookName}</p>
                <button id="btn${item.id}" class="btn btn-primary btn-view green-btn" onclick="addToCart(${item.id})" data-bs-toggle="modal" data-bs-target=#m${item.id}>View Product</button>
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

                            <button id="btn${item.id}" class="btn btn-primary btn-view green-btn" onclick="addToCart(${item.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">View Product</button>
                        </div>

                        <div class="col-6">
                            <p id="desc${item.id}"></p>
                            <p class="text-black text-left">&#8369; ${item.price}</p>
                        </div>
                    </div>

                    
                </div>
                <div class="modal-footer">
                    <p class="text-black text-left">&#8369; ${item.price}</p>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Add to Cart</button>
                </div>
                </div>
            </div>
            </div>
            
            `;
        });
        div_area.innerHTML = show;
        
});

function addToCart(id){
    // let addBtn = document.getElementById(`btn${id}`);

    // if(addBtn.innerHTML === 'Add to Cart'){
    //     addBtn.innerHTML = 'Item Added'
    //     addBtn.classList.add('addedBtn');
        
    // }else{
    //     addBtn.innerHTML = 'Add to Cart';
    //     addBtn.classList.remove('addedBtn');
    // };
}