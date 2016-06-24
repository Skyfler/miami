/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	    "use strict";
	    
	    __webpack_require__(1);
	    var Dropdown = __webpack_require__(2);
	    var Menu = __webpack_require__(3);
	    var Slider = __webpack_require__(4);
	    
	    var mainMenu = new Menu({
	        elem: document.querySelector('#main_menu')
	    });
	    var footerMenu = new Menu({
	        elem: document.querySelector('#footer_menu')
	    });
	
	    var sliderElem = document.querySelector('#slider');
	    if (sliderElem) {
	        var slider = new Slider({
	            elem: sliderElem,
	            delay: 4000
	        });
	    }
	
	    var carouselElem = document.querySelector('#carousel');
	    if (carouselElem) {
	        var carousel = new Slider({
	            elem: carouselElem,
	            delay: 0
	        });
	    }
	
	    var packageOffersElem = document.querySelector('#package_offers');
	    if (packageOffersElem) {
	        var packageOffers = new Dropdown({
	            elem: packageOffersElem
	        });
	    }
	
	    var additionalServicesElem = document.querySelector('#additional_services');
	    if (additionalServicesElem) {
	        var additionalServices = new Dropdown({
	            elem: additionalServicesElem
	        });
	    }
	    
	    var mapElem = document.querySelector('#map_container>.map');
	    if (mapElem) {
	        var map = new google.maps.Map(mapElem, {
	            zoom: 16,
	            center: {lat: 49.99335, lng: 36.23237},
	            streetViewControl: false,
	            mapTypeControl: false,
	            scrollwheel: false,
	            styles: [
	                {
	                    "featureType": "all",
	                    "elementType": "labels",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "administrative",
	                    "elementType": "labels",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "administrative.country",
	                    "elementType": "geometry.stroke",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "administrative.province",
	                    "elementType": "geometry.stroke",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "landscape",
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "visibility": "on"
	                        },
	                        {
	                            "color": "#e3e3e3"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "landscape",
	                    "elementType": "labels",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "landscape.man_made",
	                    "elementType": "geometry.fill",
	                    "stylers": [
	                        {
	                            "saturation": "0"
	                        },
	                        {
	                            "lightness": "6"
	                        },
	                        {
	                            "weight": "0.90"
	                        },
	                        {
	                            "color": "#f2eee6"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "landscape.man_made",
	                    "elementType": "labels",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "landscape.natural",
	                    "elementType": "labels",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi",
	                    "elementType": "all",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        },
	                        {
	                            "lightness": "0"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi",
	                    "elementType": "geometry.fill",
	                    "stylers": [
	                        {
	                            "visibility": "simplified"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi",
	                    "elementType": "labels",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.attraction",
	                    "elementType": "all",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.attraction",
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "visibility": "simplified"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.attraction",
	                    "elementType": "geometry.fill",
	                    "stylers": [
	                        {
	                            "visibility": "simplified"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.attraction",
	                    "elementType": "labels.icon",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.business",
	                    "elementType": "all",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.business",
	                    "elementType": "labels",
	                    "stylers": [
	                        {
	                            "visibility": "simplified"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.government",
	                    "elementType": "all",
	                    "stylers": [
	                        {
	                            "visibility": "simplified"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.government",
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.government",
	                    "elementType": "labels",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.medical",
	                    "elementType": "all",
	                    "stylers": [
	                        {
	                            "visibility": "simplified"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.park",
	                    "elementType": "geometry.fill",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        },
	                        {
	                            "color": "#e6f0d7"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.place_of_worship",
	                    "elementType": "all",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.school",
	                    "elementType": "all",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.sports_complex",
	                    "elementType": "all",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "road",
	                    "elementType": "all",
	                    "stylers": [
	                        {
	                            "color": "#cccccc"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "road",
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "visibility": "on"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "road",
	                    "elementType": "geometry.fill",
	                    "stylers": [
	                        {
	                            "saturation": "0"
	                        },
	                        {
	                            "lightness": "30"
	                        },
	                        {
	                            "color": "#ffffff"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "road",
	                    "elementType": "geometry.stroke",
	                    "stylers": [
	                        {
	                            "visibility": "on"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "road",
	                    "elementType": "labels.text",
	                    "stylers": [
	                        {
	                            "visibility": "simplified"
	                        },
	                        {
	                            "color": "#000000"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "transit",
	                    "elementType": "all",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "transit",
	                    "elementType": "labels.icon",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "transit.line",
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "transit.line",
	                    "elementType": "labels.text",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "transit.station",
	                    "elementType": "all",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "transit.station.airport",
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "transit.station.airport",
	                    "elementType": "labels",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "water",
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "color": "#FFFFFF"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "water",
	                    "elementType": "geometry.fill",
	                    "stylers": [
	                        {
	                            "lightness": "-28"
	                        },
	                        {
	                            "saturation": "33"
	                        },
	                        {
	                            "color": "#f2f8fd"
	                        }
	                    ]
	                },
	                {
	                    "featureType": "water",
	                    "elementType": "labels",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                }
	            ]
	        });
	    }
	
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function() {
	
	    function runAll () {
	        polyfilForMatches();
	        polyfilForClosest();
	    }
	    
	    function polyfilForMatches() {
	            var e = Element.prototype;
	            e.matches || (e.matches=e.matchesSelector||function(selector){
	                    var matches = document.querySelectorAll(selector), th = this;
	                    return Array.prototype.some.call(matches, function(e){
	                        return e === th;
	                    });
	                });
	    
	    }
	    
	    function polyfilForClosest() {
	        
	        var e = Element.prototype;
	            e.closest = e.closest || function(css){
	                    var node = this;
	    
	                    while (node) {
	                        if (node.matches(css)) return node;
	                        else node = node.parentElement;
	                    }
	                    return null;
	                }
	    
	    }
	
	    runAll();
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	function Dropdown(options) {
	    this._elem = options.elem;
	    this._openBtn = this._elem.querySelector('[data-component="dropdown_toggle"]');
	    if (this._elem.classList.contains('open')) {
	        this._state = 'open';
	    } else {
	        this._state = 'closed';
	    }
	
	    this._elem.addEventListener('click', this._onClick.bind(this));
	}
	
	Dropdown.prototype._onClick = function(e) {
	    e.preventDefault();
	    var target = e.target;
	
	    this._toggleDropdown.bind(this)(target);
	};
	
	Dropdown.prototype._toggleDropdown = function(target) {
	    if (this._openBtn.contains(target)) {
	        if (this._state === 'closed') {
	            this._openDropdown.bind(this)();
	        } else {
	            this._closeDropdown.bind(this)();
	        }
	    }
	};
	
	Dropdown.prototype._openDropdown = function() {
	    var dropdownContainer = this._elem.querySelector('.dropdown_container');
	    var dropdownBar = dropdownContainer.querySelector('.dropdown_bar');
	
	    this._state = 'open';
	    this._elem.classList.add('open');
	    this._elem.classList.remove('closed');
	    dropdownContainer.style.height = dropdownBar.offsetHeight + 'px';
	    this._elem.classList.remove('collapsed');
	    setTimeout(function(){
	        dropdownContainer.style.height = '';
	    }, 500);
	};
	
	Dropdown.prototype._closeDropdown = function() {
	    this._state = 'closed';
	    this._elem.classList.add('closed');
	    this._elem.classList.remove('open');
	    this._elem.classList.add('collapsed');
	};
	
	module.exports = Dropdown;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Dropdown = __webpack_require__(2);
	
	function Menu(options) {
	    Dropdown.call(this, options);
	}
	
	Menu.prototype = Object.create(Dropdown.prototype);
	Menu.prototype.constructor = Menu;
	
	Menu.prototype._onClick = function(e) {
	    var target = e.target;
	
	    this._toggleDropdown.bind(this)(target);
	    this._toggleSubMenu.bind(this)(target);
	};
	
	Menu.prototype._toggleSubMenu = function(target) {
	    var submenuToggleBtn = target.closest('[data-component="submenu_toggle"]');
	
	    if (submenuToggleBtn) {
	        var submenuContainer = submenuToggleBtn.closest('[data-component="submenu_container"]');
	
	        if ('closed' === submenuContainer.dataset.state) {
	            this._openSubMenu(submenuContainer);
	        } else {
	            this._closeSubMenu(submenuContainer);
	        }
	    }
	};
	
	Menu.prototype._openSubMenu = function(submenuContainer) {
	    var submenuBar = submenuContainer.querySelector('.submenu_bar');
	    var submenu = submenuBar.querySelector('.submenu');
	
	    submenuContainer.dataset.state = 'open';
	    submenuContainer.classList.add('open');
	    submenuContainer.classList.remove('closed');
	    submenuBar.style.height = submenu.offsetHeight + 'px';
	    submenuContainer.classList.remove('collapsed');
	    setTimeout(function(){
	        submenuBar.style.height = '';
	    }, 500);
	};
	
	Menu.prototype._closeSubMenu = function(submenuContainer) {
	    submenuContainer.dataset.state = 'closed';
	    submenuContainer.classList.add('closed');
	    submenuContainer.classList.remove('open');
	    submenuContainer.classList.add('collapsed');
	};
	
	module.exports = Menu;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	function Slider(options) {
	    this._elem = options.elem;
	    this._overflowBlock = this._elem.querySelector('.overflow_block');
	    this._moveDelay = options.delay || 0;
	
	    this._initSlider.bind(this)();
	    this._elem.addEventListener('click', this._onClick.bind(this));
	}
	
	Slider.prototype._initSlider = function() {
	    //console.log('_initSlider');
	    var slidesArr = this._overflowBlock.querySelectorAll('[data-component="slide"]');
	    if (0 === slidesArr.length) return;
	
	    this._slidesCount = slidesArr.length;
	    this._currSlide = 1;
	    //console.log('Cur slide = ' + this._currSlide);
	
	    var firstSlide = slidesArr[0];
	    var lastSlide = slidesArr[slidesArr.length - 1];
	
	    this._overflowBlock.insertBefore(lastSlide.cloneNode(true), this._overflowBlock.firstChild);
	    this._overflowBlock.appendChild(firstSlide.cloneNode(true));
	
	    slidesArr = this._overflowBlock.querySelectorAll('[data-component="slide"]');
	    for (var i = 0; i < slidesArr.length; i++) {
	        slidesArr[i].style.width = 100 / (this._slidesCount + 2) + '%';
	        slidesArr[i].classList.remove('selected');
	    }
	    slidesArr[1].classList.add('selected');
	    this._overflowBlock.style.width = 100 * (this._slidesCount + 2) + '%';
	    this._overflowBlock.style.left = '-100%';
	
	    if (0 !== this._moveDelay) this._moveOverTime.bind(this)();
	};
	
	Slider.prototype._onClick = function(e) {
	    e.preventDefault();
	    var target = e.target;
	    this._controlSlider.bind(this)(target);
	};
	
	Slider.prototype._controlSlider = function(target) {
	    var control = target.closest('[data-component="slider_control"]');
	    if (control) {
	        //console.log(this._isMoving);
	        if (this._isMoving) return;
	
	        if (this._moveTimer) {
	            clearTimeout(this._moveTimer);
	        }
	        switch (control.dataset.action) {
	            case 'forward':
	                this._moveSlideForward.bind(this)();
	                break;
	            case 'back':
	                this._moveSlideBack.bind(this)();
	                break;
	        }
	
	        if (0 !== this._moveDelay) this._moveOverTime.bind(this)();
	    }
	};
	
	Slider.prototype._moveSlideForward = function() {
	    this._overflowBlock.style.transitionDuration = '';
	    this._isMoving = true;
	    //console.log('_moveSlideForward');
	
	    var slidesArr = this._overflowBlock.querySelectorAll('[data-component="slide"]');
	    slidesArr[this._currSlide].classList.remove('selected');
	    
	    this._currSlide++;
	    slidesArr[this._currSlide].classList.add('selected');
	    
	    this._overflowBlock.style.left = -100 * this._currSlide + '%';
	
	    if (this._currSlide > this._slidesCount) {
	        this.onTransitionEnd = this._onCornerTransitionEnd.bind(this);
	        this._currSlide = 1;
	        slidesArr[this._currSlide].classList.add('selected');
	        this._elem.addEventListener('transitionend', this.onTransitionEnd);
	    } else {
	        this.onTransitionEnd = this._onMiddleTransitionEnd.bind(this);
	        this._elem.addEventListener('transitionend', this.onTransitionEnd);
	    }
	        
	    //console.log('Cur slide = ' + this._currSlide);
	};
	
	Slider.prototype._moveSlideBack = function() {
	    this._overflowBlock.style.transitionDuration = '';
	    this._isMoving = true;
	    //console.log('_moveSlideBack');
	
	    var slidesArr = this._overflowBlock.querySelectorAll('[data-component="slide"]');
	    slidesArr[this._currSlide].classList.remove('selected');
	
	    this._currSlide--;
	    slidesArr[this._currSlide].classList.add('selected');
	    
	    this._overflowBlock.style.left = -100 * this._currSlide + '%';
	
	    if (0 === this._currSlide) {
	        this.onTransitionEnd = this._onCornerTransitionEnd.bind(this);
	        this._currSlide = this._slidesCount;
	        slidesArr[this._currSlide].classList.add('selected');
	        this._elem.addEventListener('transitionend', this.onTransitionEnd);
	    } else {
	        this.onTransitionEnd = this._onMiddleTransitionEnd.bind(this);
	        this._elem.addEventListener('transitionend', this.onTransitionEnd);
	    }
	    
	    //console.log('Cur slide = ' + this._currSlide);
	};
	
	Slider.prototype._onMiddleTransitionEnd = function(e) {
	    if (e.target !== this._overflowBlock) return;
	    
	    this._elem.removeEventListener('transitionend', this.onTransitionEnd);
	    this._isMoving = false;
	};
	
	Slider.prototype._onCornerTransitionEnd = function(e) {
	    if (e.target !== this._overflowBlock) return;
	    
	    this._elem.removeEventListener('transitionend', this.onTransitionEnd);
	    
	    this._overflowBlock.style.transitionDuration = '0s';
	    this._overflowBlock.style.left = -100 * (this._currSlide) + '%';
	    var slidesArr = this._overflowBlock.querySelectorAll('[data-component="slide"]');
	    slidesArr[this._slidesCount+1].classList.remove('selected');
	    slidesArr[0].classList.remove('selected');
	    this._isMoving = false;
	};
	
	Slider.prototype._moveOverTime = function () {
	    this._moveTimer = setTimeout(function() {
	        if (!this._isMoving) {
	            this._moveSlideForward.bind(this)();
	        }
	        this._moveOverTime.bind(this)();
	    }.bind(this), this._moveDelay);
	};
	
	module.exports = Slider;

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map