"use strict";

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
      for (var i = 1; i < invalidLabels.length; i++) {
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
