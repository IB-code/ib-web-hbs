import * as express from 'express';
import * as path from 'path';
import * as utils from '../utils';
import * as _ from 'lodash';
import config from '../config';
import { PARTNER_STATUS } from '../references';
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
            },
        },
        main: {},
    };

    utils.getNetworkorEmployerPartners(true).then((partners) => {
        req.context.main = Object.assign(
            {},
            req.context.main,
            partners.reduce(
                (acc, curr) => {
                    if (curr.name.toLowerCase() === 'generation') {
                        curr.logo = `/static/img/logos/${curr.logo}`;
                    } else {
                        curr.logo = `/static/img/logos/company-logos/${
                            curr.logo
                        }`;
                    }

                    if (curr.status.includes(PARTNER_STATUS.NETWORK)) {
                        acc.networkPartners.push(curr);
                    }

                    if (curr.status.includes(PARTNER_STATUS.EMPLOYER)) {
                        acc.employerPartners.push(curr);
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
