"use strict";

require("normalize.css/normalize.css");

require("../sass/style.sass");

var _accordion = require("./accordion");

var _functions = require("./functions.js");

var _slider = require("./slider");

var _counter = require("./counter");

var _carusel = require("./carusel");

var _sliderGood = require("./sliderGood");

var _caruselGoods = require("./caruselGoods");

(0, _functions.importAll)(require.context('../../public', true, /\.(png|svg|jpg|jpe?g|gif|mov|mp4|ico|webmanifest|xml)$/));
(0, _functions.onDocumentReady)(function () {
  console.log('hello.');
});
(0, _slider.swiperSlider)();
(0, _carusel.carusel)(); //accordion()

(0, _counter.counters)();
(0, _accordion.accordionHeaders)();
(0, _sliderGood.sliderGood)();
(0, _caruselGoods.caruselGoods)();