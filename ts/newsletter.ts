// Container for newsletter
const newsletterContainer = document.querySelector(".newsletter-container");
// Container for newsletter signup circle
const newsletterCircle = document.getElementById("newsletter-circle");
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

// adding class to trigger newsletter popup
newsletterCircle.addEventListener("click", () => newsletterContainer.classList.add("animate-newsletter"));