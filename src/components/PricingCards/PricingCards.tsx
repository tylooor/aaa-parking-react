import styles from './PricingCards.module.scss';

interface PricingCard {
  title: string;
  price: string;
}

const cards: PricingCard[] = [
  { title: 'Boats', price: '$95' },
  { title: "Campers & RV's", price: '$95' },
  { title: 'Trailers', price: '$95' },
];

const PricingCards = () => {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <div key={card.title} className={styles.card}>
          <h2 className={styles.title}>{card.title}</h2>
          <div className={styles.priceWrapper}>
            <span className={styles.label}>Starting at:</span>
            <span className={styles.price}>{card.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
