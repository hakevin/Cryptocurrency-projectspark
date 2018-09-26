


const basecurrency = document.getElementById("basecurrency").value;
const endpoint = 'https://api.cryptonator.com/api/ticker/' + basecurrency + '-usd';

const bitcoinField = document.querySelector(".bitcoin");
const dollarsField = document.querySelector(".dollars");

document.querySelector(".convertButton").addEventListener("click", moneyConvert);
bitcoinField.addEventListener("input", moneyConvert);


function moneyConvert()
{
    
    fetch(endpoint) 
        .then( response => response.json())
        .then(data => 
            {
        
            const bitcoinAmount = data.ticker.price;
            const bitcoin = bitcoinField.value;
            const dollars = (bitcoin * bitcoinAmount).toFixed(2);
             dollarsField.value = dollars;
    
            });    

}


/* 

const requestAnimePromise = id => {
    fetch(`https://jikan.me/api/anime/${id}`)
        .then(response => 
            response.json())
            .then(json => {
                console.log("Promise-based")
                console.log(json)
        });
}

requestAnimePromise(1); 

/* 
const requestAnimeAwait = async (id=100) => {
    const response = await fetch(`https://jikan.me/api/anime/${id}`)
    const json = await response.json();
    console.log("async/await based");
    console.log(json);
}

requestAnimeAwait();

*/