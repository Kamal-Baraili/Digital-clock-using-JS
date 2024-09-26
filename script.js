const button = document.getElementById("stop_timer");
const alarm_button = document.getElementById("set_alarm");

alarm_button.addEventListener("click", () => {
    const input = prompt("Set time for alarm", "hh:mm:ss");
    const store = localStorage.setItem("time", input);
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