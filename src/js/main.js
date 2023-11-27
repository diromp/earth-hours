$(document).ready(function () {
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

    $('.select-country').select2({
        templateResult: formatIcon,
        templateSelection: formatIcon,
    });

    var wheel = Draggable.create("#wheel", {
        type: "rotation",
        throwProps: true,
        snap: function (endValue) {
            return Math.round(endValue / 90) * 90;
        },
        onDrag: function () { },
        onThrowComplete: function () {
        }
    });

    TweenMax.set('#wheel li:not(.active) .details > *', {
        opacity: 0,
        y: -10
    })

    // Calculate which product is active
    function dragActive() {
        var rot = wheel[0].rotation / 360
        var decimal = rot % 1
        var sliderLength = $('#wheel li').length
        var tempIndex = Math.round(sliderLength * decimal)
        var index

        if (rot < 0) {
            index = Math.abs(tempIndex)
        } else {
            index = sliderLength - tempIndex
        }

        if (decimal === 0) {
            index = 0
        }

        TweenMax.staggerTo('#wheel li.active .details > *', 0.6, {
            opacity: 0,
            y: -10
        }, 0.1)

        $('#wheel li.active').removeClass('active')
        $($('#wheel li')[index]).addClass('active')

        TweenMax.staggerTo('#wheel li.active .details > *', 0.6, {
            opacity: 1,
            y: 0
        }, 0.1)

    }

    // Tween rotation
    function rotateDraggable(deg, callback) {
        var rot = wheel[0].rotation
        var tl = new TimelineMax()

        tl
            .to('#wheel', .5, {
                rotation: rot + deg,
                onComplete: function () {
                    callback()
                }
            });

        wheel[0].rotation = rot + deg
    }

    // Handlers
    function nextHandler() {
        var current = $('#wheel li.active')
        var item = current + 1
        if (item > $('#wheel li').length) {
            item = 1
        }
        rotateDraggable(360 / $('#wheel li').length, dragActive);
    }

    function prevHandler() {
        var current = $('#wheel li.active')
        var item = current - 1
        if (item > 1) {
            item = $('#wheel li').length
        }
        rotateDraggable(-360 / $('#wheel li').length, dragActive);
    }

    $('.next').on('click', nextHandler);
    $('.prev').on('click', prevHandler);
    var square = '<svg x="0px" y="0px" width="1200px" height="600px" viewBox="0 0 1200 600"><rect x="0.002" y="0.499" width="1200" height="600"/></svg>'
});