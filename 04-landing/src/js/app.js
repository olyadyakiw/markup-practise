isWebp()
initMenu()
initInfinityAnimation()

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
	const body = document.querySelector('body');
	const button = document.querySelector('.nav-opener');
	const content = document.querySelector('.header__content');

	button.addEventListener('click', () => {
		body.classList.toggle('nav-active');
		content.classList.toggle('active');
		button.classList.toggle('active');
	})

	window.addEventListener('resize', () => {
		body.classList.remove('nav-active');
		content.classList.remove('active');
		button.classList.remove('active');
	})
}

function initInfinityAnimation() {
	const lines = document.querySelectorAll('.infinity-line')
	const targetWidth = 4000 // The width that the items should fill

	lines.forEach(line => {
		// Get item content
		const scrollerContent = Array.from(line.children)

		// Measure the width of a single item
    	let sampleItem = scrollerContent[0];
    	let itemWidth = sampleItem.getBoundingClientRect().width + 20;

		 // Calculate how many items are needed to fill
    	let itemsNeeded = Math.ceil((targetWidth + 500) / itemWidth);
		console.log(itemsNeeded)

		// For each item in the array, clone it the required number of times
    	for (let i = 0; i < itemsNeeded; i++) {
    	  scrollerContent.forEach((el) => {
    	    const duplicatedItem = el.cloneNode(true);
    	    line.appendChild(duplicatedItem);
    	  });
    	}

		const items = line.querySelectorAll('.infinity-line__text')

		// Get the animation duration from the first item
		const duration = parseFloat(getComputedStyle(sampleItem).animationDuration) || 30; // Default to 30s if not set

		// Set width
		const totalWidth = itemWidth * itemsNeeded;
		line.style.width = `${totalWidth}px`;
		line.style.setProperty('--itemWidth', `${itemWidth}px`)
		
		// Set delay and left
		Array.from(items).forEach((item, index) => {
			const delay = `calc(${duration}s / ${itemsNeeded} * (${itemsNeeded} - ${index}) * -1)`;
			const left = `calc(${itemWidth}px * ${itemsNeeded})`;
			
			item.style.animationDelay = delay;
			item.style.left = left;
		});

	})
}
