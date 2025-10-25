import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const subject = formData.get("subject")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.DPO_TO || process.env.SMTP_TO,
      subject: subject || `Contato DPO - ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}\nMensagem: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    const redirect = formData.get("redirect")?.toString() || "/dpo?contact=success#form";
    return NextResponse.redirect(redirect);
  } catch (err: unknown) {
    console.error("DPO POST error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}