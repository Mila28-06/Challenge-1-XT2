const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    
    x = setInterval(function() {    
        distance = 7015680000;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    }, second)
    