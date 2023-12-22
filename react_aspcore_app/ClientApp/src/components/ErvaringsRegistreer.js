import React from 'react';
import styles from '../styles/Register.module.css';

function ErvaringRegister() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1>Ervaringsdeskundige registeer pagina</h1>
            <form className={styles.form}>
                <div>
                    <label htmlFor="firstName">Voornaam:</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Vooraam" required />
                </div>

                <div>
                    <label htmlFor="lastName">Achternaam:</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Achternaam" required />
                </div>

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

                <div>
                    <label htmlFor="age">Leeftijd:</label>
                    <input type="date" id="age" name="age" required />
                </div>

                <div>
                    Geslacht:
                    <br />
                    <div className={styles.radiogroup}>
                        <label htmlFor="male">Man:</label>
                        <input type="radio" id="gender" name="gender" value="male" required />
                    </div>
                    <div className={styles.radiogroup}>
                        <label htmlFor="female">Vrouw:</label>
                        <input type="radio" id="gender" name="gender" value="female" required />
                    </div>
                    <div className={styles.radiogroup}>
                        <label htmlFor="else">Anders:</label>
                        <input type="radio" id="gender" name="gender" value="else" required />
                    </div>
                    <div className={styles.radiogroup}>
                        <label htmlFor="undisclosed">Zeg ik liever niet:</label>
                        <input type="radio" id="gender" name="gender" value="undisclosed" required />
                    </div>
                </div>

                <div>
                    <label htmlFor="disability">Beperking:</label>
                    <input type="text" id="disability" name="disability" placeholder="bv: Blind" required />
                </div>

                <hr />

                <button className={styles.registerbtn} type="submit">Registreer</button>
            </form>
            </div>
        </div>
    );
}

export default ErvaringRegister;