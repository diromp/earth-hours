$(document).ready(function () {
    var $window = $(window);

    let currentIndex = 0;
    var $itemCardContainer = $('#slide-discovery .item-card-container');
    var visible = 4 ;
    var $item = $('.item-card');

    let currentIndexSaved = 0;
    var $itemCardContainerSaved = $('#savedSlider .item-card-container');
    var visibleSaved = $window.width() < 800 ? 4 : 6 ;
    var $itemSaved = $('.item-card-saved');

    var checkLanguageHeightSlide = $window.width() < 800 ? 102 : 10;
    var checkLanguageHeightSlideSaved = $window.width() < 800 ? 102 : 16.5;

    if($(".language-bm")[0]) {
        checkLanguageHeightSlide = $window.width() < 800 ? 102 : 42;
        checkLanguageHeightSlideSaved = $window.width() < 800 ? 102 : 20;
    } else if($(".language-cs")[0]) {
        checkLanguageHeightSlide = $window.width() < 800 ? 102 : 20;
        checkLanguageHeightSlideSaved = $window.width() < 800 ? 102 : 32;
    } else if($(".language-jp")[0]) {
        checkLanguageHeightSlide = $window.width() < 800 ? 102 : 20;
        checkLanguageHeightSlideSaved = $window.width() < 800 ? 102 : 32;
    }

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
        var checkVisible = Math.ceil($item.length / visible)
        if (index < 0) {
            currentIndex = checkVisible - 1;
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
            $itemCardContainer.css({ 'transform' : `translateY(-${currentIndex * checkLanguageHeightSlide}%` })
        } else {
            $itemCardContainer.css({ 'transform' : `translateX(-${currentIndex * checkLanguageHeightSlide}%` })
        }

    }

    function showSlideSaved(index,verticalView) {
        var checkVisible = Math.ceil($itemSaved.length / visibleSaved)
        if (index < 0) {
            currentIndexSaved = checkVisible - 1;
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
            $itemCardContainerSaved.css({ 'transform' : `translateY(-${currentIndexSaved * checkLanguageHeightSlideSaved}%` })
        } else {
            $itemCardContainerSaved.css({ 'transform' : `translateX(-${currentIndexSaved * checkLanguageHeightSlideSaved}%` })
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