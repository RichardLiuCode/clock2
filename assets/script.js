document.getElementById("clockBtn").addEventListener("click", function () {
    document.querySelectorAll(".screen").forEach(function (screen) {
        screen.style.display = "none";
    });
    document.getElementsByClassName("leftBar")[0].querySelectorAll(".optionBtn").forEach(function (btn) {
        btn.classList.remove("leftBarSelectedButton");
    });
    document.getElementById("ClockScreen").style.display = "block";
    this.classList.add("leftBarSelectedButton");
});

document.getElementById("timerBtn").addEventListener("click", function () {
    document.querySelectorAll(".screen").forEach(function (screen) {
        screen.style.display = "none";
    });
    document.getElementsByClassName("leftBar")[0].querySelectorAll(".optionBtn").forEach(function (btn) {
        btn.classList.remove("leftBarSelectedButton");
    });
    document.getElementById("TimerScreen").style.display = "block";
    this.classList.add("leftBarSelectedButton");
});

document.getElementById("stopwatchBtn").addEventListener("click", function () {
    document.querySelectorAll(".screen").forEach(function (screen) {
        screen.style.display = "none";
    });
    document.getElementsByClassName("leftBar")[0].querySelectorAll(".optionBtn").forEach(function (btn) {
        btn.classList.remove("leftBarSelectedButton");
    });
    document.getElementById("StopwatchScreen").style.display = "block";
    this.classList.add("leftBarSelectedButton");
});

// Clock

setInterval(function () {
    const date = new Date();
    const Hour = (date.getHours() % 12).toString().padStart(2, "0");
    const Minute = date.getMinutes().toString().padStart(2, "0");
    const Seconds = date.getSeconds().toString().padStart(2, "0");
    const Time = `${Hour}:${Minute}:${Seconds}`;
    document.getElementById("clockTime").innerText = Time;
    if (date.getHours() > 12) {
        document.getElementById("amorpm").textContent = "PM";
    } else {
        document.getElementById("amorpm").textContent = "AM";
    }
}, 500);

// Stopwatch

let isStopwatchRunning = false;
let stopwatchTimeSec = 0;
let loop = undefined;
document.getElementById("stopwatchStartBtn").addEventListener("click", function () {
    if (!isStopwatchRunning) {
        isStopwatchRunning = true;
        document.getElementById("stopwatchStartBtn").getElementsByTagName("p")[0].textContent = "Pause";
        loop = setInterval(function () {
            stopwatchTimeSec++;
            const stopwatchHours = Math.floor(stopwatchTimeSec / 60 / 60) % 60;
            const stopwatchMinutes = Math.floor(stopwatchTimeSec / 60) % 60;
            const stopwatchSeconds = stopwatchTimeSec % 60;
            const stopwatchDisplayTime = `${stopwatchHours.toString().padStart(2, "0")}:${stopwatchMinutes.toString().padStart(2, "0")}:${stopwatchSeconds.toString().padStart(2, 0)}`;
            document.getElementById("stopwatchTime").textContent = stopwatchDisplayTime;
        }, 1000);
    } else {
        isStopwatchRunning = false;
        document.getElementById("stopwatchStartBtn").getElementsByTagName("p")[0].textContent = "Start";
        clearInterval(loop);
    }
});