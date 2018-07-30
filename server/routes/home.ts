import * as express from 'express';
import parse from '../middleware/parse';
import * as utils from '../utils';
import * as _ from 'lodash';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Home | Innovate Birmingham',
            meta: {
                description: 'This is a meta description.',
                images: [
                    {
                        url: '/static/img/home/hero.png',
                    },
                ],
            },
        },
        main: {
            hired: [],
            blogs: [],
            courses: [
                {
                    href: '/courses/software/',
                    icon: 'fa fa-code',
                    headline: 'Software Engineering Bootcamp',
                    description: 'Learn to build websites & mobile apps!',
                },
                {
                    href: '/courses/hardware/',
                    icon: 'fa fa-desktop',
                    headline: 'IT Hardware Bootcamp',
                    description:
                        'Do you like to build things with your hands? Come here to build the hardware of tomorrow!',
                },
                {
                    href: '/scholarships/',
                    icon: 'fa fa-school',
                    headline: 'College Scholarships',
                    description: '$4,000 Scholarships for technology majors!',
                },
            ],
            benefits: [
                {
                    icon: 'fas text-yellow fa-list-ul fa-2x',
                    headline: 'Curriculum Designed By Industry Experts',
                    description:
                        'Our Software Development and Computer Hardware Bootcamps use time-tested curriculums from Covalence and McKinsey Social Initiative, both have helped hundreds of students start new careers.',
                },
                {
                    icon: 'fas text-yellow fa-2x fa-chalkboard-teacher',
                    headline: 'Experienced Instructors',
                    description:
                        'Our instructors have track records as successful software engineers and IT specialists and have worked for some of the best companies in Birmingham.',
                },
                {
                    icon: 'fas text-yellow fa-2x fa-hands-helping',
                    headline: 'Professonal Services',
                    description:
                        "We know taking ~3 months to learn a new skill isn't an easy ask. So we make sure we help you with any needs that may arise during the course. Childcare? Doctor's appointment? Power bill? Put it on our tab.",
                },
                {
                    icon: 'fa text-yellow fa-2x fa-briefcase',
                    headline: 'Professional Development Training',
                    description:
                        "We put you in front of real employers! But before that we make sure you're ready by providing training and counseling on resumes, cover letters, interview preparation, and more!",
                },
                {
                    icon: 'fas text-yellow fa-2x fa-building',
                    headline: 'Access to a Wide Employer Network',
                    description:
                        "Innovate Bham partners with 30+ employers around the Magic City. We're doing our homework to find companies that are ready to hire new up and coming tech talent. Who knows? You may meet your next boss during the class!",
                },
                {
                    icon: 'fas text-yellow fa-2x fa-dollar-sign',
                    headline: 'Completely Free',
                    description:
                        "We are a grant funded nonprofit program that received ~$6 million to train students. We're giving it away, so come get it. Thanks, Obama!",
                },
            ],
        },
    };

    utils
        .findBlogFiles(req)
        .then((files) => {
            req.context.main.blogs = files.slice(0, 3);

            return utils.getPartnersWhoHired(true);
        })
        .then((partners) => {
            req.context.main.hired = partners.reduce(
                (acc, curr) => {
                    let currentSet: Array<any> = acc.splice(-1)[0];

                    curr.logo = `/static/img/logos/company-logos/${curr.logo}`;

                    if (currentSet.length === 4) {
                        acc.push(currentSet, [curr]);
                    } else {
                        currentSet.push(curr);
                        acc.push(currentSet);
                    }

                    return acc;
                },
                [[]],
            );
        })
        .catch(_.noop)
        .then(() => {
            next();
        });
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('home', req.context, (err, html) => {
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
