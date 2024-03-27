import { transporter } from "@/config/nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import { ContactForm } from "@/type/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const email = process.env.NEXT_PUBLIC_EMAIL
    const data = req.body

    const dataArray = [
        {
            title: 'Name:',
            value: data.name
        },
        {
            title: 'Email:',
            value: data.email
        },
        {
            title: 'Why are you reaching out?:',
            value: data.inquiryType
        },
        {
            title: 'Reaching out for:',
            value: data.inquiryArtist
        },
        {
            title: 'Message:',
            value: data.message
        },
    ]


    if (req.method === 'POST') {

        try {
            await transporter.sendMail({
                from: data.email,
                to: email,
                subject: `Oracle website email: ${data.inquiryType}`,
                text: 'This is a test',
                html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Oracle Email Template</title>
                    <style type="text/css">
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                
                        body {
                            background-color: #333333;
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            font-weight: 200;
                            color: white;
                        }
                
                        h1 {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            text-transform: uppercase;
                            letter-spacing: -2px;
                            font-size: 32px;
                            text-align: right;
                            padding-top: 20px;
                        }
                    
                        p {
                            font-size: 15px;
                        }
                
                        img {
                            width: 80px;
                        }
                
                        table {
                            border-spacing: 0;
                        }
                
                        td {
                            padding: 0
                        }
                
                        .top-space {
                            height: 10px;
                        }
                
                        .wrapper {
                            width: 100%;
                            table-layout: fixed;
                            background-color: white;
                        }
                
                        .main {
                            background-color: black;
                            color: black;
                            margin: 0 auto;
                            width: 100%;
                            max-width: 600px;
                            border-spacing: 0;
                            font-family: sans-serif;
                        }
                
                        thead {
                            background-color: blanchedalmond;
                
                        }
                
                        .headerContainer {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0 40px;
                        }
                
                        tbody {
                            background-color: white;
                            padding: 30px;
                        }
                
                        .content {
                            width: 70%;
                            margin: 5rem auto;
                            display: flex;
                            flex-direction: column;
                            gap: 30px;
                            border: 1px solid rgb(44, 43, 43, .3);
                            border-radius: 20px;
                            padding: 30px;
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        }
                
                        .content tr {
                            width: 70%;
                            margin: 0 auto;
                        }
                
                        .content td {
                            width: 100%;
                        }
                
                        tfoot {
                            height: 50px;
                        }
                
                        .top-image {
                            width: 100%;
                            height: 200px;
                            background-position: center;
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-image: url('https://res.cloudinary.com/dyxxn831a/image/upload/v1709562672/oracle%20music/mula8_wifqat.jpg');
                        }
                    </style>
                </head>
                <body>
                    <table class="wrapper">
                        <table class="main">
                            <thead class="header" style="display: flex;
                            justify-content: space-between;
                            align-items: center;">
                                <tr class="top-space">
                
                                </tr>
                                <tr class="headerContainer">
                                    <th class="">
                                        <img loading="lazy" src="https://res.cloudinary.com/dyxxn831a/image/upload/v1711549097/mula_logo3-removebg-preview_nmx5fh.png" alt="yellow oracle logo"/>
                                    </th>
                                    <th class="">
                                        <h1>Oracle of T.H.U.G.S Music</h1>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <td class="top-image">
                                        
                                    </td>
                                    <tr class="top-space">
                
                                    </tr>
                                </tr>
                                <tr class="content">
                                    ${dataArray.map(data => {
                                        return (
                                        `<td>
                                            <p>${data.title}</p>
                                            <p>${data.value}</p>
                                        </td>`
                                        )
                                    })}
                                </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </table>
                </body>
                </html>`
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