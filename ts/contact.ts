document.addEventListener('DOMContentLoaded', () => {
    let params: any = getParams(window.location.href);

    if (params.response && params.response === 'thanks') {
        let el = document.getElementById('formContainer');

        el.innerHTML = '<h1>Thanks! Someone will be in touch, shortly</h1>';
    }

    if (params.response && params.response === 'whoops') {
        let el = document.getElementById('formContainer');
        el.classList.add('d-flex');
        el.classList.add('justify-content-center');
        el.classList.add('align-items-center');

        el.innerHTML =
            '<h1>Whoops! Something went wrong, please try again later.</h1>';
    }
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
