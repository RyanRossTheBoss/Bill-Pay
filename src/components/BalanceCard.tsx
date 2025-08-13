"use client";

import { useEffect, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import styles from "./BalanceCard.module.css";

type BalanceResponse = {
  AccessCode?: number;
  AccessMessage?: string;
  Balance?: string | number;
  Limit?: string | number;
};

export default function BalanceCard() {
  const [data, setData] = useState<BalanceResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchBalance() {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/balance", { cache: "no-store" });
      if (!res.ok) throw new Error(await res.text());
      const json = (await res.json()) as BalanceResponse;
      setData(json);
    } catch (e: any) {
      setError("Failed to load balance");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchBalance();
  }, []);

  const balanceNum = data?.Balance !== undefined ? Number(data.Balance) : undefined;
  const isPositive = typeof balanceNum === "number" ? balanceNum >= 0 : undefined;

  return (
    <section className={styles.card} aria-live="polite">
      <div className={styles.header}>
        <div className={styles.title}>Account Balance</div>
        <button className={styles.button} onClick={fetchBalance} disabled={isLoading} aria-label="Refresh balance">
          <FiRefreshCcw /> {isLoading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      <div className={styles.valueRow}>
        <div className={`${styles.balance} ${isPositive === true ? styles.positive : isPositive === false ? styles.negative : ""}`}>
          {balanceNum !== undefined ? `$${balanceNum.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "—"}
        </div>
        {data?.Limit !== undefined && (
          <div className={styles.meta}>Limit: ${Number(data.Limit).toLocaleString(undefined, { minimumFractionDigits: 0 })}</div>
        )}
      </div>

      {data?.AccessMessage && (
        <div className={styles.note}>{data.AccessMessage}</div>
      )}
      {error && <div className={styles.error}>{error}</div>}
    </section>
  );
}


