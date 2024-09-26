const button = document.getElementById("stop_timer");
const alarm_button = document.getElementById("set_alarm");
const stop_watch_button = document.getElementById("stop_watch");

alarm_button.addEventListener("click", () => {
    const input = prompt("Set time for alarm", "hh:mm:ss");
    localStorage.setItem("time", input);
})

function showTime() {
    const data = new Date();
    result = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
    const time = document.getElementById("time");
    time.innerText = result;
    const res = localStorage.getItem("time");
     if(res == result) {
        alert("Alarm has been triggered");
    }
}

let stop = setInterval(showTime, 1000);

button.addEventListener("click", () => {
    clearInterval(stop);
})

stop_watch_button.addEventListener("click", () => {
    const time = document.getElementById("time");
    const display = document.getElementById("display");
    const button_container = document.getElementById("button_container");
    const start_timer = document.createElement("button");
    const stop_timer = document.createElement("button");
    const reset_timer = document.createElement("button");

    alarm_button.remove();
    button.remove();
    time.remove();
    stop_watch_button.remove();

    display.innerText = "00:00:00";

    start_timer.innerText = "Start";
    stop_timer.innerText = "Stop";
    stop_timer.style.marginLeft = "1rem";
    reset_timer.innerText = "Reset";
    reset_timer.style.marginLeft = "1rem";

    button_container.appendChild(start_timer);
    button_container.appendChild(stop_timer);
    button_container.appendChild(reset_timer);

    let timer;
    let isRunning = false;
    let milliseconds = 0;

    function updateDisplay() {
        const hours = String(Math.floor(milliseconds / 3600000)).padStart(2, '0');
        const minutes = String(Math.floor((milliseconds % 3600000) / 60000)).padStart(2, '0');
        const seconds = String(Math.floor((milliseconds % 60000) / 1000)).padStart(2, '0');
        const ms = String(milliseconds % 1000).padStart(2, '0');
        display.textContent = `${hours}:${minutes}:${seconds}`;
    }

    start_timer.addEventListener('click', () => {
        if (!isRunning) {
            isRunning = true;
            timer = setInterval(() => {
                milliseconds += 10;
                updateDisplay();
            }, 10);
        }
    });

    stop_timer.addEventListener('click', () => {
        if (isRunning) {
            clearInterval(timer);
            isRunning = false;
        }
    });

    reset_timer.addEventListener('click', () => {
        clearInterval(timer);
        isRunning = false;
        milliseconds = 0;
        updateDisplay();
    });

    updateDisplay();
});

