import styles from './Footer.module.scss';

interface FooterProps {
  onBackToTop: () => void;
}

const Footer = ({ onBackToTop }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <button onClick={onBackToTop} className={styles.backToTop}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
          Back to Top
        </button>
        <a href="tel:+18174301059" className={styles.phone}>
          Call or Text (817)-430-1059
        </a>
        <div className={styles.credits}>
          <p>Owned and Operated By R.M.S. Inc.</p>
          <p>
            Website built by{' '}
            <a href="https://www.herndon.dev" target="_blank" rel="noopener noreferrer">
              Tylor Herndon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
