$(document).ready(function () {
    var slider = $('#slide-discovery');
    var savedSlider = $('#savedSlider');
    var sliderQuestions = $('.question-slide');
    var container = $('.section-discovery');
    var containerQuestions = $('.section-question');
    var seeMore = $('.seamore');
    var selectLocations = $('.select-location-container');


    function formatIcon(state) {
        if (!state.id) { return state.text; }
        const $item = $(` <span class="item-select">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none">
                <mask id="mask0_121_15" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                    x="0" y="0" width="24" height="24">
                    <rect width="24" height="24" fill="currentColor" />
                </mask>
                <g mask="url(#mask0_121_15)">
                    <path
                        d="M11.9999 19.1886C14.0053 17.3538 15.4947 15.6988 16.4681 14.2237C17.4415 12.7485 17.9282 11.3993 17.9282 10.1761C17.9282 8.38747 17.3559 6.92292 16.2114 5.78245C15.0668 4.642 13.663 4.07178 11.9997 4.07178C10.3364 4.07178 8.93261 4.642 7.78823 5.78245C6.64385 6.92292 6.07166 8.38747 6.07166 10.1761C6.07166 11.3993 6.55834 12.7475 7.53171 14.2207C8.50507 15.6939 9.99447 17.3498 11.9999 19.1886ZM11.9985 21.4924C11.7501 21.4924 11.5022 21.4488 11.2545 21.3615C11.0069 21.2741 10.7858 21.1432 10.5912 20.9685C9.48396 19.9566 8.5057 18.9736 7.65643 18.0196C6.80715 17.0656 6.09836 16.1388 5.53006 15.2392C4.96177 14.3395 4.5308 13.4682 4.23713 12.6253C3.94346 11.7824 3.79663 10.966 3.79663 10.1761C3.79663 7.62144 4.62123 5.58621 6.27043 4.07043C7.91963 2.55464 9.82946 1.79675 11.9999 1.79675C14.1704 1.79675 16.0802 2.55464 17.7294 4.07043C19.3786 5.58621 20.2032 7.62144 20.2032 10.1761C20.2032 10.966 20.0563 11.7824 19.7627 12.6253C19.469 13.4682 19.038 14.3395 18.4698 15.2392C17.9015 16.1388 17.1927 17.0656 16.3434 18.0196C15.4941 18.9736 14.5159 19.9566 13.4086 20.9685C13.2135 21.1432 12.9918 21.2741 12.7435 21.3615C12.4951 21.4488 12.2468 21.4924 11.9985 21.4924ZM11.9999 12.0598C12.5698 12.0598 13.0556 11.859 13.4573 11.4574C13.8589 11.0557 14.0597 10.57 14.0597 10C14.0597 9.43009 13.8589 8.94431 13.4573 8.54268C13.0556 8.14106 12.5698 7.94025 11.9999 7.94025C11.43 7.94025 10.9442 8.14106 10.5426 8.54268C10.1409 8.94431 9.94013 9.43009 9.94013 10C9.94013 10.57 10.1409 11.0557 10.5426 11.4574C10.9442 11.859 11.43 12.0598 11.9999 12.0598Z"
                        fill="currentColor" />
                </g>
            </svg>
            <span class="item-select__title">${state.element.text}</span>
        </span>`);
        return $item;
    }

    function formatIconGobal(state) {
        if (!state.id) { return state.text; }
        const $item = $(` <span class="item-select">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <mask id="mask0_396_2964" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                <rect x="0.5" width="24" height="24" fill="currentColor"/>
                </mask>
                <g mask="url(#mask0_396_2964)">
                <path d="M12.5 22C11.1167 22 9.81667 21.7375 8.6 21.2125C7.38333 20.6875 6.325 19.975 5.425 19.075C4.525 18.175 3.8125 17.1167 3.2875 15.9C2.7625 14.6833 2.5 13.3833 2.5 12C2.5 10.6167 2.7625 9.31667 3.2875 8.1C3.8125 6.88333 4.525 5.825 5.425 4.925C6.325 4.025 7.38333 3.3125 8.6 2.7875C9.81667 2.2625 11.1167 2 12.5 2C13.8833 2 15.1833 2.2625 16.4 2.7875C17.6167 3.3125 18.675 4.025 19.575 4.925C20.475 5.825 21.1875 6.88333 21.7125 8.1C22.2375 9.31667 22.5 10.6167 22.5 12C22.5 13.3833 22.2375 14.6833 21.7125 15.9C21.1875 17.1167 20.475 18.175 19.575 19.075C18.675 19.975 17.6167 20.6875 16.4 21.2125C15.1833 21.7375 13.8833 22 12.5 22ZM12.5 20C14.7333 20 16.625 19.225 18.175 17.675C19.725 16.125 20.5 14.2333 20.5 12C20.5 11.8833 20.4958 11.7625 20.4875 11.6375C20.4792 11.5125 20.475 11.4083 20.475 11.325C20.3917 11.8083 20.1667 12.2083 19.8 12.525C19.4333 12.8417 19 13 18.5 13H16.5C15.95 13 15.4792 12.8042 15.0875 12.4125C14.6958 12.0208 14.5 11.55 14.5 11V10H10.5V8C10.5 7.45 10.6958 6.97917 11.0875 6.5875C11.4792 6.19583 11.95 6 12.5 6H13.5C13.5 5.61667 13.6042 5.27917 13.8125 4.9875C14.0208 4.69583 14.275 4.45833 14.575 4.275C14.2417 4.19167 13.9042 4.125 13.5625 4.075C13.2208 4.025 12.8667 4 12.5 4C10.2667 4 8.375 4.775 6.825 6.325C5.275 7.875 4.5 9.76667 4.5 12H9.5C10.6 12 11.5417 12.3917 12.325 13.175C13.1083 13.9583 13.5 14.9 13.5 16V17H10.5V19.75C10.8333 19.8333 11.1625 19.8958 11.4875 19.9375C11.8125 19.9792 12.15 20 12.5 20Z" fill="white"/>
                </g>
            </svg>
            <span class="item-select__title">${state.element.text}</span>
        </span>`);
        return $item;
    }
    function formatTextSelect2(state) {
        if (!state.id) { return state.text; }
        const $item = $(` <span class="item-select">
            <span class="item-select__title">${state.element.text}</span>
        </span>`);
        return $item;
    }

    selectLocations.hide();

    $('.select-country').select2({
        templateResult: formatTextSelect2,
        templateSelection: formatIcon,
        placeholder: "Select Language",
    }).on('change', function (e) {
        $('.select-location-container').show();
    });

    $('.select-location').select2({
        templateResult: formatTextSelect2,
        templateSelection: formatIconGobal,
        placeholder: "Select Location",
    });

    slider.flipbox({
        vertical: true
    });
    savedSlider.flipbox({vertical: true});

    $('.btn-discovery.prev').click(function() {
        slider.flipbox('prev', $(this).hasClass('reverse'));
    })
    $('.btn-discovery.next').click(function() {
        slider.flipbox('next', $(this).hasClass('reverse'));
    });
    $('.btn-saved.prev').click(function() {
        savedSlider.flipbox('prev', $(this).hasClass('reverse'));
    })
    $('.btn-saved.next').click(function() {
        savedSlider.flipbox('next', $(this).hasClass('reverse'));
    });


    sliderQuestions.slick({
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        appendArrows: containerQuestions.find('.arrows2'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: false,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: true,
                }
            }
        ]
    });

    function expandSeeMore() {
        seeMore.append(`  <img src="./public/img/ic-plus.svg"><span>See More</span>`);
    }
    expandSeeMore();
    $('.saved-list').css({
        'display': `none`
    });
    $('.slide-2').css({
        'display': `none`
    });
    $('.slide-3').css({
        'display': `none`
    });
    $('.slide-4').css({
        'display': `none`
    });

    $('.event > .count').on('click', function (e) {
        $('.slide-1').fadeOut(
            'slow'
        );
        $('.saved-list').fadeIn(
            'slow'
        );
    });


    $('.close-saved').on('click', function () {
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
    });

    $(seeMore).on('click', function (e) {
        $('.site').toggleClass('hidden');
        $('.collapse-menu').toggleClass('scrolling');
        $('.family-frendly').toggleClass('hidden');
        if (!$('.site').hasClass('hidden')) {
            $(this).find('img').attr('src', './public/img/ic-minus.svg');
        } else {
            $(this).find('img').attr('src', './public/img/ic-plus.svg');
        }
    });
    $('.next-detail').on('click', function (e) {
        var containerName =$(this).closest('.new-card').attr('id');

        console.log('containerName');

        if(containerName === 'savedSlider') {
            $('.saved-list').fadeOut(
                'slow'
            );
            $('.slide-2').fadeIn(
                'slow'
            );
        } else {
            $('.slide-1').fadeOut(
                'slow'
            );
            $('.slide-2').fadeIn(
                'slow'
            );
            $('.slide-2').addClass('active');
        }
        
        setTimeout(function () {
            $('.slide-2').css({
                'display': 'block',
            })

        }, 1100);
        $('.slide-2').find('.main').css({
            'max-height': '52rem',
            'border': '0px',
            'border-radius': '0px',
        })
    });
    $('#counting').on('click', function (e) {
        $('.slide-2').fadeOut(
            'slow'
        );
        $('.slide-3').fadeIn(
            'slow'
        );
        $('.slide-2').removeClass('active');
        $('.slide-3').addClass('active');
        setTimeout(function () {
            $('.slide-3').css({
                'display': 'block',
            })
        }, 1100);

        $('.slide-3').find('.main').css({
            'max-height': '52rem',
            'border': '0px',
            'border-radius': '0px',
        })
    });
    $('#finish-form').on('click', function (e) {
        $('.slide-3').fadeOut(
            'slow'
        );
        $('.slide-4').fadeIn(
            'slow'
        );
        $('.slide-3').removeClass('active');
        $('.slide-4').addClass('active');
        setTimeout(function () {
            $('.slide-4').css({
                'display': 'block',
            })
        }, 1100);
        $('.slide-4').find('.main').css({
            'max-height': '52rem',
            'border': '0px',
            'border-radius': '0px',
        })
    });
    $('.back-to').on('click', function () {
        const backTo = $(this).parents();

        if (backTo[3].className === 'slide-content slide-2 active') {
            console.log('Back to slide;');
            $('.slide-1').fadeIn(
                'slow'
            );
            $('.slide-2').fadeOut(
                'slow'
            );
            $('.slide-2').css({
                'display': 'none'
            })
            $('.slide-2').removeClass('active');
            $('.slide-1').addClass('active');

            setTimeout(function () {
                $('.slide-1').css({
                    'display': 'block',
                })
            }, 1100);
        } else if (backTo[3].className === 'slide-content slide-3 active') {
            $('.slide-2').fadeIn(
                'slow'
            );
            $('.slide-3').fadeOut(
                'slow'
            );
            $('.slide-3').css({
                'display': 'none'
            })
            $('.slide-3').removeClass('active');
            $('.slide-2').addClass('active');
            setTimeout(function () {
                $('.slide-2').css({
                    'display': 'block',
                })
            }, 1100);
        } else if (backTo[3].className === 'slide-content slide-4 active') {
            $('.slide-1').fadeIn(
                'slow'
            );
            $('.slide-4').fadeOut(
                'slow'
            );
            $('.slide-4').css({
                'display': 'none'
            })
            $('.slide-4').removeClass('active');
            $('.slide-1').addClass('active');
            setTimeout(function () {
                $('.slide-3').css({
                    'display': 'block',
                })
            }, 1100);
        }
    });

    $('#questioner').on('click', function (e) {
        var fullWidth = $('.section-question').width();
        $('.question-1').css({
            'transform': `translateX(-${fullWidth}px)`,
            'transition': 'all 1s',
        })
        $('.question-2').css({
            'transform': `translateX(-${fullWidth}px)`,
            'transition': 'all 2s',
        })
    });
    $('#back-to-question').on('click', function () {
        var fullWidth = $('.section-question').width();

        $('.question-1').css({
            'transform': 'translateX(0px)',
            'transition': 'all 1s',
        })
        $('.question-2').css({
            'transform': `translateX(${fullWidth}px)`,
            'transition': 'all 2s',
        })
    });

    $('.love').on('click', function () {
        console.log('masik  ')
        $(this).toggleClass('active');
    });
    $('.form-check-input').on('click', function () {
        $(this).closest('.checklist-item').toggleClass('active');
    });
});