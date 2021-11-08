import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Our Alums | Innovate Birmingham',
            meta: {
                description: 'Hear from our Alumni Council and learn about our graduates.',
                images: [
                    {
                        url: '/static/img/home/hero.png',
                    },
                ],
            },
        },
        main: {
            newsletters: [
                {
                    dateReleased: "October 2021",
                    link: "https://app.donorview.com/Communication/View?prm=jtu-ucf-wYu5bemONAtGZtW22OEn8BkRWDMDVmrr-pLSHGP2dUrRoe-okiHszLimK8NTOjcnYDO-_SbcnHPXvbIvdFXShKTFYcQOrTvf3yFCMMqR9ExXA3sFPThbNU5Mn7lypsOp4FCH0u1XV0fUwlf46JPs1eRBaqNYHwC33ddiaxppbIe_hi86t0NXwF6bkv6dH1FFZN2Ot7IAVUuIFp0nNhbVGMCP0znji0oaRSk1"
                },
                {
                    dateReleased: "September 2021",
                    link: "https://app.donorview.com/Communication/View?prm=jtu-ucf-wYu5bemONAtGZtW22OEn8BkRWDMDVmrr-pLSHGP2dUrRoe-okiHszLimK8NTOjcnYDO-_SbcnHPXvbIvdFXShKTFYcQOrTvf3yGwAGLRf0m1wPqycKDemjSZ28IeA_gbpXJu_fc4EEkDDlouPwamcUeGC43mAbqfP9Q-P9GjWIrV94-psZjz3CMk3tYY5ibemRBy3VBrhhbOjezVPTY2-4VEkrrSX8PQOgk1"
                },
                {
                    dateReleased: "August 2021",
                    link: "https://app.donorview.com/Communication/View?prm=jtu-ucf-wYu5bemONAtGZtW22OEn8BkRWDMDVmrr-pLSHGP2dUrRoe-okiHszLimK8NTOjcnYDO-_SbcnHPXvbIvdFXShKTFYcQOrTvf3yHvbiwE_VDVVKE79qCNW-W507VeaA0lRo0gD5Wky7bwSxdLlKJvGxhAlGFqhUnRC9NBzrsrpUca4rZORX0b_FZfSUalrhF39zINMjwitgRAcjxbkqHOcsi4nc60BrT2-141"
                },
                {
                    dateReleased: "July 2021",
                    link: "https://app.donorview.com/Communication/View?prm=jtu-ucf-wYu5bemONAtGZtW22OEn8BkRWDMDVmrr-pLSHGP2dUrRoe-okiHszLimK8NTOjcnYDO-_SbcnHPXvbIvdFXShKTFYcQOrTvf3yE3J4jPzGrni8P1kZ4-d3yFa6IT6n3zEbmJQNBALEX2ZkwolYANcoQo8lN5yG4oTkKNW7_NIla3r9wzvA8ppkgeb1ZXGsOo1wksAVheKfgNGz_9dcJwxxXpAF1sdNoCvCs1"
                },
                {
                    dateReleased: "June 2021",
                    link: "https://app.donorview.com/Communication/View?prm=jtu-ucf-wYu5bemONAtGZtW22OEn8BkRWDMDVmrr-pLSHGP2dUrRoe-okiHszLimK8NTOjcnYDO-_SbcnHPXvbIvdFXShKTFYcQOrTvf3yEuU1HDaDLc7t8jl7P4KhTIXw39cRrf0AhXxWkhvSU7iNN1xWpYTlXTGQPikA8vVG6wV_u9QPodgqGcmCfwrhyI6A7w9-qeZQlmMzIARwiT9t_H8LVo0Kbqe31XrEnjUjM1"
                },
                {
                    dateReleased: "May 2021",
                    link: "https://app.donorview.com/Communication/View?prm=jtu-ucf-wYu5bemONAtGZtW22OEn8BkRWDMDVmrr-pLSHGP2dUrRoe-okiHszLimK8NTOjcnYDO-_SbcnHPXvbIvdFXShKTFYcQOrTvf3yGlQ-lZRvTThGCoHMUOzNJUDQvCCVjxvJxkDJVcvnu7HvL_MlkZWtfy5ci3znbBkzF8DF3v78npJRVniVsJ2Aej7OBnDvbIL-K3E35sNQWpayxzvgiOlqAkFiffq3sCXnw1"
                },
                {
                    dateReleased: "April 2021",
                    link: "https://app.donorview.com/Communication/View?prm=jtu-ucf-wYu5bemONAtGZtW22OEn8BkRWDMDVmrr-pLSHGP2dUrRoe-okiHszLimK8NTOjcnYDO-_SbcnHPXvbIvdFXShKTFYcQOrTvf3yH1mbyzyX2yu17OmOcGxUO9wt4d7qIibZOvjsu3nbsinvp4xPZFd2pz9-Bwd4b47KccD8I1cq727keifpoGqBNiFIGUNhIwCUwBMB1S321aRf9oPqfBmnrrbe_rX1iqH4I1"
                },
                {
                    dateReleased: "March 2021",
                    link: "https://app.donorview.com/Communication/View?prm=jtu-ucf-wYu5bemONAtGZtW22OEn8BkRWDMDVmrr-pLSHGP2dUrRoe-okiHszLimK8NTOjcnYDO-_SbcnHPXvbIvdFXShKTFYcQOrTvf3yFu4DArJFzGEr-al3gAZGbYEL2GVKm2TwQjlV2jmT0HhYZPGAZRoOOMNWGXf5eV9m_AbiBdPC6PXGZaebcfW9O_aVrXoeS0O8jTTo4vbhrJx0y9PTGH4AJzmfk4Xq3sfV01"
                },
            ]
        },
    };

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render("alumni", req.context, (err, html) => {
        parse(req, req.url, html).then(
            (html) => {
                res.send(html);
            },
            (err) => {
                next(err);
            },
        );
    });
};
