$( ".tel_wrap" ).hover(function() {
	$( ".show_tel" ).show();
	$( ".hide_tel" ).hide();
});

$(document).ready(function() {

	$('.articleWrap_map__cities-item').click(function(){
		$('.articleWrap_map__cities-item').removeClass('active');
		$(this).addClass('active');
	});

	$(window).scroll(function(e) {
		if ($(this).scrollTop() < 200 && $(window).width() < 767){
			$("header").css("position", "relative");
			$(".header_fluid__menu").css("position", "relative");
			$(".header_fluid__info").show();
		}

		if ($(this).scrollTop() > 200 && $(window).width() < 767){
			$(".header_fluid__info").hide();
			$("header").css("position", "fixed");
			$(".header_fluid__menu").css("position", "sticky");
			$(".header_fluid__menu").css("top", "0");
			$(".header_fluid__menu").css("left", "0");
			$(".header_fluid__menu").css("right", "0");
		}
	})

	/* для прайса */
	var e = $(window).width();
	e >= 992 ? $(".parent").hover(function() {
		$(this).find(".nav-child").slideToggle(100)
	}) : $(".parent > .drop_down").click(function() {
		$(this).next(".nav_child").addClass("open")
	}), $(".parent .back_linck > a, .menu_open").click(function() {
		$(".parent .nav_child").removeClass("open")
	}), $(".menu_open").click(function() {
		$("ul.menu").slideToggle(), $(".menu_open").toggleClass("active")
	}), 

	$(".accordion__label").click(function() {
		$(this).next().slideToggle(),
		$(this).toggleClass("accordion__label--active")
	}), 

	$(window).scroll(function() {
		$(window).scrollTop() > 450 ? ($(".header-block__two").addClass("fixed"), setTimeout(function() {
			$(".header-block__two.fixed").addClass("down")
		}, 400)) : ($(".header-block__two.fixed").removeClass("down"), setTimeout(function() {
			$(".header-block__two").removeClass("fixed")
		}, 90))
	}), $("#head-slides.fade").slick({
		arrows: !1,
		dots: !0,
		infinite: !0,
		autoplay: !0,
		speed: 300,
		fade: !0,
		cssEase: "linear",
		customPaging: function(e, s) {
			return $("<span></span>")
		}
	});
});

$('.navMenu_item').hover(function () {
	$(this).children('.navMenu_sub').css("display", "block");
	$(this).children('.navMenu_sub').css("opacity", "1");
}, function () {
	$(this).children('.navMenu_sub').css("display", "none");
});

$(".burger").click(function() {
	$(".navMenu").slideToggle();
});

$(document).ready(function(){
	$(".burger").click(function(){
		$(this).toggleClass('open');
		if ($(".header_fluid__menu").hasClass('sticky')) {
			$(".header_fluid__menu").removeClass('sticky');
		} else {
			$(".header_fluid__menu").css("position", "fixed");
			$(".header_fluid__menu").css("top", "0");
			$(".header_fluid__menu").css("right", "0");
			$(".header_fluid__menu").css("left", "0");
		}
		$(".burger").not(this).addClass('sticky'); //тут закроем все кроме нажатого
	});
});

$(document).delegate(".video_item", "click", function () {
	window.location = $(this).find("a").attr("href");
});

/* скрыть/отобразить что-либо*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}
/* стили для всех select-ов*/
$(document).ready(function () {
	$('select').niceSelect();
}); 

/* показать текст в плитках */
$(function () {
	$("#show_one").click(function () {
		$('#hidden_one').show();
	});
});

$(function () {
	$("#show_second").click(function () {
		$('#hidden_second').show();
	});
});

$(function () {
	$("#show_third").click(function () {
		$('#hidden_third').show();
	});
});

$(function () {
	$("#show_fourth").click(function () {
		$('#hidden_fourth').show();
	});
});

/* прилипающий навбар */
window.onscroll = function () {
	myFunction()
};

var navbar = document.getElementsByClassName("header_fluid__menu");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		//navbar.classList.remove("sticky");
	}
};

