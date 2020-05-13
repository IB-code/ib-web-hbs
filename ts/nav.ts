window.addEventListener('DOMContentLoaded', () => {
    const desktopSlideOut = document.getElementById('mainDesktopNavbar'),
        button = document.getElementById('mainButton'),
        closeNavButton = document.getElementById('closeNavButton');

    // start the desktop navbar as hidden.
    desktopSlideOut.style.display = 'none';

    // check screen width and set data target of menu button.
    if (screen.availWidth >= 1024) {
        button.attributes[4].value = '#mainDesktopNavbar';
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

    // Close nav when X is clicked.
    closeNavButton.addEventListener('click', () => {
        if (screen.availWidth >= 1024) {
            if (desktopSlideOut.classList.contains('openingNav')) {
                desktopSlideOut.classList.remove('openingNav');
            }

            desktopSlideOut.className = 'closingNav';
            desktopSlideOut.style.display = 'none';
        }
    });

    // // Hiding nav on clicks outside. reference: https://www.blustemy.io/detecting-a-click-outside-an-element-in-javascript/
    // document.addEventListener("click", (e) => {
    //     let targetElement = <any>e.target // clicked element

    //     do {
    //         if (targetElement == desktopSlideOut && targetElement !== button) {
    //             // This is a click inside. Do nothing, just return.
    //             return;
    //         }
    //         // Go up the DOM.
    //         targetElement = targetElement.parentNode;
    //     } while (targetElement);

    //         This is a click outside. Close the nav.
    //         if (screen.availWidth >= 1024) {
    //             if (desktopSlideOut.classList.contains('openingNav')) {
    //                 desktopSlideOut.classList.remove('openingNav');
    //             }

    //             desktopSlideOut.className = 'closingNav';
    //             desktopSlideOut.style.display = 'none';
    //         }
    // });
});
