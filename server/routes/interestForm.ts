import * as express from 'express';
import * as os from "os"; // importing this to for end-of-line in emails. Heroku is run on Linux and I can't make the new-lines work without this.
import { send } from "../utils/mail";

export async function handleApplicationInterestResp(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    try {
        const { name, email } = req.body;

        return send(
            "Innovate Birmingham <no-reply@innovatebham.com>",
            email,
            "Thank You For Your Interest in Innovate Birmingham!",
            `Dear ${name}, ${os.EOL} ${os.EOL} Thank you for your interest in Innovate Birmingham's programs. If you did not complete the full application, please follow this link to continue on with your full application to one of our bootcamps: https://tinyurl.com/y3k54lcn. If you have any questions, please contact our Director of Admissions at kayla@innovatebham.com.${os.EOL} ${os.EOL}Sincerely,${os.EOL}The Innovate Birmingham Team`,
        );
    } catch (err) {
        console.error(err);
        res.send(err);
    }
}