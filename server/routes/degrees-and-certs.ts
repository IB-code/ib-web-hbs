import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Professional Development & Supportive Services | Innovate Birmingham',
            meta: {
                description:
                    'Offering scholarships to UAB, Jefferson State, and Lawson State.',
                images: [
                    {
                        url: '/static/img/scholarships/hero.jpg',
                    },
                ],
            },
        },
        main: {
            schools: [
                {
                    name: 'Jefferson State Community College',
                    url: 'http://www.jeffersonstate.edu',
                    __logoPath: '/static/img/scholarships/JeffState-min.png',
                    requirements: [
                        'AAS Degrees in Computer Programming, Networking, or Web Technologies.', 'Advanced Certificates in Computer Programming, Networking, or Web Technologies.', 
                        'Certificates in Computer Programming, Networking, Swift App Development, or Web Technologies.', 'Fast-Track Programs including Full-stack Software Development, CompTIA A+ Certification, or Java.'
                    ]
                },
                {
                    name: 'University of Alabama at Birmingham',
                    url: 'https://www.uab.edu/home/',
                    __logoPath: '/static/img/scholarships/uab-min.png',
                    requirements: [
                        'Computer Science', 'Information Systems', 'Digital Forensics', 'Electrical Engineering', 'Marketing'
                    ]
                },
                {
                    name: 'Lawson State Community College',
                    url: 'http://www.lawsonstate.edu/',
                    __logoPath: '/static/img/scholarships/Lawson-min.png',
                    requirements: [
                        'AAS in Computer Science', 'AS in Computer Science', 'Certificates in Computer Science'
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
    res.render('degrees-and-certs', req.context, (err, html) => {
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
