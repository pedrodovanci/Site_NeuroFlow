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

    const name = (params.get("name") || "").trim();
    const email = (params.get("email") || "").trim();
    const message = (params.get("message") || "").trim();
    const redirect = params.get("redirect") || "/?contact=success#contact";

    if (!name || !email || !message) {
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
      secure: port === 465, // true para 465 (SSL), false para outros
      auth: { user, pass },
    });

    const mailTo = process.env.MAIL_TO || user;
    const mailFrom = process.env.MAIL_FROM || user;
    const subject = process.env.MAIL_SUBJECT || "Contato pelo site Neuroflow";

    const info = await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject,
      replyTo: email,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong></p>
             <p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    // Opcional: logar o ID da mensagem
    console.log("Email enviado:", info.messageId);

    // Redireciona para a página com indicador de sucesso
    const redirectUrl = new URL(redirect, req.url);
    return NextResponse.redirect(redirectUrl, 303);
  } catch (err: unknown) {
    console.error("Erro ao enviar email:", err);
    return NextResponse.json({ error: "Falha ao enviar email." }, { status: 500 });
  }
}

