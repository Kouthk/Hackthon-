let btnEnviar = document.querySelector('#enviar');

btnEnviar.addEventListener('click', () => {
    gravar();
});

function gravar() {
    let nomeBairro = document.querySelector('#Bairro');
    let val = document.querySelector('#Complemento');
    localStorage.bairro = nomeBairro.value; 
    localStorage.num = val.value; 
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

