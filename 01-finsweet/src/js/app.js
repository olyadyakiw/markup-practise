//= modules/jquery.min.js
//= modules/jcf.js
//= modules/swiper.js
//= modules/aos.js

jQuery(function() {
	isWebp();
	initMenu();
	initHeaderScroll();
    initTestimonialSlider();
    initAnimation();
    // isElementExist("class", function);
});

function isElementExist(_el, _cb) {
	var elem = document.querySelector(_el);

	if (document.body.contains(elem)) {
		try {
			_cb();
		} catch(e) {
			console.log(e);
		}
	}
}

function isWebp() {
    function testWebP(callback) {

        var webP = new Image()
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2)
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }
    
    testWebP(function (support) {
    
        if (support == true) {
            document.querySelector('body').classList.add('webp')
        } else {
            document.querySelector('body').classList.add('no-webp')
        }
    })
}

function initMenu() {
	const body = document.querySelector('body')
	const button = document.querySelector('.nav-opener')
	const content = document.querySelector('.header__content')

	button.addEventListener('click', (e) => {
        e.preventDefault();
		body.classList.toggle('nav-active')
		content.classList.toggle('active')
		button.classList.toggle('active')
	})

	window.addEventListener('resize', () => {
		body.classList.remove('nav-active')
		content.classList.remove('active')
		button.classList.remove('active')
	})
}

function initHeaderScroll() {
    let lastScroll = 0
    const defaultOffset = 100
    const header = document.querySelector(".header")

    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
    const containHide = () => header.classList.contains("hide")

    window.addEventListener("scroll", () => {

        if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
            //scroll down
            header.classList.add("hide");
        } else if (scrollPosition() < lastScroll && containHide()) {
            //scroll up
            header.classList.remove("hide");
        }

        lastScroll = scrollPosition();
    })
}

function initTestimonialSlider() {
    const swiper = new Swiper('.swiper', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

    })
}

function initAnimation() {
    AOS.init(
        {
            duration: 1200,
            once: true
        }
    )
}