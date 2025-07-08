import nodemailer from "nodemailer"
const registerUser = async (req, res) => {

    console.log("Request: - ", req)
    console.log("Responce: - ", res)

    // get data
    const { name, email, password } = req.body

    //validate
    if (!name || !email || !password) {
        console.log("All fields are Required")
        return res.json({

        })
    }

    //send mail
    const transporter = nodemailer.createTransport({
        //add all from .env
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "maddison53@ethereal.email",
            pass: "jn7jnAPss4f63QBp6D",
        },
    });

    const emailOption = {
        from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
        to: "bar@example.com, baz@example.com",
        subject: "Hello ✔",
        text: "Hello world?", // plain‑text body
        html: "<b>Hello world?</b>", // HTML body
    }
}

export { registerUser } 