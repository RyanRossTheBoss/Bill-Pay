"use client";

import { useEffect, useState } from "react";
import styles from "./ProductsCard.module.css";

type Product = {
  Product: number | string;
  ProductName: string;
  Provider?: string;
  Country?: string;
  MinAmt?: string;
  MaxAmt?: string;
  Type?: string;
};

export default function ProductsCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/products", { cache: "no-store" });
      if (!res.ok) throw new Error(await res.text());
      const json = (await res.json()) as Record<string, Product> | Product[] | undefined;
      // API returns either an object keyed by id, or an array
      const arr: Product[] = Array.isArray(json) ? json : Object.values(json ?? {});
      setProducts(arr);
    } catch {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>Top-Up Products</div>
        <button onClick={fetchProducts} disabled={loading}>
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      <div className={`${styles.row} ${styles.head}`}>
        <div>Name</div>
        <div>Provider</div>
        <div>Range</div>
        <div>Type</div>
      </div>
      <div className={styles.list}>
        {products.map((p) => (
          <div key={String(p.Product)} className={styles.row}>
            <div className={styles.name}>{p.ProductName}</div>
            <div className={styles.subtle}>{p.Provider || "—"}</div>
            <div className={styles.subtle}>
              {p.MinAmt && p.MaxAmt ? `$${p.MinAmt} - $${p.MaxAmt}` : "—"}
            </div>
            <div className={styles.subtle}>{p.Type || "—"}</div>
          </div>
        ))}
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </section>
  );
}


