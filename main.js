import './style.css'



const updateCountdown = () => {
  const countDate = new Date('July 01, 2023 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const txtDay = Math.floor(gap / day);
  const txtHour = Math.floor((gap % day) / hour);
  const txtMinute = Math.floor((gap % hour) / minute);
  const txtSecond = Math.floor((gap % minute) / second);

  document.querySelector('.day').innerText = txtDay;
  document.querySelector('.hour').innerText = txtHour;
  document.querySelector('.minute').innerText = txtMinute;
  document.querySelector('.second').innerText = txtSecond;
};

const countdown = () => {
  updateCountdown(); // Actualizar la cuenta regresiva al cargar la página
  setInterval(updateCountdown, 1000); // Actualizar la cuenta regresiva cada segundo
};

countdown();