/* СЛАЙДЕРЫ НАЧАЛО */
/* большой слайдер на весь экран */
$(document).ready(function () {
	$("#sliderTop").owlCarousel({
		nav: false,
		loop: false,
		
		slideSpeed: 300,
		paginationSpeed: 400,
		
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		
		items: 1,
		itemsDesktop: false,
		itemsDesktopSmall: false,
		itemsTablet: false,
		itemsMobile: false
	});
});

/* слайдер сотрудники */
var owled = $("#sliderPersonal");
owled.owlCarousel({
	loop: false,
	dots: false,
	margin: 30,
	nav: true,
	
	responsive: {
		0: {
			items: 1,
			onInitialized: function (e) {
				$('.counter').text(e.page.size + ' из ' + this.items().length)
			}
		},
		600: {
			items: 2,
			onInitialized: function (e) {
				$('.counter').text(e.page.size + ' из ' + this.items().length)
			}
		},
		1000: {
			items: 3,
			onInitialized: function (e) {
				$('.counter').text(e.page.size + ' из ' + this.items().length)
			}
		},
		1200: {
			items: 4,
			onInitialized: function (e) {
				$('.counter').text(e.page.size + ' из ' + this.items().length)
			}
		}
	},
});

owled.on('changed.owl.carousel', function (e) {
	var newPos = e.item.index;

	var element   = e.target;         // DOM element, in this example .owl-carousel
    var name      = e.type;           // Name of the event, in this example dragged
    var namespace = e.namespace;      // Namespace of the event, in this example owl.carousel
    var items     = e.item.count;     // Number of items
    var item      = e.item.index;     // Position of the current item
    var pages     = e.page.count;     // Number of pages
    var page      = e.page.index;     // Position of the current page
    var size      = e.page.size;      // Number of items per page

    if (newPos > e.item.count) {
    	newPos = newPos - e.item.count;
    }
    $('.countSpecialists').text(newPos + ' из ' + e.item.count)

});

$(".nextSpecialist").click(function () {
	owled.trigger('next.owl.carousel');
})
$(".prevSpecialist").click(function () {
	owled.trigger('prev.owl.carousel');
});

/* слайдер новостей */
var owl2 = $("#sliderNews");
owl2.owlCarousel({
	loop: true,
	margin: 30,
	
	responsive: {
		0: {
			items: 1,
			dots: true,
			nav: false,
			onInitialized: function (e) {
				$('.countNews').text('1 из ' + this.items().length)
			}
		},
		600: {
			items: 2,
			dots: true,
			nav: false,
			onInitialized: function (e) {
				$('.countNews').text('2 из ' + this.items().length)
			}
		},
		1000: {
			items: 2,
			dots: false,
			nav: true,
			onInitialized: function (e) {
				$('.countNews').text('2 из ' + this.items().length)
			}
		},
	}
});

$('#sliderNews').on('initialized.owl.carousel changed.owl.carousel', function (e) {
	if (!e.namespace) {
		return;
	}
	var carousel = e.relatedTarget;
	$('.countNews').text(carousel.relative(carousel.current()) + 1 + ' из ' + carousel.items().length);
}).owlCarousel({});

/*слайдер с отзывами */
var owl3 = $("#sliderReviews");
owl3.owlCarousel({
	loop: true,
	margin: 30,
	dots: true,
	nav: false,
	
	responsive: {
		0: {
			items: 1,
			onInitialized: function (e) {
				$('.countReviews').text('1 из ' + this.items().length)
			}
		},
		600: {
			items: 2,
			onInitialized: function (e) {
				$('.countReviews').text('2 из ' + this.items().length)
			}
		},
		1000: {
			items: 2,
			onInitialized: function (e) {
				$('.countReviews').text('2 из ' + this.items().length)
			}
		}
	},
});

owl3.on('changed.owl.carousel', function (e) {
	var newPos = e.item.index;
	if (newPos > e.item.count) {
		newPos = newPos - e.item.count;
	}
	$('.countReviews').text(newPos + ' из ' + e.item.count)
});

