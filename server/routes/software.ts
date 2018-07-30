import * as express from 'express';
import * as uuid from 'uuid/v4';
import parse from '../middleware/parse';

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
            curriculum: [
                {
                    id: uuid(),
                    icon: 'fa fa-cloud',
                    headline: 'Basics, Tools, & Deployment',
                    timeline: 'Throughout',
                    children: [
                        {
                            id: uuid(),
                            icon: 'fab fa-git',
                            headline: 'Git',
                            description: 'this is the git description',
                        },
                        {
                            id: uuid(),
                            icon: 'fab fa-aws',
                            headline: 'AWS',
                            description: 'this is the git description',
                        },
                        {
                            id: uuid(),
                            icon: 'fa fa-terminal',
                            headline: 'Terminal',
                            description: 'this is the git description',
                        },
                    ],
                },
                {
                    id: uuid(),
                    icon: 'fa fa-laptop',
                    headline: 'Front End Development',
                    timeline: 'Weeks 1 - 5',
                    children: [
                        {
                            id: uuid(),
                            icon: 'fab fa-html5',
                            headline: 'HTML',
                            description: 'this is the html description',
                        },
                        {
                            id: uuid(),
                            icon: 'fab fa-css3-alt',
                            headline: 'CSS',
                            description: 'this is the css description',
                        },
                        {
                            id: uuid(),
                            icon: 'fab fa-js',
                            headline: 'JavaScript',
                            description: 'this is the js description',
                        },
                        {
                            id: uuid(),
                            icon: 'fa fa-file-code',
                            headline: 'jQuery',
                            description: 'this is jquery description',
                        },
                        {
                            id: uuid(),
                            icon: 'fab fa-react',
                            headline: 'React',
                            description: 'this is the react description',
                        },
                    ],
                },
                {
                    id: uuid(),
                    icon: 'fa fa-code',
                    headline: 'Back End Development',
                    timeline: 'Weeks 6 - 9',
                    children: [
                        {
                            id: uuid(),
                            icon: 'fab fa-node-js',
                            headline: 'Node',
                            description: 'this is the node description',
                        },
                        {
                            id: uuid(),
                            icon: 'fab fa-stripe',
                            headline: 'Stripe',
                            description: 'this is the stripe description',
                        },
                        {
                            id: uuid(),
                            icon: 'fa fa-handshake',
                            headline: 'API',
                            description: 'this is the api description',
                        },
                    ],
                },
                {
                    id: uuid(),
                    icon: 'fa fa-database',
                    headline: 'Database Administration',
                    timeline: 'Weeks 10 - 11',
                    children: [
                        {
                            id: uuid(),
                            icon: 'fa fa-database',
                            headline: 'MySQL',
                            description: 'this is the mysql description',
                        },
                    ],
                },
                {
                    id: uuid(),
                    icon: 'fa fa-project-diagram',
                    headline: 'Projects',
                    timeline: 'Weeks 12 - 14',
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
