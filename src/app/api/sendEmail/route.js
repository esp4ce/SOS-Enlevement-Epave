import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { email, phone, name, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAILFROM,
                pass: process.env.PASSWORDMAIL,
            }
        })

        const mailOptions = {
            from: 'process.env.EMAILFROM',
            to: 'contact@sos-enlevement-epave.fr',
            subject: 'Nouveau message de SOS Enlèvement Épaves',
            text: `Un utilisateur à remplis le formulaire sur le site https://sos-enlevement-epaves.com :\n\nEmail: ${email}\n\nTéléphone: ${phone}\n\nNom et prénom: ${name}\n\nMessage: ${message}`,
        };


        await transporter.sendMail(mailOptions)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}