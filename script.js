//countdown timer script
const countdown = () => {
  const countDate = newDate("Meskerm 1 2017 00:00:00").getTime();
  const now = newDate().getTime();
  const gap = countDown - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementByld("days").innerText = days;
  document.getElementByld("hours").innerText = hours;
  document.getElementByled("minutes").innerText = minutes;
  document.getElementByled("seconds").innerText = seconds;
};

setInterval(countdown, 1000);
