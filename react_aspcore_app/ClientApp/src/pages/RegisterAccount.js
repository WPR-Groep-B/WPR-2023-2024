import React from 'react';
import styles from '../styles/Register.module.css';
import { useNavigate } from 'react-router-dom';

function RegisterAccount() {
    const navigate = useNavigate();

    const goToRegisterInfo = () => {
        navigate('/');
    };
    
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1>Stichting Accessibility</h1>
                <p>Gelieve hier uw e-mailadres op te geven en wachtwoord aan te maken</p>

            <form className={styles.form}>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"  placeholder="text@email.com" required />
            </div>

            <div>
                <label htmlFor="password">Wachtwoord:</label>
                <input type="password" id="password" name="password" minlength="12" placeholder="bv: wachtwoord123" required />
            </div>

            <div>
                <label htmlFor="confirmPassword">Bevestig Wachtwoord:</label>                    
                <input type="password" id="confirmPassword" name="confirmPassword" minlength="12" placeholder="Herhaal Wachtwoord" required />
            </div>

            <button className={styles.registerbtn} type="submit" onClick={() => goToRegisterInfo()}>Bevestig</button>
            </form>
            </div>
        </div>
    );
}

export default RegisterAccount;