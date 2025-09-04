"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/pay-here", label: "Pay Here" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
];

export default function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <header className={styles.root}>
      <div className={styles.bar}>
        <div className={styles.brand}>
          <Image
            src="/images/Ping-Logo.webp"
            alt="Ping Logo"
            width={80}
            height={32}
            className={styles.logo}
          />
        </div>
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={`${styles.link} ${isActive ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className={styles.actions}>
          <button className={styles.iconButton} aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <button className={styles.iconButton} aria-label="Shopping bag">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </button>
          {session ? (
            <button className={styles.authBtn} onClick={() => signOut()}>Sign out</button>
          ) : (
            <Link className={styles.authBtn} href="/login">Sign in</Link>
          )}
        </div>
      </div>
    </header>
  );
}


