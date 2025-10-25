import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const raw = await req.text();
    const params = new URLSearchParams(raw);

    const type = (params.get("type") || "").trim();
    const name = (params.get("name") || "").trim();
    const email = (params.get("email") || "").trim();
    const message = (params.get("message") || "").trim();
    const redirect = params.get("redirect") || "/dpo?success=1#form";

    if (!type || !name || !email || !message) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Email inválido." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !port || !user || !pass) {
      return NextResponse.json({ error: "Configuração SMTP ausente. Verifique .env.local." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const mailTo = process.env.MAIL_DPO_TO || process.env.MAIL_TO || user;
    const mailFrom = process.env.MAIL_FROM || user;
    const subject = `LGPD - Solicitação do titular (${type})`;

    const info = await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject,
      replyTo: email,
      text: `Tipo: ${type}\nNome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
      html: `<p><strong>Tipo:</strong> ${type}</p>
             <p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong></p>
             <p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    console.log("Solicitação DPO enviada:", info.messageId);

    const redirectUrl = new URL(redirect, req.url);
    return NextResponse.redirect(redirectUrl, 303);
  } catch (err: any) {
    console.error("Erro ao enviar solicitação DPO:", err);
    return NextResponse.json({ error: "Falha ao enviar solicitação." }, { status: 500 });
  }
}