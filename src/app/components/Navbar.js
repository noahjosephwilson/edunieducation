'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <div className={styles.logoSymbol}></div>
            </div>
            <span className={styles.logoText}>Eduni</span>
          </Link>
          
          <div className={styles.navLinks}>
            <Link href="/courses" className={styles.navLink}>
              Courses
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </div>
        </div>
        
        <div className={styles.authSection}>
          <Link href="/login" className={styles.loginButton}>
            Log In
          </Link>
          <Link href="/join-prelist" className={styles.joinButton}>
            Join Prelist
          </Link>
        </div>
      </div>
    </nav>
  );
} 