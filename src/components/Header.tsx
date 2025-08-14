"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { href: "#top", label: "Home" },
  { href: "#make-payment", label: "Pay Here" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#services", label: "Services" },
  { href: "#about-us", label: "About Us" },
];

const LOGO_URL = "https://tonetechrec.com/unity-cell-phone-bill-pay/_assets/media/bf5ee7a223c8d1537917fcb7cdfce742.png";

export default function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <header className={styles.root}>
      <div className={styles.bar}>
        <div className={styles.brand}>
          <Image
            className={styles.logo}
            src={LOGO_URL}
            alt="UNITY logo"
            width={34}
            height={34}
            priority
          />
          <span className={styles.brandText}>Unity Bill Pay</span>
        </div>
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = false;
            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={pathname === "/" ? item.href : `/${item.href}`}
                className={`${styles.link} ${isActive ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div>
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


