import * as express from 'express';
import * as uuid from 'uuid/v4';
import parse from '../middleware/parse';
import { ICurriculumSection } from '../references';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            headline: 'Courses | IamBham Software Development',
            meta: {
                description: 'Learn to Code. For Free. Seriously.',
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
            children: [
                {
                    icon: 'fab fa-git',
                    headline: 'Git',
                    description: 'this is the git description',
                },
                {
                    icon: 'fab fa-aws',
                    headline: 'AWS',
                    description: 'this is the git description',
                },
                {
                    icon: 'fa fa-terminal',
                    headline: 'Terminal',
                    description: 'this is the git description',
                },
            ],
        },
        {
            icon: 'fas fa-laptop-code',
            headline: 'Front End Development',
            timeline: 'Weeks 1 - 5',
            children: [
                {
                    icon: 'fab fa-html5',
                    headline: 'HTML',
                    description: 'this is the html description',
                },
                {
                    icon: 'fab fa-css3-alt',
                    headline: 'CSS',
                    description: 'this is the css description',
                },
                {
                    icon: 'fab fa-js',
                    headline: 'JavaScript',
                    description: 'this is the js description',
                },
                {
                    icon: 'fa fa-file-code',
                    headline: 'jQuery',
                    description: 'this is jquery description',
                },
                {
                    icon: 'fab fa-react',
                    headline: 'React',
                    description: 'this is the react description',
                },
            ],
        },
        {
            icon: 'fa fa-code',
            headline: 'Back End Development',
            timeline: 'Weeks 6 - 9',
            children: [
                {
                    icon: 'fab fa-node-js',
                    headline: 'Node',
                    description: 'this is the node description',
                },
                {
                    icon: 'fab fa-stripe',
                    headline: 'Stripe',
                    description: 'this is the stripe description',
                },
                {
                    icon: 'fa fa-handshake',
                    headline: 'API',
                    description: 'this is the api description',
                },
            ],
        },
        {
            icon: 'fa fa-database',
            headline: 'Database Administration',
            timeline: 'Weeks 10 - 11',
            children: [
                {
                    icon: 'fa fa-database',
                    headline: 'MySQL',
                    description: 'this is the mysql description',
                },
            ],
        },
        {
            icon: 'fa fa-project-diagram',
            headline: 'Projects',
            timeline: 'Weeks 12 - 14',
        },
    ];

    req.context.main.curriculum = curriculum.map((section) => {
        let s = { ...section, id: uuid() };

        if (s.children) {
            s.children = s.children.map((child) => {
                let c = { ...child, id: uuid() };
                return c;
            });
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
