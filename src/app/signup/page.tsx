"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
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
      if (step === 1) {
        const res = await fetch("/api/signup/request-code", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        });
        const json = await res.json();
        if (!res.ok) setError(json?.error || "Failed to send code");
        else setStep(2);
      } else {
        const res = await fetch("/api/signup/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password, code }),
        });
        const json = await res.json();
        if (!res.ok) setError(json?.error || "Verification failed");
        else setResult(JSON.stringify(json, null, 2));
      }
    } catch {
      setError("Sign up failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1 className={styles.title}>Create an account</h1>
        <p className={styles.subtitle}>We&apos;ll email you a 6‑digit code to verify your address and finish signup.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          {step === 1 ? (
            <>
              <div>
                <label className={styles.label} htmlFor="name">Name</label>
                <input className={styles.input} id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
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
              <button className={styles.button} type="submit" disabled={isLoading}>{isLoading ? "Sending code..." : "Send verification code"}</button>
            </>
          ) : (
            <>
              <div>
                <label className={styles.label} htmlFor="code">Verification code</label>
                <input className={styles.input} id="code" value={code} onChange={(e) => setCode(e.target.value)} required />
              </div>
              <button className={styles.button} type="submit" disabled={isLoading}>{isLoading ? "Verifying..." : "Verify & Create Account"}</button>
            </>
          )}
        </form>
        {error && <div className={styles.error}>{error}</div>}
        {result && <pre className={styles.result}>{result}</pre>}
      </section>
      <div className={styles.actions}>
        <Link className={styles.linkBtn} href="/login">Already have an account? Sign in</Link>
      </div>
    </main>
  );
}


