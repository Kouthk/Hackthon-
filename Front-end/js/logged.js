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



document.getElementById("editarDownloadMama").onclick = function() {
 sessionStorage.setItem('opcaoEscolhida','1');
};

document.getElementById("editarDowloadsMamografiaTireoide").onclick = function() {
sessionStorage.setItem('opcaoEscolhida','1');
};

document.getElementById("editarDownloadTermografia").onclick = function() {
sessionStorage.setItem('opcaoEscolhida','1');
};
