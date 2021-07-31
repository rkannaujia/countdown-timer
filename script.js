const daysE1 = document.getElementById('days');
const hourE1 = document.getElementById('hour');
const minutesE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');

const newYears = '12 Feb 2022';

function countdown() {
     const newYearsDate = new Date(newYears);
     const currentDate = new Date();
     const totalSeconds = (newYearsDate - currentDate) /1000;
     const totaldays = Math.floor(totalSeconds /3600 /24);
     const totalhours = Math.floor(totalSeconds / 3600) % 24 ;
     const totalminutes = Math.floor(totalSeconds / 60) % 60 ;
     const totalseconds = Math.floor(totalSeconds ) % 60 ;
     console.log(totaldays, totalhours)
     daysE1.innerHTML = totaldays; 
     hourE1.innerHTML = formatTime(totalhours);
     minutesE1.innerHTML =formatTime(totalminutes);
     secondsE1.innerHTML = formatTime(totalseconds);
     
}
function formatTime(time) {
     return time < 10 ? (`0${time}`) : time;
}


//initial call
countdown();

setInterval(countdown, 1000);

