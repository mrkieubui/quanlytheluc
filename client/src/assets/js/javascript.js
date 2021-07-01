(function ($) {

  function header() {
    var header = $(".header");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 1) {
        header.addClass("scroll");
        $(".go-top").addClass("show");
      } else {
        header.removeClass("scroll");
        $(".go-top").removeClass("show");
      }
    });

    $('.play-marquee button').click(function () {
      if ($(this).hasClass('pause')) {
        $(this).removeClass('pause').addClass('play');
        document.getElementById('mymarquee').stop();
      }
      else {
        $(this).removeClass('play').addClass('pause');
        document.getElementById('mymarquee').start();
      }
    });


  }

  function facilities() {
    $('.customer-carousel').slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      arrows: true,
      // responsive: [{
      //   breakpoint: 767,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1
      //   }
      // }]
    });

    $('.testimonials .slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.testimonials .slider-nav').slick({
      rows: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,
      focusOnSelect: true
    });


    $('.banner-slider').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
    });


    $('.review .slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    });
  }
  header();
  facilities();
})(jQuery);