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
            title: 'Media | Innovate Birmingham',
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
            networkPartners: [],
            employerPartners: []
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
    res.render('media', req.context, (err, html) => {
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