/* слайдер методы */
var owl4 = $("#sliderMethods");
owl4.owlCarousel({
	loop: true,
	margin: 30,
	dots: true,
	nav: false,
	
	responsive: {
		0: {
			items: 1,
			onInitialized: function (e) {
				$('.countMethods').text('1 из ' + this.items().length)
			}
		},
		600: {
			items: 3,
			onInitialized: function (e) {
				$('.countMethods').text('3 из ' + this.items().length)
			}
		},
		1000: {
			items: 3,
			onInitialized: function (e) {
				$('.countMethods').text('3 из ' + this.items().length)
			}
		}
	},
});

owl4.on('changed.owl.carousel', function (e) {
	var newPos = e.item.index;

	if (newPos > e.item.count) {
		newPos = newPos - e.item.count;
	}
	$('.countMethods').text(newPos + ' из ' + e.item.count)

});

/*слайдер с отзывами - не ресиденты */
var owl5 = $("#noresidentReviews");
owl5.owlCarousel({
	loop: true,
	margin: 30,
	dots: true,
	nav: false,
	responsive: {
		0: {
			items: 1,
			onInitialized: function (e) {
				$('.nocountReviews').text('1 из ' + this.items().length)
			}
		},
		600: {
			items: 2,
			onInitialized: function (e) {
				$('.nocountReviews').text('2 из ' + this.items().length)
			}
		},
		1000: {
			items: 2,
			onInitialized: function (e) {
				$('.nocountReviews').text('2 из ' + this.items().length)
			}
		}
	},
});

owl5.on('changed.owl.carousel', function (e) {
	var newPos = e.item.index;
	if (newPos > e.item.count) {
		newPos = newPos - e.item.count;
	}
	$('.nocountReviews').text(newPos + ' из ' + e.item.count)
});

$(".method__slider__photo").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: ".method__slider__nav",
	fade: !0,
	arrows: !0,
	dots: !0,
	appendDots: $(".method__slider__photo-nav"),
	appendArrows: $(".method__slider__photo-nav")
});

$(".method__slider__nav").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: ".method__slider__photo",
	dots: !1,
	infinite: !1,
	arrows: !1,
	focusOnSelect: !0
});

$(".direction__slider__photo").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: ".direction__slider__nav",
	fade: !0,
	arrows: !0,
	dots: !0,
	appendDots: $(".direction__slider__photo-nav"),
	appendArrows: $(".direction__slider__photo-nav")
});

$(".direction__slider__nav").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: ".direction__slider__photo",
	infinite: !1,
	arrows: !1,
	dots: !1,
	focusOnSelect: !0,
	responsive: [
		{
			breakpoint:1200,
			settings: {
				slidesToShow: 5
			}
		},
		{
			breakpoint:992,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint:768, 
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint:576,
			settings: {
				slidesToShow: 3
			}
		},
	]
});

var owl = $("#sliderSprav");
owl.owlCarousel({
	loop: false,
	margin: 20,
	nav: true,

	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 4,
		}
	},
});

$('#videoreviews_slider').owlCarousel({
    loop:true,
    items:1,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            nav:false,
            dots:false,
			onInitialized: function (e) {
				$('.counterVideos').text(e.page.size + ' из ' + this.items().length)
			}
        },
        600:{
            nav:false,
            dots:false,
			onInitialized: function (e) {
				$('.counterVideos').text(e.page.size + ' из ' + this.items().length)
			}
        },
        1000:{
            nav:true,
            navElement: ["owl-dots"],
            dots:true,
			onInitialized: function (e) {
				$('.counterVideos').text(e.page.size + ' из ' + this.items().length)
			}
        }
    }
});

