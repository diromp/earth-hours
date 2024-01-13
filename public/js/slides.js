$(document).ready(function () {
    // var $window = $(window);
    // var $sliderDiscovery = $('#slide-discovery .item-card-container');
    // var $slideSaved = $('#savedSlider .item-card-container');
    // var $optionsSaved = {
    //     rows: 4,
    //     dots: false,
    //     loop: false,
    //     infinite: false,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     draggable: false,
    //     arrows: true,
    //     autoplay: false,
    //     vertical: true,
    //     appendArrows: $(this).find('.arrows-2'),
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 rows: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 vertical: false,
    //                 slidesToShow: 2,
    //                 rows: 1,
    //                 slidesPerRow: 2,
    //                 draggable: false,
    //             }
    //         }
    //     ]
    // };
    // var $options = [
    //     {
    //         rows: 2,
    //     },
    //     {
    //         rows: 3,
    //     },
    // ]
    // var curOptions = 0;
    // var myCarouselSaved = $slideSaved.slick();
    // var myCarouselDiscovery = $sliderDiscovery.slick($.extend({
    //     dots: false,
    //     loop: false,
    //     infinite: false,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     draggable: false,
    //     arrows: true,
    //     autoplay: false,
    //     vertical: true,
    //     appendArrows: $(this).find('.arrows'),
    //     responsive: [
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 rows: 1,
    //                 draggable: false,
    //                 vertical: false,
    //                 slidesToShow: 2,
    //                 slidesPerRow: 2
    //             }
    //         }
    //     ]

    // }, $options[curOptions]));

    const vm = $(this);
    let sliderDiscovery = null;
    let lastSlide = 0;
    let lastCount = 0;

    const createSlider = (vm, selector, rows, responsive, arrowsElement, reset) => {
        let defaultResponsive = [
            {
                breakpoint: 576,
                settings: {
                    rows: 1,
                    draggable: false,
                    vertical: false,
                    slidesToShow: 2,
                    slidesPerRow: 2
                }
            }
        ];
        let defaulfArrow = vm.find('.arrows');

        if (arrowsElement) {
            defaulfArrow = arrowsElement
        }
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
                appendArrows: defaulfArrow,
                responsive: defaultResponsive
            });

            if (!reset) {
                if (lastSlide) {
                    let index = lastSlide.currentSlide;
                    let currentCount = sliderDiscovery.slick('getSlick').slideCount;
                    // untuk expand
                    if (currentCount < lastCount) {
                        if (index > currentCount) {
                            index = Math.round((index * 2 / 3));
                            sliderDiscovery.slick('slickGoTo', index)
                        } else if (index < currentCount) {
                            index = Math.floor((index / (2 / 3)));
                            sliderDiscovery.slick('slickGoTo', index - 2)
                        }
                    } else {
                        // untuk collapse
                        if (index > currentCount) {
                            index = Math.round((index * 2 / 3));
                            sliderDiscovery.slick('slickGoTo', index)
                        } else if (index < currentCount) {
                            index = Math.floor((index / (2 / 3)));
                            sliderDiscovery.slick('slickGoTo', index + 1)
                        }
                    }
                }
            }

            sliderDiscovery.on('afterChange', function (slick, currentSlide, currentIndex) {
                lastSlide = currentSlide;
                lastCount = slick.currentTarget.slick.slideCount;
            })
        });
    }

    const destroySlider = (vm, selector) => {
        $(selector).each(function () {
            sliderDiscovery = $(this);
            sliderDiscovery.slick('destroy');
            sliderDiscovery = null;
        });
    }

    createSlider(vm, '#slide-discovery .item-card-container', 2);

    $('.event').on('click', function (e) {
        $('.slide-1').fadeOut('slow');
        $('.saved-list').fadeIn('slow');

        destroySlider(vm, '#slide-discovery .item-card-container');
        createSlider(vm, '#savedSlider .item-card-container', 4, [
            {
                breakpoint: 940,
                settings: {
                    rows: 1,
                    draggable: false,
                    vertical: false,
                    slidesToShow: 2,
                    slidesPerRow: 2
                }
            }
        ], vm.find('.arrows-2'), true);
    });

    // click back to home button
    $('.close-saved').on('click', function () {
        //slider.slick('setPosition');
        $('.saved-list').fadeOut('slow');
        $('.slide-1').fadeIn('slow');
        setTimeout(function () {
            destroySlider(vm, '#savedSlider .item-card-container');
            lastSlide = 0;
            lastCount = 0;
            createSlider(vm, '#slide-discovery .item-card-container', 2);
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
            }
        }, 100);

    });
});
