import * as sendgrid from "@sendgrid/mail";

export async function send(
    from: string,
    to: string,
    subject: string,
    message: string,
): Promise<any> {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    try {
        await sendgrid.send({
            to: to,
            from: from,
            subject: subject,
            text: message,
        });
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    }
}