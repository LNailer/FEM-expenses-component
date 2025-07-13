// Create a 'today' variable that can be used for comparison against the 7
// bars in the chart. This will be used in the renderBarChart() function.
let today = getTodayShort();
function getTodayShort() {
  const today = new Date();
  const lowerToday = today.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
  return lowerToday;
}

// Fetch JSON from file.
fetch("data.json")
  .then(res => res.json())
  .then(data => renderBarChart(data))
  .catch(err => console.error("Error loading JSON:", err)); // helpful error catch

const maxBarHeight = 190;

function renderBarChart(data) {
  const maxAmount = Math.max(...data.map(item => item.amount)); 

  data.forEach(item => {
    // Calculate bar's height relative to max.
    const heightPercent = (item.amount / maxAmount) * 190;

    // Create new element
    const newElement = document.createElement('div');
    newElement.className = 'bar'; // Add class 'bar' for hover effect.

    // If day is today, add 'today' class to bar. Otherwise no.
    // This class provides the teal colour styling.
    if (item.day === today) {
      newElement.innerHTML += `<div class="padding-div"></div>
      <div class="day-amount" id="${item.day}-amount">\$${item.amount}</div>
      <div class="day-bar today" id="${item.day}-bar" style="height: ${heightPercent}px"></div>
      <div class="day-label">${item.day}</div>`;
    } else {
      newElement.innerHTML += `<div class="padding-div"></div>
      <div class="day-amount" id="${item.day}-amount">\$${item.amount}</div>
      <div class="day-bar" id="${item.day}-bar" style="height: ${heightPercent}px"></div>
      <div class="day-label">${item.day}</div>`;
    }
    
    // Append bar div to dynamic bar chart block
    document.getElementById("dynamic-bar-chart").appendChild(newElement);
  });

};
