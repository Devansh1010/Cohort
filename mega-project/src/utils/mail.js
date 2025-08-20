import Mailgen from 'mailgen'
import nodemailer from 'nodemailer'

const sendMail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            // Appears in header & footer of e-mails
            name: 'Mailgen',
            link: 'https://mailgen.js/'
            // Optional product logo
            // logo: 'https://mailgen.js/img/logo.png'
        }
    });

    // Generate an HTML email with the provided contents
    var emailBody = mailGenerator.generate(options.mailGenContent);

    // Generate the plaintext version of the e-mail (for clients that do not support HTML)
    var emailText = mailGenerator.generatePlaintext(options.mailGenContent);

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_TRAP_HOST,
        port: process.env.MAIL_TRAP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_TRAP_USER,
            pass: process.env.MAIL_TRAP_PASSWORD,
        },
    });

    const mail = {
        from: 'taskmanager@gmail.com',
        to: options.email,
        subject: options.subject,
        text: emailText, // plain‑text body
        html: emailBody,    
    }

    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.log("Error Sending Mail")
    }
}

export const emailVerificationMailGenContent = (username, verifiactionUrl) => {
    return {
        body: {
            name: username,
            intro: 'Welcome to Task Manager! We\'re very excited to have you on board.',
            action: {
                instructions: 'To get started with Task Manager, please verify your account:',
                button: {
                    color: '#22BC66', // Optional action button color
                    text: 'Confirm your account',
                    link: verifiactionUrl
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }
}