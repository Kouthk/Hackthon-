document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, { constrainWidth: false, coverTrigger: false});
});


function anyThing() {
  setTimeout(function(){ $('.stepper').nextStep(); }, 1500);
}

$(function(){
   $('.stepper').activateStepper();
});


//variaveis
let a = document.getElementById('#aerturaOcular');
let b = document.getElementById('#verbalSamu');
let c = document.getElementById('#respostaMotora');
if (!(a == null & b == null & c == null )) {
  var soma = a+b+c;

}
