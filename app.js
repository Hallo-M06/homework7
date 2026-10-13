//Step 1: Embed JavaScript and Verify Integration
console.log('Hello World!');

//Step 2: Show Alert When Resume is Downloaded
let hasDownloadedResume = false;
const button = document.getElementById('resume_download');
button.addEventListener("click", function download() 
{
    if(hasDownloadedResume == false)
    {
        alert("Your resume is downloaded successfully!" )
        hasDownloadedResume = true;
    }
}
);

//Step 3: Define Variables for User Data
const name = "Matthew";
    //define hasDownloadedResume as a guard for multiple downloads of resume

//Step 4: Display Personalized Greeting
function showGreeting(name)
{
    return "Hello, my name is " + name + "! Welcome to my portfolio!"
}

window.addEventListener('DOMContentLoaded', function pageLoad() {
    const greetingSection = document.getElementById('greeting');

        // Update the section content
        greetingSection.textContent = showGreeting(name);;
});

//Step 5: Use Arithmetic for Date Calculations
function daysUntilDeadline(dueDate)
{
    let end = new Date(dueDate);

    //create current day
    let start = new Date();

    let timeDifference = end - start;
    let daysLeft = timeDifference / (1000 * 3600 * 24);


    return Math.round(daysLeft);
}

//function to print output
function displayTimeRemaining(dueDate)
{
    let timeRemaining = daysUntilDeadline(dueDate);
    return timeRemaining + " days until due date (" + dueDate + ").";
}

//christmas is end date
const deadline = '2026-12-25';

//output time in projects section
window.addEventListener('DOMContentLoaded', function pageLoad() {
    const timeRemaining = document.getElementById('countdown');

        // Update the section content
        timeRemaining.textContent = displayTimeRemaining(deadline);
});