$('#testimonials_slider').owlCarousel({
    loop:true,
    items:1,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            nav:false,
            dots:false,
			onInitialized: function (e) {
				$('.counterTest').text(e.page.size + ' из ' + this.items().length)
			}
        },
        600:{
            nav:false,
            dots:false,
			onInitialized: function (e) {
				$('.counterTest').text(e.page.size + ' из ' + this.items().length)
			}
        },
        1000:{
            nav:false,
            dots:true,
			onInitialized: function (e) {
				$('.counterTest').text(e.page.size + ' из ' + this.items().length)
			}
        }
    }
});

$('#methods_slider').owlCarousel({
    loop:true,
    items:4,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
        	items:1,
            nav:true,
            dots:true,
			onInitialized: function(e){
				$('.countMethods').text(e.page.size + ' из ' + this.items().length)
			}
        },
        600:{
        	items:2,
            nav:true,
            dots:true,
			onInitialized: function(e){
				$('.countMethods').text(e.page.size + ' из ' + this.items().length)
			}
        },
        1000:{
        	items:3,
            nav:true,
            dots:true,
			onInitialized: function(e){
				$('.countMethods').text(e.page.size + ' из ' + this.items().length)
			}
        }
    }
});

$('#fonds_slider').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,

    responsive:{
        0:{
            nav:false,
            dots:false,
            items:1
        },
        600:{
            nav:false,
            dots:false,
            items:1
        },
        1000:{
            nav:false,
            dots:true,
            items:3
        }
    }
});

$('#faq_slider').owlCarousel({
	loop:true,
	margin:20,
	items:1,
	dots:true,
	nav:false
});

$('#articles_slider').owlCarousel({
    loop:true,
    items:1,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            nav:false,
            dots:false,
			onInitialized: function (e) {
				$('.counterArticles').text(e.page.size + ' из ' + this.items().length)
			}
        },
        600:{
            nav:false,
            dots:false,
			onInitialized: function (e) {
				$('.counterArticles').text(e.page.size + ' из ' + this.items().length)
			}
        },
        1000:{
            nav:false,
            dots:true,
			onInitialized: function (e) {
				$('.counterArticles').text(e.page.size + ' из ' + this.items().length)
			}
        }
    }
});

$('#fonds_slider').owlCarousel({
    loop:true,
    items:3,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            nav:false,
            dots:false
        },
        600:{
            nav:false,
            dots:false
        },
        1000:{
            nav:false,
            dots:true
        }
    }
});

/* СЛАЙДЕРЫ КОНЕЦ */

$(document).ready(function (){
    $(".testimonials_slider__nav-item").click(function(){
        $('html, body').animate({
            scrollTop: $("#testimonials").offset().top
        }, 100);
    });
    $(".videoreviews_slider__nav-item").click(function(){
        $('html, body').animate({
            scrollTop: $("#video").offset().top
        }, 100);
    });
    $(".articles_slider__nav-item").click(function(){
        $('html, body').animate({
            scrollTop: $("#articles").offset().top
        }, 100);
    });
});

/* МОДАЛЬНЫЕ ОКНА НАЧАЛО */
function closeModals() {
	$('.overlay').fadeOut();
	setTimeout(function () {
		$('body').removeClass('modal-open');
	}, 400);
}

// закрытие при клике на оверлей
$('.overlay').on('click', function (e) {
	if (!$(e.target).closest('.popup').length) {
		closeModals();
	}
});

// открыть по кнопке "Запись на прием"
$('.button-campaign').click(function () {
	$('body').addClass('modal-open');
	$('.overlay-campaign').fadeIn();
});

// закрыть на крестик
$('.close-campaign').click(function () {
	closeModals();
});

// открыть по кнопке Модальное окно "Задать вопрос"
$('.button-question').click(function (e) {
	e.preventDefault();
	$('body').addClass('modal-open');
	$('.overlay-question').fadeIn();
});

$('.close-question').click(function () {
	closeModals();
});

// открыть по кнопке Модальное окно "Поделиться"
$('.button-repost').click(function (e) {
	e.preventDefault();
	$('body').addClass('modal-open');
	$('.overlay-repost').fadeIn();
});

$('.close-repost').click(function () {
	closeModals();
});


