const viewsContainer = document.getElementById("pageViews");
const rangeInput = document.querySelector("input#slider");
const cost = document.querySelector("span#cost");
const freqToggle = document.querySelector("input#check");
const priceFreq = document.querySelector("span#priceFreq");
const discountSpan = document.getElementById("discount");
// const mainContainer = document.getElementById("main-container")

// console.log ({viewsContainer, rangeInput, cost, freqToggle})

const VIEWS_DATA = [
  {
    pageViews: "10K",
    monthlyCost: 8,
    LeftPercentage: 0,
  },

  {
    pageViews: "50K",
    monthlyCost: 12,
    LeftPercentage: 25,
  },
  {
    pageViews: "100K",
    monthlyCost: 16,
    LeftPercentage: 50,
  },

  {
    pageViews: "500K",
    monthlyCost: 24,
    LeftPercentage: 75,
  },

  {
    pageViews: "1M",
    monthlyCost: 36,
    LeftPercentage: 100,
  },
];

const getdata = () => {
    const currentValue = rangeInput.value
    const index = currentValue - 1
    return { pageViews, monthlyCost,LeftPercentage } = VIEWS_DATA[index]
    // had 3 or 2 lilfo9 maxi darori t9dar t3ml hi return VIEWS_DATA[index] w tkhdem, 
    // khona f vid bgha ybabnlo xno kijbed blamaytla3 lfo9, w ma3na dyal had star
    // huwa destructing (chatgpt chr7a) so old object properties into new object
}

const updatePageViews = () => {
  const { pageViews } = getdata()
  viewsContainer.textContent = `${pageViews} PAGEVIEWS`
};

const isAnnualFrequency = () => { return freqToggle.checked };

const updateCost = () => {
  const { monthlyCost } = getdata()
  // cost.textContent = `${monthlyCost}`
  const isAnnual = isAnnualFrequency()
  const price = isAnnual ? ((monthlyCost * 12)*0.75) : monthlyCost
  cost.textContent = `$${price.toFixed(2)}
`
  if (isAnnual) {
    priceFreq.textContent = "/year"
  } else {
    priceFreq.textContent = "/month"
  }
}

const updateLeftValue = () => {
  const { LeftPercentage } = getdata()
  rangeInput.style.setProperty('--left', LeftPercentage)

}

const updateFormOnRangeInput = () => {
  updatePageViews();
  updateCost();
  updateLeftValue();
};

rangeInput.addEventListener("input", updateFormOnRangeInput);
freqToggle.addEventListener('input', updateCost)

const isPc = () => {
  return window.innerWidth >= 600; 
}

function adjustText() {
  if (isPc()) {
    discountSpan.textContent = "25% discount"
  } else {
    discountSpan.textContent = "25%"
  }
}

window.onresize = adjustText;
window.onload = adjustText;