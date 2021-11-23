const setIframeContainer = (link: string) => {
    const iframeContainer = <HTMLIFrameElement>document.querySelector('#iframe-container'),
        newsletterHelper = <HTMLDivElement>document.querySelector('#newsletter-helper');

    newsletterHelper.style.display = 'none';

    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', link);
    iframeContainer.innerHTML = '';
    iframeContainer.appendChild(iframe);
};

const renderMobileNewsletterOptions = () => {
    const mobileNewsletterOptions = document.querySelector('#mobile-newsletter-options');

    if (screen.availWidth <= 576) {
        document.querySelector('#desktop-newsletter-options').remove();
        mobileNewsletterOptions.innerHTML = `
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        `;
    }
}

renderMobileNewsletterOptions();