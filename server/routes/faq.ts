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
                            answer: 'The best way to contact us? Email us at info@innovatebham.com. You may also connect with us via Facebook Messenger or Instagram direct messages, but we cannot guarantee an immediate response.'
                        },
                        {
                            id: 21,
                            question: 'Is there a night course?',
                            answer: 'No. Not at this time.'
                        },
                        {
                            id: 22,
                            question: 'How much does the course cost?',
                            answer: 'Innovate Birmingham is funded through donations, grants and corporate partnerships. This is a no-cost program for participants.'
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
                            answer: 'You must be 17 or older, acquire at least a high school diploma or GED, be unemployed or under-employed, and a resident of the six counties of Central Alabama (Blount, Walker, Jefferson, Chilton, St. Clair, and Shelby).'
                        },
                        {
                            id: 2,
                            question: 'After submitting the application, what’s next?',
                            answer: 'You will complete a virtual interview. Once the interview has been reviewed and approved by our admissions team, you will be sent the pre-work for your selected course to complete and submit to our instructional team for review.'
                        },
                        // {
                        //     id: 3,
                        //     question: 'How will I know if I passed the TABE?',
                        //     answer: 'You will receive an email from our Admissions Director to schedule a phone screening.'
                        // },
                        // {
                        //     id: 4,
                        //     question: 'Is there a limit on TABE attempts?',
                        //     answer: 'Yes, you receive 3 attempts.'
                        // },
                        {
                            id: 5,
                            question: 'Can I apply for/participate in more than one program?',
                            answer: 'No.'
                        },
                        {
                            id: 6,
                            question: 'Will my application still be accepted if submitted after the upcoming deadline?',
                            answer: 'Yes, we accept applications on a rolling basis. However, if the bootcamp you apply for is full, you may be waitlisted and referred to a future session of that bootcamp.'
                        },
                        {
                            id: 7,
                            question: 'The program is a full commitment. Am I required to quit my job to participate?',
                            answer: 'Please keep in mind that participating in an Innovate Birmingham bootcamp is a full-time commitment. You are expected to attend class Monday-Friday, 9 a.m.-5 p.m. There will also be additional studying and classwork to complete. When considering whether you can commit to our program, it’s helpful to think of your participation in Innovate Birmingham in the same way you would think about a full-time job. However, we understand that emergencies and funding needs arise. We offer supportive services to help meet those needs.When you are accepted into the program, you will undergo a barrier assessment with our senior case manager, who will then develop a support plan. If you are already in the program when needs arise, we ask that you contact us immediately to let us know how we can assist you.'
                        },
                        {
                            id: 8,
                            question: 'Where are the classes held?',
                            answer: 'Currently, classes are held virtually. Any in--person events will be held at Innovation Depot, in downtown Birmingham.'
                        },
                        {
                            id: 10,
                            question: 'How long after submitting my application will it take to be contacted?',
                            answer: 'Please allow 7 business days.'
                        },
                        {
                            id: 11,
                            question: 'How can I ace the phone and in-person interview?',
                            answer: 'Be honest and be yourself. We recognize that people with all different types of backgrounds and experiences can be excellent IT professionals. We want to know more about YOU, so let yourself shine through. Trying to bend the truth or act like someone you’re not won’t help you. Truthfully, it’ll do the exact opposite.'
                        }
                    ]
                },
                {
                    title: "Employers and Partners",
                    entries: [
                        {
                            id: 12,
                            question: 'How do I become a partner?',
                            answer: 'Head to the contact page and select “Employers or Partnerships” as the reason you’re reaching out. You can also email katherine@innovatebham.com directly!'
                        },
                        {
                            id: 13,
                            question: 'Can I sponsor an event?',
                            answer: 'If you or your company is interested in sponsoring an Innovate Birmingham event, please contact us at info@innovatebham.com.'
                        },
                    ]
                },
                {
                    title: "Full-Stack Web Development Bootcamp",
                    entries: [
                        {
                            id: 14,
                            question: 'What do I learn in the Full-Stack Web Development Bootcamp?',
                            answer: 'Our full stack web development course includes introductions to HTML, CSS, and JavaScript. We cover the design, implementation, and functionality of a webpage as well as the server that supplies them with information. We also delve into specific frameworks and libraries across this area of software development including ReactJS, Angular, Express and others. On top of full-stack web development we cover database design, implementation and security. We realize this may sound intimidating at first glance, but our bootcamp is designed specifically for someone who has no coding experience. In 14 weeks, these terms and programs will all become familiar to you!'
                        },
                    ]
                },
                {
                    title: "Data Analytics Bootcamp",
                    entries: [
                        {
                            id: 15,
                            question: 'What do I learn in the Data Analytics Bootcamp?',
                            answer: 'Our data curriculum includes but is not limited to: SQL, Microsoft Access, Microsoft Excel, Tableau, and PowerBI. You will learn how to use these tools to gather data, pinpoint the important information, figure out the story the data tells and present the data so stakeholders can make informed business decisions. If you’ve never heard of these programs before, don’t worry — our bootcamp is designed for someone learning about data analysis from the ground up! In 14 weeks, you’ll become comfortable with all these terms and programs!'
                        },
                    ]
                },
                {
                    title: 'NCWIT Scholarships',
                    entries: [
                        {
                            id: 24,
                            question: 'How do I apply for The National Center for Women & Information Technology (NCWIT) scholarship?',
                            answer: 'We have partnered with The National Center for Women & Information Technology (NCWIT) to offer fully-funded scholarships for women in Central Alabama to pursue a tech career. To inquire about applying, please email admissions@innovatebham.com'
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
