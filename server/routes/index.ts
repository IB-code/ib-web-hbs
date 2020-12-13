import * as express from 'express';
import meta from '../middleware/meta';
import * as index from './home';
import * as about from './about';
// import * as courses from './courses';
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
import * as media from './media';
import * as staff from './staff';
import * as mission from './mission';
// import * as financials from './financials';
import * as board from './board';
import * as donate from './donate';
import * as apply from './apply';
import * as interestForm from "./interestForm";
import * as careers from './careers';
import * as blogList from "./bloglist";
import * as tempBlog1 from "./blog-temp1";
import * as tempBlog2 from "./blog-temp2";
import * as tempBlog3 from "./blog-temp3";

const router = express.Router();

router
    .get('/', index.context, meta, index.render)
    .get('/careers', careers.context, meta, careers.render)
    .get('/apply', apply.context, meta, apply.render)
    .post('/apply/mail', apply.handleApplicationEmail)
    .post("/interest/mail", interestForm.handleApplicationInterestResp)
    .get('/media', media.context, meta, media.render)
    .get('/staff', staff.context, meta, staff.render)
    .get('/mission', mission.context, meta, mission.render)
    .get('/board', board.context, meta, board.render)
    .get('/donate', donate.context, meta, donate.render)
    .get('/about', about.context, meta, about.render)
    .get('/contact', contact.context, meta, contact.render)
    .post('/contact/submit', contact.handleFormSubmission)
    .get('/programs', programs.context, meta, programs.render)
    .get('/programs/accelerated-programs', accelerated.context, meta, accelerated.render)
    .get('/apprenticeship', apprenticeship.context, meta, apprenticeship.render)
    .get('/degrees-and-certifications', certifications.context, meta, certifications.render)
    .get('/courses/software', software.context, meta, software.render)
    .get('/courses/data-analytics', data.context, meta, data.render)
    .get('/partners', partners.context, meta, partners.render)
    .get('/testimonials', testimonials.context, meta, testimonials.render)
    .get('/faq', faq.context, meta, faq.render)
    // .get('/blog', blogList.context, meta, blogList.render)
    // .get('/blog/temp1', tempBlog1.context, meta, tempBlog1.render)
    // .get('/blog/temp2', tempBlog2.context, meta, tempBlog2.render)
    // .get('/blog/temp3', tempBlog3.context, meta, tempBlog3.render)

// .get('/financials', financials.context, meta, financials.render)
// .get('/courses', courses.context, meta, courses.render)

export default router;