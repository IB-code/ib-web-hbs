// interface HTMLInputEvent extends Event {
//     target: HTMLInputElement & EventTarget;
// }

window.addEventListener('DOMContentLoaded', () => {
    const desktopSlideOut = document.getElementById('mainDesktopNavbar'),
        button = document.getElementById('mainButton'),
        closeNavButton = document.getElementById('closeNavButton');

    // start the desktop navbar as hidden.
    desktopSlideOut.style.display = 'none';

    // check screen width and set data target of menu button.
    if (screen.availWidth > 1366) {
        button.attributes[4].value = '#mainDesktopNavbar';
    } else {
        button.attributes[4].value = '#mainMobileNavbar';
    }

    button.addEventListener('click', () => {
        if (screen.availWidth > 1366) {
            if (desktopSlideOut.classList.contains('closingNav')) {
                desktopSlideOut.classList.remove('closingNav');
            }

            desktopSlideOut.className = 'openingNav';
            desktopSlideOut.style.display = 'block';
        }
    });

    closeNavButton.addEventListener('click', () => {
        if (screen.availWidth > 1366) {
            if (desktopSlideOut.classList.contains('openingNav')) {
                desktopSlideOut.classList.remove('openingNav');
            }

            desktopSlideOut.className = 'closingNav';
            desktopSlideOut.style.display = 'none';
        }
    });

    // document.addEventListener('click', (e?: HTMLInputEvent) => {
    //     if (e.target.id) {
    //         console.log(e.target.id)
    //     } else if (screen.availWidth > 1366 && desktopSlideOut.classList.contains('openingNav')) {
    //         desktopSlideOut.classList.remove('openingNav');
    //         desktopSlideOut.classList.add('closingNav');
    //         desktopSlideOut.style.display = 'none';
    //     }
    // });
});
