import * as express from 'express';
import meta from '../middleware/meta';
import * as amp from './amp';
import * as index from './home';
import * as blogList from './bloglist';
import * as blog from './blog';
import * as about from './about';
import * as courses from './courses';
import * as iambham from './iambham';

const router = express.Router();

router
    .get('/', index.context, meta, index.render)
    .get('/about', about.context, meta, about.render)
    .get('/courses', courses.context, meta, courses.render)
    .get('/courses/iambham', iambham.context, meta, iambham.render)
    .get('/blog', blogList.context, meta, blogList.render)
    .get('/blog/page/:page', blogList.context, meta, blogList.render)
    .get('/blog/:title', blog.context, meta, blog.render)
    .get('/blog/:title/amp', blog.context, meta, blog.render);

export default router;
