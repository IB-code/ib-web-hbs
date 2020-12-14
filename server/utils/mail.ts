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

    // let request = sg.emptyRequest({
    //     method: 'POST',
    //     path: '/v3/mail/send',
    //     body: {
    //         personalizations: [
    //             {
    //                 to: [
    //                     {
    //                         email: to,
    //                     },
    //                 ],
    //                 subject,
    //             },
    //         ],
    //         from: {
    //             email: from,
    //         },
    //         content: [
    //             {
    //                 type: 'text/plain',
    //                 value: message,
    //             },
    //         ],
    //     },
    // });

    // return sg.API(request)
    //     .then(res => console.log(res.statusCode))
    //     .catch(err => {
    //         // error is an instance of SendGridError
    //         // The full response is attached to error.response
    //         console.log(err.response.statusCode)
    //     });