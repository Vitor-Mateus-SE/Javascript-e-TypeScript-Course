function all() {
  function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT",
    });
  }
  const clock = document.querySelector(".clock");
  let seconds = 0;
  let timer;
  
  function startClock() {
    timer = setInterval(() => {
      seconds++;
      clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;
    //el off element
    if (el.classList.contains("start")) {
      clearInterval(timer);
      startClock();
      clock.classList.remove("stopColor");
    }
    if (el.classList.contains("stop")) {
      clearInterval(timer);
      clock.classList.add("stopColor");
    }
    if (el.classList.contains("sfz")) {
      clearInterval(timer);
      clock.innerHTML = "00:00:00";
      seconds = 0;
      clock.classList.remove("stopColor");
    }
  });
}
all();
