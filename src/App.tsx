import { useRef } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import PricingCards from './components/PricingCards/PricingCards';
import BusinessInfo from './components/BusinessInfo/BusinessInfo';
import Footer from './components/Footer/Footer';
import GoogleAnalytics from './components/GoogleAnalytics/GoogleAnalytics';

function App() {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <GoogleAnalytics />
      <div ref={topRef} />
      <Header />
      <main>
        <Hero>
          <PricingCards />
        </Hero>
        <BusinessInfo />
      </main>
      <Footer onBackToTop={scrollToTop} />
    </>
  );
}

export default App;
