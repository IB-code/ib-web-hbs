import * as express from 'express';
import parse from '../middleware/parse';

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
                            title: "Program Director/Cluster Manager",
                            employmentType: "Full-Time",
                            applicationLink: "..\\static\\documents\\ProgramDirector_ClusterManagerOctober2022.pdf"
                        },
                        {
                            title: "Career Pathways Coordinator",
                            employmentType: "Full-Time",
                            applicationLink: "..\\static\\documents\\CareerPathsCoordinatorJobDescriptionNov2022.pdf"
                        },
                    ]
                },
            ]
        },
    };

    next();
};

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
