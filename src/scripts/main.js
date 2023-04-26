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

// code for timer

const openButton = document.querySelector(".button__open");
const hideButton = document.querySelector(".button__hide");
const timer = document.querySelector(".timer");

openButton.addEventListener("click", () => {
  openButton.style.display = "none";
  timer.style.display = "block";
});

hideButton.addEventListener("click", () => {
  openButton.style.display = "flex";
  timer.style.display = "none";
});
