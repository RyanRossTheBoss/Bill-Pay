import { NextRequest, NextResponse } from "next/server";
import { API_BASE, buildAuthFields } from "@/lib/paymaster";

export async function POST(req: NextRequest) {
  try {
    const { phone, productId, amount } = await req.json();

    if (!phone || !productId || typeof amount === "undefined") {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const productIdStr = String(productId).trim();
    const amountNum = Number(amount);
    if (!/^\d+$/.test(productIdStr)) {
      return NextResponse.json({ error: "Invalid productId format. Digits only." }, { status: 400 });
    }
    if (!Number.isFinite(amountNum) || amountNum <= 0) {
      return NextResponse.json({ error: "Invalid amount. Must be a number greater than 0." }, { status: 400 });
    }

    const auth = buildAuthFields();
    const ctid = `TXN_${Date.now()}`;
    const payload = {
      ...auth,
      Product: productIdStr,
      Amount: amountNum.toFixed(2),
      CTID: ctid,
      DestinationPhoneNumber: String(phone),
    };

    const res = await fetch(`${API_BASE}WSSendTopUpPurchaseRequest`, {
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
    return NextResponse.json({ ctid, ...data });
  } catch {
    return NextResponse.json({ error: "Failed to process top-up." }, { status: 500 });
  }
}


