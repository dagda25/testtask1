'use strict';

(function () {
  var pickupPanel = document.querySelector('#pickup-panel');
  var deliveryPanel = document.querySelector('#delivery-panel');
  var deliveryMethods = document.querySelector('#delivery-methods');
  var deliveryText = document.querySelector('.phone-description-delivery');
  var pickupText = document.querySelector('.phone-description-pickup');
  var pickupPointFirst = pickupPanel.querySelector('#pickup-point-1');
  var pickupPointSecond = pickupPanel.querySelector('#pickup-point-2');
  var pickupPointThird = pickupPanel.querySelector('#pickup-point-3');
  var pickupPointFourth = pickupPanel.querySelector('#pickup-point-4');

  var addressPanel = document.querySelector('input#address');
  var dateInput = document.querySelector('input#date');
  var timeFrom = document.querySelector('input#time-from');
  var timeTo = document.querySelector('input#time-to');
  var paymentCard = document.querySelector('#payment-card');
  var paymentCash = document.querySelector('#payment-cash');
  var cardFirstField = document.querySelector('input#card-1');
  var cardSecondField = document.querySelector('input#card-2');
  var cardThirdField = document.querySelector('input#card-3');
  var cardFourthField = document.querySelector('input#card-4');
  var cardFull = document.querySelector('input#card-full');
  var pickupLabel = document.querySelector('#pickup-label');
  var deliveryLabel = document.querySelector('#delivery-label');

  deliveryMethods.addEventListener('change', function (evt) {
    if (evt.target.value === 'pickup') {

      deliveryPanel.classList.add('hidden');
      pickupPanel.classList.remove('hidden');
      deliveryText.classList.add('hidden');
      pickupText.classList.remove('hidden');
      addressPanel.disabled = true;
      dateInput.disabled = true;
      timeFrom.disabled = true;
      timeTo.disabled = true;
      pickupPointFirst.disabled = false;
      pickupPointSecond.disabled = false;
      pickupPointThird.disabled = false;
      pickupPointFourth.disabled = false;
      paymentCard.disabled = true;
      paymentCash.disabled = true;
      cardFirstField.disabled = true;
      cardSecondField.disabled = true;
      cardThirdField.disabled = true;
      cardFourthField.disabled = true;
      cardFull.disabled = true;
      evt.target.nextElementSibling.focus();

    } else if (evt.target.value === 'delivery') {

      pickupPanel.classList.add('hidden');
      deliveryPanel.classList.remove('hidden');
      pickupText.classList.add('hidden');
      deliveryText.classList.remove('hidden');
      addressPanel.disabled = false;
      dateInput.disabled = false;
      timeFrom.disabled = false;
      timeTo.disabled = false;
      pickupPointFirst.disabled = true;
      pickupPointSecond.disabled = true;
      pickupPointThird.disabled = true;
      pickupPointFourth.disabled = true;
      paymentCard.disabled = false;
      paymentCash.disabled = false;
      cardFirstField.disabled = false;
      cardSecondField.disabled = false;
      cardThirdField.disabled = false;
      cardFourthField.disabled = false;
      cardFull.disabled = false;
      evt.target.nextElementSibling.focus();
    }
    window.checkFormValidity();
  });

  pickupLabel.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      pickupLabel.previousElementSibling.checked = true;
      deliveryPanel.classList.add('hidden');
      pickupPanel.classList.remove('hidden');
      deliveryText.classList.add('hidden');
      pickupText.classList.remove('hidden');
      addressPanel.disabled = true;
      dateInput.disabled = true;
      timeFrom.disabled = true;
      timeTo.disabled = true;
      pickupPointFirst.disabled = false;
      pickupPointSecond.disabled = false;
      pickupPointThird.disabled = false;
      pickupPointFourth.disabled = false;
      paymentCard.disabled = true;
      paymentCash.disabled = true;
      cardFirstField.disabled = true;
      cardSecondField.disabled = true;
      cardThirdField.disabled = true;
      cardFourthField.disabled = true;
      cardFull.disabled = true;
      window.checkFormValidity();
    }
  });

  deliveryLabel.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      deliveryLabel.previousElementSibling.checked = true;
      pickupPanel.classList.add('hidden');
      deliveryPanel.classList.remove('hidden');
      pickupText.classList.add('hidden');
      deliveryText.classList.remove('hidden');
      addressPanel.disabled = false;
      dateInput.disabled = false;
      timeFrom.disabled = false;
      timeTo.disabled = false;
      pickupPointFirst.disabled = true;
      pickupPointSecond.disabled = true;
      pickupPointThird.disabled = true;
      pickupPointFourth.disabled = true;
      paymentCard.disabled = false;
      paymentCash.disabled = false;
      cardFirstField.disabled = false;
      cardSecondField.disabled = false;
      cardThirdField.disabled = false;
      cardFourthField.disabled = false;
      cardFull.disabled = false;
      window.checkFormValidity();
    }
  });

})();
