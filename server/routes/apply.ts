import * as express from 'express';
import parse from '../middleware/parse';
import { send } from "../utils/mail";
import * as moment from "moment";
import * as os from "os"; // importing this to for end-of-line in emails. Heroku is run on Linux and I can't make the lines work without this.

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Apply | Innovate Birmingham',
            meta: {
                description: 'Choose your path to a career in technology.',
                images: [
                    {
                        url: '/static/img/home/hero.png',
                    }
                ]
            }
        }
    };

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('apply', req.context, (err, html) => {
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

export async function handleApplicationEmail(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    const { name, email: applicantEmail, county, date_of_birth } = req.body,
        age = moment().diff(date_of_birth, 'years', false),
        origin = req.get('origin');

        res.setHeader('Access-Control-Allow-Origin', origin);
        console.log(res.getHeaders());

    if (age >= 17) {
        if (county === "Jefferson" || county === "Shelby" || county === "St. Clair" || county === "Blount" || county === "Walker" || county === "Chilton") {
            try {
                return send(
                    "Innovate Birmingham <kalya@innovatebham.com>",
                    applicantEmail,
                    "Thank You For Applying to Innovate Birmingham",
                    `Dear ${name}, ${os.EOL} ${os.EOL} Thank you for submitting your application for Innovate Birmingham! To continue with the application process, you must complete a video interview here. You have 2 weeks from the date of your application to complete the interview. After completing the interview, please complete the questionnaire using this Survey link. These additional steps are vital to your application. After you successfully complete the video interview, our Admissions team will review your application and follow up within 2 weeks.  Please contact kayla@innovatebham.com if you have any questions during the application process. ${os.EOL} ${os.EOL} Sincerely, The Innovate Bham Team`,
                );
            } catch (error) {
                console.log(error);
                res.send(error);
            }
        } else {
            try {
                return send(
                    "Innovate Birmingham <kalya@innovatebham.com>",
                    applicantEmail,
                    "Thank You For Applying to Innovate Birmingham",
                    `Dear ${name}, ${os.EOL}${os.EOL} Thank you for your interest in, and application to, Innovate Birmingham. Based on the information you provided in your application, you are currently ineligible for Innovate Birmingham programs. The eligibility requirements for the program include: ${os.EOL}    - Reside in Blount, Chilton, Jefferson, Shelby, St. Clair, or Walker county${os.EOL}    - Minimum age 17${os.EOL}    - Under- or un-employed${os.EOL}${os.EOL}You may be deemed ineligible for failing to meet any of the above minimum requirements. Thank you again for your interest in innovating Birmingham. Due to ineligibility, your application will no longer be considered for admission. If your circumstances related to eligibility change, you may re-apply for our program in the future.${os.EOL}${os.EOL}You may also consider seeking training programs provided by our partner agencies, including:${os.EOL}   - Career prep and placement via The Dannon Project, Hope Inspired Ministries, Dynamic Educational Systems, Inc. GED prep, Goodwill Industries, and Alabama Career Centers,${os.EOL}   - Local IT training opportunities at Jefferson State Community College, Lawson State Community College, the University of Alabama at Birmingham, EdFarm, Covalence, TrueCoders, Coding Solutions, and Birmingham Can Code, and${os.EOL}   - Online resources via Codecademy, Udemy, LinkedIn Learning, Udacity, Massive Open Online Courses (MOOCs), freeCodeCamp, HackerRank, and edabit.${os.EOL}${os.EOL}Again, thank you again for your interest in Innovate Birmingham. If you have questions concerning your application or our programs, please reach out to Kayla King at kayla@innovatebham.com.${os.EOL}${os.EOL}Respectfully,${os.EOL}The Innovate Birmingham Team
            `,
                );
            } catch (error) {
                console.log(error);
                res.send(error);
            }
        }
    } else {
        try {
            return send(
                "Innovate Birmingham <kalya@innovatebham.com>",
                applicantEmail,
                "Thank You For Applying to Innovate Birmingham",
                `Dear ${name}, ${os.EOL}${os.EOL} Thank you for your interest in, and application to, Innovate Birmingham. Based on the information you provided in your application, you are currently ineligible for Innovate Birmingham programs. The eligibility requirements for the program include: ${os.EOL}    - Reside in Blount, Chilton, Jefferson, Shelby, St. Clair, or Walker county${os.EOL}    - Minimum age 17${os.EOL}    - Under- or un-employed${os.EOL}${os.EOL}You may be deemed ineligible for failing to meet any of the above minimum requirements. Thank you again for your interest in innovating Birmingham. Due to ineligibility, your application will no longer be considered for admission. If your circumstances related to eligibility change, you may re-apply for our program in the future.${os.EOL}${os.EOL}You may also consider seeking training programs provided by our partner agencies, including:${os.EOL}   - Career prep and placement via The Dannon Project, Hope Inspired Ministries, Dynamic Educational Systems, Inc. GED prep, Goodwill Industries, and Alabama Career Centers,${os.EOL}   - Local IT training opportunities at Jefferson State Community College, Lawson State Community College, the University of Alabama at Birmingham, EdFarm, Covalence, TrueCoders, Coding Solutions, and Birmingham Can Code, and${os.EOL}   - Online resources via Codecademy, Udemy, LinkedIn Learning, Udacity, Massive Open Online Courses (MOOCs), freeCodeCamp, HackerRank, and edabit.${os.EOL}${os.EOL}Again, thank you again for your interest in Innovate Birmingham. If you have questions concerning your application or our programs, please reach out to Kayla King at kayla@innovatebham.com.${os.EOL}${os.EOL}Respectfully,${os.EOL}The Innovate Birmingham Team
            `,
            );
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }
}