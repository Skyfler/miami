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
	
	    var Menu = __webpack_require__(1);
	    
	    var mainMenu = new Menu({
	        elem: document.querySelector('#main_menu')
	    });
	    var footerMenu = new Menu({
	        elem: document.querySelector('#footer_menu')
	    });
	
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	function Menu(options) {
	    this._elem = options.elem;
	    this._openBtn = this._elem.querySelector('[data-component="nav_bar_toggle"]');
	    this._state = 'closed';
	    
	    this._elem.addEventListener('click', this._onClick.bind(this));
	}
	
	Menu.prototype._onClick = function(e) {
	    var target = e.target;
	
	    this._toggleMenu.bind(this)(target);
	    this._toggleSubMenu.bind(this)(target);
	};
	
	Menu.prototype._toggleMenu = function(target) {
	    if (target === this._openBtn) {
	        if (this._state === 'closed') {
	            this._openMenu.bind(this)();
	        } else {
	            this._closeMenu.bind(this)();
	        }
	    }
	};
	
	Menu.prototype._openMenu = function() {
	    var navBarContainer = this._elem.querySelector('.nav_bar_container');
	    var navBar = navBarContainer.querySelector('.nav_bar');
	    
	    this._state = 'open';
	    this._elem.classList.add('open');
	    this._elem.classList.remove('closed');
	    navBarContainer.style.height = navBar.offsetHeight + 'px';
	    this._elem.classList.remove('collapsed');
	    setTimeout(function(){
	        navBarContainer.style.height = '';
	    }, 500);
	};
	
	Menu.prototype._closeMenu = function() {
	    this._state = 'closed';
	    this._elem.classList.add('closed');
	    this._elem.classList.remove('open');
	    this._elem.classList.add('collapsed');
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

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map