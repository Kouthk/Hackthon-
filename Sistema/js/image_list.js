// Empilhamento de imagens
function resizePilha(){
  let w = window.innerWidth;
  let h = window.innerHeight;

  // reposiciona imagem no centro
  let img = document.getElementById('modalPilhaImage');
  let bordy = (h / 2) - (img.height / 2);
  let bordx = (w / 2) - (img.width / 2);
  img.style.top = bordy + 'px';
  img.style.left = bordx + 'px';

  // posiciona titulo no centro
  let caption = document.getElementById('modalPilhaCaption');
  let cw = caption.getBoundingClientRect().width;
  caption.style.left = (w / 2) - (cw / 2) + 'px';
}

window.addEventListener('resize', resizePilha);

function showPModal(lista){
  var slide = 0;
  let images = lista.getElementsByTagName('img');
  let spans = lista.getElementsByTagName('span');
  var slideLen = images.length;
  // Abre visualizador
  document.getElementById('modalPilhaView').style.display = 'block';
  document.getElementById('modalPilhaImage').src = images[slide].src; //image default
  document.getElementById('modalPilhaCaption').innerHTML = spans[slide].innerHTML;
  resizePilha();
  // voltar imagem
  document.getElementById('modalPilhaBack').addEventListener('click', function(){
    slide--;
    if (slide < 0)
    slide = slideLen - 1;
    document.getElementById('modalPilhaImage').src = images[slide].src;
    document.getElementById('modalPilhaCaption').innerHTML = spans[slide].innerHTML;
    resizePilha();
  });
  // avancar imagem
  document.getElementById('modalPilhaNext').addEventListener('click', function(){
    slide++;
    if (slide >= slideLen)
    slide = 0;
    document.getElementById('modalPilhaImage').src = images[slide].src;
    document.getElementById('modalPilhaCaption').innerHTML = spans[slide].innerHTML;
    resizePilha();
  });
}

window.onload = function(){
  let desloc = 11;
  let pilhas = document.getElementsByClassName('pilhaContent');
  for (let i = 0; i < pilhas.length; i++) {
    let pilha = pilhas[i];
    let context = pilha.getContext('2d');
    let dataURL = "imgs/detalhe1.png"; // pegar url do img irmão
    let imageObj = new Image(dataURL);
    imageObj.src = dataURL;
    let w = pilha.width;
    let h = pilha.height;
    imageObj.onload = function() {
      context.drawImage(this, 15, 15, w - 20, h - 20);
      context.drawImage(this, 10, 10, w - 20, h - 20);
      context.drawImage(this, 5, 5, w - 20, h - 20);
    };
    pilha.addEventListener('click', function() {
      showPModal(this.parentNode.getElementsByClassName('pModal')[0]);
    }, false);
  }
}

// Materialize components initialization
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, { constrainWidth: false, coverTrigger: false});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('#imagens .expansiva');
  var options = { inDuration : 90 };
  var instances = M.Materialbox.init(elems, options);
});

// variables initialization
let exame = document.querySelector('#exame');
let posicaoMamo = document.querySelector('#posicaoMamo');
let posicaoTermo = document.querySelector('#posicaoTermo');
let protocolo = document.querySelector('#protocolo');
let diagnostico = document.querySelector('#diagnostico');
let raca = document.querySelector('#raca');
let tipo = document.querySelector('#tipo');
let racaSelectCentralizado = document.querySelector('#racaSelectCentralizado');
let imagens  = document.querySelector('#imagens');
let btn_pesquisar = document.querySelector('#btn_pesquisar');
let btn_download_busca = document.querySelector('#btn_download_busca');
let total_registros = document.querySelector('#total_registros');
let opcao = sessionStorage.getItem('opcaoEscolhida');
let centralizamentoDual = document.querySelector('#centralizamentoDual');
let selectMamografiaCentralRaca = document.querySelector('#selectMamografiaCentralRaca');

exame.addEventListener("change", () => {
  if (exame.value === 'termo_mama') {
    posicaoMamo.style.display = 'none';
    posicaoTermo.style.display = 'block';
    protocolo.style.display = 'block';
    diagnostico.style.display = 'block';
    raca.style.display = 'block';
    tipo.style.display = 'block';
    selectMamografiaCentralRaca.style.display="none";
    centralizamentoDual.style.display="block";

  } else if (exame.value === 'mamografia') {
    posicaoMamo.style.display = 'block';
    posicaoTermo.style.display = 'block';
    protocolo.style.display = 'none';
    diagnostico.style.display = 'block';
    raca.style.display = 'block';
    centralizamentoDual.style.display="none";
    selectMamografiaCentralRaca.style.display="block";

  } else if (exame.value === 'termo_tireoide') {
    posicaoMamo.style.display = 'block';
    posicaoTermo.style.display = 'block';
    protocolo.style.display = 'none';
    diagnostico.style.display = 'block';
    raca.style.display = 'block';
    tipo.style.display = 'block';
    selectMamografiaCentralRaca.style.display="none";
    centralizamentoDual.style.display="block";

  }
});

