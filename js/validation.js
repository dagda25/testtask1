'use strict';

(function () {
  var addressPanel = document.querySelector('input#address');
  var dateInput = document.querySelector('input#date');
  var phonePanel = document.querySelector('input#phone');
  var now = new Date();
  var cardPanel = document.querySelector('fieldset.card');
  var cardFields = cardPanel.querySelectorAll('.card-section');
  var cardFieldFull = document.querySelector('#card-full');
  var tooltips = document.querySelectorAll('.tooltip');

  function hideTooltips() {
    tooltips.forEach(function (item) {
      if (!item.classList.contains('hidden')) {
        item.classList.add('hidden');
      }
    });
  }

  function showFirstTooltip() {
    var invalidFields = document.querySelectorAll('.invalid:not(:disabled)');
    if (invalidFields[0]) {
      invalidFields[0].nextElementSibling.classList.remove('hidden');
    }
  }

  addressPanel.addEventListener('blur', function () {
    hideTooltips();
    if (addressPanel.value === '') {
      if (!addressPanel.classList.contains('invalid')) {
        addressPanel.classList.add('invalid');
      }
    } else {
      addressPanel.classList.remove('invalid');
    }

    showFirstTooltip();
    window.checkFormValidity();
  });

  addressPanel.addEventListener('focus', function () {
    hideTooltips();
  });

  dateInput.value = leadZero(now.getDate()) + '/' + leadZero(now.getMonth() + 1) + '/' + now.getFullYear();

  function leadZero(n) {
    return (n < 10 ? '0' : '') + n;
  }

/* eslint-disable */
  $('input#date').mask('99/99/9999');
  /* eslint-enable */

  dateInput.addEventListener('blur', function (evt) {
    if (!evt.target.value.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/)) {
      evt.target.value = leadZero(now.getDate()) + '/' + leadZero(now.getMonth() + 1) + '/' + now.getFullYear();
    }

    var value = evt.target.value.split('/');
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var dateValue = new Date(value[2], value[1] - 1, value[0]);

    evt.target.value = leadZero(dateValue.getDate()) + '/' + leadZero(dateValue.getMonth() + 1) + '/' + dateValue.getFullYear();

    hideTooltips();

    if (+dateValue - +today > 7 * 24 * 3600 * 1000 || +today > +dateValue) {
      if (!dateInput.classList.contains('invalid')) {
        dateInput.classList.add('invalid');
      }
    } else {
      dateInput.classList.remove('invalid');
    }

    showFirstTooltip();

    window.checkFormValidity();

  });

  dateInput.addEventListener('focus', function () {
    hideTooltips();
  });

  phonePanel.addEventListener('blur', function () {
    hideTooltips();

    if (phonePanel.value === '') {
      if (!phonePanel.classList.contains('invalid')) {
        phonePanel.classList.add('invalid');
      }
    } else {
      phonePanel.classList.remove('invalid');
    }
    showFirstTooltip();

    window.checkFormValidity();
  });

  phonePanel.addEventListener('focus', function () {
    hideTooltips();
  });

  for (var i = 0; i < 3; i++) {
    (function (x) {
      cardFields[x].addEventListener('keyup', function (evt) {
        if (evt.target.value.length === 4) {
          cardFields[x + 1].focus();
        }
      });
    })(i);
  }

  for (i = 1; i < 4; i++) {
    (function (x) {
      cardFields[x].addEventListener('keydown', function (evt) {
        if (evt.keyCode === 8 && cardFields[x].value.length === 0) {
          evt.preventDefault();
          cardFields[x - 1].value = cardFields[x - 1].value.slice(0, -1);
          cardFields[x - 1].focus();
        }
      });
    })(i);
  }

  cardPanel.addEventListener('keyup', function () {
    cardFieldFull.value = '';

    for (i = 0; i <= 3; i++) {
      if (cardFields[i].value.length < 4) {
        break;
      } else {
        cardFieldFull.value += cardFields[i].value;
      }
    }

    if (cardFieldFull.value.length === 16) {
      if (checkCard(cardFieldFull.value)) {
        for (i = 0; i <= 3; i++) {
          cardFields[i].classList.remove('invalid');
        }
        cardFieldFull.classList.remove('invalid');
      } else {
        for (i = 0; i <= 3; i++) {
          if (!cardFields[i].classList.contains('invalid')) {
            cardFields[i].classList.add('invalid');
          }
        }
        if (!cardFieldFull.classList.contains('invalid')) {
          cardFieldFull.classList.add('invalid');
        }
      }
    } else {
      for (i = 0; i <= 3; i++) {
        if (!cardFields[i].classList.contains('invalid')) {
          cardFields[i].classList.add('invalid');
        }
      }
      if (!cardFieldFull.classList.contains('invalid')) {
        cardFieldFull.classList.add('invalid');
      }
    }
    window.checkFormValidity();

  });

  cardFields[3].addEventListener('blur', function () {
    hideTooltips();

    if (cardFieldFull.classList.contains('invalid')) {
      showFirstTooltip();
    }
  });

  for (i = 0; i <= 3; i++) {
    (function (x) {
      cardFields[x].addEventListener('focus', function () {
        hideTooltips();
      });
    })(i);
  }

  function checkCard(cardNumber) {
    if (!cardNumber.match(/\d{16}/)) {
      return false;
    }

    var arr = [];
    for (i = 0; i < cardNumber.length; i++) {
      if (i % 2 === 0) {
        var m = parseInt(cardNumber[i], 10) * 2;
        if (m > 9) {
          arr.push(m - 9);
        } else {
          arr.push(m);
        }
      } else {
        var n = parseInt(cardNumber[i], 10);
        arr.push(n);
      }
    }
    var summ = arr.reduce(function (a, b) {
      return a + b;
    });
    return Boolean(!(summ % 10));
  }

})();
