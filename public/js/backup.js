var $itemSaveDSlide = $('.item-card-saved'),
        index2 = 0,
        visible2 = 6,
        endIndexSaved = ($itemSaveDSlide.length / visible2) - 1;
    var $item = $('.item-card'), //Cache your DOM selector
        visible = 4, //Set the number of items that will be visible
        index = 0, //Starting index
    endIndex = ($item.length / visible) - 1;
    var slideDiscoveryContainer = $('#slide-discovery');
    var sliderSavedContainer = $('#savedSlider');
    var heightSlide = $(slideDiscoveryContainer).height();
    var heightSlide2 = $(sliderSavedContainer).height()/2;

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

    var $itemMobile = $('.container-card'),
        $lastIndexMobile = $itemMobile.length - 2;
    var $itemMobileSaved = $('.container-card-saved'),
        $lastIndexMobileSaved = $itemMobileSaved.length - 2;
    var $itemCardContainer = $('#slide-discovery .item-card-container');
    var $itemCardContainerSaved = $('#savedSlider .item-card-container');

    if (index == 0 || index2 == 0) {
        $('.slick-prev').addClass('slick-disabled');
        $('.slick-prev-saved').addClass('slick-disabled');
    }
    // click save favorite button
  

    // slider for Discovery action mobile and desktop
    if ($window.width() > 1080) {
        $('.slick-next').on("click", function () {
            let calEndIndex = Math.ceil(endIndex) - 1;
            if (index < endIndex) {
                if (index == 0) {
                    $('.slick-prev').removeClass('slick-disabled');
                } else if (index == calEndIndex) {
                    $('.slick-next').addClass('slick-disabled');
                } else {
                    $('.slick-next').removeClass('slick-disabled');
                }

                index++;
                var calculate =  animateSlide(true, index, 0, heightSlide);
                console.log(calculate);
                
                $itemCardContainer.animate({
                    'top': `-=${heightSlide}px`
                }, 500);
            }
        });

        $('.slick-prev').on("click", function () {
            if (index > 0) {
                if (index == 1) {
                    $('.slick-prev').addClass('slick-disabled');
                    $('.slick-next').removeClass('slick-disabled');
                } else {
                    $('.slick-next').removeClass('slick-disabled');
                }
                index--;
                $itemCardContainer.animate({
                    'top': `+=${heightSlide}px`
                }, 500);
            }
        });

    } else {
        $('.slick-next').on("click", function () {
            var checkPosition = $itemMobile.width() + 10;
            if (index < endIndex) {
                if (index == 0) {
                    $('.slick-prev').removeClass('slick-disabled');
                } else if (index == $lastIndexMobile) {
                    $('.slick-next').addClass('slick-disabled');
                } else {
                    $('.slick-next').removeClass('slick-disabled');
                }
                index++;
                $itemCardContainer.animate({
                    'left': `-=${checkPosition}`,
                }, 500);
            }
        });

        $('.slick-prev').on("click", function () {
            var checkPosition = $itemMobile.width() + 10;

            if (index > 0) {
                if (index == 1) {
                    $('.slick-prev').addClass('slick-disabled');
                    $('.slick-next').removeClass('slick-disabled');
                }
                index--;
                
                $itemCardContainer.animate({
                    'left': `+=${checkPosition}`,
                }, 500);
            }
        });
    }

    // slider for SavedSlider action mobile and desktop

    if ($window.width() > 1080) {
        $('.slick-next-saved').on("click", function () {
            let calEndIndex = Math.ceil(endIndexSaved) - 1;
            console.log(heightSlide2)
            if (index2 < endIndexSaved) {
                if (index2 == 0) {
                    $('.slick-prev-saved').removeClass('slick-disabled');
                } else if (index2 == calEndIndex) {
                    $('.slick-next-saved').addClass('slick-disabled');
                } else {
                    $('.slick-next-saved').removeClass('slick-disabled');
                }

                index2++;
                $itemCardContainerSaved.animate({
                    'top': `-=${heightSlide2}`
                }, 500);
            }
        });

        $('.slick-prev-saved').on("click", function () {

            if (index2 > 0)
                if (index2 == 1) {
                    $('.slick-prev-saved').addClass('slick-disabled');
                    $('.slick-next-saved').removeClass('slick-disabled');
                } else {
                    $('.slick-next-saved').removeClass('slick-disabled');
                } {
                index2--;
                $itemCardContainerSaved.animate({
                    'top': `+=${heightSlide2}`
                }, 500);
            }
        });
    } else {
        $('.slick-next-saved').on("click", function () {
            var checkPosition = $itemCardContainerSaved.width()* ($itemMobileSaved.length - 1);

            console.log(checkPosition)
            console.log($itemMobileSaved.length - 1);

            if (index < endIndex) {
                if (index == 0) {
                    $('.slick-prev-saved').removeClass('slick-disabled');
                } else if (index == $lastIndexMobileSaved) {
                    $('.slick-next-saved').addClass('slick-disabled');
                } else {
                    $('.slick-next-saved').removeClass('slick-disabled');
                }
                index++;

                $itemCardContainerSaved.animate({
                    'left': `-=${checkPosition}`,
                }, 500);
            }
        });

        $('.slick-prev-saved').on("click", function () {
            var checkPosition = $itemMobileSaved.width();

            if (index > 0) {
                if (index == 1) {
                    $('.slick-prev-saved').addClass('slick-disabled');
                    $('.slick-next-saved').removeClass('slick-disabled');
                }
                index--;
                $itemCardContainerSaved.animate({
                    'left': `+=${checkPosition}`,
                }, 500);
            }
        });
    }