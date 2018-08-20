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
                    logo: '/static/img/logos/iambham_logo.png',
                    headline: 'Software Engineering Bootcamp',
                    subline: {
                        icon: 'clock',
                        text: '14 Weeks / 9am - 5pm',
                    },
                    description:
                        'We partner with Covalence, a local Software Bootcamp company, and using their curriculum, facilitated through their online portal, we teach you the skills you need to work as a junior level developer.',
                    action: {
                        href: '/courses/software/',
                        text: 'LEARN MORE',
                    },
                },
                {
                    logo: '/static/img/logos/generation_logo.png',
                    headline: 'IT Hardware Bootcamp',
                    subline: {
                        icon: 'clock',
                        text: '12 Weeks / 9am - 3pm',
                    },
                    description:
                        "We partner with McKinsey Social Initiative's Generation IT program and through their curriculum we teach you the technical and nontechnical skills you need to get a job as an IT professional.",
                    action: {
                        href: '/courses/hardware/',
                        text: 'LEARN MORE',
                    },
                },
                {
                    logo: '/static/img/logos/logo_small.png',
                    headline: 'College Scholarships',
                    subline: {
                        icon: 'dollar-sign',
                        text: 'Up to $4,000',
                    },
                    description:
                        'Through a partnership with the University of Alabama at Birmingham, Jefferson State Community College, and Lawson State Community College, Innovate Birmingham is offering up to $4000 in scholarship funds for technology majors.',
                    action: {
                        href: '/scholarships/',
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
}
