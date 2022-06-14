//Swipper (HERO)
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

//Tabs (WE-WORK)
document.addEventListener('DOMContentLoaded', function(){
	document.querySelectorAll('.we-work__button').forEach(function(tabsBtn){
		tabsBtn.addEventListener('click', function(event) {
			const path = event.currentTarget.dataset.path
			document.querySelectorAll('.we-work__container').forEach(function(tabContent) {
				tabContent.classList.remove('we-work__container--active')
			})
			document.querySelector(`[data-target ="${path}"]`).classList.add('we-work__container--active')
		})
	})
});


