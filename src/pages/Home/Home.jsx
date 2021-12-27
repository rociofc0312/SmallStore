import React, {useEffect, useState} from 'react';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import ProductCard from '../../components/ProductCard/ProductCard';
import ModalLayout from '../../components/shared/ModalLayout/ModalLayout';
import styles from './Home.module.css';
import About from '../../components/About/About';
import {getRandomTime} from '../../utils/random';

const Home = function Home() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState({});

  const showDetail = (product, title) => {
    setShowModal({show: true, product, title});
  };

  const hideDetail = () => {
    setShowModal({show: false, product: {}, title: ''});
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (response.ok) return response.json();
        return [];
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <h2>Small Store</h2>
        <button
          onClick={() => showDetail(null, 'About Me')}
          className={styles.button__about}
          type='button'>
          About
        </button>
      </div>
      {products.map((product) => (
        <ProductCard
          countdownTime={getRandomTime(1, 500)}
          onDetailClick={showDetail}
          key={product.id}
          product={product}
        />
      ))}
      {showModal.show && (
        <ModalLayout handleClose={hideDetail} show={showModal.show} title={showModal.title}>
          {showModal.product ? <ProductDetail product={showModal.product} /> : <About />}
        </ModalLayout>
      )}
    </div>
  );
};

export default Home;
