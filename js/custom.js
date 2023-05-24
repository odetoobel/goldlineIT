(function ($) {

  "use strict";
  Fancybox.bind( "[data-fancybox]" );

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });

    //FORM VALIDATION FOR EMAIL, PHONE NUMBER, AND NAME
    const email = document.getElementById("mail");

    email.addEventListener("input", (event) => {
      if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email address!");
      } else {
        email.setCustomValidity("");
      }
    });

    const text = document.getElementById("text");

    text.addEventListener("input", (event) => {
      if (text.value.trim() == "") {
        text.setCustomValidity("Please enter a name!");
      } else {
        text.setCustomValidity("");
      }
    });
    
    const number = document.getElementById("number");
    
    number.addEventListener("input", (event) => {
      const phoneRegex = /^\d+$/;
      
      if (!phoneRegex.test(number.value)) {
        number.setCustomValidity("Please enter a valid Australian phone number!");
      } else {
        number.setCustomValidity("");
      }
    });
    


    // HOME SLIDER & COURSES & CLIENTS
    $('.home-slider').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      dots:false,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    })

    $('.owl-courses').owlCarousel({
      animateOut: 'fadeOut',
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
      dots: false,
      nav:true,
      navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3,
        }
      }
    });

    $('.owl-client').owlCarousel({
      animateOut: 'fadeOut',
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
          items: 3,
        }
      }
    });

    // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a, #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

})(jQuery);
