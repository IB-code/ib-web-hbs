import * as sendgrid from 'sendgrid';

let helper = sendgrid.mail;

export function send(
    from: string,
    to: string,
    subject: string,
    message: string,
): Promise<any> {
    try {
        let sg = sendgrid("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");
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
                    email: from,
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
    } catch (err) {
        console.log(err);
    }
}
