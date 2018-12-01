document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

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
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {hoverEnabled: false});
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {margin: 10});
});


function exibirDivDeAcordoComNivelDoUsuario(usuario) {
   if(usuario.nivel !== 1) {
       document.getElementById("nivelusuario").style.display = 'none';
   }
}

// variables initialization // Vaivel de inicialização
let NumeroDeRegistrosCadastrados = document.querySelector('#NumeroDeRegistrosCadastrados');

// Botão sellect all
var checkedAll = false;
document.getElementById("all").addEventListener("click", function(){
    checkBoxs = document.querySelectorAll('input[type="checkbox"]:not([id=all])');
    [].forEach.call(checkBoxs, function(checkbox) {
        //Verificam se é a hora de dar checked a todos ou tirar;
        checkbox.checked = checkedAll ? false : true;
    });
    //Invertem ao final da execução, caso a última tenha sido true para checar todos, tornando ele false para o próximo clique;
    checkedAll = checkedAll ? false : true;
});
