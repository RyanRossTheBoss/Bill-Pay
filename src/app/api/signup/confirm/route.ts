import { NextRequest, NextResponse } from "next/server";
import { getMongoDb } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, code } = await req.json();
    if (!name || !email || !password || !code) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const db = await getMongoDb();
    const rec = await db.collection("email_verifications").findOne<{ code: string; expiresAt: Date; used?: boolean }>({ email });
    if (!rec || rec.used) return NextResponse.json({ error: "Invalid code" }, { status: 400 });
    if (new Date(rec.expiresAt).getTime() < Date.now()) return NextResponse.json({ error: "Code expired" }, { status: 400 });
    if (rec.code !== code) return NextResponse.json({ error: "Invalid code" }, { status: 400 });

    const existing = await db.collection("users").findOne({ email });
    if (existing) return NextResponse.json({ error: "Email already in use" }, { status: 409 });

    const passwordHash = await bcrypt.hash(password, 10);
    const created = await db.collection("users").insertOne({ name, email, passwordHash, createdAt: new Date() });
    await db.collection("email_verifications").updateOne({ email }, { $set: { used: true } });
    return NextResponse.json({ ok: true, userId: String(created.insertedId) });
  } catch {
    return NextResponse.json({ error: "Failed to confirm" }, { status: 500 });
  }
}


