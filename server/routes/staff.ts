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
                    name: "Katherine Zachara",
                    position: "Executive Director",
                    headshotPath: "/static/img/staff/kz.jpg",
                    email: 'Katherine@innovatebham.com'
                },
                {
                    name: "Denita Bearden",
                    position: "Director of Operations",
                    headshotPath: "/static/img/staff/db.jpg",
                    email: 'Denita@innovatebham.com'
                },
                {
                    name: "Amy Jones",
                    position: "Marketing Manager",
                    headshotPath: "/static/img/staff/aj.jpg",
                    email: 'amy@innovatebham.com'
                },
                {
                    name: "Rachel Davis Smith",
                    position: "Operations Coordinator",
                    headshotPath: "/static/img/staff/rs.jpg",
                    email: ' '
                },
                {
                    name: "Brandie McMillian",
                    position: "Senior Case Manager",
                    headshotPath: "/static/img/staff/bm.jpg",
                    email: ' '
                },
                {
                    name: "Josh Hurn",
                    position: "Web Development Instructor",
                    headshotPath: "/static/img/staff/jh.jfif",
                    email: ' '
                },
                {
                    name: "Adrian Drane",
                    position: "Data Analytics Teaching Assistant",
                    headshotPath: "/static/img/staff/ad.jpg",
                    email: ' '
                },
                {
                    name: "Garrett Harris",
                    position: "Web Development Teaching Assistant",
                    headshotPath: "/static/img/staff/gh.jfif",
                    email: ' '
                },
                {
                    name: "Jake Lovett",
                    position: "Web Development Teaching Assistant",
                    headshotPath: "/static/img/staff/jl.jpg",
                    email: ' '
                },
                {
                    name: "Maggie Thompson",
                    position: "Program Analyst",
                    headshotPath: "/static/img/staff/mt.jpg",
                    email: ' '
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