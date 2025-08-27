import Image from "next/image";
import styles from "./page.module.css";
import AnimatedTitle from "@/components/AnimatedTitle";

export const metadata = {
  title: "Pay Here | Unity Bill Pay",
  description: "Pay Here - UNITY is a leading provider of wholesale and retail prepaid services.",
};

const IMG_URL = "https://tonetechrec.com/unity-cell-phone-bill-pay/_assets/media/bf5ee7a223c8d1537917fcb7cdfce742.png";

const DESCRIPTION = `UNITY is a leading provider of wholesale and retail prepaid services, serving thousands of locations across the
United States. Our goal is to connect people with their loved ones in a fast, affordable, and easily accessible
way.

Founded in 2013 as a subsidiary of Ameritel, one of T-Mobile's most respected and largest Prepaid Master
Distributors, UNITY embraces the #AlwaysBetter corporate mission of striving for best-in-class service. Our
operations and distribution are managed by industry veterans with decades of executive and field experience.
We are a People First brand with a relentless drive to delight our customers and partners.

Whether you're a retailer looking to leverage the profit potential of prepaid, or a prepaid service provider
looking to connect via API with a trusted, quality-driven wholesale mobile top-up partner, our team at UNITY is
eager to work with you. Connect with us today and discover why retailers choose UNITY as their leading
provider for domestic and international top-up.`;

export default function PayHerePage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <AnimatedTitle className={styles.pageTitle} text="Pay Here" />
        <p className={styles.heroSub}>
          The best products and services on the market are available on our website.
        </p>
        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <div className={styles.highlightIcon}>🔒</div>
            <div className={styles.highlightText}>Secure, encrypted payments</div>
          </div>
          <div className={styles.highlight}>
            <div className={styles.highlightIcon}>⚡️</div>
            <div className={styles.highlightText}>Fast processing, minimal steps</div>
          </div>
          <div className={styles.highlight}>
            <div className={styles.highlightIcon}>🌍</div>
            <div className={styles.highlightText}>Domestic and international top-up</div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <section className={styles.card}>
          <p className={styles.desc}>{DESCRIPTION}</p>
        </section>

        
      </div>
    </div>
  );
}


