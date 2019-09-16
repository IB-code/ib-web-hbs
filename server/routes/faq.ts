import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'FAQ | Innovate Birmingham',
            meta: {
                description: 'These are frequent questions we receive at Innovate Birmingham',
                images: [
                    {
                        url: '/static/img/logos/logo.png',
                    },
                ],
            },
        },
        main: {
            categories: [
                {
                    title: "General",
                    entries: [
                        {
                            id: 16,
                            question: 'What is Innovate Birmingham?',
                            answer: 'Innovate Birmingham was created to be one solution to the tech talent gap that exists in our region. There are more tech jobs than individuals with the technology skills necessary to fulfill those jobs. We upskill young adults to meet technology market needs.'
                        },
                        {
                            id: 17,
                            question: 'I’m a beginner, is this course right for me?',
                            answer: 'Yes! With hardwork and an interest in development or data analytics, you can be successful in our program.'
                        },
                        {
                            id: 18,
                            question: 'Am I guaranteed a job?',
                            answer: 'Ultimately, securing a new job is up to you. Our technical and professional development skills training will help you prepare, and you will get actual face-time with our employer partners throughout the program. We will do our part to make sure you’re ready to put your best foot forward, but you are not guaranteed a job.'
                        },
                        {
                            id: 19,
                            question: 'I just finished college, can I do the bootcamp now?',
                            answer: 'If you have a college degree, you must be under- or unemployed in your field of study for at least six months before being considered for admission.'
                        },
                        {
                            id: 20,
                            question: 'What is the expected response time for application inquiries or concerns?',
                            answer: 'Due to the high volume of applications we receive on a rolling basis, please allow 7 business days for a response. The best way to contact us? Connect on Facebook Messenger.'
                        },
                        {
                            id: 21,
                            question: 'Is there a night course?',
                            answer: 'No. Not at this time.'
                        },
                        {
                            id: 22,
                            question: 'How much does the course cost?',
                            answer: 'Innovate Birmingham is fully funded by the U.S. Department of Labor.'
                        },
                        {
                            id: 23,
                            question: 'Why the six county region?',
                            answer: 'We work with the Alabama Career Centers and Workforce Councils, which operate regionally. We serve workforce region 4, or the “Central Six counties.”'
                        }
                    ]
                },
                {
                    title: "Admissions",
                    entries: [
                        {
                            id: 1,
                            question: 'How do I know if I’m eligible?',
                            answer: ' If you are 17 and older, acquire at least a high school diploma or GED, unemployed or under-employed, and a resident of the six counties of Central Alabama (Blount, Walker, Jefferson, Chilton, St. Clair, and Shelby).'
                        },
                        {
                            id: 2,
                            question: 'After submitting the application, what’s next?',
                            answer: 'You will complete the TABE, a competency test of basic math and reading skills. You will then be sent the pre-work for your selected course to complete and return to our instructional team to review.'
                        },
                        {
                            id: 3,
                            question: 'How will I know if I passed the TABE?',
                            answer: 'You will receive an email from our Admissions Director to schedule a phone screening.'
                        },
                        {
                            id: 4,
                            question: 'Is there a limit on TABE attempts?',
                            answer: 'Yes, you receive 3 attempts.'
                        },
                        {
                            id: 5,
                            question: 'Can I apply for/participate in more than one program?',
                            answer: 'No.'
                        },
                        {
                            id: 6,
                            question: 'Will my application still be accepted if submitted after the upcoming deadline?',
                            answer: 'Yes, we accept applications on a rolling basis.'
                        },
                        {
                            id: 7,
                            question: 'The program is a full commitment. Am I required to quit my job to participate?',
                            answer: 'No, but it is highly recommended as this is a full-time bootcamp.'
                        },
                        {
                            id: 8,
                            question: 'Where are the classes held?',
                            answer: 'We are located at Innovation Depot, in downtown Birmingham.'
                        },
                        {
                            id: 9,
                            question: 'Where are the classes held?',
                            answer: 'We are located at Innovation Depot, in downtown Birmingham.'
                        },
                        {
                            id: 10,
                            question: 'How long after submitting my application and TABE will it take to be contacted?',
                            answer: 'Please allow 5 business days.'
                        },
                        {
                            id: 11,
                            question: 'How can I ace the phone and in-person interview?',
                            answer: 'Be honest. We recognize that people with all different types of experiences can be excellent IT professionals. We want to know more about you, so let yourself shine through. Trying to bend the truth or have your mom help you answer questions isn’t going to help you, actually, it’ll do the opposite.'
                        }
                    ]
                },
                {
                    title: "Employers and Partners",
                    entries: [
                        {
                            id: 12,
                            question: 'How do I become a partner?',
                            answer: 'Head to the contact page and select the “employers and partnerships” as the reason you’re reaching out.'
                        },
                        {
                            id: 13,
                            question: 'Can I sponsor an event?',
                            answer: 'If you or your company is interested in sponsoring an innovate birmingham event, please contact us at info@innovatebham.com.'
                        },
                    ]
                },
                {
                    title: "Software Development Bootcamp",
                    entries: [
                        {
                            id: 14,
                            question: 'What do I learn in Software Dev?',
                            answer: 'Our full stack web development course includes introductions to HTML, CSS, and JavaScript. We cover the design, implementation, and functionality of a webpage as well as the server that supplies them with information. We also delve into specific frameworks and libraries across this area of software development including ReactJS, Angular, Express and others. On top of full-stack web development we cover database design, implementation and security.'
                        },
                    ]
                },
                {
                    title: "Data Analytics Bootcamp",
                    entries: [
                        {
                            id: 15,
                            question: 'What do I learn in Data Analytics?',
                            answer: 'Our data curriculum includes but is not limited to: SQL, Microsoft Access, Microsoft Excel, Tableau, and PowerBI. You will learn how to use these tools to understand data and communicate insights to inform business decisions.'
                        },
                    ]
                },
                {
                    title: 'Innovate Birmingham Scholarships',
                    entries: [
                        {
                            id: 24,
                            question: 'Once accepted for the scholarship, will I receive my funds in time for the semester needed?',
                            answer: 'Due to the scholarship application having a rolling admission, it all depends on when you apply. If you complete the process and are accepted prior to your student billing due date, we do our best to ensure that your funds are deposited by the time your student balance is due.'
                        }
                    ]
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
    res.render('faq', req.context, (err, html) => {
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
