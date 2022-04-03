import nodemailer from "nodemailer"

export default async function handler(req, res) {
    console.log(`REQUEST`)
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: process.env.G_USER,
            pass: process.env.G_PASS,
        },
    })

    try {
        await transporter.sendMail({
            from: req.body.email,
            to: process.env.TO_ADDRESS,
            subject: "Contact Form",
            html: `<p>You have a contact form submission</p><br>
                <p><strong>Name: </strong> ${req.body.name}</p><br>
                <p><strong>Email: </strong> ${req.body.email}</p><br>
                <p><strong>Message: </strong> ${req.body.message}</p><br>
            `,
        })
    } catch (error) {
        console.log(`Error: ${error}`)
        return res.status(500).json({ error })
    }

    return res.status(200).json({ success: true, error: "" })
}
