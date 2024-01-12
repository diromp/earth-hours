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

    $('.close').on('click', function (e) {
        $('.collapse-menu').toggleClass('collapsed');
        $('.content-dis').toggleClass('collapsed');
        $('.filter').toggleClass('!hidden');
        $(this).toggleClass('active');

        console.log('muask')
        $sliderDiscovery.slick('slickSetOption', 'rows', 3);
        if ($('.content-dis').hasClass('collapsed')) {
            
        } else {
            // console.log('masuk')
            // for (var i = 0; i < $sliderDiscoveryItem.length; i += 6) {
            //     $sliderDiscoveryItem.slice(i, i + 4).wrapAll(`<div class="container-card"></div>`);
            // }
        }
        
    });
});