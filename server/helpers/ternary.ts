import * as hbs from 'handlebars';

export default function(test, yes, no) {
    if (test === 0) {
        return yes;
    }

    return no;
}
