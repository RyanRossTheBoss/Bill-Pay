import AnimatedTitle from "@/components/AnimatedTitle";
import styles from "./AboutUsSection.module.css";

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

export default function AboutUsSection() {
  return (
    <section id="about-us" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <AnimatedTitle as="h2" className={styles.title} text="ABOUT US" />
          <p className={styles.lead}>The best products and services on the market are available on our website.</p>
          <div className={styles.chips}>
            <span className={styles.chip}>Bill Pay</span>
            <span className={styles.chip}>sysytem</span>
            <span className={styles.chip}>cellphone</span>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.desc}>{DESCRIPTION}</p>
        </div>
      </div>
    </section>
  );
}


