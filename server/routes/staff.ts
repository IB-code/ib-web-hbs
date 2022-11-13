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
                    email: 'katherine@innovatebham.com'
                },
                {
                    name: "Denita Bearden",
                    position: "Director of Operations",
                    headshotPath: "/static/img/staff/db.jpg",
                    email: 'denita@innovatebham.com'
                },
                {
                    name: "Rachel Davis Smith",
                    position: "Program Manager",
                    headshotPath: "/static/img/staff/rs.jpg",
                    email: 'rachel@innovatebham.com'
                },
                {
                    name: "Maggie Thompson",
                    position: "Communications Manager",
                    headshotPath: "/static/img/staff/mt.jpg",
                    email: 'maggie@innovatebham.com'
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
