"use client";

import Image from "next/image";
import TopupForm from "@/components/TopupForm";
import styles from "./PayHereSection.module.css";

const PROVIDERS = [
  { name: "Lyca Mobile", logo: "/images/Lyca-Logo.webp" },
  { name: "Access Wireless", logo: "/images/access-logo.webp" },
  { name: "T-Mobile", logo: "/images/t-mobile-logo.webp" },
  { name: "AT&T", logo: "/images/att-logo.webp" },
  { name: "Airvoice Wireless", logo: "/images/airvoice-logo.webp" },
  { name: "Ultra Mobile", logo: "/images/ultra-logo.webp" },
];

export default function PayHereSection() {
  return (
    <section className={styles.section} id="make-payment">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>Pay Here</h1>
              <p className={styles.subtitle}>
                Conveniently make a payment on your Apple or Android Device.
              </p>
            </div>
            <div className={styles.formContainer}>
              <TopupForm embedded={true} />
            </div>
            <div className={styles.featuresSection}>
              <div className={styles.feature}>
                <svg className={styles.featureIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <circle cx="12" cy="16" r="1"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span>Secure, encrypted payments</span>
              </div>
              <div className={styles.feature}>
                <svg className={styles.featureIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="13,17 18,12 13,7"/>
                  <polyline points="6,17 11,12 6,7"/>
                </svg>
                <span>Fast processing, minimal steps</span>
              </div>
              <div className={styles.feature}>
                <svg className={styles.featureIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="m12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span>Domestic and international top-up</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.providersSection}>
        <div className={styles.wavyLine}></div>
        <div className={styles.providersContainer}>
          <div className={styles.logos}>
            {PROVIDERS.map((provider) => (
              <div key={provider.name} className={styles.logoContainer}>
                <Image
                  src={provider.logo}
                  alt={provider.name}
                  width={120}
                  height={60}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


