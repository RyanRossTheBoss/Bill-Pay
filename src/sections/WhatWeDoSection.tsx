import AnimatedTitle from "@/components/AnimatedTitle";
import styles from "./WhatWeDoSection.module.css";

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <AnimatedTitle as="h2" className={styles.title} text="Pay it forward" />
          <p className={styles.lead}>
            A portion of every transaction processed through Unity goes toward supporting Unity humanitarian projects.
          </p>
        </div>
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🏠</div>
            <div className={styles.featureTitle}>Fight Crises</div>
            <div className={styles.featureText}>Fighting global crises such as homelessness and addiction.</div>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📚</div>
            <div className={styles.featureTitle}>Empower Communities</div>
            <div className={styles.featureText}>Empowering communities with educational resources and infrastructure development.</div>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🤝</div>
            <div className={styles.featureTitle}>Support Relief</div>
            <div className={styles.featureText}>Supporting charitable organizations and relief programs worldwide.</div>
          </div>
        </div>
        <div className={styles.card}>
          <p>When you choose UNITY, your everyday payments become part of a bigger mission to create positive change & transforming simple transactions into meaningful contributions that impact lives across the globe.</p>
        </div>
      </div>
    </section>
  );
}


