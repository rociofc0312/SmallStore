import React from 'react';
import styles from './ModalLayout.module.css';

const ModalLayout = function ModalLayout({handleClose, title, show, children}) {
  const showHideClassName = show
    ? `${styles.modal} ${styles.modal__container_block}`
    : `${styles.modal} ${styles.modal__container_none}`;

  return (
    <div className={showHideClassName}>
      <div className={styles.modal__container}>
        <div className={styles.modal__header}>
          <h2>{title}</h2>
          <button className={styles.modal__header__close} onClick={handleClose} type='button'>
            X
          </button>
        </div>
        <div className={styles.modal__content}>{children}</div>
      </div>
    </div>
  );
};

export default ModalLayout;
