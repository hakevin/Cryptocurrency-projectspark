let state = {
    character: '',
    quote: '',
    image: '',
    characterDirection: false
};
const apiUrl = 'https://thesimpsonsquoteapi.glitch.me/quotes';


/* async await */
let getQuoteUsingAsync = async function() {
    try {
        const response = await fetch(apiUrl);
        state = (await response.json())[0];
        updateContent();
    } catch (err) {
        console.log('Something went wrong. :(');
        console.log(err);
    }
}



let updateContent = function() {
    console.log(state);

    const name = document.getElementById('character-name');
    const quote = document.getElementById('character-quote');
    const img = document.querySelector('#character-img>img');
    const mainContent = document.getElementById('main-content-container');

    name.innerText = state.character;
    quote.innerText = state.quote;
    img.src = state.image;

    // If characterDirection is Left we do not want reversed class
    if (state.characterDirection === 'Left') {
        // remove .reversed
        mainContent.classList.remove('reversed'); 
    } else {
    // if characterDirection is Right we do want it
        mainContent.classList.add('reversed'); 
    }
}

document.getElementById('new-quote-button')
        .addEventListener('click', getQuoteUsingAsync);

// getQuoteUsingAsync();