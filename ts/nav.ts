document.addEventListener('DOMContentLoaded', () => {
    const desktopSlideOut = document.getElementById('mainDesktopNavbar'),
        button = document.getElementById('mainButton'),
        closeNavButton = document.getElementById('closeNavButton'),
        donateBtn = document.getElementById("donate-btn-desktop");

    // start the desktop navbar as hidden.
    desktopSlideOut.style.display = 'none';

    // check screen width and set data target of menu button. show donate on desktop.
    if (screen.availWidth >= 1024) {
        button.attributes[4].value = '#mainDesktopNavbar';
        donateBtn.style.display = "inline";
    } else {
        button.attributes[4].value = '#mainMobileNavbar';
    }

    // Open nav on menu click.
    button.addEventListener('click', () => {
        if (screen.availWidth >= 1024) {
            if (desktopSlideOut.classList.contains('closingNav')) {
                desktopSlideOut.classList.remove('closingNav');
            }

            desktopSlideOut.className = 'openingNav';
            desktopSlideOut.style.display = 'block';
        }
    });

    // Close nav when 'X' is clicked.
    closeNavButton.addEventListener('click', () => {
        if (screen.availWidth >= 1024) {
            if (desktopSlideOut.classList.contains('openingNav')) {
                desktopSlideOut.classList.remove('openingNav');
            }

            desktopSlideOut.className = 'closingNav';
            desktopSlideOut.style.display = 'none';
        }
    });

    // document.addEventListener("click", e => {
    //     if (e.target !== desktopSlideOut && e.target !== button && desktopSlideOut.classList.contains('openingNav')) {
    //         desktopSlideOut.className = 'closingNav';
    //         desktopSlideOut.style.display = 'none';
    //     }
    // });
});