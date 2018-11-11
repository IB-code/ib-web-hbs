import * as express from 'express';
import parse from '../middleware/parse';
import * as utils from '../utils';
import { noop } from 'lodash';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title:
                'Begin your career in tech. Come learn with us! | Innovate Birmingham',
            meta: {
                description:
                    "We are a grant funded tech training program. We're dedicated to creating a sustainable pipeline of tech talent for Birmingham, AL.",
                images: [
                    {
                        url: '/static/img/logos/logo.png',
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
                    description:
                        'Do you want to learn to code? Come here to learn to build mobile apps, servers, and databases.',
                },
                {
                    href: '/courses/data-analytics/',
                    icon: 'fas fa-cogs',
                    headline: 'Data Analytics Bootcamp',
                    description:
                        'Do you want to learn how to glean valuable insights and knowledge from data to help you make informed business decisions?',
                },
                {
                    href: '/scholarships/',
                    icon: 'fa fa-school',
                    headline: 'College Scholarships',
                    description:
                        'Are you a technology major at Jefferson State, Lawson State, or UAB? If so, you could be eligible for up to $4,000 in scholarship in money!',
                },
            ],
            benefits: [
                {
                    icon: 'fas text-yellow fa-list-ul fa-2x',
                    headline: 'Curriculum Designed By Industry Experts',
                    description:
                        'Our Software Development and Data Analytics Bootcamps use time-tested curriculums and have helped hundreds of students start new careers.',
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
                        "We know taking ~3 months to learn a new skill isn't an easy ask. So we do our best to help you with any needs that may arise during the course.",
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
                        "We are a grant funded nonprofit program that received ~$6 million to train students. We're giving it away, so come get it.",
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
        .catch(noop)
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
