import sendgrid from '@sendgrid/mail';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (request: VercelRequest, response: VercelResponse) => {

  // TODO temp fix that should be improved
  const sendGridApiKey: string = process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY : '';
  const emailAddress: string = process.env.EMAIL_ADDRESS ? process.env.EMAIL_ADDRESS : '';

  sendgrid.setApiKey(sendGridApiKey);

  await sendgrid.send({
    to: emailAddress,
    from: emailAddress,
    subject: 'Signing up for promo',
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>The HTML5 Herald</title>
      <meta name="description" content="The HTML5 Herald">
      <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    </head>
    <body>
      <div class="container" style="margin-left: 20px;margin-right: 20px;">
        <h3>You've got a new mail from ${request.body.name}, their email is: ${request.body.email} </h3>
        <div style="font-size: 16px;">
          <p>Message:</p>
          <p>${request.body.message}</p>
        </div>
      </div>
    </body>
    </html>`,
  });

  response.status(200).json({});
};

