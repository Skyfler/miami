(function() {
    "use strict";

    var Menu = require('./menu.js');
    
    var mainMenu = new Menu({
        elem: document.querySelector('#main_menu')
    });
    var footerMenu = new Menu({
        elem: document.querySelector('#footer_menu')
    });
    var mapElem = document.querySelector('#map_container>.map');
    if (mapElem) {
        var map = new google.maps.Map(mapElem, {
            zoom: 16,
            center: {lat: 49.99335, lng: 36.23237},
            streetViewControl: false,
            mapTypeControl: false,
            scrollwheel: false,
            draggable: false
        });
    }

})();