
// Select div.countdown
const countdown = document.querySelector('.countdown');

// Set Launch Date in milliseconds
const launchDate = new Date('Jan 1, 2025 13:00:00').getTime();

// Update every second
const update = setInterval(() => {

    // Get current date & time in milliseconds
    const now = new Date().getTime();    

    // Calculate waiting time to the launch date
    const waitTime = launchDate - now;
    console.log(waitTime);

}, 1000); // Run Every 1 sec
