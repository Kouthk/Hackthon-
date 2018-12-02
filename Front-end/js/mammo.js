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

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems,{i18n:{
      monthsShort:[
        'Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'
      ],
      weekdaysShort:[
        'Seg','Ter','Qua','Qui','Sex','Sab','Dom'
      ]
    }});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.timepicker');
  var instances = M.Timepicker.init(elems, {twelveHour:false});
});

function anyThing() {
  setTimeout(function(){ $('.stepper').nextStep(); }, 1500);
}

$(function(){
   $('.stepper').activateStepper();
});

