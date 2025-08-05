'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Eduni</span>
          </Link>
        </div>
        
        <div className={styles.navLinks}>
          <Link href="/courses" className={styles.navLink}>
            Courses
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
          <Link href="/resources" className={styles.navLink}>
            Resources
          </Link>
        </div>
        
        <div className={styles.authSection}>
          <Link href="/login" className={styles.loginButton}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
} 