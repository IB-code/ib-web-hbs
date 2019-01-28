import * as _ from 'lodash';
import md from './markdown';
import isFirstItem from './isFirstItem';

const helpers = require('handlebars-helpers')();

export default _.assign(helpers, {
    md,
    isFirstItem,
});
