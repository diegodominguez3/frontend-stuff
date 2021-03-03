const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');

//deg interval
const deg = 6;

setInterval(() => {
  let daytime = new Date();
  let hrs = daytime.getHours() * 30;
  let mins = daytime.getMinutes() * deg;
  let secs = daytime.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hrs + mins / 12}deg)`;
  mn.style.transform = `rotateZ(${mins}deg)`;
  sc.style.transform = `rotateZ(${secs}deg)`;
});
