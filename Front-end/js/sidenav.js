
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    let options = {};
    let instances = M.Dropdown.init(elems);
});

function carregaSidenav(){
	if(localStorage.getItem("menuState") == 'min'){
		document.querySelector('body').classList.add('sidenavmin');
		localStorage.setItem("menuState", "min");
	}else{
		document.querySelector('body').classList.remove('sidenavmin');
		localStorage.setItem("menuState", "max");
	}
};

function mudaSidenav(){
	if(localStorage.getItem("menuState") == 'min'){
		document.querySelector('body').classList.remove('sidenavmin');
		localStorage.setItem("menuState", "max");
	}else{
		document.querySelector('body').classList.add('sidenavmin');
		localStorage.setItem("menuState", "min");
	}
};

document.getElementById('sidenav-btn').addEventListener('click', function(){
	mudaSidenav();
});

document.getElementById('amburgMobile').addEventListener('click', function(){
	mudaSidenav()
});

document.getElementsByClassName('opacityDiv')[0].addEventListener('click', function(){
	mudaSidenav()
});

[].forEach.call(document.querySelectorAll('.sidenav2 a'), function(element){
	if(!element.classList.contains('dropdown-trigger')){
		element.addEventListener('click', function(){
			let element = document.querySelectorAll(".opacityDiv")[0],
			style = window.getComputedStyle(element).getPropertyValue('display');
			if(style == 'block')
				mudaSidenav()
		});
	}
});

carregaSidenav();
