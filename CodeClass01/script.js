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


// let coursesName = ["курс вундеркинд", "курс junior", "курс middle", "курс high", "курс expert", "курс super"];
// let coursesDescription = ["Курс Start для детей 1-2 класса", 
// 	"Курс Junior для детей 1-2 класса общеобразовательной школы (~ 5-6 лет)", 
// 	"Курс Middle для детей 3-4 класса общеобразовательной школы (~ 9-10 лет)", 
// 	"Курс High для детей 4-6 класса общеобразовательной школы (~ 10-12 лет)", 
// 	"Курс Expert для детей 6-9 класса общеобразовательной школы (~ 12-15 лет)", 
// 	"Курс Super для детей 6-9 класса общеобразовательной школы (~ 12-15 лет)"
// ];

// var to = 0;  // Счетчик, указывающий на текущую позицию

// function right_arrow() // Открытие следующей группы влево
// { 
//  var obj = document.querySelector("#layer-tree h3");
//   if (to < mas.length-1)  to++ 
//    else
//      to = 0; 
//      				// Перезаписать данные
//      				// запоминаем текущую позицию
// }

// function left_arrow()
// {     
//  var obj = document.querySelector("#layer-tree h3");
// if (to > 0) to--;
//   else
//     to = mas.length-1;
//      				// Перезаписать данные
//      				// запоминаем текущую позицию
// }