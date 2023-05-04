"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.counters = void 0;
var counters = document.querySelectorAll('.counter');
exports.counters = counters;
counters.forEach(function (counter) {
  var target = +counter.dataset.target;
  var count = 0;
  var speed = 40;

  function updateCounter() {
    var increment = target / speed;
    count += increment;

    if (count < target) {
      counter.innerText = Math.ceil(count);
      setTimeout(updateCounter, 50);
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();
});