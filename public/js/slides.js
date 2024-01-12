$(document).ready(function () {

    const vm = $(this);
    let sliderDiscovery = null;
    const createSlider = (vm, selector, rows, responsive) => {
        let defaultResponsive =  [
            {
                breakpoint: 767,
                settings: {
                    vertical: false,
                }
            }
        ];
        if (responsive) {
            defaultResponsive = responsive;
        }
        $(selector).each(function () {
            sliderDiscovery = $(this);
            sliderDiscovery.slick({
                dots: false,
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: rows,
                draggable: false,
                arrows: true,
                autoplay: false,
                vertical: true,
                appendArrows: vm.find('.arrows'),
                responsive: defaultResponsive
            });
            // sliderDiscovery.on('destroy', function (event, slick, currentSlide, nextSlide) {
            //     console.log(event);
            // });
        });
    }

    const destroySlider = (vm, selector) => {
        $(selector).each(function () {
            sliderDiscovery = $(this);
            sliderDiscovery.slick('unslick');
            sliderDiscovery = null;
        });
    }
    createSlider(vm, '#slide-discovery .item-card-container', 2);

    $('.event').on('click', function (e) {
        $('.slide-1').fadeOut('slow');
        $('.saved-list').fadeIn('slow');
        let responsive = [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    vertical: false,
                }
            }
        ]
        createSlider(vm, '#savedSlider .item-card-container', 4, responsive);
    });

    // click back to home button
    $('.close-saved').on('click', function () {
        //slider.slick('setPosition');
        $('.saved-list').fadeOut('slow');
        $('.slide-1').fadeIn('slow');
        setTimeout(function() {
            destroySlider(vm, '#savedSlider .item-card-container');
        }, 1000)
    });


    $('.close').on('click', function (e) {
        $('.collapse-menu').toggleClass('collapsed');
        $('.content-dis').toggleClass('collapsed');
        $('.filter').toggleClass('!hidden');
        $(this).toggleClass('active');

        //$sliderDiscovery.slick('slickSetOption', 'rows', 3);
        destroySlider(vm, '#slide-discovery .item-card-container');
        setTimeout(function () {
            if ($('.content-dis').hasClass('collapsed')) {
                createSlider(vm, '#slide-discovery .item-card-container', 3);
            } else {
                createSlider(vm, '#slide-discovery .item-card-container', 2);
                // for (var i = 0; i < $sliderDiscoveryItem.length; i += 6) {
                //     $sliderDiscoveryItem.slice(i, i + 4).wrapAll(`<div class="container-card"></div>`);
                // }
            }
        }, 100);

    });

});
