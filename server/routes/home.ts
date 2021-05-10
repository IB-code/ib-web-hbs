import * as express from 'express';
import parse from '../middleware/parse';
import * as utils from '../utils';
import { noop } from 'lodash';
import { PARTNER_STATUS, IPartner } from '../references';

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
            programs: [
                {
                    // href: '/courses/software/',
                    icon: 'fa fa-road',
                    headline: 'Accelerated Training',
                    description:
                        'Fast-track career development programs designed to be completed in less than four months',
                    url: "https://innovatebham.com/program"
                },
                {
                    // href: '/courses/data-analytics/',
                    icon: 'fas fa-suitcase',
                    headline: 'Apprenticeships & Internships',
                    description:
                        'Pre-Apprenticeship training program to prepare for apprenticeship-to-hire careers',
                    url: "https://innovatebham.com/apprenticeship"
                },
                // {
                //     // href: '/scholarships/',
                //     icon: 'fa fa-graduation-cap',
                //     headline: 'Degrees and Certificate Programs',
                //     description:
                //         'For tech-related full-time students at UAB, Jeff State, and Lawson State',
                //     url: "https://innovatebham.com/degrees-and-certifications/"
                // },
            ],
            benefits: [
                {
                    icon: 'fas text-yellow fa-list-ul fa-2x',
                    headline: 'Curriculum Designed By Industry Experts',
                    description:
                        'Our Full Stack Web Development and Data Analytics Bootcamps use time-tested curriculums and have helped hundreds of students start new careers.'
                },
                {
                    icon: 'fas text-yellow fa-2x fa-chalkboard-teacher',
                    headline: 'Experienced Instructors',
                    description:
                        'Our instructors have track records as successful software engineers and IT specialists and have worked for some of the best companies in Birmingham.'
                },
                {
                    icon: 'fas text-yellow fa-2x fa-hands-helping',
                    headline: 'Professional Services',
                    description:
                        "We know taking 14 weeks to learn a new skill isn't an easy ask. So we do our best to help you with any needs that may arise during the course."
                },
                {
                    icon: 'fa text-yellow fa-2x fa-briefcase',
                    headline: 'Professional Development Training',
                    description:
                        "We put you in front of real employers! But before that we make sure you're ready by providing training and counseling on resumes, cover letters, interview preparation, and more!"
                },
                {
                    icon: 'fas text-yellow fa-2x fa-building',
                    headline: 'Access to a Wide Employer Network',
                    description:
                        "Innovate Bham partners with 30+ employers around the Magic City. We're doing our homework to find companies that are ready to hire new up and coming tech talent. Who knows? You may meet your next boss during the class!"
                },
                {
                    icon: 'fas text-yellow fa-2x fa-dollar-sign',
                    headline: 'Completely Free',
                    description:
                        "We are a nonprofit organization that provides our services for free, so you can focus on skill building."
                }
            ],
        },
    };

    utils
        .getPartnersOfType([PARTNER_STATUS.HIRED], true)
        .then((partners: Array<IPartner>) => {
            const accumulated: Array<Array<IPartner>> = [];
            let packet: Array<IPartner> = [];

            partners.forEach((partner: IPartner) => {
                partner.__logoPath = `/static/img/logos/${partner.logo}`;

                if (packet.length === 4) {
                    accumulated.push(packet);
                    packet = [];
                }

                packet.push(partner);
            });

            if (packet.length !== 0) {
                accumulated.push(packet);
            }

            req.context.main.hired = accumulated;
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
