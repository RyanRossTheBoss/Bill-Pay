"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Pay Here" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
];

export default function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.root}>
      <div className={styles.bar}>
        <div className={styles.brand}>
          <Image
            src="/images/Unity-Logo-01.webp"
            alt="Unity Logo"
            width={150}
            height={60}
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
          {session ? (
            <button className={styles.authBtn} onClick={() => signOut()}>Sign out</button>
          ) : (
            <Link className={styles.authBtn} href="/login">Sign in</Link>
          )}
        </div>
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
      
      {/* Mobile Sidebar */}
      <div className={`${styles.mobileSidebar} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <Image
            src="/images/Unity-Logo-01.webp"
            alt="Unity Logo"
            width={120}
            height={48}
            className={styles.sidebarLogo}
          />
          <button 
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <nav className={styles.sidebarNav}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={`mobile-${item.href}-${item.label}`}
                href={item.href}
                className={`${styles.sidebarLink} ${isActive ? styles.sidebarActive : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className={styles.sidebarActions}>
          {session ? (
            <button className={styles.sidebarAuthBtn} onClick={() => signOut()}>Sign out</button>
          ) : (
            <Link className={styles.sidebarAuthBtn} href="/login" onClick={() => setIsMenuOpen(false)}>Sign in</Link>
          )}
        </div>
      </div>
      
      {/* Overlay */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
}


