let localMostra = document.querySelector('#localMostra');
let dataMostra = document.querySelector('#dataMostra');
let horaMostra = document.querySelector('#horaMostra');
localMostra.innerHTML = JSON.parse(localStorage.geo.cep);
dataMostra.innerHTML = JSON.parse(localStorage.geo.dataDoFato);
horaMostra.innerHTML = JSON.parse(localStorage.geo.hora);