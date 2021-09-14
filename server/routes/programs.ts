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
                    headline: 'Apprenticeships & Internships',
                    description: 'Information for companies interested in partnering with us on apprenticeships or internships',
                    action: {
                        id: 'apprenticeship',
                        href: '/apprenticeship',
                        text: 'LEARN MORE',
                    }
                },
                // {
                //     icon: 'fas fa-people-carry',
                //     headline: 'Professional Development & Supportive Services',
                //     description: 'Holistic services to strenghten our candidates for the workforce',
                //     action: {
                //         id: 'certs',
                //         href: '/degrees-and-certifications/',
                //         text: 'LEARN MORE',
                //     }
                // },
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
