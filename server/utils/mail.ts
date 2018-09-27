import * as sendgrid from 'sendgrid';

let helper = sendgrid.mail;

export function send(
    to: string,
    subject: string,
    message: string,
): Promise<any> {
    let sg = sendgrid(process.env.SENDGRID_API_KEY);
    let request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: {
            personalizations: [
                {
                    to: [
                        {
                            email: to,
                        },
                    ],
                    subject,
                },
            ],
            from: {
                email: 'form@innovatebham.com',
            },
            content: [
                {
                    type: 'text/plain',
                    value: message,
                },
            ],
        },
    });

    return sg.API(request);
}
