document.addEventListener('DOMContentLoaded', ()=>{
    const names = document.querySelector('.name');
    const par = document.querySelector('p');
    const button = document.querySelector('.button');

    function getData() {
    fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
            return response.json();
        })
        .then(data =>{
            console.log(data);
            const name = data[0].name;
            const description = data[0].description;
            const {volume} = data[0];
            const volumeUnit = volume.unit;
            const volumeValue = volume.value;

            names.innerHTML = name + '' + volumeUnit +'/' +volumeValue;
            par.innerHTML = description;
        })
    }

    button.addEventListener('click', getData);



})