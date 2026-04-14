import { useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.ctaBar}>
        <div className={styles.ctaContent}>
          <a href="tel:+18174301059" className={styles.phoneLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call or Text (817)-430-1059
          </a>
          <div className={styles.ctaLinks}>
            <a href="mailto:contact@aaaparkingkeller.com" className={styles.emailLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              contact@aaaparkingkeller.com
            </a>
            <a
              href="https://maps.google.com/maps/dir//4557+Keller+Haslet+Rd+Fort+Worth,+TX+76244/@32.9645107,-97.2604743,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x864dd0a94f184ce5:0x5d678f6da810e1a"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapsLink}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Maps
            </a>
          </div>
        </div>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <h1 className={styles.brand}>AAA Parking Keller</h1>
          <button
            className={`${styles.menuToggle} ${mobileMenuOpen ? styles.open : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle contact info"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
          <a href="tel:+18174301059">Call or Text (817)-430-1059</a>
          <a href="mailto:contact@aaaparkingkeller.com">contact@aaaparkingkeller.com</a>
          <a
            href="https://maps.google.com/maps/dir//4557+Keller+Haslet+Rd+Fort+Worth,+TX+76244/@32.9645107,-97.2604743,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x864dd0a94f184ce5:0x5d678f6da810e1a"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
