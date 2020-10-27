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
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in venenatis ex. Sed leo ligula, imperdiet ut dignissim vel, efficitur id magna. Nunc blandit faucibus massa, in consectetur diam accumsan faucibus. Vivamus a lacus a lacus vestibulum molestie. Pellentesque ac sollicitudin massa, eget dapibus eros. Nulla efficitur aliquet varius. Nullam sodales purus quam, nec sollicitudin diam euismod molestie. Ut elementum sapien ac urna bibendum, quis auctor elit suscipit. Curabitur sed lacus vitae ex efficitur varius sed quis tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam aliquet massa elit, et pharetra nunc lacinia nec.Aenean auctor, metus vitae lobortis rhoncus, libero sapien pulvinar tellus, eu maximus velit nisi ultrices ante.Vivamus ut ligula quam.Phasellus blandit, mi non tincidunt consequat, nulla risus condimentum tellus, vitae maximus leo augue sit amet sem.Integer sagittis eu ante in pharetra.Duis odio est, dignissim sit amet metus lobortis, viverra malesuada erat.Mauris cursus egestas interdum.Phasellus id ligula luctus, tempor nisl id, consectetur massa.Phasellus hendrerit, turpis quis dictum pellentesque, arcu nibh consectetur risus, quis sollicitudin leo purus quis libero.Nullam lacinia nec elit eu facilisis.Nulla sed cursus urna.",
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