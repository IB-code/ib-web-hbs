import * as express from 'express';
import * as path from 'path';
import * as utils from '../utils';
import * as _ from 'lodash';
import config from '../config';
import { PARTNER_STATUS, PARTNERS } from '../references';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Partners | Innovate Birmingham',
            meta: {
                description:
                    'Innovate Birmingham is a city-wide initiative. And we want to thank all the companies that make it possible.',
                images: [
                    {
                        url: '/static/img/home/hero.png',
                    },
                ],
            },
        },
        main: {},
    };

    utils
        .getPartnersOfType(
            [PARTNER_STATUS.NETWORK, PARTNER_STATUS.EMPLOYER],
            true,
        )
        .then((partners) => {
            req.context.main = Object.assign(
                {},
                req.context.main,
                partners.reduce(
                    (acc, partner) => {
                        partner.__logoPath = `/static/img/logos/${
                            partner.logo
                        }`;

                        if (partner.status.includes(PARTNER_STATUS.NETWORK)) {
                            acc.networkPartners.push(partner);
                        }

                        if (partner.status.includes(PARTNER_STATUS.EMPLOYER)) {
                            acc.employerPartners.push(partner);
                        }

                        return acc;
                    },
                    {
                        employerPartners: [],
                        networkPartners: [],
                    },
                ),
            );

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
    res.render('partners', req.context, (err, html) => {
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
