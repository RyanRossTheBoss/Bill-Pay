import AnimatedTitle from "@/components/AnimatedTitle";
import styles from "./WhoWeAreSection.module.css";

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <AnimatedTitle as="h2" className={styles.title} text="What Is UNITY" />
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <strong>1. Mobile Recharge Services</strong>
            <ul>
              <li>Domestic mobile top-ups within the U.S., making it easy to recharge prepaid phones.</li>
              <li>International mobile recharge, allowing users to instantly add funds to prepaid phones overseas.</li>
              <li>Simply provide the phone number and desired amount for recharge.</li>
            </ul>
          </div>
          <div className={styles.card}>
            <strong>2. Scheduled Reloads</strong>
            <ul>
              <li>Users can schedule automatic recharges to ensure phones are always funded.</li>
            </ul>
          </div>
          <div className={styles.card}>
            <strong>3. International Long‑Distance & Pin‑Less Calling</strong>
            <ul>
              <li>Offers pin-less prepaid calling plans and low-cost international calls.</li>
              <li>No calling cards or PINs needed.</li>
            </ul>
          </div>
          <div className={styles.card}>
            <strong>4. Bill Payment Services</strong>
            <ul>
              <li>Pay utilities and bills such as water, gas, electricity, cable, internet, credit cards, and educational fees directly through the portal.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


