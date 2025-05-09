let burps = 0;
let clickValue = 1;
let clickMultiplier = 1;

let clickUpgradeCost = 5;
let momCost = 3;
let foodCost = 3;
let drinkCost = 3;
let mouseCost = 10;

let moms = 0;
let food = 0;
let drinks = 0;

const burpCount = document.getElementById('burp-count');
const burpButton = document.getElementById('burp-button');
const burpSound = document.getElementById('burp-sound');

const clickUpgradeBtn = document.getElementById('click-upgrade');
const momUpgradeBtn = document.getElementById('mom-upgrade');
const foodUpgradeBtn = document.getElementById('food-upgrade');
const drinkUpgradeBtn = document.getElementById('drink-upgrade');
const mouseUpgradeBtn = document.getElementById('mouse-upgrade');

const clickCostSpan = document.getElementById('click-cost');
const momCostSpan = document.getElementById('mom-cost');
const foodCostSpan = document.getElementById('food-cost');
const drinkCostSpan = document.getElementById('drink-cost');
const mouseCostSpan = document.getElementById('mouse-cost');

function updateUI() {
  burpCount.textContent = Math.floor(burps);
  clickCostSpan.textContent = clickUpgradeCost;
  momCostSpan.textContent = momCost;
  foodCostSpan.textContent = foodCost;
  drinkCostSpan.textContent = drinkCost;
  mouseCostSpan.textContent = mouseCost;
}

burpButton.addEventListener('click', () => {
  burps += clickValue * clickMultiplier;
  burpSound.currentTime = 0;
  burpSound.play();
  updateUI();
});

clickUpgradeBtn.addEventListener('click', () => {
  if (burps >= clickUpgradeCost) {
    burps -= clickUpgradeCost;
    clickMultiplier *= 2;
    clickUpgradeCost *= 2;
    updateUI();
  }
});

momUpgradeBtn.addEventListener('click', () => {
  if (burps >= momCost) {
    burps -= momCost;
    moms++;
    momCost *= 2;
    updateUI();
  }
});

foodUpgradeBtn.addEventListener('click', () => {
  if (burps >= foodCost) {
    burps -= foodCost;
    food++;
    foodCost *= 2;
    updateUI();
  }
});

drinkUpgradeBtn.addEventListener('click', () => {
  if (burps >= drinkCost) {
    burps -= drinkCost;
    drinks++;
    drinkCost *= 2;
    updateUI();
  }
});

mouseUpgradeBtn.addEventListener('click', () => {
  if (burps >= mouseCost) {
    burps -= mouseCost;
    clickValue += 1;
    mouseCost *= 2;
    updateUI();
  }
});

function automateBurps() {
  burps += (moms * 0.5) + (food * 1) + (drinks * 1.5);
  updateUI();
}

setInterval(automateBurps, 1000);

updateUI();
