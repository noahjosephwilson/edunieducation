import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1>Free World-Class Education for Everyone</h1>
            <p>Access premium courses for free. No hidden fees, no subscriptions - just quality education available to all.</p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>Start Learning Free</button>
              <button className={styles.secondaryButton}>Explore Courses</button>
            </div>
          </div>
          <div className={styles.heroVideo}>
            <div className={styles.videoContainer}>
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=360&fit=crop" 
                alt="Modern classroom with technology"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className={styles.peopleSection}>
        <div className={styles.container}>
          <div className={styles.peopleLayout}>
            <div className={styles.singleImage}>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=500&fit=crop" alt="Students learning" />
            </div>
            <div className={styles.peopleContent}>
              <div className={styles.simpleMessage}>
                <h3>Premium Education, Zero Cost</h3>
                <p>Access world-class education from top universities and instructors completely free. No hidden fees, no subscriptions - just quality learning for everyone.</p>
                <p className={styles.subjectNote}>Example subjects include, but not limited to:</p>
                <ul className={styles.bulletPoints}>
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology</li>
                  <li>Computer Science</li>
                  <li>Mathematics</li>
                  <li>SAT, ACT & LSAT Prep</li>
                  <li>English</li>
                  <li>Economics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Start Learning?</h2>
          <p>Join thousands of students and transform your career with Eduni</p>
          <button className={styles.ctaButton}>Get Started Today</button>
        </div>
      </section>
    </div>
  );
}
