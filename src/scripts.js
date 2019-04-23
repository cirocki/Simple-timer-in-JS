document.addEventListener('DOMContentLoaded', function(){

    // VARIABLES
    const counter  = document.querySelector('#counter h2');
    const btnPause = document.querySelector('#pause');
    const btnStart = document.querySelector('#start');
    const btnReset = document.querySelector('#reset');

    btnReset.disabled = true;
    btnPause.disabled = true;

    let sec = 0;
    let min = 0;
    let hour = 0;
    let newSec, newMin, newHour;

    let interval = 1000;


    // CHANGE MILLISECONDS TO MORE HUMAN FRIENDLY TIME UNITS
    var handleTime = function() {
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
        if (min == 60) {
            min = 0;
            hour++;
        }
    }


    //ADD ZERO WHEN TIME NUMBER IS BELOW 10
    const addZero = function() {
        newSec  = (sec<10)? `0${sec}` :sec;
        newMin  = (min<10)? `0${min}` :min;
        newHour = (hour<10)? `0${hour}` :hour;
    }


    // SHOW TIMER IN SELECTED PLACE ON WEBSITE
    const showTimer = function() {
        counter.textContent = `${newHour}:${newMin}:${newSec}`
    }


    // MAIN FUNCTION WITH INTERVAL
    const mainTimer = function() {
        handleTime();
        addZero();
        showTimer();
    }


    // START TIMER
    btnStart.addEventListener('click', function(){
        timer = setInterval(mainTimer, interval);
        btnReset.disabled = true;
        btnPause.disabled = false;
        btnStart.disabled = true;
    })

    // PAUSE TIMER
    btnPause.addEventListener('click', function(){
        clearInterval(timer);
        btnPause.disabled = true;
        btnReset.disabled = false;
        btnStart.disabled = false;
    })

    // RESET TIMER
    btnReset.addEventListener('click', function(){
        counter.textContent = `00:00:00`;
        sec = 0;
        min = 0;
        hour = 0;
        btnReset.disabled = true;
        btnPause.disabled = true;
    })

})