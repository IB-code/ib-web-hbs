import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Programs | Innovate Birmingham',
            meta: {
                description: 'Choose your path to a career in technology.',
                images: [
                    {
                        url: '/static/img/home/hero.png',
                    },
                ],
            },
        },
        main: {
            courses: [
                {
                    icon: 'fa fa-suitcase',
                    headline: 'Apprenticeship',
                    description: 'Pre-Apprenticeship training program to prepare for apprenticeship-to-hire careers',
                    action: {
                        id: 'apprenticeship',
                        href: '/apprenticeship',
                        text: 'LEARN MORE',
                    }
                },
                {
                    icon: 'fa fa-graduation-cap',
                    headline: 'Degree and Certificate Programs',
                    description: 'For tech-related full-time students at UAB, Jeff State, and Lawson State',
                    action: {
                        id: 'certs',
                        href: '/degrees-and-certifications/',
                        text: 'LEARN MORE',
                    }
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
    res.render('programs', req.context, (err, html) => {
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
