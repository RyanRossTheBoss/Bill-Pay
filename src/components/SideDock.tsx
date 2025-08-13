"use client";

import { useState } from "react";
import { FiSmartphone, FiDollarSign, FiGrid, FiX } from "react-icons/fi";
import TopupForm from "@/components/TopupForm";
import BalanceCard from "@/components/BalanceCard";
import ProductsCard from "@/components/ProductsCard";
import styles from "./SideDock.module.css";

type Sheet = "topup" | "balance" | "products" | null;

export default function SideDock() {
  const [open, setOpen] = useState<Sheet>(null);

  return (
    <>
      <div className={`${styles.overlay} ${open ? styles.open : ""}`} onClick={() => setOpen(null)} />
      <div className={styles.dock}>
        <button className={`${styles.sliceBtn} ${styles.slice1}`} onClick={() => setOpen("topup")} aria-label="Open Top-Up">
          <span className={`${styles.iconWrap} ${styles.i1}`}><FiSmartphone size={24} /></span>
        </button>
        <button className={`${styles.sliceBtn} ${styles.slice2}`} onClick={() => setOpen("balance")} aria-label="Open Balance">
          <span className={`${styles.iconWrap} ${styles.i2}`}><FiDollarSign size={24} /></span>
        </button>
        <button className={`${styles.sliceBtn} ${styles.slice3}`} onClick={() => setOpen("products")} aria-label="Open Products">
          <span className={`${styles.iconWrap} ${styles.i3}`}><FiGrid size={24} /></span>
        </button>
      </div>

      <nav className={styles.dockMobile} aria-label="Quick actions">
        <div className={styles.dockMobileInner}>
          <button className={styles.mBtn} onClick={() => setOpen("topup")} aria-label="Open Top-Up">
            <FiSmartphone size={22} />
          </button>
          <button className={styles.mBtn} onClick={() => setOpen("balance")} aria-label="Open Balance">
            <FiDollarSign size={22} />
          </button>
          <button className={styles.mBtn} onClick={() => setOpen("products")} aria-label="Open Products">
            <FiGrid size={22} />
          </button>
        </div>
      </nav>

      <aside className={`${styles.sheet} ${open ? styles.open : ""}`} aria-hidden={!open}>
        <div className={styles.sheetHeader}>
          <div className={styles.sheetTitle}>
            {open === "topup" && "Make a Top-Up"}
            {open === "balance" && "Account Balance"}
            {open === "products" && "Products"}
          </div>
          <button className={styles.closeBtn} onClick={() => setOpen(null)} aria-label="Close panel">
            <FiX size={22} />
          </button>
        </div>
        <div className={styles.sheetBody}>
          {open === "topup" && <TopupForm embedded />}
          {open === "balance" && <BalanceCard />}
          {open === "products" && <ProductsCard />}
        </div>
      </aside>
    </>
  );
}


