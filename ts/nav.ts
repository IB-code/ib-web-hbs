window.addEventListener('DOMContentLoaded', () => {
    const desktopSlideOut = document.getElementById('mainDesktopNavbar'),
        button = document.getElementById('mainButton'),
        closeNavButton = document.getElementById('closeNavButton');

    // start the desktop navbar as hidden.
    desktopSlideOut.style.display = 'none';

    // check screen width and set data target of menu button.
    if (screen.availWidth > 1025) {
        button.attributes[4].value = '#mainDesktopNavbar';
    } else {
        button.attributes[4].value = '#mainMobileNavbar';
    }

    button.addEventListener('click', () => {
        if (screen.availWidth > 1025) {
            if (desktopSlideOut.classList.contains('closingNav')) {
                desktopSlideOut.classList.remove('closingNav');
            }

            desktopSlideOut.className = 'openingNav';
            desktopSlideOut.style.display = 'block';
        }
    });

    closeNavButton.addEventListener('click', () => {
        if (screen.availWidth > 1025) {
            if (desktopSlideOut.classList.contains('openingNav')) {
                desktopSlideOut.classList.remove('openingNav');
            }

            desktopSlideOut.className = 'closingNav';
            desktopSlideOut.style.display = 'none';
        }
    });
});
