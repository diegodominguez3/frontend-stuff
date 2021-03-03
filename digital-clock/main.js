const time = document.getElementById('time');
const meridiem = document.getElementById('meridiem');

setInterval(() => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let merid = 'A.M.';

  if (hr === 0) {
    hr = 12;
  } else if (hr > 12) {
    hr = hr - 12;
    merid = 'P.M.';
  }

  if (min < 10) {
    min = '0' + min;
  }

  if (sec < 10) {
    sec = '0' + sec;
  }

  time.innerHTML = `${hr}:${min}:${sec}`;
  meridiem.innerHTML = `${merid}`;
});
