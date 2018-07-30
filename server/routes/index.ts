import * as express from 'express';
import meta from '../middleware/meta';
import * as amp from './amp';
import * as index from './home';
import * as blogList from './bloglist';
import * as blog from './blog';
import * as about from './about';
import * as courses from './courses';
import * as software from './software';
import * as hardware from './hardware';
import * as partners from './partners';
import * as contact from './contact';

const router = express.Router();

router
    .get('/', index.context, meta, index.render)
    .get('/about', about.context, meta, about.render)
    .get('/contact', contact.context, meta, contact.render)
    .get('/courses', courses.context, meta, courses.render)
    .get('/courses/software', software.context, meta, software.render)
    .get('/courses/hardware', hardware.context, meta, hardware.render)
    .get('/partners', partners.context, meta, partners.render)
    .get('/blog', blogList.context, meta, blogList.render)
    .get('/blog/page/:page', blogList.context, meta, blogList.render)
    .get('/blog/:title', blog.context, meta, blog.render)
    .get('/blog/:title/amp', blog.context, meta, blog.render);

export default router;
