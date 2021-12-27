import React from 'react';
import styles from './ProductDetail.module.css';

const ProductDetail = function ProductDetail({product}) {
  return (
    <div className={styles.modal__content}>
      <div className={styles.modal__section}>
        <img className={styles.modal__img} src={product.image} alt='' />
      </div>
      <div className={styles.modal__section}>
        <h3>{product.title}</h3>
        <small>Category: {product.category}</small>
        <p>{`$${product.price}`}</p>
        <h4>Description</h4>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
