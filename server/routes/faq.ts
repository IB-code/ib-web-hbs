import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'FAQ | Innovate Birmingham',
            meta: {
                description: 'These are frequent questions we receive at Innovate Birmingham',
                images: [
                    {
                        url: '/static/img/logos/logo.png',
                    },
                ],
            },
        },
        main: {
            categories: [
                {
                    title: "Admissions",
                    entries: [
                        {

                        },
                    ]
                },
                {
                    title: "Employers and Partners",
                    entries: [
                        {
                            
                        },
                    ]
                },
                {
                    title: "Software Development Bootcamp",
                    entries: [
                        {
                            
                        },
                    ]
                },
                {
                    title: "Data Analytics Bootcamp",
                    entries: [
                        {
                            
                        },
                    ]
                },
                {
                    title: "General",
                    entries: [
                        {
                            
                        },
                    ]
                }
            ]
        }
    };

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('faq', req.context, (err, html) => {
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
