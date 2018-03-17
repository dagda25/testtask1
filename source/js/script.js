"use strict";

//delivery-methods.js

(function () {
  var pickupPanel = document.querySelector("#pickup-panel");
  var deliveryPanel = document.querySelector("#delivery-panel");
  var deliveryMethods = document.querySelector("#delivery-methods");
  var deliveryText = document.querySelector(".phone-description-delivery");
  var pickupText = document.querySelector(".phone-description-pickup");
  var pickupPointFirst = pickupPanel.querySelector("#pickup-point-1");
  var pickupPointSecond = pickupPanel.querySelector("#pickup-point-2");
  var pickupPointThird = pickupPanel.querySelector("#pickup-point-3");
  var pickupPointFourth = pickupPanel.querySelector("#pickup-point-4");

  var addressPanel = document.querySelector("input#address");
  var dateInput = document.querySelector("input#date");
  var timeFrom = document.querySelector("input#time-from");
  var timeTo = document.querySelector("input#time-to");
  var paymentCard = document.querySelector("#payment-card");
  var paymentCash = document.querySelector("#payment-cash");
  var cardFirstField = document.querySelector("input#card-1");
  var cardSecondField = document.querySelector("input#card-2");
  var cardThirdField = document.querySelector("input#card-3");
  var cardFourthField = document.querySelector("input#card-4");
  var cardFull = document.querySelector("input#card-full");
  var pickupLabel = document.querySelector("#pickup-label");
  var deliveryLabel = document.querySelector("#delivery-label");

  deliveryMethods.addEventListener("change", function (evt) {
    if (evt.target.value === "pickup") {

      deliveryPanel.classList.add("hidden");
      pickupPanel.classList.remove("hidden");
      deliveryText.classList.add("hidden");
      pickupText.classList.remove("hidden");
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

    } else if (evt.target.value === "delivery") {

      pickupPanel.classList.add("hidden");
      deliveryPanel.classList.remove("hidden");
      pickupText.classList.add("hidden");
      deliveryText.classList.remove("hidden");
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

  pickupLabel.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      pickupLabel.previousElementSibling.checked = true;
      deliveryPanel.classList.add("hidden");
      pickupPanel.classList.remove("hidden");
      deliveryText.classList.add("hidden");
      pickupText.classList.remove("hidden");
      addressPanel.disabled = true;
      dateInput.disabled = true;
      timeFrom.disabled = true;
      timeTo.disabled = true;
    }
  });

  deliveryLabel.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      deliveryLabel.previousElementSibling.checked = true;
      pickupPanel.classList.add("hidden");
      deliveryPanel.classList.remove("hidden");
      pickupText.classList.add("hidden");
      deliveryText.classList.remove("hidden");
      addressPanel.disabled = false;
      dateInput.disabled = false;
      timeFrom.disabled = false;
      timeTo.disabled = false;
    }
  });

})();

//pickup-points.js

