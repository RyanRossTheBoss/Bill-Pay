import { NextRequest, NextResponse } from "next/server";
import { API_BASE, buildAuthFields } from "@/lib/paymaster";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const ctid = searchParams.get("ctid");
  if (!ctid) {
    return NextResponse.json({ error: "Missing ctid" }, { status: 400 });
  }

  try {
    const payload = { ...buildAuthFields(), CTID: ctid };
    const res = await fetch(`${API_BASE}WSGetTransactionStatus`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: "Upstream error", details: text }, { status: 500 });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to fetch transaction status." }, { status: 500 });
  }
}


