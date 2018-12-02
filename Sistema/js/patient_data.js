document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, { constrainWidth: false, coverTrigger: false});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tabs');
  var instance = M.Tabs.init(elems);
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'TOP',
    hoverEnabled: false
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {margin: 10});
});

// document.querySelector('#btn_next').addEventListener('click', (el) => {
//   var type = document.querySelector('#exam');
//   var url = `http://127.0.0.1:5500/${type.value}.html`
//   console.log(url)
//   window.location.href = url;
// });
// Javinha(VULGO JS) pra editar os campos que devem ser editaveis (:

function editarTexto(loc,ct) {
  //loc » id do local que será editado;
  //ct » 1 ou 0 ou 2  (ativa/desativa textarea/Não altera o arquivo atual);
  var objDIV = document.getElementById("txtDIV"+loc);
  var objAREA = document.getElementById("txtAREA"+loc);
  var objSPAN = document.getElementById("controle"+loc);

  if (ct == 1) {
    var texto = objDIV.innerHTML;
    objDIV.style.display = "none";
    objAREA.value = texto;
    objSPAN.style.display = "block";
  }
  else if (ct == 2) {
    objDIV.style.display = "block";
    objAREA.value = texto;
    objSPAN.style.display = "none";
  }else{
    var texto = objAREA.value;
    objSPAN.style.display = "none";
    objDIV.innerHTML = texto;
    objDIV.style.display = "block";
  }
}

function editarGrupoTexto(loc,ct) {
  //loc » id do local que será editado;
  //ct » 1 ou 0 ou 2  (ativa/desativa textarea/Não altera o arquivo atual);
  for(var i = 0; i < 6; i++){
    var objDIV = document.getElementById("txtDIV"+ String(loc + i));
    var objAREA = document.getElementById("txtAREA"+ String(loc + i));
    var objSPAN = document.getElementById("controle"+ String(loc + i));

    if (ct == 1) {
      var texto = objDIV.innerHTML;
      objDIV.style.display = "none";
      objAREA.value = texto;
      objSPAN.style.display = "block";
    }
    else if (ct == 2) {
      objDIV.style.display = "block";
      objAREA.value = texto;
      objSPAN.style.display = "none";
    }else{
      var texto = objAREA.value;
      objSPAN.style.display = "none";
      objDIV.innerHTML = texto;
      objDIV.style.display = "block";
    }
  }
}
