import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Our Courses | Innovate Birmingham',
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
                    icon: 'fas fa-code',
                    headline: 'Software Development Bootcamp',
                    subline: {
                        icon: 'clock',
                        text: '14 Weeks / 9am - 5pm',
                    },
                    description:
                        'Learn to code in JavaScript, the native language of the web. In our 14 week software development bootcamp we help you learn and apply the necessary coding skills you need to work as a junior level developer.',
                    action: {
                        href: '/courses/software/',
                        text: 'LEARN MORE',
                    },
                },
                {
                    icon: 'fas fa-cogs',
                    headline: 'Data Analytics Bootcamp',
                    subline: {
                        icon: 'clock',
                        text: '14 Weeks / 9am - 5pm',
                    },
                    description:
                        'With our partner ThinkData Solutions, we use the leading tools on the market to teach you the fundamentals you need to know to become an entry level Data Analyst and help businesses translate data into informed decisions and valuable knowledge.',
                    action: {
                        href: '/courses/data-analytics/',
                        text: 'LEARN MORE',
                    },
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
    res.render('courses', req.context, (err, html) => {
        parse(req, req.url, html).then(
            (html) => {
                res.send(html);
            },
            (err) => {
                next(err);
            },
        );
    });
};
