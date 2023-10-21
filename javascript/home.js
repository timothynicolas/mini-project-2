const url = 'https://timothynicolas.github.io/mini-project-2/api/home_api.js';

fetch(url)
.then(response => response.json())
.then(result => {
    
    
    let randomNumber = Math.floor(Math.random() * result.length);
    

   let randomQuote = result[randomNumber].quote;
   let author = result[randomNumber].author;

   document.getElementById("quote").innerHTML = `"${randomQuote}"  - ${author}`;
})

