const sgMail = require("@sendgrid/mail")

const {
  SENDGRID_API_KEY,
  SENDGRID_SENDER_EMAIL,
  SENDGRID_RECIPIENT_EMAIL_ONE,
  SENDGRID_RECIPIENT_EMAIL_TWO,
} = process.env

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body)
  const { emailHtml, subject } = payload

  sgMail.setApiKey(SENDGRID_API_KEY)

  const msg = {
    from: SENDGRID_SENDER_EMAIL,
    to: [SENDGRID_RECIPIENT_EMAIL_ONE, SENDGRID_RECIPIENT_EMAIL_TWO],
    subject: subject,
    text: "Here is a message",
    html: emailHtml,
  }

  // console.log("Message Body ==>", msg)

  try {
    await sgMail.send(msg)
    return {
      statusCode: 200,
      body: "Message sent",
    }
  } catch (err) {
    return {
      statusCode: err.code,
      body: err.message,
    }
  }
}
