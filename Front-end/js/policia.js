let btnEnviar = document.querySelector('#enviar');

btnEnviar.addEventListener('click', () => {
    gravar();
});

function persistir() {
    geo.latitude.push(latitude.value);
    geo.longitude.push(longitude.value);
    geo.cep.push(cep.value);
    geo.dataDoFato.push(dataDoFato.value);
    localStorage.geo = JSON.stringify(geo);
}

function gravar() {  
    let latitude = document.querySelector('#latitude');
    let longitude = document.querySelector('#longitude');
    let cep = document.querySelector('#cep');
    let dataDoFato = document.querySelector('#dataDoFato');
    // let indice = document.querySelector('#localDoFato').selectedIndex;
    // let localDoFato = document.querySelector('#localDoFato').children[indice].value;

    if(localStorage.geo == undefined){
        geo = {
            cep: [],
            dataDoFato: [],
            latitude: [],
            longitude: []
        }
        persistir();
 
    } else {
        geo = JSON.parse(localStorage.geo);
        persistir(); 
    }
}




let btn = document.querySelector("#geo").addEventListener('click', () => {
    getLocation();
});

var x = document.getElementById("demo");


function getLocation() {
    if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    let lat = document.querySelector('#latitude');
    let long = document.querySelector('#longitude');
    lat.value =  position.coords.latitude; 
    long.value = position.coords.longitude;
}

