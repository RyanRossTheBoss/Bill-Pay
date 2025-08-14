"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json?.error || "Login failed");
      } else {
        setResult(JSON.stringify(json, null, 2));
      }
    } catch {
      setError("Login failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>Use your Paymaster credentials to test WSLogin.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label className={styles.label} htmlFor="email">Email</label>
            <input className={styles.input} id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className={styles.label} htmlFor="password">Password</label>
            <div className={styles.inputControl}>
              <input className={styles.input} id="password" type={showPw ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="button" className={styles.eyeBtn} aria-label={showPw ? "Hide password" : "Show password"} onClick={() => setShowPw((v) => !v)}>
                {showPw ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          <button className={styles.button} type="submit" disabled={isLoading}>{isLoading ? "Logging in..." : "Login"}</button>
        </form>
        {error && <div className={styles.error}>{error}</div>}
        {result && (
          <pre style={{ marginTop: 12 }}>{result}</pre>
        )}
      </section>
      <div className={styles.actions}>
        <Link className={styles.linkBtn} href="/signup">Don&apos;t have an account? Sign up</Link>
      </div>
    </main>
  );
}


