import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'About Us | Innovate Birmingham',
            meta: {
                description: 'Want to know what we do? Look no further.',
            },
        },
        main: {
            reports: [
                {
                    title: 'Report #1',
                    img: 'report-one.png',
                    link:
                        'https://drive.google.com/file/d/14bq9UpLtk7zlAswe0bkhJI5BX6s7ihWy/view',
                },
                {
                    title: 'Report #2',
                    img: 'report-two.png',
                    link:
                        'https://drive.google.com/open?id=11IKoWgyxo8k-XLRylOi9JMeA4Rc8KRvJ',
                },
                {
                    title: 'Report #3',
                    img: 'report-three.png',
                    link:
                        'https://drive.google.com/file/d/0Bzq5RPc55vlbYW9qZmFHbUFfck0weUVVUDV4VkJ2Ry1NQVo4/view?usp=sharing',
                },
                {
                    title: 'Report #4',
                    img: 'report-four.png',
                    link:
                        'https://drive.google.com/open?id=1NNTnqBIJ3BEpkYgs8FRFOx6zXKjRdygj',
                },
                {
                    title: 'Report #5',
                    img: 'report-five.png',
                    link:
                        'https://drive.google.com/file/d/1zba6gHmkWRR_kfMTueRLsRl_XD6eFh71/view?usp=sharing',
                },
            ],
        },
    };

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('about', req.context, (err, html) => {
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
