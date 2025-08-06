'use client';

import { useState } from 'react';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.contactHeader}>
          <h1>Contact Us</h1>
          <p>Get in touch with our team. We'd love to hear from you!</p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <div className={styles.infoItem}>
              <strong>Email:</strong>
              <p>info@eduni.com</p>
            </div>
            <div className={styles.infoItem}>
              <strong>Phone:</strong>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className={styles.infoItem}>
              <strong>Address:</strong>
              <p>123 Education Street<br />Learning City, LC 12345</p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help you..."
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 