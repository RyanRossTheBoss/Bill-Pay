import Link from "next/link";
import styles from "./page.module.css";
import AnimatedTitle from "@/components/AnimatedTitle";

export const metadata = {
  title: "What We Do | Unity Bill Pay",
  description: "Pay it forward — learn about UNITY's humanitarian efforts.",
};

export default function WhatWeDoPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <section className={styles.hero}>
          <span className={styles.badge}>People First • #AlwaysBetter</span>
          <AnimatedTitle as="h1" className={styles.title} text="Pay it forward" />
          <p className={styles.lead}>
            A portion of every transaction processed through Unity goes toward supporting Unity humanitarian projects.
          </p>
        </section>

        <section className={styles.features}>
          <div className={styles.featureCard} style={{ animationDelay: "40ms" }}>
            <div className={styles.featureIcon}>🏠</div>
            <div className={styles.featureTitle}>Fight Crises</div>
            <div className={styles.featureText}>Fighting global crises such as homelessness and addiction.</div>
          </div>
          <div className={styles.featureCard} style={{ animationDelay: "120ms" }}>
            <div className={styles.featureIcon}>📚</div>
            <div className={styles.featureTitle}>Empower Communities</div>
            <div className={styles.featureText}>Empowering communities with educational resources and infrastructure development.</div>
          </div>
          <div className={styles.featureCard} style={{ animationDelay: "200ms" }}>
            <div className={styles.featureIcon}>🤝</div>
            <div className={styles.featureTitle}>Support Relief</div>
            <div className={styles.featureText}>Supporting charitable organizations and relief programs worldwide.</div>
          </div>
        </section>

        <section className={styles.card}>
          <p className={styles.sectionTitle}>When you choose UNITY,</p>
          <p className={styles.paragraph}>
            {`your everyday payments become part of a bigger\nmission to create positive change & transforming\nsimple transactions into meaningful contributions\nthat impact lives across the globe.`}
          </p>
          <div className={styles.ctaWrap}>
            <Link className={styles.cta} href="/pay-here">click here to make payments</Link>
          </div>
        </section>
      </div>
    </div>
  );
}


