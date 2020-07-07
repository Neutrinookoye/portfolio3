!(function($) {
    "use strict";
    var nav = $('nav');
    var navHeight = nav.outerHeight();
  

  // Project section isotope and filter
  $(window).on('load', function() {
    var projIsotope = $('.project-container').isotope({
      itemSelector: '.project-item',
      layoutMode: 'fitRows'
    });

    $('#project-filters li').on('click', function() {
      $("#project-filters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      projIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });

  // Testimonial carousel (uses the Owl Carousel library)
  $('.owl-client').owlCarousel({
    animateOut: 'fadeOut',
    dots : true ,
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      }
    }
  });


	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })



})(jQuery);
new WOW().init();
