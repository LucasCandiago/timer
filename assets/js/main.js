function clock() {
  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");

  const zeroAEsquerda = (num) => (num >= 10 ? num : `0${num}`);

  let data = new Date("1970-01-01 00:00:00");
  let hour = data.getHours();
  let minutes = data.getMinutes();
  let sec = data.getSeconds();

  iniciar.addEventListener("click", function (event) {
    relogio.classList.remove("pausado");
    const timer = setInterval(function () {
      sec++;
      if (sec === 60) {
        sec = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hour++;
      }
      relogio.innerHTML = `${zeroAEsquerda(hour)}:${zeroAEsquerda(
        minutes
      )}:${zeroAEsquerda(sec)}`;
    }, 1000);
    pausar.addEventListener("click", function (event) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    });
    zerar.addEventListener("click", function () {
      document.location.reload(true);
    });
  });
}

clock();
