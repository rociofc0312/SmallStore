import React, {useEffect, useState} from 'react';
import {getTimeFormat} from '../../utils/random';
import styles from './ProductCard.module.css';

const ProductCard = function ProductCard({countdownTime, product, onDetailClick}) {
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(countdownTime);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (timer > 0) setTimer(timer - 1000);
      else if (timer === 0) setDisabled(true);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className={styles.card}>
      {false}
      <div className={styles.card__header}>
        <img className={styles.header__image} src={product.image} alt='item' />
        <h5>{product.title}</h5>
      </div>
      <div className={styles.card__detail}>
        <div>
          <p>{getTimeFormat(timer)}</p>
        </div>
        <button
          onClick={() => onDetailClick(product, 'Product Detail')}
          disabled={disabled}
          className={styles.button__detail}
          type='button'>
          Go to detail
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
