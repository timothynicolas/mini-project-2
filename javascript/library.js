const url = 'http://127.0.0.1:5501/MP2/javascript/library-api.js';

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
                <p class="book-title mt-2">${item.bookName}</p>
                <button id="btn${item.id}"class="btn btn-primary btn-view green-btn" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>`;
        });
        div_area.innerHTML = show;
        
});

function addToCart(id){
    let addBtn = document.getElementById(`btn${id}`);

    if(addBtn.innerHTML === 'Add to Cart'){
        addBtn.innerHTML = 'Item Added'
        addBtn.classList.add('addedBtn');
        
    }else{
        addBtn.innerHTML = 'Add to Cart';
        addBtn.classList.remove('addedBtn');
    };
}