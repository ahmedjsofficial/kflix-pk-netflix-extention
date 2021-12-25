const onClick = () => {
	const menu = document.querySelector(".nav");
	const close = document.querySelector(".toggler");
	const nav_Link = document.querySelectorAll(".nav-link");		

	menu.classList.toggle("active");
	close.classList.toggle("active");

	nav_Link.forEach(nav_Link=>{
		nav_Link.addEventListener("click",()=>{
			menu.classList.remove("active");
			close.classList.remove("active");
		})
	})
}
/* -------------mian sldier code-------------------------------
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
-----------------------------------------------------------------*/
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#secondary-slider', {
		fixedWidth: 100,
		rewind    : true,
		gap       : 10,
		pagination: false,
		type   : 'loop',
    autoplay: 'true',
	} ).mount();
} );
/* -------------mian sldier code-------------------------------
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
-----------------------------------------------------------------*/


/*----------------------------------------------------------------*/

/* -------------portfolio_filtering-------------------------------
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
-----------------------------------------------------------------*/
$(document).ready(function(){
  $('.grid').isotope(function(){
      itemSelector:'.grid-item'
    });



  $('.input-group-btn .btn-filter').click(function(){
    $('.input-group-btn .btn-filter').removeClass('active');
    $(this).addClass('active');


    var selector = $(this).attr('data-filter');
      $('.grid').isotope({
        filter: selector,
        layoutMode: 'fitRows'
      })
      return false;
  });
});
/* -------------portfolio_filtering-------------------------------
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
-----------------------------------------------------------------*/

/* -------------portfolio_filtering-------------------------------
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
-----------------------------------------------------------------*/
var coll = document.getElementsByClassName("collapse-button");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
/* -------------portfolio_filtering-------------------------------
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
-----------------------------------------------------------------*/



/* -------------swiper-slider-------------------------------
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
-----------------------------------------------------------------*/

// var swiper = new Swiper('.swiper-container', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
// });

/* -------------swiper-slider-------------------------------
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
-----------------------------------------------------------------*/