const setIframeContainer = (link: string) => {
    const iframeContainer = <HTMLIFrameElement>document.querySelector('#iframe-container'),
        currentIframe = <HTMLIFrameElement>document.querySelector('#iframe-container iframe'),
        newsletterHelper = <HTMLDivElement>document.querySelector('#newsletter-helper'),
        loadingSpinner = document.createElement('div');

    if(currentIframe) iframeContainer.removeChild(currentIframe);
    
    newsletterHelper.remove();
    loadingSpinner.style.display = 'block';

    const iframe = document.createElement('iframe');
    iframe.onload = () => loadingSpinner.remove();
    iframe.setAttribute('src', link);
    iframeContainer.innerHTML = '';
    iframeContainer.appendChild(iframe);
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
