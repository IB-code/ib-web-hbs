import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Accelerated Career Development Programs Innovate Birmingham | Innovate Birmingham',
            meta: {
                description:
                    'Other accelerated, bootcamp related programs and classes offered by higher learning institutions in Jefferson County.',
                images: [
                    {
                        url: '/static/img/accelerated/hero.jpg',
                    },
                ],
            },
        },
        main: {
            courses: [
                {
                    id: 1,
                    title: 'Full Stack Web Development with PHP',
                    img: '/static/img/accelerated/jeffstate.jpg',
                    courseLength: 'Mon, Tues, Thurs (12 weeks)',
                    courseTime: '6 pm - 9 pm',
                    courseLocation: 'Jeff State',
                    courseCost: '',
                    courseDescription: 'Full Stack Developers are developers that design complete websites. Companies rely on these developers to build, support and maintain their web applications. Set yourself apart from the rest when you train as a Full Stack Developer! This program provides 15 weeks of traditional classroom instruction designed to aid participants in gaining the skills necessary to secure an entry-level position as a Front-End and Back-End web developer in today’s job market.',
                    courseCertifications: 'none'
                },
                {
                    id: 2,
                    title: 'I.T. Help Desk Support',
                    img: '/static/img/accelerated/jeffstate.jpg',
                    courseLength: '',
                    courseTime: 'N/A',
                    courseLocation: 'Jeff State',
                    courseCost: '',
                    courseDescription: 'This course provides an overview of information technology that illuminates IT skills and knowledge needed to perform basic tasks commonly performed by end-users and entry-level IT professionals. This includes features of operation systems, troubleshooting, problem solving, successful communication with users, determining a client’s specific needs, and hardware/software fundamentals. The course also provides opportunities to develop the skills to establish network connectivity, database and computer programming, and best practices to secure data and enhance web security. This course is an excellent resource for those in--or preparing for--the technical-support field.',
                    courseCertifications: 'CompTIA IT Fundamentals (ITF+) certification '
                },
                {
                    id: 3,
                    title: 'Comp TIA A+ Certification Prep',
                    img: '/static/img/accelerated/jeffstate.jpg',
                    courseLength: '',
                    courseTime: '6:30 pm - 9:30 pm',
                    courseLocation: 'Jeff State',
                    courseCost: '',
                    courseDescription: 'Set yourself apart from the rest when you train as a Computer Technician! This program provides 21 weeks of traditional classroom instruction to lay a solid foundation for students to sit for and pass the Computing Technology Industry Association (CompTIA) certification. The comprehensive curriculum is approved by ComptTIA and is specifically designed to prepare students to work with hardware, software, networks, and security issues, gain knowledge and skills needed to earn CompTIA A+ certification.',
                    courseCertifications: 'CompTIA A+ '
                },
                {
                    id: 4,
                    title: 'SCRUM',
                    img: '/static/img/accelerated/jeffstate.jpg',
                    courseLength: 'Mon, Wed (Mar 9 - Apr 14)',
                    courseTime: '6:30 pm - 8:30 pm',
                    courseLocation: 'Jeff State',
                    courseCost: '',
                    courseDescription: 'The Scrum Fast-Track training course will lay the foundation for understanding and building successful agile teams using the Scrum Framework. Topics include the concepts, principles and methods of the Scrum framework.',
                    courseCompetencies: 'Understand the Agile Manifesto. Describe Scrum Framework. Define empirical process control and list the three pillars. Understand Scrum roles, ceremonies and artifacts. Plan, execute, monitor and track Scrum projects. Discuss how the Daily Scrum differs from a traditional status meeting. Understand advanced Scrum topics. Absorb Agile philosophy and gain deep knowledge of Scrum. Effectively apply Scrum in your organizations.',
                    courseCertifications: 'SCRUM Master Certification  '
                },
                {
                    id: 5,
                    title: 'Cybersecurity',
                    img: '/static/img/accelerated/jeffstate.jpg',
                    courseLength: 'Tues, Thurs (14 weeks)',
                    courseTime: '',
                    courseLocation: 'Jeff State',
                    courseCost: '',
                    courseDescription: 'This course provides the foundation for understanding the key issues associated with protecting information assets. The purpose of the course is to provide the student with an overview of the field of information security and assurance.',
                    courseCompetencies: 'Determine the levels of protection and response to security incidents. Design a consistent, reasonable information security system, with appropriate intrusion detection and reporting features. Identify the spectrum of security activities, methods, methodologies, and procedures. Perform inspection and protection of information assets. Detect and react to threats to information assets. Examine pre- and post-incident procedures. Provide technical and managerial responses.',
                    courseCertifications: 'Security +'
                },
                {
                    id: 6,
                    title: 'Java',
                    img: '/static/img/accelerated/jeffstate.jpg',
                    courseLength: 'N/A (12 weeks)',
                    courseTime: '',
                    courseLocation: 'Jeff State',
                    courseCost: '',
                    courseDescription: '',
                    courseCertifications: ''
                },
                {
                    id: 7,
                    title: 'UAB Coding Academy',
                    note: '(currently enrolled UAB students only)',
                    img: '/static/img/accelerated/uab.png',
                    courseLength: 'Mon, Wed (Mar 9 - Apr 14)',
                    courseTime: '6:30 pm - 9:30 pm',
                    courseLocation: 'UAB',
                    courseCost: '',
                    courseDescription: 'To provide young entrepreneurs the basis of what the software development process entails. What methodologies and tools are more commonly used and give them enough insight to be able to apply this knowledge towards their entrepreneurial ideas.',
                    courseCertifications: 'none'
                },
                {
                    id: 8,
                    title: 'Agile',
                    img: '/static/img/accelerated/uab.png',
                    courseLength: '',
                    courseTime: '',
                    courseLocation: 'UAB',
                    courseCost: '',
                    courseDescription: 'The Agile Certified Practitioner (ACP) is one of the newest certifications offered by PMI and is expected to become the industry standard certification for Agile over the next few years. In addition to preparing you for the exam, this Agile Project Management course is designed to teach you',
                    courseCertifications: ''
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
    res.render('accelerated', req.context, (err, html) => {
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
