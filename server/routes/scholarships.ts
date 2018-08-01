import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Scholarships | Innovate Birmingham',
            meta: {
                description: 'This is a meta description.',
                images: [
                    {
                        url: '/static/img/home/hero.png',
                    },
                ],
            },
        },
        main: {},
    };

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('scholarships', req.context, (err, html) => {
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
