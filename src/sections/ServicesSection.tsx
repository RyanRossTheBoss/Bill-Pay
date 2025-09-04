import Image from "next/image";
import { FiPhoneCall, FiSmartphone, FiGlobe } from "react-icons/fi";
import AnimatedTitle from "@/components/AnimatedTitle";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <AnimatedTitle as="h2" className={styles.title} text="SERVICES" />
          <p className={styles.subtitle}>The best products and services on the market are available on our website.</p>
          <div className={styles.chips}>
            <span className={styles.chip}>Bill Pay</span>
            <span className={styles.chip}>System</span>
            <span className={styles.chip}>Cellphone</span>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconBox}><FiPhoneCall size={26} /></div>
            <div className={styles.cardTitle}>PINLESS PREPAID CALLS</div>
            <div className={styles.cardText}>Products with PINLESS Mobile Minutes to call your country</div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconBox}><FiSmartphone size={26} /></div>
            <div className={styles.cardTitle}>NATIONAL MOBILE RECHARGE</div>
            <div className={styles.cardText}>Prepaid mobile top-up in the USA</div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconBox}><FiGlobe size={26} /></div>
            <div className={styles.cardTitle}>INTERNATIONAL MOBILE RECHARGE</div>
            <div className={styles.cardText}>Recharge your family&apos;s mobile phones anywhere in the world</div>
          </div>
        </div>

        <div className={styles.subheading}>Mobile Top-up</div>
        <div className={styles.brands}>
          <div className={styles.brandItem}>
            <Image className={styles.brandLogo} src="https://tonetechrec.com/unity-cell-phone-bill-pay/_assets/media/bbcdc7f43c09d6de18b8281e9d7afd75.png" alt="Lycamobile" width={106} height={39} />
            <div className={styles.brandName}>Lycamobile Recharge</div>
          </div>
          <div className={styles.brandItem}>
            <Image className={styles.brandLogo} src="https://tonetechrec.com/unity-cell-phone-bill-pay/_assets/media/75b5e2142ee36239d4824bf20c95522f.png" alt="Access Wireless" width={75} height={47} />
            <div className={styles.brandName}>Access Wireless Refill</div>
          </div>
          <div className={styles.brandItem}>
            <Image className={styles.brandLogo} src="https://tonetechrec.com/unity-cell-phone-bill-pay/_assets/media/cfd6ced4b4b7ecc89e7bde46c3af774d.png" alt="T-Mobile PrePaid" width={87} height={54} />
            <div className={styles.brandName}>T Mobile PrePaid</div>
          </div>
          <div className={styles.brandItem}>
            <Image className={styles.brandLogo} src="https://tonetechrec.com/unity-cell-phone-bill-pay/_assets/media/e8cc8c5dd51e6db5dcc865c9dbe0705a.png" alt="AT&T PrePaid" width={77} height={48} />
            <div className={styles.brandName}>AT&T PrePaid</div>
          </div>
          <div className={styles.brandItem}>
            <Image className={styles.brandLogo} src="https://tonetechrec.com/unity-cell-phone-bill-pay/_assets/media/60c202faf0dec5d3037be03b1d867dcd.png" alt="AirVoice Wireless" width={79} height={49} />
            <div className={styles.brandName}>AirVoice Wireless Refill</div>
          </div>
          <div className={styles.brandItem}>
            <Image className={styles.brandLogo} src="https://tonetechrec.com/unity-cell-phone-bill-pay/_assets/media/6683d604ba5179a9b9fdf015752e09d1.png" alt="Ultra Mobile Plans" width={74} height={46} />
            <div className={styles.brandName}>Ultra Mobile Plans</div>
          </div>
        </div>
      </div>
    </section>
  );
}