btn_pesquisar.addEventListener("click", () => {
  imagens.style.display = 'block';
  btn_download_busca.style.display = 'block';
  total_registros.style.display = 'block';
});

// Slider min and max range init
var slider = document.getElementById('test-slider');

noUiSlider.create(slider, {
  start: [20, 80],
  connect: true,
  step: 1,
  orientation: 'horizontal', // 'horizontal' or 'vertical'
  range: {
    'min': 0,
    'max': 100
  },
});

var snapValues = [
  document.getElementById('min'),
  document.getElementById('max')
];

slider.noUiSlider.on('update', function( values, handle ) {
  snapValues[handle].innerHTML = values[handle];
});
// slider end

//Funcao para gravar os dados da sessão

function gravarDadosSession(){
  sessionStorage.setItem("exame",exame.value);
  sessionStorage.setItem("posicaoMamoSelect",posicaoMamoSelect.value);
  sessionStorage.setItem("posicaoTermoSelect",posicaoTermoSelect.value);
  sessionStorage.setItem("protocoloSelect",protocoloSelect.value);
  sessionStorage.setItem("diagnosticoSelect",diagnosticoSelect.value);
  sessionStorage.setItem("racaSelect",racaSelect.value);
  sessionStorage.setItem("tipoSelect",tipoSelect.value);
  sessionStorage.setItem("racaSelectCentralizado",racaSelectCentralizado.value);


}

document.querySelector('#btn_pesquisar').addEventListener('click', () => {
  gravarDadosSession();
});

if (opcao == '1'){
  document.querySelector('#exame').value = sessionStorage.exame;
  document.querySelector('#posicaoMamoSelect').value = sessionStorage.posicaoMamoSelect;
  document.querySelector('#posicaoTermoSelect').value = sessionStorage.posicaoTermoSelect;
  document.querySelector('#protocoloSelect').value = sessionStorage.protocoloSelect;
  document.querySelector('#diagnosticoSelect').value = sessionStorage.diagnosticoSelect;
  document.querySelector('#racaSelect').value = sessionStorage.racaSelect;
  document.querySelector('#tipoSelect').value = sessionStorage.tipoSelect;
  document.querySelector('#racaSelectCentralizado').value = sessionStorage.racaSelectCentralizado;

    if (exame.value === 'termo_mama') {
      posicaoMamo.style.display = 'none';
      posicaoTermo.style.display = 'block';
      protocolo.style.display = 'block';
      diagnostico.style.display = 'block';
      raca.style.display = 'block';
      tipo.style.display = 'block';
      selectMamografiaCentralRaca.style.display="none";
      centralizamentoDual.style.display="block";

    } else if (exame.value === 'mamografia') {
      posicaoMamo.style.display = 'block';
      posicaoTermo.style.display = 'block';
      protocolo.style.display = 'none';
      diagnostico.style.display = 'block';
      raca.style.display = 'block';
      centralizamentoDual.style.display="none";
      selectMamografiaCentralRaca.style.display="block";

    } else if (exame.value === 'termo_tireoide') {
      posicaoMamo.style.display = 'block';
      posicaoTermo.style.display = 'block';
      protocolo.style.display = 'none';
      diagnostico.style.display = 'block';
      raca.style.display = 'block';
      tipo.style.display = 'block';
      selectMamografiaCentralRaca.style.display="none";
      centralizamentoDual.style.display="block";

    }

  sessionStorage.removeItem('opcaoEscolhida');

}

// Botão sellect all
var checkedAll = true;
document.getElementById("all").addEventListener("click", function(){
  checkBoxs = document.querySelectorAll('input[type="checkbox"]:not([id=all])');
  [].forEach.call(checkBoxs, function(checkbox) {
    //Verificam se é a hora de dar checked a todos ou tirar;
    checkbox.checked = checkedAll ? false : true;
  });
  //Invertem ao final da execução, caso a última tenha sido true para checar todos, tornando ele false para o próximo clique;
  checkedAll = checkedAll ? false : true;
});
