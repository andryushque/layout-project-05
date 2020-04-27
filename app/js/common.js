$(function() {

    /*=== mmenu & hamburger ===*/
    $('#my-menu').mmenu({
        extensions: [ "theme-black", "effect-menu-slide", "pagedim-black"],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="Салон красоты S$Mitler">'
        },
        offCanvas: {
            position: 'right'
        }
    });

    var api = $('#my-menu').data('mmenu');

    api.bind('opened', function() {
        $('.hamburger').addClass('is-active');
    }).bind('closed', function() {
        $('.hamburger').removeClass('is-active');
    });


    /*=== OwlCarousel - services ===*/
    $('.carousel-services').on('initialized.owl.carousel', function () {
        setTimeout(function() {
          setEqualHeight()
          $('.carousel-services-content').equalHeights()
        }, 100);
    });

    function setEqualHeight() {
        var max =0;

        $('.carousel-services-item').each(function () {
            var ths = $(this);
            if (max < ths.find('.carousel-services-content').outerHeight(true)) {
                max = ths.find('.carousel-services-content').outerHeight(true);
            }
        });

        $('.carousel-services-item').each(function () {
            var ths = $(this);
            ths.find('.carousel-services-image').css('min-height', max);
            ths.find('.carousel-services-content').css('min-height', max);
        });

      }

    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        dots: false,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1200: { items: 3 }
        }
    });

    /*=== carouselService - image height ===*/
    function carouselService() {
        $('.carousel-services-item').each(function() {
            var ths = $(this),
                thsHeight = ths.find('.carousel-services-content').outerHeight();
            ths.find('.carousel-services-image').css('min-height', thsHeight);
        });
    }carouselService();


    /*=== header last word - to span ===*/
    $('.carousel-services-composition .h3').each(function(){
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });

    /*=== header first word - to span ===*/
    $('section .h2').each(function(){
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    });

});
