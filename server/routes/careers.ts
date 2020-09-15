import * as express from 'express';
import parse from '../middleware/parse';
import * as os from 'os';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Careers | Innovate Birmingham',
            meta: {
                description: 'Join the Innovate Birmingham team.',
                images: [
                    {
                        url: '/static/img/careers/hero.jpg',
                    },
                ],
            },
        },
        main: {
            departments: [
                {
                    department: "Open Positions",
                    openings: [
                        {
                            title: "Executive Director",
                            employmentType: "Full-Time",
                            applicationLink: "https://uab.taleo.net/careersection/ext/jobdetail.ftl?job=T178842&lang=en&fbclid=IwAR1Ra-7B4cngBlWoWKahKodtBBCAsq45SzakopVuQzn10hf7Vm-nZWgK0nU",
                        }
                    ]
                },
            ]
        },
    };

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('careers', req.context, (err, html) => {
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
