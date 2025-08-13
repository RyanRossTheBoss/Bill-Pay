import Image from "next/image";
import AnimatedTitle from "@/components/AnimatedTitle";
import TopupForm from "@/components/TopupForm";
import { FiLock, FiZap, FiGlobe } from "react-icons/fi";
import styles from "./PayHereSection.module.css";

const IMG_URL = "https://tonetechrec.com/unity-cell-phone-bill-pay/_assets/media/bf5ee7a223c8d1537917fcb7cdfce742.png";

// removed description in favor of embedded form

export default function PayHereSection() {
  return (
    <section id="pay-here" className={styles.section}>
      <div className={styles.header}>
        <AnimatedTitle className={styles.pageTitle} text="Pay Here" />
        <p className={styles.heroSub}>The best products and services on the market are available on our website.</p>
        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <div className={styles.highlightIcon} aria-hidden>
              <FiLock size={24} />
            </div>
            <div className={styles.highlightText}>Secure, encrypted payments</div>
          </div>
          <div className={styles.highlight}>
            <div className={styles.highlightIcon} aria-hidden>
              <FiZap size={24} />
            </div>
            <div className={styles.highlightText}>Fast processing, minimal steps</div>
          </div>
          <div className={styles.highlight}>
            <div className={styles.highlightIcon} aria-hidden>
              <FiGlobe size={24} />
            </div>
            <div className={styles.highlightText}>Domestic and international top-up</div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <TopupForm embedded />

        <div className={styles.imageWrap}>
          <div className={styles.imgShadow}>
            <Image src={IMG_URL} alt="Unity phone bill pay" width={640} height={480} />
          </div>
        </div>
      </div>
    </section>
  );
}


