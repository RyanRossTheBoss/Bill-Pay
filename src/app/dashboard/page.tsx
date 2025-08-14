"use client";

import { useSession, signIn } from "next-auth/react";
import BalanceCard from "@/components/BalanceCard";
import TopupForm from "@/components/TopupForm";
import styles from "./page.module.css";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main className={styles.page}><div className={styles.wrap}><p>Loading...</p></div></main>;
  }
  if (!session) {
    return (
      <main className={styles.page}>
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <h1 className={styles.title}>Please sign in</h1>
            <p className={styles.subtitle}>You need an account to view your dashboard.</p>
          </div>
          <button className={styles.card} onClick={() => signIn()}>Sign in</button>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>Welcome back, {session.user?.name || session.user?.email}.</p>
        </div>

        <div className={styles.grid}>
          <section className={styles.card}>
            <BalanceCard />
          </section>
          <section className={styles.card}>
            <TopupForm embedded />
          </section>
        </div>
      </div>
    </main>
  );
}


