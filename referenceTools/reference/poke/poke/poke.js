const userSubmit = function(e) {
    e.preventDefault();
    disableName();
    
    const userInput = getUserInput().toLowerCase();
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
    const url = baseURL + userInput + '/';

    let request = new XMLHttpRequest();



    request.onreadystatechange = function() {
        if(request.readyState === 4 && request.status === 200) {
            let pokemon = JSON.parse(request.response);
            let name = pokemon.name;
            updateName(name);
            updateImage(pokemon.sprites.front_default);
            showName();
        }
    }


    request.open('get', url, true);

    request.send();

}

const disableName = function() {
    document.getElementById('name').classList.add('disabled');
}

const showName = function() {
    document.getElementById('name').classList.remove('disabled');
}

const updateName = function(name) {
    document.getElementById('name').innerText = name.toUpperCase() + '!!';
}

const updateImage = function(url) {
    document.getElementById('poke-img').setAttribute('src', url);
}

const getUserInput = function() {
    let element = document.getElementById('poke-input');
     return element.value;
}
document.getElementById('submit-button').addEventListener(
    'click', userSubmit);