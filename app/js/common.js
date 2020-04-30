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


    /*=== carousel header last word - to span ===*/
    $('.carousel-services-composition .h3').each(function(){
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });


    /*=== section header first word - to span ===*/
    $('section .h2').each(function(){
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    });


    /*=== selectize ===*/
    $('select').selectize();


    /*=== OwlCarousel - reviews ===*/
    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        // autoHeight: true
    });


    /*=== OwlCarousel - partners ===*/
    $('.partners').owlCarousel({
        loop: true,
        items: 4,
        smartSpeed: 700,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 }
        }
    });


    /*=== E-mail Ajax Send ===*/
    $('form.callback').submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            $(th).find('.success')
                .addClass('active')
                .css('display', 'flex')
                .hide()
                .fadeIn();
            setTimeout(function() {
                $(th).find('.success')
                    .removeClass('active')
                    .fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });

});