// открыть по кнопке Модальное окно "Поиск"
$('.button-search').click(function (e) {
	e.preventDefault();
	$('body').addClass('modal-open');
	$('.overlay-search').fadeIn();
});

$('.close-search').click(function () {
	closeModals();
});

// открыть по кнопке Модальное окно "Звонок"
$('.button-call').on('click', function (e) {
	e.preventDefault();
	$('body').addClass('modal-open');
	$('.overlay-call').fadeIn();
});

$('.close-call').click(function () {
	closeModals();
});

// открыть по кнопке Модальное окно "Отзыв"
$('.button-review').click(function () {
	$('body').addClass('modal-open');
	$('.overlay-review').fadeIn();
});

$('.close-review').click(function () {
	closeModals();
});

// открыть по кнопке Модальное окно "Жалобы и предложения"
$('.button-suggestion').click(function (e) {
	e.preventDefault();
	$('body').addClass('modal-open');
	$('.overlay-suggestion').fadeIn();
});

$('.close-suggestion').click(function () {
	closeModals();
});

// открыть по кнопке Модальное окно "Жалобы и предложения"
$('.button-consultation').click(function (e) {
	e.preventDefault();
	$('body').addClass('modal-open');
	$('.overlay-consultation').fadeIn();
});

$('.close-consultation').click(function () {
	closeModals();
});

// открыть по кнопке Модальное окно "Отзыв по специалисту"
$('.button-specialist--review').click(function (e) {
	e.preventDefault();
	$('body').addClass('modal-open');
	$('.overlay-specialist--review').fadeIn();
});

$('.close-specialist--review').click(function () {
	closeModals();
});

// открыть по кнопке Модальное окно "Отзыв по специалисту"
$('.button-sms--review').click(function (e) {
	e.preventDefault();
	$('body').addClass('modal-open');
	$('.overlay-sms--review').fadeIn();
});

$('.close-sms--review').click(function () {
	closeModals();
});

/* МОДАЛЬНЫЕ ОКНА КОНЕЦ */

window.Cookies = {
	get: function getF(name) {
		var matches = document.cookie.match(new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
			));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	},
	set: function setMinF(name, value, minutes) {
		var expires, date;
		if (minutes) {
			date = new Date();
			date.setTime(date.getTime() + (parseInt(minutes, 10) * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		} else {
			expires = "";
		}
		if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
			value = encodeURIComponent(value);
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	},
	setDays: function setDaysF(name, value, days) {
		var time = parseInt(days, 10) * 24 * 60;
		window.Cookies.set(name, value, time);
	},
	erase: function eraseF(name) {
		window.Cookies.set(name, "", -1);
	}
}; 

/* плавный скролл вверх */
$(document).ready(function () {
	
	$("#click").click(function () {
		$('html, body').animate({
			scrollTop: $("#top").offset().top
		}, 1000);
	});
	
	/* методы лечения клик */
	$('.show--one').on('click', function () {
		$(this).addClass('is-clicked').closest('.methodItem').find('.close-desc').show();
	});
	
	$('.menuList a').on('click', function (e) {
		if (this.pathname === '/eshche/') {
			e.preventDefault();
		}
	});
	
	try {
		$(".js-sectificates__slider-main").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: !0,
			asNavFor: ".js-sectificates__slider-nav",
			lazyLoad: 'ondemand'
		});
		$(".js-sectificates__slider-nav").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: ".js-sectificates__slider-main",
			dots: !1,
			vertical: !0,
			centerMode: !1,
			infinite: !0,
			arrows: !1,
			focusOnSelect: !0,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					vertical: !1
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					vertical: !1
				}
			}, {
				breakpoint: 0,
				settings: {
					slidesToShow: 2,
					vertical: !1
				}
			}]
		});
	} catch (e) { }
	
});

/* скрыть вверху / показать ниже */
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('#click').show();
		} else {
			$('#click').hide();
		}
	});
});

