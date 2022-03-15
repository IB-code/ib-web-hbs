import * as hbs from 'handlebars';

export default function isFirstItem(index, className) {
    return index === 0 ? className : '';
}