(function () {
  var pickupPoints = document.querySelector("#pickup-points");
  var pickupPointFirst = pickupPoints.querySelector("#pickup-label-1");
  var pickupPointSecond = pickupPoints.querySelector("#pickup-label-2");
  var pickupPointThird = pickupPoints.querySelector("#pickup-label-3");
  var pickupPointFourth = pickupPoints.querySelector("#pickup-label-4");
  var yandexMap = document.querySelector("#yandex-map");


  pickupPoints.addEventListener("change", function (evt) {
    if (evt.target.value === "address-2") {
      yandexMap.src = "https://yandex.ru/map-widget/v1/?um=constructor%3A88e422c072977b4ca30e8a3e3985c6ef5e606f16f597ec7cfba15b9c24359d6c&amp;source=constructor";
      evt.target.nextElementSibling.focus();
    } else if (evt.target.value === "address-3") {
      yandexMap.src = "https://yandex.ru/map-widget/v1/?um=constructor%3A56c3b026619af64dd3ce2046679163d0167a753a3118776047afea9136df4cb8&amp;source=constructor";
      evt.target.nextElementSibling.focus();
    } else if (evt.target.value === "address-4") {
      yandexMap.src = "https://yandex.ru/map-widget/v1/?um=constructor%3Ace5b7e09d77bf759b4ec4b33ecc990968cb4611d95f43754c41e83f7d36df255&amp;source=constructor";
      evt.target.nextElementSibling.focus();
    } else if (evt.target.value === "address-1") {
      yandexMap.src = "https://yandex.ru/map-widget/v1/?um=constructor%3Aa1adf2b54839830dab0bb756805035ee501ee8a40b1d12a962c353071ae7af20&amp;source=constructor";
      evt.target.nextElementSibling.focus();
    }
  });

  pickupPointFirst.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      pickupPointFirst.previousElementSibling.checked = true;
      yandexMap.src = "https://yandex.ru/map-widget/v1/?um=constructor%3Aa1adf2b54839830dab0bb756805035ee501ee8a40b1d12a962c353071ae7af20&amp;source=constructor";
    }
  });

  pickupPointSecond.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      pickupPointSecond.previousElementSibling.checked = true;
      yandexMap.src = "https://yandex.ru/map-widget/v1/?um=constructor%3A88e422c072977b4ca30e8a3e3985c6ef5e606f16f597ec7cfba15b9c24359d6c&amp;source=constructor";
    }
  });

  pickupPointThird.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      pickupPointThird.previousElementSibling.checked = true;
      yandexMap.src = "https://yandex.ru/map-widget/v1/?um=constructor%3A56c3b026619af64dd3ce2046679163d0167a753a3118776047afea9136df4cb8&amp;source=constructor";
    }
  });

  pickupPointFourth.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      pickupPointFourth.previousElementSibling.checked = true;
      yandexMap.src = "https://yandex.ru/map-widget/v1/?um=constructor%3Ace5b7e09d77bf759b4ec4b33ecc990968cb4611d95f43754c41e83f7d36df255&amp;source=constructor";
    }
  });

})();

//delivery-time.js

