const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".seconds");

setInterval(() => {
  d = new Date();
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2;
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `translate(-50%, -100%) rotate(${hr_rotation}deg)`;
  minute.style.transform = `translate(-50%, -100%) rotate(${min_rotation}deg)`;
  second.style.transform = `translate(-50%, -100%) rotate(${sec_rotation}deg)`;
});
