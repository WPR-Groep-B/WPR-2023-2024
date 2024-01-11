import React from 'react';
import styles from '../styles/Register.module.css';
import { useNavigate } from 'react-router-dom';

function RegisterName() {
    const navigate = useNavigate();
  
    const goToRegisterInfo = () => {
      navigate('/registerInfo');
    };  
    
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1>Stichting Accessibility</h1>
                <p>Gelieve hier uw Voor- en Achternaam op te geven</p>

            <form className={styles.form}>

            <div>
                <label htmlFor="firstName">Voornaam:</label>
                <input type="text" id="firstName" name="firstName" placeholder="Voornaam" required/>
            </div>
            
            <div>
                <label htmlFor="lastName">Achternaam:</label>
                <input type="text" id="lastName" name="lastName" placeholder="Achternaam" required />
            </div>
            
            <button className={styles.registerbtn} type="submit" onClick={() => goToRegisterInfo()}>Volgende</button>
            </form>
            </div>
        </div>
    );
}

export default RegisterName;