"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalProfile = void 0;

var modalProfile = function modalProfile() {
  var contactUsBtn = document.querySelector('.profile--container__cards--myOrders__total--button');
  var modalProfile = document.querySelector('.modalProfile');
  var modalProfileCloseBtn = document.querySelector('.close');
  var html = document.querySelector('html');
  contactUsBtn.addEventListener('click', function () {
    modalProfile.style.display = 'block';
    html.style.overflow = 'hidden';
  });
  modalProfile.addEventListener('click', function (e) {
    if (e.target === modalProfile || e.target === modalProfileCloseBtn) {
      modalProfile.style.display = 'none';
      html.style.overflow = 'auto';
    }
  });
};

exports.modalProfile = modalProfile;