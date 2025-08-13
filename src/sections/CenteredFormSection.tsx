import styles from "./CenteredFormSection.module.css";
import TopupForm from "@/components/TopupForm";

export default function CenteredFormSection() {
  return (
    <section id="make-payment" className={styles.section}>
      <TopupForm embedded />
    </section>
  );
}


