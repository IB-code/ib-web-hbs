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
                    description:
                        'Learn to code in JavaScript, the native language of the web. In our 14 week software development bootcamp we help you learn and apply the necessary coding skills you need to work as a junior level developer.',
                    action: {
                        id: 'apprenticeship',
                        href: '/programs/apprenticeship',
                        text: 'LEARN MORE',
                    }
                },
                {
                    icon: 'fa fa-graduation-cap',
                    headline: 'Degree and Certificate Programs',
                    description:
                        'Learn to code in JavaScript, the native language of the web. In our 14 week software development bootcamp we help you learn and apply the necessary coding skills you need to work as a junior level developer.',
                    action: {
                        id: 'certs',
                        href: '/programs/certifications/',
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
