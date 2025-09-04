"use client";

import Image from "next/image";
import styles from "./Providers.module.css";

const PROVIDERS = [
  { name: "Lyca Mobile", logo: "/images/Lyca-Logo.webp" },
  { name: "Access Wireless", logo: "/images/access-logo.webp" },
  { name: "T-Mobile", logo: "/images/t-mobile-logo.webp" },
  { name: "AT&T", logo: "/images/att-logo.webp" },
  { name: "Airvoice Wireless", logo: "/images/airvoice-logo.webp" },
  { name: "Ultra Mobile", logo: "/images/ultra-logo.webp" },
];

export default function Providers() {
  return (
    <section className={styles.section}>
      <div className={styles.wavyLine}></div>
      <div className={styles.container}>
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
    </section>
  );
}


