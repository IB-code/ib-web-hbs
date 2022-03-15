import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Testimonials | Innovate Birmingham',
            meta: {
                description: 'Here are some testimonials from recent graduates.',
                images: [
                    {
                        url: '/static/img/logos/logo.png',
                    },
                ],
            },
        },
    };

    next();
};

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('testimonials', req.context, (err, html) => {
        parse(req, req.url, html).then(
            (html) => {
                res.send(html);
            },
            (err) => {
                next(err);
            },
        );
    });
};
