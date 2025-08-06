'use client';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';
import { auth } from '../../lib/firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (showLoginModal) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    };
  }, [showLoginModal]);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLoginModal(true);
  };

  const handleCoursesClick = (e) => {
    e.preventDefault();
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      handleCloseModal();
      // You can add success notification here
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      handleCloseModal();
      // You can add success notification here
    } catch (error) {
      setError('Google sign-in failed. Please try again.');
      console.error('Google login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
              <Link href="/courses" className={styles.navLink} onClick={handleCoursesClick}>Courses</Link>
            </div>
          </div>
          <div className={styles.authSection}>
            <Link href="/login" className={styles.loginButton} onClick={handleLoginClick}>
              Log In
            </Link>
            <Link href="/join-prelist" className={styles.joinButton}>
              Join Prelist
            </Link>
          </div>
        </div>
      </nav>

      {showLoginModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.loginModal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>×</button>
            <h2>Log In</h2>
            {error && <div className={styles.errorMessage}>{error}</div>}
            <form className={styles.loginForm} onSubmit={handleEmailLogin}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <button type="submit" className={styles.submitButton} disabled={loading}>
                {loading ? 'Logging In...' : 'Log In'}
              </button>
            </form>
            <div className={styles.divider}>
              <span>or</span>
            </div>
            <button 
              className={styles.googleButton} 
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {loading ? 'Signing In...' : 'Continue with Google'}
            </button>
          </div>
        </div>
              )}
      </>
    );
  } 