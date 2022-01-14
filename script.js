window.addEventListener('DOMContentLoaded', () => {

   
    // Счетчик дней до лекции
      const deadline = '2022-02-27';

function getTimeRemaining(endTime){
    const t = Date.parse(endTime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 *60) % 24),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor(t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        
    };
}

function getZero(num){
    if (num >= 0 && num <10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          timeInterval = setInterval(updateClock, 10000);

        updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
           

        if (t.total <= 0){
            clearInterval(timeInterval);
        }
    }
}

  
setClock('.timer', deadline);

});
