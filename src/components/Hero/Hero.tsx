import { type PropsWithChildren, useEffect, useRef, useState } from 'react';
import styles from './Hero.module.scss';

const Hero = ({ children }: PropsWithChildren) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.imageWrapper}>
        <img
          src="/images/RV-cover.webp"
          alt="RV parked at AAA Parking Keller storage facility"
          className={`${styles.heroImage} ${isVisible ? styles.visible : ''}`}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.row}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.heading}>
            Welcome to{' '}
            <span className={styles.highlight}>AAA Parking Keller</span>
          </h2>
          <p className={styles.description}>
            AAA Parking is a family owned and operated vehicle storage facility.
            We've been proudly serving the Dallas Fort Worth area for over 30
            years. Located conveniently next to Hwy 377, I-35, and Hwy 114 you
            can quickly get back to what matters. We provide gated uncovered
            storage with 24/7 camera survalence.
          </p>
          <a href="tel:+18174301059" className={styles.ctaButton}>
            Contact Us Today
          </a>
        </div>
        {children && <div className={styles.aside}>{children}</div>}
      </div>
    </section>
  );
};

export default Hero;
