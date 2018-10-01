document.addEventListener('DOMContentLoaded', () => {
    let params: any = getParams(window.location.href);
    let el = document.getElementById('formContainer');

    if (params.response && params.response === 'thanks') {
        el.classList.add('d-flex align-items-center justify-content-center');
        el.innerHTML = '<h1>Thanks! Someone will be in touch, shortly</h1>';
    }

    if (params.response && params.response === 'whoops') {
        el.classList.add('d-flex align-items-center justify-content-center');
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
