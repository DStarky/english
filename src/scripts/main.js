const checkboxes = document.querySelectorAll(".check");
const grid = document.querySelector(".grid");

const week = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

grid.addEventListener("click", function (event) {
  if (event.target.classList.contains("grid__check")) {
    event.target.parentNode.classList.toggle("cross");
    const square = window.getComputedStyle(event.target.parentNode, "::before");
  }
});

(function () {
  const today = new Date();
  const todayPlan = document.querySelector(`#${week[today.getDay()]}`); // it doesnt work
  todayPlan.classList.add("today");
})();

// code for button

const openButton = document.querySelector(".button__open");
const hideButton = document.querySelector(".button__hide");
const timerNode = document.querySelector(".timer");

openButton.addEventListener("click", () => {
  openButton.classList.toggle("button__open-active");
  timerNode.classList.toggle("timer-active");
});

hideButton.addEventListener("click", () => {
  timerNode.classList.toggle("timer-active");
  openButton.classList.toggle("button__open-active");
});

// code for timer

// Получаем элементы DOM
const startButton = document.querySelector(".timer__start");
const resetButton = document.querySelector(".timer__reset");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const titleElement = document.getElementById("myTitle");

// Задаем начальные значения
let minutes = 25;
let seconds = 0;
let timerId;
let sound = new Audio("../assets/sound/timer.mp3");

function start() {
  sound.play(); // проигрываем звук вначале
  startTimer(); // Запускаем таймер
}

function startTimer() {
  // Отключаем кнопку запуска
  startButton.disabled = true;

  // Обновляем значения времени на странице
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
  titleElement.innerText =
    minutes.toString().padStart(2, "0") +
    " : " +
    seconds.toString().padStart(2, "0");

  // Уменьшаем время на одну секунду
  if (seconds > 0) {
    seconds--;
  } else if (minutes > 0) {
    minutes--;
    seconds = 59;
  } else {
    // Таймер достиг нуля, останавливаем его
    clearInterval(timerId);
    sound.play(); // Воспроизводим звук
    titleElement.innerText = "Dima learns English";
    return;
  }

  // Запускаем таймер с интервалом в одну секунду
  timerId = setTimeout(startTimer, 1000);
}

// Функция сброса таймера
function resetTimer() {
  // Останавливаем текущий таймер
  clearTimeout(timerId);

  // Восстанавливаем начальные значения
  minutes = 25;
  seconds = 0;

  // Обновляем значения времени на странице
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
  titleElement.innerText = "Dima learns English";

  // Включаем кнопку запуска
  startButton.disabled = false;
}

// Привязываем обработчики событий к кнопкам
startButton.addEventListener("click", start);
resetButton.addEventListener("click", resetTimer);
sound.addEventListener("ended", () => {
  sound.pause();
});
