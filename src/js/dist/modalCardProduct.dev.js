"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalCardProduct = void 0;

var modalCardProduct = function modalCardProduct() {
  var contactUsBtn = document.querySelector('.cardProduct--mainDescription__container--text__priceContainer--buttonContainer__buttonBasket');
  var modalCardProduct = document.querySelector('.modalCardProduct');
  var modalCardProductCloseBtn = document.querySelector('.close');
  var html = document.querySelector('html');
  contactUsBtn.addEventListener('click', function () {
    modalCardProduct.style.display = 'block';
    html.style.overflow = 'hidden';
  });
  modalCardProduct.addEventListener('click', function (e) {
    if (e.target === modalCardProduct || e.target === modalCardProductCloseBtn) {
      modalCardProduct.style.display = 'none';
      html.style.overflow = 'auto';
    }
  });
};

exports.modalCardProduct = modalCardProduct;