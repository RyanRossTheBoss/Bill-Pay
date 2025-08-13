"use client";

import { useState } from "react";
import AnimatedTitle from "@/components/AnimatedTitle";
import styles from "./TopupForm.module.css";

type TopupFormProps = {
  embedded?: boolean;
};

export default function TopupForm({ embedded = false }: TopupFormProps) {
  const [phone, setPhone] = useState("");
  const [productId, setProductId] = useState("");
  const [amount, setAmount] = useState<string | number>("");
  const [responseText, setResponseText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [ctid, setCtid] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isPolling, setIsPolling] = useState<boolean>(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setResponseText("Processing...");
    setStatus(null);
    setCtid(null);
    try {
      const res = await fetch("/api/topup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, productId, amount: Number(amount) }),
      });
      const data = await res.json();
      setResponseText(JSON.stringify(data, null, 2));
      if (data?.ctid) {
        setCtid(data.ctid);
        // Begin polling for status per docs (up to ~90s window suggested)
        startPollingStatus(data.ctid);
      }
    } catch {
      setResponseText("Error processing request.");
    } finally {
      setIsLoading(false);
    }
  }

  async function pollOnce(ctidValue: string): Promise<string | null> {
    try {
      const res = await fetch(`/api/transaction-status?ctid=${encodeURIComponent(ctidValue)}`, { cache: "no-store" });
      const data = await res.json();
      const st = data?.Status as string | undefined;
      if (st) return st;
      return null;
    } catch {
      return null;
    }
  }

  async function startPollingStatus(ctidValue: string) {
    setIsPolling(true);
    const started = Date.now();
    const deadline = started + 90_000; // 90 seconds per docs
    let lastStatus: string | null = null;

    while (Date.now() < deadline) {
      const current = await pollOnce(ctidValue);
      if (current) {
        lastStatus = current;
        setStatus(current);
        if (current === "Successful" || current === "Failed") {
          break;
        }
      }
      await new Promise((r) => setTimeout(r, 3000));
    }
    setIsPolling(false);
    if (!lastStatus) setStatus("Unknown");
  }

  const formContent = (
      <section className={styles.card}>
        <AnimatedTitle className={styles.title} text="Pay Your Mobile Bill" />
        <p className={styles.subtitle}>Securely top up using your Paymaster account.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="phone">Phone Number (incl. country code)</label>
            <input
              className={styles.input}
              id="phone"
              name="phone"
              type="text"
              placeholder="e.g. +14155552671"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              inputMode="tel"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="productId">Product ID</label>
            <input
              className={styles.input}
              id="productId"
              name="productId"
              type="text"
              placeholder="e.g. 101555"
              required
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>

          <div className={`${styles.field} ${styles.fullRow}`}>
            <label className={styles.label} htmlFor="amount">Amount (USD)</label>
            <input
              className={styles.input}
              id="amount"
              name="amount"
              type="number"
              step="0.01"
              placeholder="Enter amount"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              inputMode="decimal"
            />
          </div>

          <div className={`${styles.buttonRow} ${styles.fullRow}`}>
            <button className={styles.button} type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Payment"}
            </button>
          </div>
        </form>

      {responseText && (
        <pre className={styles.response}>{responseText}</pre>
      )}
      {ctid && (
        <pre className={styles.response}>{`CTID: ${ctid}\nStatus: ${status ?? (isPolling ? "Polling..." : "Pending")}`}</pre>
      )}
      </section>
  );

  if (embedded) {
    return formContent;
  }

  return (
    <div className={styles.page}>
      {formContent}
    </div>
  );
}


