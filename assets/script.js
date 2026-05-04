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