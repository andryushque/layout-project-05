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
    $(".carousel-services").owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

});
