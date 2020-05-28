$(window).scroll(function() {
    let menuFix = document.querySelector('#menu-fix');
    if ($(this).scrollTop() > 0) {
    	menuFix.style.background = 'rgba(243, 246, 249, 1)';
    }
    if ($(this).scrollTop() < 10) {
    	menuFix.style.background = 'rgba(243, 246, 249, 0)';
    }
});





function burgerMenu(selector){
	let menu = $(selector);
	let button = menu.find('.burger-menu__button');
	let links = menu.find('.burger-menu__link');
	let overlay = menu.find('.burger-menu__overlay');
	
	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu(){
		menu.toggleClass('burger-menu_active');

		if (menu.hasClass('burger-menu_active')) {
			$('body').css('overflow', 'hidden');
		} else{
			$('body').css('overflow', 'visible');
		}
	}
}

burgerMenu('.burger-menu');