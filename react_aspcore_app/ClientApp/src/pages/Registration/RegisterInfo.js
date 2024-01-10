import React from 'react';
import styles from './regStyles/Register.module.css';
import { useNavigate } from 'react-router-dom';

function RegisterInfo() {
    const navigate = useNavigate();
  
    const goToRegisterAccount = () => {
        navigate('/registerAccount');
    };

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1>Stichting Accessibility</h1>
                <p>Algemene Informatie</p>

            <form className={styles.form}>
            
            <div className={styles.displayCntr}>

                <div>
                    <label htmlFor="age">Leeftijd:</label>
                    <input type="date" id="age" name="age" required />
                </div>

                <div>
                    <label className={styles.labelFlex} htmlFor="gender">Geslacht:</label>                    
                    <select id="gender" name="gender" required>
                    <option value="male">Man</option>
                    <option value="female">Vrouw</option>
                    <option value="else">Anders</option>
                    <option value="undisclosed">Zeg ik liever niet</option>
                    </select>
                </div>

            </div>

            <div>
                <label htmlFor="disability">Beperking:</label>
                <input type="text" id="disability" name="disability" placeholder="bv: Blind" required />
            </div>

            <button className={styles.registerbtn} type="submit" onClick={() => goToRegisterAccount()}>Volgende</button>
            </form>
            </div>
        </div>
    );
}

export default RegisterInfo;