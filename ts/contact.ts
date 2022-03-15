document.addEventListener('DOMContentLoaded', () => {
    let params: any = getParams(window.location.href);

    if (params.response === undefined) {
        return;
    }

    let el = document.getElementById('formContainer');
    el.classList.add('d-flex');
    el.classList.add('align-items-center');
    el.classList.add('justify-content-center');

    let errorText = 'Whoops! Something went wrong, please try again later.';
    let successText = 'Thanks! Someone will be in touch, shortly.';

    el.innerHTML =
        params.response && params.response === 'thanks'
            ? `<h1>${successText}</h1>`
            : `<h1>${errorText}</h1>`;
});

let getParams = (url) => {
    let params = {};
    let parser = document.createElement('a');
    parser.href = url;
    let query = parser.search.substring(1);
    let s = query.split('&');
    for (let i = 0; i < s.length; i++) {
        let pair = s[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};
