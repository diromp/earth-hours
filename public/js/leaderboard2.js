$('.select-country-2').select2({
	searchInputPlaceholder: 'type here...',
	templateResult: formatTextSelect2,
	templateSelection: formatIcon,
	"language": {
		"noResults": function () {
			return "<span>Sorry, no result.<br/>Try another word </span>";
		}
	},
	escapeMarkup: function (markup) {
		return markup;
	}
}).on('select2:open', function (e) {
	$('input.select2-search__field').attr('placeholder', 'type here...');
});



// Core
function initCarousel( options ) {
	function CustomCarousel( options ) {
		this.init( options );
		this.addListeners();
		return this;
	}

	CustomCarousel.prototype.init = function ( options ) {
		this.node        = options.node;
		this.node.slider = this;
		this.slides      = this.node.querySelector( '.descriptions' ).children;
		this.slidesN     = this.slides.length;
		this.pagination  = this.node.querySelector( '.wrapper' );
		this.pagTransf   = 'translate( -50%, -50% )';
		this.dots        = this.pagination.children;
		this.country	 = this.pagination.querySelector('.country-container');
		this.dotsN       = this.dots.length;
		this.step        = -360/this.dotsN;
		this.angle       = 0;
		this.next        = this.node.querySelector( '.slider__arrow_next' );
		this.prev        = this.node.querySelector( '.slider__arrow_prev' );
		this.activeN     = options.activeN || 0;
		this.prevN       = this.activeN;
		this.speed       = options.speed || 300;
		this.autoplay    = options.autoplay || false;
		this.autoplayId  = null;
		this.screen		 = screen.width;

		this.setSlide( this.activeN );
		this.arrangeDots();
		this.pagination.style.transitionDuration = '500ms';
		//remove animation
		// this.pagination.style.transitionDuration = 0;
		if ( this.autoplay ) this.startAutoplay();
		console.log(this.screen)
	}

	CustomCarousel.prototype.addListeners = function () {
		var slider = this;

		if ( this.next ) {
			this.next.addEventListener( 'click', function() {
				slider.setSlide( slider.activeN + 1 );
			});
		}

		if ( this.prev ) {
			this.prev.addEventListener( 'click', function() {
				slider.setSlide( slider.activeN - 1 );
			});
		}

		for ( var i = 0; i < this.dots.length; i++ ) {		
			this.dots[i].addEventListener( 'click', function( i ) {
				return function() { slider.setSlide( i ); }
			}( i ));
		}

		if ( this.autoplay ) {
			this.node.addEventListener( 'mouseenter', function() {
				slider.stopAutoplay();
			});

			this.node.addEventListener( 'mouseleave', function() {
				slider.startAutoplay();
			});
		}
	};

	CustomCarousel.prototype.setSlide = function ( slideN ) {
		this.slides[ this.activeN ].classList.remove( 'active' );
		if ( this.dots[ this.activeN ] ) this.dots[ this.activeN ].classList.remove( 'active' );
		if ( this.activeN === 0) {
			this.dots[ this.activeN + 9 ].style.left = '0';
			this.dots[ this.activeN + 9 ].style.top = '0';
		} else {
			this.dots[ this.activeN - 1 ].style.left = '0';
			this.dots[ this.activeN - 1 ].style.top = '0';

		}
		this.prevN = this.activeN;
		this.activeN = slideN;
		if ( this.activeN < 0 ) this.activeN = this.slidesN -1;
		else if ( this.activeN >= this.slidesN ) this.activeN = 0;

		this.slides[ this.activeN ].classList.toggle( 'active' );	
		if ( this.dots[ this.activeN ] ) this.dots[ this.activeN ].classList.toggle( 'active' );

		if ( this.activeN === 0) {
			if(this.screen < 768) {
				this.dots[ this.activeN + 9 ].style.left = '-40px';
				this.dots[ this.activeN + 9 ].style.top = '15px';
			} else {
				this.dots[ this.activeN + 9 ].style.left = '-50px';
			}
		}
		if ( this.activeN === 1 ) {
			if(this.screen < 768) {
				this.dots[ this.activeN - 1 ].style.left = '-33px';
				this.dots[ this.activeN - 1 ].style.top = '-5px';
	
			} else {
				this.dots[ this.activeN - 1 ].style.left = '-43px';
				this.dots[ this.activeN - 1 ].style.top = '-30px';
			}
		}
		if ( this.activeN === 2 ) {
			if(this.screen < 768) {
				this.dots[ this.activeN - 1 ].style.left = '-30px';
				this.dots[ this.activeN - 1 ].style.top = '-25px';
	
			} else {
				this.dots[ this.activeN - 1 ].style.top = '-35px';
				this.dots[ this.activeN - 1 ].style.left = '-6px';	
			}
		}
		if ( this.activeN === 3 ) {
			if(this.screen < 768) {
				this.dots[ this.activeN - 1 ].style.left = '0px';
				this.dots[ this.activeN - 1 ].style.top = '-40px';
	
			} else {
				this.dots[ this.activeN - 1 ].style.top = '-43px';
				this.dots[ this.activeN - 1 ].style.left = '5px';	
			}
		}
		if ( this.activeN === 4 ) {
			this.dots[ this.activeN - 1 ].style.top = '-33px';
			this.dots[ this.activeN - 1 ].style.left = '15px';
		}
		if ( this.activeN === 5 ) {
			this.dots[ this.activeN - 1 ].style.top = '-14px';
			this.dots[ this.activeN - 1 ].style.left = '30px';
		}
		if ( this.activeN === 6 ) {
			this.dots[ this.activeN - 1 ].style.left = '40px';
		}
		if ( this.activeN === 7 ) {
			this.dots[ this.activeN - 1 ].style.top = '29px';
			this.dots[ this.activeN - 1 ].style.left = '25px';
		}
		if ( this.activeN === 8 ) {
			this.dots[ this.activeN - 1 ].style.top = '38px';
			this.dots[ this.activeN - 1 ].style.left = '4px';

		}
		if ( this.activeN === 9 ) {
			this.dots[ this.activeN - 1 ].style.left = '-15px';
			this.dots[ this.activeN - 1 ].style.top = '30px';
		}

		this.rotate();
	};

	CustomCarousel.prototype.rotate = function () {
		if ( this.activeN < this.dotsN ) {
			this.angle += function ( dots, next, prev, step ) {
				var inc, half = dots/2;
				if( prev > dots ) prev = dots - 1;
				if( Math.abs( inc = next - prev ) <= half ) return step * inc;
				if( Math.abs( inc = next - prev + dots ) <= half ) return step * inc;
				if( Math.abs( inc = next - prev - dots ) <= half ) return step * inc;
			}( this.dotsN, this.activeN, this.prevN, this.step )

			this.pagination.style.transform = this.pagTransf +'rotate('+ this.angle +'deg)';
			var itemCountry = this.pagination.querySelectorAll('.country-container');

			for ( var i = 0; i < itemCountry.length; i++ ) {
				var basePosition = 360 - (360/itemCountry.length*i);
				var count = 90 + (-this.angle);
				var total = basePosition + count;
				
				itemCountry[i].style.transform = 'rotate('+ total + 'deg)';
			}
		}
	};

	CustomCarousel.prototype.startAutoplay = function () {
		var slider = this;

		//slider.setSlide( slider.activeN + 1 );
	};

	CustomCarousel.prototype.stopAutoplay = function () {
		clearInterval( this.autoplayId );
	};

	CustomCarousel.prototype.arrangeDots = function () {
		for ( var i = 0; i < this.dotsN; i++ ) {
			this.dots[i].style.transform = 'rotate('+ 360/this.dotsN * i +'deg)';
		}
	};
	
	return new CustomCarousel( options );
}


// Init
var plugins = {
	customCarousel: document.querySelectorAll( '.circular-slider-start-2' )
}

document.addEventListener( 'DOMContentLoaded', function() {
	if( plugins.customCarousel.length ) {
		for ( var i = 0; i < plugins.customCarousel.length; i++ ) {
			var carousel = initCarousel({
				node: plugins.customCarousel[i],
				speed: plugins.customCarousel[i].getAttribute( 'data-speed' ),
				autoplay: plugins.customCarousel[i].getAttribute( 'data-autoplay' )
			});
		}
	}
});
function formatTextSelect2(state) {
	if (!state.id) { return state.text; }
	const $item = $(` <span class="item-select">
		<span class="item-select__title">${state.element.text}</span>
	</span>`);
	return $item;
}
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


