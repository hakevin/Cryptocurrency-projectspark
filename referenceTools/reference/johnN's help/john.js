/* Async Await */


let apiURL;
let returnedObject;
const makeApiUrl= function(){
    let otherCurrency = document.getElementById("basecurrency").value;
    
    apiURL = 'https://api.cryptonator.com/api/ticker/' + otherCurrency +'-usd';
    getConversion(); //This will be your fetch function
    console.log(apiURL);
}
let getConversion = async function(){
    let response = await fetch(apiURL)
    returnedObject = response.json();
    console.log(returnedObject);
  
    
} 



/* Await-Sync Dysfunctional  */

/* 
let apiURL;
let returnedObject;
const makeApiUrl= function(){
    let otherCurrency = document.getElementById("basecurrency").value;
    
    apiURL = 'https://api.cryptonator.com/api/ticker/' + otherCurrency +'-usd';
    getConversion(); //This will be your fetch function
    console.log(apiURL);
}

const bitcoinField = document.querySelector(".bitcoin");
const dollarsField = document.querySelector(".dollars");


let getConversion = async function(){
    document.querySelector(".convertButton").addEventListener("click", moneyConvert);
    bitcoinField.addEventListener("input", moneyConvert);
    let response = await fetch(apiURL)
    returnedObject = response.json();
   
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
    
    };
    
}
    
*/


/* Promise */

// const bitcoinField = document.querySelector(".bitcoin");
// const dollarsField = document.querySelector(".dollars");

// document.querySelector(".convertButton").addEventListener("click", moneyConvert);
// bitcoinField.addEventListener("input", moneyConvert);


// function moneyConvert()
// {
//     const basecurrency = document.getElementById("basecurrency").value;
//     const endpoint = 'https://api.cryptonator.com/api/ticker/' + basecurrency + '-usd';
    
    
//     fetch(endpoint) 
//         .then( response => response.json())
//         .then(data => 
//             {
        
//             const bitcoinAmount = data.ticker.price;
//             const bitcoin = bitcoinField.value;
//             const dollars = (bitcoin * bitcoinAmount).toFixed(2);
//              dollarsField.value = dollars;
    
//             });    

// }



/* Await-Sync with promise */

/* let apiURL;
let returnedObject;
const makeApiUrl= function(){
    let otherCurrency = document.getElementById("basecurrency").value;
    
    apiURL = 'https://api.cryptonator.com/api/ticker/' + otherCurrency +'-usd';
    getConversion(); //This will be your fetch function
    console.log(apiURL);
}

const bitcoinField = document.querySelector(".bitcoin");
const dollarsField = document.querySelector(".dollars");


let getConversion = async function(){
    document.querySelector(".convertButton").addEventListener("click", moneyConvert);
    bitcoinField.addEventListener("input", moneyConvert);
    let response = await fetch(apiURL)
    returnedObject = response.json();
   
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
    
    };
    
}
    
  
     */


