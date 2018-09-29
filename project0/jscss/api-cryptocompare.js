/* Simpsons async style Final! */
/* 3rd backup for USD only */


const cryptoField = document.querySelector(".crypto");
const fiatField = document.querySelector(".fiat");


/* Crypto compare current API */
/* async await */
let moneyConvert = async function () {
    const cryptocurrency = document.getElementById("cryptocurrency").value;
    const fiatcurrency = document.getElementById("fiatcurrency").value;
    /* const endpoint = 'https://api.cryptonator.com/api/ticker/' + cryptocurrency + '-' + fiatcurrency; */
    const endpoint = 'https://min-api.cryptocompare.com/data/price?fsym=' + cryptocurrency + '&tsyms=' + fiatcurrency;
    /* const endpoint = 'https://cors.io/?https://chasing-coins.com/api/v1/convert/' + cryptocurrency + '/' + fiatcurrency; */

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

    /* const cryptoAmount = data.ticker.price; */
    const cryptoAmount = data.USD;
    /* const cryptoAmount = data.result; */
    const crypto = cryptoField.value;
    const fiat = (crypto * cryptoAmount).toFixed(2);
    fiatField.value = fiat;

}

document.querySelector(".convertButton").addEventListener("click", moneyConvert);
cryptoField.addEventListener("input", moneyConvert);
fiatField.addEventListener("input", moneyConvert);
