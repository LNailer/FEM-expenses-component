// Add click event listeners to all day-bar elements
const dayBars = document.getElementsByClassName('day-bar');
Array.from(dayBars).forEach(bar => {
  bar.addEventListener('click', function() {
  // Check if the clicked bar already has the 'show-amount' class
    if (!this.classList.contains('show-amount')) {
    // Only call removeAllInstancesOfClass if the clicked bar does not have 'show-amount'
    removeAllInstancesOfClass('show-amount');
  }
  // Toggle the 'show-amount' class on the clicked bar
  this.classList.toggle('show-amount');

  });
});