(function () {
  var timeSlider = document.querySelector(".time-slider-handle");
  var timeFrom = document.querySelector("input#time-from");
  var timeTo = document.querySelector("input#time-to");
  var sliderStyle = getComputedStyle(timeSlider);
  var inputStyleFirst = getComputedStyle(timeFrom);
  var inputWidth = parseInt(inputStyleFirst.width, 10) + parseInt(inputStyleFirst.paddingLeft, 10) + parseInt(inputStyleFirst.paddingRight, 10) + parseInt(inputStyleFirst.borderLeftWidth, 10) + parseInt(inputStyleFirst.borderRightWidth, 10);
  var sliderCoordinate = 0;

  timeFrom.value = "08:00";

  timeSlider.addEventListener("mousedown", function (evt) {
    evt.preventDefault();

    var startCoordinate = evt.clientX;
    function onMouseMove (moveEvt) {
      moveEvt.preventDefault();

      var shift = startCoordinate - moveEvt.clientX;

      startCoordinate = moveEvt.clientX;

      sliderCoordinate -= shift;

      showSlider(sliderCoordinate);

      if (sliderCoordinate < 0) {
        sliderCoordinate = 0;
      } else if (sliderCoordinate > parseInt(inputWidth, 10)) {
        sliderCoordinate = parseInt(inputWidth, 10);
      }

      var hoursFrom = getTimeFrom(parseInt(timeSlider.style.left, 10), parseInt(inputWidth, 10));
      var hoursTo = getTimeTo(hoursFrom);

      if (hoursFrom < 10) {
        hoursFrom = "0" + hoursFrom;
      }

      showTime(hoursFrom, hoursTo);
    }

    function onMouseUp (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  document.addEventListener("keydown", function (evt) {
    if ((evt.altKey) && (evt.shiftKey) && (evt.keyCode === 37)) {
      showSlider(parseFloat(sliderStyle.left) - inputWidth / 36);

      var hoursFrom = getTimeFrom(parseFloat(sliderStyle.left), parseInt(inputWidth, 10));
      var hoursTo = getTimeTo(hoursFrom);

      if (hoursFrom < 10) {
        hoursFrom = "0" + hoursFrom;
      }

      showTime(hoursFrom, hoursTo);
    }

    if ((evt.altKey) && (evt.shiftKey) && (evt.keyCode === 39)) {
      showSlider(parseFloat(sliderStyle.left) + inputWidth / 36);

      hoursFrom = getTimeFrom(parseFloat(sliderStyle.left), parseInt(inputWidth, 10));
      hoursTo = getTimeTo(hoursFrom);

      if (hoursFrom < 10) {
        hoursFrom = "0" + hoursFrom;
      }

      showTime(hoursFrom, hoursTo);
    }
  });

  function getTimeFrom (offsetLeft, width) {
    var position = Math.floor(36 * offsetLeft / width);
    var hours = Math.floor(8 + position / 4);
    var minutes = (position % 4) * 15;

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    return hours + ":" + minutes;
  }

  function getTimeTo (time) {
    var timeValue = time.split(":");
    return parseInt(timeValue[0], 10) + 2 + ":" + timeValue[1];
  }

  function showTime (valueFrom, valueTo) {
    timeFrom.value = valueFrom;
    timeTo.value = valueTo;
  }

  function showSlider (coord) {
    if (coord < 0) {
      timeSlider.style.left = 0 + "px";
    } else if (coord > parseInt(inputWidth, 10)) {
      timeSlider.style.left = parseInt(inputWidth, 10) + "px";
    } else {
      timeSlider.style.left = coord + "px";
    }
  }

})();

//payment-method.js

(function () {
  var paymentMethods = document.querySelector("div.payment");
  var cardPanel = document.querySelector("fieldset.card");
  var cardLabel = paymentMethods.querySelector("#label-card");
  var cashLabel = paymentMethods.querySelector("#label-cash");
  var cardFieldFull = cardPanel.querySelector("#card-full");
  var cardFirstField = document.querySelector("input#card-1");
  var cardSecondField = document.querySelector("input#card-2");
  var cardThirdField = document.querySelector("input#card-3");
  var cardFourthField = document.querySelector("input#card-4");

  paymentMethods.addEventListener("change", function (evt) {
    if (evt.target.value === "cash") {
      cardPanel.classList.add("hidden");
      cardFieldFull.disabled = true;
      cardFirstField.disabled = true;
      cardSecondField.disabled = true;
      cardThirdField.disabled = true;
      cardFourthField.disabled = true;
      evt.target.nextElementSibling.focus();
    } else if (evt.target.value === "card") {
      cardPanel.classList.remove("hidden");
      cardFieldFull.disabled = false;
      cardFirstField.disabled = false;
      cardSecondField.disabled = false;
      cardThirdField.disabled = false;
      cardFourthField.disabled = false;
      evt.target.nextElementSibling.focus();
    }
    window.checkFormValidity();
  });

  cardLabel.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      cardLabel.previousElementSibling.checked = true;
      cardPanel.classList.remove("hidden");
      cardFieldFull.disabled = true;
    }
  });

  cashLabel.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      cashLabel.previousElementSibling.checked = true;
      cardPanel.classList.add("hidden");
      cardFieldFull.disabled = false;
    }
  });

})();

//submit.js

