import * as express from 'express';
import * as uuid from 'uuid/v4';
import parse from '../middleware/parse';
import { ICurriculumSection } from '../references';
import * as _ from 'lodash';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            headline:
                'Full Stack Software Engineering | IamBham Software Development',
            meta: {
                description: 'Learn to Code. For Free. Seriously.',
                images: [
                    {
                        url: '/static/img/home/hero.png',
                    },
                ],
            },
        },
        main: {
            curriculum: [],
        },
    };

    let curriculum: Array<ICurriculumSection> = [
        {
            icon: 'fa fa-cloud',
            headline: 'Basics, Tools, & Deployment',
            timeline: 'Throughout',
            description: [
                'How the Web Works',
                'Git',
                'Terminal',
                'Heroku',
                'Github',
                'VS Code',
                'npm',
                'Agile',
            ],
        },
        {
            icon: 'fas fa-laptop-code',
            headline: 'Front End Development',
            timeline: 'Weeks 1 - 5',
            description: [
                'HTML',
                'CSS',
                'Bootstrap',
                'Modern JavaScript',
                'React',
                'React Native',
            ],
        },
        {
            icon: 'fa fa-code',
            headline: 'Back End Development',
            timeline: 'Weeks 6 - 9',
            description: [
                'Node',
                'Express',
                'Sending Emails with Mailgun',
                'Processing Payments with Stripe',
                'API',
                'Authentication & Authorization',
            ],
        },
        {
            icon: 'fa fa-database',
            headline: 'Database Administration',
            timeline: 'Weeks 10 - 11',
            description: [
                'Fundamental Relational Database Concepts',
                'MySQL',
                'Querying, Security, and Scalability',
                'Integration with Node',
            ],
        },
        {
            icon: 'fa fa-project-diagram',
            headline: 'Projects',
            timeline: 'Weeks 12 - 14',
            description:
                ["Students spend the final three weeks of the course working on a group project that will showcase and enforce the skills they've learned the past eleven weeks."],
        },
    ];

    req.context.main.curriculum = curriculum.map((section) => {
        let s = { ...section, id: uuid() };

        if (_.isArray(s.description)) {
            let temp = `<ul>`;

            s.description.forEach((item) => {
                temp += `<li>${item}</li>`;
            });

            temp += `</ul>`;

            s.description = [temp];
        }

        return s;
    });

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
