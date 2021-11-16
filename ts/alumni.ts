const setIframeContainer = (link: string) => {
    const iframeContainer = <HTMLIFrameElement>document.querySelector('#iframe-container'),
        newsletterHelper = <HTMLDivElement>document.querySelector('#newsletter-helper');

    newsletterHelper.style.display = 'none';

    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', link);
    iframeContainer.innerHTML = '';
    iframeContainer.appendChild(iframe);

    console.log(this);
};

const renderMobileNewsletter = () => {
    const mobileNewsletterOptions = document.querySelector('#mobile-newsletter-options');
    const desktopNewsletterOptions = document.querySelector('#desktop-newsletter-options');

    if (screen.availWidth <= 576) {
        // remove desktop newsletter options
        desktopNewsletterOptions.remove();

        // add mobile newsletter options
        // mobileNewsletterOptions.innerHTML = `
        //     <div class="dropdown">
        //         <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //             Dropdown button
        //         </button>
        //         <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        //             ${

        //             }
        //         </div>
        //     </div>
        // `;
    } else {
        // remove mobile newsletter options
        mobileNewsletterOptions.remove();
    }
}

renderMobileNewsletter();