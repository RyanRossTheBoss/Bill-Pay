import { NextRequest, NextResponse } from "next/server";
import { getMongoDb } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { sendWelcomeEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const db = await getMongoDb();
    const existing = await db.collection("users").findOne({ email });
    if (existing) {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const created = await db.collection("users").insertOne({ name, email, passwordHash, createdAt: new Date() });

    // Send welcome/confirmation email via SMTP
    try {
      await sendWelcomeEmail(email, {
        appName: "Unity Bill Pay",
        userName: name,
        ctaUrl: `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/dashboard`,
      });
    } catch {
      // Do not fail the signup if email fails; log in real app
    }

    return NextResponse.json({ ok: true, userId: String(created.insertedId) });
  } catch {
    return NextResponse.json({ error: "Failed to sign up." }, { status: 500 });
  }
}


