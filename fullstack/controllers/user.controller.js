
import crypto from 'crypto';
import User from "../models/User.model.js"

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

    //check in database
    const existingUser = await User.findOne({ email })


    if (existingUser) return res.status(400).json({ success: false, message: "User Already Exist with this Email" })

    //generate token

    const token = crypto.randomBytes(length).toString('hex');
    console.log("token", token)

    //savec if not exist
    const user = User.create({
        username: name,
        email,
        password,
        verificationTokne: token,
        verificationTokneExpiry: Date.now() + 10 * 60 * 1000
    })

    res.status(200).json({ success: true, message: "User Created Successfully" })


    //send mail
    // const transporter = nodemailer.createTransport({
    //     //add all from .env
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: "maddison53@ethereal.email",
    //         pass: "jn7jnAPss4f63QBp6D",
    //     },
    // });

    // const emailOption = {
    //     from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
    //     to: "bar@example.com, baz@example.com",
    //     subject: "Hello ✔",
    //     text: "Hello world?", // plain‑text body
    //     html: `Your Verification Linke is here ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
    // }
}

const verify = async (req, res) => {

    try {
        const { token } = req.params

        if (!token) {
            return res.status(400).json({ success: false, message: "Token not found or Token expired" })
        }

        const verifiedUser = await User.findOne({
            verificationTokne: token,
            verificationTokneExpiry: { $gt: Date.now() }
        });

        if (verifiedUser) {
            return res.status(200).json({ success: true, message: "User verified Successfully" })
        }
    } catch (error) {
        console.log("Error verifying user", error)
        res.status(400).json({ success: false, message: "User not verified" })
    }


}

export { registerUser } 
