import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to <span className={styles.highlight}>Eduni</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Your gateway to quality education and lifelong learning. 
            Discover courses, connect with experts, and unlock your potential.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>
              Explore Courses
            </button>
            <button className={styles.secondaryButton}>
              Learn More
            </button>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.gradientCircle}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Eduni?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📚</div>
              <h3>Expert-Led Courses</h3>
              <p>Learn from industry professionals and certified educators</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Flexible Learning</h3>
              <p>Study at your own pace with 24/7 access to materials</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏆</div>
              <h3>Certified Programs</h3>
              <p>Earn recognized certificates upon completion</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h3>Community Support</h3>
              <p>Connect with fellow learners and mentors</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join thousands of learners who have transformed their careers with Eduni</p>
          <button className={styles.ctaButton}>
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
