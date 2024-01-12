import React from 'react';
import styles from '../styles/ErrorMessageModal.module.css';

function ErrorMessageModal({ message, onClose }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <p>{message}</p>
                <span className={styles.close} onClick={onClose}>
                    <small>Klik hier om dit bericht te sluiten</small>
                </span>
            </div>
        </div>
    );
}

export default ErrorMessageModal;
