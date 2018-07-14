var toggleMenu = document.querySelector('.nav-toggle');
var menu = document.querySelector('.nav');

document.onclick = function(e) {
	if (e.target != toggleMenu && !e.target.classList.contains('nav__link')) {
		closeMenu();
	}
}

toggleMenu.onclick = function() {
	if (!menu.classList.contains('nav_active')) {
		openMenu();
	} 
	else {
		closeMenu();
	}
}

function openMenu() {
	menu.classList.add('nav_active')
}

function closeMenu() {
	menu.classList.remove('nav_active');
}

