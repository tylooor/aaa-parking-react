import styles from './BusinessInfo.module.scss';

const BusinessInfo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageCol}>
            <img
              src="/images/street_view.webp"
              alt="AAA Parking Keller street view showing the entrance and signage"
            />
          </div>
          <div className={styles.infoCol}>
            <div className={styles.infoGroup}>
              <div className={styles.iconLabel}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <h2>Address</h2>
              </div>
              <a
                href="https://maps.google.com/maps/dir//4557+Keller+Haslet+Rd+Fort+Worth,+TX+76244/@32.9645107,-97.2604743,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x864dd0a94f184ce5:0x5d678f6da810e1a"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.addressLink}
              >
                <p>4557 Keller Haslet Rd</p>
                <p>Fort Worth, TX 76244</p>
              </a>
            </div>
            <div className={styles.infoGroup}>
              <div className={styles.iconLabel}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <h2>Phone</h2>
              </div>
              <a href="tel:+18174301059" className={styles.phoneLink}>
                +1-817-430-1059
              </a>
            </div>
            <div className={styles.divider} />
            <div className={styles.infoGroup}>
              <div className={styles.iconLabel}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <h2>Gate Hours</h2>
              </div>
              <p className={styles.hours}>Monday - Sunday: 6 AM - 9 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