/* облака */
var tl = new TimelineMax({onUpdate: updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('.cloud__right', .8, {x: -2000, opacity: 1});
tl.from('.cloud__left', .9, {x: 900, opacity: 1, ease: Power4.easeInOut}, "=-.8");
tl.from('.cloud__bot', .9, {x: -800, opacity: 1, ease: Power4.easeInOut}, "=-.8");

tl.from('.heli-move', .9, {x: 4000, opacity: 1, ease: Power4.easeInOut}, "=-.8");
tl.from('.two__clouds-move', .9, {x: -4000, opacity: 1, ease: Power4.easeInOut}, "=-.8");

tl.from('.sun-move', .9, {x: -4000, opacity: 1, ease: Power4.easeInOut}, "=-.8");

const scene = new ScrollMagic.Scene({
	triggerElement: "header",
	triggerHook: "onEnter",
	duration: "400%"
})

.setTween(tl)
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
	triggerElement: "header",
	triggerHook: "onLeave",
	duration: "0%"
})
.setTween(tl2)
.addTo(controller);

function updatePercentage() {
	tl.progress();
	//console.log(tl.progress());
}
/* облака конец */

function send_dataAjax(myForm) {
	var sID = myForm.id.split('_')[1];
	var url = '/ajax.php';//$(form).attr('action');
	var FORM_DATA;
	
	var bTypeFD = false;
	if (typeof FormData == 'function') {
		FORM_DATA = new FormData(myForm);
		bTypeFD = true;
	} else {
		FORM_DATA = $(myForm).serializeArray();
	}
	
	$.ajax({
		url: url,
		type: 'POST',
		data: FORM_DATA,
		cache: false,
		processData: (!bTypeFD),
		contentType: (bTypeFD ? false : 'application/x-www-form-urlencoded;charset=UTF-8'),
		success: function (data) {
			console.log(sID);
			data = JSON.parse(data);
			if (!data.error) {
				if (sID == 37) {
					var	html = '<div class="popup-specialist--outer"><h4>Спасибо за ваш отзыв!</h4><p>Хотите получить подарок от Дети Индиго?</p><p>Оставьте отзыв о специалисте на <a class="popup-specialist--gift" href="<?=$link_prodoc?>">prodoctorov.ru</a></p></div>';
				}

				else {
					var html = '<div class="hide_form"><h1>Спасибо за Ваше обращение!</h1><p style="text-align:center;padding-top:20px">Наши специалисты с вами свяжутся в ближайшее время.</p></div>';
					$('#form_' + sID).html(html);
					
					setTimeout(function(){
						$('#form_' + sID).closest('.overlay').fadeOut();
					}, 5000);
				}
				
			} else {
				console.log('Ошибка отправки формы.');
			}
			return true;
		}
	});
}

$('.popup-form').on('submit', function (e) {
	e.preventDefault();
	send_dataAjax(this);
});

/* Rating cookies: SET GET and CHECK */
function setCookie(name,value,days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*365*24*60*60));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function eraseCookie(name) {   
	document.cookie = name+'=; Max-Age=-99999999;';  
}

/* specialists rating */
$(document).ready(function() {
	$(".text").toggle();
	setCookie();
	getCookie();

	function checkCookie(){
		var myCookie = getCookie("user_vote");
		if (myCookie == null) {
			$(".text").toggle();
		}
		else {
			$(".text").show();
		}
	}

	$('.vote').on('click', function(){

		$(this).addClass('active');

		let parent = $(this).parent().parent().parent().parent();
		let commentCountElement = parent.find('.commentscount');
		let ratingValueElement = parent.find('.ratingvalue');
		let votedValue = parseInt($(this).attr('data-score'));
		parent.addClass('voted');

  		setCookie('user_vote', votedValue, 365); //установили куки
		let user_vote = getCookie('user_vote'); //передали

		localStorage.setItem('user_voted', true);
		let localValue = localStorage.getItem('user_voted'); 

		let commentCount = parseInt(commentCountElement.text());
		commentCountElement.text(commentCount + 1);

		let rating = parseFloat(ratingValueElement.text()); //возвращает число с плав.точкой
		rating = (commentCount * rating + votedValue)/(commentCount + 1);
		ratingValueElement.text(rating.toFixed(2)); //округление до 2-го знака после запятой

		$(".text").show();
	});

});

