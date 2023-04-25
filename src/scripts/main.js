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

const today = new Date();
 
const todayPlan = document.querySelector(`.${week[today.getDay()]}`); // it doesnt work


grid.addEventListener("click", function (event) {
  if (event.target.classList.contains("check")) {
    event.target.parentNode.classList.toggle("cross");
  }
});
