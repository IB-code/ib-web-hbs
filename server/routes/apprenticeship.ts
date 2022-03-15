import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Apprenticeship | Innovate Birmingham',
            meta: {
                description:
                    'IT Apprenticeship, provided by Central Six AlabamaWorks with pre-apprenticeship training provided by Innovate Birmingham.',
                images: [
                    {
                        url: '/static/img/apprenticeship/hero.jpg',
                    },
                ],
            },
        },
        main: {
            signees: [
                {
                    name: "Rebekah Llinares",
                    img: "static/img/apprenticeship/rebekahLlinares.png"
                },
                {
                    name: "Michael Parker",
                    img: "static/img/apprenticeship/michaelParker.png"
                },
                {
                    name: "Zach Durden",
                    img: "static/img/apprenticeship/zachDurden.png"
                }
            ]
        }
    };

    req.context.main.signees.sort(() => {
        return 0.5 - Math.random();
    });

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('apprenticeship', req.context, (err, html) => {
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
