import * as express from 'express';
import * as utils from '../utils';
import * as _ from 'lodash';
import { PARTNER_STATUS } from '../references';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Meet Our Team | Innovate Birmingham',
            meta: {
                description:
                    'Innovate Birmingham is a city-wide initiative. And we want to thank all the companies that make it possible.',
                images: [
                    {
                        url: '/static/img/media/hero.jpg',
                    },
                ],
            },
        },
        main: {
            team: [
                {
                    name: "Kellie Clark",
                    position: "Director of Campus Operations",
                    headshotPath: "static/img/staff/kc.jfif"
                },
                {
                    name: "Haley Kendrick, PhD.",
                    position: "Program Director",
                    headshotPath: "static/img/staff/hmk.jfif"
                },
                {
                    name: "Kayla King",
                    position: "Director of Admissions",
                    headshotPath: "static/img/staff/blank.jfif"
                },
                {
                    name: "Haley Hoppe",
                    position: "Directror of Engagement",
                    headshotPath: "static/img/staff/hh.jfif"
                },
                {
                    name: "Deva DeDios",
                    position: "Marketing Strategist",
                    headshotPath: "static/img/staff/dd.jfif"
                },
                {
                    name: "Rachel Davis Smith",
                    position: "Operations Coordinator",
                    headshotPath: "static/img/staff/rs.jfif"
                },
                {
                    name: "Brandie McGee",
                    position: "Senior Case Manager",
                    headshotPath: "static/img/staff/blank.jfif"
                },
                {
                    name: "Josh Hurn",
                    position: "Web Development Instructor",
                    headshotPath: "static/img/staff/jh.jfif"
                },
                {
                    name: "Adrian Drane",
                    position: "Data Analytics Teaching Assistant",
                    headshotPath: "static/img/staff/ad.jfif"
                },
                {
                    name: "Garrett Harris",
                    position: "Web Development Teaching Assistant",
                    headshotPath: "static/img/staff/gh.jfif"
                },
                {
                    name: "Jake Lovett",
                    position: "Web Development Teaching Assistant",
                    headshotPath: "static/img/staff/jl.jfif"
                }
            ]
        }
    };

    utils
        .getPartnersOfType(
            [PARTNER_STATUS.NETWORK, PARTNER_STATUS.EMPLOYER],
            true,
        )
        .then((partners) => {
            partners.filter(partner => {
                partner.__logoPath = `/static/img/logos/${partner.logo}`;

                if (partner.status.includes(PARTNER_STATUS.NETWORK)) {
                    req.context.main.networkPartners.push(partner);
                }

                if (partner.status.includes(PARTNER_STATUS.EMPLOYER)) {
                    req.context.main.employerPartners.push(partner);
                }
            })
            next();
        })
        .catch(() => {
            next();
        });
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('staff', req.context, (err, html) => {
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
