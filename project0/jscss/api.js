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




/* Simpsons async style Final! */

const bitcoinField = document.querySelector(".bitcoin");
const dollarsField = document.querySelector(".dollars");

const basecurrency = document.getElementById("basecurrency").value;
const endpoint = 'https://api.cryptonator.com/api/ticker/' + basecurrency + '-usd';


/* async await */
let moneyConvert = async function() {
    try {
        const response = await fetch(endpoint);
        data = (await response.json());
        updateContent();
    } catch (err) {
        console.log('Something went wrong. :(');
        console.log(err);
    }
}


let updateContent = function() {
    console.log(data);

    const bitcoinAmount = data.ticker.price;
    const bitcoin = bitcoinField.value;
    const dollars = (bitcoin * bitcoinAmount).toFixed(2);
    dollarsField.value = dollars;

}

document.querySelector(".convertButton").addEventListener("click", moneyConvert);










/* Promise */
/* let getQuoteUsingPromise = function() {
    fetch(apiUrl)
        // This happens when data comes back in
        .then( (response) => {
            // Return unwrapped promise object for next chaining operation
            return response.json();
        })
            // Utilize unwrapped promise as javascript object
        .then( (data) => {
            state = data[0];
            updateContent();
        })
        // This happens if there is a problem with the request
        .catch( (error) => {
            alert('oh no :(');
            console.log(error);
        });
} */
