$(document).ready(function () {
    var $window = $(window);

    let currentIndex = 0;
    var $itemCardContainer = $('#slide-discovery .item-card-container');
    var visible = 4 ;
    var $item = $('.item-card');
    var getWidth = $itemCardContainer.width();
    var getHeight = $itemCardContainer.height();
    
    let currentIndexSaved = 0;
    var $itemCardContainerSaved = $('#savedSlider .item-card-container');
    var visibleSaved = $window.width() < 800 ? 4 : 6 ;
    var $itemSaved = $('.item-card-saved');
    var getWidthSaved = 0;
    var getHeightSaved = 0;

    $('.close').on('click', function (e) {
        $('.collapse-menu').toggleClass('collapsed');
        $('.content-dis').toggleClass('collapsed');
        $('.filter').toggleClass('!hidden');
        $(this).toggleClass('active');
        if($('.content-dis').hasClass('collapsed')) {
            visible = 6
            getWidth = $itemCardContainer.width();
            getHeight = $itemCardContainer.height();
        } else {
            visible = 4
        }
    });

    if(currentIndex == 0) {
        $('.slick-prev').addClass('slick-disabled');
    }
    if ($window.width() < 800) {
        var splitItemMobile = $("#slide-discovery .item-card-container .item-card");
        var splitItemMobileSaved = $("#savedSlider .item-card-container .item-card-saved");

        for (var i = 0; i < splitItemMobile.length; i += 4) {
            splitItemMobile.slice(i, i + 4).wrapAll(`<div class="container-card"></div>`);
        }
        for (var i = 0; i < splitItemMobileSaved.length; i += 4) {
            splitItemMobileSaved.slice(i, i + 4).wrapAll(`<div class="container-card-saved"></div>`);
        }
    } 

    $('.event').on('click', function (e) {
        $('.slide-1').fadeOut(
            'slow'
        );
        $('.saved-list').fadeIn(
            'slow'
        );
        $('.slick-prev-saved').addClass('slick-disabled');
        currentIndex = 0;
        getHeightSaved = $itemCardContainerSaved.height();
        getWidthSaved = $itemCardContainerSaved.width();
    });
    
    // click back to home button
    $('.close-saved').on('click', function () {
        $('.saved-list').fadeOut(
            'slow'
        );
        $('.slide-1').fadeIn(
            'slow'
        );
        $('.slick-prev').addClass('slick-disabled');
        currentIndexSaved = 0;
    });

    function showSlide(index,verticalView) {
        var checkVisible = Math.ceil($item.length / visible);
        var totalHeight = 0;
        var totalWidth = $('body').width() - getWidth + 28;

        if($('.content-dis').hasClass('collapsed')) {
            totalHeight = (getHeight / (checkVisible+2))
        } else {
            totalHeight = (getHeight / checkVisible)
        }

        console.log(totalHeight)


        if (index < 0) {
            currentIndex = checkVisible;
        } else if (index >= checkVisible) {
            currentIndex = 0;
        }

        if( index == (checkVisible - 1) ) {
            $('.slick-next').addClass('slick-disabled');
        } else {
            $('.slick-next').removeClass('slick-disabled');

        }
        if( index < 1) {
            $('.slick-prev').addClass('slick-disabled');
        } else {
            $('.slick-prev').removeClass('slick-disabled');
        }

        if(verticalView) {
            $itemCardContainer.css({ 'transform' : `translateY(-${currentIndex * totalHeight}px` })
        } else {
            $itemCardContainer.css({ 'transform' : `translateX(-${currentIndex * totalWidth}%` })
        }

    }

    function showSlideSaved(index,verticalView) {
        var checkVisible = Math.ceil($itemSaved.length / visibleSaved)
        var totalHeight = getHeightSaved / checkVisible;
        var totalWidth = $('body').width() - getWidthSaved + 29;
        if (index < 0) {
            currentIndexSaved = checkVisible;
        } else if (index >= checkVisible) {
            currentIndexSaved = 0;
        }

        if( index == (checkVisible - 1) ) {
            $('.slick-next-saved').addClass('slick-disabled');
        } else {
            $('.slick-next-saved').removeClass('slick-disabled');

        }
        if( index < 1) {
            $('.slick-prev-saved').addClass('slick-disabled');
        } else {
            $('.slick-prev-saved').removeClass('slick-disabled');
        }

        if(verticalView) {
            $itemCardContainerSaved.css({ 'transform' : `translateY(-${currentIndexSaved * totalHeight}px` })
        } else {
            $itemCardContainerSaved.css({ 'transform' : `translateX(-${currentIndexSaved * totalWidth}%` })
        }

    }

    if ($window.width() > 1080) {
        $('.slick-next').on("click", function () {
            currentIndex++;
            showSlide(currentIndex, true)
        });

        $('.slick-prev').on("click", function () {
            currentIndex--;
            showSlide(currentIndex, true)
        });
    } else {
        $('.slick-next').on("click", function () {
            currentIndex++;
            showSlide(currentIndex, false)
        });

        $('.slick-prev').on("click", function () {
            currentIndex--;
            showSlide(currentIndex, false)
        });
    }

    if ($window.width() > 1080) {
        $('.slick-next-saved').on("click", function () {
            currentIndexSaved++;
            showSlideSaved(currentIndexSaved, true)
        });

        $('.slick-prev-saved').on("click", function () {
            currentIndexSaved--;
            showSlideSaved(currentIndexSaved, true)
        });
    } else {
        $('.slick-next-saved').on("click", function () {
            currentIndexSaved++;
            showSlideSaved(currentIndexSaved, false)
        });

        $('.slick-prev-saved').on("click", function () {
            currentIndexSaved--;
            showSlideSaved(currentIndexSaved, false)
        });
    }
});