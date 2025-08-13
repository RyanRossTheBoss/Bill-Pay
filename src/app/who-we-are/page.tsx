import styles from "./page.module.css";
import AnimatedTitle from "@/components/AnimatedTitle";

export const metadata = {
  title: "Who We Are | Unity Bill Pay",
  description: "What Is UNITY — services and mission overview.",
};

export default function WhoWeArePage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <section className={styles.hero}>
          <AnimatedTitle as="h1" className={styles.title} text="What Is UNITY" />
        </section>

        <section className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.sectionTitle}>1. Mobile Recharge Services</div>
            <ul className={styles.list}>
              <li>Domestic mobile top-ups within the U.S., making it easy to recharge prepaid phones.</li>
              <li>International mobile recharge, allowing users to instantly add funds to prepaid phones overseas.</li>
              <li>Simply provide the phone number and desired amount for recharge.</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.sectionTitle}>2. Scheduled Reloads</div>
            <ul className={styles.list}>
              <li>Users can schedule automatic recharges to ensure phones are always funded.</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.sectionTitle}>3. International Long‑Distance & Pin‑Less Calling</div>
            <ul className={styles.list}>
              <li>Offers pin-less prepaid calling plans and low-cost international calls.</li>
              <li>No calling cards or PINs needed.</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.sectionTitle}>4. Bill Payment Services</div>
            <ul className={styles.list}>
              <li>Pay utilities and bills such as water, gas, electricity, cable, internet, credit cards, and educational fees directly through the portal.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}


