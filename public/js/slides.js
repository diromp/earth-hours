$(document).ready(function () {
    const windows = $(window);
    const vm = $(this);
    let sliderDiscovery = null;
    let lastSlide = 0;
    let lastCount = 0;
    let expandedSlide = null;
    var isExpand = false;

    const createSlider = (vm, selector, rows, responsive, arrowsElement, reset, respondTo) => {
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
        let defaultArrow = vm.find('.arrows');

        if (arrowsElement) {
            defaultArrow = arrowsElement
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
                appendArrows: defaultArrow,
                responsive: defaultResponsive,
                respondTo: respondTo ? respondTo : 'window'
            });

            if (!reset) {
                if (isExpand && sliderDiscovery && sliderDiscovery.slick('getSlick').slideCount <= 4) {
                    expandedSlide = lastSlide;
                }
                if (lastSlide) {
                    let index = lastSlide.currentSlide;
                    let currentCount = sliderDiscovery.slick('getSlick').slideCount;
                    // untuk expand
                    if (currentCount < lastCount) {
                        if (index >= currentCount) {
                            index = Math.floor((index * 2 / 3));
                            sliderDiscovery.slick('slickGoTo', index)
                        } else if (index < currentCount) {
                            index = Math.floor((index / (2 / 3)));
                            sliderDiscovery.slick('slickGoTo', index - 2)
                        }
                    } else {
                        // untuk collapse
                        if (expandedSlide) {
                            index = expandedSlide.currentSlide;
                        }
                        if (index >= currentCount) {
                            index = Math.round((index * 2 / 3));
                            sliderDiscovery.slick('slickGoTo', index);
                        } else if (index < currentCount) {
                            if (index > 0) {
                                index = Math.floor((index / (2 / 3)));
                                index = currentCount <= 4 ? (index) : (index + 1);
                            }
                            sliderDiscovery.slick('slickGoTo', index);
                        }
                    }
                } else {
                    sliderDiscovery.slick('slickGoTo', 0);
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

    function updateSlider() {
        if (windows.width() > 1180) {
            destroySlider(vm, '#slide-discovery .item-card-container');
            setTimeout(function () {
                if ($('.content-dis').hasClass('collapsed')) {
                    createSlider(vm, '#slide-discovery .item-card-container', 3, [
                        {
                            breakpoint: 1180,
                            settings: {
                                rows: 2,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
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
                    ]);
                } else {
                    createSlider(vm, '#slide-discovery .item-card-container', 2, [
                        {
                            breakpoint: 1180,
                            settings: {
                                rows: 2,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
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
                    ]);
                }
            }, 1000);
        }
    }

    createSlider(vm, '#slide-discovery .item-card-container', 2);

    $(window).resize(
        function () {
            const width = $(window).width;
            if (isExpand && width > 1281) {
                $(".close").click();
            }
        }
    );

    $('.event').on('click', function (e) {
        $('.slide-1').fadeOut('slow');
        $('.saved-list').fadeIn('slow');

        destroySlider(vm, '#slide-discovery .item-card-container');
        if ($('.content-dis').hasClass('collapsed')) {
            $('.collapse-menu').toggleClass('collapsed');
            $('.content-dis').toggleClass('collapsed');
            $('.filter').toggleClass('!hidden');
            $(this).toggleClass('active');
        }
        createSlider(vm, '#savedSlider .item-card-container', 4, [
            {
                breakpoint: 1285,
                settings: {
                    rows: 3,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    rows: 2,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
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
        ], vm.find('.arrows-2'), true);
    });

    // click back to home button
    $('.close-saved').on('click', function () {
        //slider.slick('setPosition');
        $('.saved-list').fadeOut('slow');
        $('.slide-1').fadeIn('slow');
        lastSlide = 0;
        lastCount = 0;
        createSlider(vm, '#slide-discovery .item-card-container', 2, [
            {
                breakpoint: 1180,
                settings: {
                    rows: 2,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
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
        ], null, false);
        setTimeout(function () {
            destroySlider(vm, '#savedSlider .item-card-container');
        }, 1000)
    });


    $('.close').on('click', function (e) {
        isExpand = !isExpand;
        $('.collapse-menu').toggleClass('collapsed');
        $('.content-dis').toggleClass('collapsed');
        $('.filter').toggleClass('!hidden');
        $(this).toggleClass('active');
        updateSlider();
    });

});
