import nodemailer from "nodemailer";
import handlebars from "handlebars";

export type MailVars = {
  appName: string;
  userName: string;
  ctaUrl: string;
};

const baseTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{appName}} – Welcome</title>
  <style>
    body { margin:0; font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; background: #0f172a; color: #e5e7eb; }
    .wrap { max-width: 600px; margin: 0 auto; padding: 32px 20px; }
    .card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.16); border-radius: 16px; padding: 24px; }
    h1 { margin: 0 0 8px 0; font-size: 22px; }
    p { line-height: 1.6; }
    .btn { display:inline-block; padding: 12px 16px; border-radius: 12px; background: linear-gradient(135deg, #06b6d4, #3b82f6); color: #ffffff !important; text-decoration: none; font-weight: 700; }
    .muted { color: #cbd5e1; font-size: 14px; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <h1>Welcome, {{userName}} 👋</h1>
      <p>Thanks for creating an account with {{appName}}. You can now access your dashboard, check your balance, and make quick top‑ups.</p>
      <p><a class="btn" href="{{ctaUrl}}" target="_blank" rel="noopener">Open Dashboard</a></p>
      <p class="muted">If you did not sign up, you can ignore this email.</p>
    </div>
  </div>
  
</body>
</html>
`;

export async function sendWelcomeEmail(to: string, vars: MailVars) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env as Record<string, string>;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    throw new Error("Missing SMTP environment variables");
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const template = handlebars.compile(baseTemplate);
  const html = template(vars);

  await transporter.sendMail({
    from: SMTP_FROM,
    to,
    subject: `${vars.appName} – Welcome`,
    html,
  });
}

const verifyTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{appName}} – Verify your email</title>
  <style>
    body { margin:0; font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; background: #0f172a; color: #e5e7eb; }
    .wrap { max-width: 600px; margin: 0 auto; padding: 32px 20px; }
    .card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.16); border-radius: 16px; padding: 24px; }
    h1 { margin: 0 0 8px 0; font-size: 22px; }
    p { line-height: 1.6; }
    .code { font-size: 28px; letter-spacing: 6px; font-weight: 800; padding: 10px 14px; border-radius: 12px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.16); display: inline-block; }
    .muted { color: #cbd5e1; font-size: 14px; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <h1>Verify your email, {{userName}} ✨</h1>
      <p>Use the 6‑digit code below to complete your sign up on {{appName}}.</p>
      <p class="code">{{code}}</p>
      <p class="muted">This code expires in 10 minutes.</p>
    </div>
  </div>
</body>
</html>
`;

export async function sendVerificationEmail(to: string, vars: { appName: string; userName: string; code: string }) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env as Record<string, string>;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    throw new Error("Missing SMTP environment variables");
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const template = handlebars.compile(verifyTemplate);
  const html = template(vars);

  await transporter.sendMail({
    from: SMTP_FROM,
    to,
    subject: `${vars.appName} – Verify your email`,
    html,
  });
}


