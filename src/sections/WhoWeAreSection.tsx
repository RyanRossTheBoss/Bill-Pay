import AnimatedTitle from "@/components/AnimatedTitle";
import { FiSmartphone, FiRefreshCcw, FiPhoneOutgoing, FiFileText, FiGlobe, FiCreditCard, FiCalendar, FiShield, FiZap, FiUsers, FiAward, FiTrendingUp } from "react-icons/fi";
import styles from "./WhoWeAreSection.module.css";

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className={styles.section}>
      <div className={styles.content}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <AnimatedTitle as="h2" className={styles.title} text="What Is UNITY" />
          <p className={styles.lead}>
            A comprehensive platform connecting people through innovative mobile and bill payment services, 
            designed to make your digital life seamless and secure.
          </p>
          <div className={styles.chips}>
            <span className={styles.chip}>Mobile Recharge</span>
            <span className={styles.chip}>Bill Payments</span>
            <span className={styles.chip}>International Calls</span>
            <span className={styles.chip}>24/7 Support</span>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={styles.missionSection}>
          <div className={styles.missionCard}>
            <div className={styles.missionIcon}>
              <FiGlobe size={32} />
            </div>
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <p className={styles.missionText}>
              To bridge the gap between people and essential services by providing reliable, 
              secure, and convenient digital payment solutions that keep families connected 
              and communities thriving.
            </p>
          </div>
        </div>

        {/* Core Services */}
        <div className={styles.servicesOverview}>
          <h3 className={styles.sectionTitle}>Our Core Services</h3>
          <p className={styles.sectionSubtitle}>
            UNITY provides a complete suite of digital payment and communication solutions 
            designed to keep you connected, anywhere in the world.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <FiSmartphone size={24} />
            </div>
            <h4 className={styles.serviceTitle}>Mobile Recharge Services</h4>
            <p className={styles.serviceDescription}>
              Instant mobile top-ups for domestic and international numbers with competitive rates.
            </p>
            <div className={styles.serviceFeatures}>
              <div className={styles.feature}>
                <FiGlobe size={16} />
                <span>Domestic mobile top-ups within the U.S.</span>
              </div>
              <div className={styles.feature}>
                <FiGlobe size={16} />
                <span>International mobile recharge worldwide</span>
              </div>
              <div className={styles.feature}>
                <FiSmartphone size={16} />
                <span>Simple phone number and amount input</span>
              </div>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <FiRefreshCcw size={24} />
            </div>
            <h4 className={styles.serviceTitle}>Scheduled Reloads</h4>
            <p className={styles.serviceDescription}>
              Never worry about running out of credit with our automated recharge system.
            </p>
            <div className={styles.serviceFeatures}>
              <div className={styles.feature}>
                <FiRefreshCcw size={16} />
                <span>Automatic recharges to ensure phones stay funded</span>
              </div>
              <div className={styles.feature}>
                <FiCalendar size={16} />
                <span>Flexible scheduling options</span>
              </div>
              <div className={styles.feature}>
                <FiZap size={16} />
                <span>Instant notifications and confirmations</span>
              </div>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <FiPhoneOutgoing size={24} />
            </div>
            <h4 className={styles.serviceTitle}>International Calling</h4>
            <p className={styles.serviceDescription}>
              Stay connected globally with our affordable international calling solutions.
            </p>
            <div className={styles.serviceFeatures}>
              <div className={styles.feature}>
                <FiPhoneOutgoing size={16} />
                <span>Pin-less prepaid calling plans</span>
              </div>
              <div className={styles.feature}>
                <FiGlobe size={16} />
                <span>Low-cost international calls</span>
              </div>
              <div className={styles.feature}>
                <FiSmartphone size={16} />
                <span>No calling cards or PINs required</span>
              </div>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <FiFileText size={24} />
            </div>
            <h4 className={styles.serviceTitle}>Bill Payment Services</h4>
            <p className={styles.serviceDescription}>
              Manage all your essential bills from one secure, convenient platform.
            </p>
            <div className={styles.serviceFeatures}>
              <div className={styles.feature}>
                <FiCreditCard size={16} />
                <span>Utilities: water, gas, electricity</span>
              </div>
              <div className={styles.feature}>
                <FiCreditCard size={16} />
                <span>Entertainment: cable, internet</span>
              </div>
              <div className={styles.feature}>
                <FiCreditCard size={16} />
                <span>Financial: credit cards, educational fees</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose UNITY */}
        <div className={styles.valueSection}>
          <div className={styles.valueHeader}>
            <h3 className={styles.valueTitle}>Why Choose UNITY?</h3>
            <p className={styles.valueSubtitle}>
              Experience the difference that comes from putting people first in everything we do.
            </p>
          </div>
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiGlobe size={20} />
              </div>
              <h4 className={styles.valueCardTitle}>Global Reach</h4>
              <p className={styles.valueCardText}>
                Connect with loved ones worldwide through our comprehensive international services 
                that span over 200 countries and territories.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiZap size={20} />
              </div>
              <h4 className={styles.valueCardTitle}>Lightning Fast</h4>
              <p className={styles.valueCardText}>
                Instant processing and real-time confirmations ensure your transactions 
                are completed in seconds, not minutes.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiShield size={20} />
              </div>
              <h4 className={styles.valueCardTitle}>Bank-Grade Security</h4>
              <p className={styles.valueCardText}>
                Your data and transactions are protected with enterprise-level encryption 
                and security protocols you can trust.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiUsers size={20} />
              </div>
              <h4 className={styles.valueCardTitle}>24/7 Support</h4>
              <p className={styles.valueCardText}>
                Our dedicated support team is available around the clock to help you 
                with any questions or concerns.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiAward size={20} />
              </div>
              <h4 className={styles.valueCardTitle}>Proven Track Record</h4>
              <p className={styles.valueCardText}>
                Over a decade of excellence serving millions of customers with 
                reliability and trust you can count on.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiTrendingUp size={20} />
              </div>
              <h4 className={styles.valueCardTitle}>Competitive Rates</h4>
              <p className={styles.valueCardText}>
                Enjoy the best rates in the industry with transparent pricing 
                and no hidden fees or surprises.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>Ready to Get Started?</h3>
            <p className={styles.ctaText}>
              Join millions of satisfied customers who trust UNITY for their mobile and bill payment needs.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/pay-here" className={styles.ctaButton}>
                Start Making Payments
              </a>
              <a href="/about-us" className={styles.ctaButtonSecondary}>
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


