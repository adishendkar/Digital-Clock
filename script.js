function getTime() {
    var time = new Date();
    var result = {};
    
    result.hours = doubleDigits(time.getHours());
    result.minutes = doubleDigits(time.getMinutes());
    result.seconds = doubleDigits(time.getSeconds());
    
    return result;
  }
  
  function doubleDigits(num) {
    num = num.toString();
    if (num.length == 1) {
      num = 0 + num;
    }
    return num;
  }
  
  function setTime(target) {
    var time = getTime();
    
    var previous = {
      hours: target.hours.innerHTML,
      minutes: target.minutes.innerHTML,
      seconds: target.seconds.innerHTML
    };
    
    if (time.hours !== previous.hours) {
      target.hours.classList.remove("animated");
      window.setTimeout(function() {
        target.hours.classList.add("animated");
      }, 1);
    }
    if (time.minutes !== previous.minutes) {
      target.minutes.classList.remove("animated");
      window.setTimeout(function() {
        target.minutes.classList.add("animated");
      }, 1);
    }
    if (time.seconds !== previous.seconds) {
      target.seconds.classList.remove("animated");
      window.setTimeout(function() {
        target.seconds.classList.add("animated");
      }, 1);
    }
    
    target.hours.innerHTML = time.hours;
    target.minutes.innerHTML = time.minutes;
    target.seconds.innerHTML = time.seconds;
    
    return time;
  }
  
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      target = {};
      target.hours = document.querySelector(".hours");
      target.minutes = document.querySelector(".minutes");
      target.seconds = document.querySelector(".seconds");
      
      setTime(target);
      window.setInterval(function () {
        setTime(target)
      }, 1000);
    }
  }