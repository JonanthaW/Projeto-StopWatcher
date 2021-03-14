window.onload = () => {
  let lap = 1,
      hours = 0,
      minutes = 0,
      seconds = 0;
      running_watcher = false;
  let actualTime = `${hours.toLocaleString('pt-BR', {minimumIntegerDigits: 2})}:${minutes.toLocaleString('pt-BR', {minimumIntegerDigits: 2})}:${seconds.toLocaleString('pt-BR', {minimumIntegerDigits: 2})}`;
  document.querySelector(".hour h2").innerText = actualTime;

  document.querySelector("#start").addEventListener("click", () => {
    document.querySelector("#start").style.display = "none";
    document.querySelector(".actionButtons").style.display = "grid";
    running_watcher = true;
    initTimer();
  })

  document.querySelector(".actionButtons button:nth-child(1)").addEventListener("click", () => {
    hours = 0;
    minutes = 0;
    seconds = 0;
    actualTime = `${hours.toLocaleString('pt-BR', {minimumIntegerDigits: 2})}:${minutes.toLocaleString('pt-BR', {minimumIntegerDigits: 2})}:${seconds.toLocaleString('pt-BR', {minimumIntegerDigits: 2})}`;
    document.querySelector(".hour h2").innerText = actualTime;
  })
  document.querySelector(".actionButtons button:nth-child(2)").addEventListener("click", () => {
    let newLap = document.createElement("li");
    newLap.innerText = `lap ${lap} - ${actualTime}`;
    document.querySelector(".showLaps ul").append(newLap);
    lap++;
  })
  document.querySelector(".actionButtons button:nth-child(3)").addEventListener("click", () => {
    document.querySelector(".showLaps ul").innerText = "";
    lap = 1;
  })
  document.querySelector(".actionButtons button:nth-child(4)").addEventListener("click", () => {
    running_watcher = false;
    document.querySelector("#start").style.display = "block";
    document.querySelector("#start").innerText = "Continue";
    document.querySelector(".actionButtons").style.display = "none";
  })

  function initTimer() {
    if (running_watcher === true) {
      if (seconds == 60) {
        seconds = 00;
        if (minutes == 60) {
          minutes = 00;
          hours++;
        }
        minutes++;
      }
      seconds++;

      actualTime = `${hours.toLocaleString('pt-BR', {minimumIntegerDigits: 2})}:${minutes.toLocaleString('pt-BR', {minimumIntegerDigits: 2})}:${seconds.toLocaleString('pt-BR', {minimumIntegerDigits: 2})}`;
      document.querySelector(".hour h2").innerText = actualTime;

      hours == 00 && seconds == 00 && minutes == 00 ? running_watcher = false : setTimeout(initTimer, 1000);
    }
  }
}
