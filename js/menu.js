"use strict";

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