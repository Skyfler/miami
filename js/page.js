(function() {
    "use strict";

    var Menu = require('./menu.js');
    
    var mainMenu = new Menu({
        elem: document.querySelector('#main_menu')
    });
    var footerMenu = new Menu({
        elem: document.querySelector('#footer_menu')
    });

})();