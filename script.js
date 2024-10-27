const numOfFriends = document.querySelector("#num-of-friends");
const totalSum = document.querySelector("#total-sum");
const tip = document.querySelector("#tip");
const calc = document.querySelector(".calculate");
calc.addEventListener("click", calculate);

const sumPerson = document.querySelector(".sum-per-person");
const restCharity = document.querySelector(".rest-for-charity");

function calculate() {
  const friends = parseInt(numOfFriends.value);
  const sum = parseFloat(totalSum.value);
  const tipValue = parseFloat(tip.value);

  const sumPerPerson = Math.floor((sum + tipValue) / friends);
  /*const restForCharity = sum + tipValue - sumPerPerson * friends;*/
  const restForCharity = (sum + tipValue) % friends;

  sumPerson.textContent = `${sumPerPerson} kr`;
  restCharity.textContent = `${restForCharity} kr`;
}
