import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Testimonials | Innovate Birmingham',
            meta: {
                description: 'Here are some testimonials from recent graduates.',
                images: [
                    {
                        url: '/static/img/logos/logo.png',
                    },
                ],
            },
        },
        main: {
            testimonials: [
                {
                    id: 1,
                    img: '/static/img/testimonials/Headshot - Aaron Hopkins- IAMBHAM.jpg',
                    firstName: 'Aaron',
                    lastName: 'Hopkins',
                    role: 'Developer at Protective Life',
                    messageSnippet: "Yes, Innovate Birmingham taught to me to code, but it was so much more than that. This course reshaped my entire life completely and set me on the path to ultimate success. \n I have a dream job at Protective Life, and I couldn't be happier. I am forever thankful to everyone involved and highly recommend it to anyone looking to start afresh.",
                    message: "My name is Aaron Hopkins, and I'm twenty-nine years old. I worked at Chick-fil-a with my dad for twelve years before he died of brain cancer. As a kid, I used to watch him build computers from scratch and design websites. He always tried to get me interested, but I thought it was too hard and that I just wasn't smart enough to do it. \n My father died way too young at fifty-eight and had so much he still wanted to accomplish. He simply ran out of time. Once the terrible ordeal of caring for him in his last days came to a bitter end, I was left steadily approaching thirty and still with no clue what I wanted to do with my life. I didn't want to keep putting my dreams aside to one day wake up and find out it was too late. \n My cousin, who has been coding all his life, recommended this class to me and I almost talked myself out of it. Looking back, I'm sure glad I didn't. It was the best decision that has ever happened to me. It challenged, stretched, and molded me into the man I am today. I went from a sad, lost individual, to one with a confidence and determination like I had never known before. \n Yes, Innovate Birmingham taught to me to code, but it was so much more than that. This course reshaped my entire life completely and set me on the path to ultimate success. I have a dream job at Protective Life, and I couldn't be happier. I am forever thankful to everyone involved and highly recommend it to anyone looking to start afresh."
                },
                {
                    id: 2,
                    img: '/static/img/testimonials/Headshot - Rob Hargrove - IAMBHAM.jpg',
                    firstName: 'Rob',
                    lastName: 'Hargrove',
                    role: 'Technician at Honda Manufacturing of Alabama',
                    messageSnippet: "I truly do appreciate Innovate Birmingham for the people I’ve met and the knowledge I’ve gained. I hope that others who find themselves in a rut or want a shot at a better quality of life have the opportunity to go through this program. \n Innovate Birmingham changed my life and helped me in becoming the person that I’ve always envisioned myself to be.",
                    message: "I heard about this program from my uncle, which at the time I was involved in the fitness industry working as a personal trainer/pilates instructor - something that I was very passionate about. Although I love fitness and the joy it brings to my life, I personally needed something new that would challenge me by pushing my boundaries mentally, and what else would be better than something that was completely foreign to me. \n There are two sides to this course, one was full stack software development, and the other was professional development. During professional development, we were able to hear from other IT professionals that gave us insight as to what we were preparing for and the great opportunity that was in our near future. \n  Towards the end of this program, we were split into groups and were assigned a final project to develop an app that could be used in today's society. For my final project, I was able to combine my passion for fitness and new my found passion for technology. My group developed a fitness app called SoloFit that allowed people to connect with fitness instructors and find the workout plan best suited for them. \n  One of the most important factors about this program is that they provided the opportunity for their students to interview with possible future employers. I definitely took advantage of this and was able to land a job at Honda Manufacturing of Alabama, LLC. \n I truly do appreciate Innovate Birmingham for the people I’ve met and the knowledge I’ve gained. I hope that others who find themselves in a rut or want a shot at a better quality of life have the opportunity to go through this program. Innovate Birmingham changed my life and helped me in becoming the person that I’ve always envisioned myself to be."
                },
                {
                    id: 3,
                    img: '/static/img/testimonials/Headshot - Josh Hurn - IAMBHAM.jpg',
                    firstName: 'Josh',
                    lastName: 'Hurn',
                    role: 'Teaching Assistant at Innovate Birmingham',
                    messageSnippet: "I’ve been surprised by the amount of driven and brilliant people I’ve met that participate in the program. It's incredible the work the staff puts in to equip each class in becoming great developers ready for the workforce.",
                    message: "I heard of Innovate Birmingham from a friend who showed interest in the course. I’ve always expressed an interest in technology, and Innovate Birmingham gave me the opportunity to explore that career field. At first, I was unsure of the impact that only a couple of months would do. I wondered how much could I actually accomplish in a few months when people go to college for years to get hired in this field? I learned so much about how to be a professional and also learned skills that have made me competitive in the job market in Birmingham. \n I’ve been surprised by the amount of driven and brilliant people I’ve met that participate in the program. It’s incredible the work the staff puts in to equip each class in becoming great developers ready for the workforce. I recommend anyone with a drive to get somewhere new and exciting to apply and see what happens when you put the work in. There is real opportunity here in Birmingham and the people at Innovate Birmingham are connecting the companies in need with the talent they want."
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
    res.render('testimonials', req.context, (err, html) => {
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
