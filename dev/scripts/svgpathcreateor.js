"use strict";

function SvgPathCreator(options) {
    this._elem = options.elem;
    this._minScreenWidth = options.minScreenWidth;

    window.onload = function() {
        setTimeout(function() {
            this._init.bind(this)();
            window.addEventListener("resize", this._onResize.bind(this));
        }.bind(this), 0);
    }.bind(this);
}

SvgPathCreator.prototype._init = function() {
    /*console.log('Starting init function');*/
    this._listItems = this._elem.querySelectorAll('li');
    this._svgCount = this._listItems.length - 1;
    
    this._createSvgArr.bind(this)();    
    this._createAllSvgPaths.bind(this)();
    this._insertSvgIntoHtml.bind(this)();

    /*console.log('Init done!');*/
};

SvgPathCreator.prototype._onResize = function() {
    this._removeSvgElements.bind(this)();
    
    if (this._timer) {
        clearTimeout(this._timer);
    }
    if (!this._screenWidthCheck()) return;
    
    this._timer = setTimeout(function() {
        this._createSvgElements.bind(this)();
        this._createAllSvgPaths.bind(this)();
        this._insertSvgIntoHtml.bind(this)();
    }.bind(this), 1000);
};

SvgPathCreator.prototype._calculateSvgPath = function(i) {
    var curLI = this._listItems[i],
        nextLi = this._listItems[i + 1],
        svgElemHeight,
        svgElemWidth,
        pathAscend;

    svgElemHeight = (curLI.offsetHeight / 2) + (nextLi.offsetHeight / 2) - 36 - 5;
    svgElemWidth = this._elem.offsetWidth - 38 - 76 - 300 - 300 - 90 - 90;
    pathAscend = i % 2;
    /*console.log({
        curLI: curLI,
        nextLi: nextLi,
        height: svgElemHeight,
        width: svgElemWidth,
        ascending: pathAscend,
        index: i
    });*/

    return {
        height: svgElemHeight,
        width: svgElemWidth,
        ascending: pathAscend,
        index: i
    };
};

SvgPathCreator.prototype._createSvgArr = function() {
    /*console.log('Creating SVG elements');*/
    this._svgArr = [];

    this._createSvgElements.bind(this)();
};

SvgPathCreator.prototype._createSvgElements = function() {
    if (!this._screenWidthCheck()) return;
    
    for (var i = 0; i < this._svgCount; i++) {
        var svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElem.classList.add('svgdecor');
        this._svgArr.push(svgElem);
    }
};

SvgPathCreator.prototype._createAllSvgPaths = function() {
    if (!this._screenWidthCheck()) return;
    
    /*console.log('Creating SVG PATH elements');*/
    for (var i = 0; i < this._listItems.length - 1; i++) {
        this._createSvgPath.bind(this)(this._calculateSvgPath.bind(this)(i));
    }
};

SvgPathCreator.prototype._createSvgPath = function(options) {
    this._svgArr[options.index].style.width = options.width + 'px';
    this._svgArr[options.index].style.height = options.height + 'px';
    this._svgArr[options.index].setAttribute('preserveAspectRatio', 'none');

    if (options.ascending) {
        this._svgArr[options.index].innerHTML = '<path fill="none" ' +
            'd="M0,' + options.height + ' Q' + options.width + ',' + options.height + ' ' + options.width + ',0"' +
            ' />';
    } else {
        this._svgArr[options.index].innerHTML = '<path fill="none" ' +
            'd="M0,0 Q0,' + options.height + ' ' + options.width + ',' + options.height + '"' +
            ' />';
    }
};

SvgPathCreator.prototype._insertSvgIntoHtml = function() {
    if (!this._screenWidthCheck()) return;
    
    /*console.log('Inserting SVG elements into HTML');*/
    for (var i = 0; i < this._svgArr.length; i++) {
        this._listItems[i].appendChild(this._svgArr[i]);
    }
};

SvgPathCreator.prototype._removeSvgElements = function() {
    if (this._svgArr.length > 0) {
        /*console.log('Removing SVG elements from HTML');*/
        for (var i = 0; i < this._svgArr.length; i++) {
            var parent = this._svgArr[i].parentElement;
            parent.removeChild(this._svgArr[i]);
        }
        
        this._svgArr.length = 0;
    }
};

SvgPathCreator.prototype._screenWidthCheck = function() {
    return document.body.clientWidth >= this._minScreenWidth;
};

module.exports = SvgPathCreator;