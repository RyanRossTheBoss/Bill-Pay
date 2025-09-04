import AnimatedTitle from "@/components/AnimatedTitle";
import { FiHome, FiCalendar, FiUsers, FiGlobe } from "react-icons/fi";
import styles from "./AboutUsSection.module.css";

export default function AboutUsSection() {
  return (
    <section id="about-us" className={styles.section}>
      <div className={styles.content}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <AnimatedTitle as="h2" className={styles.title} text="About PING" />
          <p className={styles.lead}>
            Since 2013, PING has been at the forefront of digital payment innovation, 
            connecting millions of people worldwide through reliable and secure financial services.
          </p>
          <div className={styles.chips}>
            <span className={styles.chip}>Established 2013</span>
            <span className={styles.chip}>Global Reach</span>
            <span className={styles.chip}>Secure Payments</span>
            <span className={styles.chip}>24/7 Support</span>
          </div>
        </div>

        {/* Highlights Section */}
        <div className={styles.highlightsSection}>
          <h3 className={styles.sectionTitle}>Our Journey</h3>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <FiHome />
              </div>
              <h4 className={styles.highlightTitle}>Founded</h4>
              <p className={styles.highlightText}>
                Started as a small team with a big vision to revolutionize digital payments
              </p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <FiCalendar />
              </div>
              <h4 className={styles.highlightTitle}>10+ Years</h4>
              <p className={styles.highlightText}>
                Over a decade of excellence serving millions of customers worldwide
              </p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <FiUsers />
              </div>
              <h4 className={styles.highlightTitle}>Millions Served</h4>
              <p className={styles.highlightText}>
                Trusted by millions of customers for their payment and communication needs
              </p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <FiGlobe />
              </div>
              <h4 className={styles.highlightTitle}>Global Presence</h4>
              <p className={styles.highlightText}>
                Operating in over 200 countries and territories worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.storySection}>
            <h3 className={styles.sectionTitle}>Our Story</h3>
            <div className={styles.storyContent}>
              <p className={styles.storyParagraph}>
                PING was born from a simple yet powerful idea: to make digital payments accessible, 
                secure, and convenient for everyone. What started as a small operation in 2013 has 
                grown into a global platform that serves millions of customers worldwide.
              </p>
              <p className={styles.storyParagraph}>
                Our mission has always been to bridge the gap between people and essential services. 
                Whether it's mobile recharge, bill payments, or international calling, we've made it 
                our goal to provide reliable solutions that keep families connected and communities thriving.
              </p>
              <p className={styles.storyParagraph}>
                Today, PING stands as a testament to innovation and customer-centric design. We continue 
                to evolve and adapt to the changing needs of our customers, always putting people first 
                in everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>Join the PING Family</h3>
            <p className={styles.ctaText}>
              Experience the difference that comes from over a decade of excellence in digital payments.
            </p>
            <div className={styles.ctaQuote}>
              "PING has transformed how we think about digital payments - making the complex simple and the impossible possible."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


