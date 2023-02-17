import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "richard.apletree@gmail.com", // Your email where you'll receive emails
      from: "inahanninger@gmail.com", // your website email address here
      subject: "Anathem Contact Form Submission!",
      html: `<div> Anathem's got a new contact form submission! </div>
      <div> Name: ${req.body.fullname} \n </div>
      <div> Email: ${req.body.email} \n </div>
      <div> Phone: ${req.body.phone} \n </div>
      <div> Company/Hospital: ${req.body.company} \n </div>
      <div> Message: ${req.body.message}</div>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;