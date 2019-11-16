const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'deepakk1234kd@gmail.com',
        subject: 'Welcome to the Task App',
        text: `Welcome to the Task App, ${name}`
    })
}

const sendDeactivateMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'deepakk1234kd@gmail.com',
        subject: 'Bro, Why are you leaving?',
        text: `Bro, Why are you leaving?, ${name}`
    })
}
module.exports = {
    sendWelcomeMail,
    sendDeactivateMail
}