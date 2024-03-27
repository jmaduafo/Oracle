import { transporter } from "@/config/nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const email = process.env.NEXT_PUBLIC_EMAIL

    if (req.method === 'POST') {
        const data = req.body

        try {
            await transporter.sendMail({
                from: data.email,
                to: email,
                subject: `Oracle website email: ${data.inquiryType}`,
                text: 'This is a test',
                html: `<p>${data.message}</p>`
            })

            return res.status(200).json({
                message: 'Message was sent successfully!'
            })
        } catch (err) {
            return res.status(400).json({
                message: err
            })
        }
    }
}