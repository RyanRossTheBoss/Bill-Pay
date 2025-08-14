import { NextRequest, NextResponse } from "next/server";
import { NextRequest, NextResponse } from "next/server";
import { getMongoDb } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
    }
    const db = await getMongoDb();
    const user = await db.collection("users").findOne<{ passwordHash: string; _id: unknown; name?: string }>({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
    return NextResponse.json({ ok: true, user: { id: String(user._id), email, name: user.name || "" } });
  } catch {
    return NextResponse.json({ error: "Failed to login." }, { status: 500 });
  }
}


