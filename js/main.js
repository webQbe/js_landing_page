
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

    // Convert waitTime milliseconds to days
    // Using Math.floor() to round down
    const days = Math.floor(waitTime / (1000 * 60 * 60 * 24));

    // Convert remaining (waitTime - days) milliseconds to hours
    const hours = Math.floor((waitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Convert remaining (waitTime - hours) milliseconds to minutes
    const minutes = Math.floor((waitTime % (1000 * 60 * 60)) / (1000 * 60));

    // Convert remaining (waitTime - minutes) milliseconds to seconds
    const seconds = Math.floor((waitTime % (1000 * 60)) / 1000);

    // Display result
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${minutes}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    // If launched date is passed
    if(waitTime < 0){

        // Stop countdown
        clearInterval(update);

        // Style & output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';

    }

}, 1000); // Run Every 1 sec