(function () {
  var SERVER_URL = "http://httpbin.org/post";
  var STATUS_OK = 200;
  var TIMEOUT = 10000;
  var form = document.querySelector("#form-main");
  var submit = form.querySelector(".submit button");

  function formReset () {
    var addressPanel = form.querySelector("input#address");
    var dateInput = form.querySelector("input#date");
    var timeFrom = form.querySelector("input#time-from");
    var timeTo = form.querySelector("input#time-to");
    var cardFirstField = form.querySelector("input#card-1");
    var cardSecondField = form.querySelector("input#card-2");
    var cardThirdField = form.querySelector("input#card-3");
    var cardFourthField = form.querySelector("input#card-4");
    var cardFull = form.querySelector("input#card-full");
    var phoneInput = form.querySelector("input#phone");

    addressPanel.value = "";
    dateInput.value = "";
    timeFrom.value = "08:00";
    timeTo.value = "10:00";
    cardThirdField.value = "";
    cardSecondField.value = "";
    cardFirstField.value = "";
    cardFourthField.value = "";
    cardFull.value = "";
    phoneInput.value = "";
  }

  function checkFormValidity () {
    var enabledFields = form.querySelectorAll("input:not(:disabled)");

    submit.disabled = false;

    enabledFields.forEach(function (item) {
      if (item.classList.contains("invalid")) {
        submit.disabled = true;
      }
    });

    if (submit.disabled) {
      var invalidFieldsText = document.querySelector(".submit p");
      invalidFieldsText.innerHTML = "Осталось заполнить:<br>";
      enabledFields.forEach(function (item, i) {
        if (item.classList.contains("invalid")) {
          if (item.id !== "card-2" && item.id !== "card-3" && item.id !== "card-4" && item.id !== "card-full") {
            var invalidLabel = document.createElement("label");
            invalidLabel.htmlFor = item.id;
            if (item.id === "card-1") {
              invalidLabel.textContent = "Номер карты";
            } else {
              invalidLabel.textContent = item.previousElementSibling.textContent;
            }
            invalidFieldsText.appendChild(invalidLabel);
          }

        }
      });
      var invalidLabels = invalidFieldsText.querySelectorAll("label");
      var divider = document.createTextNode(", ");
      for (let i = 1; i < invalidLabels.length; i++) {
        var dividerNode = divider.cloneNode(true);
        invalidFieldsText.insertBefore(dividerNode, invalidLabels[i]);
      }
      invalidFieldsText.style.color = "";
      invalidFieldsText.style.fontSize = "";
    } else {
      invalidFieldsText = document.querySelector(".submit p");
      invalidFieldsText.innerHTML = "";
    }
  }
  window.checkFormValidity = checkFormValidity;

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    var $formMain = $("#form-main");
    var data = getFormData($formMain);

    function getFormData ($form) {
      var unindexedArray = $form.serializeArray();
      var indexedArray = {};

      $.map(unindexedArray, function (n, i) {
          indexedArray[n["name"]] = n["value"];
      });

      return JSON.stringify(indexedArray);
    }

    save(data, onUpload, onError);
    submit.disabled = true;
  });

  function setup (onSuccess, onFailure) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function () {
      if (xhr.status === STATUS_OK) {
        onSuccess(xhr.response);
      } else {
        onFailure(xhr.response);
      }
    });

    xhr.addEventListener("error", function () {
      onFailure("Произошла ошибка соединения");
    });
    xhr.addEventListener("timeout", function () {
      onFailure("Запрос не успел выполниться за " + xhr.timeout + "мс");
    });

    xhr.timeout = TIMEOUT;

    return xhr;
  }

  function save (data, onSuccess, onFailure) {
    var xhr = setup(onSuccess, onFailure);

    xhr.open("POST", SERVER_URL);
    xhr.send(data);
  }

  function onUpload () {
    var node = document.createElement("div");

    node.classList.add("success-message");

    node.innerHTML = "Данные успешно отправлены";
    document.body.insertAdjacentElement("afterbegin", node);
    formReset();

    var enabledFields = form.querySelectorAll("input:not(:disabled)");
    enabledFields.forEach(function (item) {
      if (item.value === "" && !item.classList.contains("invalid")) {
        item.classList.add("invalid");
      }
    });
    window.checkFormValidity();

    setTimeout(function () {
      document.body.removeChild(node);
    }, 2000);
  }

  function onError (errorMessage) {
    var node = document.querySelector(".submit p");

    node.textContent = errorMessage;

    if (!errorMessage) {
      node.textContent = "Произошла ошибка";
    }

    node.style.color = "red";
    node.style.fontSize = "18px";
  }

  window.checkFormValidity();
})();

//validation.js

