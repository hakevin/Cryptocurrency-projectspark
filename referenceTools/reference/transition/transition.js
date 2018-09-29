const load = async function() {
    const response = await fetch('https://api.myjson.com/bins/beofs');
    const data = await response.json();
    const container = document.getElementById('container');
    
    for(let i = 0; i < data.length; i++) {
        const element = document.createElement('div');
        element.classList.add('item');
        element.classList.add('hidden');
        element.innerText = data[i].item;
        container.appendChild(element);

        setTimeout(() => element.classList.remove('hidden'), 500*i);
    }
}

load();