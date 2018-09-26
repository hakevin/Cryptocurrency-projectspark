const endpoint = 'https://api.cryptonator.com/api/ticker/btc-usd';

const bitcoinField = document.querySelector(".bitcoin");
const dollarsField = document.querySelector(".dollars");

document.querySelector(".convertButton").addEventListener("click", moneyConvert);
bitcoinField.addEventListener("input", moneyConvert);


function moneyConvert(){
    fetch(endpoint) 
    .then( response => response.json())
    .then(data => {
        const bitcoinAmount = data.ticker.price;
        const bitcoin = bitcoinField.value;
        const dollars = (bitcoin * bitcoinAmount).toFixed(2);
        dollarsField.value = dollars;
    });          
}