/* lazyload old 
const targets = document.querySelectorAll('img');
const lazyLoad = target => {
	const io = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			//console.log('😍'); 
			if (entry.isIntersecting) {
				const img = entry.target;
				const src = img.getAttribute('data-lazy');

				img.setAttribute('src', src);
				img.classList.add('fade');

				observer.disconnect();
			}
		});
	});
	io.observe(target)
};
targets.forEach(lazyLoad);

/* for background-image styles 
var lazyLoadInstance = new LazyLoad({
	elements_selector: ".lazy",
	load_delay: 100
});*/

function myLazyFunc(s) {
	function i(e, t) {
		var s = new Image,
		i = e.getAttribute("data-src");
		s.onload = function() {
			e.parent ? e.parent.replaceChild(s, e) : e.src = i, t && t()
		}, s.src = i
	}

	function e() {
		for (var e = 0; e < n.length; e++) 0 <= (t = n[e].getBoundingClientRect()).top && 0 <= t.left && t.top <= (s.innerHeight || document.documentElement.clientHeight) && i(n[e], function() {
			n.splice(e, e)
		});
			var t
		}
		for (var n = new Array, t = function(e, t) {
			if (document.querySelectorAll) t = document.querySelectorAll(e);
			else {
				var s = document,
				i = s.styleSheets[0] || s.createStyleSheet();
				i.addRule(e, "f:b");
				for (var n = s.all, a = 0, o = [], r = n.length; a < r; a++) n[a].currentStyle.f && o.push(n[a]);
					i.removeRule(0), t = o
			}
			return t
		}("img.lazy"), a = 0; a < t.length; a++) n.push(t[a]);
			e(),
			function(e, t) {
				s.addEventListener ? this.addEventListener(e, t, !1) : s.attachEvent ? this.attachEvent("on" + e, t) : this.onscroll = t
			}("scroll", e)
		}(this);
		var lazyLoadInstance = new LazyLoad({
			elements_selector: ".lazy",
			load_delay: 100
		});

if(window.location.href == 'https://deti-indigo74.ru/'){
	const bgTree = document.getElementById("girl");
	document.addEventListener("mousemove", function (e) { MoveBackground(e); });

	function MoveBackground(e){
		let offsetX = (e.clientX / window.innerWidth * 20) - 15;
		let offsetY = (e.clientY / window.innerHeight * 10) - 5;
		bgTree.setAttribute("style", "transform: translateX(" + offsetX + "px " + ")");
	}
}

/* youtube */
coll=document.getElementsByClassName("collapsible");for(i=0;i<coll.length;i++)coll[i].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"});
function r(e){/in/.test(document.readyState)?setTimeout("r("+e+")",9):e()}r(function(){if(document.getElementsByClassName)e=document.getElementsByClassName("youtube");else var e=function(e,i){for(var t=[],a=new RegExp("(^| )"+i+"( |$)"),l=e.getElementsByTagName("*"),
    o=0,s=l.length;o<s;o++)a.test(l[o].className)&&t.push(l[o]);return t}(document.body,"youtube");for(var i=e.length,t=0;t<i;t++){e[t].style.backgroundImage="url(http://i.ytimg.com/vi/"+e[t].id+"/sddefault.jpg)";var a=document.createElement("div");a.setAttribute("class","play"),
e[t].appendChild(a),e[t].onclick=function(){var e=document.createElement("iframe"),i="https://www.youtube.com/embed/"+this.id+"?autoplay=1&autohide=1";this.getAttribute("data-params")&&(i+="&"+this.getAttribute("data-params")),e.setAttribute("src",i),e.setAttribute("frameborder","0"),
e.style.width=this.style.width,e.style.height=this.style.height,this.parentNode.replaceChild(e,this)}}});


