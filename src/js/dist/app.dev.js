"use strict";

require("normalize.css/normalize.css");

require("../sass/style.sass");

var _accordion = require("./accordion");

var _functions = require("./functions.js");

var _slider = require("./slider");

var _counter = require("./counter");

var _carusel = require("./carusel");

var _caruselGoods = require("./caruselGoods");

var _sliderGood = require("./sliderGood");

var _modalCardProduct = require("./modalCardProduct");

var _modalProfile = require("./modalProfile");

(0, _functions.importAll)(require.context('../../public', true, /\.(png|svg|jpg|jpe?g|gif|mov|mp4|ico|webmanifest|xml)$/));
(0, _functions.onDocumentReady)(function () {
  console.log('hello.');
});
(0, _modalCardProduct.modalCardProduct)();
(0, _modalProfile.modalProfile)();
(0, _slider.swiperSlider)();
(0, _carusel.carusel)();
(0, _caruselGoods.caruselGoods)();
(0, _sliderGood.swiperGood)();
(0, _accordion.accordion)();
(0, _counter.counters)();