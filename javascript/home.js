const url = 'http://127.0.0.1:5500/api/home_api.js';

fetch(url)
.then(response => response.json())
.then(result => {
    console.log(result)
    
    let randomNumber = Math.floor(Math.random() * result.length);
    console.log(randomNumber);

   let randomQuote = result[randomNumber].quote;

   document.getElementById("quote").innerHTML = randomQuote;
})

