/* Simpsons async style Final! */

const bitcoinField = document.querySelector(".bitcoin");
const dollarsField = document.querySelector(".dollars");


/* async await */
let moneyConvert = async function () {
    const basecurrency = document.getElementById("basecurrency").value;
    const endpoint = 'https://api.cryptonator.com/api/ticker/' + basecurrency + '-usd';

    try {
        const response = await fetch(endpoint);
        data = (await response.json());
        updateContent();
    } catch (err) {
        console.log('Something went wrong. :(');
        console.log(err);
    }
}

let updateContent = function () {
    console.log(data);

    const bitcoinAmount = data.ticker.price;
    const bitcoin = bitcoinField.value;
    const dollars = (bitcoin * bitcoinAmount).toFixed(2);
    dollarsField.value = dollars;

}

document.querySelector(".convertButton").addEventListener("click", moneyConvert);









/*  OG Promise  */

/* 
const bitcoinField = document.querySelector(".bitcoin");
const dollarsField = document.querySelector(".dollars");

document.querySelector(".convertButton").addEventListener("click", moneyConvert);
bitcoinField.addEventListener("input", moneyConvert);


function moneyConvert()
{
    const basecurrency = document.getElementById("basecurrency").value;
    const endpoint = 'https://api.cryptonator.com/api/ticker/' + basecurrency + '-usd';
    
    
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


 */


