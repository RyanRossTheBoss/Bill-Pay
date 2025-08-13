import AnimatedTitle from "@/components/AnimatedTitle";
import { FiSmartphone, FiRefreshCcw, FiPhoneOutgoing, FiFileText } from "react-icons/fi";
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
            <div className={styles.itemHeader}>
              <div className={styles.itemIcon} aria-hidden>
                <FiSmartphone size={28} />
              </div>
              <div className={styles.itemTitle}>1. Mobile Recharge Services</div>
            </div>
            <ul>
              <li>Domestic mobile top-ups within the U.S., making it easy to recharge prepaid phones.</li>
              <li>International mobile recharge, allowing users to instantly add funds to prepaid phones overseas.</li>
              <li>Simply provide the phone number and desired amount for recharge.</li>
            </ul>
          </div>
          <div className={styles.card}>
            <div className={styles.itemHeader}>
              <div className={styles.itemIcon} aria-hidden>
                <FiRefreshCcw size={28} />
              </div>
              <div className={styles.itemTitle}>2. Scheduled Reloads</div>
            </div>
            <ul>
              <li>Users can schedule automatic recharges to ensure phones are always funded.</li>
            </ul>
          </div>
          <div className={styles.card}>
            <div className={styles.itemHeader}>
              <div className={styles.itemIcon} aria-hidden>
                <FiPhoneOutgoing size={28} />
              </div>
              <div className={styles.itemTitle}>3. International Long‑Distance & Pin‑Less Calling</div>
            </div>
            <ul>
              <li>Offers pin-less prepaid calling plans and low-cost international calls.</li>
              <li>No calling cards or PINs needed.</li>
            </ul>
          </div>
          <div className={styles.card}>
            <div className={styles.itemHeader}>
              <div className={styles.itemIcon} aria-hidden>
                <FiFileText size={28} />
              </div>
              <div className={styles.itemTitle}>4. Bill Payment Services</div>
            </div>
            <ul>
              <li>Pay utilities and bills such as water, gas, electricity, cable, internet, credit cards, and educational fees directly through the portal.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