var items = document.getElementsByClassName('dispatch-mask');

Array.prototype.forEach.call(items, function(element) {
    var phoneMask = new IMask(element, 
    {
  		mask: [

			{
				mask: '+0 0000 000-00-00',
				startsWith: '77172', //Астана
				lazy:false,
				country: '<img class="flag-icon" src="images/icons/flags/kazakhstan.svg" alt="казахстан флаг">'
			},

			{
				mask: '+0 0000 000-00-00',
				startsWith: '77212', //Караганда
				lazy:false,
				country: '<img class="flag-icon" src="images/icons/flags/kazakhstan.svg" alt="казахстан флаг">'
			},

			{
				mask: '+0 0000 000-00-00',
				startsWith: '77252', //Шымкент
				lazy:false,
				country: '<img class="flag-icon" src="images/icons/flags/kazakhstan.svg" alt="казахстан флаг">'
			},

			{
				mask: '+0 000 000-00-00',
				startsWith: '7727', //Алматы
				lazy:false,
				country: '<img class="flag-icon" src="images/icons/flags/kazakhstan.svg" alt="казахстан флаг">'
			},

			{
				mask: '+0 000 000-00-00',
				startsWith: '7',
				lazy: false,
				country: '<img class="flag-icon" src="images/icons/flags/russia.svg" alt="россия флаг">'
			},

			{
				mask: '0 000 000-00-00',
				startsWith: '8',
				lazy: false,
				country: '<img class="flag-icon" src="images/icons/flags/russia.svg" alt="россия флаг">'
			},

			{
				mask: '+0 000 000-00-00',
				startsWith: '1',
				lazy: false,
				country: '<img class="flag-icon" src="images/icons/flags/united-states.svg" alt="сша флаг">'
			},

			{
				mask: '+000 000-000-00', 
				startsWith: '380',
				lazy: false,
				country: '<img class="flag-icon" src="images/icons/flags/ukraine.svg" alt="украина флаг">'
			},

			{
				mask: '+000 000-000-00', 
				startsWith: '375',
				lazy: false,
				country: '<img class="flag-icon" src="images/icons/flags/belarus.svg" alt="беларусь флаг">'
			},

			{
				mask: '+000 000-000-00', 
				startsWith: '371',
				lazy: false,
				country: '<img class="flag-icon" src="images/icons/flags/latvia.svg" alt="латвия флаг">'
			},

			{
				mask: '+000 000-000-00', 
				startsWith: '998',
				lazy: false,
				country: '<img class="flag-icon" src="images/icons/flags/uzbekistan.svg" alt="узбекистан флаг">'
			},

			{
				mask: '+000 000-000-00', 
				startsWith: '996',
				lazy: false,
				country: '<img class="flag-icon" src="images/icons/flags/kyrgyzstan.svg" alt="кыргызыстан флаг">'
			},

			{
				mask: '+000 000-000-00', 
				startsWith: '373',
				lazy: false,
				country: '<img class="flag-icon" src="images/icons/flags/moldova.svg" alt="молдова флаг">'
			},

			{
				mask: '+00 000-000-00', 
				startsWith: '90',
				lazy: false,
				country: '<img class="flag-icon" src="images/icons/flags/turkey.svg" alt="турция флаг">'
			},

			{
				mask: '+00 000-000-00', 
				startsWith: '49',
				lazy: false,
				country: '<img class="flag-icon" src="images/icons/flags/germany.svg" alt="германия флаг">'
			},

			{
				mask: '0000000000000',
				startsWith: '',
				country: ''
			} 

			],

			dispatch: function (appended, dynamicMasked) {
				var number = (dynamicMasked.value + appended).replace(/\D/g,'');

				return dynamicMasked.compiledMasks.find(function (m) {
					return number.indexOf(m.startsWith) === 0;
				}) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length-1];
			}
		}).on('accept', function() {
			document.querySelectorAll('dispatch-value').innerHTML = phoneMask.masked.currentMask.country;
			console.log((phoneMask.masked.currentMask.country));	
		});
});