'use strict';

(function () {
  var paymentMethods = document.querySelector('div.payment');
  var cardPanel = document.querySelector('fieldset.card');
  var cardLabel = paymentMethods.querySelector('#label-card');
  var cashLabel = paymentMethods.querySelector('#label-cash');
  var cardFieldFull = cardPanel.querySelector('#card-full');
  var cardFirstField = document.querySelector('input#card-1');
  var cardSecondField = document.querySelector('input#card-2');
  var cardThirdField = document.querySelector('input#card-3');
  var cardFourthField = document.querySelector('input#card-4');

  paymentMethods.addEventListener('change', function (evt) {
    if (evt.target.value === 'cash') {
      cardPanel.classList.add('hidden');
      cardFieldFull.disabled = true;
      cardFirstField.disabled = true;
      cardSecondField.disabled = true;
      cardThirdField.disabled = true;
      cardFourthField.disabled = true;
      evt.target.nextElementSibling.focus();
    } else if (evt.target.value === 'card') {
      cardPanel.classList.remove('hidden');
      cardFieldFull.disabled = false;
      cardFirstField.disabled = false;
      cardSecondField.disabled = false;
      cardThirdField.disabled = false;
      cardFourthField.disabled = false;
      evt.target.nextElementSibling.focus();
    }
    window.checkFormValidity();
  });

  cardLabel.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      cardLabel.previousElementSibling.checked = true;
      cardPanel.classList.remove('hidden');
      cardFieldFull.disabled = false;
      cardFirstField.disabled = false;
      cardSecondField.disabled = false;
      cardThirdField.disabled = false;
      cardFourthField.disabled = false;
      window.checkFormValidity();
    }
  });

  cashLabel.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      cashLabel.previousElementSibling.checked = true;
      cardPanel.classList.add('hidden');
      cardFieldFull.disabled = true;
      cardFirstField.disabled = true;
      cardSecondField.disabled = true;
      cardThirdField.disabled = true;
      cardFourthField.disabled = true;
      window.checkFormValidity();
    }
  });

})();
