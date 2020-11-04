import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Blog | Innovate Birmingham',
            meta: {
                description: 'Choose your path to a career in technology.',
                images: [
                    {
                        url: '/static/img/home/hero.png',
                    }
                ]
            }
        },
        main: {
            blogs: [
                {
                    title: "This is a test blog title",
                    leadIn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in venenatis ex. Sed leo ligula, imperdiet ut dignissim vel, efficitur id magna. Nunc blandit faucibus massa, in consectetur diam accumsan faucibus. Vivamus a lacus a lacus vestibulum molestie. Pellentesque ac sollicitudin massa, eget dapibus eros. Nulla efficitur aliquet varius...",
                    link: "/blog/temp"
                },
                {
                    title: "This is a test blog title",
                    leadIn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in venenatis ex. Sed leo ligula, imperdiet ut dignissim vel, efficitur id magna. Nunc blandit faucibus massa, in consectetur diam accumsan faucibus. Vivamus a lacus a lacus vestibulum molestie. Pellentesque ac sollicitudin massa, eget dapibus eros. Nulla efficitur aliquet varius...",
                    link: "/blog/temp"
                },
                {
                    title: "This is a test blog title",
                    leadIn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in venenatis ex. Sed leo ligula, imperdiet ut dignissim vel, efficitur id magna. Nunc blandit faucibus massa, in consectetur diam accumsan faucibus. Vivamus a lacus a lacus vestibulum molestie. Pellentesque ac sollicitudin massa, eget dapibus eros. Nulla efficitur aliquet varius...",
                    link: "/blog/temp"
                }
            ]
        }
    };

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('blogs', req.context, (err, html) => {
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