const url = 'http://127.0.0.1:5501/api/home_api.js';

fetch(url)
.then(response => response.json())
.then(result => {
    
    
    let randomNumber = Math.floor(Math.random() * result.length);
    

   let randomQuote = result[randomNumber].quote;

   document.getElementById("quote").innerHTML = randomQuote;
})

