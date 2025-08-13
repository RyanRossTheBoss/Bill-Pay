import { NextResponse } from "next/server";
import { API_BASE, buildAuthFields } from "@/lib/paymaster";

export async function GET() {
  try {
    const payload = buildAuthFields();
    const res = await fetch(`${API_BASE}WSGetTopUpProducts`, {
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
    return NextResponse.json({ error: "Failed to retrieve product list." }, { status: 500 });
  }
}


