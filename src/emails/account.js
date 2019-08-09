const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'taskmanpro@gmail.com',
    subject: 'Hello from the Task Man!',
    text: `Hey ${name}! Welcome to the app! Let me know if you'd like to see any additional features!`,
  })
}

const sendDeleteEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'taskmanpro@gmail.com',
    subject: 'From your friends at Task Man!',
    text: `Hey ${name}! Sad to see you go! Is there anything we could've done to make your experience better?`,
  })
}

module.exports = {
  sendWelcomeEmail,
  sendDeleteEmail
}