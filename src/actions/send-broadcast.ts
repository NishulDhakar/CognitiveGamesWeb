"use server";

import nodemailer from "nodemailer";
import prisma from "@/lib/prisma";

export async function sendBroadcast({
    subject,
    message,
}: {
    subject: string;
    message: string;
}) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASS,
            },
        });

        const users = await prisma.user.findMany({
            select: { email: true },
            where: {
                email: { not: undefined } // Ensure email exists
            }
        });

        const emails = users.map((u) => u.email).filter(Boolean);

        if (emails.length === 0) {
            return { success: false, error: "No users found to send email to." };
        }

        // Send in batches or as BCC to avoid exposing emails?
        // BCC is better for privacy.

        // However, Gmail has limits on BCC recipients per email. 
        // For a small app, looping or BCC is okay. 
        // Let's do a loop for individual personalization potential later, 
        // but for now, to ensure deliverability and avoid "mass cc" spam filters, 
        // sending individually is safer but slower. 
        // Or BCC groups. 
        // Let's try sending to self with BCC to all.

        const mailOptions = {
            from: process.env.NODEMAILER_USER,
            bcc: emails,
            subject: subject,
            text: message,
            html: `<p>${message.replace(/\n/g, "<br>")}</p>`,
        };

        await transporter.sendMail(mailOptions as any);

        return { success: true, count: emails.length };
    } catch (error) {
        console.error("Error sending broadcast:", error);
        return { success: false, error: String(error) };
    }
}
