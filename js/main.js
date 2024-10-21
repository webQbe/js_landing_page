
// Select div.countdown
const countdown = document.querySelector('.countdown');

// Set Launch Date
const launchDate = new Date('Jan 1, 2025 13:00:00').getTime();

// Update every second
const update = setInterval(() => {

    console.log('Update');

}, 1000); // Run Every 1 sec
