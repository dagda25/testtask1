'use strict';

(function () {
  var timeSlider = document.querySelector('.time-slider-handle');
  var timeFrom = document.querySelector('input#time-from');
  var timeTo = document.querySelector('input#time-to');
  var sliderStyle = getComputedStyle(timeSlider);
  var inputStyleFirst = getComputedStyle(timeFrom);
  var inputWidth = parseInt(inputStyleFirst.width, 10) + parseInt(inputStyleFirst.paddingLeft, 10) + parseInt(inputStyleFirst.paddingRight, 10) + parseInt(inputStyleFirst.borderLeftWidth, 10) + parseInt(inputStyleFirst.borderRightWidth, 10);
  var sliderCoordinate = 0;

  timeFrom.value = '08:00';

  timeSlider.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoordinate = evt.clientX;
    function onMouseMove(moveEvt) {
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
        hoursFrom = '0' + hoursFrom;
      }

      showTime(hoursFrom, hoursTo);
    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  document.addEventListener('keydown', function (evt) {
    if ((evt.altKey) && (evt.shiftKey) && (evt.keyCode === 37)) {
      showSlider(parseFloat(sliderStyle.left) - inputWidth / 36);

      var hoursFrom = getTimeFrom(parseFloat(sliderStyle.left), parseInt(inputWidth, 10));
      var hoursTo = getTimeTo(hoursFrom);

      if (hoursFrom < 10) {
        hoursFrom = '0' + hoursFrom;
      }

      showTime(hoursFrom, hoursTo);
    }

    if ((evt.altKey) && (evt.shiftKey) && (evt.keyCode === 39)) {
      showSlider(parseFloat(sliderStyle.left) + inputWidth / 36);

      hoursFrom = getTimeFrom(parseFloat(sliderStyle.left), parseInt(inputWidth, 10));
      hoursTo = getTimeTo(hoursFrom);

      if (hoursFrom < 10) {
        hoursFrom = '0' + hoursFrom;
      }

      showTime(hoursFrom, hoursTo);
    }
  });

  function getTimeFrom(offsetLeft, width) {
    var position = Math.floor(36 * offsetLeft / width);
    var hours = Math.floor(8 + position / 4);
    var minutes = (position % 4) * 15;

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes === 0) {
      minutes = '00';
    }

    return hours + ':' + minutes;
  }

  function getTimeTo(time) {
    var timeValue = time.split(':');
    return parseInt(timeValue[0], 10) + 2 + ':' + timeValue[1];
  }

  function showTime(valueFrom, valueTo) {
    timeFrom.value = valueFrom;
    timeTo.value = valueTo;
  }

  function showSlider(coord) {
    if (coord < 0) {
      timeSlider.style.left = 0 + 'px';
    } else if (coord > parseInt(inputWidth, 10)) {
      timeSlider.style.left = parseInt(inputWidth, 10) + 'px';
    } else {
      timeSlider.style.left = coord + 'px';
    }
  }

})();
