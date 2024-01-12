$(document).ready(function () {
    var $sliderDiscovery = $('#slide-discovery .item-card-container');

    $sliderDiscovery.slick({
        dots: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 2,
        draggable: false,
        arrows: true,
        autoplay: false,
        vertical: true,
        appendArrows: $(this).find('.arrows'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    vertical: false,
                }
            }
        ]
    });

    $('.event').on('click', function (e) {
        $('.slide-1').fadeOut(
            'slow'
        );
        $('.saved-list').fadeIn(
            'slow'
        );
    });

    // click back to home button
    $('.close-saved').on('click', function () {
        //slider.slick('setPosition');
        $('.saved-list').fadeOut(
            'slow'
        );
        $('.slide-1').fadeIn(
            'slow'
        );
    });

    $sliderDiscovery.on('destroy', function(event, slick, currentSlide, nextSlide){
        console.log(event);
    });

    $('.close').on('click', function (e) {
        $('.collapse-menu').toggleClass('collapsed');
        $('.content-dis').toggleClass('collapsed');
        $('.filter').toggleClass('!hidden');
        $(this).toggleClass('active');

        //$sliderDiscovery.slick('slickSetOption', 'rows', 3);
        $sliderDiscovery.slick('destroy');

        if ($('.content-dis').hasClass('collapsed')) {
            $sliderDiscovery.slick({
                dots: false,
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 3,
                draggable: false,
                arrows: true,
                autoplay: false,
                vertical: true,
                appendArrows: $(this).find('.arrows'),
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            vertical: false,
                        }
                    }
                ]
            });
        } else {
            $sliderDiscovery.slick({
                dots: false,
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 2,
                draggable: false,
                arrows: true,
                autoplay: false,
                vertical: true,
                appendArrows: $(this).find('.arrows'),
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            vertical: false,
                        }
                    }
                ]
            });
            // for (var i = 0; i < $sliderDiscoveryItem.length; i += 6) {
            //     $sliderDiscoveryItem.slice(i, i + 4).wrapAll(`<div class="container-card"></div>`);
            // }
        }

    });
});
