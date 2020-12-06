// Container for newsletter
const newsletterContainer = document.getElementById("newsletter-container");
// localStorage value used to track visits for the purpose hiding newsletter on visit schedule
const newsLetterState = localStorage.getItem('newsletterVisitCount');

// Setting newsletter value to localStorage if it doesn't exist
let visitCount = 0; 

if (!newsLetterState) {
    visitCount++;
    localStorage.setItem('newsletterVisitCount', visitCount.toString());
} else {
    visitCount++;
}