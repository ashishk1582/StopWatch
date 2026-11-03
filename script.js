let hrs = document.querySelector("#hrs");
let mins = document.querySelector("#mins");
let sec = document.querySelector("#sec");
let ms = document.querySelector("#ms");

let startBtn = document.querySelector("#start-btn");
let stopBtn = document.querySelector("#stop-btn");
let resetBtn = document.querySelector("#reset-btn");

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let interval;

startBtn.addEventListener("click", () => {
    interval = setInterval(() => {
        if(miliseconds === 1000){
            miliseconds = 0;
            seconds++;
            if(seconds === 60){
                minutes++;
                seconds = 0;
                if(minutes === 60){
                    hours ++;
                    minutes = 0;
                    if(hours == 12){
                        hours = 0;
                    }
                    hrs.textContent = hours;
                }
                mins.textContent = minutes;
            }
            sec.textContent = seconds;
        }
        miliseconds += 10;
        ms.textContent = miliseconds;
    console.log(seconds);

    }, 1);
    console.log("triggered");
    startBtn.disable = true;
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    startBtn.disable = false;
});

resetBtn.addEventListener("click", () => {
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    hrs.textContent = hours;
    mins.textContent = minutes;
    sec.textContent = seconds;
    ms.textContent = miliseconds;
})