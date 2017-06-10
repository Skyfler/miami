"use strict";

var Slider = require('./slider.js');

function FadeSlider(options) {
    Slider.call(this, options);
}

FadeSlider.prototype = Object.create(Slider.prototype);
FadeSlider.prototype.constructor = FadeSlider;

FadeSlider.prototype._initSlider = function() {
    //console.log('_initSlider');
    var slidesArr = this._overflowBlock.querySelectorAll('[data-component="slide"]');
    if (0 === slidesArr.length) return;

    this._slidesCount = slidesArr.length;
    this._currSlide = 0;
    //console.log('Cur slide = ' + this._currSlide);

    slidesArr[0].classList.add('selected');

    if (0 !== this._moveDelay) this._moveOverTime();
};

FadeSlider.prototype._moveSlideForward = function() {
    this._overflowBlock.style.transitionDuration = '';
    this._isMoving = true;
    //console.log('_moveSlideForward');

    var slidesArr = this._overflowBlock.querySelectorAll('[data-component="slide"]');
    slidesArr[this._currSlide].classList.remove('selected');

    this._currSlide++;

    if (this._currSlide === this._slidesCount) {
        this._currSlide = 0;
    }

    slidesArr[this._currSlide].classList.add('selected');
    //console.log('Cur slide = ' + this._currSlide);
    this._isMoving = false;
};

module.exports = FadeSlider;