(function () {

  var addressPanel = document.querySelector("input#address");
  var dateInput = document.querySelector("input#date");
  var phonePanel = document.querySelector("input#phone");
  var now = new Date();
  var cardPanel = document.querySelector("fieldset.card");
  var cardFields = cardPanel.querySelectorAll(".card-section");
  var cardFieldFull = document.querySelector("#card-full");
  var tooltips = document.querySelectorAll(".tooltip");

  function hideTooltips () {
    tooltips.forEach(function (item) {
      if (!item.classList.contains("hidden")) {
        item.classList.add("hidden");
      }
    });
  }

  function showFirstTooltip () {
    var invalidFields = document.querySelectorAll(".invalid:not(:disabled)");
    if (invalidFields[0]) {
      invalidFields[0].nextElementSibling.classList.remove("hidden");
    }
  }

  addressPanel.addEventListener("blur", function () {
    hideTooltips();
    if (addressPanel.value === "") {
      if (!addressPanel.classList.contains("invalid")) {
        addressPanel.classList.add("invalid");
      }
    } else {
      addressPanel.classList.remove("invalid");
    }

    showFirstTooltip();
    window.checkFormValidity();
  });

  addressPanel.addEventListener("focus", function () {
    hideTooltips();
  });

  dateInput.value = leadZero(now.getDate()) + "/" + leadZero(now.getMonth() + 1) + "/" + now.getFullYear();

  function leadZero (n) {
    return (n < 10 ? "0" : "") + n;
  }

  $("input#date").mask("99/99/9999");

  dateInput.addEventListener("blur", function (evt) {
    if (!evt.target.value.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/)) {
      evt.target.value = leadZero(now.getDate()) + "/" + leadZero(now.getMonth() + 1) + "/" + now.getFullYear();
    }

    var value = evt.target.value.split("/");
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var dateValue = new Date(value[2], value[1] - 1, value[0]);

    evt.target.value = leadZero(dateValue.getDate()) + "/" + leadZero(dateValue.getMonth() + 1) + "/" + dateValue.getFullYear();

    hideTooltips();

    if (+dateValue - +today > 7 * 24 * 3600 * 1000 || +today > +dateValue) {
      if (!dateInput.classList.contains("invalid")) {
        dateInput.classList.add("invalid");
      }
    } else {
      dateInput.classList.remove("invalid");
    }

    showFirstTooltip();

    window.checkFormValidity();

  });

  dateInput.addEventListener("focus", function () {
    hideTooltips();
  });

  phonePanel.addEventListener("blur", function (evt) {
    hideTooltips();

    if (phonePanel.value === "") {
      if (!phonePanel.classList.contains("invalid")) {
        phonePanel.classList.add("invalid");
      }
    } else {
      phonePanel.classList.remove("invalid");
    }
    showFirstTooltip();

    window.checkFormValidity();
  });

  phonePanel.addEventListener("focus", function () {
    hideTooltips();
  });

  for (let i = 0; i < 3; i++) {
    cardFields[i].addEventListener("keyup", function (evt) {
      if (evt.target.value.length === 4) {
        cardFields[i + 1].focus();
      }
    });
  }

  for (let i = 1; i < 4; i++) {
    cardFields[i].addEventListener("keydown", function (evt) {
      if (evt.keyCode === 8 && cardFields[i].value.length === 0) {
        evt.preventDefault();
        cardFields[i - 1].value = cardFields[i - 1].value.slice(0, -1);
        cardFields[i - 1].focus();
      }
    });
  }

  cardPanel.addEventListener("keyup", function (evt) {
    cardFieldFull.value = "";

    for (let i = 0; i <= 3; i++) {
      if (cardFields[i].value.length < 4) {
        break;
      } else {
        cardFieldFull.value += cardFields[i].value;
      }
    }

    if (cardFieldFull.value.length === 16) {
      if (checkCard(cardFieldFull.value)) {
        for (let i = 0; i <= 3; i++) {
          cardFields[i].classList.remove("invalid");
        }
        cardFieldFull.classList.remove("invalid");
      } else {
        for (let i = 0; i <= 3; i++) {
          if (!cardFields[i].classList.contains("invalid")) {
            cardFields[i].classList.add("invalid");
          }
        }
        if (!cardFieldFull.classList.contains("invalid")) {
          cardFieldFull.classList.add("invalid");
        }
      }
    } else {
      for (let i = 0; i <= 3; i++) {
        if (!cardFields[i].classList.contains("invalid")) {
          cardFields[i].classList.add("invalid");
        }
      }
      if (!cardFieldFull.classList.contains("invalid")) {
        cardFieldFull.classList.add("invalid");
      }
    }
    window.checkFormValidity();

  });

  cardFields[3].addEventListener("blur", function () {
    hideTooltips();

    if (cardFieldFull.classList.contains("invalid")) {
      showFirstTooltip();
    }
  });

  for (let i = 0; i <= 3; i++) {
    cardFields[i].addEventListener("focus", function (evt) {
      hideTooltips();
    });
  }

  function checkCard (cardNumber) {
    var arr = [];
    for (var i = 0; i < cardNumber.length; i++) {
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
