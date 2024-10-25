const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const carusel = document.querySelector(".carusel");
let slyder = document.querySelector(".carusel .list");
let thumbnail = document.querySelector(".carusel .thumbnail");
const thumbnailItems = thumbnail.querySelectorAll(".item");
const time = document.querySelector(".time");
let timeRunning = 3000;
let runTimeout;
let timeAutoNext = 7000;
thumbnail.appendChild(thumbnailItems[0]);
nextButton.onclick = function () {
  showSlyder("next");
};
prevButton.onclick = function () {
  showSlyder("prev");
};
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlyder(type) {
  const slyderItems = slyder.querySelectorAll(".carusel .list .item");
  const thumbnailItems = document.querySelectorAll(".carusel .thumbnail .item");
  if (type === "next") {
    slyder.appendChild(slyderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    carusel.classList.add("next");
  } else {
    slyder.prepend(slyderItems[slyderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    carusel.classList.add("prev");
  }
  clearTimeout(runTimeout);
  runTimeout = setTimeout(() => {
    carusel.classList.remove("next");
    carusel.classList.remove("prev");
  }, timeRunning);
  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}
