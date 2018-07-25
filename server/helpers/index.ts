import * as _ from 'lodash';
import md from './markdown';
import ternary from './ternary';

const helpers = require('handlebars-helpers')();

export default _.assign(helpers, {
    md,
    ternary,
});
