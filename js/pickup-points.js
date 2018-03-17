"use strict";

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
