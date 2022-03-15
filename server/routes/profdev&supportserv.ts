import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Professional Development & Supportive Services | Innovate Birmingham',
            meta: {
                description:
                    'Holistic services to strenghten our candidates for the workforce',
                images: [
                    {
                        url: '/static/img/profdev&supportserv/hero.jpg',
                    },
                ],
            },
        },
        main: { }
    };

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('profdev&supportserv', req.context, (err, html) => {
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
