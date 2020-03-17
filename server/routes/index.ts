import * as express from 'express';
import meta from '../middleware/meta';
import * as index from './home';
import * as about from './about';
import * as courses from './courses';
import * as software from './software';
import * as partners from './partners';
import * as contact from './contact';
import * as data from './data-analytics';
import * as certifications from './degrees-and-certs';
import * as testimonials from './testimonials';
import * as faq from './faq';
import * as programs from './programs';
import * as accelerated from './accelerated';
import * as apprenticeship from './apprenticeship';

const router = express.Router();

router
    .get('/', index.context, meta, index.render)
    .get('/about', about.context, meta, about.render)
    .get('/contact', contact.context, meta, contact.render)
    .post('/contact/submit', contact.handleFormSubmission)
    .get('/courses', courses.context, meta, courses.render)
    .get('/programs', programs.context, meta, programs.render)
    .get('/programs/accelerated-programs', accelerated.context, meta, accelerated.render)
    .get('/apprenticeship', apprenticeship.context, meta, apprenticeship.render)
    .get('/degrees-and-certifications', certifications.context, meta, certifications.render)
    .get('/courses/software', software.context, meta, software.render)
    .get('/courses/data-analytics', data.context, meta, data.render)
    .get('/partners', partners.context, meta, partners.render)
    .get('/testimonials', testimonials.context, meta, testimonials.render)
    .get('/faq', faq.context, meta, faq.render);

// .get('/blog', blogList.context, meta, blogList.render)
// .get('/blog/page/:page', blogList.context, meta, blogList.render)
// .get('/blog/:title', blog.context, meta, blog.render)
// .get('/blog/:title/amp', blog.context, meta, blog.render);

export default router;
