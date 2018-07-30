import * as express from 'express';
import * as _ from 'lodash';
import * as utils from '../utils';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Blog, Stay Up To Date With Us | Innovate Birmingham',
            meta: {
                description: 'Hear about our company.',
                images: [{ url: '/public/img/meta/blog.jpg' }],
            },
        },
        main: {
            blogs: [],
        },
    };

    utils
        .findBlogFiles(req)
        .then((files) => {
            let page = !!req.params.page
                ? Number(req.params.page)
                : req.params.page;
            let main = req.context.main;
            let pageCount = 9;

            if (!_.isNumber(page) || page < 1) {
                page = 1;
            }

            main.currentPage = page;
            page -= 1;

            let blogs = files.slice(
                page * pageCount,
                page * pageCount + pageCount,
            );

            main.pages = [];

            for (
                let i = 0, l = Math.ceil(files.length / pageCount);
                i < l;
                ++i
            ) {
                let url = '/blog/';

                if (i !== 0) {
                    url += 'page/' + (i + 1) + '/';
                }

                main.pages.push({ url, currentPage: i === page });
            }

            if (files.length > page * pageCount + pageCount) {
                main.next = '/blog/page/' + (page + 2) + '/';
            }

            if (page > 1) {
                main.prev = '/blog/page/' + page + '/';
            } else if (page === 1) {
                main.prev = '/blog/';
            }

            main.blogs = blogs;
        })
        .catch(_.noop)
        .then(() => {
            next();
        });
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context.layout = 'articles';
    res.render('blogs', req.context, (err, html) => {
        parse(req, req.url, html).then(
            (html) => {
                res.send(html);
            },
            (err) => {
                next(err);
            },
        );
    });
}
