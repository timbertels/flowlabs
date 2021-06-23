(function($) {
    "use strict";
	
			  // search 
  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
	searchResultTemplate: '<li class="jekyll-search-item"><a href="{url}"><img class="search-post-img" src="{post_image}" alt="{title}" /> <div class="jekyll-search-contents">  <h2 class="search-post-title">{title}</h2> <p class="search-post-desc">{tags}</p>  </div></a></li>	'
});

    // Fixed Header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 90) {
            $(".header-nav").addClass("fixed-nav");
        } else {
            $(".header-nav").removeClass("fixed-nav");
        }
    });
	 

    
    // Expand Menu
    if ($('.collapse-btn').length > 0) {
        $(".collapse-btn").on('click', function() {
            $("#header-menu").toggleClass('active').siblings().removeClass('active');
        });
    }
    $('.collapse-btn').click(function(){
		$(this).toggleClass('open');
    });
  
 
 
    // Responsive Menu
    $('#header-menu').slicknav({
    closedSymbol: '+',
    openedSymbol:'-',
	label:''
});
    // Slider Carousel
    if ($('.slider-carousel').length > 0) {
        $('.slider-carousel').owlCarousel({
            loop: true,
            items:1,
            nav: false,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
            freeDrag: false,
            autoplay:true,
		
        })
    }
    if ($('.author-carousel').length > 0) {
        $(".author-carousel").owlCarousel({
            autoplay:true,
            items: 1,
            center: true,
            dots: true,
            dotsData: true
            });
    }
 
    if ($('.entry-content').length > 0) {
        $(".entry-content").fitVids();
    }
    // Wow Animation
     var wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       10,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

    // Home Top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 1000,
        $back_to_top = $('.home-top');
        $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });
	

	
			/*
		Preeloader
		============================*/
		$(window).on("load", function() {
			$('#preloader').fadeOut();
			$('#preloader-status').delay(200).fadeOut('slow');
			$('body').delay(200).css({'overflow-x':'hidden'});
		});
 	

	
})(jQuery);