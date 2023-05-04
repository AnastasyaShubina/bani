"use strict";

require("normalize.css/normalize.css");

require("../sass/style.sass");

var _accordion = require("./accordion");

var _functions = require("./functions.js");

var _slider = require("./slider");

var _counter = require("./counter");

(0, _functions.importAll)(require.context('../../public', true, /\.(png|svg|jpg|jpe?g|gif|mov|mp4|ico|webmanifest|xml)$/));
(0, _functions.onDocumentReady)(function () {
  console.log('hello.');
});
(0, _slider.swiperSlider)();
(0, _accordion.accordion)();
(0, _counter.counters)();