let localMostra = document.querySelector('#localMostra');
let dataMostra = document.querySelector('#dataMostra');
let horaMostra = document.querySelector('#horaMostra');
localMostra.innerHTML = localStorage.geo.cep;
dataMostra.innerHTML = localStorage.geo.dataDoFato;
horaMostra.innerHTML = localStorage.geo.hora;