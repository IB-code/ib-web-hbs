// container for desktop newsletter
const desktopNewsletterContainer = <HTMLDivElement>document.querySelector("#desktopNewsletter");
// container for mobile newsletter
const mobileNewsletterContainer = <HTMLDivElement>document.querySelector("#mobileNewsletter");
// newsletter close button 
const desktopCloseButton = <HTMLButtonElement>document.querySelector("#close-button");
// container for newsletter signup circle. It's an icon to trigger the newsletter manually
const newsletterCircle = <HTMLDivElement>document.querySelector("#newsletter-circle");
// localStorage value used to track visits for the purpose hiding newsletter on visit schedule
const newsletterLastDisplayTime = Number(localStorage.getItem('last-visit'));
// getting current time in milliseconds
const currentTime = Date.now();

// checking width of browser viewport to setup mobile version
if (screen.availWidth < 769) {
    // remove desktop newsletter from document
    desktopNewsletterContainer.parentNode.removeChild(desktopNewsletterContainer);

    const mobileCloseButton = <HTMLDivElement>document.querySelector("#mobile-close-button");
    mobileCloseButton.setAttribute("data-toggle", "modal");
    mobileCloseButton.setAttribute("data-target", "#mobileNewsletter");

    // add attributes needed by Bootstrap to trigger modal
    newsletterCircle.setAttribute("data-toggle", "modal");
    newsletterCircle.setAttribute("data-target", "#mobileNewsletter");

    newsletterCircle.style.height = "50px";
    newsletterCircle.style.width = "50px";
    newsletterCircle.style.borderRadius = "50px";
}

// open newsletter via animation if most recent visit was over 7 days ago
if (!newsletterLastDisplayTime || currentTime - newsletterLastDisplayTime > 604800000) {
    localStorage.setItem('last-visit', currentTime.toString());

    if (screen.availWidth < 769) {
        // adding class to desktop newsletter to trigger animation
        desktopNewsletterContainer.classList.add("animate-newsletter");
    }
} else {
    // showing icon on the page if user wishes to trigger newsletter manually. 
    // setting display prop from none to flex
    newsletterCircle.classList.add("d-flex", "justify-content-center", "align-items-center");
}

// close newsletter on click o "X" button and show newsletter icon to reopen
desktopCloseButton.addEventListener('click', () => {
    desktopNewsletterContainer.style.display = 'none';
    newsletterCircle.classList.add("d-flex", "justify-content-center", "align-items-center")
});

// adding class to trigger newsletter popup and remove circle
newsletterCircle.addEventListener('click', () => {
    if (screen.availWidth > 769) {
        desktopNewsletterContainer.style.display = 'block';
        desktopNewsletterContainer.style.opacity = '1';
        desktopNewsletterContainer.style.animation = 'none';

        // setting display prop from none to flex
        newsletterCircle.classList.remove("d-flex", "justify-content-center", "align-items-center");
        newsletterCircle.style.display = 'none';
    }
});