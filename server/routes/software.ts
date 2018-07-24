import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Courses | IamBham Software Development',
            meta: {
                description: 'Learn to Code. For Free. Seriously.',
            },
        },
        main: {
            curriculum: [
                {
                    icon: '',
                    headline: '',
                },
            ],
        },
    };

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('software', req.context, (err: Error, html: string) => {
        parse(req, req.url, html).then(
            (html: string) => {
                res.send(html);
            },
            (err: Error) => {
                next(err);
            },
        );
    });
}
