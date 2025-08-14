import { NextRequest, NextResponse } from "next/server";
import { getMongoDb } from "@/lib/mongodb";
import { sendVerificationEmail } from "@/lib/mailer";

function generateCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();
    if (!name || !email) return NextResponse.json({ error: "Missing name or email" }, { status: 400 });

    const db = await getMongoDb();
    const code = generateCode();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
    await db.collection("email_verifications").updateOne(
      { email },
      { $set: { email, name, code, expiresAt, used: false } },
      { upsert: true }
    );

    try {
      await sendVerificationEmail(email, { appName: "Unity Bill Pay", userName: name, code });
    } catch {}

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to request code" }, { status: 500 });
  }
}


