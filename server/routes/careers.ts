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
            coreValues: `Inclusive Collaboration${os.EOL}We believe that diverse perspectives make us stronger. ${os.EOL}Each of our students, staff, and partners have expertise to offer, so we want their voices heard. ${os.EOL}We value clear and direct communication that fosters effective collaboration. ${os.EOL}We value honesty- we speak up to address challenges as well as celebrate successes. ${os.EOL}Our word is our bond - we do what we say we will do.${os.EOL}${os.EOL}Students First${os.EOL}We believe in the talent and capability of our students.${os.EOL}We empower our students with opportunities that enable our city to prosper.${os.EOL}We prioritize student needs over other demands.${os.EOL}We are a reliable and robust community of support for our students.${os.EOL}${os.EOL}Be Authentic${os.EOL}We are honest about what we know and what we don’t know. ${os.EOL}We share our ideas and perspectives and take ownership of finding solutions. ${os.EOL}We ask questions when we are uncertain or disagree.${os.EOL}We are transparent with one another and honest when we fail.${os.EOL}${os.EOL}Results Not Rhetoric${os.EOL}We move the needle. ${os.EOL}We take ownership and initiative to use data to identify problems and propose solutions. ${os.EOL}We are realistic about the challenges that arise and are empowered to solve problems. ${os.EOL}We are committed to innovating: we have a fail - fast, fail - safe environment.`,
            applicationLink: "https://uab.taleo.net/careersection/ext/jobdetail.ftl?job=T178842&lang=en&fbclid=IwAR1Ra-7B4cngBlWoWKahKodtBBCAsq45SzakopVuQzn10hf7Vm-nZWgK0nU",
            departments: [
                {
                    department: "Open Positions",
                    openings: [
                        {
                            title: "Executive Director",
                            employmentType: "Full-Time",
                            description: ""
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
