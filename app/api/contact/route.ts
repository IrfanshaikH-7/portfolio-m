require('dotenv').config()
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        let nodemailer = require('nodemailer')

        const body = await req.json()
        const { name, email, message } = body;

        console.log(name,email,message)
        const EMAIL = process.env.NODEMAIL_EMAIL
        const NODEMAIL_PASS = process.env.NODEMAIL_PASSWORD

        const transporter = await nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: EMAIL,
                pass: NODEMAIL_PASS,
            },
            secure: true,
        })

        const mailData = {
            from: EMAIL,
            to: '414irfann@gmail.com',
            subject: `Message From ${name}`,
            replyTo: email,
            text: message,
            html: `<div >${message}</div>
            <p><b>Sent by:</b> ${name}, ${email}</p>`
        }

        await new Promise((resolve, reject) => {
            // send mail
            transporter.sendMail(mailData, (err: any, info: any) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });
        
        return new NextResponse('ok mail sent', { status: 200 });

    } catch (error) {
        return new NextResponse('Email sent error', { status: 500 })
    }


}